import { Component, OnInit } from '@angular/core';
import { Observable, tap, map, switchMap, filter, concat } from 'rxjs';
import { HomeService } from '../../home/home.service';
import { ProstheticsService } from './prosthetics.service';

@Component({
  selector: 'app-prosthetics',
  templateUrl: './prosthetics.component.html',
  styleUrls: ['./prosthetics.component.scss'],
})
export class ProstheticsComponent implements OnInit {
  isEn = document.dir == 'ltr' ? true : false;
  Services$!: Observable<any>;
  ProstheticsTypes$!: Observable<any>;
  Prosthetics$!: Observable<any>;
  prosthetics: any[] = [];
  constructor(
    private _homeService: HomeService,
    private _prostheticsService: ProstheticsService
  ) {}

  ngOnInit(): void {

    this.Services$ = this._homeService.Selector$('Services');
    this._prostheticsService.getProstheticsTypes();
    this._prostheticsService.getProsthetics();
    this.Prosthetics$ = this._prostheticsService.Selector$('prosthetics').pipe(
      map((val: any) => {
        return val?.filter((item: any) => {
          return item.IsActive;
        });
      }),
      filter((val:any)=>val.length),
      map((val: any) => {
        return (
          val.map((res: any) => {
            return {
              ...res,
              ID: 0,
              ParentID: res.ProstheticsTypeID,
            };
          })

        );
      }),
      switchMap((prosthetic: any) => {
        return (this.ProstheticsTypes$ = this._prostheticsService
          .Selector$('prostheticsTypes')
          .pipe(
            map((val: any) => {
              return val?.filter((item: any) => {
                return item.IsActive;
              });
            }),
            map((prostheticsType: any) => {
              return this.convertToTree(prostheticsType.concat(prosthetic));
            }),


          ));
      })
    );
  }





  convertToTree(list: any[]) {
    // });
    var map = [],
      node,
      roots = [],
      i;
    for (i = 0; i < list.length; i += 1) {
      map[list[i]['ID']] = i; // initialize the map
      list[i].key = list[i]['ID'];
      list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
      node = list[i];
      if (
        ((node['ParentID'] && node['ParentID'] != '0') ||
          node['ParentID'] == 0) &&
        node['ParentID'] !== '#'
      ) {
        // if you have dangling branches check that map[node.parentId] exists
        list[map[node['ParentID']]]?.children.push(node);
      } else {
        roots.push(node);
      }
    }

    return roots;
  }
}

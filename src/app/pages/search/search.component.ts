import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { Observable, map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-ads',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  SearchItems$!: Observable<any>;
  codes$!: Observable<any>;
   key:any
  constructor(private _searchService: SearchService , private activatedRoute:ActivatedRoute , private router:Router) {

   }

  ngOnInit(): void {
    this.key = this.activatedRoute.paramMap.subscribe((value=>{
      this._searchService.getSearchItems(value.get('key'));
      this.SearchItems$ = this._searchService.Selector$('searchItems');

    }))

  }

  getItem(item:any){
    console.log("item", item  );
    if(item.Type == 1){
      if(item.MediaSectionID != 3){
        this.router.navigate(['mix-details/'+item.ID])
      }else{
        this.router.navigate(['/media-center/video/video-main'],{
          queryParams:{
          path: item?.VideoPath
          }
        });
      }
    } else if(item.Type == 2){
    console.log("item :" , item)
    this.router.navigate(['ads-details/'+item.ID])
    }else{
         if(item.ID ==1){
          this.router.navigate(['sections/medical-rehabilitation'])
         }
         else if(item.ID ==2){
          this.router.navigate(['sections/prosthetics'])

         }
         else if(item.ID ==3){
          this.router.navigate(['sections/hearing-balance'])

         }
         else if(item.ID ==4){
          this.router.navigate(['sections/outpatient-clinics'])
         }
         else {
          this.router.navigate(['sections/supportive'])
         }

    }
   }


}


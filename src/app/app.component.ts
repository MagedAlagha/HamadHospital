import { Component, OnInit } from '@angular/core';
import { FooterService } from './pages/footer/footer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HamadHospital';

constructor(private _footerService:FooterService){

}
  ngOnInit(): void {
    this._footerService.getStats();
  }
}

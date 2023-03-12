import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  standalone: true,
  imports:[CommonModule ],
  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.scss'],
})
export class StoriesHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

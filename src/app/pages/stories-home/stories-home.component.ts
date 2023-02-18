import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports:[CommonModule],
  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.scss'],
})
export class StoriesHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

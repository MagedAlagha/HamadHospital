import { Component, OnInit , HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {
  @HostListener('window:scroll', ['$event'])
  onScroll(event:any) {
    this.parallaxEffect();
  }
ngOnInit(): void {

}
  constructor(private el: ElementRef) { }

  parallaxEffect() {
    const elem = this.el.nativeElement.querySelector('.parallax');
    const distanceFromTop = elem.getBoundingClientRect().top;
    const speed = 3;

    elem.style.transform = `translateY(${distanceFromTop / speed}px)`;
  }
}

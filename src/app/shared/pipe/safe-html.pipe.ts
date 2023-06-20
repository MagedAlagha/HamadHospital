import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeHtml',
  standalone:true
})
export class SafeHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): SafeHtml {
    const doc = new DOMParser().parseFromString(html, 'text/html');

    const oembedElements = doc.querySelectorAll('oembed');
    oembedElements.forEach((el:any) => {
      let url = el.getAttribute('url');
      // Transform the YouTube URL into an embeddable format
      if(url.includes('https://youtu.be/')) {
        const videoId = url.split('https://youtu.be/')[1];
        url = 'https://www.youtube.com/embed/' + videoId;
      }

      const iframe = doc.createElement('iframe');
      iframe.setAttribute('src', url);
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
      iframe.setAttribute('allowfullscreen', '');
      iframe.setAttribute('width', '560');  // You can change these to match your needs
      iframe.setAttribute('height', '315');  // You can change these to match your needs
      el.parentNode.replaceChild(iframe, el);
    });

    return this.sanitizer.bypassSecurityTrustHtml(doc.body.innerHTML);
  }
}

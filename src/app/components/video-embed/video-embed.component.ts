import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key!: string;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {}

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

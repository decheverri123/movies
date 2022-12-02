import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.css'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key!: string;
  videoUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSafeUrl(
          `https://www.youtube.com/embed/${this.key}`
        );
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl(
          `https://www.vimeo.com/embed/${this.key}`
        );
        break;
      default:
        this.videoUrl = this.getSafeUrl(
          `https://www.youtube.com/embed/${this.key}`
        );
    }
  }

  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

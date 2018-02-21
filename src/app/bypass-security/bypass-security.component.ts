import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'app-bypass-security',
  templateUrl: './bypass-security.component.html',
  styleUrls: ['./bypass-security.component.css']
})
export class BypassSecurityComponent implements OnInit {

  dangerousUrl: string;
  dangerousHtmlTag: string;
  dangerousVideoUrl: string;
  trustedHtmlTag: SafeHtml;
  trustedUrl: SafeUrl;
  videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.dangerousUrl = 'javascript:alert("Hi there")';
    this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
    this.dangerousHtmlTag = 'javascript:alert("It works")';
    this.trustedHtmlTag = sanitizer.bypassSecurityTrustHtml(this.dangerousHtmlTag);

    this.dangerousVideoUrl = 'https://www.youtube.com/embed/';
    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl);
  }
  ngOnInit() {
  }
}

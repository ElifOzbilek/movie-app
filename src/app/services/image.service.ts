import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private sanitizer: DomSanitizer) { }
  getImageUrl(path: string): SafeResourceUrl{
    const url= ` https://image.tmdb.org/t/p/w500${path}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

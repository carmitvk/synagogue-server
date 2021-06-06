import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ImagesLoader } from 'src/app/services/images-loader.service';

@Component({
  selector: 'image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements AfterViewInit {
  @Input() imageName: string;
  @ViewChild('imgContainer') imgContainer: ElementRef;

  constructor(public imagesLoader: ImagesLoader) { }
  
  ngAfterViewInit(): void {
    let img: HTMLImageElement = this.imagesLoader.getImage(this.imageName);
    this.imgContainer.nativeElement.appendChild(img);
  }


}

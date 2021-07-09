import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { pairwise, startWith, tap } from 'rxjs/operators';
import { ImagesLoader } from 'src/app/services/images-loader.service';

@Component({
  selector: 'image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.scss']
})
export class ImageContainerComponent implements AfterViewInit {
  public displayedImg: BehaviorSubject<string> = new BehaviorSubject<string>('');

  @Input() set imageName(name: string) {
    this.displayedImg.next(name);
  }
  @ViewChild('imgContainer') imgContainer: ElementRef;

  constructor(public imagesLoader: ImagesLoader) { }
  
  ngAfterViewInit(): void {
    this.displayedImg.pipe(
      tap((newImgName: string) => {
        let newImg: HTMLImageElement = this.imagesLoader.getImage(newImgName);
        let containerNode = this.imgContainer.nativeElement;
        while (containerNode.firstChild) {
          containerNode.removeChild(containerNode.firstChild);
        }
        containerNode.appendChild(newImg);
      })
    ).subscribe();
   
  }


}

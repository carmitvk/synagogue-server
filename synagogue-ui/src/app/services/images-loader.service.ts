import { Injectable } from '@angular/core';
const ASSET_PATH: string = './../../assets/imgs/';

@Injectable({
  providedIn: 'root',
})
export class ImagesLoader {
  private imageNames: Array<string> = [
    'barley2.jpg',
    'keep-clean2.png',
    'klaf2.jpg',
    'talk-tfila.gif',
    'mishkan.JPG',
    'passover2.jpg',
    'yam-soof1.webp',
    'yam-soof2.webp',
  ];

  private images: { [key: string]: HTMLImageElement } = {};

  constructor() {
    this.initImages();
  }

  private initImages(): void {
    this.imageNames.forEach((item: string) => {
      let img: HTMLImageElement = document.createElement('img');
      img.src = ASSET_PATH + item;
      img.className = 'img-class';
      this.images[item] = img;
    })
  }

  public getImage(imgName: string): HTMLImageElement {
    return this.images[imgName].cloneNode(true) as HTMLImageElement;

  }

}

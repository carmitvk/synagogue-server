import { Injectable } from '@angular/core';
const ASSET_PATH: string = './../../assets/imgs/';

@Injectable({
  providedIn: 'root',
})
export class ImagesLoader {
  private imageNames: Array<string> = [
    'barley2.jpg',
    'candle-book.gif',
    'clean1.gif',
    'clean4.jpg',
    'keep-clean.jpg',
    'klaf2.jpg',
    'talk-tfila-gif.gif',
    'talk-tfila.png',
    'talk-tfila2y2.png',
    'candle-big.webp',
    'candle-small.gif'
  ];

  private images: {[key: string]: HTMLImageElement} = {};

  constructor(){
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

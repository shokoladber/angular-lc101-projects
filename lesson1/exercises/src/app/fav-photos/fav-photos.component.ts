import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos are so Cool';
  image1 = 'https://images.pexels.com/photos/1052150/pexels-photo-1052150.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  image2 = 'https://image.shutterstock.com/image-photo/good-night-sleep-well-mixed-600w-495349684.jpg';
  image3 = 'https://cdn.vox-cdn.com/thumbor/d1LK-lPd8r7dKXyPdCD0oXwUcLg=/0x0:1280x536/920x613/filters:focal(538x166:742x370):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47738175/dinotrexes.0.jpg';

  constructor() { }

  ngOnInit() {
  }

}
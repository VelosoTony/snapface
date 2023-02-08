import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap;

  // title!: string;
  // description!: string;
  // createDate!: Date;
  // snaps!: number;
  // imageUrl!: string;
  buttonText!: string;

  ngOnInit(){
    // this.title = 'Tom et Chloé';
    // this.description = 'Les Super-Cuistos !';
    // this.createDate = new Date();
    // this.snaps = 5;
    // this.imageUrl =  'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.buttonText = "Oh snap!";
  }

  onSnap(){
    if (this.buttonText === "Oh snap!") {
      this.faceSnap.snaps++;
      this.buttonText = "Oops, un Snap!";
    } else {
      this.faceSnap.snaps--;
      this.buttonText = "Oh snap!";
    }
  }


}

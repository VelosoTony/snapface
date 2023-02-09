import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit{

  faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private FaceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {

  }

  ngOnInit(){

    this.buttonText = "Oh snap!";
    // mettre + fait un typecast de string vers int
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.FaceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(){
    if (this.buttonText === "Oh snap!") {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, un Snap!";
    } else {
      this.FaceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Oh snap!";
    }
  }

}

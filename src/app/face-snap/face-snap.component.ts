import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {


  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private FaceSnapsService: FaceSnapsService,
              private router: Router) {

  }

  ngOnInit(){

    this.buttonText = "Oh snap!";
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

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
}
}

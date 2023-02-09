import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from "@angular/core";

 @Injectable({
  providedIn: 'root'
 })

export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title : 'Tom et Chloé',
      description : 'Les Super-mini-Cuistos',
      imageUrl : 'assets/tom_chloe_cuistos.jpg',
      createdDate : new Date(),
      snaps : 159
    },

    {
      id: 2,
      title : 'Tour Eiffel',
      description : 'Quel monument!',
      imageUrl : 'assets/tour_eiffel.jpeg',
      createdDate : new Date(),
      snaps : 90,
      Location : "Paris, France"
    },

    {
      id: 3,
      title : 'Licorne',
      description : 'Un animal fantastique!',
      imageUrl : 'assets/licorne.jpg',
      createdDate : new Date(),
      snaps : 255,
      Location : "Paris, France"
    },

    {
      id: 4,
      title : 'Archibald',
      description : 'Il est tout mignons',
      imageUrl : 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate : new Date(),
      snaps : 0,
      Location : "Paris, France"
    }
    ]

    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id == faceSnapId);
      if (!faceSnap) {
        throw new Error('FaceSnap not found!');
      } else {
        return faceSnap;
      }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
    }

}



export class FaceSnap {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;


  constructor(title: string, description: string, imageUrl: string, createDate: Date, snaps: number) {
    this.title = title;
    this.description =  description;
    this.imageUrl = imageUrl;
    this.createDate = createDate;
    this.snaps = snaps;

  }

}




/* raccourci TypeScript
alternative d'initialisation des propriétés par les arguments passés au constructor
grâce au modificateur "public" dans le constructor.

export class FaceSnapComponent {
  title!: string;
  description!: string;
  createDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;
*/

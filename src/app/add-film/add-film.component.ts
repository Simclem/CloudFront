import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css']
})
export class AddFilmComponent  {

  constructor(
    public dialogRef: MatDialogRef<AddFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddFilmComponent) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}



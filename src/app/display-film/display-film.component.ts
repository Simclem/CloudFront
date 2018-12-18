import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-display-film',
  templateUrl: './display-film.component.html',
  styleUrls: ['./display-film.component.css']
})
export class DisplayFilmComponent implements OnInit {

  idFilm: number;

  constructor(public dialogRef: MatDialogRef<DisplayFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.idFilm = data['idFilm'];
    }

  ngOnInit() {
  }

}

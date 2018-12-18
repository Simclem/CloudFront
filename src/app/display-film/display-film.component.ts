import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {TableFilmService} from './display-film.service';
@Component({
  selector: 'app-display-film',
  templateUrl: './display-film.component.html',
  styleUrls: ['./display-film.component.css'],
  providers: [TableFilmService]
})
export class DisplayFilmComponent implements OnInit {

  backEndLocation: string;
  idFilm: number;
  name: string;
  description: string;
  mark: number;
  year: number;
  comment: string;
  constructor(public dialogRef: MatDialogRef<DisplayFilmComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public service: TableFilmService) {
      this.idFilm = data['idFilm'];
  }

  ngOnInit() {
    this.initConfig();
  }
  initConfig(): void {
    this.service.getConfig().subscribe((data: any) => {
      this.backEndLocation = data['calledURL'];
      console.log(this.backEndLocation + '/movie?');
      this.service.getFilmById(this.idFilm , this.backEndLocation + '/movie?').subscribe((data: any) => {
        this.idFilm = data.id;
        this.name = data.name;
        this.description = data.description;
        this.mark = data.mark;
        this.year = data.year;
        this.comment = data.comment;
        console.log(data);
      });
    });
  }

}

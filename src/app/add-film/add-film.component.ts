import {Component, Inject, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { TableFilmService } from './add-film.service';
@Component({
  selector: 'app-add-film',
  templateUrl: './add-film.component.html',
  styleUrls: ['./add-film.component.css'],
  providers: [TableFilmService]
})
export class AddFilmComponent implements OnInit  {

  constructor(
    private service: TableFilmService,
    public dialogRef: MatDialogRef<AddFilmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddFilmComponent
  ) { }
  name: string;
  description: string;
  mark: number;
  year: number;
  comment: string;
  backEndLocation: string;
  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit () {
    this.initConfig();
  }

  sendData() {
    this.service.sendData(
      this.backEndLocation + '/addMovie',
      this.name,
      this.description,
      this.mark,
      this.year,
      this.comment)
      .subscribe((data: any) => {
      console.log(data);
    })
  }

  initConfig(): void {
    this.service.getConfig().subscribe((data: any) => {
      this.backEndLocation = data['calledURL'];
    });
  }
}



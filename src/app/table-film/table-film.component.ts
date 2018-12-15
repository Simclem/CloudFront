import { Component, OnInit, ViewChild } from '@angular/core';
import { TableFilmService } from './table-film.service';
import { MatPaginator, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Film } from '../class/film';
import { AddFilmComponent } from '../add-film/add-film.component';

@Component({
  selector: 'app-table-film',
  templateUrl: './table-film.component.html',
  styleUrls: ['./table-film.component.css'],
  providers: [TableFilmService]
})
export class TableFilmComponent implements OnInit {

  constructor(private service: TableFilmService, public dialog: MatDialog) { }

  backEndLocation: string;
  tableFilm: Film[];
  displayedColumns: string[] = ['id', 'name', 'description', 'mark'];
  dataSource: MatTableDataSource<Film>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.initConfig();

  }

  initConfig(): void {
    this.service.getConfig().subscribe((data: any) => {
      this.backEndLocation = data['calledURL'];
      this.initTableFilm();
    });
  }
  initTableFilm(): void {
    this.service.getData(this.backEndLocation + '/movie').subscribe((data: any) => {
      this.tableFilm = data['list'];
      this.dataSource = new MatTableDataSource<Film>(this.tableFilm);
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddFilmComponent, {
      width: '250px',
      // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}


import { Component, OnInit, ViewChild } from '@angular/core';
import { TableFilmService } from './table-film.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Film } from '../class/film';

@Component({
  selector: 'app-table-film',
  templateUrl: './table-film.component.html',
  styleUrls: ['./table-film.component.css'],
  providers: [TableFilmService]
})
export class TableFilmComponent implements OnInit {

  constructor(private service: TableFilmService) { }

  backEndLocation: string;
  tableFilm: Film[];
  displayedColumns: string[] = ['id', 'name', 'description', 'mark'];
  dataSource = new MatTableDataSource<Film>(this.tableFilm);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.initConfig();
    this.dataSource.paginator = this.paginator;

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

    });
  }

}


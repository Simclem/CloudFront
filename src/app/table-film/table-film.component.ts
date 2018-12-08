import { Component, OnInit } from '@angular/core';
import { TableFilmService } from './table-film.service';

@Component({
  selector: 'app-table-film',
  templateUrl: './table-film.component.html',
  styleUrls: ['./table-film.component.css'],
  providers: [TableFilmService]
})
export class TableFilmComponent implements OnInit {

  constructor(private service: TableFilmService) { }

  backEndLocation: string;
  datbleFilm: any;

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
      console.log(data);
    });
  }

}

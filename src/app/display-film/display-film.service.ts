import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../class/film';

@Injectable()
export class TableFilmService {
    constructor(private http: HttpClient) { }

    configUrl = 'assets/config.json';


    getConfig() {
        return this.http.get(this.configUrl);
    }
    getFilmById(id: number, configUrl: string): any {
        return this.http.get(configUrl + 'id=' + id);
    }
}

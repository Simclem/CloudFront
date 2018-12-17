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

    sendData(sendUrl: string, Name: string, Description: string, Mark: number, Year: number, CommentFilm: string ): any {
        const newFilm:  Film = {
            id: null,
            name: Name,
            description: Description,
            mark: Mark,
            year: Year,
            comment: CommentFilm,
        };
        return this.http.post(sendUrl, newFilm);
    }
}

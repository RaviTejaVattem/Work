import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NeoResponse, NeoByDate } from '../models/neo-model';

@Injectable()
export class SpaceDataService {

  constructor(private _http: HttpClient) { }

  getNeoData(from: string, to: String): Observable<NeoByDate> {
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${from}&end_date=${to}&api_key=DZDhDctSxJcOqUDJvfBo3l2hlQ89gTN5SAmjod0f`;

    return this._http.get(url).pipe(
      map((res: NeoResponse) => {
        return res.near_earth_objects;
      })
    )
  }
}
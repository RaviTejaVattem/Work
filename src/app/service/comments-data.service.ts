import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Comments } from '../models/comments-model';

@Injectable()
export class CommentsDataService {

  constructor(private _http: HttpClient) { }

  getCommentsData(): Observable<Comments[]> {
    const url = "https://jsonplaceholder.typicode.com/comments";
    return this._http.get(url).pipe(
      map((res: Comments[]) => {
        return res;
      })
    )
  }
}
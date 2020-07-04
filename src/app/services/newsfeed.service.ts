import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { NewsFeedModel } from '../interfaces/news.feed.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  private newsFeedList: BehaviorSubject<NewsFeedModel> = new BehaviorSubject<NewsFeedModel>(null);
  newsFeedList$: Observable<NewsFeedModel> = this.newsFeedList.asObservable();

  constructor(private http: HttpClient) { }

  getNewsFeed(tags: string[], pageNo: string): Observable<NewsFeedModel> {
    const url = 'https://hn.algolia.com/api/v1/search';
    const httpParams = new HttpParams().set('tags', tags.join(',')).set('page', pageNo);

    return this.http.get<NewsFeedModel>(url, { params: httpParams }).
      pipe(
        tap(data => this.newsFeedList.next(data))
      );
  }

  deleteRow(newsFeedItem): void {
    const list = this.newsFeedList.value;
    const itemIndex = list.hits.indexOf(newsFeedItem);

    if (itemIndex !== -1) {
      list.hits.splice(itemIndex, 1);
      this.newsFeedList.next(list);
    }
  }
}

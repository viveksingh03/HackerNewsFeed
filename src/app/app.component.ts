import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from './services/newsfeed.service';
import { NewsFeedModel, Hits } from './interfaces/news.feed.model';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  newsFeedData: NewsFeedModel;
  pageNo: string;

  constructor(
    private location: Location,
    private newsfeedService: NewsfeedService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.pageNo = '1';
  }

  ngOnInit(): void {
    const pageNo = this.activatedRoute.snapshot.params;
    const asdasd = this.router;
    this.newsfeedService.getNewsFeed(['front_page'], '').subscribe();

    this.newsfeedService.newsFeedList$.subscribe(data => {
      this.newsFeedData = data;

      this.updateUpVotes();
    });
  }

  private updateUpVotes(): void {
    if (localStorage.length > 0 && this.newsFeedData !== null) {
      this.newsFeedData.hits.forEach(hit => {
        const currentObject = localStorage.getItem(hit.objectID);
        if (localStorage.getItem(hit.objectID) !== null) {
          hit.points = Number(currentObject);
        }
      });
    }
  }

  hideNewsRow(newsFeedItem: NewsFeedModel): void {
    this.newsfeedService.deleteRow(newsFeedItem);
  }

  upVoteNews(item: Hits): void {
    if (localStorage.getItem(item.objectID) !== null) {
      const currentCount = Number(localStorage.getItem(item.objectID));
      localStorage.setItem(item.objectID, String(currentCount + 1));
    } else {
      localStorage.setItem(item.objectID, String(item.points + 1));
    }
    item.points += 1;
  }

  nextPage(): void {
    const currentPage = this.newsFeedData.page;
    this.newsfeedService.getNewsFeed(['story'], String(currentPage + 1)).subscribe(() =>
      this.location.replaceState(`?page=${currentPage + 1}`));
  }

  previousPage(): void {
    const currentPage = this.newsFeedData.page;
    if (currentPage > 1) {
      this.newsfeedService.getNewsFeed(['story'], String(currentPage - 1)).subscribe();
      this.location.replaceState(`?page=${currentPage - 1}`);
    }
  }
}

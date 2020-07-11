import { Component, OnInit } from '@angular/core';
import { NewsfeedService } from './services/newsfeed.service';
import { NewsFeedModel, Hits } from './interfaces/news.feed.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  newsFeedData: NewsFeedModel;

  chartType: string;
  chartData: Array<Array<any>>;
  columnNames: Array<string>;
  options: any;
  width: number;
  height: number;

  constructor(
    private location: Location,
    private newsfeedService: NewsfeedService,
  ) {

    this.chartType = 'LineChart';
    this.chartData = Array<Array<any>>();
    this.columnNames = ['Id', 'Votes'];
    this.options = {
      hAxis: {
        title: 'ID'
      },
      vAxis: {
        title: 'Votes'
      },
      pointSize: 5
    };
    this.width = 1500;
    this.height = 400;

  }

  ngOnInit(): void {
    this.newsfeedService.getNewsFeed(['front_page'], '').subscribe();

    this.newsfeedService.newsFeedList$.subscribe(data => {
      this.newsFeedData = data;

      if (this.newsFeedData !== null) {
        this.updateUpVotes();
        this.populateChartData();
      }
    });
  }

  updateUpVotes(): void {
    if (localStorage.length > 0) {
      this.newsFeedData.hits.forEach(hit => {
        const currentObject = localStorage.getItem(hit.objectID);
        if (localStorage.getItem(hit.objectID) !== null) {
          hit.points = Number(currentObject);
        }
      });
    }
  }

  populateChartData(): void {
    this.chartData = Array<Array<any>>();
    this.newsFeedData.hits.forEach(hit => {
      this.chartData.push([String(hit.objectID), hit.points]);
    });
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
    this.populateChartData();
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

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsfeedService } from './services/newsfeed.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { DomainNamePipe } from './pipes/domain-name.pipe';
import { DynamicClassPipe } from './pipes/dynamic-class.pipe';
import { GetHoursPipe } from './pipes/get-hours.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        GoogleChartsModule
      ],
      declarations: [
        AppComponent,
        DomainNamePipe,
        DynamicClassPipe,
        GetHoursPipe
      ],
      providers: [
        NewsfeedService
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'HackerNewsFeed'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('HackerNewsFeed');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('HackerNewsFeed app is running!');
  // });
});

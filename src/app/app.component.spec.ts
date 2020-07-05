import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsfeedService } from './services/newsfeed.service';
import { GoogleChartsModule } from 'angular-google-charts';
import { DomainNamePipe } from './pipes/domain-name.pipe';
import { DynamicClassPipe } from './pipes/dynamic-class.pipe';
import { GetHoursPipe } from './pipes/get-hours.pipe';
import { By } from '@angular/platform-browser';
import { NewsfeedServiceMock } from './mocks/news.feed.service.mock';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

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
        {
          provide: NewsfeedService,
          useClass: NewsfeedServiceMock
        }
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('news feed data should be loaded.', () => {
    expect(component.newsFeedData).toBeTruthy();
  });

  it('should click on upvote and upVoteNews should be called', () => {
    spyOn(component, 'upVoteNews').and.callThrough();

    const el = fixture.debugElement.query(By.css('#upvoteImg')).nativeElement.click();
    fixture.detectChanges();

    expect(component.upVoteNews).toHaveBeenCalled();
  });

  it('should click on hide and method should be called', () => {
    spyOn(component, 'hideNewsRow').and.callThrough();

    const el = fixture.debugElement.query(By.css('#hideNews')).nativeElement.click();
    fixture.detectChanges();

    expect(component.hideNewsRow).toHaveBeenCalled();
  });

});



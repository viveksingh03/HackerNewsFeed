import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DomainNamePipe } from './pipes/domain-name.pipe';
import { DynamicClassPipe } from './pipes/dynamic-class.pipe';
import { GetHoursPipe } from './pipes/get-hours.pipe';
import { NewsfeedService } from './services/newsfeed.service';

@NgModule({
  declarations: [
    AppComponent,
    DomainNamePipe,
    DynamicClassPipe,
    GetHoursPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [NewsfeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }

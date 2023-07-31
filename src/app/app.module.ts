import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { EndPointsService } from './home/services/end-points.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    AutocompleteLibModule,
    HttpClientModule
  ],
  providers: [
     //Load json Files on startup
     {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [EndPointsService],
      useFactory: (endpointsService: EndPointsService) => {
        return () => {
          return endpointsService.loadEndPoints();
        };
      },
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

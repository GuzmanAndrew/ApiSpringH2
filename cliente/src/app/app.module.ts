import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { ServiceService } from '../app/Service/service.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { PersonListComponent } from './components/person-list/person-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PersonFormComponent,
    PersonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

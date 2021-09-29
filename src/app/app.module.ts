import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { CustomPipe } from './custom.pipe';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
const routes = RouterModule.forRoot([
  { path: 'userform', component: UserformComponent },
  { path: '', component: HomeComponent }
])
//decorator
@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    CustomPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

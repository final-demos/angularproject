import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { UserformComponent } from './userform/userform.component';
import { CustomPipe } from './custom.pipe';
//decorator
@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

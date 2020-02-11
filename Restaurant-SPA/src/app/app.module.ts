import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HomeComponent } from './home/home.component';
import { FormsModule} from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { RegisterComponent } from './register/register.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

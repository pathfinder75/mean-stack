import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FlatComponent } from './flat/flat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MessageService } from './message.service';
import { SensorComponent } from './flat/sensor/sensor.component';
import { HeaderComponent } from './header/header.component';
import { MessageComponent } from './message/message.component';
import { AppRoutingModule } from './app-routing.module';
import { UiModule } from './ui/ui.module';
import { RouterModule } from '@angular/router';
import { ServerService } from './server.service';
import { FormsComponent } from "./register/forms.component";

@NgModule({
  declarations: [
    AppComponent,
    FlatComponent,
    SensorComponent,
    HeaderComponent,
    MessageComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    UiModule,
    RouterModule
  ],
  providers: [MessageService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

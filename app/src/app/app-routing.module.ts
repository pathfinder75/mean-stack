import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { FlatComponent } from './flat/flat.component';
import { FormsComponent } from "./register/forms.component";
import { MessageComponent } from "./message/message.component";

export const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: FlatComponent },
    { path: 'flat', component: FlatComponent },
    { path: 'info', component: FlatComponent },
    { path: 'register', component: FormsComponent},
    { path: 'message', component: MessageComponent}
  ]
  @NgModule({
    imports: [
      RouterModule.forRoot(appRoutes)
    ],
    exports: [ RouterModule ],
  })
  export class AppRoutingModule { }
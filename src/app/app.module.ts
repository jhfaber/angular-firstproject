import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MiComp1Component } from './mi-comp1/mi-comp1.component';
import { MiCompt2Component } from './mi-compt2/mi-compt2.component';

// For use two-way binding.
import {FormsModule} from '@angular/forms';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComp1Component,
    MiCompt2Component,
    AComponent,
    BComponent
  ],
  imports: [
    BrowserModule,
    //For the two-way binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

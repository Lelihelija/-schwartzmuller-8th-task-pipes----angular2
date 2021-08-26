import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SortPipePipe } from './pipes/sort-pipe.pipe';
import { ReversePipePipe } from './pipes/reverse-pipe.pipe';
import { ReverseArrayPipe } from './pipes/reverse-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SortPipePipe,
    ReversePipePipe,
    ReverseArrayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [ReversePipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

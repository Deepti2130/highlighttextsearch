import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlighttextComponent } from './shared/component/highlighttext/highlighttext.component';
import { HighlighttextserachingDirective } from './shared/directive/highlighttextseraching.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HighlighttextComponent,
    HighlighttextserachingDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

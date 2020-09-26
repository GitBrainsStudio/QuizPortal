import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './Pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizReaderComponent } from './Shared/quiz-reader/quiz-reader.component';
import { QuizCollectionComponent } from './Shared/quiz-collection/quiz-collection.component';
import { QuizComponent } from './Pages/quiz/quiz.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './Layout/footer/footer.component';
import { TopMenuComponent } from './Layout/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizReaderComponent,
    QuizCollectionComponent,
    QuizComponent,
    FooterComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

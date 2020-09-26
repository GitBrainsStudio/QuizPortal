import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { QuizComponent } from './Pages/quiz/quiz.component';

const routes: Routes = [
  {
    path: 'quiz',
    children: [
      {
        path: '',  component : HomeComponent,
      },
      {
        path : ':id', component : QuizComponent
      }
    ]
  },
  
  {
    path: '**', redirectTo : 'quiz'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

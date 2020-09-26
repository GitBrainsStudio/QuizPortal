import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/Models/Quiz';
import { QuizService } from 'src/app/Services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private QuizService : QuizService) { }

  ngOnInit(): void {
    this.$data = this.QuizService.getQuizs();
  }

  $data:Observable<Quiz[]>;
}

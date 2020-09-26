import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from 'src/app/Models/Quiz';
import { QuizService } from 'src/app/Services/quiz.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {



  constructor(private activatedRouter:ActivatedRoute, private quizService : QuizService, private router: Router) { }

  ngOnInit(): void {
  this.$quiz = this.quizService.getQuiz(this.activatedRouter.snapshot.params['id']);
  this.$quiz.subscribe(quiz => { if (!quiz) this.router.navigate(['/']); })
  }

  $quiz: Observable<Quiz>;

}

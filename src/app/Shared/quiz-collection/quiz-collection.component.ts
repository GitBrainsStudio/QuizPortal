import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/Models/Quiz';

@Component({
  selector: 'quiz-collection',
  templateUrl: './quiz-collection.component.html',
  styleUrls: ['./quiz-collection.component.css']
})
export class QuizCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() data : Quiz[];

}

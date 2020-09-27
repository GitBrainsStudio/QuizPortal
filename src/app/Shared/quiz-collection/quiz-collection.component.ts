import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from 'src/app/Models/Quiz';
import { OpacityAnimation } from 'src/app/Models/OpacityAnimation';

@Component({
  selector: 'quiz-collection',
  templateUrl: './quiz-collection.component.html',
  styleUrls: ['./quiz-collection.component.css'],
  animations : [ OpacityAnimation ]
})
export class QuizCollectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  @Input() data : Quiz[];

}

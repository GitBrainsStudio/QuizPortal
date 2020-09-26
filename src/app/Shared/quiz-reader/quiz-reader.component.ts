import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { Quiz } from 'src/app/Models/Quiz';

@Component({
  selector: 'quiz-reader',
  templateUrl: './quiz-reader.component.html',
  styleUrls: ['./quiz-reader.component.css']
})
export class QuizReaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() data : Quiz;

  index : number = 0;
  selected : Answer;

  next()
  {
    if (!this.lastQuestion) 
    {
      this.resetAnswer();
      this.index++;
    }
  }

  resetAnswer()
  {
    this.selected = null;
  }
  
  get lastQuestion() : boolean
  {
    if (this.data.Questions.length - 1 > this.index) return false;
    else return true;
  }
}

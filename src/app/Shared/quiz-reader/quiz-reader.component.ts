import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/Models/Answer';
import { OpacityAnimation } from 'src/app/Models/OpacityAnimation';
import { Quiz } from 'src/app/Models/Quiz';

@Component({
  selector: 'quiz-reader',
  templateUrl: './quiz-reader.component.html',
  styleUrls: ['./quiz-reader.component.css'],
  animations : [ OpacityAnimation ]
})
export class QuizReaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  @Input() data : Quiz;

  index : number = 0;
  selected : Answer;
  selectedAnswers : Answer[] = [];
  resultView : boolean = false;

  next()
  {
    this.pushAnswer();

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

  pushAnswer()
  {
    this.selectedAnswers.push(this.selected);
  }

  showResult()
  {
    this.pushAnswer();
    this.resultView = true;
  }

  get rightCount() : number
  {
    return this.selectedAnswers.filter(v => v.Type == 2).length;
  }

  get wrongCount() : number
  {
    return this.selectedAnswers.filter(v => v.Type == 1).length;
  }



  
  get lastQuestion() : boolean
  {
    if (this.data.Questions.length - 1 > this.index) return false;
    else return true;
  }
}

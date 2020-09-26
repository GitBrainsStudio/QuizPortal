import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../Models/Quiz';
import { map, catchError } from 'rxjs/operators';

@Injectable({providedIn:"root"})
export class QuizService
{
    constructor(private http:HttpClient) { }

    getQuizs() : Observable<Quiz[]> { 
        return this.http.get<Quiz[]>('./assets/JsonDB/quiz.base.json');
    }

    getQuiz(guid:string) : Observable<Quiz>
    {
        return this.getQuizs().pipe(map(quizs => quizs.find(quiz => quiz.Guid == guid)));
    }
}
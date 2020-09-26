import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizCollectionComponent } from './quiz-collection.component';

describe('QuizCollectionComponent', () => {
  let component: QuizCollectionComponent;
  let fixture: ComponentFixture<QuizCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

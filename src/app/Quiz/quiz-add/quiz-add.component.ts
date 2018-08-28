import { Component, OnInit } from '@angular/core';
import { nextTick } from '../../../../node_modules/@types/q';

@Component({
  selector: 'app-quiz-add',
  templateUrl: './quiz-add.component.html',
  styleUrls: ['./quiz-add.component.css']
})
export class QuizAddComponent implements OnInit {
visible=true;
  constructor() { }
quizname;
  ngOnInit() {
  }
  next(){
    this.visible=!this.visible;
  }
}


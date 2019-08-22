import { Component, OnInit } from '@angular/core';
import { VerbService } from 'src/app/verb.service';
import { Verb } from 'src/app/verb';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  data: [Verb];
  verbArrayForTest: [Verb];
  verbToTest: Verb;
  isDataLoaded: boolean;
  shuffleDone: boolean;
  isHidden = true;
  verbTotalNumber: number;
  correctNumber: number;
  tryNumber = 0;
  arrayIndex = 0;
  answer: string;
  testIsFinished = false;
  showResult = false;

  disabled = false;
  max = 100;
  min = 1;
  step = 1;
  thumbLabel = true;
  numberToTest = 10;


  constructor(private verbService: VerbService) { }

  ngOnInit() {
    this.startUp();
  }

  startUp() {
    this.arrayIndex = 0;
    this.verbService.getVerbs().subscribe(
      data => {
        this.data = data;
        this.verbTotalNumber = this.data.length;
        this.verbArrayForTest = data;
        this.shuffleArray(this.verbArrayForTest);
        this.isDataLoaded = true;
        // console.log(this.data.length);
      });

    this.correctNumber = 0;

  }


  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  getVerbToTest() {
    this.verbToTest = this.verbArrayForTest[this.arrayIndex];
    return this.verbToTest;

  }

  getId() {
    const id: number = this.getVerbToTest().verbId;
    return id;
  }

  arrayIndexIncByOne() {
    this.arrayIndex++;
  }

  go() {
    // console.log('go');
    this.disabled = true;
    this.isHidden = false;
  }

  reset() {
    // console.log('reset');
    this.showResult = false;
    this.disabled = false;
    this.isHidden = true;
    this.testIsFinished = false;
    this.shuffleArray(this.verbArrayForTest);
    this.arrayIndex = 0;
    this.correctNumber = 0;
    this.tryNumber = 0;
    this.numberToTest = 10;
  }

  next() {
    // console.log('next');
    // console.log(this.answer);
    if (this.answer === this.verbToTest.verbTeForm) {
      // console.log('you are correct');
      this.tryNumber++;
      this.correctNumber++;
      this.arrayIndexIncByOne();
      this.answer = '';
      if (this.arrayIndex === this.numberToTest) {
        // console.log('test finished');
        this.testIsFinished = true;
        this.showResult = true;
      } else {
        // console.log('keeping going');
      }
    } else {
      this.tryNumber++;
    }

  }

  getFailNumber() {
    const value = this.tryNumber - this.numberToTest;
    return value;
  }
}

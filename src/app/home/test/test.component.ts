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
  verbNumberLeft: number;
  verbNumberTested: number;
  incorrectNumber: number;
  correctNumber: number;
  arrayIndex = 0;

  disabled = false;
  max = 100;
  min = 1;
  step = 1;
  thumbLabel = true;
  NumberToTest = 10;


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
        this.verbNumberLeft = this.data.length - 1;
        this.verbNumberTested = 0;
        this.verbArrayForTest = data;
        this.shuffleArray(this.verbArrayForTest);
        this.isDataLoaded = true;
        // console.log(this.data.length);
      });
    this.incorrectNumber = 0;
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
    console.log('go');
    this.disabled = true;
    this.isHidden = false;
  }

  reset() {
    console.log('reset');
    this.disabled = false;
    this.isHidden = true;
  }

  next() {
    console.log('next');
    this.arrayIndexIncByOne();
  }
}

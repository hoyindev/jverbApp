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
  verb: Verb;
  isDataLoaded: boolean;
  verbTotalNumber: number;
  verbNumberLeft: number;
  verbNumberTested: number;

  constructor(private verbService: VerbService) { }

  ngOnInit() {
    this.startUp();
  }

  startUp() {
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
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

}

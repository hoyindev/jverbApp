import { Component, OnInit } from '@angular/core';
import { Verb } from 'src/app/verb';
import { VerbService } from 'src/app/verb.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-verbs-details',
  templateUrl: './verbs-details.component.html',
  styleUrls: ['./verbs-details.component.css']
})
export class VerbsDetailsComponent implements OnInit {

  data: any[];
  verb: Verb;
  isDataLoaded = false;

  constructor(private verbService: VerbService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.verbService.getVerbById(this.getParaId()).subscribe(
      data => {
        this.data = data;
        console.log(JSON.stringify(this.data[0]));
        this.verb = this.data[0];
        console.log(JSON.stringify(this.verb));
        // console.log(JSON.stringify(this.verb[0].verbEng));
        // this.verbe = this.verb[0].verbEng;
        this.isDataLoaded = true;
      });

  }

  public getParaId() {
    const id = +this.route.snapshot.paramMap.get('verbsId');
    const paraid: number = Number(id);
    return paraid;
  }

}

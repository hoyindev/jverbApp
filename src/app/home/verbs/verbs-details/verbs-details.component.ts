import { Component, OnInit } from '@angular/core';
import { Verb } from 'src/app/verb';
import { VerbService } from 'src/app/verb.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verbs-details',
  templateUrl: './verbs-details.component.html',
  styleUrls: ['./verbs-details.component.css']
})
export class VerbsDetailsComponent implements OnInit {

  data: any[];
  verb: Verb;
  isDataLoaded = false;
  formGroup: FormGroup;
  submitted = false;
  patternId = '^[0-9]*$';
  patternEng = '^[a-zA-Z0-9 \W\S]+$';
  patternJap = '^[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+[々〆〤]$';

  constructor(private verbService: VerbService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

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

        // initiate the form after the data is fetehed
        this.formGroup = this.formBuilder.group({
          formVerbId: new FormControl(this.verb.verbId, [Validators.required, Validators.pattern('^[0-9]*$')]),
          formVerbEng: [this.verb.verbEng, [Validators.required, Validators.pattern('^[a-zA-Z0-9 \)\(\W\S]+$')]],
          formVerbJap: [this.verb.verbJap, [Validators.required, Validators.pattern('^[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+[々〆〤]$')]],
          formVerbTeForm: [this.verb.verbTeForm, [Validators.required, Validators.pattern('^[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+[々〆〤]$')]]
        });
      });





  }

  public getParaId() {
    const id = +this.route.snapshot.paramMap.get('verbsId');
    const paraid: number = Number(id);
    return paraid;
  }

  updateVerb(form: NgForm) {

    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }

    if (!form.invalid) {
      const input: Verb = {
        verbId: form.value.formVerbId,
        verbEng: form.value.formVerbEng,
        verbJap: form.value.formVerbJap,
        verbTeForm: form.value.formVerbTeForm
      };
      console.log('form: id ' + input.verbId);


      this.verbService.updateVerb(input).subscribe(data => {
        alert('success');
      });
      form.resetForm();
      this.router.navigate(['/verbs']);
    }
  }
}



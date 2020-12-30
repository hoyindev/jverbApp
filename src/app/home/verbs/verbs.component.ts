import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerbService } from 'src/app/verb.service';
import { Verb } from 'src/app/verb';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css'],
  providers: [VerbService]
})
export class VerbsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['verbId', 'verbEng', 'verbJap', 'verbTeForm'];
  dataSource = new MatTableDataSource<Verb>();
  formGroup: FormGroup;
  submitted = false;
  selectedIndex: number;

  constructor(private verbService: VerbService, private route: Router, private formBuilder: FormBuilder) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.startUp();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    // console.log(this.dataSource.sort);
  }

  startUp() {
    this.verbService.getVerbs().subscribe(
      data => { this.dataSource.data = data; });

    this.formGroup = this.formBuilder.group({
      formVerbEng: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9 \)\(\W\S]+$')]],
      formVerbJap: ['', [Validators.required, Validators.pattern('^[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+[々〆〤]$')]],
      formVerbTeForm: ['', [Validators.required, Validators.pattern('^[一-龠]+|[ぁ-ゔ]+|[ァ-ヴー]+[々〆〤]$')]]
    });
  }


  selectRow(row) {
    this.route.navigate(['verbs/' + row.verbId]);
  }

  insertVerb(form: NgForm) {
    // console.log('btn clicked');
    this.submitted = true;
    if (this.formGroup.invalid) {
      console.log('invalid');
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
      this.verbService.insertVerb(input).subscribe(data => {
        alert('success');
        form.resetForm();
        window.location.reload();
      });

    }
  }



}

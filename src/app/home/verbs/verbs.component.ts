import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerbService } from 'src/app/verb.service';
import { Verb } from 'src/app/verb';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css'],
  providers: [VerbService]
})
export class VerbsComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['ID', 'English', 'Japanese', 'Te Form'];
  dataSource = new MatTableDataSource<Verb>();

  constructor(private verbService: VerbService, private route: Router) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  // verbs: Verb[];

  ngOnInit() {
    this.verbService.getVerbs().subscribe(
      data => { this.dataSource.data = data; });
  }

  ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  //   console.log(this.dataSource.sort);
  }

  selectRow(row) {
    this.route.navigate(['verbs/' + row.verbId]);
  }

}

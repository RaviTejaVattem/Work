import { Component, OnInit, ViewChild, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationStart } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

import { SpaceDataService } from '../service/space-data.service';
import { NEO } from '../models/neo-model';
import { DetailsDialogComponent } from '../shared/details-dialog/details-dialog.component';
import moment from 'moment';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit {
  dateForm: FormGroup;
  maxDate: string;
  tableData: NEO[] = [];
  dataRequired: NEO[] = [];
  displayedColumns: string[] = [
    'id',
    'date',
    'name',
    'absolute_magnitude_h',
    'is_potentially_hazardous_asteroid'];
  dataSource: MatTableDataSource<NEO>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private _spaceDataService: SpaceDataService,
    private _fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnInit() {
    this.maxDate = moment().format('YYYY-MM-DD');
    this.dateForm = this._fb.group({
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });

    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.dataSource = new MatTableDataSource(this.tableData);
        this.cdRef.detectChanges();
      }
    });
  }

  getData(formData) {
    this.tableData = [];
    const from = moment(formData.fromDate).format('YYYY-MM-DD');
    const to = moment(formData.toDate).format('YYYY-MM-DD');
    this._spaceDataService.getNeoData(from, to).subscribe(val => {
      const keys = Object.keys(val);
      keys.forEach(key => {
        val[key].forEach((data: NEO) => {
          const neoData: NEO = data;
          neoData.date = key;
          this.tableData.push(neoData);
          this.dataSource = new MatTableDataSource(this.tableData);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      });
    });
  }

  openDetails(i, row) {
    this.dialog.open(DetailsDialogComponent, {
      data: { id: i, rowData: row }
    });
  }

}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stat-filters',
  templateUrl: './stat-filters.component.html',
  styleUrls: ['./stat-filters.component.css']
})
export class StatFiltersComponent implements OnInit, OnDestroy {

  filter: FormGroup;
  valueSub: Subscription;

  constructor(fb: FormBuilder) {
    this.filter = fb.group({
      title: ['', Validators.minLength(3)],
      author: ['', Validators.minLength(3)],
      region: ['All', Validators.required],
      fromDate: [''],
      toDate: [''],
      ageGroupUnder18: ['true'],
      ageGroup1840: ['true'],
      ageGroup4060: ['true'],
      ageGroupOver60: ['true']
    });

    this.valueSub = this.filter.valueChanges.subscribe(value => {
      console.log('The form has chnaged', value);
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.valueSub.unsubscribe();
  }

  filterForm() {
    console.log('doing filtering with: ', this.filter);
  }

  logTheForm() {
    console.log('filter values: ', this.filter);
  }

}

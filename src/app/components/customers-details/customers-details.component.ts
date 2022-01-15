import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
})
export class CustomersDetailsComponent implements OnInit {
  customers$: Observable<Customer>;

  constructor(
    private activatedRouteService: ActivatedRoute,
    customersService: CustomersService
  ) {
    this.customers$ = activatedRouteService.params.pipe(
      switchMap((param) => customersService.getById(param.id))
    );
  }

  ngOnInit(): void {}
}

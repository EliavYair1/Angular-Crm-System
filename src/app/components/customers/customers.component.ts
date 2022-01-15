import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  customers$: Observable<Customer[]>;
  phoneTerm: string = '';
  firstNTerm: string = '';

  constructor(private customersService: CustomersService) {
    this.customers$ = this.customersService.getAll();
  }

  remove(id: string) {
    if (confirm('Are you sure you want to delete?')) {
      this.customersService.remove(id);
    }
  }

  ngOnInit(): void {}
}

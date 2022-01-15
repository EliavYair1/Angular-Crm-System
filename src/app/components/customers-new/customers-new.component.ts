import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomersService } from 'src/app/services/customers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss'],
})
export class CustomersNewComponent implements OnInit {
  form = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  async OnSubmit({ valid }: NgForm) {
    if (valid) {
      //todo update db
      await this.customersService.add(this.form);
      this.routerService.navigate(['..']);
    }
  }

  reset(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }
  constructor(
    private customersService: CustomersService,
    private routerService: Router
  ) {}

  ngOnInit(): void {}
}

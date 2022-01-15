import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  customersRef: AngularFirestoreCollection<Customer>;
  customer$: Observable<Customer[]>;

  constructor(private afs: AngularFirestore) {
    this.customersRef = this.afs.collection('customers', (ref) =>
      ref.orderBy('firstName', 'asc')
    );
    this.customer$ = this.customersRef
      .valueChanges({ idField: 'id' })
      .pipe(shareReplay(1));
  }
  remove(id: string) {
    this.customersRef.doc(id).delete();
  }
  add(customer: Customer) {
    this.customersRef.add(customer);
  }
  getAll() {
    return this.customer$;
  }
  getById(id: string) {
    return this.customersRef.doc(id).valueChanges({ idField: 'id' });
  }
  update({ id, ...customer }: Customer) {
    this.customersRef.doc(id).update(customer);
  
  }
}

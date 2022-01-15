import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `<app-page-header
    title="Page Not Found"
    icon="bi bi-exclamation-lg"
    description="The page you are looking for is not found-error 404."
  ></app-page-header>`,
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}

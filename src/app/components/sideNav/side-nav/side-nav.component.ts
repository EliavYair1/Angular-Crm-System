import { Component, OnInit } from '@angular/core';

interface navItem {
  title: string;
  icon: string;
  link: string;
}
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  navItem: Array<navItem> = [
    {
      title: 'customers',
      icon: 'bi bi-briefcase-fill',
      link: '/dashboard/customers',
    },
    { title: 'contacts', icon: 'bi bi-journal', link: '/dashboard/contacts' },
    {
      title: 'leads',
      icon: 'bi bi-person-bounding-box',
      link: '/dashboard/leads',
    },
    {
      title: 'reports',
      icon: 'bi bi-file-earmark-bar-graph',
      link: '/dashboard/reports',
    },
    {
      title: 'integrations',
      icon: 'bi bi-layers-fill',
      link: '/dashboard/integrations',
    },
    {
      title: 'year-end sale',
      icon: 'bi bi-emoji-sunglasses-fill',
      link: '/dashboard/year-end sale',
    },
    { title: 'http tut', icon: 'bi bi-wifi', link: '/dashboard/tut/http' },
    {
      title: 'open-close',
      icon: 'bi bi-door-closed-fill',
      link: '/dashboard/openClose',
    },
    {
      title: 'fireStore',
      icon: 'bi bi-brightness-high  ',
      link: '/dashboard/fireStore',
    },
    {
      title: 'auth',
      icon: 'bi bi-file-lock2-fill',
      link: '/dashboard/tut/auth',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

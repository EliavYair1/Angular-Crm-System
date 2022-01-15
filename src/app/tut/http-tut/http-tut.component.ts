import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';

interface Post {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-http-tut',
  templateUrl: './http-tut.component.html',
  styleUrls: ['./http-tut.component.scss'],
})
export class HttpTutComponent implements OnInit {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  // data: any = null;
  data: Observable<Post | Post[]> = null;

  myObservable = interval(2000);

  constructor(private http: HttpClient) {}

  get(id: string) {
    if (id) {
      this.data = this.http.get<Post>(`${this.url}/${id}`);
      return;
    }

    // this.http.get<Post[]>(this.url).subscribe((data) => {
    //   this.data = data;
    // });
    this.data = this.http.get<Post[]>(this.url);
  }

  post(json: string) {
    this.data = this.http.post<Post>(this.url, JSON.parse(json));
  }
  patch(id: string, json: string) {
    this.data = this.http.patch<Post>(`${this.url}/${id}`, JSON.parse(json));
  }
  delete(id: string) {
    this.data = this.http.delete<Post>(`${this.url}/${id}`);
  }

  ngOnInit(): void {}
}

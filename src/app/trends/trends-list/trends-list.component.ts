import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTrends } from '../store/actions/trends-list-page.actions';
import { selectAllTrends } from '../store/selectors';

@Component({
  selector: 'app-trends-list',
  template: `
    <article class="trend" *ngFor="let trend of trends$ | async; index as i">
      <figure class="trend__figure">
        <img class="trend__image" [src]="trend.image" [alt]="trend.title" />
        <figcaption class="trend__title">
          <h2>{{ trend.title }}</h2>
        </figcaption>
      </figure>
      <p class="trend__excerpt">{{ trend.body[0] }}</p>
    </article>
  `,
  styleUrls: ['./trends-list.component.scss'],
})
export class TrendsListComponent implements OnInit {
  protected trends$ = this.store.select(selectAllTrends);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadTrends());
  }
}

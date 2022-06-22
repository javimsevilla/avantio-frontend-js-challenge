import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { loadTrends } from '../store/actions/trends-list-page.actions';
import { selectTrendsByProvider } from '../store/selectors';

import { TrendsListComponent } from './trends-list.component';

describe('TrendsListComponent', () => {
  let component: TrendsListComponent;
  let fixture: ComponentFixture<TrendsListComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrendsListComponent],
      providers: [provideMockStore({})],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  it('should create', () => {
    fixture = TestBed.createComponent(TrendsListComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should load trends on init', () => {
    fixture = TestBed.createComponent(TrendsListComponent);
    spyOn(store, 'dispatch').and.callFake(() => {});
    selectTrendsByProvider.setResult([
      {
        id: 'id-test-1',
        title: 'title-test-1',
        body: ['body-test-1-p1'],
        provider: 'elpais',
        image: 'image-test-1',
        url: 'url-test-1',
        createdAt: new Date(),
      },
    ]);

    fixture.detectChanges();
    const trends = fixture.debugElement.queryAll(By.css('.trend'));

    expect(store.dispatch).toHaveBeenCalledOnceWith(loadTrends());
    expect(trends.length).toBe(1);
  });
});

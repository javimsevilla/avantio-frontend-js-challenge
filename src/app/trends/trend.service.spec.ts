import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import {
  HttpClient,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { TrendService } from './trend.service';
import { AuthInterceptor } from './auth-interceptor';
import { Trend } from './models/trend.model';
import { environment } from 'src/environments/environment';

describe('TrendService', () => {
  let trendService: TrendService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        TrendService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    trendService = TestBed.inject(TrendService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(trendService).toBeTruthy();
  });

  it('can test HttpClient.get', () => {
    const testData = {
      trends: [
        {
          _id: 'id-test-1',
          body: 'body-test-1',
          createdAt: '2022-06-21T15:58:05.494Z',
          image: 'image-test-1',
          provider: 'elpais',
          title: 'title-test-1',
          url: 'url-test-1',
        },
      ],
    };

    const expectedData: Trend[] = [
      {
        id: 'id-test-1',
        body: 'body-test-1',
        createdAt: new Date('2022-06-21T15:58:05.494Z'),
        image: 'image-test-1',
        provider: 'elpais',
        title: 'title-test-1',
        url: 'url-test-1',
      },
    ];

    trendService
      .getAll()
      .subscribe((data) => expect(data).toEqual(expectedData));

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(trendService.getAllUrl);

    // Assert that the request headers has X-Avantio-Auth header
    expect(req.request.headers.has('X-Avantio-Auth')).toBeTrue();

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(testData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();
  });
});

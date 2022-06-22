import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Trend } from './models/trend.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrendProvider } from './models/trend-provider.model';
import { GetAllTrendsResponse } from './models/get-all-trends-response.model';
import { TrendResponse } from './models/trend-response.model';

@Injectable()
export class TrendService {
  private readonly urlBase = environment.avantioAPIHost;

  public readonly getAllUrl = `${this.urlBase}/v1/trends`;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Trend[]> {
    return this.httpClient
      .get<GetAllTrendsResponse>(this.getAllUrl)
      .pipe(map(({ trends }) => [...trends.map(this.mapToTrendModel)]));
  }

  private mapToTrendModel(trendResponse: TrendResponse): Trend {
    return {
      id: trendResponse._id,
      body: trendResponse.body.split('\n\n'),
      createdAt: new Date(trendResponse.createdAt),
      image: trendResponse.image,
      provider: trendResponse.provider as TrendProvider,
      title: trendResponse.title,
      url: trendResponse.url,
    };
  }
}

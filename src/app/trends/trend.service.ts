import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Trend } from './models/trend.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TrendProvider } from './models/trend-provider.model';

@Injectable()
export class TrendService {
  private readonly urlBase = environment.avantioAPIHost;

  public readonly getAllUrl = `${this.urlBase}/v1/trends`;

  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Trend[]> {
    type ResponseType = {
      trends: {
        _id: string;
        body: string;
        createdAt: string;
        image: string;
        provider: string;
        title: string;
        url: string;
      }[];
    };

    return this.httpClient.get<ResponseType>(this.getAllUrl).pipe(
      map(({ trends }) => [
        ...trends.map((trend) => ({
          id: trend._id,
          body: trend.body,
          createdAt: new Date(trend.createdAt),
          image: trend.image,
          provider: trend.provider as TrendProvider,
          title: trend.title,
          url: trend.url,
        })),
      ])
    );
  }
}

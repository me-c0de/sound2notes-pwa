import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {AudioModel} from "./audioModel";

@Injectable({
  providedIn: 'root'
})
export class AudioUploadService {
  private baseUrl: string = '/audio';

  readonly headers = new HttpHeaders()
    .set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<AudioModel[]> {
    return this.http.get<AudioModel[]>(this.baseUrl);
  }

  add(entry: AudioModel): Observable<AudioModel> {
    console.log('Upload?')
    return this.http.post<AudioModel>(this.baseUrl, entry, {headers: this.headers});
  }

  update(entry: AudioModel): Observable<AudioModel> {
    return this.http.put<AudioModel>(
      `${this.baseUrl}/${entry.id}`, entry, {headers: this.headers}
    )
  }

  delete(id: string): Observable<AudioModel> {
    return this.http.delete<AudioModel>(`${this.baseUrl}/${id}`);
  }
}

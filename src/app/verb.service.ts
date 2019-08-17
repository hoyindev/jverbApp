import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Verb } from './verb';

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  apiURL = 'https://secure-anchorage-23083.herokuapp.com/api';
  CORSproxyURL = 'https://cors-anywhere.herokuapp.com/';

  constructor(private httpClient: HttpClient) { }

  public createVerb(verb: Verb) { }

  public updateVerb(verb: Verb) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(verb);
    console.log('service update body:' + body);
    console.log(verb);
    
    return this.httpClient.put(`${this.CORSproxyURL + this.apiURL + '/verbs/' + verb.verbId}`, body, options);
   }

  public deleteVerb(id: Verb) { }

  public getVerbById(id: number) {
      // console.log('getid: ' + id + `${this.apiURL + '/verbs/' + id}`);
      return this.httpClient.get<Verb[]>(`${this.apiURL + '/verbs/' + id}`);
  }

  public getVerbs() {
    return this.httpClient.get<Verb[]>(`${this.apiURL}/verbs`);

    // this.httpClient.get(`${this.apiURL}/verbs`).subscribe(
    //   data => {
    //     this.verbs = data as Verb[];
    //   });
  }

}

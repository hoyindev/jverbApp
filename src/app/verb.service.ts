import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Verb } from './verb';
import { of , Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class VerbService {

  apiURL = '';
  CORSproxyURL = '';

  public verbs: Verb[] = JSON.parse( `[{ "verbId": 1, "verbEng": "wash", "verbJap": "あらう", "verbTeForm": "あらって" },
{ "verbId": 2, "verbEng": "wait", "verbJap": "まつ", "verbTeForm": "まって" }, 
{ "verbId": 3, "verbEng": "take", "verbJap": "とる", "verbTeForm": "とって" } ,
{ "verbId": 4, "verbEng": "write", "verbJap": "かく", "verbTeForm": "かいて" } ,
{ "verbId": 5, "verbEng": "hurry", "verbJap": "いそぐ", "verbTeForm": "いそいで" }, 
{ "verbId": 6, "verbEng": "die", "verbJap": "しぬ", "verbTeForm": "しんで" } ,
{ "verbId": 7, "verbEng": "call out", "verbJap": "よぶ", "verbTeForm": "よんで" }, 
{ "verbId": 8, "verbEng": "drink", "verbJap": "のむ", "verbTeForm": "のんで" } ,
{ "verbId": 9, "verbEng": "speak", "verbJap": "はなす", "verbTeForm": "はなして" }, 
{ "verbId": 10, "verbEng": "see", "verbJap": "みる", "verbTeForm": "みて" } ,
{ "verbId": 11, "verbEng": "eat", "verbJap": "たべる", "verbTeForm": "たべて" }, 
{ "verbId": 12, "verbEng": "do", "verbJap": "する", "verbTeForm": "して" } ,
{ "verbId": 13, "verbEng": "come", "verbJap": "くる", "verbTeForm": "きて" }, 
{ "verbId": 14, "verbEng": "to be angry/ act violently", "verbJap": "あばれる", "verbTeForm": "あばれて" } ,
{ "verbId": 15, "verbEng": "to rehear, dry", "verbJap": "あぶる", "verbTeForm": "あぶって" } ,
{ "verbId": 16, "verbEng": "open", "verbJap": "あく", "verbTeForm": "あいて" } ,
{ "verbId": 17, "verbEng": "abuse verbally", "verbJap": "ののしる", "verbTeForm": "ののしって" } ,
{ "verbId": 18, "verbEng": "arrive", "verbJap": "つく", "verbTeForm": "ついて" } ,
{ "verbId": 19, "verbEng": "approach", "verbJap": "よる", "verbTeForm": "よって" } ,
{ "verbId": 20, "verbEng": "attack", "verbJap": "おそう", "verbTeForm": "おそって" } ,
{ "verbId": 21, "verbEng": "attract attention", "verbJap": "めだつ", "verbTeForm": "めだって" } ,
{ "verbId": 22, "verbEng": "be", "verbJap": "いる", "verbTeForm": "いて" } ,
{ "verbId": 23, "verbEng": "to be blinded, get dizzy", "verbJap": "くらむ", "verbTeForm": "くらんで" } ,
{ "verbId": 24, "verbEng": "to be broken", "verbJap": "おれる", "verbTeForm": "おれて" } ,
{ "verbId": 25, "verbEng": "to be burned, charred", "verbJap": "こげる", "verbTeForm": "こげて" } ,
{ "verbId": 26, "verbEng": "to be fixed, healed", "verbJap": "なおる", "verbTeForm": "なおって" } ,
{ "verbId": 27, "verbEng": "to be decided", "verbJap": "きまる", "verbTeForm": "きまって" } ,
{ "verbId": 28, "verbEng": "to be extracted", "verbJap": "ぬける", "verbTeForm": "ぬけて" } ,
{ "verbId": 29, "verbEng": "to be greasy", "verbJap": "あぶらぎる", "verbTeForm": "あぶらぎって" } ,
{ "verbId": 30, "verbEng": "to be in a hurry, panic", "verbJap": "あせる", "verbTeForm": "あせって" } ,
{ "verbId": 31, "verbEng": "to be missing, vanish", "verbJap": "なくなる", "verbTeForm": "なくなって" }, 
{ "verbId": 32, "verbEng": "to be mistaken", "verbJap": "まちがう", "verbTeForm": "まちがって" } ,
{ "verbId": 33, "verbEng": "to be mixed", "verbJap": "まじる", "verbTeForm": "まじって" } ,
{ "verbId": 34, "verbEng": "make money, to be profitable", "verbJap": "もうかる", "verbTeForm": "もうかって" } ,
{ "verbId": 35, "verbEng": "to be puzzled", "verbJap": "まよう", "verbTeForm": "まよって" } ,
{ "verbId": 36, "verbEng": "to be worse, inferior to", "verbJap": "おとる", "verbTeForm": "おとって" } ,
{ "verbId": 37, "verbEng": "to become empty", "verbJap": "すく", "verbTeForm": "すいて" } ,
{ "verbId": 38, "verbEng": "to become hard", "verbJap": "かたまる", "verbTeForm": "かたまって" } ,
{ "verbId": 39, "verbEng": "to become hurt", "verbJap": "いたむ", "verbTeForm": "いたんで" } ,
{ "verbId": 40, "verbEng": "to become popluar", "verbJap": "はやる", "verbTeForm": "はやって" } ,
{ "verbId": 41, "verbEng": "to become stronger", "verbJap": "つよまる", "verbTeForm": "つよまって" } ,
{ "verbId": 42, "verbEng": "to become wet", "verbJap": "ぬれる", "verbTeForm": "ぬれて" } ,
{ "verbId": 43, "verbEng": "to begin", "verbJap": "はじめる", "verbTeForm": "はじめて" } ,
{ "verbId": 44, "verbEng": "to twist, bend", "verbJap": "ひねる", "verbTeForm": "ひねって" } ,
{ "verbId": 45, "verbEng": "to bite", "verbJap": "かむ", "verbTeForm": "かんで" } ,
{ "verbId": 46, "verbEng": "to boast", "verbJap": "いばる", "verbTeForm": "いばって" } ,
{ "verbId": 47, "verbEng": "to borrow", "verbJap": "かりる", "verbTeForm": "かりて" } ,
{ "verbId": 48, "verbEng": "to break, cut off, expire", "verbJap": "きれる", "verbTeForm": "きれて" } ,
{ "verbId": 49, "verbEng": "to carry on one's shoulders", "verbJap": "かつぐ", "verbTeForm": "かついで" } ,
{ "verbId": 50, "verbEng": "to clash, disagree", "verbJap": "くいちがう", "verbTeForm": "くいちがって" } 

]`);

  constructor(private httpClient: HttpClient) { }

  public insertVerb(verb: Verb) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(verb);
    // console.log(body);
    return this.httpClient.post(`${this.CORSproxyURL + this.apiURL + '/verbs/'}`, body, options);
    
  }

  public updateVerb(verb: Verb) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const body = JSON.stringify(verb);
    // console.log('service update body:' + body);
    // console.log(verb);

    return this.httpClient.put(`${this.CORSproxyURL + this.apiURL + '/verbs/' + verb.verbId}`, body, options);
  }

  public deleteVerb(id: number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // console.log(id);
    return this.httpClient.delete(`${this.CORSproxyURL + this.apiURL + '/verbs/' + id}`, options);
  }

  public getVerbById(id: number) {
    // console.log('getid: ' + id + `${this.apiURL + '/verbs/' + id}`);
    return this.httpClient.get<Verb[]>(`${this.CORSproxyURL + this.apiURL + '/verbs/' + id}`);
  }

  public getVerbs() {
    // return this.httpClient.get<[Verb]>(`${this.CORSproxyURL + this.apiURL}/verbs`);
    const verbs = this.getverbs();
    return verbs;
  }

  getverbs(): Observable<Verb[]> {
    return of(this.verbs)
  }

  




}

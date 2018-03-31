import { Injectable } from '@angular/core';
import { PlaceLocation } from './logic/PlaceLocation';
import { Coffee } from './logic/Coffee';
import { Http } from '@angular/http';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  public endpoint = "http://192.168.43.243:3000";

  get(coffeeId: string, callback){
    this.http.get(`${this.endpoint}/coffee/${coffeeId}`)
      .subscribe(response=> {
        callback(response.json());

      })
  }

  getList(callback){
    //  const list = [
    //    new Coffee("double Expresso","sunny caffe", new PlaceLocation("123 street", "chennai", )),
    //    new Coffee("double Expresso","sunny caffe", new PlaceLocation("123 street", "chennai", )),
    //  ];
    //  callback(list);
    this.http.get(`${this.endpoint}/coffee`)
    .subscribe(response =>{
      console.log(response.json());
      callback(response.json());
    })
  }
  save(coffee, callback){
    if(coffee._id){
      this.http.put(`${this.endpoint}/coffee/${coffee._id}`, coffee)
       .subscribe(response =>{
          callback(true);
       });
    } else {
      this.http.post(`${this.endpoint}/coffee`, coffee)
      .subscribe(response =>{
         callback(true);
      });
    }
    // callback(true);
  }

}

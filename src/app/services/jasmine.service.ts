import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JasmineService {

  constructor() { }

  myMethod(){
    return 'myMethod'
  }
}

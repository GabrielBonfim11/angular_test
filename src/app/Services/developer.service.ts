import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  SERVER_URL = 'https://61d4ad578df81200178a8df9.mockapi.io/api/v1/developer';

  constructor(private httpClient: HttpClient) {}

  listarDevs(){
    return this.httpClient.get(`${this.SERVER_URL}`);
  }
}

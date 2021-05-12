import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './app-model/category';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  addCategory(category:Category):Observable<Category> {
    return this.httpClient.post<Category>("http://localhost:8181/addCategory",category);
  }

  addProduct(product:FormData):Observable<any> {
    return this.httpClient.post<any>("http://localhost:8181/addProduct",product);
  }

  fetchCategoryNames():Observable<String[]> {
    return this.httpClient.get<String[]>("http://localhost:8181/fetchCategory");
  }
}

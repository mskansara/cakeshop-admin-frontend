import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './app-model/category';
import { Expense } from './expense';

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

  viewOrders(status:string):Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8181/viewOrdersByStatus?status=${status}`)
  }

  changeOrderStatus(orderId:number, status:string):Observable<any> {
    return this.httpClient.put<any>(`http://localhost:8181/changeOrderStatus?orderId=${orderId}&status=${status}`,null);
  }

  addExpense(expense:Expense):Observable<Expense> {
    return this.httpClient.post<Expense>(`http://localhost:8181/addExpense`, expense);
  }

  viewAllExpense():Observable<Expense[]> {
    return this.httpClient.get<Expense[]>(`http://localhost:8181/viewAllExpense`);
  }
}

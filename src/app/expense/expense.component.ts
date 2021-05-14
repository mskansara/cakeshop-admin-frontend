import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Expense } from '../expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expense:Expense = new Expense();
  expenseList:Array<Expense> = new Array<Expense>();
  constructor(private service:AdminService) { }

  ngOnInit(): void {
    this.service.viewAllExpense().subscribe(
      response=> {
        this.expenseList = response;
        console.log(this.expenseList);
      }
    )
  }

  addExpense() {
    this.service.addExpense(this.expense).subscribe(
      response=> {
        console.log(response);
        this.ngOnInit();
      }
    )
  }

}

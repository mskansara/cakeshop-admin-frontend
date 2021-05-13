import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-vieworders',
  templateUrl: './vieworders.component.html',
  styleUrls: ['./vieworders.component.css']
})
export class ViewordersComponent implements OnInit {
  status:string;
  order:Array<any> = new Array<any>();
  statusList:Array<any> = new Array<any>();
  changedStatus:string;
  constructor(private route:ActivatedRoute, private service:AdminService) { }

  ngOnInit(): void {
    this.status = this.route.snapshot.paramMap.get('status');
    this.changedStatus = this.status;
    this.service.viewOrders(this.status).subscribe(
      response=> {
        this.order = response;
        console.log(this.order);
        if(this.status == "PENDING") {
          this.statusList = ['ACCEPTED', 'DISPATCHED', 'DELIVERED', 'REJECTED']
        } else if (this.status == 'ACCEPTED') {
          this.statusList = ['DISPATCHED', 'DELIVERED']
        } else if(this.status == 'DISPATCHED') {
          this.statusList = ['DELIVERED']
        }  
      }
    )
  }

  onDataChange(event) {
    this.changedStatus = event.target.options[event.target.options.selectedIndex].value;
    console.log(this.changedStatus);
  }

  changeOrderStatus(orderId:number) {
    this.service.changeOrderStatus(orderId, this.changedStatus).subscribe(
      response=> {
        console.log(response);
      }
    )
    this.ngOnInit();
  }

}

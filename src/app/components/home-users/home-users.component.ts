import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/services/user.service';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-home-users',
  templateUrl: './home-users.component.html',
  styleUrls: ['./home-users.component.css']
})
export class HomeUsersComponent implements OnInit,OnDestroy{
  allusers:User[]=[];
  totalItems!: number;
  perPage!: number;
  getalluserssub=new Subscription()
  total:any;
  perpage:any;
  searchid:string='';
  pagenum!:number
  constructor(private _UserService: UserService){}
  ngOnInit(): void {
   
   this.loadusers();
    
  }

  loadusers(){ this._UserService.getAllUsers().subscribe({next:(res)=>{
      this.pagenum=res.page
    this.allusers=res.data;
    this.totalItems = res.total;
    this.perPage = res.per_page;
    console.log(res.page);

  },
  error: (error) => {
    console.error('Error fetching users:', error);
  }





})}
  handlePage(event:PageEvent) {
    // Update pagination settings as needed
    this.totalItems = event.pageSize
    // You can also fetch data for the new page based on event.pageIndex
    // Call your API or update data array
    console.log(this.pagenum);
    
 }  
   ngOnDestroy(): void {
   this.getalluserssub.unsubscribe()
    
 }

}

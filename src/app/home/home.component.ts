import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemsService, Items } from '../services/items.service';
import { Item } from '../shared/interfaces/item.interface';
import { AuthService } from '../services/auth.service';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('name', { static: false })
  foodName!: ElementRef;
  @ViewChild('price', { static: false })
  foodPrice!: ElementRef;

  userData = {}

  constructor(public foodService: ItemsService, private authSvc: AuthService) {
  }

  ngOnInit(): void {
  }

  addProduct() {
    const food = {
      name: this.foodName.nativeElement.value,
      price: this.foodPrice.nativeElement.value,
    }
    this.foodService.addNewFood(food);
  }

  logout() {
    this.authSvc.logout()
  }


}

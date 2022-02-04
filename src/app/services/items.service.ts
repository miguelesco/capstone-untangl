import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { Item } from '../shared/interfaces/item.interface';
import { AuthService } from './auth.service';

export interface Items {
  [key: string] : {
    name : string,
    price: number
  }
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  items: Items = {}
  userId?: string;

  constructor(
    private db: AngularFireDatabase, 
    private authSvc: AuthService
  ) { 
    authSvc.userData.subscribe((user => {
      if (!user) {
        window.alert('We need a user logg')
        return;
      }
      this.userId = user.uid;
      const foodListObservable = db.object(`foodList/${user.uid}`)
      .valueChanges() as Observable<Items>;

      foodListObservable.subscribe((foodList) => this.items = foodList)
    }))
  }

  addNewFood(item: Item) {
    if(!this.userId) window.alert('to add a food you need to be logging')
    const newFood = this.db.list(`foodList/${this.userId}`).push(item);
    return newFood
  }

}

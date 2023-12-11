import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag} from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number):Foods{

    return this.getAll().find(food=>food.id==id)!;


  }

  getAllFoodByTag(tag:string):Foods[]
  {
   if(tag =='All')
   return this.getAll()
  else
  return this.getAll().filter(food=> food.tags?.includes(tag));
  }

  getAllTag():Tag[]
  {
    return[
      {name:'All',count:8},
      {name:'Fried Rice',count:4},
      {name:'Pizza',count:1},
      {name:'Cake',count:3},
      {name:'Lunch',count:2},
      {name:'Burger',count:1},
      {name:'Fries',count:1},
      {name:'Soup',count:1},


    ];

  }
  getAll():Foods[]{
    return[
      {
        id:1,
        name:' Vegetables burger',
        price:80,
        cookTime:'20-25',
        favorite:false,
        origins:['italy,indian'],
        star:4.5,
        imageUrl:'/assets/images/burger.jpg',
        tags:['fastfood'],

      },
      {
        id:2,
        name:'Cake',
        cookTime:'15-20',
        price:200,
        favorite:false,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/images/cake.jpg',
        tags:['sweet'],
      },
      {
        id:3,
        name:'French fries',
        cookTime:'10-15',
        price:110,
        favorite:true,
        origins:['french'],
        star:4.5,
        imageUrl:'/assets/images/french fry.jpg',
        tags:['FastFood'],
      },
      {
        id:4,
        name:'Vegetables spicy Pizza',
        cookTime:'20-30',
        price:150,
        favorite:true,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/images/pizza.jpg',
        tags:['fastFood'],
      }
      ,
      {
        id:5,
        name:'Soup',
        cookTime:'10-20',
        price:50,
        favorite:true,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/images/soup.jpg',
        tags:['primarily liquid food'],
      },
      {
        id:6,
        name:'Frid Rice',
        cookTime:'10-20',
        price:90,
        favorite:true,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/images/fry-rice.jpg',
        tags:['Lunch','Dinner'],
      },
      {
        id:7,
        name:'Thali',
        cookTime:'30-40',
        price:150,
        favorite:true,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/images/thali3.JPG',
        tags:['dinner','Lunch'],
      },

      {
        id:8,
        name:'Samosa',
        cookTime:'10-20',
        price:15,
        favorite:true,
        origins:['indian'],
        star:4.5,
        imageUrl:'/assets/images/samosa.jpg',
        tags:['BreakFast'],
      },




        


      



      
      
      

    ];
  }
}

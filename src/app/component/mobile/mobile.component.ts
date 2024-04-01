import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  mobilespecification : Array<string> = [
    "8 GB RAM | 256 GB ROM | Expandable Upto 1 TB","17.25 cm (6.79 inch) Full HD+ Display",
    "108MP + 16MP | 48MP Front Camera","5000 mAh Battery","Snapdragon 4 Gen 2 Processor"
  ]

  mobileprice : Array<string> = [
    "₹79,999","₹72,999  8% off","Free delivery","Save extra with combo offers","₹69,349"
  ]

   mobileProducts  = [
      {
        id: 1,
        name: 'iPhone 13',
        brand: 'Apple',
        price: 999,
        image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
        isAvailable: true,
        rating : 4.5
      },
      {
        id: 2,
        name: 'Apple 15',
        brand: 'Apple',
        price: 899,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/j/z/3/-original-imagtc5fqyz8tu4c.jpeg?q=70',
        isAvailable: true,
        rating : 4.1


      },
      {
        id: 3,
        name: 'Apple 15 pro max',
        brand: 'Apple',
        price: 799,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/x/h/-original-imagtc3k6zztrhnb.jpeg?q=70',
        isAvailable: true,
        rating : 4.5
      },
      {
        id: 4,
        name: 'OnePlus 9 Pro',
        brand: 'OnePlus',
        price: 899,
        image: '',
        isAvailable: true,
        rating : 4.3

      },
      {
        id: 5,
        name: 'Xiaomi Mi 11',
        brand: 'Xiaomi',
        price: 699,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/g/q/q/-original-imaggcz6fyt9yayh.jpeg?q=70',
        isAvailable: true,
        rating : 2.9

      },
      {
        id: 6,
        name: 'Sony Xperia 1 III',
        brand: 'Sony',
        price: 1199,
        image: '',
        isAvailable: true,
        rating : 4.2
      },
      {
        id: 7,
        name: 'Apple 15',
        brand: 'Apple',
        price: 599,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/c/k/-original-imagtc5fuzkvczr7.jpeg?q=70',
        isAvailable: true,
        rating : 4.5
      },
      {
        id: 8,
        name: 'Huawei P40 Pro',
        brand: 'Huawei',
        price: 899,
        image: '',
        isAvailable: true,
        rating : 2.5
      },
      {
        id: 9,
        name: 'Motorola Moto G Power',
        brand: 'Motorola',
        price: 249,
        image: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/a/6/2/g54-5g-payw0005in-motorola-original-imagt3mekfgqkyk8.jpeg?q=70',
        isAvailable: false,
        rating : 3.9
      },
      {
        id: 10,
        name: 'Nokia 8.3',
        brand: 'Nokia',
        price: 499,
        image: '',
        isAvailable: false,
        rating : 3.5
      }
    
    ];
  
  constructor() { }
  

  ngOnInit(): void {
  }

}

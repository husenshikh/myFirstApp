import { Component } from '@angular/core';
import { Istudent } from './models/students';
import { Iplayer } from './models/players';
import { Icar } from './models/cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstApp';
  skills : Array<string> = ["HTML","CSS","JS","TS","Angular"];
  players : Array<string> = ["MS Dhoni","Rohit Shrma","Virat Kohli","Hardik Pandya","Mohammad Shami"];
  actors : Array<string> = ["Salman Khan","Amitabh Bacchan","Amir Khan","Sharukh Khan","Anil Kapoor"];
  companies : Array<string> = ["HP","DELL","LENOVO","ACER","APPLE"];
  cars : Array<string>= ["THAR","SCARPIO","BREZZA","ERTIGA","VEARNA"]
  stdArr: Array<Istudent> = [
    {
      fname : "Jhon",
      lname : "Doe",
      email : "jd@gmail.com",
      contact : 1236547
    },
    {
      fname : "Jems",
      lname : "Bond",
      email : "jb@gmail.com",
      contact : 7896541
    },
    {
      fname : "Jen",
      lname : "Doe",
      email : "jen@gmail.com",
      contact : 1236547
    },
    {
      fname : "johnny",
      lname : "Thoms",
      email : "jd@gmail.com",
      contact : 1236547
    }
  ];

  ipl :Array<Iplayer> = [
    {
      fname : "Ravindra",
      lname: "jadeja",
      team : "Chennai Super kings",
      bought : 1.8 
    },
    {
      fname : "Shardul",
      lname: "Thakur",
      team : "Chennai Super kings",
      bought : 4 
    },
    {
      fname : "Sameer",
      lname: "Rizvi",
      team : "Chennai Super kings",
      bought : 8.40 
    },
    {
      fname : "Daryl",
      lname: "Mitchell",
      team : "Chennai Super kings",
      bought : 14
    },
    {
      fname : "Mustafizur",
      lname: "Rahman",
      team : "Chennai Super kings",
      bought : 2
    }
  ]

  car : Array<Icar> = [
    {
      carName : "Thar",
      company : "Mahindhra",
      price : 11.25,
      fule : "Diesel"
    },
    {
      carName : "Ertiga",
      company : "Maruti",
      price : 10.78,
      fule : "CNG"
    },
    {
      carName : "Scorpio s11",
      company : "Mahindhra",
      price : 13.59,
      fule : "Diesel"
    },
    {
      carName : "Brezza vxi",
      company : "Maruti",
      price : 9.69,
      fule : "Petrol"
    },{
      carName : "Verna s",
      company : "Hyundai",
      price : 11.99,
      fule : "Petrol"
    }
  ] 
}

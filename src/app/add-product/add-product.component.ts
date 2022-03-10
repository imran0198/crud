import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private http:HttpClient,private route:Router) { }
  edit(form:NgForm){
    console.log( form.value);
return this.http.post(`https://ty-shop.herokuapp.com/api/products`,form.value).subscribe(val=>{
  console.log( val);
  alert("product added succesfully")
  this.route.navigate(["product"])
})
  }
  ngOnInit(): void {
  }


}

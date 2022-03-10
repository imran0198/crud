import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: any
  product: any
  selectedProduct: any
  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router) { }
  // edit(form: NgForm) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['i']
    console.log(this.id);

    this.http.get<any>(`https://ty-shop.herokuapp.com/api/products`).subscribe((res) => {
      //  console.log(res);
      this.product = res.products
      console.log(this.product);
      for (let data of this.product) {
        //  console.log(d._id); //id is generated in consloe
        if (this.id === data._id) {
          this.selectedProduct = data;
          console.log(this.selectedProduct);

        }

      }


    })



  }

  edit(datas: any) {
    console.log(datas);

    this.http.put<any>(`https://ty-shop.herokuapp.com/api/products/${this.selectedProduct._id}`, datas).subscribe(res => {
      console.log(res);

    })

  }
  sent() {
    window.alert("Edited Succesfully")
    this.router.navigate(['product'])

  }
}

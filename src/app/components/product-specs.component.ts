import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-specs',
  templateUrl: './product-specs.component.html',
  styleUrls: ['./product-specs.component.css']
})
export class ProductSpecsComponent implements OnInit {
  ngOnInit(): void {
    console.log('>>> product-specs.component')
}
}

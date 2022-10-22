import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() priceSum:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  getParsedPriceSum():number{
    return parseFloat(this.priceSum.toFixed(2))
  }

  clearCart(){
    this.priceSum=0
  }

}

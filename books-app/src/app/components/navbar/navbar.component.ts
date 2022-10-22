import { Output, EventEmitter, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() priceSum:number = 0;
  @Output() message = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  clearCart(){
    this.priceSum=0
    this.message.emit()
  }

}

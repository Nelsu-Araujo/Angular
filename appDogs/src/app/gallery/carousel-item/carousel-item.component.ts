import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss']
})
export class CarouselItemComponent {
  @Input() urlImage: string = '';
  @Input() label: string = '';
  @Input() simpleDescription: string = '';
}

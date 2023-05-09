import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() title: string = 'Las mejores marcas de ropa';
  @Input() header: string = 'Tiendas Oficiales';
  @Input() img_url: string =
    'https://http2.mlstatic.com/D_NQ_904217-MLA69241793146_052023-C.webp';
}

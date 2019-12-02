import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-call-to-action-card',
  templateUrl: './call-to-action-card.component.html',
  styleUrls: ['./call-to-action-card.component.scss']
})
export class CallToActionCardComponent implements OnInit {
  @Input() title: string;
  @Input() img: string;
  @Input() alt: string;
  @Input() href: string;
  constructor() { }

  ngOnInit() {
  }

}

import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[credit-card-format]'
})
export class CreditCardFormatDirective {

@HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');
    if (trimmed.length > 19) {
      trimmed = trimmed.substr(0, 19);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

  }
}
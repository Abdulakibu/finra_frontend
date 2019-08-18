import { Component } from '@angular/core';

import { ProductService, Phones } from './product.service';

@Component({
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent {
  pageTitle = 'Phone Numbers';
  invalidPhone = false;
  pageOfItems: Array<any>;
  phoneArray: Array<any>;
  phoneNumberAmount: number;
  
  phoneResponse: Phones[] = [];

  constructor(private productService: ProductService) {

  }
  
  submitPhone(phoneNumber: string) {
    const tenDigit = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const sevenDigit = /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})$/;
    if (phoneNumber.match(sevenDigit) || phoneNumber.match(tenDigit)) {
      let sanitizedNumber = phoneNumber.replace(/[^\w\s]|[-. ]|/gi, '');
      this.invalidPhone = false;
      this.productService.getphonePermutations(sanitizedNumber).subscribe(
        (res: any) => {
          this.phoneResponse= res.result;
          this.phoneArray = Object.assign(this.phoneResponse.map(number => ({'number': number})));
          this.phoneNumberAmount = this.phoneArray.length
        }, err => console.error(err)
      );
    } else {
      this.invalidPhone = true;
    }


  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
}

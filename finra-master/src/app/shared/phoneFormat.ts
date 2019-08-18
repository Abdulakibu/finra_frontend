import { Pipe } from '@angular/core';

@Pipe({
  name: 'phone'
})

export class PhonePipe
{
  transform(tel)
  {
    let value = tel.toString().trim().replace(/^\+/, '');

    if (value.match(/[^0-9]/)) {
      return tel;
    }

    let country, city, number;

    switch (value.length) {
      case 10:
        country = 1;
        city = value.slice(0, 3);
        number = value.slice(3);
        break;

      case 7:
        country = '';
        city = '';
        number = value.slice(0);
        break;

      default:
        return tel;
    }

    if (country == 1) {
      country = "";
    }

    number = number.slice(0, 3) + '-' + number.slice(3);

    // @ts-ignore
    return (country + " (" + city + ") " + number).trim();
  }
}

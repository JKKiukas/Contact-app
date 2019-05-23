export class Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  eMail: string;
  street: string;
  postalCode: string;
  city: string;
  country: string;
  // address: IAddress;


  constructor(firstName?: string, lastName?: string, phoneNumber?: string, eMail?: string, street?: string, postalCode?: string,
              city?: string, country?: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.eMail = eMail;
    this.street = street;
    this.postalCode = postalCode;
    this.city = city;
    this.country = country;
    // this.address = {};
  }
    // public setAddress(street, postalCode, city, country) {
      // this.address.street = street;
      // this.address.postalCode = postalCode;
      // this.address.city = city;
      // this.address.country = country;
    // }
  }

// interface IAddress {
  // street?: string;
  // postalCode?: string;
  // city?: string;
  // country?: string;
// }

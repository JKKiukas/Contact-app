export class Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  eMail: string;
  address: IAddress;


  constructor(firstName?: string, lastName?: string, phoneNumber?: string, eMail?: string, address?: IAddress) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.eMail = eMail;
    this.address = address;
  }
}

interface IAddress {
  street: string;
  postalCode: string;
  city: string;
}

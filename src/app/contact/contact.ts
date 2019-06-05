export class Contact {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  id: number;


  constructor(firstName?: string, lastName?: string, phoneNumber?: string, eMail?: string, street?: string, postalCode?: string,
              city?: string, id?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.emailAddress = eMail;
    this.streetAddress = street;
    this.postalCode = postalCode;
    this.city = city;
    this.id = id;
  }
}

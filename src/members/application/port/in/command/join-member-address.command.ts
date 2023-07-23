export class JoinMemberAddressCommand {
  private readonly id: number;

  private readonly zipcode: string;

  private readonly address1: string;

  private readonly address2: string;

  constructor(param: { zipcode: string; address1: string; address2: string }) {
    // application state change
    // ex) input validation
    this.id = null;
    this.zipcode = param.zipcode;
    this.address1 = param.address1;
    this.address2 = param.address2;
  }

  getId() {
    return this.id
  }

  getZipcode() {
    return this.zipcode
  }

  getAddress1() {
    return this.address1
  }

  getAddress2() {
    return this.address2
  }
}

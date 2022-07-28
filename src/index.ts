import { NearBindgen, NearContract, call, view, near } from 'near-sdk-js';

// The @NearBindgen decorator allows this code to compile to Base64.
@NearBindgen
class MyContract extends NearContract {
  my_greeting: string;

  constructor() {
    //execute the NEAR Contract's constructor
    super();
    this.my_greeting = 'Hello Web3 World!';
  }

  // @call indicates that this is a 'change method' or a function
  // that changes state on the blockchain. Change methods cost gas.
  // For more info -> https://docs.near.org/docs/concepts/gas
  @call
  set_greeting({ message }: { message: string }) {   
    near.log(`Saving greeting ${message}`);
    this.my_greeting = message;
  }

  // @view indicates a 'view method' or a function that returns
  // the current values stored on the blockchain. View calls are free
  // and do not cost gas.
  @view
  view_greeting(): string {
    near.log(`The current greeting is ${this.my_greeting}`);
    return this.my_greeting;
  }
}

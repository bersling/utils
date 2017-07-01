import { ImmutabilityUtils } from './immutability';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Immutability Utils', () => {

  it('should correctly deep copy' , () => {
    const myObject = {
      hello: "world"
    };

    const copiedData = ImmutabilityUtils.deepCopy(myObject);
    
    expect(copiedData.hello).to.equal("world");
    
    copiedData.hello = "planet";

    expect(copiedData.hello).to.equal("planet");

    expect(myObject.hello).to.equal("world");

  });

});

import { WebUtils } from './web';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('Web Utils', () => {

  it('should combine urls as expected' , () => {

    expect(WebUtils.urlJoin('http://example.com', 'a')).to.equal('http://example.com/a');
    expect(WebUtils.urlJoin('http://example.com/', '/a')).to.equal('http://example.com/a');
    expect(WebUtils.urlJoin('/', '/blabla')).to.equal('/blabla');
    expect(WebUtils.urlJoin('/root/', '/blabla')).to.equal('/root/blabla');
    expect(WebUtils.urlJoin('/root/beer', '/blabla')).to.equal('/root/beer/blabla');

  });

});

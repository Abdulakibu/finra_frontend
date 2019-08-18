process.env.NODE_ENV = 'test';


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();
expect = chai.expect;


chai.use(chaiHttp);
describe('phoneNumber api', () => {
  const url = '/api/phoneNumbers/';
  /*
    * Test the /GET route
    */
  describe('/GET', () => {
    it('it should test api returns successfully', (done) => {
      chai.request(server)
        .get(url+'1')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('it should test api property values', (done) => {
      const phoneResponse = [ '12', '21' ];
      chai.request(server)
        .get(url+'1,2')
        .end((err, res) => {
          res.body.should.have.property('result');
          res.body.should.have.property('result').eql(phoneResponse);
          done();
        });
    });

    it('it should test api with duplicate property values', (done) => {
      const phoneResponse = [ '11' ];
      chai.request(server)
        .get(url+'1,1')
        .end((err, res) => {
          res.body.should.have.property('result');
          res.body.should.have.property('result').eql(phoneResponse);
          done();
        });
    });


    it('it should  test api when characters are passed', (done) => {
      const phoneResponse = ["NaN"];
      chai.request(server)
        .get(url+'nope')
        .end((err, res) => {
          res.body.should.have.property('result');
          res.body.should.have.property('result').eql(phoneResponse);
          done();
        });
    });

    it('it should test api when values are not passed as array', (done) => {
      const phoneResponse = ["12"];
      chai.request(server)
        .get(url+'12')
        .end((err, res) => {
          res.body.should.have.property('result');
          res.body.should.have.property('result').eql(phoneResponse);
          done();
        });
    });
  });
});

import chai from 'chai';
const expect = chai.expect;
import Customer from '../src/classes/customer'
import { customers } from '../src/sampleData/sample-data'

describe('Customer', () => {
    let customer;

    beforeEach(() => {
        customer = new Customer(customers[0])
    })

    it('Should be a function', () => {
        expect(Customer).to.be.a('function');
    })

    it('Should store info from customer details', () => {
        expect(customer.id).to.equal(customers[0].id);
        expect(customer.name).to.equal(customers[0].name);
    })

});
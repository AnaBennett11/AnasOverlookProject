import chai from 'chai';
import Booking from '../src/classes/Booking';
const expect = chai.expect;
import Customer from '../src/classes/customer'
import { customers, rooms, bookings } from '../src/sampleData/sample-data'

describe('Customer', () => {
    let customer, booking, bookingData;
    
    beforeEach(() => {
        bookingData = bookings.map((booking) => {
            return new Booking(booking)
        })
        customer = new Customer(customers[0])
        booking = new Booking(bookingData[0])
    })

    it('Should be a function', () => {
        expect(Customer).to.be.a('function');
    })

    it('Should store info from customer details', () => {
        expect(customer.id).to.equal(customers[0].id);
        expect(customer.name).to.equal(customers[0].name);
        expect(customer.bookings).to.deep.equal([]);
    })

    it('Should get booking history for the customer', () => {
        customer.getCustomerBookingHistory(bookingData, rooms);
        expect(customer.bookings[0].id).to.equal(booking.id);
    })

    it('Should get a total of the customer/s spendings', () => {
        customer.getCustomerBookingHistory(bookingData, rooms)
        expect(customer.getTotalSpent()).to.equal(1326.92)
    })

});
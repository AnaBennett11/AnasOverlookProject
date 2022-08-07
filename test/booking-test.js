import chai from 'chai';
const expect = chai.expect;
import Booking from '../src/classes/booking'
import Room from '../src/classes/Room';
import { bookings, rooms } from '../src/sampleData/sample-data'

describe('Booking', function () {
    let booking;

    beforeEach(() => {
        booking = new Booking(bookings[0])
        
    })

    it('Booking should be a function', function () {
    
        expect(Booking).to.be.a('function');
    });

    it('should be able to instantiate a new class', () => {
        expect(booking).to.be.an.instanceOf(Booking)
    })

    it('should be able to take in and store booking data', () => {
        expect(booking.id).to.equal(bookings[0].id)
        expect(booking.userID).to.equal(bookings[0].userID)
        expect(booking.date).to.equal(bookings[0].date)
        expect(booking.roomNumber).to.equal(bookings[0].roomNumber)
    })

    it('Should store info from room details', () => {
        booking.getRoomDetails(rooms)
        expect(booking.roomDetails).to.be.an.instanceOf(Room);
        expect(booking.roomDetails.number).to.equal(1)
    })

});
import chai from 'chai';
import Hotel from '../src/classes/Hotel';
const expect = chai.expect;
import { customers, rooms, bookings } from '../src/sampleData/sample-data'

describe('Hotel', function() {
    let hotel;

    beforeEach(() => {
        hotel = new Hotel(customers, rooms, bookings)
    })

    it('Hotel should be a function', function() {
        expect(Hotel).to.be.a('function');
    });

    it('should be an instance of Hotel', () => {
        expect(hotel).to.be.an.instanceOf(Hotel)
    })

    it('should be able to take in and store all the necessary information', () => {
        expect(hotel.allCustomers).to.equal(customers)
        expect(hotel.allBookings).to.equal(bookings)
        expect(hotel.allRooms).to.equal(rooms)
        expect(hotel.roomAvailabilityByDate).to.deep.equal([]);
    })

    it('should get rooms availability by date', function() {
        hotel.getAvailabilityByDate("2022/01/10")
        expect(hotel.roomAvailabilityByDate).to.deep.equal([
            {
                number: 1,
                roomType: 'residential suite',
                bidet: true,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 358.4
            },
            {
                number: 2,
                roomType: 'suite',
                bidet: false,
                bedSize: 'full',
                numBeds: 2,
                costPerNight: 477.38
            },
            {
                number: 4,
                roomType: 'single room',
                bidet: false,
                bedSize: 'queen',
                numBeds: 1,
                costPerNight: 429.44
            }
        ])
        hotel.getAvailabilityByDate('2025/12/05')
        expect(hotel.roomAvailabilityByDate).to.deep.equal([])
        
    })
  

    it('should be able to filter the available rooms by type', function() {
        hotel.getAvailabilityByDate('2022/02/06')
        expect(hotel.filterAvailabilityByType("single room")).to.deep.equal([
            {
                bedSize: 'king',
                bidet: false,
                costPerNight: 491.14,
                numBeds: 1,
                number: 3,
                roomType: 'single room',
                
            }
        ]
)
    })
    
    
})

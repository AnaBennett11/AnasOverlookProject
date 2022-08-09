import chai from 'chai';
const expect = chai.expect;
import Room from '../src/classes/room'
import { rooms } from '../src/sampleData/sample-data'


describe('Room', () => {
    let room;
    beforeEach(() => {
        room = new Room(rooms[0])
    })

    it('Should be a function', () => {
        expect(Room).to.be.a('function');
    })

    it('Should store info from room details', () => {
        // console.log(room)
        expect(room.number).to.equal(rooms[0].number);
        expect(room.roomType).to.equal(rooms[0].roomType);
        expect(room.bidet).to.equal(rooms[0].bidet);
        expect(room.bedSize).to.equal(rooms[0].bedSize);
        expect(room.numBeds).to.equal(rooms[0].numBeds);
        expect(room.costPerNight).to.equal(rooms[0].costPerNight);
    })

    

})
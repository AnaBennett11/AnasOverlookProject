class Room {
    constructor(roomDetails) {
        this.roomNumber = roomDetails.roomNumber;
        this.roomType = roomDetails.roomType;
        this.hasBidet = roomDetails.bidet;
        this.bedSize = roomDetails.bedSize;
        this.numberOfBeds = roomDetails.numBeds;
        this.costPerNight = roomDetails.costPerNight;
    }
}





export default Room;
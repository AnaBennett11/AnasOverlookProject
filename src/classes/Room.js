class Room {
    constructor(roomDetails) {
        this.number = roomDetails.number;
        // console.log(this.roomNumber)
        this.roomType = roomDetails.roomType;
        this.bidet = roomDetails.bidet;
        this.bedSize = roomDetails.bedSize;
        this.numBeds = roomDetails.numBeds;
        this.costPerNight = roomDetails.costPerNight;
    }
}





export default Room;
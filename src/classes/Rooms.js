// { "number": 1, "roomType": "residential suite", "bidet": true, "bedSize": "queen", "numBeds": 1, "costPerNight": 358.4 }

class Rooms {
    constructor(roomDetails) {
        this.number = roomDetails.number;
        this.roomType = roomDetails.roomType;
        this.bidet = roomDetails.bidet;
        this.bedSize = roomDetails.bedSize;
        this.numBeds = roomDetails.numBeds;
        this.costPerNight = roomDetails.costPerNight;
    }
}





export default Rooms;
import Room from "./Room";

class Booking {
  constructor(bookingDetails) {
    this.id = bookingDetails.id;
    this.userID = bookingDetails.userID;
    this.date = bookingDetails.date;
    this.roomNumber = bookingDetails.roomNumber;
    this.roomDetails;
  }
  
  getRoomDetails(roomInfo) {
    let matchingDetails = roomInfo.find((room) => {
      return room.number === this.roomNumber;
    })
    
    this.roomDetails = new Room(matchingDetails)
   
  }


    
}
export default Booking;
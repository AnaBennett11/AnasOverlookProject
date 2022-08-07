import Booking from "./Booking";

class Customer {
    constructor(customerDetails) {
      this.id = customerDetails.id;
      this.name = customerDetails.name;
      this.bookings = [];
    }
///get the customers booking history
getCustomerBookingHistory(bookingInfo, roomInfo) {
    this.bookings = bookingInfo
      .filter(booking => booking.userID === this.id)
        .map(item => new Booking(item))

    this.bookings.forEach((booking) => {
      booking.getRoomDetails(roomInfo)
    })
}

getTotalSpent() {
  let total = this.bookings.reduce((acc, booking) => {
    acc += booking.roomDetails.costPerNight
    return acc
  }, 0)
  return total
}

    }
 
export default Customer;

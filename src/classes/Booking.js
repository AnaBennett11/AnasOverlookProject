// 2. Customer Interaction
// As a customer:

// I should be able to select a date for which I’d like to book a room for myself
// Upon selecting a date, I should be shown a list of room details for only rooms that are available on that date
// I should be able to filter the list of available rooms by their roomType property
// I should be able to select a room for booking
// In the event that no rooms are available for the date / roomType selected, display a message fiercely apologizing to the user and asking them to adjust their room search
// { "id": "5fwrgu4i7k55hl6sz", "userID": 9, "date": "2022/04/22", "roomNumber": 15 }
class Booking {
  constructor(bookingDetails) {
    this.id = bookingDetails.id;
    this.userId = bookingDetails.userId;
    this.date = bookingDetails.date;
    this.roomNumber = bookingDetails.roomNumber;
  }
  
//iteration 1
  //getCustomerBookings() {

  //}

  //getTotalCustomerSpendings() {

  //}

  //iteration 2
  //getAvailableRooms(date) {

 // }

 //addBooking(customer id, roomnumber) {

 //}

    
}
export default Booking;
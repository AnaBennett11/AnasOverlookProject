import Database from "../apiCalls";

class Customer {
    constructor(customerDetails) {
      this.id = customerDetails.id;
      this.name = customerDetails.name;
      //this.bookings = [];

    }

    async getTotalSpendings() {
      //instantiate a database object
      let dataBase = new Database()
      //get all the bookings
      let data = await dataBase.getBookings();
      let bookings = data.bookings;
     //get all the rooms
      data = await dataBase.getRooms();
      let rooms = data.rooms;

      //we need to loop thru all the bookings
      let myBookings = bookings.filter((booking) => {
        console.log(booking, "line")
        return booking.userID === this.id;
      })
      let totalSpend = 0;
      myBookings.forEach((booking) => {
        let foundRoom = rooms.find(r => r.number === booking.roomNumber);
        if (!(foundRoom === undefined))
        {
          totalSpend = totalSpend + foundRoom.costPerNight;
        }
      });

      return totalSpend;



      
      //we need to loop thru all the bookings and filter on just this customers bookings and then add up the total spent
    }
    //getbookings() {}

// getPoints() {}

    //define method for login
}

// 1. Dashboard
// As a customer:

// I should see a dashboard page that shows me:
// Any room bookings I have made(past or upcoming)
// The total amount I have spent on rooms

export default Customer;

//# sourceURL=customer.js
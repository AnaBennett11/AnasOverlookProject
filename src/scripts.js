// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Bookings from './classes/Bookings';
import Customers from './classes/Customers';
import Rooms from './classes/Rooms';
import Database from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'


console.log('This is the JavaScript entry file - your code begins here.');

//instantiate your classes, get all your data, export your data to your dom file so you can update the dom 
// so you're going to do alot of importing and exporting between the dom and the scripts file


///login functionality 

//1. Dashboard(this goes in the scripts)
// As a customer:

// I should see a dashboard page that shows me:
// Any room bookings I have made(past or upcoming)
// The total amount I have spent on rooms
testDataBaseClass();
async function testDataBaseClass() {

    alert('hi');
    var db = new Database();

    var data = await db.getCustomers();
    var customers = data.customers;
    console.log(customers);

    var data = await db.getCustomer(4);
    var customer = data;
    console.log(customer);

    var data = await db.getRooms();
    var rooms = data.rooms;
    console.log(rooms);

    var data = await db.getBookings();
    var bookings = data.bookings;
    console.log(bookings);

    var newBooking = { "userID": 48, "date": "2023/09/23", "roomNumber": 4 };
    var data = await db.addBooking(newBooking);
    var booking = data.newBooking;
    console.log(booking);

    var bookingId = booking.id;
    var data = await db.deleteBooking(bookingId);
    console.log(data);



}
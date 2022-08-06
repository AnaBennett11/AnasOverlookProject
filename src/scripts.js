// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Bookings from './classes/Booking';
import Customer from './classes/Customer';
import Room from './classes/Room';
import Database from './apiCalls';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/overlook.png';
import './images/overlook-hotel.jpg';


//query selectors
let homeButton = document.querySelector('.home-button');
let bookStayButton = document.querySelector('.book-a-stay-button');
let pastBookingsButton = document.querySelector('.past-bookings-button');
let currentBookingsButton = document.querySelector('.current-bookings-button');
let futureBookingsButton = document.querySelector('.future-bookings-button');
let submitButton = document.querySelector('.submit-button');
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let loginPage = document.querySelector('.background-image-login');
let homeContainer = document.querySelector('.home-container');
let customerName = document.querySelector('#customerName');
let totalSpend = document.querySelector('#totalSpend');



//event handlers
submitButton.addEventListener('click', login);

//global variables
let customer;

//instantiate your classes, get all your data, export your data to your dom file so you can update the dom 
// so you're going to do alot of importing and exporting between the dom and the scripts file

//possible helper functions
const showElement = (element) => {
    element.classList.remove('hidden');
};

const hideElement = (element) => {
    element.classList.add('hidden');
};


async function login() {
    //the goal of this function is to validate the password and to store the validated user id in the global variable userID
    let dataBase = new Database();//instatiating the Database class
    let username = usernameInput.value;
    let pwd = passwordInput.value;
    let userId = username.substring(0, 8);
    let uid = username.substring(8);
    let theData;


    if (pwd === 'overlook2021' && userId === 'customer') {
       theData = await dataBase.getCustomer(uid);
       console.log(theData);
       if (theData.message === undefined)
       {
        customer = new Customer(theData);
            //  customer found. Successful login.
        hideElement(loginPage)
        showElement(everything)
        showElement(homeContainer)
        customerName.innerText = customer.name;
        let spendings = await customer.getTotalSpendings();
        totalSpend.innerText = spendings;
            // hide login section and show dashboard.
       }
       else
       {
            //  customer not found
           alert('login failed please try again');
       }
    } else {
        alert('login failed please try again');
    }

    console.log(username);
    console.log(pwd);
    console.log(userId);
    console.log(uid);
}

//testDataBaseClass();

async function testDataBaseClass() {
  
  
    var db = new Database();///the Database class encapsulates the fetch api functionality 

    var data = await db.getCustomers();
    var customers = data.customers;
    console.log(customers);

    var data = await db.getCustomer(4);
    var customer = data;
    console.log(customer);

    var data = await db.getCustomer(999);
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

//# sourceURL=scripts.js
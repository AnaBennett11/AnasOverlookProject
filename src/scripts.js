// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Booking from './classes/Booking';
import Customer from './classes/Customer';
import Room from './classes/Room';
import { getCustomers, getCustomer, getBookings, getRooms, addBooking, deleteBooking} from './apiCalls';
import { theDom } from './dom.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/overlook.png';
import './images/overlook-hotel.jpg';



//query selectors
let homeButton = document.querySelector('.home-button');
let bookStayButton = document.querySelector('.book-a-stay-button');
let pastBookingsButton = document.querySelector('.past-bookings-button');
let futureBookingsButton = document.querySelector('.future-bookings-button');
let submitButton = document.querySelector('.submit-button');
let usernameInput = document.querySelector('#username');
let passwordInput = document.querySelector('#password');
let loginPage = document.querySelector('.background-image-login');
let homeContainer = document.querySelector('.home-container');
let customerName = document.querySelector('#customerName');
let totalSpend = document.querySelector('#totalSpend');
let pastBookings = document.querySelector('.past-container');
let currentBookings = document.querySelector('.current-container');
let currentBookingsButton = document.querySelector('.current-bookings-button');



//event handlers
window.addEventListener('load', (event) => { fetchAllData() });
// submitButton.addEventListener('click', login);
currentBookingsButton.addEventListener('click', () => { theDom.getCurrentBookings() });

//global variables
let customer;
let allCustomers;
export let booking;
let room;
let addAllBookings;
let removeAllBookings;

//instantiate your classes, get all your data, export your data to your dom file so you can update the dom 
// so you're going to do alot of importing and exporting between the dom and the scripts file



function fetchAllData() {
    Promise.all([getCustomers(), getCustomer(4), getRooms(), getBookings(), addBooking({ "userID": 48, "date": "2019/09/23", "roomNumber": 4 }), deleteBooking()])
    .then(data => parseData(data))
}

function parseData(data) {
    let customers = data[0];
    console.log(customers)
    let customer = data[1];
    console.log(customer)
    let rooms = data[2];
    let bookings = data[3];
    let addBooking = data[4];
    let removeBooking = data[5];

    instantiateClasses(customers, customer, rooms, bookings, addBooking, removeBooking)
}

function instantiateClasses(customers, customer, rooms, bookings, addBooking, removeBooking) {
   customer = new Customer(customer)
   booking = new Booking(bookings)
   room = new Room(rooms)
   allCustomers = customers
   addAllBookings = addBooking
   removeAllBookings = removeBooking

}







// async function login() {
//     //the goal of this function is to validate the password and to store the validated user id in the global variable userID
//     let dataBase = new Database();//instatiating the Database class
//     let username = usernameInput.value;
//     let pwd = passwordInput.value;
//     let userId = username.substring(0, 8);
//     let uid = username.substring(8);
//     let theData;


//     if (pwd === 'overlook2021' && userId === 'customer') {
//        theData = await dataBase.getCustomer(uid);
//        console.log(theData);
//        if (theData.message === undefined)
//        {
//         customer = new Customer(theData);
//             //  customer found. Successful login.
//         hideElement(loginPage)
//         showElement(everything)
//         showElement(homeContainer)
//         customerName.innerText = customer.name;
//         let spendings = await customer.getTotalSpendings();
//         totalSpend.innerText = spendings;
//             // hide login section and show dashboard.
//        }
//        else
//        {
//             //  customer not found
//            alert('login failed please try again');
//        }
//     } else {
//         alert('login failed please try again');
//     }

//     console.log(username);
//     console.log(pwd);
//     console.log(userId);
//     console.log(uid);
// }

// //testDataBaseClass();

// async function testDataBaseClass() {
  
  
//     var db = new Database();///the Database class encapsulates the fetch api functionality 

//     var data = await db.getCustomers();
//     var customers = data.customers;
//     console.log(customers);

//     var data = await db.getCustomer(4);
//     var customer = data;
//     console.log(customer);

//     var data = await db.getCustomer(999);
//     var customer = data;
//     console.log(customer);

//     var data = await db.getRooms();
//     var rooms = data.rooms;
//     console.log(rooms);

//     var data = await db.getBookings();
//     var bookings = data.bookings;
//     console.log(bookings);

//     var newBooking = { "userID": 48, "date": "2023/09/23", "roomNumber": 4 };
//     var data = await db.addBooking(newBooking);
//     var booking = data.newBooking;
//     console.log(booking);

//     var bookingId = booking.id;
//     var data = await db.deleteBooking(bookingId);
//     console.log(data);



// }

// //# sourceURL=scripts.js
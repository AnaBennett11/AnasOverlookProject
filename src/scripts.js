// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
import Booking from './classes/Booking';
import Customer from './classes/Customer';
import Room from './classes/Room';
import Hotel from './classes/Hotel';
import { getCustomers, getCustomer, getBookings, getRooms, addBooking} from './apiCalls';
// import { theDom } from './dom.js';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/overlook.png';
import './images/overlook-hotel.jpg';
import './images/hotel-room.jpg';



//query selectors
let currentBookingsButton = document.querySelector('.current-bookings-button');
let loginPage = document.querySelector('.background-image-login');
let currentBookings = document.querySelector('.current-container');
let homeContainer = document.querySelector('.home-container');
let pastBookings = document.querySelector('.past-container');
let futureBookings = document.querySelector('.future-container');
let homeButton = document.querySelector('.home-button');
let bookingContainer = document.querySelector('.booking-container');
let calenderInput = document.getElementById('start');
let roomTypeInput = document.getElementById('roomType');
let roomTypeContainer = document.querySelector('.room-by-type-container')
// let currentBookingCard = document.querySelector('.current-booking-card');
let bookStayButton = document.querySelector('.book-a-stay-button');
// let pastBookingsButton = document.querySelector('.past-bookings-button');
// let futureBookingsButton = document.querySelector('.future-bookings-button');
// let submitButton = document.querySelector('.submit-button');
// let usernameInput = document.querySelector('#username');
// let passwordInput = document.querySelector('#password');
let customerName = document.querySelector('#customerName');
let totalSpend = document.querySelector('#totalSpend');
let availableRoomsContainer = document.querySelector('.available-rooms-container');
let form = document.querySelector('.booking-selection');









//event handlers
window.addEventListener('load', fetchAllData);

currentBookingsButton.addEventListener('click', getCurrentBookings);
homeButton.addEventListener('click', goHome);
calenderInput.addEventListener('change', filterByDate)
roomTypeInput.addEventListener('change', filterByType)
bookStayButton.addEventListener('click', bookARoom)
availableRoomsContainer.addEventListener('click', (event) => {
    if (event.target.classList == 'book-it-button') {
        return bookAvailableRoom(event);
    }
});
roomTypeContainer.addEventListener('click', (event) => {
    if (event.target.classList == 'book-it-button') {
        return bookAvailableRoom(event);
    }
});
// submitButton.addEventListener('click', login);
// roomTypeInput.addEventListener('change', () => {console.log('it changed')})



//global variables
let customer;
let allCustomers;
let bookings;
let booking;
let allRooms;
let hotel;
let addBookings;
let postedBookingData;






function fetchAllData() {
    Promise.all([getCustomers(), getRooms(), getBookings()])
    //getCustomer(4)
    //addBooking({ "userID": 48, "date": "2019/09/23", "roomNumber": 4 }) add this back when you POST
    .then(data => parseData(data))
    
}

function parseData(data) {
    allCustomers = data[0].customers;
    // customer = data[1];
    allRooms = data[1].rooms;
    bookings = data[2].bookings;
    // addBookings = data[4];
    customer = new Customer(allCustomers[1])
    hotel = new Hotel(allCustomers, allRooms, bookings)

    displayUserName();
}

function showElement(element) {
    element.classList.remove('hidden');
}

function hideElement(element) {
    element.classList.add('hidden');
}


function displayUserName() {
    showElement(homeContainer)
    hideElement(currentBookings)
    hideElement(form)
    customerName.innerText = `${customer.name}`
    totalSpend.innerText = `${customer.getTotalSpent().toFixed(2)}`
}

function goHome() {
    showElement(homeContainer)
    hideElement(bookingContainer)
    hideElement(currentBookings)
    hideElement(availableRoomsContainer)
    hideElement(roomTypeContainer)
    hideElement(form)
}


function getCurrentBookings() {
  
    // event.preventDefault()
    // hideElement(loginPage)
    hideElement(homeContainer)
    hideElement(availableRoomsContainer)
    showElement(currentBookings)
    hideElement(roomTypeContainer);

    // currentBookings.innerHTML += ``
    customer.getCustomerBookingHistory(bookings, allRooms)
    return customer.bookings.map((booking) => {
        currentBookings.innerHTML += 
        `<section class="current-booking-card">
            <img class="hotel-image" src='./images/hotel-room.jpg' alt="hotel-room-image">
                <p class="booking-date">${booking.date}</p>
                <p class="booking-room-type">${booking.roomDetails.roomType}</p>
                <p class="booking-cost">${booking.roomDetails.costPerNight}</p>
            </section>`
    })
}
 




function filterByDate(event) {
    // event.preventDefault();
    showElement(availableRoomsContainer)
    showElement(form)
    hideElement(homeContainer);
    hideElement(currentBookings);
    hideElement(roomTypeContainer)
    // hideElement(bookingContainer);
    
    hotel.getAvailabilityByDate(event.target.value);
    
    hotel.roomAvailabilityByDate.forEach((availability) => {

        availableRoomsContainer.innerHTML += `<section class="current-booking-card">
            <img class="hotel-image" src='./images/hotel-room.jpg' alt="hotel-room-image">
                <p class="booking-date">${availability.roomType}</p>
                <p class="booking-room-type">${availability.bedSize}</p>
                <p class="booking-cost">${availability.costPerNight}</p>
                 <input type="submit" value="Book it" name="book-it-button" class="book-it-button" id="${availability.number}"></input>
            </section>`
    })
 
}
//// <p class="booing-date">${availability.date}</p> ^^^^

function filterByType(event) {

  
    hideElement(homeContainer);
    hideElement(currentBookings);
    // hideElement(bookingContainer);
    showElement(roomTypeContainer);
    showElement(availableRoomsContainer);
    showElement(form);
    
  

    let filteredByType = hotel.filterAvailabilityByType(roomTypeInput.value);
    availableRoomsContainer.innerHTML = ''

    filteredByType.forEach((room) => {
        console.log(room)
        availableRoomsContainer.innerHTML += `<section class="current-booking-card">
            <img class="hotel-image" src='./images/hotel-room.jpg' alt="hotel-room-image">
                <p class="booking-date">${room.roomType}</p>
                <p class="booking-room-type">${room.bedSize}</p>
                <p class="booking-cost">${room.costPerNight}</p>
                <input type="submit" value="Book it" name="book-it-button" class="book-it-button" id="${room.number}"></input>
            </section>`
    })

}

function bookARoom() {
    hideElement(homeContainer);
    showElement(form)
    hideElement(currentBookings)
}

function getPostedBookingData(event) {
    postedBookingData = new FormData(form);
    let newBookedRoom = { 
        userID: customer.id,
        date: "2019/09/23", 
        roomNumber: parseInt(event.target.id)}

}

function bookAvailableRoom(event) {
    event.preventDefault();
    let newBookingData = getPostedBookingData(event);
    let newPost = addBooking(newBookingData);
    let fetchPromise = getBookings("bookings");
    Promise.all([newPost, fetchPromise])
    .then(response => {
        console.log(response, "response")
        booking = new Booking(response[0])
    })
    .catch(err => console.log(err));
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
//     var allCustomers = data.allCustomers;
//     console.log(allCustomers);

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
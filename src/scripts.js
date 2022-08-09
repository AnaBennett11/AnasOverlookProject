
import './css/styles.css';
import dayjs from "dayjs"
import Booking from './classes/Booking';
import Customer from './classes/Customer';
import Room from './classes/Room';
import Hotel from './classes/Hotel';
import { getCustomers, getCustomer, getBookings, getRooms, addBooking} from './apiCalls';

import './images/overlook.png';
import './images/overlook-hotel.jpg';
import './images/hotel-room.jpg';



//query selectors
let currentBookingsButton = document.querySelector('.current-bookings-button');
let loginPage = document.querySelector('.background-image-login');
let currentBookings = document.querySelector('.current-container');
let homeContainer = document.querySelector('.home-container');

let homeButton = document.querySelector('.home-button');
let bookingContainer = document.querySelector('.booking-container');
let calenderInput = document.getElementById('start');
let roomTypeInput = document.getElementById('roomType');
let roomTypeContainer = document.querySelector('.room-by-type-container')
let bookStayButton = document.querySelector('.book-a-stay-button');
let submitButton = document.querySelector('.submit-button');
let customerName = document.querySelector('#customerName');
let totalSpend = document.querySelector('#totalSpend');
let availableRoomsContainer = document.querySelector('.available-rooms-container');
let form = document.querySelector('.booking-selection');
let loginForm = document.getElementById('loginForm')
let backgroundLogin = document.querySelector('.background-image-login');
let everything = document.querySelector('.everything');










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

loginForm.addEventListener('submit', login)




//global variables
let customer;
let allCustomers;
let bookings;
let booking;
let allRooms;
let hotel;
let addBookings;
let postedBookingData;
let customerLoginInfo;






function fetchAllData() {

    hideElement(backgroundLogin)
    hideElement(currentBookings);
    hideElement(roomTypeContainer)
    showElement(everything)

    
    
    Promise.all([getCustomers(), getRooms(), getBookings()])

        .then(data => {
            allCustomers = data[0].customers;
            allRooms = data[1].rooms;
            bookings = data[2].bookings;
            hotel = new Hotel(allCustomers, allRooms, bookings)

            displayUserName();
        })
    
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
    customer.getCustomerBookingHistory(bookings, allRooms);
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
    fetchAllData();

}


function getCurrentBookings() {
    
    currentBookings.innerHTML='';
    availableRoomsContainer.innerHTML ='';

    hideElement(homeContainer)
    hideElement(availableRoomsContainer)
    showElement(currentBookings)
    hideElement(roomTypeContainer);


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
    event.preventDefault();
    
    showElement(availableRoomsContainer)
    showElement(form)
    hideElement(homeContainer);
    hideElement(currentBookings);
    hideElement(roomTypeContainer)
 
    
    hotel.getAvailabilityByDate(event.target.value);
    if(!hotel.roomAvailabilityByDate.length) {
        window.alert("Sorry nothing here!")
    } else {

    
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
}


function filterByType(event) {

    availableRoomsContainer.innerHTML = '';
    hideElement(homeContainer);
    hideElement(currentBookings);
    showElement(roomTypeContainer);
    showElement(availableRoomsContainer);
    showElement(form);
    
  

    let filteredByType = hotel.filterAvailabilityByType(roomTypeInput.value);
    
    if(!filteredByType.length) {
        window.alert("Sorry, there aren't any available for that type. Please try again!")
    } else {

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
        date: dayjs(postedBookingData.get('trip-start')).format('YYYY/MM/DD'), 
        roomNumber: parseInt(event.target.id)}
        return newBookedRoom;

}

function bookAvailableRoom(event) {
    event.preventDefault();
    let newBookingData = getPostedBookingData(event);
    let newPost = addBooking(newBookingData);
    let fetchPromise = getBookings("bookings");
    Promise.all([newPost, fetchPromise])
    .then(response => {
        window.alert("Your room is booked!")
        booking = new Booking(response[0])
    })
    .catch(err => console.log(err));
}


 function login(event) {
    event.preventDefault();
     customerLoginInfo = new FormData(event.target);
    if(checkValidityOfCustomer(customerLoginInfo.get("username"))&& customerLoginInfo.get("password") === "overlook2021") {
        fetch(`http://localhost:3001/api/v1/customers/${checkValidityOfCustomer(customerLoginInfo.get("username"))}`)
        .then(response => response.json())
        .then(response => {
            console.log("response: ", response)
            getTheCustomer(response)
            fetchAllData(response)
            customer = new Customer(response)
        })
        .catch(err => console.log(err))
    } else {
        window.alert("Invalid username or password, please try again.")
        event.target.reset()
    }

}

function checkValidityOfCustomer(customerName) {
    console.log("customerName", customerName)
    let customerSignInName = customerName.substring(0, 8);
    let customerSignInId = customerName.substring(8);
    if(customerSignInName === "customer" && parseInt(customerSignInId) < 51) {
        return customerSignInId
    } else {
        return false
    }
}

function getTheCustomer(listOfCustomers) {
    console.log("LIst of customers", listOfCustomers)
    return new Customer(listOfCustomers)
}

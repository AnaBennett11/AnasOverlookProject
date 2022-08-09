
// import { booking } from './scripts'

// // I should see a dashboard page that shows me:
// // Any room bookings I have made(past or upcoming)

// let currentBookingsButton = document.querySelector('.current-bookings-button');
// let loginPage = document.querySelector('.background-image-login');
// let currentBookings = document.querySelector('.current-container');
// let homeContainer = document.querySelector('.home-container');
// let pastBookings = document.querySelector('.past-container');
// let futureBookings = document.querySelector('.future-container');
// let homeButton = document.querySelector('.home-button');
// let bookingContainer = document.querySelector('.booking-container');
// // let currentBookingCard = document.querySelector('.current-booking-card');
// // let bookStayButton = document.querySelector('.book-a-stay-button');
// // let pastBookingsButton = document.querySelector('.past-bookings-button');
// // let futureBookingsButton = document.querySelector('.future-bookings-button');
// // let submitButton = document.querySelector('.submit-button');
// // let usernameInput = document.querySelector('#username');
// // let passwordInput = document.querySelector('#password');

// let customerName = document.querySelector('#customerName');
// let totalSpend = document.querySelector('#totalSpend');

// currentBookingsButton.addEventListener('click', () => { theDom.getCurrentBookings() });
// homeButton.addEventListener('click', () => {theDom.goHome()})


// let theDom = {
//     //possible helper functions
//      showElement(element) {
//         element.classList.remove('hidden');
//     },

//     hideElement(element) {
//         element.classList.add('hidden');
//     },
    
//     goHome() {
//         theDom.showElement(homeContainer)
//         theDom.hideElement(bookingContainer)
//         theDom.hideElement(pastBookings)
//         theDom.hideElement(currentBookings)
//         theDom.hideElement(futureBookings)
//     },

//     displayName() {
//         let welcomeMessage = `Welcome back ${customer.name}`
//         customerName.innerText = welcomeMessage
//     },

//     displayTotalSpent() {
//         let cost = customer.getTotalSpent()
//         totalSpend.innerText = `You have spent $${cost} this year on bookings.`
//     },
 

//     getCurrentBookings() {
//        console.log('taco')
//        console.log(booking)
//        theDom.hideElement(loginPage)
//        theDom.hideElement(homeContainer)
//        theDom.hideElement(pastBookings)
//        theDom.hideElement(futureBookings)
//        theDom.showElement(currentBookings)
//        currentBookings.innerHTML += ``
//         //when i click current bookings buttons, i want to hide the home container
//         //then i want to show the current container bookings in cards on the page 
//         //we have to dynamically add the cards(insert html)
//     }
    
// }

// export {theDom};
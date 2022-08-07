
import { booking } from './scripts'

// I should see a dashboard page that shows me:
// Any room bookings I have made(past or upcoming)




let theDom = {
    //possible helper functions
     showElement(element) {
        element.classList.remove('hidden');
    },

    hideElement(element) {
        element.classList.add('hidden');
    },

    getCurrentBookings() {
       console.log('taco')
        //when i click current bookings buttons, i want to hide the home container
        //then i want to show the current container bookings in cards on the page 
        //we have to dynamically add the cards(insert html)
    }
}

export {theDom};
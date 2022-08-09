class Hotel {
    constructor(customerInfo, roomInfo, bookingInfo) {
        this.allCustomers = customerInfo;
        this.allBookings = bookingInfo;
        this.allRooms = roomInfo;
        this.roomAvailabilityByDate = [];
        
    }

    //check availabitliy by date
    getAvailabilityByDate(date) {
        this.roomAvailabilityByDate = this.allRooms//we want to intially set this array to all the rooms so we can check all of the rooms for availability adn the result will be pushed into that array
        let filteredBookings = this.allBookings.filter((filteredBooking) => {
            return filteredBooking.date === date.split('-').join('/');
        })
        let checkRoomAvailability = (bookedRoom) => {
        
            return filteredBookings.reduce((acc, booking) => {
                if(booking.roomNumber === bookedRoom.number) {
                    acc = false
                }
             return acc
            }, true)
        }
        this.roomAvailabilityByDate = this.roomAvailabilityByDate.filter((room) => {
            return checkRoomAvailability(room)
        })
        
        return this.roomAvailabilityByDate
    }



    filterAvailabilityByType(roomType) {
        // const availableRooms = this.getAvailabilityByDate(date)
        if(roomType) {
            let roomsLeftByType = this.roomAvailabilityByDate.filter(availableRoom => {
                console.log(availableRoom)
                return availableRoom.roomType === roomType 
        })
        console.log(roomsLeftByType)
         return roomsLeftByType
        }
        
       
        
    }
}




export default Hotel;
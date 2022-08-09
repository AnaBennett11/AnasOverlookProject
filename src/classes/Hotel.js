class Hotel {
    constructor(customerInfo, roomInfo, bookingInfo) {
        this.allCustomers = customerInfo;
        this.allBookings = bookingInfo;
        this.allRooms = roomInfo;
        this.roomAvailabilityByDate = [];
        
    }

    
    getAvailabilityByDate(date) {
        this.roomAvailabilityByDate = this.allRooms
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
        if(roomType) {
            let roomsLeftByType = this.roomAvailabilityByDate.filter(availableRoom => {
                return availableRoom.roomType === roomType 
        })
         return roomsLeftByType
        }
    }
}




export default Hotel;
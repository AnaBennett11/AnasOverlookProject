// this is where api fetches go

class Database {

    constructor() {

    }

    async getCustomers() {
        let dataSet = await fetch('http://localhost:3001/api/v1/customers/');
        return dataSet.json();
    }

    async getCustomer(id) {
        let dataSet = await fetch(`http://localhost:3001/api/v1/customers/${id}`);
        return dataSet.json();
    }

    async getRooms() {
        let dataSet = await fetch('http://localhost:3001/api/v1/rooms');
        return dataSet.json();
    }

    async getBookings() {
        let dataSet = await fetch('http://localhost:3001/api/v1/bookings');
        return dataSet.json();
    }

    async addBooking(newBooking) {
        let dataSet = await fetch('http://localhost:3001/api/v1/bookings', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        return dataSet.json();
    }

    async deleteBooking(id) {
        let dataSet = await fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
            method: 'DELETE'
        });
        return dataSet.json();

    }
}

export default Database;

//# sourceURL=apiCalls.js
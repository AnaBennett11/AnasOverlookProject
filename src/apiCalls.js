    export function getCustomers() {
        return fetch('http://localhost:3001/api/v1/customers/')
        .then(response => response.json())
        .then(data => data);
    }

    export function getCustomer(id) {
        return fetch(`http://localhost:3001/api/v1/customers/${id}`)
        .then(response => response.json())
        .then(data => data);
    }

    export function getRooms() {
        return fetch('http://localhost:3001/api/v1/rooms')
        .then(response => response.json())
        .then(data => data);
    }

    export function getBookings() {
        return fetch('http://localhost:3001/api/v1/bookings')
        .then(response => response.json())
        .then(data => data);
    }

   export function addBooking(newBooking) {
        return fetch('http://localhost:3001/api/v1/bookings', {
            method: 'POST',
            body: JSON.stringify(newBooking),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(response => response.json())
        .then(data => data);
    }

    // export function deleteBooking(id) {
    //     return fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
    //         method: 'DELETE'
    //     })
    //     .then(response => response.json())
    //     .then(data => data);

    // }

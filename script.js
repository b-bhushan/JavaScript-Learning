// Replace this example data with your actual seating data from the server or database
const totalRows = 5;
const seatsPerRow = 5;
const bookedSeats = [3, 5, 12]; // Array of seat numbers that are already booked

// Function to generate the seating layout dynamically
function generateSeatingLayout() {
    const seatingLayout = document.getElementById('seating-layout');

    for (let row = 1; row <= totalRows; row++) {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';

        for (let seat = 1; seat <= seatsPerRow; seat++) {
            const seatElement = document.createElement('div');
            seatElement.className = 'seat';

            if (bookedSeats.includes((row - 1) * seatsPerRow + seat)) {
                seatElement.classList.add('booked');
                seatElement.removeEventListener('click', handleSeatClick);
            } else {
                seatElement.addEventListener('click', handleSeatClick);
            }

            seatElement.textContent = (row - 1) * seatsPerRow + seat;
            rowElement.appendChild(seatElement);
        }

        seatingLayout.appendChild(rowElement);
    }
}

// Function to handle seat click event
function handleSeatClick(event) {
    const seatElement = event.target;

    if (seatElement.classList.contains('selected')) {
        seatElement.classList.remove('selected');
    } else {
        seatElement.classList.add('selected');
    }
}

// Call the function to generate the seating layout on page load
generateSeatingLayout();

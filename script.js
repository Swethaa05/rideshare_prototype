function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill out both fields.');
        return false;
    }

    // Additional validation logic can go here

    return true; // Allow form submission if validation passes
}
const cars = [
    { name: "Maruti Suzuki Swift", image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-cars-png&psig=AOvVaw29dgRxCrcPAvTcFfqEjTfL&ust=1727191093139000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKCrm7Ku2YgDFQAAAAAdAAAAABAJ", seats: 4 },
    { name: "Hyundai i20", image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png", seats: 5 },
    { name: "Honda City", image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png", seats: 4 },
    { name: "Tata Nexon", image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png", seats: 5 },
    { name: "Mahindra Scorpio", image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png", seats: 7 },
    { name: "Toyota Fortuner", image: "https://png.pngtree.com/png-vector/20240309/ourmid/pngtree-black-super-car-png-image_11921537.png", seats: 7 }
];

// Function to get random car details
function getRandomCar() {
    return cars[Math.floor(Math.random() * cars.length)];
}

// Generate car list
const carListDiv = document.getElementById('car-list');
for (let i = 0; i < 3; i++) {
    const car = getRandomCar();

    const carCard = document.createElement('div');
    carCard.classList.add('car-card');

    carCard.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <div class="details">
            <h2>${car.name}</h2>
            <p class="seats">Seats Available: ${car.seats}</p>
        </div>
    `;

    // Add event listener to car card
    carCard.addEventListener('click', () => {
        window.location.href = 'profile.html'; // Redirect to seat.html
    });

    carListDiv.appendChild(carCard);
}
function redirectTo(role) {
    if (role === 'driver') {
        window.location.href = 'driver2.html';
    } else if (role === 'rider') {
        window.location.href = 'verification.html';
    }
}

const filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});

const map = L.map('map').setView([37.7749, -122.4194], 13); // Example: San Francisco

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap',
}).addTo(map);

const marker = L.marker([1.3521, 103.8198]).addTo(map);
marker.bindPopup('<b>Singapore</b>').openPopup();

var map = L.map('map').setView([20.5937, 78.9629], 5); 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var routingControl = L.Routing.control({
    waypoints: [],
    routeWhileDragging: true,
    show: false,
    geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);

var famousPlaces = [
    { 
        name: "Taj Mahal", 
        coords: [27.1751, 78.0421], 
        info: "A UNESCO World Heritage Site, this mausoleum is a symbol of love. It was commissioned in 1632 by Mughal Emperor Shah Jahan in memory of his favorite wife, Mumtaz Mahal.",
        image: [
        "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?cs=srgb&dl=ancient-architecture-building-1583339.jpg&fm=jpg",
        "https://example.com/charminar-2.jpg",
        "https://example.com/charminar-3.jpg"
    ],
        historicalDetails: "The Taj Mahal combines elements of Persian, Islamic, and Indian architectural styles. It is one of the most visited monuments in the world.",
        rating: 4.8,
        reviews: [{ user: "Alice", text: "Absolutely stunning! A must-visit." }, { user: "Bob", text: "An architectural marvel, just beautiful." }]
    },
    {
        name: "Bidar Fort",
        coords: [17.9133, 77.5199],
        info: "Bidar Fort is an ancient fort located in Bidar, Karnataka. Built in the 15th century, it is one of the most impressive and well-preserved forts in South India. The fort features an imposing structure with intricate architecture, surrounded by a large moat.",
        image: [
            "https://th.bing.com/th/id/OIP.IEp6k4QRXzAxIgx6MC_TwgHaE3?rs=1&pid=ImgDetMain",
            "https://example.com/bidar-fort-2.jpg",
            "https://example.com/bidar-fort-3.jpg"
        ],
        historicalDetails: "Bidar Fort was originally built by the Bahmani Sultanate in 1427 under Sultan Ahmad Shah Wali. Over the centuries, it became an important strategic and cultural center for several dynasties, including the Bahmanis, Barid Shahis, and Mughals.",
        rating: 4.6,
        reviews: [
            { user: "Meera", text: "A fantastic blend of history and architecture. The panoramic views from the fort are stunning." },
            { user: "Ravi", text: "The fort is massive and well-preserved. It's a must-visit for history lovers." }
        ]
    },
    
    { 
        name: "India Gate", 
        coords: [28.6129, 77.2295], 
        info: "A war memorial dedicated to Indian soldiers who died in World War I. It is located in New Delhi and is a popular tourist destination, surrounded by beautiful gardens.",
        image: [
        "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://example.com/charminar-2.jpg",
        "https://example.com/charminar-3.jpg"
    ],
        historicalDetails: "The India Gate was designed by Sir Edwin Lutyens and is a tribute to over 70,000 soldiers. It also serves as the venue for the Republic Day Parade.",
        rating: 4.5,
        reviews: [{ user: "Charlie", text: "Great place to relax and enjoy the view." }, { user: "Diana", text: "Very well maintained, beautiful gardens." }]
    },
    { 
        name: "Gateway of India", 
        coords: [18.9217, 72.8347], 
        info: "This iconic archway is located in Mumbai. Built in the 20th century, it overlooks the Arabian Sea and is one of the city's most famous landmarks.",
        image: [
        "https://static.toiimg.com/thumb/width-800,height-600,msid-29505591.cms",
        "https://example.com/charminar-2.jpg",
        "https://example.com/charminar-3.jpg"
    ],
        historicalDetails: "The Gateway of India was built to commemorate the visit of King George V and Queen Mary to India in 1911.",
        rating: 4.6,
        reviews: [{ user: "Eve", text: "Iconic place! Great views." }, { user: "Frank", text: "The architecture is breathtaking." }]
    },
    { 
        name: "Red Fort", 
        coords: [28.6562, 77.2410], 
        info: "A UNESCO World Heritage Site, the Red Fort served as the main residence of the Mughal emperors for nearly 200 years, until 1856.",
        image: [
        "https://images.pexels.com/photos/6776755/pexels-photo-6776755.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://example.com/charminar-2.jpg",
        "https://example.com/charminar-3.jpg"
    ],
        historicalDetails: "Constructed in 1638, it reflects the zenith of Mughal architecture.",
        rating: 4.7,
        reviews: [{ user: "George", text: "A wonderful place rich in history." }, { user: "Hannah", text: "Amazing architecture!" }]
    },
    { 
        name: "Hawa Mahal", 
        coords: [26.9239, 75.8267], 
        info: "Also known as the Palace of Winds, it is a stunning example of Rajput architecture located in Jaipur. The palace features a unique façade with 953 small windows.",
        image: [
        "https://images.pexels.com/photos/29008497/pexels-photo-29008497/free-photo-of-hawa-mahal-architectural-beauty-in-jaipur.png?auto=compress&cs=tinysrgb&w=600g",
        "https://example.com/charminar-2.jpg",
        "https://example.com/charminar-3.jpg"
    ],
        historicalDetails: "Built in 1799, the Hawa Mahal was designed to allow royal ladies to observe street festivals while unseen from the outside.",
        rating: 4.4,
        reviews: [{ user: "Ivy", text: "Incredible design, very photogenic!" }, { user: "Jake", text: "A masterpiece of architecture." }]
    },
    { 
        name: "Charminar", 
        coords: [17.3616, 78.4747], 
        info: "A historical monument and mosque located in Hyderabad, it was built in 1591 to commemorate the end of a deadly plague.",
        image: [
        "https://th.bing.com/th/id/OIP.-hqCQVkDmkuTvd24Os8AZAHaF_?w=220&h=180&c=7&r=0&o=5&pid=1.7",
        "https://th.bing.com/th/id/OIP.-hqCQVkDmkuTvd24Os8AZAHaF_?w=220&h=180&c=7&r=0&o=5&pid=1.7",
        "https://example.com/charminar-3.jpg"
    ],
        historicalDetails: "The Charminar is a symbol of Hyderabad and a must-visit for its architectural beauty.",
        rating: 4.5,
        reviews: [{ user: "Kathy", text: "A great place with rich culture." }, { user: "Leo", text: "Loved the vibrant atmosphere." }]
    },
    
    { 
        name: "Mysore Palace", 
        coords: [12.3051, 76.6552], 
        info: "The official residence of the Wadiyar dynasty, the Mysore Palace is a historical palace situated in the city of Mysore, Karnataka.",
        image: [
        "https://images.pexels.com/photos/4134644/pexels-photo-4134644.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://example.com/charminar-2.jpg",
        "https://example.com/charminar-3.jpg"
    ],
        historicalDetails: "Built in the 14th century, it showcases Indo-Saracenic architecture.",
        rating: 4.8,
        reviews: [{ user: "Mia", text: "A grand palace, very well maintained." }, { user: "Nina", text: "Beautiful lights during the evening." }]
    },
    {
        name: "Shivgiri Temple",
        coords: [16.8262, 75.7358],
        info: "Shivgiri Temple, located on the outskirts of Vijayapura, is known for its large statue of Lord Shiva in a meditative pose. The temple offers a peaceful ambiance for visitors.",
        image: [
            "https://farm8.staticflickr.com/7346/16535365725_50ff2f8aea_b.jpg",
            "https://example.com/gol-gumbaz-2.jpg",
            "https://example.com/gol-gumbaz-3.jpg"
        ],
        historicalDetails: "The temple and the giant statue of Shiva have become a popular spot for tourists and devotees alike.",
        rating: 4.5,
        reviews: [
            { user: "Bhavesh", text: "A tranquil temple with a massive Shiva statue." },
            { user: "Lalitha", text: "Very peaceful and serene atmosphere." }
        ]
    },
    
    {
        name: "Gol Gumbaz",
        coords: [16.8302, 75.7344],
        info: "The Golden Temple, also known as Sri Harmandir Sahib, is a sacred pilgrimage site for Sikhs, located in Amritsar, Punjab. It is famous for its golden dome and serene surroundings, with the temple built in the middle of a large man-made pool known as the 'Amrit Sarovar'.",
        image: [
            "https://th.bing.com/th/id/OIP.2KkK1zz9Y9fJXGK6RnSAEwHaFF?w=2048&h=1405&rs=1&pid=ImgDetMain",
            "https://example.com/gol-gumbaz-2.jpg",
            "https://example.com/gol-gumbaz-3.jpg"
        ],
        historicalDetails: "Built in 1656, the Gol Gumbaz is an architectural marvel and a symbol of the Adil Shahi dynasty’s grandeur.",
        rating: 4.7,
        reviews: [
            { user: "Shalini", text: "The whispering gallery is fascinating!" },
            { user: "Karan", text: "A majestic monument with impressive architecture." }
        ]
    },
    
    {
        name: "Golden Temple",
        coords: [31.6199, 74.8765],
        info: "The Golden Temple, also known as Sri Harmandir Sahib, is a sacred pilgrimage site for Sikhs, located in Amritsar, Punjab. It is famous for its golden dome and serene surroundings, with the temple built in the middle of a large man-made pool known as the 'Amrit Sarovar'.",
        image: [
            "https://th.bing.com/th/id/OIP.OtUNM2p2tTPHD2VbyziL5gAAAA?rs=1&pid=ImgDetMain",
            "https://example.com/golden-temple-2.jpg",
            "https://example.com/golden-temple-3.jpg"
        ],
        historicalDetails: "The temple was built in the 16th century by Guru Arjan, the fifth Sikh Guru, and is one of the most important spiritual and cultural symbols for Sikhs worldwide. The gold plating was added in the early 19th century by Maharaja Ranjit Singh.",
        rating: 4.9,
        reviews: [
            { user: "Ankita", text: "An awe-inspiring place filled with peace and spirituality." },
            { user: "Rajesh", text: "The beauty of the temple at night is breathtaking, especially when the lights reflect on the water." }
        ]
    }
    
];

document.getElementById('place-select').addEventListener('change', function() {
    var selectedPlace = famousPlaces.find(place => place.name === this.value);
    if (selectedPlace) {
        document.getElementById('place-name').textContent = selectedPlace.name;
        document.getElementById('place-image').src = selectedPlace.image;
        document.getElementById('place-description').textContent = selectedPlace.info;
        document.getElementById('place-info').style.display = 'block'; 
        setupRatings(selectedPlace);
        setupReviews(selectedPlace);
        map.setView(selectedPlace.coords, 14); 
        L.marker(selectedPlace.coords).addTo(map); 
    }
});

function setupRatings(place) {
    var stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.classList.remove('selected'); 
        star.addEventListener('click', function() {
            var rating = this.getAttribute('data-value');
            document.getElementById('user-rating').textContent = "Your Rating: " + rating + " stars";
            stars.forEach(s => {
                s.classList.remove('selected'); 
            });
            for (var i = 0; i < rating; i++) {
                stars[i].classList.add('selected'); 
            }
            place.rating = parseFloat(rating); 
        });
    });
}

function setupReviews(place) {
    var reviewList = document.getElementById('review-list');
    reviewList.innerHTML = ""; 
    place.reviews.forEach(review => {
        var reviewDiv = document.createElement('div');
        reviewDiv.textContent = review.user + ": " + review.text;
        reviewList.appendChild(reviewDiv);
    });

    document.getElementById('submit-review-button').onclick = function() {
        var username = document.getElementById('username').value;
        var userReview = document.getElementById('user-review').value;
        if (username && userReview) {
            place.reviews.push({ user: username, text: userReview });
            setupReviews(place); 
            document.getElementById('username').value = "";
            document.getElementById('user-review').value = ""; 
        } else {
            alert("Please enter your name and review.");
        }
    };
}

document.getElementById('find-route-button').addEventListener('click', function() {
    var selectedPlace = famousPlaces.find(place => place.name === document.getElementById('place-select').value);
    var startLocation = document.getElementById('start-location').value; 

    if (selectedPlace && startLocation) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${startLocation}`)
        .then(response => response.json())
        .then(startData => {
            if (startData.length === 0) {
                alert("Starting location not found. Please enter a valid address.");
                return;
            }

            var startCoords = [startData[0].lat, startData[0].lon];
            console.log("Start Coordinates:", startCoords);

            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=Mysore Palace, India`)
            .then(response => response.json())
            .then(destData => {
                if (destData.length === 0) {
                    alert("Destination not found!");
                    return;
                }

                var destCoords = [destData[0].lat, destData[0].lon];
                console.log("Destination Coordinates:", destCoords);

               
                if (window.routingControl) {
                    map.removeControl(window.routingControl);
                }

                window.routingControl = L.Routing.control({
                    waypoints: [
                        L.latLng(startCoords[0], startCoords[1]), 
                        L.latLng(destCoords[0], destCoords[1]) 
                    ],
                    routeWhileDragging: true
                }).addTo(map);

                map.setView(startCoords, 10); 
                L.marker(startCoords).addTo(map); 
                L.marker(destCoords).addTo(map); 
            });
        });
    } else {
        alert("Please select a tourist place and enter a valid starting location.");
    }
});

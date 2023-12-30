const map = L.map('map').setView([24.5, 82], 6); // Centered around India

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define the boundaries for different locations
const uttarPradeshBounds = [[24.5, 80], [30.5, 84]];
const madhyaPradeshBounds = [[21.5, 74], [26.5, 82]];
const delhiBounds = [[28.4, 76.8], [28.9, 77.3]];
const biharBounds = [[24.3, 83.5], [27.2, 88]];
const bengaluruBounds = [[12.8, 77.3], [13.2, 77.8]];
const suratBounds = [[21.1, 72.7], [21.3, 73.1]];
const gurgaonBounds = [[28.4, 76.9], [28.5, 77.1]];

// Event listener for map click
map.on('click', function (e) {
    // Check if the click is within the boundaries of Uttar Pradesh
    if (isWithinBounds(e.latlng, uttarPradeshBounds)) {
        window.open('uttar_pradesh.html', '_blank');
    }
    // Check if the click is within the boundaries of Madhya Pradesh
    else if (isWithinBounds(e.latlng, madhyaPradeshBounds)) {
        window.open('madhya_pradesh.html', '_blank');
    }
    // Check for other locations
    else if (isWithinBounds(e.latlng, delhiBounds)) {
        window.open('delhi.html', '_blank');
    }
    else if (isWithinBounds(e.latlng, biharBounds)) {
        window.open('bihar.html', '_blank');
    }
    else if (isWithinBounds(e.latlng, bengaluruBounds)) {
        window.open('bengaluru.html', '_blank');
    }
    else if (isWithinBounds(e.latlng, suratBounds)) {
        window.open('./Homepage.html', '_blank');
    }
    else if (isWithinBounds(e.latlng, gurgaonBounds)) {
        window.open('gurgaon.html', '_blank');
    }
});

// Function to check if a point is within specified bounds
function isWithinBounds(point, bounds) {
    return (
        point.lat >= bounds[0][0] &&
        point.lat <= bounds[1][0] &&
        point.lng >= bounds[0][1] &&
        point.lng <= bounds[1][1]
    );
}




// for search bar serach states
        function openPage() {
            const userInput = document.getElementById("searchInput").value.toLowerCase();

            // Map user input to corresponding HTML pages
            const pageMappings = {
                "uttar pradesh": "./uttar_pradesh.html",
                "madhya pradesh": "./madhya_pradesh.html",
                "delhi": "./delhi.html",
                "bihar": "./bihar.html",
                "bengaluru": "./bengaluru.html",
                "surat": "./surat.html",
                "gurgaon": "./gurgaon.html"
            };

            const matchedPage = pageMappings[userInput];
            
            if (matchedPage) {
                window.open(matchedPage, '_blank');
            } else {
                alert("Page not found. Please enter a valid page name.");
            }
        }
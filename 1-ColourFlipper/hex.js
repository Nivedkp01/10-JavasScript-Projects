const colorData = [
    { hex: '#FF0000', name: 'Red' },
    { hex: '#00FF00', name: 'Lime' },
    { hex: '#0000FF', name: 'Blue' },
    { hex: '#FFFF00', name: 'Yellow' },
    { hex: '#00FFFF', name: 'Cyan / Aqua' },
    { hex: '#FF00FF', name: 'Magenta / Fuchsia' },
    { hex: '#C0C0C0', name: 'Silver' },
    { hex: '#808080', name: 'Gray' },
    { hex: '#800000', name: 'Maroon' },
    { hex: '#808000', name: 'Olive' },
    { hex: '#008000', name: 'Green' },
    { hex: '#800080', name: 'Purple' },
    { hex: '#008080', name: 'Teal' },
    { hex: '#000080', name: 'Navy' },
    { hex: '#FFA07A', name: 'Light Salmon' },
    { hex: '#FF4500', name: 'Orange Red' },
    { hex: '#D2691E', name: 'Chocolate' },
    { hex: '#FFD700', name: 'Gold' },
    { hex: '#FF8C00', name: 'Dark Orange' },
    { hex: '#FF7F50', name: 'Coral' },
    { hex: '#FF6347', name: 'Tomato' }
];

// Get the body element
const body = document.body;

// Loop through colorData array
colorData.forEach(color => {
    // Create a new h1 element
    const h1 = document.createElement('h1');
    // Set the text content of h1 to hex value and color name
    h1.textContent = color.hex+ ' :  '+color.name;
    // Append the h1 element to the body
    h1.style.color=color.hex
    body.appendChild(h1);
});

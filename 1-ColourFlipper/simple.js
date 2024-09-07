const simpleColors = [
    { name: 'Red' },
    { name: 'Green' },
    { name: 'Blue' },
    { name: 'Cyan' },
    { name: 'Magenta' },
    { name: 'Yellow' },
    { name: 'Black' },
    { name: 'White' },
    { name: 'Gray' },
    { name: 'Silver' },
    { name: 'Maroon' },
    { name: 'Olive' },
    { name: 'Navy' },
    { name: 'Purple' },
    { name: 'Teal' },
    { name: 'Aqua' },
    { name: 'Lime' },
    { name: 'Fuchsia' },
    { name: 'Orange' },
    { name: 'Pink' }
];




simpleColors.forEach((clr)=>{
    const h1=document.createElement('h1')
    h1.textContent=clr.name;
    h1.style.color=clr.name
    document.body.appendChild(h1)
})
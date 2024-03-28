function configureListeners() {
    let images = document.getElementsByTagName('img'); // select img elements  


    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i].id).addEventListener('mouseover', addOpacity, false);
        document.getElementById(images[i].id).addEventListener('mouseout', removeOpacity, false);
        // iterate over images and add mouseover event listeners      
    }
}

function addOpacity(event) {
    if (!this.classList.contains('dim')) {
        this.classList.add('dim');
    }
    // add appropriate CSS class
    getProductInfo(event.target.id);
}

function removeOpacity(event) {
    if (this.classList.contains('dim')) {
        this.classList.remove('dim');
    }
    //remove appropriate CSS class

    let element = document.getElementById('color-price');
    element.textContent = '';

    let color = document.getElementById('color-name');
    color.textContent = '';

    event.preventDefault();
}


// obj literal/shorter version of getProductInfo  

function getProductInfo(paintColor) {
    const colorInfo = {
        'pn1': { price: '$14.99', name: 'Lime Green' },
        'pn2': { price: '$11.14', name: 'Medium Brown' },
        'pn3': { price: '$22.99', name: 'Royal Blue' },
        'pn4': { price: '$13.42', name: 'Solid Red' },
        'pn5': { price: '$21.98', name: 'Solid White' },
        'pn6': { price: '$4.99', name: 'Solid Black' },
        'pn7': { price: '$8.22', name: 'Solid Cyan' },
        'pn8': { price: '$11.99', name: 'Solid Purple' },
        'pn9': { price: '$14.99', name: 'Solid Yellow' },

    };

    let colorInfoData = colorInfo[paintColor];
    updatePrice(colorInfoData.name, colorInfoData.price);
}


function updatePrice(colorName, price) {
    let colorPrice = document.getElementById('color-price');
    colorPrice.textContent = price;


    let color = document.getElementById('color-name');
    color.textContent = colorName;

}
configureListeners();

document.addEventListener('DOMContentLoaded', function() {
    const orderButtons = document.querySelectorAll('.order-btn');
    
    orderButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');
            const itemPrice = this.getAttribute('data-price');
            alert(`You ordered ${itemName} for $${itemPrice}`);
        });
    });
});

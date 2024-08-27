document.getElementById("contactForm").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();
    } else {
        alert("Thank you for contacting us!");
    }
});

function validateOrder() {
    let confirmOrder = confirm("Are you sure you want to place the order?");
    if (confirmOrder) {
        alert("Your order has been placed!");
    }
}

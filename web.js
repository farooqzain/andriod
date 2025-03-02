document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let formMessage = document.getElementById("formMessage");

    if (name && email && message) {
        formMessage.innerText = "Message sent successfully!";
        formMessage.style.color = "green";
        document.getElementById("contactForm").reset();
    } else {
        formMessage.innerText = "Please fill out all fields!";
        formMessage.style.color = "red";
    }
});

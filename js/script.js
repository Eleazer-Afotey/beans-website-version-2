function sendEmail(){
    //take params from index.html
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone_number: document.getElementById("phone_number").value,
        message: document.getElementById("message").value,
    }
    console.log(params)

    // take ids from emailjs
    const serviceId = "beanswebsite";
    const templateId = "template_tdf4zo6";

//use emailjs function to send message
emailjs.send(serviceId, templateId, params).then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone_number").value = "";
        document.getElementById("message").value = "";
        console.log(res);
    alert("Your message has been successfully delievered to BEANs Inc. ")
}).catch((err) => console.error(err));
}

function setupButtonClick() {
    // Get the button element by its ID
    var emailButton = document.getElementById("submit-button");

    // Check if the button element is found
    if (emailButton) {
        // Attach a click event listener to the button
        emailButton.addEventListener("click", function() {
            // Call the sendEmail function when the button is clicked
            sendEmail();
        });
    } else {
        // Log an error if the button element is not found
        console.error("Button not found!");
    }
}

// Call the setupButtonClick function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    setupButtonClick();
});

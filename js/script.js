document.addEventListener("DOMContentLoaded", function () {

    // clic sur titre
    const titre = document.getElementById("titre");

    if (titre) {
        titre.addEventListener("click", function () {
            alert("Bravo ! Vous avez cliqué sur le titre 😎");
        });
    }

    // formulaire contact
    const form = document.getElementById("contactForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        result.innerHTML =
            "Merci " + name + " 👍<br>" +
            "Email: " + email + "<br>" +
            "Message envoyé ✔";

        form.reset();
    });

});
/* =========================
   SIDE MENU
========================= */

function toggleMenu() {

    const menu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    menu.classList.toggle("active");
    overlay.classList.toggle("active");

}



/* =========================
   PROFILE MENU
========================= */

function toggleProfile() {

    const profileMenu =
        document.getElementById("profileMenu");

    profileMenu.classList.toggle("active");

}



/* =========================
   CLOSE PROFILE WHEN
   CLICKING OUTSIDE
========================= */

document.addEventListener("click", function(event) {

    const profile =
        document.querySelector(".profile");

    const profileMenu =
        document.getElementById("profileMenu");

    if (
        profile &&
        profileMenu &&
        !profile.contains(event.target) &&
        !profileMenu.contains(event.target)
    ) {

        profileMenu.classList.remove("active");

    }

});



/* =========================
   PASSWORD SHOW / HIDE
========================= */

function togglePassword() {

    const password =
        document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }

}



/* =========================
   LOGIN
========================= */

const loginForm =
    document.getElementById("loginForm");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const username =
                document.getElementById("username").value.trim();

            const password =
                document.getElementById("password").value.trim();


            if (username === "" || password === "") {

                alert("Please enter your login details.");

                return;

            }


            /*
                Demo login.

                Later this will be replaced with
                backend authentication.
            */


            let accountName = "Account Holder";


            if (username.includes("@")) {

                accountName =
                    username.split("@")[0];

            } else {

                accountName = "Student";

            }


            localStorage.setItem(
                "devopsUser",
                accountName
            );


            window.location.href =
                "index.html";

        }
    );

}



/* =========================
   LOAD USER
========================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        const savedUser =
            localStorage.getItem("devopsUser");


        const profileName =
            document.getElementById("profileName");

        const profileMenuName =
            document.getElementById("profileMenuName");


        if (savedUser) {

            if (profileName) {

                profileName.textContent =
                    savedUser;

            }


            if (profileMenuName) {

                profileMenuName.textContent =
                    savedUser;

            }

        }

    }
);



/* =========================
   LOGOUT
========================= */

function logout() {

    localStorage.removeItem(
        "devopsUser"
    );


    window.location.href =
        "login.html";

}



/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Thank you! Your message has been submitted."
            );

            contactForm.reset();

        }
    );

}
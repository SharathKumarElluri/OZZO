
/* =========================================================
   OZZO LOGIN
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("loginForm");

    const emailInput =
        document.getElementById("email");

    const emailError =
        document.getElementById("emailError");

    const loginMessage =
        document.getElementById("loginMessage");

    const helpButton =
        document.getElementById("helpButton");


    /* =========================================================
       SHOW MESSAGE
    ========================================================== */

    function showMessage(message, color) {

        if (!loginMessage) return;

        loginMessage.textContent = message;

        loginMessage.style.color =
            color || "#657384";
    }


    /* =========================================================
       EMAIL / MOBILE VALIDATION
    ========================================================== */

    function validateEmailOrMobile() {

        const value =
            emailInput.value.trim();

        if (!value) {

            emailError.textContent =
                "Please enter your email address or mobile number.";

            return false;
        }


        /* Mobile number */

        const mobilePattern =
            /^[6-9]\d{9}$/;


        /* Email */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (
            !emailPattern.test(value) &&
            !mobilePattern.test(value.replace(/\s+/g, ""))
        ) {

            emailError.textContent =
                "Please enter a valid email or mobile number.";

            return false;
        }


        emailError.textContent = "";

        return true;
    }


    /* =========================================================
       LIVE VALIDATION
    ========================================================== */

    emailInput.addEventListener(
        "blur",
        validateEmailOrMobile
    );


    emailInput.addEventListener(
        "input",
        function () {

            if (emailError.textContent) {

                validateEmailOrMobile();

            }

        }
    );


    /* =========================================================
       FORM SUBMIT
    ========================================================== */

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            showMessage("");


            const valid =
                validateEmailOrMobile();


            if (!valid) {
                return;
            }


            /*
               Demo behavior.

               Connect this to your backend
               when real authentication is added.
            */

            showMessage(
                "Continuing...",
                "#0f5138"
            );


            setTimeout(
                function () {

                    window.location.href =
                        "index.html";

                },
                700
            );

        }
    );


    /* =========================================================
       HELP
    ========================================================== */

    if (helpButton) {

        helpButton.addEventListener(
            "click",
            function () {

                showMessage(
                    "For account support, please contact OZZO.",
                    "#657384"
                );

            }
        );

    }

});

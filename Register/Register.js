
/* =========================================================
   OZZO REGISTER
   FRONT-END ACCOUNT CREATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       ELEMENTS
    ========================================================== */

    const registerForm =
        document.getElementById("registerForm");

    const fullName =
        document.getElementById("fullName");

    const mobile =
        document.getElementById("mobile");

    const email =
        document.getElementById("email");

    const password =
        document.getElementById("password");

    const confirmPassword =
        document.getElementById("confirmPassword");

    const terms =
        document.getElementById("terms");

    const nameError =
        document.getElementById("nameError");

    const mobileError =
        document.getElementById("mobileError");

    const emailError =
        document.getElementById("emailError");

    const passwordError =
        document.getElementById("passwordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");

    const termsError =
        document.getElementById("termsError");

    const registerMessage =
        document.getElementById("registerMessage");

    const createAccountBtn =
        document.getElementById("createAccountBtn");


    /* =========================================================
       MESSAGE
    ========================================================== */

    function showMessage(
        message,
        color = "#657384"
    ) {

        if (!registerMessage) {
            return;
        }

        registerMessage.textContent =
            message;

        registerMessage.style.color =
            color;

    }


    /* =========================================================
       NAME VALIDATION
    ========================================================== */

    function validateName() {

        const value =
            fullName.value.trim();


        if (!value) {

            nameError.textContent =
                "Please enter your name.";

            return false;

        }


        if (value.length < 2) {

            nameError.textContent =
                "Name must contain at least 2 characters.";

            return false;

        }


        nameError.textContent =
            "";

        return true;

    }


    /* =========================================================
       MOBILE VALIDATION
    ========================================================== */

    function validateMobile() {

        const value =
            mobile.value.trim();


        const mobilePattern =
            /^[6-9][0-9]{9}$/;


        if (!value) {

            mobileError.textContent =
                "Please enter your mobile number.";

            return false;

        }


        if (!mobilePattern.test(value)) {

            mobileError.textContent =
                "Please enter a valid 10-digit mobile number.";

            return false;

        }


        mobileError.textContent =
            "";

        return true;

    }


    /* =========================================================
       EMAIL VALIDATION
    ========================================================== */

    function validateEmail() {

        const value =
            email.value.trim().toLowerCase();


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!value) {

            emailError.textContent =
                "Please enter your email address.";

            return false;

        }


        if (!emailPattern.test(value)) {

            emailError.textContent =
                "Please enter a valid email address.";

            return false;

        }


        emailError.textContent =
            "";

        return true;

    }


    /* =========================================================
       PASSWORD VALIDATION
    ========================================================== */

    function validatePassword() {

        const value =
            password.value;


        if (!value) {

            passwordError.textContent =
                "Please create a password.";

            return false;

        }


        if (value.length < 6) {

            passwordError.textContent =
                "Password must contain at least 6 characters.";

            return false;

        }


        passwordError.textContent =
            "";

        return true;

    }


    /* =========================================================
       CONFIRM PASSWORD
    ========================================================== */

    function validateConfirmPassword() {

        const value =
            confirmPassword.value;


        if (!value) {

            confirmPasswordError.textContent =
                "Please re-enter your password.";

            return false;

        }


        if (
            value !==
            password.value
        ) {

            confirmPasswordError.textContent =
                "Passwords do not match.";

            return false;

        }


        confirmPasswordError.textContent =
            "";

        return true;

    }


    /* =========================================================
       TERMS VALIDATION
    ========================================================== */

    function validateTerms() {

        if (!terms.checked) {

            termsError.textContent =
                "Please accept the Terms of Use and Privacy Notice.";

            return false;

        }


        termsError.textContent =
            "";

        return true;

    }


    /* =========================================================
       PASSWORD TOGGLE
    ========================================================== */

    function setupPasswordToggle(
        buttonId,
        input
    ) {

        const button =
            document.getElementById(buttonId);


        if (!button || !input) {
            return;
        }


        button.addEventListener(
            "click",
            function () {

                const hidden =
                    input.type === "password";


                input.type =
                    hidden
                        ? "text"
                        : "password";


                const icon =
                    button.querySelector("i");


                if (icon) {

                    icon.classList.toggle(
                        "fa-eye",
                        !hidden
                    );

                    icon.classList.toggle(
                        "fa-eye-slash",
                        hidden
                    );

                }


                button.setAttribute(
                    "aria-label",
                    hidden
                        ? "Hide password"
                        : "Show password"
                );


                button.setAttribute(
                    "title",
                    hidden
                        ? "Hide password"
                        : "Show password"
                );

            }
        );

    }


    setupPasswordToggle(
        "passwordToggle",
        password
    );


    setupPasswordToggle(
        "confirmPasswordToggle",
        confirmPassword
    );


    /* =========================================================
       REMOVE NON-NUMERIC MOBILE CHARACTERS
    ========================================================== */

    mobile.addEventListener(
        "input",
        function () {

            this.value =
                this.value
                    .replace(/\D/g, "")
                    .slice(0, 10);

        }
    );


    /* =========================================================
       LIVE VALIDATION
    ========================================================== */

    fullName.addEventListener(
        "blur",
        validateName
    );


    mobile.addEventListener(
        "blur",
        validateMobile
    );


    email.addEventListener(
        "blur",
        validateEmail
    );


    password.addEventListener(
        "blur",
        validatePassword
    );


    confirmPassword.addEventListener(
        "blur",
        validateConfirmPassword
    );


    fullName.addEventListener(
        "input",
        function () {

            if (nameError.textContent) {
                validateName();
            }

        }
    );


    mobile.addEventListener(
        "input",
        function () {

            if (mobileError.textContent) {
                validateMobile();
            }

        }
    );


    email.addEventListener(
        "input",
        function () {

            if (emailError.textContent) {
                validateEmail();
            }

        }
    );


    password.addEventListener(
        "input",
        function () {

            if (passwordError.textContent) {
                validatePassword();
            }

            if (confirmPassword.value) {
                validateConfirmPassword();
            }

        }
    );


    confirmPassword.addEventListener(
        "input",
        function () {

            if (confirmPasswordError.textContent) {
                validateConfirmPassword();
            }

        }
    );


    terms.addEventListener(
        "change",
        function () {

            if (terms.checked) {
                termsError.textContent = "";
            }

        }
    );


    /* =========================================================
       CREATE ACCOUNT
    ========================================================== */

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            showMessage("");


            const validName =
                validateName();

            const validMobile =
                validateMobile();

            const validEmail =
                validateEmail();

            const validPassword =
                validatePassword();

            const validConfirmPassword =
                validateConfirmPassword();

            const validTerms =
                validateTerms();


            /* -------------------------------------------------
               STOP WHEN INVALID
            ------------------------------------------------- */

            if (
                !validName ||
                !validMobile ||
                !validEmail ||
                !validPassword ||
                !validConfirmPassword ||
                !validTerms
            ) {

                return;

            }


            /* =================================================
               GET EXISTING OZZO ACCOUNTS
            ================================================== */

            let accounts = [];

            try {

                accounts =
                    JSON.parse(
                        localStorage.getItem(
                            "ozzoAccounts"
                        )
                    ) || [];

            } catch (error) {

                accounts = [];

            }


            const cleanEmail =
                email.value
                    .trim()
                    .toLowerCase();


            const cleanMobile =
                mobile.value
                    .trim();


            /* =================================================
               CHECK EXISTING EMAIL
            ================================================== */

            const emailExists =
                accounts.some(
                    function (account) {

                        return (
                            account.email ===
                            cleanEmail
                        );

                    }
                );


            if (emailExists) {

                emailError.textContent =
                    "An OZZO account already exists with this email.";

                showMessage(
                    "Please sign in instead.",
                    "#c94a4a"
                );

                return;

            }


            /* =================================================
               CHECK EXISTING MOBILE
            ================================================== */

            const mobileExists =
                accounts.some(
                    function (account) {

                        return (
                            account.mobile ===
                            cleanMobile
                        );

                    }
                );


            if (mobileExists) {

                mobileError.textContent =
                    "An OZZO account already exists with this mobile number.";

                showMessage(
                    "Please use another mobile number or sign in.",
                    "#c94a4a"
                );

                return;

            }


            /* =================================================
               CREATE ACCOUNT OBJECT
            ==================================================

               This demo stores profile information
               in the browser.

               Password is intentionally NOT stored here.
               A production application must use a
               secure backend authentication system.
            ================================================== */

            const newAccount = {

                id:
                    "OZZO-" +
                    Date.now(),

                name:
                    fullName.value.trim(),

                mobile:
                    cleanMobile,

                email:
                    cleanEmail,

                createdAt:
                    new Date().toISOString()

            };


            accounts.push(
                newAccount
            );


            /* =================================================
               SAVE ACCOUNT
            ================================================== */

            try {

                localStorage.setItem(
                    "ozzoAccounts",
                    JSON.stringify(accounts)
                );

                localStorage.setItem(
                    "ozzoCurrentUser",
                    JSON.stringify(newAccount)
                );

            } catch (error) {

                console.error(
                    "OZZO account storage error:",
                    error
                );

                showMessage(
                    "Unable to create the account on this browser.",
                    "#c94a4a"
                );

                return;

            }


            /* =================================================
               SUCCESS
            ================================================== */

            createAccountBtn.disabled =
                true;


            createAccountBtn.innerHTML = `
                <span>Account created successfully</span>
                <i class="fa-solid fa-check"></i>
            `;


            showMessage(
                "Your OZZO account has been created. Redirecting to Sign in...",
                "#25794f"
            );


            /* =================================================
               REDIRECT TO LOGIN
            ================================================= */

            setTimeout(
                function () {

                    window.location.href =
                        "Login.html?registered=true";

                },
                1400
            );

        }
    );

});

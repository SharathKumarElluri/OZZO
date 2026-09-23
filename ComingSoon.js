/* =========================================================
   OZZO COMING SOON
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ============================================
       GET SERVICE NAME FROM URL
    ============================================ */

    const params = new URLSearchParams(window.location.search);

    const service = params.get("service");

    const serviceName = document.getElementById("serviceName");

    if (service && service.trim() !== "") {

        serviceName.textContent =
            decodeURIComponent(service);

    } else {

        serviceName.textContent =
            "New Service";

    }


    /* ============================================
       COUNTDOWN
       Change launch date if required
    ============================================ */

    const launchDate = new Date();

    launchDate.setDate(
        launchDate.getDate() + 30
    );


    function updateCountdown() {

        const now = new Date().getTime();

        const distance =
            launchDate.getTime() - now;


        if (distance <= 0) {

            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";

            return;
        }


        const days = Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

        const hours = Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );

        const seconds = Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


        document.getElementById("days").textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours").textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes").textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds").textContent =
            String(seconds).padStart(2, "0");
    }


    updateCountdown();

    setInterval(
        updateCountdown,
        1000
    );


    /* ============================================
       NOTIFICATION FORM
    ============================================ */

    const notifyForm =
        document.getElementById("notifyForm");

    const successMessage =
        document.getElementById("successMessage");


    notifyForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const email =
                document.getElementById("email").value.trim();


            if (email === "") {
                return;
            }


            successMessage.classList.add("show");

            notifyForm.reset();

        }
    );

});
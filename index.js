```javascript
document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       CART
    ========================= */

    const cartCount = document.getElementById("cartCount");
    const cartBtn = document.getElementById("cartBtn");

    let cartItems = 0;

    cartBtn.addEventListener("click", () => {

        cartItems++;

        cartCount.textContent = cartItems;

        cartCount.style.transform = "scale(1.35)";

        setTimeout(() => {
            cartCount.style.transform = "scale(1)";
        }, 180);

    });


    /* =========================
       HEADER WISHLIST
    ========================= */

    const wishlistBtn = document.getElementById("wishlistBtn");

    wishlistBtn.addEventListener("click", function () {

        const icon = this.querySelector("i");

        icon.classList.toggle("fa-regular");
        icon.classList.toggle("fa-solid");

        this.classList.toggle("active");

    });


    /* =========================
       PRODUCT HEART BUTTONS
    ========================= */

    document.querySelectorAll(".heart-button").forEach(button => {

        button.addEventListener("click", event => {

            event.stopPropagation();

            const icon = button.querySelector("i");

            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");

            button.classList.toggle("active");

        });

    });


    /* =========================
       PRODUCT FILTER TABS
    ========================= */

    const tabs = document.querySelectorAll(".tab-btn");

    const products = document.querySelectorAll(".product-column");


    tabs.forEach(tab => {

        tab.addEventListener("click", () => {

            tabs.forEach(item => {
                item.classList.remove("active");
            });


            tab.classList.add("active");


            const category = tab.dataset.category;


            products.forEach(product => {

                const show =
                    category === "all"
                        ? product.dataset.category !== "pads"
                        : product.dataset.category === category;


                product.classList.toggle(
                    "hidden-product",
                    !show
                );

            });

        });

    });


    /* =========================
       SEARCH PRODUCTS
    ========================= */

    const searchInput = document.getElementById("searchInput");


    searchInput.addEventListener("input", () => {

        const query = searchInput.value
            .toLowerCase()
            .trim();


        products.forEach(product => {

            const title = product
                .querySelector(".product-details h3")
                .textContent
                .toLowerCase();


            const category = product
                .dataset
                .category
                .toLowerCase();


            const categoryText = product
                .querySelector(".product-category")
                .textContent
                .toLowerCase();


            const match =
                !query ||
                title.includes(query) ||
                category.includes(query) ||
                categoryText.includes(query);


            product.classList.toggle(
                "hidden-product",
                !match
            );

        });

    });


    /* =========================
       NEWSLETTER
    ========================= */

    const newsletterForm =
        document.getElementById("newsletterForm");


    newsletterForm.addEventListener("submit", event => {

        event.preventDefault();


        document.getElementById(
            "newsletterMessage"
        ).textContent = "Thanks for subscribing!";


        document.getElementById(
            "newsletterEmail"
        ).value = "";

    });


    /* =========================
       HERO DOTS
    ========================= */

    document.querySelectorAll(".dot").forEach(dot => {

        dot.addEventListener("click", () => {

            document.querySelectorAll(".dot").forEach(item => {

                item.classList.remove("active");

            });


            dot.classList.add("active");

        });

    });


    /* =========================
       NAVIGATION
    ========================= */

    document
        .querySelectorAll(".main-nav .nav-link")
        .forEach(link => {

            link.addEventListener("click", event => {

                event.preventDefault();


                document
                    .querySelectorAll(".main-nav .nav-link")
                    .forEach(item => {

                        item.classList.remove("active");

                    });


                link.classList.add("active");


                const target =
                    link.textContent
                        .trim()
                        .toLowerCase();


                const matchingTab =
                    Array.from(tabs).find(tab =>

                        tab.textContent
                            .trim()
                            .toLowerCase() === target

                    );


                if (matchingTab) {

                    matchingTab.click();


                    document
                        .getElementById("products")
                        .scrollIntoView({
                            behavior:"smooth",
                            block:"start"
                        });

                }


                else if (target === "home") {

                    window.scrollTo({
                        top:0,
                        behavior:"smooth"
                    });

                }


                else if (target === "deals") {

                    document
                        .querySelector(".promotion-section")
                        .scrollIntoView({
                            behavior:"smooth",
                            block:"start"
                        });

                }

            });

        });

});
```

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       CART
    ========================================================== */

    const cartCount =
        document.getElementById("cartCount");

    const cartBtn =
        document.getElementById("headerCartButton");


    /* Load cart from localStorage */

    let cart = [];

    try {

        cart =
            JSON.parse(
                localStorage.getItem("ozzoCart")
            ) || [];

        if (!Array.isArray(cart)) {
            cart = [];
        }

    } catch (error) {

        console.error(
            "Unable to read cart:",
            error
        );

        cart = [];

    }


    /* =========================================================
       UPDATE CART COUNT
    ========================================================== */

    function updateCartCount() {

        if (!cartCount) {
            return;
        }


        const totalItems =
            cart.reduce(
                (total, item) => {

                    return (
                        total +
                        Number(item.quantity || 0)
                    );

                },
                0
            );


        cartCount.textContent =
            totalItems;


        cartCount.style.transform =
            "scale(1.15)";


        setTimeout(() => {

            cartCount.style.transform =
                "scale(1)";

        }, 180);

    }


    /* =========================================================
       SAVE CART
    ========================================================== */

    function saveCart() {

        try {

            localStorage.setItem(
                "ozzoCart",
                JSON.stringify(cart)
            );

            updateCartCount();

        } catch (error) {

            console.error(
                "Unable to save cart:",
                error
            );

        }

    }


    /* =========================================================
       CART BUTTON
       
       index.html is in root
       Cart.html is inside Cart folder
    ========================================================== */

    if (cartBtn) {

        cartBtn.addEventListener(
            "click",
            () => {

                window.location.href =
                    "Cart/Cart.html";

            }
        );

    }


    /* =========================================================
       HEADER WISHLIST
    ========================================================== */

    const wishlistBtn =
        document.getElementById(
            "wishlistBtn"
        );


    if (wishlistBtn) {

        wishlistBtn.addEventListener(
            "click",
            function () {

                const icon =
                    this.querySelector("i");


                if (icon) {

                    icon.classList.toggle(
                        "fa-regular"
                    );

                    icon.classList.toggle(
                        "fa-solid"
                    );

                }


                this.classList.toggle(
                    "active"
                );

            }
        );

    }


    /* =========================================================
       PRODUCT HEART BUTTONS
    ========================================================== */

    document
        .querySelectorAll(".heart-button")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const icon =
                        button.querySelector("i");


                    if (icon) {

                        icon.classList.toggle(
                            "fa-regular"
                        );

                        icon.classList.toggle(
                            "fa-solid"
                        );

                    }


                    button.classList.toggle(
                        "active"
                    );

                }
            );

        });


    /* =========================================================
       PRODUCT FILTER TABS
    ========================================================== */

    const tabs =
        document.querySelectorAll(
            ".tab-btn"
        );


    const products =
        document.querySelectorAll(
            ".product-column"
        );


    tabs.forEach(tab => {

        tab.addEventListener(
            "click",
            () => {

                tabs.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                tab.classList.add(
                    "active"
                );


                const category =
                    tab.dataset.category;


                products.forEach(product => {

                    const productCategory =
                        (
                            product.dataset.category ||
                            ""
                        ).toLowerCase();


                    let show = false;


                    if (
                        category === "all"
                    ) {

                        /*
                           Homepage originally hides pads
                           under All.
                        */

                        show =
                            productCategory !==
                            "pads";

                    } else {

                        show =
                            productCategory ===
                            category;

                    }


                    product.classList.toggle(
                        "hidden-product",
                        !show
                    );

                });

            }
        );

    });


    /* =========================================================
       SEARCH PRODUCTS
    ========================================================== */

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "input",
            () => {

                const query =
                    searchInput.value
                        .toLowerCase()
                        .trim();


                products.forEach(product => {

                    const titleElement =
                        product.querySelector(
                            ".product-details h3"
                        );


                    const categoryElement =
                        product.querySelector(
                            ".product-category"
                        );


                    const title =
                        titleElement
                            ? titleElement.textContent
                                .toLowerCase()
                            : "";


                    const category =
                        (
                            product.dataset.category ||
                            ""
                        ).toLowerCase();


                    const categoryText =
                        categoryElement
                            ? categoryElement.textContent
                                .toLowerCase()
                            : "";


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

            }
        );

    }


    /* =========================================================
       ADD PRODUCT TO CART
       
       Works for homepage cards if an .add-cart button
       exists on any product.
    ========================================================== */

    function addProductToCart(product) {

        if (!product) {
            return;
        }


        const productId =
            product.dataset.productId ||
            product.dataset.name ||
            "product-" +
            Date.now();


        const name =
            product.dataset.name ||
            product.querySelector(
                ".product-details h3"
            )?.textContent.trim() ||
            "OZZO Product";


        const addButton =
            product.querySelector(
                ".add-cart"
            );


        const price =
            Number(
                addButton?.dataset.price ||
                product.dataset.price ||
                0
            );


        const mrp =
            Number(
                addButton?.dataset.mrp ||
                product.dataset.mrp ||
                price
            );


        const category =
            product.dataset.category ||
            "general";


        const imageElement =
            product.querySelector(
                ".product-image img"
            ) ||
            product.querySelector(
                "img"
            );


        const image =
            imageElement
                ? imageElement.getAttribute("src")
                : "";


        const existingProduct =
            cart.find(
                item =>
                    item.id === productId
            );


        if (existingProduct) {

            existingProduct.quantity =
                Number(
                    existingProduct.quantity || 1
                ) + 1;

        } else {

            cart.push({

                id: productId,

                name: name,

                price: price,

                mrp: mrp,

                image: image,

                category: category,

                quantity: 1

            });

        }


        saveCart();

    }


    /* =========================================================
       EXISTING ADD TO CART BUTTONS
    ========================================================== */

    document
        .querySelectorAll(".add-cart")
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.preventDefault();

                    event.stopPropagation();


                    const product =
                        button.closest(
                            ".product-column"
                        ) ||
                        button.closest(
                            ".product-item"
                        );


                    if (!product) {
                        return;
                    }


                    addProductToCart(
                        product
                    );


                    const originalText =
                        button.textContent.trim();


                    button.textContent =
                        "Added ✓";


                    button.classList.add(
                        "added"
                    );


                    setTimeout(
                        () => {

                            button.textContent =
                                originalText;

                            button.classList.remove(
                                "added"
                            );

                        },
                        1200
                    );

                }
            );

        });


    /* =========================================================
       HOMEPAGE PRODUCT CARD → PRODUCT DETAILS
       
       Only when product has data-product-id.
    ========================================================== */

    products.forEach(product => {

        const card =
            product.querySelector(
                ".product-card"
            );


        if (!card) {
            return;
        }


        card.style.cursor =
            "pointer";


        card.addEventListener(
            "click",
            event => {

                /* Ignore heart */

                if (
                    event.target.closest(
                        ".heart-button"
                    )
                ) {

                    return;

                }


                /* Ignore add-to-cart */

                if (
                    event.target.closest(
                        ".add-cart"
                    )
                ) {

                    return;

                }


                const productId =
                    product.dataset.productId;


                /*
                   Current homepage cards don't all have
                   IDs yet. Therefore do nothing for those.
                */

                if (!productId) {

                    return;

                }


                window.location.href =
                    `ProductDetails.html?id=${encodeURIComponent(
                        productId
                    )}`;

            }
        );

    });


    /* =========================================================
       HERO DOTS
    ========================================================== */

    document
        .querySelectorAll(".dot")
        .forEach(dot => {

            dot.addEventListener(
                "click",
                () => {

                    document
                        .querySelectorAll(".dot")
                        .forEach(item => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    dot.classList.add(
                        "active"
                    );

                }
            );

        });


    /* =========================================================
       NEWSLETTER
    ========================================================== */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    if (newsletterForm) {

        newsletterForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const message =
                    document.getElementById(
                        "newsletterMessage"
                    );


                const email =
                    document.getElementById(
                        "newsletterEmail"
                    );


                if (message) {

                    message.textContent =
                        "Thanks for subscribing!";

                }


                if (email) {

                    email.value = "";

                }

            }
        );

    }


    /* =========================================================
       NAVIGATION
       
       IMPORTANT:
       Don't prevent normal navigation to other pages.
    ========================================================== */

    document
        .querySelectorAll(
            ".main-nav .nav-link"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute("href");


                    /*
                       Real page links should work normally.
                       
                       Examples:
                       Fashion/Fashion.html
                       Books/Books.html
                       Stationary/Stationary.html
                       Pads/Pads.html
                    */

                    if (
                        href &&
                        !href.startsWith("#")
                    ) {

                        return;

                    }


                    /*
                       Only handle internal anchors.
                    */

                    if (
                        !href ||
                        !href.startsWith("#")
                    ) {

                        return;

                    }


                    event.preventDefault();


                    document
                        .querySelectorAll(
                            ".main-nav .nav-link"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    link.classList.add(
                        "active"
                    );


                    const target =
                        link.textContent
                            .trim()
                            .toLowerCase();


                    const matchingTab =
                        Array.from(tabs).find(
                            tab =>
                                tab.textContent
                                    .trim()
                                    .toLowerCase() ===
                                target
                        );


                    if (matchingTab) {

                        matchingTab.click();


                        const productsSection =
                            document.getElementById(
                                "products"
                            );


                        if (productsSection) {

                            productsSection.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }


                    else if (
                        target === "home"
                    ) {

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });

                    }


                    else if (
                        target === "deals"
                    ) {

                        const promotionSection =
                            document.querySelector(
                                ".promotion-section"
                            );


                        if (promotionSection) {

                            promotionSection.scrollIntoView({
                                behavior: "smooth",
                                block: "start"
                            });

                        }

                    }

                }
            );

        });


    /* =========================================================
       INITIAL CART COUNT
    ========================================================== */

    updateCartCount();

});
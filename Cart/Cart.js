document.addEventListener("DOMContentLoaded", function () {


    /* =========================================================
       ELEMENTS
    ========================================================== */

    const cartItemsContainer =
        document.getElementById("cartItems");

    const cartLayout =
        document.getElementById("cartLayout");

    const emptyCart =
        document.getElementById("emptyCart");

    const cartCount =
        document.getElementById("cartCount");

    const cartItemText =
        document.getElementById("cartItemText");

    const subtotalElement =
        document.getElementById("subtotal");

    const deliveryElement =
        document.getElementById("deliveryCharge");

    const youSaveElement =
        document.getElementById("youSave");

    const grandTotalElement =
        document.getElementById("grandTotal");

    const clearCartBtn =
        document.getElementById("clearCartBtn");

    const checkoutBtn =
        document.getElementById("checkoutBtn");



    /* =========================================================
       LOAD CART
    ========================================================== */

    let cart = [];

    try {

        const savedCart =
            localStorage.getItem("ozzoCart");

        const parsedCart =
            savedCart
                ? JSON.parse(savedCart)
                : [];

        cart =
            Array.isArray(parsedCart)
                ? parsedCart
                : [];

    } catch (error) {

        console.error(
            "Unable to load cart:",
            error
        );

        cart = [];

    }



    /* =========================================================
       SAVE CART
    ========================================================== */

    function saveCart() {

        localStorage.setItem(
            "ozzoCart",
            JSON.stringify(cart)
        );

    }



    /* =========================================================
       FORMAT PRICE
    ========================================================== */

    function formatPrice(amount) {

        return (
            "₹" +
            Number(amount || 0)
                .toLocaleString("en-IN")
        );

    }



    /* =========================================================
       UPDATE HEADER CART COUNT
    ========================================================== */

    function updateHeaderCount() {

        if (!cartCount) {
            return;
        }

        const totalQuantity =
            cart.reduce(
                function (total, item) {

                    return (
                        total +
                        Number(
                            item.quantity || 0
                        )
                    );

                },
                0
            );


        cartCount.textContent =
            totalQuantity;

    }



    /* =========================================================
       CALCULATE TOTALS
    ========================================================== */

    function calculateTotals() {

        let subtotal = 0;

        let originalTotal = 0;

        let totalQuantity = 0;


        cart.forEach(
            function (item) {

                const quantity =
                    Math.max(
                        1,
                        Number(
                            item.quantity || 1
                        )
                    );


                const price =
                    Number(
                        item.price || 0
                    );


                const mrp =
                    Number(
                        item.mrp ||
                        item.price ||
                        0
                    );


                subtotal +=
                    price * quantity;


                originalTotal +=
                    mrp * quantity;


                totalQuantity +=
                    quantity;

            }
        );


        /*
            FREE DELIVERY ABOVE ₹999
            OTHERWISE ₹79
        */

        const delivery =
            subtotal === 0
                ? 0
                : subtotal >= 999
                    ? 0
                    : 79;


        const savings =
            Math.max(
                0,
                originalTotal - subtotal
            );


        const grandTotal =
            subtotal + delivery;


        return {

            subtotal,
            delivery,
            savings,
            grandTotal,
            totalQuantity

        };

    }



    /* =========================================================
       ESCAPE HTML
    ========================================================== */

    function escapeHtml(value) {

        return String(value)

            .replace(
                /&/g,
                "&amp;"
            )

            .replace(
                /</g,
                "&lt;"
            )

            .replace(
                />/g,
                "&gt;"
            )

            .replace(
                /"/g,
                "&quot;"
            )

            .replace(
                /'/g,
                "&#039;"
            );

    }



    /* =========================================================
       GET PRODUCT DETAILS URL
    ========================================================== */

    function getProductDetailsUrl(item) {

        const id =
            item && item.id
                ? String(item.id)
                : "";

        return (
            "../ProductDetails.html?id=" +
            encodeURIComponent(id)
        );

    }



    /* =========================================================
       RENDER CART
    ========================================================== */

    function renderCart() {

        if (!cartItemsContainer) {
            return;
        }


        cartItemsContainer.innerHTML = "";


        /* =====================================================
           EMPTY CART
        ====================================================== */

        if (cart.length === 0) {

            if (cartLayout) {

                cartLayout.style.display =
                    "none";

            }


            if (emptyCart) {

                emptyCart.classList.add(
                    "show"
                );

            }


            if (cartItemText) {

                cartItemText.textContent =
                    "Your cart is currently empty";

            }


            if (subtotalElement) {

                subtotalElement.textContent =
                    "₹0";

            }


            if (deliveryElement) {

                deliveryElement.textContent =
                    "₹0";

            }


            if (youSaveElement) {

                youSaveElement.textContent =
                    "₹0";

            }


            if (grandTotalElement) {

                grandTotalElement.textContent =
                    "₹0";

            }


            updateHeaderCount();

            return;

        }



        /* =====================================================
           SHOW CART
        ====================================================== */

        if (cartLayout) {

            cartLayout.style.display =
                "grid";

        }


        if (emptyCart) {

            emptyCart.classList.remove(
                "show"
            );

        }



        /* =====================================================
           TOTALS
        ====================================================== */

        const totals =
            calculateTotals();


        if (cartItemText) {

            cartItemText.textContent =
                `${totals.totalQuantity} ${
                    totals.totalQuantity === 1
                        ? "item"
                        : "items"
                } in your cart`;

        }


        if (subtotalElement) {

            subtotalElement.textContent =
                formatPrice(
                    totals.subtotal
                );

        }


        if (deliveryElement) {

            deliveryElement.textContent =
                totals.delivery === 0
                    ? "FREE"
                    : formatPrice(
                        totals.delivery
                    );

        }


        if (youSaveElement) {

            youSaveElement.textContent =
                formatPrice(
                    totals.savings
                );

        }


        if (grandTotalElement) {

            grandTotalElement.textContent =
                formatPrice(
                    totals.grandTotal
                );

        }


        updateHeaderCount();



        /* =====================================================
           CREATE CART ITEMS
        ====================================================== */

        cart.forEach(
            function (item, index) {

                const quantity =
                    Math.max(
                        1,
                        Number(
                            item.quantity || 1
                        )
                    );


                const price =
                    Number(
                        item.price || 0
                    );


                const mrp =
                    Number(
                        item.mrp ||
                        item.price ||
                        0
                    );


                const itemTotal =
                    price * quantity;


                const productName =
                    item.name ||
                    "Product";


                const category =
                    item.category ||
                    "OZZO";


                const image =
                    item.image ||
                    "https://placehold.co/500x500/f2f2f2/16283b?text=OZZO";


                const itemElement =
                    document.createElement(
                        "article"
                    );


                itemElement.className =
                    "cart-item";


                itemElement.innerHTML = `

                    <!-- PRODUCT IMAGE -->

                    <div class="cart-product-image">

                        <a
                            href="${getProductDetailsUrl(item)}"
                            aria-label="View ${escapeHtml(productName)}"
                        >

                            <img
                                src="${escapeHtml(image)}"
                                alt="${escapeHtml(productName)}"
                                loading="lazy"
                                onerror="this.src='https://placehold.co/500x500/f2f2f2/16283b?text=OZZO';"
                            >

                        </a>

                    </div>



                    <!-- PRODUCT INFORMATION -->

                    <div class="cart-product-info">

                        <span class="cart-category">

                            ${escapeHtml(
                                String(category)
                                    .toUpperCase()
                            )}

                        </span>


                        <h3 class="cart-product-name">

                            <a
                                href="${getProductDetailsUrl(item)}"
                            >

                                ${escapeHtml(
                                    productName
                                )}

                            </a>

                        </h3>



                        <!-- PRICE -->

                        <div class="cart-product-price">

                            <span class="current-price">

                                ${formatPrice(price)}

                            </span>

                            ${
                                mrp > price
                                    ? `
                                        <span class="old-price">
                                            ${formatPrice(mrp)}
                                        </span>
                                      `
                                    : ""
                            }

                        </div>



                        <!-- ACTIONS -->

                        <div class="item-actions">


                            <!-- QUANTITY -->

                            <div class="quantity-control">

                                <button
                                    type="button"
                                    class="decrease-btn"
                                    data-index="${index}"
                                    title="Decrease quantity"
                                    aria-label="Decrease quantity"
                                >
                                    −
                                </button>


                                <span>
                                    ${quantity}
                                </span>


                                <button
                                    type="button"
                                    class="increase-btn"
                                    data-index="${index}"
                                    title="Increase quantity"
                                    aria-label="Increase quantity"
                                >
                                    +
                                </button>

                            </div>



                            <!-- REMOVE -->

                            <button
                                type="button"
                                class="remove-item"
                                data-index="${index}"
                                title="Remove product"
                                aria-label="Remove ${escapeHtml(productName)}"
                            >

                                Remove

                            </button>

                        </div>

                    </div>



                    <!-- ITEM TOTAL -->

                    <div class="cart-item-total">

                        <span>
                            Item total
                        </span>

                        <strong>
                            ${formatPrice(itemTotal)}
                        </strong>

                    </div>

                `;


                cartItemsContainer.appendChild(
                    itemElement
                );

            }
        );

    }



    /* =========================================================
       CART ITEM EVENTS
    ========================================================== */

    if (cartItemsContainer) {

        cartItemsContainer.addEventListener(
            "click",
            function (event) {


                const increaseButton =
                    event.target.closest(
                        ".increase-btn"
                    );


                const decreaseButton =
                    event.target.closest(
                        ".decrease-btn"
                    );


                const removeButton =
                    event.target.closest(
                        ".remove-item"
                    );



                /* =============================================
                   INCREASE
                ============================================== */

                if (increaseButton) {

                    const index =
                        Number(
                            increaseButton.dataset.index
                        );


                    if (
                        Number.isInteger(index) &&
                        cart[index]
                    ) {

                        cart[index].quantity =
                            Number(
                                cart[index].quantity || 1
                            ) + 1;


                        saveCart();

                        renderCart();

                    }


                    return;

                }



                /* =============================================
                   DECREASE
                ============================================== */

                if (decreaseButton) {

                    const index =
                        Number(
                            decreaseButton.dataset.index
                        );


                    if (
                        Number.isInteger(index) &&
                        cart[index]
                    ) {

                        cart[index].quantity =
                            Number(
                                cart[index].quantity || 1
                            ) - 1;


                        if (
                            cart[index].quantity <= 0
                        ) {

                            cart.splice(
                                index,
                                1
                            );

                        }


                        saveCart();

                        renderCart();

                    }


                    return;

                }



                /* =============================================
                   REMOVE
                ============================================== */

                if (removeButton) {

                    const index =
                        Number(
                            removeButton.dataset.index
                        );


                    if (
                        Number.isInteger(index) &&
                        cart[index]
                    ) {

                        cart.splice(
                            index,
                            1
                        );


                        saveCart();

                        renderCart();

                    }

                }

            }
        );

    }



    /* =========================================================
       CLEAR CART
    ========================================================== */

    if (clearCartBtn) {

        clearCartBtn.addEventListener(
            "click",
            function () {


                if (cart.length === 0) {

                    return;

                }


                const confirmed =
                    window.confirm(
                        "Are you sure you want to remove all products from your cart?"
                    );


                if (!confirmed) {

                    return;

                }


                cart = [];


                saveCart();

                renderCart();

            }
        );

    }



    /* =========================================================
   CHECKOUT
========================================================= */

if (checkoutBtn) {

    checkoutBtn.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

            if (
                !Array.isArray(cart) ||
                cart.length === 0
            ) {

                alert(
                    "Your cart is empty. Please add a product before checkout."
                );

                return;
            }

            saveCart();

            window.location.href =
                "../Checkout.html";

        }
    );

}



    /* =========================================================
       NEWSLETTER
    ========================================================== */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    const newsletterMessage =
        document.getElementById(
            "newsletterMessage"
        );


    if (
        newsletterForm &&
        newsletterMessage
    ) {

        newsletterForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                newsletterMessage.textContent =
                    "Thank you for subscribing!";


                newsletterForm.reset();

            }
        );

    }



    /* =========================================================
       SEARCH
    ========================================================== */

    const searchInput =
        document.getElementById(
            "searchInput"
        );


    if (searchInput) {

        searchInput.addEventListener(
            "keydown",
            function (event) {

                if (
                    event.key === "Enter"
                ) {

                    const query =
                        searchInput.value
                            .trim();


                    if (!query) {

                        return;

                    }


                    window.location.href =
                        "../index.html?search=" +
                        encodeURIComponent(
                            query
                        );

                }

            }
        );

    }



    /* =========================================================
       INITIAL RENDER
    ========================================================== */

    renderCart();

});
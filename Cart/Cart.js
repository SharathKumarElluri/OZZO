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

    let cart =
        JSON.parse(
            localStorage.getItem("ozzoCart")
        ) || [];


    /* =========================================================
       SAVE CART
    ========================================================== */

    function saveCart(){

        localStorage.setItem(
            "ozzoCart",
            JSON.stringify(cart)
        );

    }


    /* =========================================================
       FORMAT PRICE
    ========================================================== */

    function formatPrice(amount){

        return "₹" +
            Number(amount || 0)
                .toLocaleString("en-IN");

    }


    /* =========================================================
       UPDATE HEADER CART COUNT
    ========================================================== */

    function updateHeaderCount(){

        const totalQuantity =
            cart.reduce(
                function(total, item){

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

    function calculateTotals(){

        let subtotal = 0;

        let originalTotal = 0;

        let totalQuantity = 0;


        cart.forEach(
            function(item){

                const quantity =
                    Number(
                        item.quantity || 0
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
            Free delivery above ₹999.
            Otherwise ₹79.
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
       RENDER CART
    ========================================================== */

    function renderCart(){

        cartItemsContainer.innerHTML = "";


        if(cart.length === 0){

            cartLayout.style.display =
                "none";

            emptyCart.classList.add(
                "show"
            );


            cartItemText.textContent =
                "Your cart is currently empty";


            subtotalElement.textContent =
                "₹0";


            deliveryElement.textContent =
                "₹0";


            youSaveElement.textContent =
                "₹0";


            grandTotalElement.textContent =
                "₹0";


            updateHeaderCount();

            return;

        }


        cartLayout.style.display =
            "grid";


        emptyCart.classList.remove(
            "show"
        );


        const totals =
            calculateTotals();


        cartItemText.textContent =
            `${totals.totalQuantity} ${
                totals.totalQuantity === 1
                    ? "item"
                    : "items"
            } in your cart`;


        subtotalElement.textContent =
            formatPrice(
                totals.subtotal
            );


        deliveryElement.textContent =
            totals.delivery === 0
                ? "FREE"
                : formatPrice(
                    totals.delivery
                );


        youSaveElement.textContent =
            formatPrice(
                totals.savings
            );


        grandTotalElement.textContent =
            formatPrice(
                totals.grandTotal
            );


        updateHeaderCount();


        /* =====================================================
           CREATE ITEMS
        ====================================================== */

        cart.forEach(
            function(item, index){

                const quantity =
                    Number(
                        item.quantity || 1
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


                const itemElement =
                    document.createElement(
                        "article"
                    );


                itemElement.className =
                    "cart-item";


                itemElement.innerHTML = `

                    <div class="cart-product-image">

                        <img
                            src="${item.image || ""}"
                            alt="${escapeHtml(item.name || "Product")}"
                        >

                    </div>


                    <div class="cart-product-info">

                        <span class="cart-category">
                            ${(item.category || "OZZO").toUpperCase()}
                        </span>


                        <h3 class="cart-product-name">

                            <a
                                href="ProductDetails.html?id=${encodeURIComponent(item.id || "")}"
                            >
                                ${escapeHtml(item.name || "Product")}
                            </a>

                        </h3>


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


                        <div class="item-actions">


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


                            <button
                                type="button"
                                class="remove-item"
                                data-index="${index}"
                                title="Remove product"
                                aria-label="Remove ${escapeHtml(item.name || "product")}"
                            >
                                Remove
                            </button>

                        </div>

                    </div>


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
       ESCAPE HTML
    ========================================================== */

    function escapeHtml(value){

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* =========================================================
       CART ITEM EVENTS
    ========================================================== */

    cartItemsContainer.addEventListener(
        "click",
        function(event){


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


            /* ===============================================
               INCREASE
            ================================================ */

            if(increaseButton){

                const index =
                    Number(
                        increaseButton.dataset.index
                    );


                if(cart[index]){

                    cart[index].quantity =
                        Number(
                            cart[index].quantity || 1
                        ) + 1;


                    saveCart();

                    renderCart();

                }

                return;

            }


            /* ===============================================
               DECREASE
            ================================================ */

            if(decreaseButton){

                const index =
                    Number(
                        decreaseButton.dataset.index
                    );


                if(cart[index]){

                    cart[index].quantity =
                        Number(
                            cart[index].quantity || 1
                        ) - 1;


                    if(
                        cart[index].quantity <= 0
                    ){

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


            /* ===============================================
               REMOVE
            ================================================ */

            if(removeButton){

                const index =
                    Number(
                        removeButton.dataset.index
                    );


                if(cart[index]){

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


    /* =========================================================
       CLEAR CART
    ========================================================== */

    clearCartBtn.addEventListener(
        "click",
        function(){

            if(cart.length === 0){
                return;
            }


            const confirmed =
                window.confirm(
                    "Are you sure you want to remove all products from your cart?"
                );


            if(!confirmed){
                return;
            }


            cart = [];


            saveCart();

            renderCart();

        }
    );


    /* =========================================================
       CHECKOUT
    ========================================================== */

    checkoutBtn.addEventListener(
        "click",
        function(){

            if(cart.length === 0){

                alert(
                    "Your cart is empty."
                );

                return;

            }


            alert(
                "Checkout page will be available soon."
            );

        }
    );


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


    if(newsletterForm){

        newsletterForm.addEventListener(
            "submit",
            function(event){

                event.preventDefault();


                newsletterMessage.textContent =
                    "Thank you for subscribing!";


                newsletterForm.reset();

            }
        );

    }


    /* =========================================================
       INITIAL RENDER
    ========================================================== */

    renderCart();

});
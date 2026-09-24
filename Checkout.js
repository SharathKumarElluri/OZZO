document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ====================================================== */

    const emptyCheckout =
        document.getElementById("emptyCheckout");

    const checkoutContent =
        document.getElementById("checkoutContent");

    const summaryItems =
        document.getElementById("summaryItems");

    const subtotalElement =
        document.getElementById("subtotal");

    const shippingElement =
        document.getElementById("shipping");

    const discountElement =
        document.getElementById("discountAmount");

    const grandTotalElement =
        document.getElementById("grandTotal");

    const couponInput =
        document.getElementById("couponInput");

    const couponBtn =
        document.getElementById("couponBtn");

    const couponMessage =
        document.getElementById("couponMessage");

    const placeOrderBtn =
        document.getElementById("placeOrderBtn");

    const checkoutForm =
        document.getElementById("checkoutForm");

    const successOverlay =
        document.getElementById("successOverlay");

    const orderNumberElement =
        document.getElementById("orderNumber");

    const continueAfterOrder =
        document.getElementById("continueAfterOrder");

    const cardPaymentBox =
        document.getElementById("cardPaymentBox");


    /* =====================================================
       CART
    ====================================================== */

    let cart = [];


    function readCart() {

        try {

            const stored =
                JSON.parse(
                    localStorage.getItem("ozzoCart")
                );


            return Array.isArray(stored)
                ? stored
                : [];

        } catch (error) {

            console.error(
                "Unable to read OZZO cart:",
                error
            );

            return [];

        }

    }


    cart = readCart();


    /* =====================================================
       FORMAT PRICE
    ====================================================== */

    function formatPrice(value) {

        return (
            "₹" +
            Number(
                value || 0
            ).toLocaleString(
                "en-IN"
            )
        );

    }


    /* =====================================================
       SUBTOTAL
    ====================================================== */

    function getSubtotal() {

        return cart.reduce(
            function (
                total,
                item
            ) {

                return (
                    total +
                    Number(
                        item.price || 0
                    ) *
                    Number(
                        item.quantity || 1
                    )
                );

            },
            0
        );

    }


    /* =====================================================
       SHIPPING
    ====================================================== */

    function getShipping(
        subtotal
    ) {

        if (
            subtotal <= 0
        ) {

            return 0;

        }


        return subtotal >= 999
            ? 0
            : 49;

    }


    /* =====================================================
       COUPON
    ====================================================== */

    let couponDiscount = 0;


    /* =====================================================
       UPDATE TOTALS
    ====================================================== */

    function updateTotals() {

        const subtotal =
            getSubtotal();


        const shipping =
            getShipping(
                subtotal
            );


        const grandTotal =
            Math.max(
                0,
                subtotal +
                shipping -
                couponDiscount
            );


        if (
            subtotalElement
        ) {

            subtotalElement.textContent =
                formatPrice(
                    subtotal
                );

        }


        if (
            shippingElement
        ) {

            shippingElement.textContent =
                shipping === 0
                    ? "FREE"
                    : formatPrice(
                        shipping
                    );

        }


        if (
            discountElement
        ) {

            discountElement.textContent =
                "-" +
                formatPrice(
                    couponDiscount
                );

        }


        if (
            grandTotalElement
        ) {

            grandTotalElement.textContent =
                formatPrice(
                    grandTotal
                );

        }

    }


    /* =====================================================
       IMAGE FALLBACK
    ====================================================== */

    function addImageFallback(
        image
    ) {

        if (
            !image
        ) {

            return;

        }


        image.addEventListener(
            "error",
            function () {

                this.onerror =
                    null;


                this.src =
                    "https://placehold.co/300x300/f2f3f4/132438?text=OZZO";

            }
        );

    }


    /* =====================================================
       RENDER ORDER SUMMARY
    ====================================================== */

    function renderSummary() {

        if (
            !summaryItems
        ) {

            return;

        }


        summaryItems.innerHTML =
            "";


        if (
            cart.length === 0
        ) {

            if (
                emptyCheckout
            ) {

                emptyCheckout.style.display =
                    "block";

            }


            if (
                checkoutContent
            ) {

                checkoutContent.style.display =
                    "none";

            }


            return;

        }


        if (
            emptyCheckout
        ) {

            emptyCheckout.style.display =
                "none";

        }


        if (
            checkoutContent
        ) {

            checkoutContent.style.display =
                "";

        }


        cart.forEach(
            function (
                item
            ) {

                const row =
                    document.createElement(
                        "div"
                    );


                row.className =
                    "summary-item";


                const image =
                    item.image ||
                    "https://placehold.co/300x300/f2f3f4/132438?text=OZZO";


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


                const itemTotal =
                    price *
                    quantity;


                const category =
                    item.category ||
                    "";


                const subcategory =
                    item.subcategory
                        ? ` · ${item.subcategory}`
                        : "";


                const size =
                    item.size
                        ? ` · Size: ${item.size}`
                        : "";


                row.innerHTML = `

                    <div class="summary-image">

                        <img
                            src="${image}"
                            alt="${item.name || "OZZO Product"}"
                        >

                    </div>


                    <div class="summary-info">

                        <h4>
                            ${item.name || "OZZO Product"}
                        </h4>


                        <div class="summary-meta">

                            ${category}${subcategory}

                            <br>

                            Qty:
                            ${quantity}${size}

                        </div>

                    </div>


                    <div class="summary-price">

                        ${formatPrice(
                            itemTotal
                        )}

                    </div>

                `;


                addImageFallback(
                    row.querySelector(
                        "img"
                    )
                );


                summaryItems.appendChild(
                    row
                );

            }
        );


        updateTotals();

    }


    /* =====================================================
       PAYMENT SWITCH
    ====================================================== */

    document
        .querySelectorAll(
            'input[name="payment"]'
        )
        .forEach(
            function (
                radio
            ) {

                radio.addEventListener(
                    "change",
                    function () {

                        if (
                            this.value ===
                            "Card"
                        ) {

                            cardPaymentBox.classList.add(
                                "show"
                            );

                        } else {

                            cardPaymentBox.classList.remove(
                                "show"
                            );

                        }

                    }
                );

            }
        );


    /* =====================================================
       COUPON
    ====================================================== */

    if (
        couponBtn
    ) {

        couponBtn.addEventListener(
            "click",
            function () {

                const code =
                    couponInput.value
                        .trim()
                        .toUpperCase();


                couponDiscount =
                    0;


                if (
                    !code
                ) {

                    couponMessage.textContent =
                        "Enter a coupon code.";

                    couponMessage.style.color =
                        "#c94343";

                    updateTotals();

                    return;

                }


                const subtotal =
                    getSubtotal();


                /* ---------------------------------------------
                   OZZO10
                --------------------------------------------- */

                if (
                    code ===
                    "OZZO10"
                ) {

                    if (
                        subtotal >= 499
                    ) {

                        couponDiscount =
                            Math.round(
                                subtotal *
                                0.10
                            );


                        couponMessage.textContent =
                            "OZZO10 applied — 10% discount.";

                        couponMessage.style.color =
                            "#1f7656";

                    } else {

                        couponMessage.textContent =
                            "Minimum order value is ₹499.";

                        couponMessage.style.color =
                            "#c94343";

                    }

                }


                /* ---------------------------------------------
                   WELCOME50
                --------------------------------------------- */

                else if (
                    code ===
                    "WELCOME50"
                ) {

                    if (
                        subtotal >= 799
                    ) {

                        couponDiscount =
                            50;


                        couponMessage.textContent =
                            "WELCOME50 applied — ₹50 off.";

                        couponMessage.style.color =
                            "#1f7656";

                    } else {

                        couponMessage.textContent =
                            "Minimum order value is ₹799.";

                        couponMessage.style.color =
                            "#c94343";

                    }

                }


                /* ---------------------------------------------
                   INVALID
                --------------------------------------------- */

                else {

                    couponMessage.textContent =
                        "Invalid coupon code.";

                    couponMessage.style.color =
                        "#c94343";

                }


                updateTotals();

            }
        );

    }


    /* =====================================================
       PHONE VALIDATION
    ====================================================== */

    const phone =
        document.getElementById(
            "phone"
        );


    if (
        phone
    ) {

        phone.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                        .replace(
                            /\D/g,
                            ""
                        )
                        .slice(
                            0,
                            10
                        );

            }
        );

    }


    /* =====================================================
       PINCODE VALIDATION
    ====================================================== */

    const pincode =
        document.getElementById(
            "pincode"
        );


    if (
        pincode
    ) {

        pincode.addEventListener(
            "input",
            function () {

                this.value =
                    this.value
                        .replace(
                            /\D/g,
                            ""
                        )
                        .slice(
                            0,
                            6
                        );

            }
        );

    }


    /* =====================================================
       CARD NUMBER
    ====================================================== */

    const cardNumber =
        document.getElementById(
            "cardNumber"
        );


    if (
        cardNumber
    ) {

        cardNumber.addEventListener(
            "input",
            function () {

                let value =
                    this.value
                        .replace(
                            /\D/g,
                            ""
                        )
                        .slice(
                            0,
                            16
                        );


                value =
                    value
                        .replace(
                            /(.{4})/g,
                            "$1 "
                        )
                        .trim();


                this.value =
                    value;

            }
        );

    }


    /* =====================================================
       CARD EXPIRY
    ====================================================== */

    const cardExpiry =
        document.getElementById(
            "cardExpiry"
        );


    if (
        cardExpiry
    ) {

        cardExpiry.addEventListener(
            "input",
            function () {

                let value =
                    this.value
                        .replace(
                            /\D/g,
                            ""
                        )
                        .slice(
                            0,
                            4
                        );


                if (
                    value.length >= 3
                ) {

                    value =
                        value.slice(
                            0,
                            2
                        ) +
                        "/" +
                        value.slice(
                            2
                        );

                }


                this.value =
                    value;

            }
        );

    }


    /* =====================================================
       PLACE ORDER
    ====================================================== */

    if (
        placeOrderBtn
    ) {

        placeOrderBtn.addEventListener(
            "click",
            function () {

                /* ---------------------------------------------
                   RELOAD CART
                --------------------------------------------- */

                cart =
                    readCart();


                /* ---------------------------------------------
                   EMPTY CART
                --------------------------------------------- */

                if (
                    !cart.length
                ) {

                    alert(
                        "Your cart is empty."
                    );

                    return;

                }


                /* ---------------------------------------------
                   FORM VALIDATION
                --------------------------------------------- */

                if (
                    !checkoutForm.checkValidity()
                ) {

                    checkoutForm.reportValidity();

                    return;

                }


                /* ---------------------------------------------
                   PAYMENT
                --------------------------------------------- */

                const selectedPayment =
                    document.querySelector(
                        'input[name="payment"]:checked'
                    );


                if (
                    !selectedPayment
                ) {

                    alert(
                        "Please select a payment method."
                    );

                    return;

                }


                /* ---------------------------------------------
                   CARD VALIDATION
                --------------------------------------------- */

                if (
                    selectedPayment.value ===
                    "Card"
                ) {

                    const number =
                        document
                            .getElementById(
                                "cardNumber"
                            )
                            .value
                            .replace(
                                /\s/g,
                                ""
                            );


                    const name =
                        document
                            .getElementById(
                                "cardName"
                            )
                            .value
                            .trim();


                    const expiry =
                        document
                            .getElementById(
                                "cardExpiry"
                            )
                            .value
                            .trim();


                    const cvv =
                        document
                            .getElementById(
                                "cardCvv"
                            )
                            .value
                            .trim();


                    if (
                        number.length !== 16 ||
                        !name ||
                        expiry.length !== 5 ||
                        cvv.length < 3
                    ) {

                        alert(
                            "Please enter the demo card details correctly."
                        );

                        return;

                    }

                }


                /* ---------------------------------------------
                   TOTALS
                --------------------------------------------- */

                const subtotal =
                    getSubtotal();


                const shipping =
                    getShipping(
                        subtotal
                    );


                const total =
                    Math.max(
                        0,
                        subtotal +
                        shipping -
                        couponDiscount
                    );


                /* ---------------------------------------------
                   ORDER ID
                --------------------------------------------- */

                const generatedOrder =
                    "OZZO" +
                    Date.now()
                        .toString()
                        .slice(
                            -8
                        );


                /* ---------------------------------------------
                   ORDER
                --------------------------------------------- */

                const order = {

                    orderId:
                        generatedOrder,


                    customer: {

                        firstName:
                            document
                                .getElementById(
                                    "firstName"
                                )
                                .value
                                .trim(),

                        lastName:
                            document
                                .getElementById(
                                    "lastName"
                                )
                                .value
                                .trim(),

                        email:
                            document
                                .getElementById(
                                    "email"
                                )
                                .value
                                .trim(),

                        phone:
                            document
                                .getElementById(
                                    "phone"
                                )
                                .value
                                .trim(),

                        address:
                            document
                                .getElementById(
                                    "address"
                                )
                                .value
                                .trim(),

                        city:
                            document
                                .getElementById(
                                    "city"
                                )
                                .value
                                .trim(),

                        state:
                            document
                                .getElementById(
                                    "state"
                                )
                                .value,

                        pincode:
                            document
                                .getElementById(
                                    "pincode"
                                )
                                .value
                                .trim()

                    },


                    payment:
                        selectedPayment.value,


                    items:
                        cart.map(
                            function (
                                item
                            ) {

                                return {
                                    ...item
                                };

                            }
                        ),


                    subtotal:
                        subtotal,


                    shipping:
                        shipping,


                    discount:
                        couponDiscount,


                    total:
                        total,


                    placedAt:
                        new Date()
                            .toISOString()

                };


                /* ---------------------------------------------
                   SAVE ORDER
                --------------------------------------------- */

                try {

                    localStorage.setItem(
                        "ozzoLastOrder",
                        JSON.stringify(
                            order
                        )
                    );

                } catch (error) {

                    console.error(
                        "Unable to save order:",
                        error
                    );

                }


                /* ---------------------------------------------
                   CLEAR CART
                --------------------------------------------- */

                localStorage.removeItem(
                    "ozzoCart"
                );


                /* ---------------------------------------------
                   SUCCESS
                --------------------------------------------- */

                if (
                    orderNumberElement
                ) {

                    orderNumberElement.textContent =
                        `Order #${generatedOrder}`;

                }


                if (
                    successOverlay
                ) {

                    successOverlay.classList.add(
                        "show"
                    );

                }

            }
        );

    }


    /* =====================================================
       CONTINUE SHOPPING
    ====================================================== */

    if (
        continueAfterOrder
    ) {

        continueAfterOrder.addEventListener(
            "click",
            function () {

                window.location.href =
                    "../index.html";

            }
        );

    }


    /* =====================================================
       INITIAL RENDER
    ====================================================== */

    renderSummary();

});
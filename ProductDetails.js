document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       PRODUCT DATABASE
    ========================================================= */

    const products = {

        "fashion-001": {
            id: "fashion-001",
            category: "Fashion",
            name: "Classic Beige Dress",
            brand: "OZZO Fashion",
            price: 1299,
            mrp: 1999,
            rating: 4.4,
            reviews: 86,
            bought: "100+ bought in past month",

            images: [
                "images/fashion/beige-dress.jpg",
                "images/fashion/beige-dress-2.jpg",
                "images/fashion/beige-dress-3.jpg"
            ],

            description: [
                "Comfortable and stylish design for everyday wear.",
                "Soft and breathable fabric.",
                "Modern silhouette with an elegant finish.",
                "Suitable for casual outings and weekend styling."
            ]
        },


        "fashion-002": {
            id: "fashion-002",
            category: "Fashion",
            name: "Classic Casual Shirt",
            brand: "OZZO Fashion",
            price: 999,
            mrp: 1499,
            rating: 4.5,
            reviews: 72,
            bought: "200+ bought in past month",

            images: [
                "images/fashion/casual-shirt.jpg",
                "images/fashion/casual-shirt-2.jpg",
                "images/fashion/casual-shirt-3.jpg"
            ],

            description: [
                "Premium casual shirt designed for modern everyday style.",
                "Soft fabric with comfortable fitting.",
                "Easy to pair with jeans or trousers.",
                "Perfect for casual and smart-casual occasions."
            ]
        },


        "fashion-003": {
            id: "fashion-003",
            category: "Fashion",
            name: "Oversized Cotton Top",
            brand: "OZZO Fashion",
            price: 799,
            mrp: 1199,
            rating: 4.3,
            reviews: 64,
            bought: "100+ bought in past month",

            images: [
                "images/fashion/oversized-top.jpg",
                "images/fashion/oversized-top-2.jpg"
            ],

            description: [
                "Relaxed oversized silhouette.",
                "Premium cotton fabric.",
                "Soft hand feel and breathable construction.",
                "Ideal for casual everyday outfits."
            ]
        },


        "fashion-004": {
            id: "fashion-004",
            category: "Fashion",
            name: "Premium Polo T-Shirt",
            brand: "OZZO Fashion",
            price: 899,
            mrp: 1399,
            rating: 4.6,
            reviews: 91,
            bought: "300+ bought in past month",

            images: [
                "images/fashion/hoddie.jpg",
                "images/fashion/hoddie-2.jpg"
            ],

            description: [
                "Premium polo-inspired everyday style.",
                "Comfortable fabric for all-day wear.",
                "Classic fit with clean finishing.",
                "Perfect for casual and semi-casual looks."
            ]
        },


        "fashion-005": {
            id: "fashion-005",
            category: "Sarees",
            name: "Elegant Rose Silk Saree",
            brand: "OZZO Sarees",
            price: 1499,
            mrp: 1999,
            rating: 4.6,
            reviews: 58,
            bought: "100+ bought in past month",

            images: [
                "images/fashion/sarees/rose-silk.jpg",
                "images/fashion/sarees/rose-silk-2.jpg",
                "images/fashion/sarees/rose-silk-3.jpg"
            ],

            description: [
                "Elegant saree with a premium traditional finish.",
                "Soft and comfortable drape.",
                "Ideal for festive and special occasions.",
                "Designed for modern styling with timeless appeal."
            ]
        },


        "fashion-006": {
            id: "fashion-006",
            category: "Sarees",
            name: "Classic Green Saree",
            brand: "OZZO Sarees",
            price: 1699,
            mrp: 2199,
            rating: 4.5,
            reviews: 47,
            bought: "80+ bought in past month",

            images: [
                "images/fashion/sarees/green-saree.jpg",
                "images/fashion/sarees/green-saree-2.jpg"
            ],

            description: [
                "Classic green saree with elegant detailing.",
                "Comfortable fabric suitable for extended wear.",
                "Beautiful traditional-inspired styling.",
                "Great choice for celebrations and occasions."
            ]
        }

    };


    /* =========================================================
       URL PRODUCT ID
    ========================================================= */

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    const product = products[productId];


    if (!product) {

        document.querySelector(".product-details-section").innerHTML = `
            <div class="container py-5 text-center">
                <h2>Product not found</h2>
                <p>The product you are looking for is unavailable.</p>
                <a href="index.html" class="btn btn-dark mt-3">
                    Back to Home
                </a>
            </div>
        `;

        return;
    }


    /* =========================================================
       PRODUCT BASIC DETAILS
    ========================================================= */

    document.title =
        `${product.name} | OZZO`;


    document.getElementById("storeName").textContent =
        product.brand;


    document.getElementById("productName").textContent =
        product.name;


    document.getElementById("productRating").textContent =
        product.rating;


    document.getElementById("reviewCount").textContent =
        `${product.reviews} ratings`;


    document.getElementById("boughtCount").textContent =
        product.bought;


    document.getElementById("productPrice").textContent =
        product.price.toLocaleString("en-IN");


    document.getElementById("buyPrice").textContent =
        product.price.toLocaleString("en-IN");


    document.getElementById("productMrp").textContent =
        `₹${product.mrp.toLocaleString("en-IN")}`;


    document.getElementById("breadcrumbCategory").textContent =
        product.category;


    document.getElementById("breadcrumbProduct").textContent =
        product.name;


    /* =========================================================
       DISCOUNT
    ========================================================= */

    const discount =
        Math.round(
            ((product.mrp - product.price) /
            product.mrp) * 100
        );

    document.getElementById("discount").textContent =
        `-${discount}%`;


    /* =========================================================
       DESCRIPTION
    ========================================================= */

    const description =
        document.getElementById("productDescription");

    description.innerHTML = "";

    product.description.forEach(text => {

        const li = document.createElement("li");

        li.textContent = text;

        description.appendChild(li);

    });


    /* =========================================================
       MAIN IMAGE
    ========================================================= */

    const mainImage =
        document.getElementById("mainProductImage");

    mainImage.src = product.images[0];

    mainImage.alt = product.name;


    /* =========================================================
       THUMBNAILS
    ========================================================= */

    const thumbnailList =
        document.getElementById("thumbnailList");

    thumbnailList.innerHTML = "";


    product.images.forEach((image, index) => {

        const button =
            document.createElement("button");

        button.className =
            `thumbnail ${index === 0 ? "active" : ""}`;

        button.type = "button";

        button.innerHTML = `
            <img src="${image}" alt="${product.name}">
        `;


        button.addEventListener("click", function () {

            mainImage.src = image;

            document
                .querySelectorAll(".thumbnail")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

        });


        thumbnailList.appendChild(button);

    });


    /* =========================================================
       CART
    ========================================================= */

    const cartCount =
        document.getElementById("cartCount");

    let cart =
        JSON.parse(localStorage.getItem("ozzoCart")) || [];


    function updateCartCount(){

        const total =
            cart.reduce(
                (sum, item) =>
                    sum + Number(item.quantity),
                0
            );

        cartCount.textContent = total;

    }


    function addProductToCart(quantity = 1){

        const existing =
            cart.find(
                item => item.id === product.id
            );


        if(existing){

            existing.quantity =
                Number(existing.quantity) +
                Number(quantity);

        }else{

            cart.push({

                id: product.id,

                name: product.name,

                price: product.price,

                image: product.images[0],

                category: product.category,

                quantity: Number(quantity)

            });

        }


        localStorage.setItem(
            "ozzoCart",
            JSON.stringify(cart)
        );


        updateCartCount();

    }


    /* =========================================================
       ADD TO CART
    ========================================================= */

    const addButton =
        document.getElementById("addToCartBtn");


    addButton.addEventListener("click", function(){

        const quantity =
            Number(
                document.getElementById("quantity").value
            );


        addProductToCart(quantity);


        addButton.textContent =
            "Added to cart ✓";

        addButton.classList.add("added");


        setTimeout(() => {

            addButton.textContent =
                "Add to cart";

            addButton.classList.remove("added");

        }, 1500);

    });


    /* =========================================================
       BUY NOW
    ========================================================= */

    document
        .getElementById("buyNowBtn")
        .addEventListener("click", function(){

            const quantity =
                Number(
                    document.getElementById("quantity").value
                );


            addProductToCart(quantity);


            window.location.href =
                "Cart.html";

        });


    /* =========================================================
       RELATED PRODUCTS
    ========================================================= */

    const relatedContainer =
        document.getElementById("relatedProducts");


    const relatedProducts =
        Object.values(products)
            .filter(item =>
                item.id !== product.id &&
                (
                    item.category === product.category ||
                    item.category === "Fashion" ||
                    product.category === "Fashion"
                )
            )
            .slice(0, 4);


    relatedProducts.forEach(item => {

        const card =
            document.createElement("article");

        card.className = "related-card";


        card.innerHTML = `

            <a href="ProductDetails.html?id=${item.id}">

                <div class="related-image">

                    <img
                        src="${item.images[0]}"
                        alt="${item.name}"
                    >

                    <span class="related-category">
                        ${item.category}
                    </span>

                </div>

                <div class="related-content">

                    <h3>
                        ${item.name}
                    </h3>

                    <div class="related-rating">

                        ${item.rating}

                        <i
                            class="fa-solid fa-star"
                            aria-hidden="true"
                        ></i>

                        (${item.reviews})

                    </div>

                    <div>

                        <span class="related-price">
                            ₹${item.price.toLocaleString("en-IN")}
                        </span>

                        <span class="related-old-price">
                            ₹${item.mrp.toLocaleString("en-IN")}
                        </span>

                    </div>

                </div>

            </a>
        `;


        relatedContainer.appendChild(card);

    });


    /* =========================================================
       INITIAL CART COUNT
    ========================================================= */

    updateCartCount();


    /* =========================================================
       NEWSLETTER
    ========================================================= */

    const newsletterForm =
        document.getElementById("newsletterForm");


    if(newsletterForm){

        newsletterForm.addEventListener(
            "submit",
            function(event){

                event.preventDefault();

                document.getElementById(
                    "newsletterMessage"
                ).textContent =
                    "Thank you for subscribing!";

                this.reset();

            }
        );

    }

});
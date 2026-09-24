document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       OZZO PRODUCT DETAILS
       Supports:
       - Fashion
       - Books
       - Stationery
       - Pads
       ========================================================= */


    /* =========================================================
       HELPERS
    ========================================================== */

    const $ = id => document.getElementById(id);
    const qs = selector => document.querySelector(selector);
    const qsa = selector => document.querySelectorAll(selector);

    const params = new URLSearchParams(window.location.search);


    /* =========================================================
       URL DATA
    ========================================================== */

    const url = {

        id:
            (params.get("id") || "").trim(),

        name:
            (params.get("name") || "").trim(),

        price:
            params.get("price"),

        mrp:
            params.get("mrp"),

        image:
            params.get("image") || "",

        category:
            (params.get("category") || "").trim(),

        subcategory:
            (params.get("subcategory") || "").trim(),

        rating:
            params.get("rating"),

        reviews:
            params.get("reviews")

    };


    /* =========================================================
       SESSION STORAGE
    ========================================================== */

    let sessionProduct = null;

    try {

        sessionProduct =
            JSON.parse(
                sessionStorage.getItem(
                    "ozzoSelectedProduct"
                )
            ) || null;

    } catch (error) {

        sessionProduct = null;

    }


    /* =========================================================
       FASHION DATABASE
    ========================================================== */

    const products = {};


    /* =========================================================
       FASHION IMAGES
    ========================================================== */

    const images = {

        womenSaree:
            "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85",

        womenSaree2:
            "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85",

        women:
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85",

        dress:
            "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85",

        men:
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85",

        innerWomen:
            "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85",

        innerMen:
            "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85",

        kids: [

            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",

            "https://images.unsplash.com/photo-1604917019110-4f3b4c0f1c50?auto=format&fit=crop&w=900&q=85",

            "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85",

            "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",

            "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85"

        ]

    };


    /* =========================================================
       ADD FASHION PRODUCT
    ========================================================== */

    function addFashion(
        id,
        category,
        subcategory,
        name,
        brand,
        price,
        mrp,
        rating,
        reviews,
        image,
        description
    ) {

        products[id] = {

            id,

            category,

            categoryKey: "fashion",

            subcategory,

            name,

            brand,

            price:
                Number(price),

            mrp:
                Number(mrp),

            rating:
                Number(rating),

            reviews:
                Number(reviews),

            bought:
                `${60 + (reviews % 8) * 15}+ bought in past month`,

            images: [
                image
            ],

            description:
                Array.isArray(description)
                    ? description
                    : [

                        `${name} designed for comfortable everyday styling.`,

                        "Comfortable fabric and practical construction for regular wear.",

                        "Clean OZZO styling designed for easy everyday use.",

                        `Suitable for ${description || "everyday use"}.`

                    ]

        };

    }


    /* =========================================================
       FASHION 001–014
    ========================================================== */

    addFashion(
        "fashion-001",
        "Women's Wear",
        "Dresses",
        "Classic Beige Dress",
        "OZZO Fashion",
        1299,
        1799,
        4.4,
        86,
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85"
    );


    addFashion(
        "fashion-002",
        "Men's Wear",
        "Shirts",
        "Classic Casual Shirt",
        "OZZO Fashion",
        999,
        1399,
        4.5,
        72,
        images.men
    );


    addFashion(
        "fashion-003",
        "Women's Wear",
        "Tops",
        "Oversized Cotton Top",
        "OZZO Fashion",
        799,
        1099,
        4.3,
        64,
        images.women
    );


    addFashion(
        "fashion-004",
        "Men's Wear",
        "T-Shirts",
        "Premium Polo T-Shirt",
        "OZZO Fashion",
        899,
        1299,
        4.6,
        91,
        "hoddie.jpg"
    );


    addFashion(
        "fashion-005",
        "Kids Wear",
        "Kids Wear",
        "Kids Summer Outfit",
        "OZZO Kids",
        699,
        999,
        4.5,
        16,
        images.kids[0]
    );


    addFashion(
        "fashion-006",
        "Women's Wear",
        "Shirts",
        "Olive Green Shirt",
        "OZZO Fashion",
        1099,
        1499,
        4.4,
        21,
        "women shirt.jpg"
    );


    addFashion(
        "fashion-007",
        "Women's Wear",
        "Sarees",
        "Elegant Rose Silk Saree",
        "OZZO Sarees",
        1499,
        1999,
        4.6,
        58,
        images.womenSaree
    );


    addFashion(
        "fashion-008",
        "Women's Wear",
        "Sarees",
        "Classic Green Saree",
        "OZZO Sarees",
        1699,
        2199,
        4.5,
        47,
        "saree2.jpg"
    );


    addFashion(
        "fashion-009",
        "Women's Wear",
        "Sarees",
        "Pastel Organza Saree",
        "OZZO Sarees",
        1899,
        2499,
        4.5,
        19,
        "blue saree.jpg"
    );


    addFashion(
        "fashion-010",
        "Women's Wear",
        "Sarees",
        "Royal Blue Saree",
        "OZZO Sarees",
        1599,
        2099,
        4.6,
        42,
        "saree2.jpg"
    );


    addFashion(
        "fashion-011",
        "Inner Wears",
        "Bra",
        "Comfort Cotton Bra",
        "OZZO Essentials",
        599,
        799,
        4.4,
        27,
        images.innerWomen
    );


    addFashion(
        "fashion-012",
        "Inner Wears",
        "Briefs",
        "Men Cotton Briefs",
        "OZZO Essentials",
        499,
        699,
        4.3,
        23,
        images.innerMen
    );


    addFashion(
        "fashion-013",
        "Kids Wear",
        "Girls Dresses",
        "Baby Girl Party Dress",
        "OZZO Kids",
        899,
        1199,
        4.5,
        14,
        images.kids[1]
    );


    addFashion(
        "fashion-014",
        "Kids Wear",
        "Boys Dresses",
        "Boys Casual Outfit",
        "OZZO Kids",
        749,
        999,
        4.4,
        17,
        images.kids[0]
    );


    /* =========================================================
       WOMEN 015–074
    ========================================================== */

    const womenSarees = [

        "Royal Red Pattu Saree",
        "Emerald Green Pattu Saree",
        "Peacock Blue Pattu Saree",
        "Rani Pink Pattu Saree",
        "Mustard Gold Pattu Saree",
        "Wine Maroon Pattu Saree",
        "Purple Zari Pattu Saree",
        "Teal Green Pattu Saree",
        "Rose Gold Pattu Saree",
        "Royal Violet Pattu Saree",

        "Pearl White Fancy Saree",
        "Dusty Pink Fancy Saree",
        "Lavender Fancy Saree",
        "Sky Blue Fancy Saree",
        "Wine Fancy Saree",
        "Black Designer Fancy Saree",
        "Peach Party Fancy Saree",
        "Mint Green Fancy Saree",
        "Royal Blue Fancy Saree",
        "Rose Designer Fancy Saree",

        "Maroon Daily Wear Saree",
        "Green Printed Daily Wear Saree",
        "Blue Daily Wear Saree",
        "Yellow Daily Wear Saree",
        "Pink Daily Wear Saree",
        "Purple Daily Wear Saree",
        "Brown Daily Wear Saree",
        "Beige Daily Wear Saree",
        "Teal Daily Wear Saree",
        "Grey Daily Wear Saree",

        "White Handloom Cotton Saree",
        "Indigo Cotton Saree",
        "Green Cotton Saree",
        "Maroon Cotton Saree",
        "Mustard Cotton Saree",
        "Blue Handloom Cotton Saree",
        "Pink Soft Cotton Saree",
        "Beige Cotton Saree",
        "Red Traditional Cotton Saree",
        "Grey Cotton Saree"

    ];


    const sareeGroups = [

        ...Array(10).fill("Pattu Sarees"),

        ...Array(10).fill("Fancy Sarees"),

        ...Array(10).fill("Daily Wear Sarees"),

        ...Array(10).fill("Cotton Sarees")

    ];


    womenSarees.forEach(
        (name, index) => {

            addFashion(

                `fashion-${String(
                    15 + index
                ).padStart(3, "0")}`,

                "Women's Wear",

                sareeGroups[index],

                name,

                "OZZO Sarees",

                1299 + (index % 10) * 100,

                1799 + (index % 10) * 100,

                4.4 + (index % 4) * 0.1,

                20 + index,

                index % 2
                    ? images.womenSaree2
                    : images.womenSaree

            );

        }
    );


    /* =========================================================
       WOMEN TOPS
    ========================================================== */

    const womenTops = [

        "Classic White Cotton Top",
        "Dusty Rose Peplum Top",
        "Sky Blue Linen Top",
        "Black Ribbed Sleeveless Top",
        "Olive Green Relaxed Top",
        "Ivory Embroidered Top",
        "Lavender Puff Sleeve Top",
        "Terracotta V-Neck Top",
        "Soft Beige Wrap Top",
        "Sky Blue Printed Top"

    ];


    womenTops.forEach(
        (name, index) => {

            addFashion(

                `fashion-${String(
                    55 + index
                ).padStart(3, "0")}`,

                "Women's Wear",

                "Tops",

                name,

                "OZZO Fashion",

                699 + index * 25,

                999 + index * 25,

                4.3 + (index % 4) * 0.1,

                20 + index,

                images.women

            );

        }
    );


    /* =========================================================
       WOMEN DRESSES
    ========================================================== */

    const womenDresses = [

        "Floral Midi Dress",
        "Classic Black Bodycon Dress",
        "Pastel Pink Maxi Dress",
        "Sage Green Shirt Dress",
        "Royal Blue Evening Dress",
        "Beige Linen Summer Dress",
        "Wine Wrap Midi Dress",
        "Lavender Pleated Dress",
        "Coral Printed Summer Dress",
        "Emerald Green Party Dress"

    ];


    womenDresses.forEach(
        (name, index) => {

            addFashion(

                `fashion-${String(
                    65 + index
                ).padStart(3, "0")}`,

                "Women's Wear",

                "Dresses",

                name,

                "OZZO Fashion",

                1099 + index * 55,

                1549 + index * 55,

                4.4 + (index % 4) * 0.1,

                23 + index,

                images.dress

            );

        }
    );


    /* =========================================================
       MEN
    ========================================================== */

    const menGroups = {

        "Shirts": [

            "Premium White Oxford Shirt",
            "Sky Blue Formal Shirt",
            "Classic Navy Cotton Shirt",
            "Olive Casual Shirt",
            "Charcoal Slim Fit Shirt",
            "Beige Linen Shirt",
            "Maroon Textured Shirt",
            "Light Grey Checked Shirt",
            "Black Executive Shirt",
            "Royal Blue Full Sleeve Shirt"

        ],

        "Pants": [

            "Classic Black Cotton Pants",
            "Navy Regular Fit Pants",
            "Beige Chino Pants",
            "Grey Formal Pants",
            "Olive Casual Pants",
            "Stone Slim Fit Pants",
            "Charcoal Tapered Pants",
            "Cream Cotton Pants",
            "Dark Brown Formal Pants",
            "Midnight Blue Pants"

        ],

        "Readymade Shirts": [

            "ReadyFit White Shirt",
            "ReadyFit Blue Check Shirt",
            "ReadyFit Black Shirt",
            "ReadyFit Maroon Shirt",
            "ReadyFit Green Casual Shirt",
            "ReadyFit Grey Shirt",
            "ReadyFit Beige Shirt",
            "ReadyFit Navy Stripe Shirt",
            "ReadyFit Printed Casual Shirt",
            "ReadyFit Premium Cotton Shirt"

        ],

        "Readymade Pants": [

            "ReadyFit Black Trousers",
            "ReadyFit Navy Pants",
            "ReadyFit Grey Trousers",
            "ReadyFit Beige Chinos",
            "ReadyFit Olive Pants",
            "ReadyFit Khaki Pants",
            "ReadyFit Charcoal Trousers",
            "ReadyFit Brown Pants",
            "ReadyFit Blue Formal Pants",
            "ReadyFit Stone Cotton Pants"

        ],

        "T-Shirts": [

            "Classic Black Crew Neck T-Shirt",
            "White Premium Cotton T-Shirt",
            "Navy Graphic T-Shirt",
            "Olive Round Neck T-Shirt",
            "Grey Essential T-Shirt",
            "Maroon Casual T-Shirt",
            "Sky Blue Comfort T-Shirt",
            "Beige Minimal T-Shirt",
            "Bottle Green T-Shirt",
            "Charcoal Oversized T-Shirt"

        ],

        "Shorts": [

            "Classic Black Casual Shorts",
            "Navy Cotton Shorts",
            "Beige Everyday Shorts",
            "Olive Utility Shorts",
            "Grey Sports Shorts",
            "Khaki Weekend Shorts",
            "Charcoal Relaxed Shorts",
            "Blue Denim Shorts",
            "Brown Casual Shorts",
            "Stone Cotton Shorts"

        ],

        "Track Pants": [

            "Essential Black Track Pants",
            "Navy Performance Track Pants",
            "Grey Active Track Pants",
            "Charcoal Slim Track Pants",
            "Olive Training Track Pants",
            "Royal Blue Sports Track Pants",
            "Black Tapered Track Pants",
            "Dark Grey Jogger Track Pants",
            "Navy Comfort Track Pants",
            "Black Everyday Track Pants",
            "Steel Grey Track Pants",
            "Bottle Green Track Pants",
            "Maroon Active Track Pants",
            "Midnight Blue Track Pants",
            "Graphite Performance Track Pants"

        ]

    };


    const menPrices = {

        "Shirts": 999,

        "Pants": 1099,

        "Readymade Shirts": 899,

        "Readymade Pants": 999,

        "T-Shirts": 699,

        "Shorts": 699,

        "Track Pants": 899

    };


    let menId = 75;


    Object.keys(menGroups).forEach(
        subcategory => {

            menGroups[subcategory].forEach(
                (name, index) => {

                    addFashion(

                        `fashion-${String(
                            menId++
                        ).padStart(3, "0")}`,

                        "Men's Wear",

                        subcategory,

                        name,

                        "OZZO Fashion",

                        menPrices[subcategory] +
                            index * 35,

                        menPrices[subcategory] +
                            350 +
                            index * 35,

                        4.3 +
                            (index % 4) * 0.1,

                        22 + index,

                        subcategory === "T-Shirts"
                            ? "hoddie.jpg"
                            : images.men

                    );

                }
            );

        }
    );


    /* =========================================================
       INNER WEARS
    ========================================================== */

    const innerGroups = {

        "Women's Bras": [

            "Everyday Comfort Bra",
            "Seamless Support Bra",
            "Soft Cotton Full Coverage Bra",
            "Lightly Padded Daily Bra",
            "Wirefree Comfort Bra",
            "T-Shirt Bra",
            "Double Layer Cotton Bra",
            "Smooth Finish Bra",
            "Classic Support Bra",
            "Everyday Fit Bra"

        ],

        "Women's Panties": [

            "Soft Cotton Panty",
            "Seamless Everyday Panty",
            "Comfort Fit Brief Panty",
            "High Rise Cotton Panty",
            "Mid Rise Everyday Panty",
            "Printed Comfort Panty",
            "Stretch Cotton Panty",
            "Classic Full Brief Panty",
            "Smooth Waistband Panty",
            "Breathable Daily Panty"

        ],

        "Women's Camisoles / Slips": [

            "Classic Cotton Camisole",
            "Seamless Daily Camisole",
            "Soft Strap Camisole",
            "Comfort Inner Slip",
            "Adjustable Strap Slip",
            "Everyday Cotton Slip",
            "Long Camisole",
            "Soft Layering Camisole",
            "Stretch Comfort Slip",
            "Classic Inner Camisole"

        ],

        "Women's Shapewear": [

            "Everyday Waist Shaper",
            "High Waist Shaping Brief",
            "Smooth Fit Shapewear",
            "Comfort Tummy Shaper",
            "Seamless Body Shaper",
            "Light Control Shaper",
            "Firm Fit Waist Shaper",
            "Sculpting Comfort Brief",
            "Smoothing Shorts Shapewear",
            "Everyday Full Body Shaper"

        ],

        "Women's Saree Petticoats": [

            "Classic Cotton Petticoat",
            "Adjustable Waist Petticoat",
            "Satin Finish Petticoat",
            "Premium Silk Petticoat",
            "Comfort Fit Saree Petticoat",
            "Everyday Saree Petticoat",
            "Soft Cotton Saree Skirt",
            "Drawstring Petticoat",
            "Flared Saree Petticoat",
            "Classic Ethnic Petticoat"

        ],

        "Men's Briefs": [

            "Classic Cotton Briefs",
            "Soft Stretch Briefs",
            "Premium Comfort Briefs",
            "Everyday Support Briefs",
            "Breathable Cotton Briefs",
            "Elastic Waist Briefs",
            "Classic White Briefs",
            "Comfort Fit Briefs",
            "Premium Cotton Briefs",
            "Daily Wear Briefs"

        ],

        "Men's Trunks": [

            "Classic Cotton Trunks",
            "Stretch Comfort Trunks",
            "Premium Fit Trunks",
            "Everyday Active Trunks",
            "Breathable Daily Trunks",
            "Soft Waistband Trunks",
            "Modern Cotton Trunks",
            "Comfort Flex Trunks",
            "Performance Trunks",
            "Essential Everyday Trunks"

        ],

        "Men's Vests": [

            "Classic White Vest",
            "Premium Cotton Vest",
            "Slim Fit Inner Vest",
            "Comfort Ribbed Vest",
            "Breathable Everyday Vest",
            "Soft Cotton Vest",
            "Classic Round Neck Vest",
            "Lightweight Comfort Vest",
            "Stretch Cotton Vest",
            "Essential Daily Vest"

        ],

        "Men's Inner T-Shirts": [

            "Classic White Inner T-Shirt",
            "Black Everyday Inner T-Shirt",
            "Soft Cotton Inner Tee",
            "Slim Fit Inner Tee",
            "Round Neck Inner T-Shirt",
            "Comfort Layer Inner Tee",
            "Breathable Cotton Inner Tee",
            "Premium Stretch Inner Tee",
            "Lightweight Inner T-Shirt",
            "Essential Daily Inner Tee"

        ],

        "Men's Boxers": [

            "Classic Cotton Boxers",
            "Soft Stretch Boxers",
            "Comfort Fit Boxers",
            "Premium Everyday Boxers",
            "Breathable Cotton Boxers",
            "Loose Fit Daily Boxers",
            "Printed Comfort Boxers",
            "Stretch Waist Boxers",
            "Lightweight Lounge Boxers",
            "Essential Everyday Boxers"

        ]

    };


    const innerBasePrices = {

        "Women's Bras": 549,

        "Women's Panties": 349,

        "Women's Camisoles / Slips": 399,

        "Women's Shapewear": 699,

        "Women's Saree Petticoats": 449,

        "Men's Briefs": 399,

        "Men's Trunks": 449,

        "Men's Vests": 349,

        "Men's Inner T-Shirts": 499,

        "Men's Boxers": 449

    };


    let innerId = 150;


    Object.keys(innerGroups).forEach(
        subcategory => {

            innerGroups[subcategory].forEach(
                (name, index) => {

                    const price =
                        innerBasePrices[subcategory] +
                        index * 20;


                    const image =
                        subcategory.startsWith("Women's")
                            ? images.innerWomen
                            : images.innerMen;


                    addFashion(

                        `fashion-${String(
                            innerId++
                        ).padStart(3, "0")}`,

                        "Inner Wears",

                        subcategory,

                        name,

                        "OZZO Essentials",

                        price,

                        price + 200,

                        4.2 +
                            (index % 5) * 0.1,

                        15 + index,

                        image

                    );

                }
            );

        }
    );


    /* =========================================================
       KIDS
    ========================================================== */

    const boysDresses = [

        "Boys Classic Party Dress",
        "Boys Blue Festive Kurta Set",
        "Boys Smart Casual Outfit",
        "Boys Traditional Festive Set",
        "Boys Cotton Occasion Dress",
        "Boys Printed Casual Outfit",
        "Boys Premium Ethnic Dress",
        "Boys Summer Celebration Outfit",
        "Boys Royal Blue Party Set",
        "Boys Comfortable Festive Wear"

    ];


    const girlsDresses = [

        "Girls Floral Party Dress",
        "Girls Pink Princess Dress",
        "Girls Lavender Festive Dress",
        "Girls Peach Celebration Dress",
        "Girls Blue Cotton Party Dress",
        "Girls Rose Pink Occasion Dress",
        "Girls Classic Ethnic Dress",
        "Girls Mint Green Party Dress",
        "Girls Premium Floral Dress",
        "Girls Rainbow Celebration Dress"

    ];


    const kidsImages = [

        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1604917019110-4f3b4c0f1c50?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85"

    ];


    let kidId = 250;


    boysDresses.forEach(
        (name, index) => {

            const price =
                749 +
                index * 50;


            addFashion(

                `fashion-${String(
                    kidId++
                ).padStart(3, "0")}`,

                "Kids Wear",

                "Boys Dresses",

                name,

                "OZZO Kids",

                price,

                price + 300,

                4.4 +
                    (index % 3) * 0.1,

                16 + index,

                kidsImages[index % 5]

            );

        }
    );


    girlsDresses.forEach(
        (name, index) => {

            const price =
                849 +
                index * 50;


            addFashion(

                `fashion-${String(
                    kidId++
                ).padStart(3, "0")}`,

                "Kids Wear",

                "Girls Dresses",

                name,

                "OZZO Kids",

                price,

                price + 300,

                4.4 +
                    (index % 3) * 0.1,

                18 + index,

                kidsImages[(index + 1) % 5]

            );

        }
    );


    /* =========================================================
       BOOKS
    ========================================================== */

    const books = [

        {
            id: "book-001",
            category: "Books",
            subcategory: "Self Help",
            name: "Atomic Habits",
            brand: "OZZO Books",
            price: 499,
            mrp: 699,
            rating: 4.8,
            reviews: 203,
            image: "book.jpg"
        },

        {
            id: "book-002",
            category: "Books",
            subcategory: "Self Help",
            name: "The Psychology of Money",
            brand: "OZZO Books",
            price: 399,
            mrp: 599,
            rating: 4.8,
            reviews: 167,
            image: "books set.jpg"
        },

        {
            id: "book-003",
            category: "Books",
            subcategory: "Productivity",
            name: "Deep Work",
            brand: "OZZO Books",
            price: 429,
            mrp: 599,
            rating: 4.7,
            reviews: 142,
            image: "book.jpg"
        },

        {
            id: "book-004",
            category: "Books",
            subcategory: "Fiction",
            name: "The Alchemist",
            brand: "OZZO Books",
            price: 299,
            mrp: 450,
            rating: 4.8,
            reviews: 189,
            image: "book.jpg"
        }

    ];


    /* =========================================================
       STATIONERY
    ========================================================== */

    const stationery = [

        {
            id: "stationery-001",
            category: "Stationery",
            subcategory: "Writing",
            name: "Premium Gel Pen Set",
            brand: "OZZO Stationery",
            price: 149,
            mrp: 199,
            rating: 5,
            reviews: 64,
            image:
                "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=700&q=85"
        },

        {
            id: "stationery-002",
            category: "Stationery",
            subcategory: "Notebooks",
            name: "Minimal Hardcover Notebook",
            brand: "OZZO Stationery",
            price: 299,
            mrp: 399,
            rating: 5,
            reviews: 87,
            image:
                "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=85"
        },

        {
            id: "stationery-003",
            category: "Stationery",
            subcategory: "Writing",
            name: "Classic Ball Pen Pack",
            brand: "OZZO Stationery",
            price: 99,
            mrp: 129,
            rating: 5,
            reviews: 48,
            image:
                "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=700&q=85"
        },

        {
            id: "stationery-004",
            category: "Stationery",
            subcategory: "Notebooks",
            name: "Daily Planner",
            brand: "OZZO Stationery",
            price: 249,
            mrp: 349,
            rating: 5,
            reviews: 73,
            image:
                "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=700&q=85"
        },

        {
            id: "stationery-005",
            category: "Stationery",
            subcategory: "Art",
            name: "Watercolor Paint Set",
            brand: "OZZO Stationery",
            price: 349,
            mrp: 499,
            rating: 5,
            reviews: 45,
            image:
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=700&q=85"
        },

        {
            id: "stationery-006",
            category: "Stationery",
            subcategory: "Art",
            name: "Artist Brush Set",
            brand: "OZZO Stationery",
            price: 279,
            mrp: 379,
            rating: 5,
            reviews: 39,
            image:
                "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=700&q=85"
        },

        {
            id: "stationery-007",
            category: "Stationery",
            subcategory: "Notebooks",
            name: "Study Notebook Set",
            brand: "OZZO Stationery",
            price: 399,
            mrp: 499,
            rating: 5,
            reviews: 61,
            image:
                "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=700&q=85"
        },

        {
            id: "stationery-008",
            category: "Stationery",
            subcategory: "Writing",
            name: "Highlighter Set",
            brand: "OZZO Stationery",
            price: 129,
            mrp: 179,
            rating: 5,
            reviews: 56,
            image:
                "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=700&q=85"
        }

    ];


    /* =========================================================
       PADS
       IMPORTANT:
       IDs exactly match Pads.html
    ========================================================== */

    const pads = [

        {
            id: "pads-001",
            category: "Pads",
            subcategory: "XXL",
            name:
                "ELLE-V Organic Sanitary Pads with anion chip",
            brand:
                "OZZO Care",
            price: 109,
            mrp: 149,
            rating: 4.7,
            reviews: 748,
            image:
                "/Pads-XXL-109.jpeg"
        },

        {
            id: "pads-002",
            category: "Pads",
            subcategory: "XXL",
            name:
                "Pads XXL 185",
            brand:
                "OZZO Care",
            price: 185,
            mrp: 249,
            rating: 4.6,
            reviews: 1126,
            image:
                "/Pads-XXL-185.jpeg"
        },

        {
            id: "pads-003",
            category: "Pads",
            subcategory: "XXL",
            name:
                "Pads XXL 269",
            brand:
                "OZZO Care",
            price: 269,
            mrp: 349,
            rating: 4.7,
            reviews: 1116,
            image:
                "/Pads-XXL-269.jpeg"
        },

        {
            id: "pads-004",
            category: "Pads",
            subcategory: "XXXL",
            name:
                "Pads XXXL 189",
            brand:
                "OZZO Care",
            price: 189,
            mrp: 249,
            rating: 4.7,
            reviews: 214,
            image:
                "/Pads-XXXL-189.jpeg"
        },

        {
            id: "pads-005",
            category: "Pads",
            subcategory: "XXXL",
            name:
                "Pads XXXL 279",
            brand:
                "OZZO Care",
            price: 279,
            mrp: 349,
            rating: 4.8,
            reviews: 766,
            image:
                "/Pads-XXXL-279.jpeg"
        },

        {
            id: "pads-006",
            category: "Pads",
            subcategory: "XXXL",
            name:
                "Pads XXXL 189 Premium",
            brand:
                "OZZO Care",
            price: 189,
            mrp: 249,
            rating: 4.6,
            reviews: 16,
            image:
                "/Pads-XXXL-189.jpeg"
        },

        {
            id: "pads-007",
            category: "Pads",
            subcategory: "Night",
            name:
                "Pads XXXL 279 Night",
            brand:
                "OZZO Care",
            price: 279,
            mrp: 349,
            rating: 4.7,
            reviews: 624,
            image:
                "/Pads-XXXL-279.jpeg"
        },

        {
            id: "pads-008",
            category: "Pads",
            subcategory: "Night",
            name:
                "Pads XXXL 189 Overnight",
            brand:
                "OZZO Care",
            price: 189,
            mrp: 249,
            rating: 4.7,
            reviews: 1200,
            image:
                "/Pads-XXXL-189.jpeg"
        }

    ];


    /* =========================================================
       CATEGORY CATALOGS
    ========================================================== */

    const catalogs = {

        books,

        stationery,

        pads

    };


    /* =========================================================
       CATEGORY HELPERS
    ========================================================== */

    function normalizeCategory(value) {

        const text =
            String(value || "")
                .trim()
                .toLowerCase();


        if (
            text.includes("stationer")
        ) {

            return "stationery";

        }


        if (
            text.includes("book")
        ) {

            return "books";

        }


        if (
            text.includes("pad")
        ) {

            return "pads";

        }


        if (
            text.includes("fashion")
        ) {

            return "fashion";

        }


        return "";

    }


    /* =========================================================
       CATEGORY FROM PRODUCT ID
    ========================================================== */

    function categoryFromId(value) {

        const id =
            String(value || "")
                .trim()
                .toLowerCase();


        if (
            id.startsWith("book-") ||
            id.startsWith("books-")
        ) {

            return "books";

        }


        if (
            id.startsWith("stationery-") ||
            id.startsWith("stationary-")
        ) {

            return "stationery";

        }


        if (
            id.startsWith("pad-") ||
            id.startsWith("pads-")
        ) {

            return "pads";

        }


        if (
            id.startsWith("fashion-")
        ) {

            return "fashion";

        }


        return "";

    }


    /* =========================================================
       CATEGORY FROM NAME
    ========================================================== */

    function categoryFromName(value) {

        const name =
            String(value || "")
                .trim()
                .toLowerCase();


        const bookNames = [

            "atomic habits",

            "the psychology of money",

            "deep work",

            "the alchemist"

        ];


        if (
            bookNames.includes(name)
        ) {

            return "books";

        }


        const padNames =
            pads.map(
                item =>
                    item.name.toLowerCase()
            );


        if (
            padNames.includes(name)
        ) {

            return "pads";

        }


        const stationeryNames =
            stationery.map(
                item =>
                    item.name.toLowerCase()
            );


        if (
            stationeryNames.includes(name)
        ) {

            return "stationery";

        }


        return "";

    }


    /* =========================================================
       RESOLVE CATEGORY
       PRODUCT ID HAS HIGHEST PRIORITY
    ========================================================== */

    function resolveCategory() {

        const fromUrlId =
            categoryFromId(
                url.id
            );


        if (fromUrlId) {

            return fromUrlId;

        }


        const fromUrlName =
            categoryFromName(
                url.name
            );


        if (fromUrlName) {

            return fromUrlName;

        }


        const fromSessionId =
            categoryFromId(
                sessionProduct?.id
            );


        if (fromSessionId) {

            return fromSessionId;

        }


        const fromSessionName =
            categoryFromName(
                sessionProduct?.name
            );


        if (fromSessionName) {

            return fromSessionName;

        }


        const urlCategory =
            normalizeCategory(
                url.category
            );


        if (urlCategory) {

            return urlCategory;

        }


        const sessionCategory =
            normalizeCategory(
                sessionProduct?.category
            );


        if (sessionCategory) {

            return sessionCategory;

        }


        return "fashion";

    }


    const categoryKey =
        resolveCategory();


    /* =========================================================
       EXTERNAL PRODUCT
    ========================================================== */

    function buildExternalProduct(raw) {

        const source =
            raw || {};


        const price =
            Number(
                url.price ??
                source.price ??
                0
            );


        const mrp =
            Number(
                url.mrp ??
                source.mrp ??
                price
            );


        const image =
            url.image ||
            source.image ||
            source.images?.[0] ||
            "https://placehold.co/800x800/f3f3f3/132438?text=OZZO";


        const name =
            url.name ||
            source.name ||
            "OZZO Product";


        let category = "Fashion";


        if (
            categoryKey === "books"
        ) {

            category = "Books";

        }

        else if (
            categoryKey === "stationery"
        ) {

            category = "Stationery";

        }

        else if (
            categoryKey === "pads"
        ) {

            category = "Pads";

        }


        let brand =
            source.brand;


        if (!brand) {

            if (
                categoryKey === "books"
            ) {

                brand = "OZZO Books";

            }

            else if (
                categoryKey === "stationery"
            ) {

                brand = "OZZO Stationery";

            }

            else if (
                categoryKey === "pads"
            ) {

                brand = "OZZO Care";

            }

            else {

                brand = "OZZO Fashion";

            }

        }


        return {

            id:
                url.id ||
                source.id ||
                `${categoryKey}-${name
                    .toLowerCase()
                    .replace(
                        /[^a-z0-9]+/g,
                        "-"
                    )
                    .replace(
                        /^-|-$/g,
                        ""
                    )}`,

            category,

            categoryKey,

            subcategory:
                url.subcategory ||
                source.subcategory ||
                category,

            name,

            brand,

            price,

            mrp,

            rating:
                Number(
                    Number(
                        url.rating ??
                        source.rating ??
                        5
                    ).toFixed(1)
                ),

            reviews:
                Number(
                    url.reviews ??
                    source.reviews ??
                    0
                ),

            bought:
                source.bought ||
                `${Math.max(
                    80,
                    Number(
                        url.reviews ??
                        source.reviews ??
                        0
                    ) * 2
                )}+ bought in past month`,

            images: [
                image
            ],

            description:
                Array.isArray(
                    source.description
                )
                    ? source.description
                    : [

                        `${name} from the OZZO ${category.toLowerCase()} collection.`,

                        "Designed for everyday use with practical details.",

                        `Part of the ${String(
                            url.subcategory ||
                            source.subcategory ||
                            category
                        ).toLowerCase()} range.`,

                        "Selected for a dependable everyday experience."

                    ]

        };

    }


    /* =========================================================
       FIND CURRENT PRODUCT
    ========================================================== */

    let product = null;


    if (
        categoryKey !== "fashion"
    ) {

        const catalog =
            catalogs[categoryKey] || [];


        const catalogProduct =
            catalog.find(
                item =>
                    item.id === url.id
            ) ||
            catalog.find(
                item =>
                    item.name.toLowerCase() ===
                    url.name.toLowerCase()
            );


        /*
         * Use session product when it belongs
         * to the same category.
         */

        if (
            sessionProduct &&
            categoryFromId(sessionProduct.id) ===
                categoryKey &&
            (
                !url.id ||
                sessionProduct.id === url.id
            )
        ) {

            product =
                buildExternalProduct(
                    sessionProduct
                );

        }

        else if (
            catalogProduct
        ) {

            product =
                buildExternalProduct(
                    catalogProduct
                );

        }

        else {

            /*
             * Allows manually supplied URL
             * product information.
             */

            product =
                buildExternalProduct({

                    category:
                        categoryKey,

                    id:
                        url.id,

                    name:
                        url.name,

                    price:
                        url.price,

                    mrp:
                        url.mrp,

                    image:
                        url.image,

                    subcategory:
                        url.subcategory,

                    rating:
                        url.rating,

                    reviews:
                        url.reviews

                });

        }

    }

    else {

        /*
         * Fashion uses the generated database.
         */

        product =
            products[url.id] ||
            Object.values(products).find(
                item =>
                    item.name.toLowerCase() ===
                    url.name.toLowerCase()
            ) ||
            null;


        if (
            product &&
            url.image
        ) {

            product.images = [
                url.image
            ];

        }


        if (
            product &&
            url.price !== null
        ) {

            product.price =
                Number(
                    url.price
                );

        }


        if (
            product &&
            url.mrp !== null
        ) {

            product.mrp =
                Number(
                    url.mrp
                );

        }

    }


    /* =========================================================
       SAFETY — FORCE CATEGORY FROM ID
    ========================================================== */

    if (
        product
    ) {

        const forcedCategory =
            categoryFromId(
                product.id
            );


        if (
            forcedCategory
        ) {

            product.categoryKey =
                forcedCategory;


            if (
                forcedCategory === "books"
            ) {

                product.category =
                    "Books";

            }

            else if (
                forcedCategory === "stationery"
            ) {

                product.category =
                    "Stationery";

            }

            else if (
                forcedCategory === "pads"
            ) {

                product.category =
                    "Pads";

            }

        }

    }


    /* =========================================================
       PRODUCT NOT FOUND
    ========================================================== */

    if (
        !product
    ) {

        const detailsSection =
            qs(
                ".product-details-section"
            );


        if (
            detailsSection
        ) {

            detailsSection.innerHTML = `

                <div class="container py-5 text-center">

                    <h2>
                        Product not found
                    </h2>

                    <p>
                        The product you are looking for is unavailable.
                    </p>

                    <a
                        href="index.html"
                        class="btn btn-dark mt-3"
                    >
                        Back to OZZO
                    </a>

                </div>

            `;

        }


        return;

    }


    /* =========================================================
       BASIC PRODUCT DETAILS
    ========================================================== */

    document.title =
        `${product.name} | OZZO`;


    if (
        $("storeName")
    ) {

        $("storeName").textContent =
            product.brand;

    }


    if (
        $("productName")
    ) {

        $("productName").textContent =
            product.name;

    }


    if (
        $("productRating")
    ) {

        $("productRating").textContent =
            product.rating;

    }


    if (
        $("reviewCount")
    ) {

        $("reviewCount").textContent =
            `${product.reviews} ratings`;

    }


    if (
        $("boughtCount")
    ) {

        $("boughtCount").textContent =
            product.bought;

    }


    if (
        $("productPrice")
    ) {

        $("productPrice").textContent =
            Number(
                product.price
            ).toLocaleString(
                "en-IN"
            );

    }


    if (
        $("buyPrice")
    ) {

        $("buyPrice").textContent =
            Number(
                product.price
            ).toLocaleString(
                "en-IN"
            );

    }


    if (
        $("productMrp")
    ) {

        $("productMrp").textContent =
            `₹${Number(
                product.mrp
            ).toLocaleString(
                "en-IN"
            )}`;

    }


    if (
        $("discount")
    ) {

        const discount =
            product.mrp >
            product.price

                ? Math.round(
                    (
                        (
                            product.mrp -
                            product.price
                        ) /
                        product.mrp
                    ) * 100
                )

                : 0;


        $("discount").textContent =
            `-${discount}%`;

    }


    /* =========================================================
       BREADCRUMB
    ========================================================== */

    if (
        $("breadcrumbCategory")
    ) {

        $("breadcrumbCategory").textContent =
            product.category;


        if (
            product.categoryKey ===
            "books"
        ) {

            $("breadcrumbCategory").href =
                "Books/Books.html";

        }

        else if (
            product.categoryKey ===
            "stationery"
        ) {

            $("breadcrumbCategory").href =
                "Stationary/Stationary.html";

        }

        else if (
            product.categoryKey ===
            "pads"
        ) {

            $("breadcrumbCategory").href =
                "Pads/Pads.html";

        }

        else {

            $("breadcrumbCategory").href =
                "Fashion/Fashion.html";

        }

    }


    if (
        $("breadcrumbProduct")
    ) {

        $("breadcrumbProduct").textContent =
            product.name;

    }


    /* =========================================================
       DESCRIPTION
    ========================================================== */

    const description =
        $("productDescription");


    if (
        description
    ) {

        description.innerHTML = "";


        (
            product.description ||
            []
        ).forEach(
            text => {

                const li =
                    document.createElement(
                        "li"
                    );


                li.textContent =
                    text;


                description.appendChild(
                    li
                );

            }
        );

    }


    /* =========================================================
       IMAGE FALLBACK
    ========================================================== */

    function setupImageFallback(
        img
    ) {

        if (
            !img
        ) {

            return;

        }


        img.addEventListener(
            "error",
            function () {

                this.onerror =
                    null;


                this.src =
                    "https://placehold.co/800x800/f3f3f3/132438?text=OZZO";

            }
        );

    }


    /* =========================================================
       MAIN IMAGE
    ========================================================== */

    const mainImage =
        $("mainProductImage");


    if (
        mainImage
    ) {

        mainImage.src =
            product.images[0];


        mainImage.alt =
            product.name;


        setupImageFallback(
            mainImage
        );

    }


    /* =========================================================
       THUMBNAILS
    ========================================================== */

    const thumbnailList =
        $("thumbnailList");


    if (
        thumbnailList
    ) {

        thumbnailList.innerHTML =
            "";


        product.images.forEach(
            (
                image,
                index
            ) => {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    index === 0
                        ? "thumbnail active"
                        : "thumbnail";


                button.setAttribute(
                    "aria-label",
                    `View ${product.name} image ${index + 1}`
                );


                const img =
                    document.createElement(
                        "img"
                    );


                img.src =
                    image;


                img.alt =
                    product.name;


                setupImageFallback(
                    img
                );


                button.appendChild(
                    img
                );


                button.addEventListener(
                    "click",
                    () => {

                        if (
                            mainImage
                        ) {

                            mainImage.src =
                                image;

                        }


                        qsa(
                            ".thumbnail"
                        ).forEach(
                            thumbnail => {

                                thumbnail.classList.remove(
                                    "active"
                                );

                            }
                        );


                        button.classList.add(
                            "active"
                        );

                    }
                );


                thumbnailList.appendChild(
                    button
                );

            }
        );

    }


    /* =========================================================
       WISHLIST
    ========================================================== */

    const wishlistButton =
        qs(
            ".image-action"
        );


    if (
        wishlistButton
    ) {

        wishlistButton.addEventListener(
            "click",
            () => {

                wishlistButton.classList.toggle(
                    "active"
                );


                const icon =
                    wishlistButton.querySelector(
                        "i"
                    );


                if (
                    icon
                ) {

                    const active =
                        wishlistButton.classList.contains(
                            "active"
                        );


                    icon.classList.toggle(
                        "fa-solid",
                        active
                    );


                    icon.classList.toggle(
                        "fa-regular",
                        !active
                    );

                }

            }
        );

    }


    /* =========================================================
       FASHION SIZE SUPPORT
    ========================================================== */

    const sizeSupported =
        new Set([

            "Shirts",

            "Pants",

            "Readymade Shirts",

            "Readymade Pants",

            "T-Shirts",

            "Shorts",

            "Track Pants",

            "Tops",

            "Dresses"

        ]);


    let selectedSize = "";


    const quantitySelect =
        $("quantity");


    if (
        product.categoryKey ===
        "fashion" &&
        sizeSupported.has(
            product.subcategory
        ) &&
        quantitySelect &&
        !$("productSizeWrapper")
    ) {

        const wrapper =
            document.createElement(
                "div"
            );


        wrapper.id =
            "productSizeWrapper";


        wrapper.className =
            "product-size-wrapper";


        wrapper.innerHTML = `

            <label class="size-label">
                Select Size
            </label>

            <div class="size-options">

                ${[
                    "S",
                    "M",
                    "L",
                    "XL"
                ]
                .map(
                    size => `

                    <label class="size-option">

                        <input
                            type="radio"
                            name="productSize"
                            value="${size}"
                        >

                        <span>
                            ${size}
                        </span>

                    </label>

                `
                )
                .join("")}

            </div>

        `;


        quantitySelect.parentNode.insertBefore(
            wrapper,
            quantitySelect
        );


        qsa(
            'input[name="productSize"]'
        ).forEach(
            radio => {

                radio.addEventListener(
                    "change",
                    () => {

                        selectedSize =
                            radio.value;

                    }
                );

            }
        );

    }


    /* =========================================================
       QUANTITY
    ========================================================== */

    function getQuantity() {

        return Math.max(
            1,
            Number(
                quantitySelect?.value ||
                1
            )
        );

    }


    /* =========================================================
       CART
    ========================================================== */

    function readCart() {

        try {

            const stored =
                JSON.parse(
                    localStorage.getItem(
                        "ozzoCart"
                    )
                );


            return Array.isArray(
                stored
            )
                ? stored
                : [];

        } catch (error) {

            return [];

        }

    }


    let cart =
        readCart();


    function getCartCount() {

        return cart.reduce(
            (
                total,
                item
            ) => {

                return (
                    total +
                    Number(
                        item.quantity ||
                        0
                    )
                );

            },
            0
        );

    }


    function saveCart() {

        try {

            localStorage.setItem(
                "ozzoCart",
                JSON.stringify(
                    cart
                )
            );

        } catch (error) {

            console.error(
                "Unable to save OZZO cart:",
                error
            );

        }


        updateCartCount();

    }


    function updateCartCount() {

        const element =
            $("cartCount");


        if (
            element
        ) {

            element.textContent =
                getCartCount();

        }

    }


    /* =========================================================
       ADD PRODUCT TO CART
    ========================================================== */

    function addProductToCart(
        quantity
    ) {

        const qty =
            Math.max(
                1,
                Number(
                    quantity
                ) || 1
            );


        const isFashionSize =
            product.categoryKey ===
                "fashion" &&
            sizeSupported.has(
                product.subcategory
            );


        const size =
            isFashionSize
                ? selectedSize
                : "";


        const existing =
            cart.find(
                item =>

                    item.id ===
                    product.id &&

                    (
                        item.size ||
                        ""
                    ) === size
            );


        if (
            existing
        ) {

            existing.quantity =
                Number(
                    existing.quantity ||
                    0
                ) +
                qty;


            existing.name =
                product.name;


            existing.price =
                product.price;


            existing.mrp =
                product.mrp;


            existing.image =
                product.images[0];


            existing.category =
                product.category;


            existing.subcategory =
                product.subcategory;


        } else {

            cart.push({

                id:
                    product.id,

                name:
                    product.name,

                price:
                    Number(
                        product.price
                    ),

                mrp:
                    Number(
                        product.mrp
                    ),

                image:
                    product.images[0],

                category:
                    product.category,

                subcategory:
                    product.subcategory,

                quantity:
                    qty,

                size:
                    size

            });

        }


        saveCart();

    }


    /* =========================================================
       INITIAL CART COUNT
    ========================================================== */

    updateCartCount();


    /* =========================================================
       HEADER CART
    ========================================================== */

    const navCart =
        qs(
            ".nav-cart"
        );


    if (
        navCart
    ) {

        navCart.addEventListener(
            "click",
            event => {

                event.preventDefault();

                window.location.href =
                    "Cart/Cart.html";

            }
        );

    }


    const headerCartButton =
        $("headerCartButton");


    if (
        headerCartButton
    ) {

        headerCartButton.addEventListener(
            "click",
            () => {

                window.location.href =
                    "Cart/Cart.html";

            }
        );

    }


    /* =========================================================
       ADD TO CART BUTTON
    ========================================================== */

    const addToCartButton =
        $("addToCartBtn");


    if (
        addToCartButton
    ) {

        addToCartButton.addEventListener(
            "click",
            () => {

                const isFashionSize =
                    product.categoryKey ===
                        "fashion" &&
                    sizeSupported.has(
                        product.subcategory
                    );


                if (
                    isFashionSize &&
                    !selectedSize
                ) {

                    alert(
                        "Please select a size."
                    );


                    return;

                }


                addProductToCart(
                    getQuantity()
                );


                const originalText =
                    addToCartButton.textContent;


                addToCartButton.textContent =
                    "Added to cart ✓";


                addToCartButton.classList.add(
                    "added"
                );


                setTimeout(
                    () => {

                        addToCartButton.textContent =
                            originalText;


                        addToCartButton.classList.remove(
                            "added"
                        );

                    },
                    1200
                );

            }
        );

    }


    /* =========================================================
       BUY NOW
    ========================================================== */

    const buyNowButton =
        $("buyNowBtn");


    if (
        buyNowButton
    ) {

        buyNowButton.addEventListener(
            "click",
            () => {

                const isFashionSize =
                    product.categoryKey ===
                        "fashion" &&
                    sizeSupported.has(
                        product.subcategory
                    );


                if (
                    isFashionSize &&
                    !selectedSize
                ) {

                    alert(
                        "Please select a size."
                    );


                    return;

                }


                addProductToCart(
                    getQuantity()
                );


                window.location.href =
                    "Cart/Cart.html";

            }
        );

    }


    /* =========================================================
       RELATED PRODUCTS
       IMPORTANT:
       SAME CATEGORY ONLY
    ========================================================== */

    const relatedContainer =
        $("relatedProducts");


    if (
        relatedContainer
    ) {

        relatedContainer.innerHTML =
            "";


        const currentCategory =
            product.categoryKey ||
            normalizeCategory(
                product.category
            );


        let relatedProducts = [];


        /* -----------------------------------------------------
           FASHION
        ----------------------------------------------------- */

        if (
            currentCategory ===
            "fashion"
        ) {

            relatedProducts =
                Object.values(
                    products
                )
                .filter(
                    item =>
                        item.id !==
                        product.id
                )
                .slice(
                    0,
                    4
                );

        }


        /* -----------------------------------------------------
           BOOKS
        ----------------------------------------------------- */

        else if (
            currentCategory ===
            "books"
        ) {

            relatedProducts =
                books
                .filter(
                    item =>
                        item.id !==
                        product.id
                )
                .slice(
                    0,
                    4
                );

        }


        /* -----------------------------------------------------
           STATIONERY
        ----------------------------------------------------- */

        else if (
            currentCategory ===
            "stationery"
        ) {

            relatedProducts =
                stationery
                .filter(
                    item =>
                        item.id !==
                        product.id
                )
                .slice(
                    0,
                    4
                );

        }


        /* -----------------------------------------------------
           PADS
        ----------------------------------------------------- */

        else if (
            currentCategory ===
            "pads"
        ) {

            relatedProducts =
                pads
                .filter(
                    item =>
                        item.id !==
                        product.id
                )
                .slice(
                    0,
                    4
                );

        }


        /* -----------------------------------------------------
           RENDER RELATED PRODUCTS
        ----------------------------------------------------- */

        relatedProducts.forEach(
            item => {

                const image =
                    item.image ||
                    item.images?.[0] ||
                    "https://placehold.co/800x800/f3f3f3/132438?text=OZZO";


                const card =
                    document.createElement(
                        "article"
                    );


                card.className =
                    "related-card";


                card.innerHTML = `

                    <a
                        href="#"
                        class="related-product-link"
                    >

                        <div class="related-image">

                            <img
                                src="${image}"
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

                                    ₹${Number(
                                        item.price
                                    ).toLocaleString(
                                        "en-IN"
                                    )}

                                </span>


                                <del class="related-old-price">

                                    ₹${Number(
                                        item.mrp
                                    ).toLocaleString(
                                        "en-IN"
                                    )}

                                </del>

                            </div>

                        </div>

                    </a>

                `;


                setupImageFallback(
                    card.querySelector(
                        "img"
                    )
                );


                const link =
                    card.querySelector(
                        ".related-product-link"
                    );


                link.addEventListener(
                    "click",
                    event => {

                        event.preventDefault();


                        const selected = {

                            id:
                                item.id,

                            name:
                                item.name,

                            price:
                                Number(
                                    item.price
                                ),

                            mrp:
                                Number(
                                    item.mrp ||
                                    item.price
                                ),

                            image:
                                image,

                            images:
                                [
                                    image
                                ],

                            category:
                                item.category,

                            categoryKey:
                                currentCategory,

                            subcategory:
                                item.subcategory ||
                                currentCategory,

                            brand:
                                item.brand ||
                                "OZZO",

                            rating:
                                Number(
                                    item.rating ||
                                    5
                                ),

                            reviews:
                                Number(
                                    item.reviews ||
                                    0
                                ),

                            bought:
                                item.bought ||
                                "80+ bought in past month",

                            description:
                                item.description ||
                                [

                                    `${item.name} from the OZZO ${String(
                                        item.category
                                    ).toLowerCase()} collection.`,

                                    "Selected for everyday use and practical value.",

                                    `Part of the ${String(
                                        item.subcategory ||
                                        currentCategory
                                    ).toLowerCase()} range.`,

                                    "Designed for a dependable everyday experience."

                                ]

                        };


                        try {

                            sessionStorage.setItem(
                                "ozzoSelectedProduct",
                                JSON.stringify(
                                    selected
                                )
                            );

                        } catch (error) {

                            console.error(
                                "Unable to save selected product:",
                                error
                            );

                        }


                        const detailParams =
                            new URLSearchParams({

                                id:
                                    selected.id,

                                name:
                                    selected.name,

                                price:
                                    String(
                                        selected.price
                                    ),

                                mrp:
                                    String(
                                        selected.mrp
                                    ),

                                image:
                                    selected.image,

                                category:
                                    selected.category,

                                subcategory:
                                    selected.subcategory,

                                rating:
                                    String(
                                        selected.rating
                                    ),

                                reviews:
                                    String(
                                        selected.reviews
                                    )

                            });


                        window.location.href =
                            `ProductDetails.html?${detailParams.toString()}`;

                    }
                );


                relatedContainer.appendChild(
                    card
                );

            }
        );


        /* -----------------------------------------------------
           EMPTY RELATED PRODUCTS
        ----------------------------------------------------- */

        if (
            !relatedProducts.length
        ) {

            relatedContainer.innerHTML = `

                <div class="related-empty">

                    No related products available
                    in this category.

                </div>

            `;

        }

    }


    /* =========================================================
       NEWSLETTER
    ========================================================== */

    const newsletterForm =
        $("newsletterForm");


    const newsletterMessage =
        $("newsletterMessage");


    if (
        newsletterForm
    ) {

        newsletterForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                if (
                    newsletterMessage
                ) {

                    newsletterMessage.textContent =
                        "Thank you for subscribing!";

                }


                newsletterForm.reset();

            }
        );

    }


    /* =========================================================
       STORAGE SYNC
    ========================================================== */

    window.addEventListener(
        "storage",
        event => {

            if (
                event.key ===
                "ozzoCart"
            ) {

                cart =
                    readCart();


                updateCartCount();

            }

        }
    );


    /* =========================================================
       DEBUG
    ========================================================== */

    console.log(
        "OZZO ProductDetails loaded:",
        {
            id:
                product.id,

            name:
                product.name,

            category:
                product.category,

            categoryKey:
                product.categoryKey

        }
    );

});
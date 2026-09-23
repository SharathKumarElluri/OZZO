document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       OZZO PRODUCT DETAILS
       COMPLETE FASHION PRODUCT DATABASE

       001–014  EXISTING
       015–054  WOMEN'S SAREES
       055–064  WOMEN'S TOPS
       065–074  WOMEN'S DRESSES
       075–149  MEN'S WEAR
       150–249  INNER WEARS
       250–259  BOYS DRESSES
       260–269  GIRLS DRESSES

       IMPORTANT:
       - Fashion.html is the SOURCE OF TRUTH for clicked image
       - Exact clicked image is read from sessionStorage
       - URL image is used as secondary fallback
       - Database image is final fallback
       - Same exact image is used in Product Details + Cart
    ========================================================== */


    /* =========================================================
       PRODUCT DATABASE
    ========================================================== */

    const products = {};


    /* =========================================================
       PRODUCT HELPER
    ========================================================== */

    function addProduct(
        id,
        category,
        subcategory,
        name,
        brand,
        price,
        mrp,
        rating,
        reviews,
        bought,
        image,
        description
    ) {

        products[id] = {

            id: id,

            category: category,

            subcategory: subcategory,

            name: name,

            brand: brand,

            price: Number(price),

            mrp: Number(mrp),

            rating: Number(rating),

            reviews: Number(reviews),

            bought: bought,

            /*
             * Keep the database image as fallback.
             * It will be replaced by the exact image
             * sent from Fashion.html when available.
             */
            images: [
                image
            ],

            description: description

        };

    }


    /* =========================================================
       COMMON IMAGES
    ========================================================== */

    const womenSareeImage =
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=85";


    const womenSareeImage2 =
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=900&q=85";


    const womenFashionImage =
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=85";


    const womenDressImage =
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=85";


    const menImage =
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=85";


    const innerWomenImage =
        "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&w=900&q=85";


    const innerMenImage =
        "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=85";


    const kidsImages = [

        "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1604917019110-4f3b4c0f1c50?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=900&q=85",

        "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=85"

    ];


    /* =========================================================
       EXISTING 001–014
    ========================================================== */

    addProduct(
        "fashion-001",
        "Women's Wear",
        "Dresses",
        "Classic Beige Dress",
        "OZZO Fashion",
        1299,
        1799,
        4.4,
        86,
        "100+ bought in past month",
        "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=85",
        [
            "Elegant beige dress designed for everyday styling.",
            "Soft and comfortable fabric for extended wear.",
            "Clean modern silhouette with a premium finish.",
            "Suitable for casual outings, weekends and day events."
        ]
    );


    addProduct(
        "fashion-002",
        "Men's Wear",
        "Shirts",
        "Classic Casual Shirt",
        "OZZO Fashion",
        999,
        1399,
        4.5,
        72,
        "200+ bought in past month",
        menImage,
        [
            "Classic casual shirt designed for everyday comfort.",
            "Comfortable fabric with a clean modern look.",
            "Easy to pair with jeans, chinos or trousers.",
            "Suitable for casual and smart-casual occasions."
        ]
    );


    addProduct(
        "fashion-003",
        "Women's Wear",
        "Tops",
        "Oversized Cotton Top",
        "OZZO Fashion",
        799,
        1099,
        4.3,
        64,
        "100+ bought in past month",
        "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=900&q=85",
        [
            "Relaxed oversized fit for everyday styling.",
            "Soft cotton fabric with breathable comfort.",
            "Easy to combine with jeans, skirts and trousers.",
            "Designed for a simple contemporary wardrobe."
        ]
    );


    addProduct(
        "fashion-004",
        "Men's Wear",
        "T-Shirts",
        "Premium Polo T-Shirt",
        "OZZO Fashion",
        899,
        1299,
        4.6,
        91,
        "300+ bought in past month",
        "hoddie.jpg",
        [
            "Premium everyday polo-inspired style.",
            "Comfortable fabric suitable for all-day wear.",
            "Clean fit with a versatile contemporary design.",
            "Suitable for casual and semi-casual occasions."
        ]
    );


    addProduct(
        "fashion-005",
        "Kids Wear",
        "Kids Wear",
        "Kids Summer Outfit",
        "OZZO Kids",
        699,
        999,
        4.5,
        16,
        "100+ bought in past month",
        kidsImages[0],
        [
            "Comfortable summer outfit designed for active kids.",
            "Soft fabric suitable for everyday wear.",
            "Lightweight design for warm-weather comfort.",
            "Great for casual outings and family occasions."
        ]
    );


    addProduct(
        "fashion-006",
        "Women's Wear",
        "Shirts",
        "Olive Green Shirt",
        "OZZO Fashion",
        1099,
        1499,
        4.4,
        21,
        "100+ bought in past month",
        "women shirt.jpg",
        [
            "Smart olive green shirt with a modern silhouette.",
            "Comfortable material for regular everyday use.",
            "Versatile color that pairs easily with multiple outfits.",
            "Suitable for casual and smart-casual styling."
        ]
    );


    addProduct(
        "fashion-007",
        "Women's Wear",
        "Sarees",
        "Elegant Rose Silk Saree",
        "OZZO Sarees",
        1499,
        1999,
        4.6,
        58,
        "100+ bought in past month",
        womenSareeImage,
        [
            "Elegant rose-toned saree with a graceful traditional finish.",
            "Comfortable drape for extended wear.",
            "Suitable for festive celebrations and special occasions.",
            "Designed for classic styling with a modern touch."
        ]
    );


    addProduct(
        "fashion-008",
        "Women's Wear",
        "Sarees",
        "Classic Green Saree",
        "OZZO Sarees",
        1699,
        2199,
        4.5,
        47,
        "80+ bought in past month",
        "saree2.jpg",
        [
            "Classic green saree with elegant styling.",
            "Comfortable fabric with a graceful drape.",
            "Suitable for festive and traditional occasions.",
            "Designed to create a refined ethnic look."
        ]
    );


    addProduct(
        "fashion-009",
        "Women's Wear",
        "Sarees",
        "Pastel Organza Saree",
        "OZZO Sarees",
        1899,
        2499,
        4.5,
        19,
        "70+ bought in past month",
        "blue saree.jpg",
        [
            "Light pastel organza saree with an elegant finish.",
            "Graceful lightweight drape.",
            "Ideal for festive gatherings and special events.",
            "A refined choice for modern ethnic styling."
        ]
    );


    addProduct(
        "fashion-010",
        "Women's Wear",
        "Sarees",
        "Royal Blue Saree",
        "OZZO Sarees",
        1599,
        2099,
        4.6,
        42,
        "100+ bought in past month",
        "saree2.jpg",
        [
            "Rich royal blue saree with an elegant traditional look.",
            "Comfortable fabric with a smooth drape.",
            "Suitable for festivals, celebrations and occasions.",
            "A versatile addition to an ethnic wardrobe."
        ]
    );


    addProduct(
        "fashion-011",
        "Inner Wears",
        "Bra",
        "Comfort Cotton Bra",
        "OZZO Essentials",
        599,
        799,
        4.4,
        27,
        "100+ bought in past month",
        innerWomenImage,
        [
            "Comfort-focused everyday innerwear design.",
            "Soft fabric for comfortable daily use.",
            "Designed for a secure and supportive fit.",
            "Suitable for everyday wear."
        ]
    );


    addProduct(
        "fashion-012",
        "Inner Wears",
        "Briefs",
        "Men Cotton Briefs",
        "OZZO Essentials",
        499,
        699,
        4.3,
        23,
        "100+ bought in past month",
        innerMenImage,
        [
            "Comfortable cotton innerwear for everyday use.",
            "Soft-touch fabric with breathable construction.",
            "Designed for comfortable movement throughout the day.",
            "Simple and practical everyday styling."
        ]
    );


    addProduct(
        "fashion-013",
        "Kids Wear",
        "Girls Dresses",
        "Baby Girl Party Dress",
        "OZZO Kids",
        899,
        1199,
        4.5,
        14,
        "70+ bought in past month",
        kidsImages[1],
        [
            "Cute party dress designed for special occasions.",
            "Comfortable material suitable for children's wear.",
            "Stylish design with a charming finish.",
            "Ideal for parties, birthdays and family events."
        ]
    );


    addProduct(
        "fashion-014",
        "Kids Wear",
        "Boys Dresses",
        "Boys Casual Outfit",
        "OZZO Kids",
        749,
        999,
        4.4,
        17,
        "100+ bought in past month",
        kidsImages[0],
        [
            "Comfortable casual outfit for everyday activities.",
            "Soft fabric designed for active kids.",
            "Modern styling suitable for casual occasions.",
            "Easy-to-wear design for everyday comfort."
        ]
    );


    /* =========================================================
       WOMEN'S SAREES 015–054
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

        ...Array(10).fill(
            "Pattu Sarees"
        ),

        ...Array(10).fill(
            "Fancy Sarees"
        ),

        ...Array(10).fill(
            "Daily Wear Sarees"
        ),

        ...Array(10).fill(
            "Cotton Sarees"
        )

    ];


    womenSarees.forEach(
        function (
            name,
            index
        ) {

            const id =
                "fashion-" +
                String(
                    15 + index
                ).padStart(
                    3,
                    "0"
                );


            const price =
                1299 +
                (
                    (index % 10) *
                    100
                );


            const image =
                (
                    sareeGroups[index] ===
                    "Fancy Sarees" ||

                    sareeGroups[index] ===
                    "Cotton Sarees"
                )

                    ? womenSareeImage2

                    : womenSareeImage;


            addProduct(
                id,
                "Women's Wear",
                sareeGroups[index],
                name,
                "OZZO Sarees",
                price,
                price + 500,
                4.4 +
                (
                    (index % 4) *
                    0.1
                ),
                20 + index,
                (
                    70 +
                    (
                        (index % 6) *
                        10
                    )
                ) +
                "+ bought in past month",
                image,
                [
                    name +
                        " designed for elegant ethnic styling.",

                    "Comfortable fabric with a graceful drape.",

                    "Suitable for festivals, celebrations and special occasions.",

                    "Designed for a refined traditional wardrobe."
                ]
            );

        }
    );


    /* =========================================================
       WOMEN'S TOPS 055–064
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
        function (
            name,
            index
        ) {

            const id =
                "fashion-" +
                String(
                    55 + index
                ).padStart(
                    3,
                    "0"
                );


            const price =
                699 +
                (
                    index *
                    25
                );


            addProduct(
                id,
                "Women's Wear",
                "Tops",
                name,
                "OZZO Fashion",
                price,
                price + 300,
                4.3 +
                (
                    (index % 4) *
                    0.1
                ),
                20 + index,
                (
                    70 +
                    index * 5
                ) +
                "+ bought in past month",
                womenFashionImage,
                [
                    name +
                        " designed for everyday styling.",

                    "Comfortable fabric with a modern fit.",

                    "Easy to pair with jeans, trousers and skirts.",

                    "Suitable for casual and smart-casual occasions."
                ]
            );

        }
    );


    /* =========================================================
       WOMEN'S DRESSES 065–074
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
        function (
            name,
            index
        ) {

            const id =
                "fashion-" +
                String(
                    65 + index
                ).padStart(
                    3,
                    "0"
                );


            const price =
                1099 +
                (
                    index *
                    55
                );


            addProduct(
                id,
                "Women's Wear",
                "Dresses",
                name,
                "OZZO Fashion",
                price,
                price + 450,
                4.4 +
                (
                    (index % 4) *
                    0.1
                ),
                23 + index,
                (
                    75 +
                    index * 5
                ) +
                "+ bought in past month",
                womenDressImage,
                [
                    name +
                        " designed for modern styling.",

                    "Comfortable fabric with a polished silhouette.",

                    "Suitable for parties, outings and special occasions.",

                    "Easy to style for a contemporary wardrobe."
                ]
            );

        }
    );


    /* =========================================================
       MEN'S WEAR 075–149
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


    const menBasePrices = {

        "Shirts":
            999,

        "Pants":
            1099,

        "Readymade Shirts":
            899,

        "Readymade Pants":
            999,

        "T-Shirts":
            699,

        "Shorts":
            699,

        "Track Pants":
            899

    };


    let menId =
        75;


    Object.keys(
        menGroups
    )
    .forEach(
        function (
            subcategory
        ) {

            menGroups[
                subcategory
            ]
            .forEach(
                function (
                    name,
                    index
                ) {

                    const price =
                        menBasePrices[
                            subcategory
                        ] +
                        (
                            index *
                            35
                        );


                    const image =
                        subcategory ===
                        "T-Shirts"

                            ? "hoddie.jpg"

                            : menImage;


                    addProduct(
                        "fashion-" +
                        String(
                            menId
                        ).padStart(
                            3,
                            "0"
                        ),

                        "Men's Wear",

                        subcategory,

                        name,

                        "OZZO Fashion",

                        price,

                        price + 350,

                        4.3 +
                        (
                            (index % 4) *
                            0.1
                        ),

                        22 + index,

                        (
                            70 +
                            (
                                (index % 6) *
                                20
                            )
                        ) +
                        "+ bought in past month",

                        image,

                        [
                            name +
                                " designed for modern men's styling.",

                            "Comfortable fabric for regular everyday wear.",

                            "Clean silhouette with practical construction.",

                            "Suitable for casual, workwear and smart-casual occasions."
                        ]

                    );


                    menId++;

                }
            );

        }
    );


    /* =========================================================
       INNER WEARS 150–249
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

        "Women's Bras":
            549,

        "Women's Panties":
            349,

        "Women's Camisoles / Slips":
            399,

        "Women's Shapewear":
            699,

        "Women's Saree Petticoats":
            449,

        "Men's Briefs":
            399,

        "Men's Trunks":
            449,

        "Men's Vests":
            349,

        "Men's Inner T-Shirts":
            499,

        "Men's Boxers":
            449

    };


    let innerId =
        150;


    Object.keys(
        innerGroups
    )
    .forEach(
        function (
            subcategory
        ) {

            innerGroups[
                subcategory
            ]
            .forEach(
                function (
                    name,
                    index
                ) {

                    const price =
                        innerBasePrices[
                            subcategory
                        ] +
                        (
                            index *
                            20
                        );


                    const image =
                        subcategory.startsWith(
                            "Women's"
                        )

                            ? innerWomenImage

                            : innerMenImage;


                    addProduct(
                        "fashion-" +
                        String(
                            innerId
                        ).padStart(
                            3,
                            "0"
                        ),

                        "Inner Wears",

                        subcategory,

                        name,

                        "OZZO Essentials",

                        price,

                        price + 200,

                        4.2 +
                        (
                            (index % 5) *
                            0.1
                        ),

                        15 + index,

                        (
                            50 +
                            (
                                (index % 6) *
                                15
                            )
                        ) +
                        "+ bought in past month",

                        image,

                        [
                            name +
                                " designed for everyday comfort.",

                            "Soft and comfortable fabric for regular wear.",

                            "Practical construction with an easy fit.",

                            "Suitable for daily use."
                        ]

                    );


                    innerId++;

                }
            );

        }
    );


    /* =========================================================
       BOYS 250–259
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


    boysDresses.forEach(
        function (
            name,
            index
        ) {

            const price =
                749 +
                (
                    index *
                    50
                );


            addProduct(
                "fashion-" +
                String(
                    250 + index
                ).padStart(
                    3,
                    "0"
                ),

                "Kids Wear",

                "Boys Dresses",

                name,

                "OZZO Kids",

                price,

                price + 300,

                4.4 +
                (
                    (index % 3) *
                    0.1
                ),

                16 + index,

                (
                    70 +
                    (
                        (index % 5) *
                        10
                    )
                ) +
                "+ bought in past month",

                kidsImages[
                    index %
                    kidsImages.length
                ],

                [
                    "Comfortable boys' outfit designed for special occasions.",

                    "Soft material suitable for children's wear.",

                    "Modern styling with an easy fit.",

                    "Ideal for parties, festivals and family gatherings."
                ]

            );

        }
    );


    /* =========================================================
       GIRLS 260–269
    ========================================================== */

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


    girlsDresses.forEach(
        function (
            name,
            index
        ) {

            const price =
                849 +
                (
                    index *
                    50
                );


            addProduct(
                "fashion-" +
                String(
                    260 + index
                ).padStart(
                    3,
                    "0"
                ),

                "Kids Wear",

                "Girls Dresses",

                name,

                "OZZO Kids",

                price,

                price + 300,

                4.4 +
                (
                    (index % 3) *
                    0.1
                ),

                18 + index,

                (
                    70 +
                    (
                        (index % 5) *
                        10
                    )
                ) +
                "+ bought in past month",

                kidsImages[
                    (
                        index + 1
                    ) %
                    kidsImages.length
                ],

                [
                    "Beautiful girls' dress designed for celebrations.",

                    "Comfortable material suitable for children's wear.",

                    "Stylish finish with an easy-to-wear silhouette.",

                    "Ideal for birthdays, parties and family occasions."
                ]

            );

        }
    );


    /* =========================================================
       URL PARAMETERS
    ========================================================== */

    const urlParams =
        new URLSearchParams(
            window.location.search
        );


    const productId =
        urlParams.get(
            "id"
        );


    const requestedName =
        (
            urlParams.get(
                "name"
            ) ||
            ""
        )
        .trim()
        .toLowerCase();


    const urlPrice =
        urlParams.get(
            "price"
        );


    const urlMrp =
        urlParams.get(
            "mrp"
        );


    /*
     * OPTIONAL BACKUP IMAGE FROM URL
     *
     * Fashion.html can send:
     *
     * &image=https://...
     */

    const urlImage =
        urlParams.get(
            "image"
        );


    let product =
        null;


    /* =========================================================
       1. READ EXACT PRODUCT FROM FASHION PAGE
    ========================================================== */

    try {

        const storedProduct =
            sessionStorage.getItem(
                "ozzoSelectedProduct"
            );


        if (
            storedProduct
        ) {

            const parsedProduct =
                JSON.parse(
                    storedProduct
                );


            if (
                parsedProduct &&
                parsedProduct.id
            ) {

                /*
                 * Only accept the session product
                 * when it belongs to the requested
                 * product ID.
                 */

                if (
                    !productId ||
                    parsedProduct.id ===
                    productId
                ) {

                    product = {

                        id:
                            parsedProduct.id,

                        category:
                            parsedProduct.category ||
                            "",

                        subcategory:
                            parsedProduct.subcategory ||
                            "",

                        name:
                            parsedProduct.name ||
                            "",

                        brand:
                            parsedProduct.brand ||
                            "OZZO",

                        price:
                            Number(
                                parsedProduct.price ||
                                0
                            ),

                        mrp:
                            Number(
                                parsedProduct.mrp ||
                                0
                            ),

                        rating:
                            Number(
                                parsedProduct.rating ||
                                0
                            ),

                        reviews:
                            Number(
                                parsedProduct.reviews ||
                                0
                            ),

                        bought:
                            parsedProduct.bought ||
                            "Popular on OZZO",

                        images: [

                            parsedProduct.image ||
                            ""

                        ],

                        description:
                            parsedProduct.description ||
                            [

                                `${parsedProduct.name || "Product"} designed for everyday use.`,

                                "Comfortable construction for regular use.",

                                "Designed with a practical and modern OZZO style.",

                                "Suitable for everyday shopping needs."

                            ]

                    };

                }

            }

        }

    }
    catch (
        error
    ) {

        console.warn(
            "Unable to read selected product:",
            error
        );

    }


    /* =========================================================
       2. FIND PRODUCT BY NAME
    ========================================================== */

    if (
        !product &&
        requestedName
    ) {

        product =
            Object.values(
                products
            )
            .find(
                function (
                    item
                ) {

                    return (
                        item.name
                            .trim()
                            .toLowerCase() ===
                        requestedName
                    );

                }
            );

    }


    /* =========================================================
       3. FIND PRODUCT BY ID
    ========================================================== */

    if (
        !product &&
        productId
    ) {

        product =
            products[
                productId
            ];

    }


    /* =========================================================
       PRODUCT NOT FOUND
    ========================================================== */

    if (
        !product
    ) {

        const detailsSection =
            document.querySelector(
                ".product-details-section"
            );


        if (
            detailsSection
        ) {

            detailsSection.innerHTML = `

                <div
                    class="container py-5 text-center"
                >

                    <h2>
                        Product not found
                    </h2>

                    <p>
                        The product you are looking for
                        is unavailable.
                    </p>

                    <a
                        href="Fashion/Fashion.html"
                        class="btn btn-dark mt-3"
                    >
                        Back to Fashion
                    </a>

                </div>

            `;

        }


        return;

    }


    /* =========================================================
       EXACT PRICE SYNC
    ========================================================== */

    if (
        urlPrice !== null &&
        urlPrice !== "" &&
        Number.isFinite(
            Number(
                urlPrice
            )
        )
    ) {

        product.price =
            Number(
                urlPrice
            );

    }


    if (
        urlMrp !== null &&
        urlMrp !== "" &&
        Number.isFinite(
            Number(
                urlMrp
            )
        )
    ) {

        product.mrp =
            Number(
                urlMrp
            );

    }


    /* =========================================================
       EXACT IMAGE SYNC
    ========================================================== */

    /*
     * Priority:
     *
     * 1. Image saved from Fashion.html
     * 2. Image sent by URL
     * 3. Database image
     */

    const hasSessionImage =
        product.images &&
        product.images[0] &&
        product.images[0].trim() !== "";


    if (
        hasSessionImage
    ) {

        /*
         * Keep exact sessionStorage image.
         */

        try {

            product.images = [

                new URL(
                    product.images[0],
                    window.location.href
                ).href

            ];

        }
        catch (
            error
        ) {

            /* Keep original */

        }

    }
    else if (
        urlImage &&
        urlImage.trim() !== ""
    ) {

        try {

            product.images = [

                new URL(
                    urlImage,
                    window.location.href
                ).href

            ];

        }
        catch (
            error
        ) {

            product.images = [
                urlImage
            ];

        }

    }


    /* =========================================================
       FALLBACK IMAGE
    ========================================================== */

    function getSafeImage(
        image
    ) {

        if (
            image &&
            image.trim() !== ""
        ) {

            return image;

        }


        return (
            "https://placehold.co/900x900/eeeae4/132438" +
            "?text=" +
            encodeURIComponent(
                product.name
            )
        );

    }


    product.images[0] =
        getSafeImage(
            product.images[0]
        );


    /* =========================================================
       DEBUG
    ========================================================== */

    console.log(
        "======================================"
    );

    console.log(
        "OZZO PRODUCT DETAILS"
    );

    console.log(
        "Product ID:",
        product.id
    );

    console.log(
        "Product Name:",
        product.name
    );

    console.log(
        "Product Image:",
        product.images[0]
    );

    console.log(
        "======================================"
    );


    /* =========================================================
       HELPERS
    ========================================================== */

    function formatPrice(
        value
    ) {

        return Number(
            value || 0
        )
        .toLocaleString(
            "en-IN"
        );

    }


    function calculateDiscount(
        price,
        mrp
    ) {

        if (
            !mrp ||
            mrp <= price
        ) {

            return 0;

        }


        return Math.round(
            (
                (
                    mrp -
                    price
                ) /
                mrp
            ) *
            100
        );

    }


    function setText(
        id,
        value
    ) {

        const element =
            document.getElementById(
                id
            );


        if (
            element
        ) {

            element.textContent =
                value;

        }

    }


    function setupImageFallback(
        image,
        fallback
    ) {

        if (
            !image
        ) {

            return;

        }


        image.addEventListener(
            "error",
            function () {

                if (
                    this.dataset.failed ===
                    "true"
                ) {

                    return;

                }


                this.dataset.failed =
                    "true";


                if (
                    fallback
                ) {

                    this.src =
                        fallback;

                }
                else {

                    this.style.display =
                        "none";

                }

            }
        );

    }


    /* =========================================================
       PAGE TITLE
    ========================================================== */

    document.title =
        `${product.name} | OZZO`;


    /* =========================================================
       PRODUCT BASIC DETAILS
    ========================================================== */

    setText(
        "storeName",
        product.brand
    );


    setText(
        "productName",
        product.name
    );


    setText(
        "productRating",
        product.rating
    );


    setText(
        "reviewCount",
        `${product.reviews} ratings`
    );


    setText(
        "boughtCount",
        product.bought
    );


    /* =========================================================
       PRICE
    ========================================================== */

    setText(
        "productPrice",
        formatPrice(
            product.price
        )
    );


    setText(
        "productMrp",
        `₹${formatPrice(
            product.mrp
        )}`
    );


    setText(
        "buyPrice",
        formatPrice(
            product.price
        )
    );


    /* =========================================================
       BREADCRUMB
    ========================================================== */

    setText(
        "breadcrumbCategory",
        product.category
    );


    setText(
        "breadcrumbProduct",
        product.name
    );


    setText(
        "discount",
        `-${calculateDiscount(
            product.price,
            product.mrp
        )}%`
    );


    const breadcrumbCategory =
        document.getElementById(
            "breadcrumbCategory"
        );


    if (
        breadcrumbCategory
    ) {

        breadcrumbCategory.textContent =
            product.category;


        breadcrumbCategory.href =
            "Fashion/Fashion.html";

    }


    /* =========================================================
       DESCRIPTION
    ========================================================== */

    const description =
        document.getElementById(
            "productDescription"
        );


    if (
        description
    ) {

        description.innerHTML =
            "";


        (
            product.description ||
            []
        )
        .forEach(
            function (
                text
            ) {

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
       MAIN PRODUCT IMAGE
    ========================================================== */

    const mainImage =
        document.getElementById(
            "mainProductImage"
        );


    if (
        mainImage
    ) {

        mainImage.style.display =
            "block";


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
        document.getElementById(
            "thumbnailList"
        );


    if (
        thumbnailList
    ) {

        thumbnailList.innerHTML =
            "";


        product.images.forEach(
            function (
                image,
                index
            ) {

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


                const thumbnailImage =
                    document.createElement(
                        "img"
                    );


                thumbnailImage.src =
                    image;


                thumbnailImage.alt =
                    product.name;


                setupImageFallback(
                    thumbnailImage
                );


                button.appendChild(
                    thumbnailImage
                );


                button.addEventListener(
                    "click",
                    function () {

                        if (
                            mainImage
                        ) {

                            mainImage.style.display =
                                "block";


                            mainImage.src =
                                image;


                            mainImage.alt =
                                product.name;

                        }


                        thumbnailList
                            .querySelectorAll(
                                ".thumbnail"
                            )
                            .forEach(
                                function (
                                    item
                                ) {

                                    item.classList.remove(
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

    const imageAction =
        document.querySelector(
            ".image-action"
        );


    if (
        imageAction
    ) {

        imageAction.addEventListener(
            "click",
            function () {

                this.classList.toggle(
                    "active"
                );


                const icon =
                    this.querySelector(
                        "i"
                    );


                if (
                    !icon
                ) {

                    return;

                }


                const active =
                    this.classList.contains(
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
        );

    }


    /* =========================================================
       SIZE SUPPORT
    ========================================================== */

    const sizeEnabledSubcategories = [

        "Shirts",

        "Pants",

        "Readymade Shirts",

        "Readymade Pants",

        "T-Shirts",

        "Shorts",

        "Track Pants",

        "Tops",

        "Dresses"

    ];


    function productRequiresSize(
        currentProduct
    ) {

        if (
            !currentProduct
        ) {

            return false;

        }


        return sizeEnabledSubcategories
            .includes(
                currentProduct.subcategory
            );

    }


    let selectedSize =
        "";


    /* =========================================================
       QUANTITY
    ========================================================== */

    const quantitySelect =
        document.getElementById(
            "quantity"
        );


    /* =========================================================
       CREATE SIZE SELECTOR
    ========================================================== */

    if (
        productRequiresSize(
            product
        ) &&
        quantitySelect
    ) {

        let sizeWrapper =
            document.getElementById(
                "productSizeWrapper"
            );


        if (
            !sizeWrapper
        ) {

            sizeWrapper =
                document.createElement(
                    "div"
                );


            sizeWrapper.id =
                "productSizeWrapper";


            sizeWrapper.className =
                "product-size-wrapper";


            sizeWrapper.innerHTML = `

                <label
                    class="size-label"
                >
                    Select Size
                </label>


                <div
                    class="size-options"
                >

                    <label
                        class="size-option"
                    >

                        <input
                            type="radio"
                            name="productSize"
                            value="S"
                        >

                        <span>
                            S
                        </span>

                    </label>


                    <label
                        class="size-option"
                    >

                        <input
                            type="radio"
                            name="productSize"
                            value="M"
                        >

                        <span>
                            M
                        </span>

                    </label>


                    <label
                        class="size-option"
                    >

                        <input
                            type="radio"
                            name="productSize"
                            value="L"
                        >

                        <span>
                            L
                        </span>

                    </label>


                    <label
                        class="size-option"
                    >

                        <input
                            type="radio"
                            name="productSize"
                            value="XL"
                        >

                        <span>
                            XL
                        </span>

                    </label>

                </div>

            `;


            const quantityLabel =
                document.querySelector(
                    ".quantity-label"
                );


            if (
                quantityLabel
            ) {

                quantityLabel.parentNode.insertBefore(
                    sizeWrapper,
                    quantityLabel
                );

            }
            else {

                quantitySelect.parentNode.insertBefore(
                    sizeWrapper,
                    quantitySelect
                );

            }

        }


        document
            .querySelectorAll(
                'input[name="productSize"]'
            )
            .forEach(
                function (
                    radio
                ) {

                    radio.addEventListener(
                        "change",
                        function () {

                            selectedSize =
                                this.value;

                        }
                    );

                }
            );

    }


    /* =========================================================
       QUANTITY PRICE
    ========================================================== */

    const buyPriceElement =
        document.getElementById(
            "buyPrice"
        );


    const productPriceElement =
        document.getElementById(
            "productPrice"
        );


    let quantityTotalElement =
        document.getElementById(
            "quantityTotal"
        );


    if (
        quantitySelect &&
        !quantityTotalElement
    ) {

        quantityTotalElement =
            document.createElement(
                "div"
            );


        quantityTotalElement.id =
            "quantityTotal";


        quantityTotalElement.className =
            "quantity-total";


        quantitySelect.parentNode.insertBefore(
            quantityTotalElement,
            quantitySelect.nextSibling
        );

    }


    function getCurrentQuantity() {

        if (
            !quantitySelect
        ) {

            return 1;

        }


        const value =
            Number(
                quantitySelect.value
            );


        return Math.max(
            1,
            value || 1
        );

    }


    function updateQuantityPrice() {

        const quantity =
            getCurrentQuantity();


        const totalPrice =
            Number(
                product.price
            ) *
            quantity;


        if (
            productPriceElement
        ) {

            productPriceElement.textContent =
                formatPrice(
                    product.price
                );

        }


        if (
            buyPriceElement
        ) {

            buyPriceElement.textContent =
                formatPrice(
                    totalPrice
                );

        }


        if (
            quantityTotalElement
        ) {

            if (
                quantity > 1
            ) {

                quantityTotalElement.style.display =
                    "block";


                quantityTotalElement.innerHTML = `

                    ${quantity}
                    items ×
                    ₹${formatPrice(
                        product.price
                    )}

                    =

                    <strong>
                        ₹${formatPrice(
                            totalPrice
                        )}
                    </strong>

                `;

            }
            else {

                quantityTotalElement.style.display =
                    "none";


                quantityTotalElement.innerHTML =
                    "";

            }

        }

    }


    if (
        quantitySelect
    ) {

        quantitySelect.addEventListener(
            "change",
            updateQuantityPrice
        );


        quantitySelect.addEventListener(
            "input",
            updateQuantityPrice
        );

    }


    updateQuantityPrice();


    /* =========================================================
       CART
    ========================================================== */

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    let cart =
        [];


    try {

        cart =
            JSON.parse(
                localStorage.getItem(
                    "ozzoCart"
                )
            ) || [];


        if (
            !Array.isArray(
                cart
            )
        ) {

            cart = [];

        }

    }
    catch (
        error
    ) {

        cart = [];

    }


    function updateCartCount() {

        if (
            !cartCount
        ) {

            return;

        }


        const total =
            cart.reduce(
                function (
                    sum,
                    item
                ) {

                    return (
                        sum +
                        Number(
                            item.quantity ||
                            0
                        )
                    );

                },
                0
            );


        cartCount.textContent =
            total;

    }


    function saveCart() {

        try {

            localStorage.setItem(
                "ozzoCart",
                JSON.stringify(
                    cart
                )
            );

        }
        catch (
            error
        ) {

            console.error(
                "Unable to save cart:",
                error
            );

        }


        updateCartCount();

    }


    /* =========================================================
       ADD PRODUCT TO CART
    ========================================================== */

    function addProductToCart(
        quantity,
        size
    ) {

        const numericQuantity =
            Math.max(
                1,
                Number(
                    quantity
                ) || 1
            );


        const finalSize =
            productRequiresSize(
                product
            )

                ? (
                    size ||
                    selectedSize ||
                    ""
                )

                : "";


        const existing =
            cart.find(
                function (
                    item
                ) {

                    return (

                        item.id ===
                        product.id &&

                        (
                            item.size ||
                            ""
                        ) ===
                        finalSize

                    );

                }
            );


        if (
            existing
        ) {

            existing.quantity =
                Number(
                    existing.quantity ||
                    0
                ) +
                numericQuantity;


            existing.name =
                product.name;


            existing.price =
                Number(
                    product.price
                );


            existing.mrp =
                Number(
                    product.mrp
                );


            existing.image =
                product.images[0];


            existing.category =
                product.category;


            existing.subcategory =
                product.subcategory;


            existing.size =
                finalSize;

        }
        else {

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

                /*
                 * VERY IMPORTANT:
                 * Cart receives the SAME image shown
                 * on Product Details.
                 */

                image:
                    product.images[0],

                category:
                    product.category,

                subcategory:
                    product.subcategory,

                quantity:
                    numericQuantity,

                size:
                    finalSize

            });

        }


        saveCart();

    }


    /* =========================================================
       CART NAVIGATION
    ========================================================== */

    const navCart =
        document.querySelector(
            ".nav-cart"
        );


    if (
        navCart
    ) {

        navCart.addEventListener(
            "click",
            function (
                event
            ) {

                event.preventDefault();


                window.location.href =
                    "Cart/Cart.html";

            }
        );

    }


    const headerCartButton =
        document.getElementById(
            "headerCartButton"
        );


    if (
        headerCartButton
    ) {

        headerCartButton.addEventListener(
            "click",
            function () {

                window.location.href =
                    "Cart/Cart.html";

            }
        );

    }


    /* =========================================================
       ADD TO CART BUTTON
    ========================================================== */

    const addToCartButton =
        document.getElementById(
            "addToCartBtn"
        );


    if (
        addToCartButton
    ) {

        addToCartButton.addEventListener(
            "click",
            function () {

                const quantity =
                    getCurrentQuantity();


                if (
                    productRequiresSize(
                        product
                    ) &&
                    !selectedSize
                ) {

                    alert(
                        "Please select a size."
                    );


                    return;

                }


                addProductToCart(
                    quantity,
                    selectedSize
                );


                const originalText =
                    this.textContent;


                this.textContent =
                    "Added to cart ✓";


                this.classList.add(
                    "added"
                );


                setTimeout(
                    function () {

                        addToCartButton.textContent =
                            originalText;


                        addToCartButton.classList.remove(
                            "added"
                        );

                    },
                    1500
                );

            }
        );

    }


    /* =========================================================
       BUY NOW
    ========================================================== */

    const buyNowButton =
        document.getElementById(
            "buyNowBtn"
        );


    if (
        buyNowButton
    ) {

        buyNowButton.addEventListener(
            "click",
            function () {

                const quantity =
                    getCurrentQuantity();


                if (
                    productRequiresSize(
                        product
                    ) &&
                    !selectedSize
                ) {

                    alert(
                        "Please select a size."
                    );


                    return;

                }


                addProductToCart(
                    quantity,
                    selectedSize
                );


                window.location.href =
                    "Cart/Cart.html";

            }
        );

    }


    /* =========================================================
       RELATED PRODUCTS
    ========================================================== */

    const relatedContainer =
        document.getElementById(
            "relatedProducts"
        );


    if (
        relatedContainer
    ) {

        relatedContainer.innerHTML =
            "";


        let relatedProducts =

            Object.values(
                products
            )
            .filter(
                function (
                    item
                ) {

                    return (

                        item.id !==
                        product.id &&

                        item.category ===
                        product.category

                    );

                }
            )
            .slice(
                0,
                4
            );


        if (
            relatedProducts.length <
            4
        ) {

            const additionalProducts =

                Object.values(
                    products
                )
                .filter(
                    function (
                        item
                    ) {

                        return (

                            item.id !==
                            product.id &&

                            !relatedProducts.some(
                                function (
                                    existing
                                ) {

                                    return (
                                        existing.id ===
                                        item.id
                                    );

                                }
                            )

                        );

                    }
                )
                .slice(
                    0,
                    4 -
                    relatedProducts.length
                );


            relatedProducts =
                relatedProducts.concat(
                    additionalProducts
                );

        }


        relatedProducts.forEach(
            function (
                item
            ) {

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

                        <div
                            class="related-image"
                        >

                            <img
                                src="${item.images[0]}"
                                alt="${item.name}"
                            >

                            <span
                                class="related-category"
                            >
                                ${item.category}
                            </span>

                        </div>


                        <div
                            class="related-content"
                        >

                            <h3>
                                ${item.name}
                            </h3>


                            <div
                                class="related-rating"
                            >

                                ${item.rating}

                                <i
                                    class="fa-solid fa-star"
                                    aria-hidden="true"
                                ></i>

                                (${item.reviews})

                            </div>


                            <div>

                                <span
                                    class="related-price"
                                >

                                    ₹${formatPrice(
                                        item.price
                                    )}

                                </span>


                                <del
                                    class="related-old-price"
                                >

                                    ₹${formatPrice(
                                        item.mrp
                                    )}

                                </del>

                            </div>

                        </div>

                    </a>

                `;


                setupImageFallback(
                    card.querySelector(
                        ".related-image img"
                    )
                );


                const relatedLink =
                    card.querySelector(
                        ".related-product-link"
                    );


                if (
                    relatedLink
                ) {

                    relatedLink.addEventListener(
                        "click",
                        function (
                            event
                        ) {

                            event.preventDefault();


                            /*
                             * Save the exact related product
                             * before opening its details page.
                             */

                            const relatedData = {

                                id:
                                    item.id,

                                category:
                                    item.category,

                                subcategory:
                                    item.subcategory,

                                name:
                                    item.name,

                                brand:
                                    item.brand,

                                price:
                                    Number(
                                        item.price
                                    ),

                                mrp:
                                    Number(
                                        item.mrp
                                    ),

                                rating:
                                    Number(
                                        item.rating
                                    ),

                                reviews:
                                    Number(
                                        item.reviews
                                    ),

                                bought:
                                    item.bought,

                                image:
                                    item.images[0],

                                description:
                                    item.description

                            };


                            try {

                                sessionStorage.setItem(
                                    "ozzoSelectedProduct",
                                    JSON.stringify(
                                        relatedData
                                    )
                                );

                            }
                            catch (
                                error
                            ) {

                                console.warn(
                                    "Unable to save related product:",
                                    error
                                );

                            }


                            let relatedImageUrl =
                                item.images[0];


                            try {

                                relatedImageUrl =
                                    new URL(
                                        item.images[0],
                                        window.location.href
                                    ).href;

                            }
                            catch (
                                error
                            ) {
                                /* Keep original */
                            }


                            window.location.href =
                                "ProductDetails.html" +

                                "?id=" +
                                encodeURIComponent(
                                    item.id
                                ) +

                                "&name=" +
                                encodeURIComponent(
                                    item.name
                                ) +

                                "&price=" +
                                encodeURIComponent(
                                    item.price
                                ) +

                                "&mrp=" +
                                encodeURIComponent(
                                    item.mrp
                                ) +

                                "&image=" +
                                encodeURIComponent(
                                    relatedImageUrl
                                );

                        }
                    );

                }


                relatedContainer.appendChild(
                    card
                );

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
        newsletterForm
    ) {

        newsletterForm.addEventListener(
            "submit",
            function (
                event
            ) {

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
       INITIAL CART COUNT
    ========================================================== */

    updateCartCount();


    /* =========================================================
       FINAL DEBUG
    ========================================================== */

    console.log(
        "OZZO PRODUCT:",
        product.name
    );


    console.log(
        "OZZO PRODUCT ID:",
        product.id
    );


    console.log(
        "OZZO EXACT IMAGE:",
        product.images[0]
    );


    console.log(
        "OZZO PRICE:",
        product.price
    );


    console.log(
        "OZZO MRP:",
        product.mrp
    );


    console.log(
        "OZZO SIZE REQUIRED:",
        productRequiresSize(
            product
        )
    );

});
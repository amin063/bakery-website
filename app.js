const data = [
    {
        "id": "artisanal-bread-choose-your-own-3-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132332/artisanal-bread-choose-your-own-3-pack.c64d8dc0584457116b91a24f43cd861c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Orwashers Bakery",
        "dsc": "Artisanal Bread - Choose Your Own 3 Pack",
        "price": 45,
        "rate": 5,
        "country": "New York, NY"
    },
    {
        "id": "artisanal-bread-choose-your-own-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132426/bread-choose-your-own-4-pack.78f96938f1a3a5bc6a7fefa564bf878c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Grateful Bread Company",
        "dsc": "Artisanal Bread - Choose Your Own 4 Pack",
        "price": 59,
        "rate": 5,
        "country": "Sacramento, CA"
    },
    {
        "id": "corn-cheese-bread-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133923/corn-cheese-bread-2-pack.703937ce3943d6caad78d3612cd9dcef.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Calic Bread",
        "dsc": "Corn Cheese Bread - 2 Pack",
        "price": 89,
        "rate": 5,
        "country": "Los Angeles, CA"
    },
    {
        "id": "tartine-bread-loaves-choose-your-own-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133401/tartine-bread-loaves-choose-your-own-2-pack.aa052bf998aa1b627e1fa71a482311a7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Tartine Bakery",
        "dsc": "Tartine Bread Loaves - Choose Your Own 2 Pack",
        "price": 39,
        "rate": 4,
        "country": "San Francisco, CA"
    },
    {
        "id": "japanese-milk-bread",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95387/japanese-milk-bread.5c3e3677db6b145b659e702af3098337.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Craftsman and Wolves",
        "dsc": "Japanese Milk Bread - 2 Loaves",
        "price": 55,
        "rate": 5,
        "country": "San Francisco, CA"
    },
    {
        "id": "artisanal-bread-choose-your-own-6-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126688/bread-choose-your-own-6-pack.060cf408cf8b30ef3ea618ef3e5d5389.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Orwashers Bakery",
        "dsc": "Artisanal Bread - Choose Your Own 6 Pack",
        "price": 69,
        "rate": 5,
        "country": "New York, NY"
    },
    {
        "id": "23572-artichoke-bread-sampler-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89514/artichoke-bread-sampler-4-pack.2243d37a2b976f88cdfe026026e82e1f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Arcangeli Grocery",
        "dsc": "Artichoke Bread Sampler - 4 Pack",
        "price": 59,
        "rate": 4,
        "country": "Pescadero, CA"
    },
    {
        "id": "bavarian-soft-pretzel-twists-10-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/133455/bavarian-soft-pretzel-twists-10-pack.0f8c34ca7341a525bd581924bd9f030f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Milwaukee Pretzel Company",
        "dsc": "Bavarian Soft Pretzel Twists - 10 Pack",
        "price": 39,
        "rate": 4,
        "country": "Milwaukee, WI"
    },
    {
        "id": "banana-bread-6-pack-choose-your-own",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99033/mini-banana-bread-loaves-18-pack-choose-your-own.cf136bd604f91d94d067045b13ad0227.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Maui Banana Bread Co",
        "dsc": "Banana Bread- Choose Your Own 6 Pack",
        "price": 59,
        "rate": 5,
        "country": "Lahaina, HI"
    },
    {
        "id": "stuffed-bread-loaves-choose-your-own-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/128801/stuffed-bread-loaves-choose-your-own-2-pack.40c693cca82e78bf496dc14bf1f52d61.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Antique Bar & Bakery",
        "dsc": "Stuffed Bread Loaves - Choose Your Own 2 Pack",
        "price": 59,
        "rate": 4,
        "country": "Hoboken, NJ"
    },
    {
        "id": "15277-hot-and-spicy-cheese-bread-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/129676/hot-and-spicy-cheese-bread-2-pack.014477417093300bfb5e9ed8645bd0a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Stella's of Madison",
        "dsc": "Hot & Spicy Cheese Bread - 2 Pack",
        "price": 39,
        "rate": 4,
        "country": "Madison, WI"
    },
    {
        "id": "savory-bread-assortment-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116300/savory-bread-assortment-4-pack.3f088d3d463da68582c2ea93a7c1d547.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Grateful Bread Company",
        "dsc": "Savory Bread Assortment - 4 Pack",
        "price": 49,
        "rate": 4,
        "country": "Sacramento, CA"
    },
    {
        "id": "classic-clam-chowder-and-bread-bowls-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98280/classic-clam-chowder-and-bread-bowls-4-pack.ce07ef6072a276e55bb2924f56d74ebb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Boudin Bakery",
        "dsc": "Classic Clam Chowder and Bread Bowls Kit - 4 Pack",
        "price": 49,
        "rate": 4,
        "country": "San Francisco, CA"
    },
    {
        "id": "bread-and-roses-care-package",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132930/bread-and-roses-care-package.c60ba288ef2a179a3d6da325d33ff402.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Bread and Roses Bakery",
        "dsc": "Bread & Roses Care Package",
        "price": 59,
        "rate": 4,
        "country": "Wells, ME"
    },
    {
        "id": "choose-your-own-gourmet-breadsticks-16-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90781/choose-your-own-gourmet-breadsticks-16-pack.887e7e2eb8f22d3cd4d89f1a11affd5e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Claudio's Specialty Breads",
        "dsc": "Choose Your Own Gourmet Breadsticks - 16 Pack",
        "price": 119,
        "rate": 4,
        "country": "Castroville, CA"
    },
    {
        "id": "babka-choose-your-own-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106973/babka-choose-your-own-2-pack.7f0a32a47bf3e7d9582b94b6aaabbb10.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Kossar's Bagels & Bialys",
        "dsc": "Babka - Choose Your Own 2 Pack",
        "price": 59,
        "rate": 5,
        "country": "New York, NY"
    },
    {
        "id": "original-garlic-cream-cheese-bread-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105205/original-garlic-cream-cheese-bread-2-pack.7cb55509860ca0311b97222aae4eb0b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Calic Bread",
        "dsc": "Original Garlic Cream Cheese Bread - 2 Pack",
        "price": 79,
        "rate": 5,
        "country": "Los Angeles, CA"
    },
    {
        "id": "artisanal-bread-choose-your-own-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/product_image/image/88948/artisanal-bread-choose-your-own-2-pack.a33cb2854267dfc70780af82847e5557.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "High Street Philadelphia",
        "dsc": "Artisanal Bread - Choose Your Own 2 Pack",
        "price": 44,
        "rate": 5,
        "country": "Philadelphia, PA"
    },
    {
        "id": "artisanal-bread-best-sellers-3-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/126686/artisanal-bread-best-sellers-3-pack.1dcfccc1a446fe9163fe9015fec5be11.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Orwashers Bakery",
        "dsc": "Artisanal Bread Best Sellers - 3 Pack",
        "price": 45,
        "rate": 4,
        "country": "New York, NY"
    },
    {
        "id": "italian-bread-2-loaves",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134811/italian-bread-2-loaves.8a42be072eac0f8abdb93d256061515a.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Tomaro's Bakery",
        "dsc": "Italian Bread - 2 Loaves",
        "price": 35,
        "rate": 4,
        "country": "Clarksburg, WV"
    },
    {
        "id": "24239-essa-bagel-bakers-dozen-kosher",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/91160/essa-bagel-bakers-dozen-kosher.b69c2a8053463ce34cfb35f71e3ccee2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Essa Bagel",
        "dsc": "Essa Bagel Baker's Dozen (Kosher)",
        "price": 59,
        "rate": 4,
        "country": "New York, NY"
    },
    {
        "id": "pain-au-chocolat-8-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90466/pain-au-chocolat-8-pack.58a1a9fdc9920b4b8406fbb98a304a68.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Ceci-Cela Patisserie",
        "dsc": "Pain au Chocolat - 8 Pack",
        "price": 49,
        "rate": 5,
        "country": "Brooklyn, NY"
    },
    {
        "id": "choose-your-own-gourmet-breadsticks-15-lb-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90725/choose-your-own-gourmet-breadsticks-5-lb-3-pack.030d6d0ed9eb8e65b1ff18f5d9212326.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Claudio's Specialty Breads",
        "dsc": "Choose Your Own Gourmet Breadsticks - 15-lb. Pack",
        "price": 170,
        "rate": 5,
        "country": "Castroville, CA"
    },
    {
        "id": "pretzel-lovers-combo-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/123858/pretzel-lovers-combo-pack.73ed8b17c5dec3f399e3e2a9eea4ffbe.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Milwaukee Pretzel Company",
        "dsc": "Pretzel Lover's Combo Pack",
        "price": 79,
        "rate": 5,
        "country": "Milwaukee, WI"
    },
    {
        "id": "korean-cream-cheese-bread-combo-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105212/korean-cream-cheese-bread-choose-your-own-2-pack.8b70b1b0f22846a1c0267b24a59378b2.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Calic Bread",
        "dsc": "Korean Cream Cheese Bread Combo - 2 Pack",
        "price": 85,
        "rate": 4,
        "country": "Los Angeles, CA"
    },
    {
        "id": "15277-hot-and-spicy-cheese-bread-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/73537/hot-and-spicy-cheese-bread-4-pack.47296ecafd93e3f1fafea23458ae75b3.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Stella's of Madison",
        "dsc": "Hot & Spicy Cheese Bread - 4 Pack",
        "price": 69,
        "rate": 4,
        "country": "Madison, WI"
    },
    {
        "id": "bavarian-pretzel-buns-12-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/124047/bavarian-pretzel-sticks-12-pack.6558773971c97369e557cc3b96bd846b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "State Street Brats",
        "dsc": "Bavarian Pretzel Buns - 12 Pack",
        "price": 59,
        "rate": 5,
        "country": "Madison, WI"
    },
    {
        "id": "scratch-made-raisin-bread",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/98345/scratch-made-raisin-bread.6205c1a82759bc0249a62fe6ca7cdac6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Miller's Bakery",
        "dsc": "Scratch Made Raisin Bread - 2 Pack",
        "price": 39,
        "rate": 5,
        "country": "Ronks, PA"
    },
    {
        "id": "tartine-bread-loaves-choose-your-own-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132859/tartine-bread-loaves-choose-your-own-4-pack.d51f0fdc2d4e345f0a08441190ef6c0b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Tartine Bakery",
        "dsc": "Tartine Bread Loaves - Choose Your Own 4 Pack",
        "price": 69,
        "rate": 4,
        "country": "San Francisco, CA"
    },
    {
        "id": "23572-pescadero-breads-sampler-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89536/pescadero-breads-sampler-4-pack.1a9082c2fbc58f9f6cd1d610b18aa64f.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Arcangeli Grocery",
        "dsc": "Choose Your Own Pescadero Breads - 4 Pack",
        "price": 54,
        "rate": 5,
        "country": "Pescadero, CA"
    },
    {
        "id": "new-york-bagel-brunch-kit-for-6-sale",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105782/new-york-bagel-brunch-kit-for-6-6-free-bagels.7db930fc7e86f43f658f551ffc7ad967.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Utopia Bagels",
        "dsc": "New York Bagel Brunch Kit for 6 + 6 FREE Bagels",
        "price": 99,
        "rate": 5,
        "country": "Queens, NY"
    },
    {
        "id": "24011-breads-bakery-chocolate-babka-3-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90530/breads-bakery-chocolate-babka-3-pack.82ccccf0e109eaa03af3f8f0a4405ced.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Breads Bakery",
        "dsc": "Breads Bakery Chocolate Babka - 3 Pack",
        "price": 49.95,
        "rate": 4,
        "country": "New York, NY"
    },
    {
        "id": "signature-garlic-bread-with-sauces-for-4-6",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131203/garlic-bread-for-4-6.a227994dee61ef69e777a6a8ac1eadde.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "LAVO",
        "dsc": "Signature Garlic Bread with Sauces for 4-6",
        "price": 69,
        "rate": 4,
        "country": "New York, NY"
    },
    {
        "id": "choose-your-own-gourmet-breadsticks-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90702/choose-your-own-gourmet-breadsticks-4-pack.17986d6fdad9457523c4276d09ffd346.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Claudio's Specialty Breads",
        "dsc": "Choose Your Own Gourmet Breadsticks - 4 Pack",
        "price": 35,
        "rate": 5,
        "country": "Castroville, CA"
    },
    {
        "id": "essa-bagel-bakers-dozen-kosher-buy-1-get-1-free",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/100871/essa-bagel-dozen-kosher-buy-1-get-1-free.9a369a3f64e48283b57e929a82a67565.png?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Ess-a-Bagel",
        "dsc": "Ess-a-Bagel Dozen (Kosher) - BUY 1 GET 1 FREE",
        "price": 59.95,
        "rate": 5,
        "country": "New York, NY"
    },
    {
        "id": "kosher-frozendorf-ready-to-bake-braided-challah-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/108248/kosher-frozendorf-frozen-braided-challah-2-pack.75fe43e83efa6c3d37634364fcab109b.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Charm City Kosher",
        "dsc": "Kosher Frozendorf Ready-to-Bake Braided Challah - 2 Pack",
        "price": 11,
        "rate": 5,
        "country": "Baltimore, MD"
    },
    {
        "id": "235721-choose-your-own-artichoke-bread-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134798/choose-your-own-artichoke-bread-4-pack.25422502c71cd2b37333f3acc70b6d55.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Arcangeli Grocery",
        "dsc": "Choose Your Own Artichoke Bread - 4 Pack",
        "price": 59,
        "rate": 5,
        "country": "Pescadero, CA"
    },
    {
        "id": "zucchini-loaf-cake-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/109080/zucchini-loaf-cake-2-pack.e69149106247bb5bf112decf3a9c8e02.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "The Gingered Peach",
        "dsc": "Zucchini Bread Loaf Cake - 2 Pack",
        "price": 54,
        "rate": 5,
        "country": "Lawrence Twp, NJ"
    },
    {
        "id": "bavarian-soft-pretzel-bites-100-pacl",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/106719/bavarian-soft-pretzel-bites-100-pack.9e249cb79e3d6af92114fe2f80d97186.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Milwaukee Pretzel Company",
        "dsc": "Bavarian Soft Pretzel Bites - 100 Pack",
        "price": 45,
        "rate": 4,
        "country": "Milwaukee, WI"
    },
    {
        "id": "24011-chocolate-and-cinnamon-babka-3-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132984/breads-chocolate-and-cinnamon-babka-3-pack.b5c36a0ccbbec8dd7c23771cfa0603fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Breads Bakery",
        "dsc": "Breads Chocolate and Cinnamon Babka - 3 Pack",
        "price": 49.95,
        "rate": 4,
        "country": "New York, NY"
    },
    {
        "id": "pretzel-challah-3-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77556/pretzel-challah-3-pack.54741d680d90984246da074a143300f7.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Butterflake Bakery",
        "dsc": "Pretzel Challah - 3 pack (Kosher)",
        "price": 54.99,
        "rate": 5,
        "country": "Teaneck, NJ"
    },
    {
        "id": "choose-your-own-bialy-bagel-dozen",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/95079/6-bagel-6-bialy-combo-pack.8ad8c22bd9d4bdb633b40878facb9703.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Kossar's Bagels & Bialys",
        "dsc": "6  Bagel + 6 Bialy Combo Pack",
        "price": 45,
        "rate": 4,
        "country": "New York, NY"
    },
    {
        "id": "hand-braided-baked-challah",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132919/hand-braided-challah-2-pack.0cebe56b739fd7d071d3c9b42d31a34e.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Zaro's Family Bakery",
        "dsc": "Hand Braided Challah - 2 Pack",
        "price": 35,
        "rate": 5,
        "country": "New York, NY"
    },
    {
        "id": "fresh-butter-croissants-16-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/90481/fresh-butter-croissants-16-pack.aeced89575dd02fb89f30a3b7e1fab13.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Ceci-Cela Patisserie",
        "dsc": "Fresh Butter Croissants - 16 Pack",
        "price": 59,
        "rate": 5,
        "country": "Brooklyn, NY"
    },
    {
        "id": "23572-pesto-artichoke-bread-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134782/pesto-artichoke-bread-4-pack.e2ad53faef619e6e0b22b5f211d9a4d6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Arcangeli Grocery",
        "dsc": "Pesto Artichoke Bread - 4 Pack",
        "price": 59,
        "rate": 5,
        "country": "Pescadero, CA"
    },
    {
        "id": "double-chocolate-babka",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134184/double-chocolate-babka.e7bca1ea0d2327e31179841ef74a4611.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Oneg Bakery",
        "dsc": "Double Chocolate Babka",
        "price": 59,
        "rate": 4,
        "country": "Brooklyn, NY"
    },
    {
        "id": "bestselling-banana-bread-6-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/99486/bestselling-mini-loaves-6-pack.c48bdbf6c2584b921841f50db863f438.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Maui Banana Bread Co",
        "dsc": "Best Seller Banana Bread - 6 Pack",
        "price": 59,
        "rate": 4,
        "country": "Lahaina, HI"
    },
    {
        "id": "sourdough-bread-assortment-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/116312/sourdough-bread-assortment-4-pack.f5d3eb1f7d778a9ecf46d5b783572be6.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Grateful Bread Company",
        "dsc": "Sourdough Bread Assortment - 4 Pack",
        "price": 49,
        "rate": 5,
        "country": "Sacramento, CA"
    },
    {
        "id": "choose-your-own-bagel-2-dozen",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/100125/choose-your-own-bagel-2-dozen.2bff022a30852d49a00f049e23536b97.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "St-Viateur Bagel",
        "dsc": "Choose Your Own Bagel 2 Dozen",
        "price": 49,
        "rate": 5,
        "country": "Montreal, CN"
    },
    {
        "id": "monster-cream-cheese-bread-2-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/105193/monster-cream-cheese-bread-2-pack.6a26a695237d3c695607677f6d5e50c5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Calic Bread",
        "dsc": "Monster Cream Cheese Bread - 2 Pack",
        "price": 89,
        "rate": 4,
        "country": "Los Angeles, CA"
    },
    {
        "id": "240146-loaf-cake-combo-3-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134395/loaf-cake-combo-3-pack.2d0f371aea6b091b0cdca22d5a26068c.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Breads Bakery",
        "dsc": "Loaf Cake Combo - 3 pack",
        "price": 47.95,
        "rate": 5,
        "country": "New York, NY"
    },
    {
        "id": "sourdough-bread-bowl-and-chowder-kit-for-4",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/121915/sourdough-bread-bowl-and-chowder-kit-for-4.cf1f14f389cfd87f4b8366ca2d04c1a4.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Pike Place Chowder",
        "dsc": "Sourdough Bread Bowl & Chowder Kit for 4",
        "price": 109,
        "rate": 4,
        "country": "Seattle, WA"
    },
    {
        "id": "23572-artichoke-garlic-herb-bread-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89520/artichoke-garlic-herb-bread-4-pack.a89e7791fb44a7aaae95f2b208e6c9d5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Arcangeli Grocery",
        "dsc": "Artichoke Garlic Herb Bread - 4 Pack",
        "price": 59,
        "rate": 5,
        "country": "Pescadero, CA"
    },
    {
        "id": "choose-your-own-rye-breads-4-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/131377/choose-your-own-rye-breads-4-pack.04acb73372123b696d02ee87d1b1bc22.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Lithuanian Bakery",
        "dsc": "Choose Your Own Rye Breads - 4 Pack",
        "price": 59,
        "rate": 4,
        "country": "Omaha, NE"
    },
    {
        "id": "wisconsin-spicy-cheese-bread",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/77410/wisconsin-spicy-cheese-bread.c75334ccbc78903dc99156bb8eb5a7d8.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Uncle Mike's Bake Shoppe",
        "dsc": "Wisconsin Spicy Cheese Bread",
        "price": 49,
        "rate": 4,
        "country": "Suamico, WI"
    },
    {
        "id": "calic-bagel-assortment-dozen",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/134209/calic-bagel-assortment-dozen.81c962f02ca8c4bb1ef2e45e1aad6c59.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "Calic Bread",
        "dsc": "Calic Bagel Assortment - Dozen",
        "price": 89,
        "rate": 5,
        "country": "Los Angeles, CA"
    },
    {
        "id": "lobster-roll-kit-and-wild-maine-blueberry-bread-pudding",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/89278/lobster-roll-kit-and-wild-maine-blueberry-bread-pudding.78e91ec6331d032ae4d24f0d4026bdee.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "McLoons Lobster Shack",
        "dsc": "Lobster Roll Kit And Wild Maine Blueberry Bread Pudding",
        "price": 155,
        "rate": 5,
        "country": "South Thomaston, ME"
    },
    {
        "id": "loaf-cakes-choose-your-own-3-pack",
        "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/132543/loaf-cakes-choose-your-own-3-pack.0c0d456631e4b4e4b3aa30edf999ad07.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
        "name": "The Gingered Peach",
        "dsc": "Loaf Cakes - Choose Your Own 3 Pack",
        "price": 69,
        "rate": 4,
        "country": "Lawrence Twp, NJ"
    }
]

const basketData = []

const body = document.querySelector("body");
const input = document.querySelector("header input");
const breads = document.querySelector("#products .row")
const priceFilter = document.querySelector(".price-filter input");
const rateFilter = document.querySelector(".rate-filter input");
const basketItems = document.querySelector(".basket-list");
const basketAlert = document.querySelector(".basket-alert");
const basketAlertIcon = document.querySelector(".basket-alert .close-alert");
const basketContainer = document.querySelector(".basket-container");
const payBtn = document.querySelector(".pay-btn");


let payMoney = 0;



let isInputActive = false;
let filteredData = [];
let clearCount = 0;


showBreads(data);

const basketBtn = document.querySelectorAll(".basket-btn");


function calcPay() {
    payMoney = 0;
    basketData.forEach(item => {
        payMoney += item.price;
    });
}
function removeBasketItem(index) {
    basketData.splice(index, 1);
    calcPay();
    updateBasketUI();
}

function updateBasketUI() {
    basketItems.innerHTML = '';
    basketData.forEach((item, index) => {
        basketItems.innerHTML += `<div class="basket-item" data-index="${index}">
        ${item.name} - ${item.price}$ <i class='bx bx-x-circle remove-item' data-index="${index}"></i>
    </div>`;
    });
    const removeItems = document.querySelectorAll(".remove-item");

    removeItems.forEach(icon => {
        icon.addEventListener("click", (e) => {
            let index = e.target.getAttribute('data-index');
            removeBasketItem(index);
        });
    });
    payBtn.innerHTML = `Pay ${payMoney}`;
    
}

function addToBasket(item) {
    basketData.push(item);
    calcPay();
    updateBasketUI();
}


function showBreads(data) {
    breads.innerHTML = '';
    data.forEach((item, index) => {
        breads.innerHTML += `  <div class="col-xxl-3 col-lg-4 col-md-6 col-12 mb-5">
                        <div class="item mx-4">
                            <div class="item-img">
    <img src=${item.img} onerror="this.src = './assets/images/logo.png'">
                                <div class="item-name">${item.name}</div>
                            </div>
                            <div class="item-info">
                                <div class="item-dsc"><p>${item.dsc}</p></div>
                                <div class="row">
                                    <div class="price col-6">${item.price}$</div>
                                    <div class="rate col-6">${item.rate} <i class='bx bxs-star'></i></div>
                                </div>
                            </div>
                            <div class="row px-3">
                                <div class="col-6">
                            <button class="basket-btn btn mb-3" data-index="${index}">Basket</button>
                                </div>
                                <div class="col-6">
                                    <button class="buy-btn btn mb-3">Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>`
    });
}

function filterData() {
    filteredData = data.filter(item => {
        const inputResult = item.name.toLowerCase().includes(input.value.toLowerCase());
        const priceResult = Number(item.price) > Number(priceFilter.value);
        const rateResult = Number(item.rate) > Number(rateFilter.value);
        return inputResult && priceResult && rateResult
    })
    showBreads(filteredData)
}



rateFilter.addEventListener("input", filterData);
priceFilter.addEventListener("input", filterData);
input.addEventListener("input", filterData);

basketContainer.addEventListener("click", () => {
    basketAlert.style.display = 'block';
})

basketAlertIcon.addEventListener("click", () => {
    basketAlert.style.display = 'none';
});

basketBtn.forEach(button => {
    button.addEventListener("click", (e) => {
        let index = e.target.getAttribute('data-index');
        addToBasket(data[index]);
    });

});


console.log(basketBtn);

























// rateFilter.addEventListener("input", () => {
//     if (Boolean(input.value) === true || Boolean(priceFilter.value) === true) {
//         filteredData = filteredData.filter(item => Number(item.rate) > Number(rateFilter.value))
//         breads.innerHTML = ``;
//         showBreads(filteredData);
//     } else {
//         filteredData = data.filter(item => Number(item.rate) > Number(rateFilter.value))
//         breads.innerHTML = ``;
//         showBreads(filteredData);
//     }
// })



// priceFilter.addEventListener("input", () => {
//     if (Boolean(input.value) === true || Boolean(rateFilter.value) === true) {
//         filteredData = filteredData.filter(item => Number(item.price) > Number(priceFilter.value))
//         breads.innerHTML = ``;
//         showBreads(filteredData);
//     } else {
//         filteredData = data.filter(item => Number(item.price) > Number(priceFilter.value))
//         breads.innerHTML = ``;
//         showBreads(filteredData);
//     }


// })

// input.addEventListener("input", () => {
//     if (Boolean(priceFilter.value) === true || Boolean(rateFilter.value) === true) {
//         filteredData = filteredData.filter(bread => bread.name.toLowerCase().includes(input.value.toLowerCase()))
//         breads.innerHTML = ``;
//         showBreads(filteredData);

//     } else {
//         breads.innerHTML = ``;
//         filteredData = data.filter(bread => bread.name.toLowerCase().includes(input.value.toLowerCase()))
//         showBreads(filteredData);

//     }

// })
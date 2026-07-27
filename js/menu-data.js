/* Sakura Family Restaurant — menu data
   Grouped from the full price list into signature dish cards.
   Each card can carry several variants (protein/size options). */

const MENU_DATA = [
  /* ---------------- SUSHI ---------------- */
  {
    id: "nigiri",
    section: "sushi",
    name: "Nigiri",
    serving: "3 pieces",
    description: "Hand-pressed mounds of vinegared rice, topped with a slice of fresh fish or seafood.",
    image: "assets/images/01_nigiri_3_pieces.jpg",
    variants: [
      { name: "Ebi (Prawn)", price: 250 },
      { name: "Maguro (Tuna)", price: 300 },
      { name: "Sake (Salmon)", price: 300 },
      { name: "Kanikama (Crabstick)", price: 250 },
      { name: "Tako (Octopus)", price: 300 }
    ]
  },
  {
    id: "maki",
    section: "sushi",
    name: "Maki",
    serving: "6 pieces",
    description: "Classic rolls of vinegared rice and filling, wrapped in nori seaweed.",
    image: "assets/images/02_maki_6_pieces.jpg",
    variants: [
      { name: "Ebi (Prawn)", price: 280 },
      { name: "Maguro (Tuna)", price: 300 },
      { name: "Sake (Salmon)", price: 300 },
      { name: "Kanikama (Crabstick)", price: 280 },
      { name: "Kappa (Veg.)", price: 250 }
    ]
  },
  {
    id: "uramaki",
    section: "sushi",
    name: "Uramaki",
    serving: "8 pieces",
    description: "“Inside-out” rolls — rice on the outside, nori and filling within.",
    image: "assets/images/03_uramaki_8_pieces.jpg",
    variants: [
      { name: "Ebi (Prawn)", price: 350 },
      { name: "Maguro (Tuna)", price: 450 },
      { name: "Sake (Salmon)", price: 450 },
      { name: "Kanikama (Crabstick)", price: 350 },
      { name: "Kappa (Veg.)", price: 300 }
    ]
  },
  {
    id: "saku-saku-uramaki",
    section: "sushi",
    name: "Saku Saku Uramaki",
    serving: "8 pieces",
    description: "Uramaki finished with a crisp tempura shell for a delightful crunch.",
    image: "assets/images/04_saku_saku_uramaki_8_pieces.jpg",
    badge: "Chef's Pick",
    variants: [
      { name: "Ebi (Prawn)", price: 450 },
      { name: "Maguro (Tuna)", price: 500 },
      { name: "Sake (Salmon)", price: 500 },
      { name: "Kanikama (Crabstick)", price: 450 },
      { name: "Kappa (Veg.)", price: 350 }
    ]
  },
  {
    id: "small-sushi-platter",
    section: "sushi",
    name: "Small Sushi Platter",
    serving: "14 pieces",
    description: "Uramaki Kanikama ×4, Uramaki Ebi ×4, Nigiri Ebi ×2 and Maki Kappa ×4 — built to share.",
    image: "assets/images/05_small_sushi_platter_14_pieces.jpg",
    variants: [{ name: "Small Sushi Platter", price: 800 }]
  },
  {
    id: "big-sushi-platter",
    section: "sushi",
    name: "Big Sushi Platter",
    serving: "28 pieces",
    description: "Uramaki Kanikama ×8, Uramaki Ebi ×8, Nigiri Ebi ×4 and Maki Kappa ×8 — the table centerpiece.",
    image: "assets/images/06_big_sushi_platter_28_pieces.jpg",
    badge: "Bestseller",
    variants: [{ name: "Big Sushi Platter", price: 1550 }]
  },
  {
    id: "nigiri-platter",
    section: "sushi",
    name: "Nigiri Platter",
    serving: "10 pieces",
    description: "Kanikama ×2, Sake ×2, Maguro ×2, Ebi ×2 and Tako ×2 — a tasting flight of the counter's best.",
    image: "assets/images/07_nigiri_platter_10_pieces.jpg",
    badge: "Bestseller",
    variants: [{ name: "Nigiri Platter", price: 800 }]
  },

  /* ---------------- KOREAN ---------------- */
  {
    id: "kimbap",
    section: "korean",
    name: "Kimbap",
    serving: "",
    description: "Seasoned rice and fillings rolled in seaweed (kim), sliced and served.",
    image: "assets/images/08_kimbap.jpg",
    variants: [
      { name: "Smoked Chicken Sausage", price: 500 },
      { name: "Chicken", price: 450 },
      { name: "Crabstick", price: 450 },
      { name: "Tuna Flakes", price: 450 },
      { name: "Egg", price: 350 },
      { name: "Veg.", price: 300 }
    ]
  },
  {
    id: "kimchi-fried-rice",
    section: "korean",
    name: "Kimchi Fried Rice",
    serving: "",
    description: "Wok-tossed rice with fermented kimchi, finished to order.",
    image: "assets/images/09_kimchi_fried_rice.jpg",
    variants: [
      { name: "Veg.", price: 250 },
      { name: "Egg", price: 250 },
      { name: "Chicken", price: 320 },
      { name: "Pork", price: 350 },
      { name: "Prawn", price: 400 },
      { name: "Mixed", price: 450 }
    ]
  },
  {
    id: "bibimbap",
    section: "korean",
    name: "Bibimbap",
    serving: "",
    description: "Steamed rice with assorted vegetables and a fried egg, meat optional.",
    image: "assets/images/10_bibimbap.jpg",
    badge: "Guest Favorite",
    variants: [
      { name: "Egg", price: 350 },
      { name: "Chicken", price: 400 },
      { name: "Pork", price: 450 },
      { name: "Tofu", price: 350 }
    ]
  },
  {
    id: "korean-chicken-wings",
    section: "korean",
    name: "Korean Chicken Wings",
    serving: "4 pieces",
    description: "Double-fried wings glazed in a sticky, sweet-savory Korean sauce.",
    image: "assets/images/11_korean_chicken_wings_4_pieces.jpg",
    variants: [{ name: "Korean Chicken Wings", price: 250 }]
  },
  {
    id: "korean-fried-chicken",
    section: "korean",
    name: "Korean Fried Chicken",
    serving: "6 boneless pieces",
    description: "Panko-crusted, shatteringly crisp, tossed in Sakura's signature glaze.",
    image: "assets/images/12_korean_fried_chicken_6_boneless_pieces.jpg",
    badge: "Bestseller",
    variants: [{ name: "Korean Fried Chicken", price: 350 }]
  },
  {
    id: "tteokbokki",
    section: "korean",
    name: "Tteokbokki",
    serving: "",
    description: "Chewy rice cakes simmered in a bold, spicy-sweet gochujang sauce.",
    image: "assets/images/13_tteokbokki.jpg",
    variants: [
      { name: "Chicken", price: 350 },
      { name: "Smoked Sausage", price: 400 },
      { name: "Cheesy Veg", price: 350 }
    ]
  },
  {
    id: "corn-dogs",
    section: "korean",
    name: "Corn Dogs",
    serving: "2 pieces",
    description: "Panko-breaded Korean-style corn dogs, golden and crackling hot.",
    image: "assets/images/14_corn_dogs_2_pieces.jpg",
    variants: [
      { name: "Crispy Cheese", price: 350 },
      { name: "Crispy Chicken", price: 380 }
    ]
  },
  {
    id: "hangover-soup",
    section: "korean",
    name: "Hangover Soup",
    serving: "",
    description: "A warming, restorative Korean broth — guests keep coming back for it.",
    image: "assets/images/15_hangover_soup.jpg",
    badge: "Guest Favorite",
    variants: [{ name: "Hangover Soup", price: 350 }]
  },

  /* ---------------- CAFE ---------------- */
  {
    id: "fries",
    section: "cafe",
    name: "Fries",
    serving: "",
    description: "Sides done right — crisp, hot, and endlessly snackable.",
    image: "assets/images/16_fries.jpg",
    variants: [
      { name: "French Fries", price: 200 },
      { name: "Peri Peri Fries", price: 250 },
      { name: "Cheesy Fries", price: 300 },
      { name: "Potato Wedges", price: 200 }
    ]
  },
  {
    id: "hot-beverages",
    section: "cafe",
    name: "Hot Beverages",
    serving: "",
    description: "Teas and coffees, including Darjeeling black tea sourced from the hills next door.",
    image: "assets/images/17_hot_beverages.jpg",
    variants: [
      { name: "Darjeeling Black Tea", price: 150 },
      { name: "Milk Tea (CTC)", price: 100 },
      { name: "Green Tea", price: 100 },
      { name: "Milk Coffee", price: 150 },
      { name: "Café Americano", price: 150 },
      { name: "Honey, Lemon & Ginger Tea", price: 150 },
      { name: "Hot Chocolate", price: 150 },
      { name: "Blue Pea Tea", price: 150 }
    ]
  },
  {
    id: "cold-beverages",
    section: "cafe",
    name: "Cold Beverages",
    serving: "",
    description: "Iced teas, coffees and coolers to beat the Siliguri afternoon.",
    image: "assets/images/18_cold_beverages.jpg",
    variants: [
      { name: "Peach Iced Tea", price: 150 },
      { name: "Lemon Iced Tea", price: 150 },
      { name: "Iced Americano", price: 150 },
      { name: "Cold Coffee", price: 180 },
      { name: "Fresh Lime Soda", price: 120 },
      { name: "Ice Cream Soda", price: 150 },
      { name: "Iced Matcha Latte", price: 250 },
      { name: "Soft Drink (200ml)", price: 50 },
      { name: "Mineral Water", price: 30 }
    ]
  },
  {
    id: "mocktails-shakes",
    section: "cafe",
    name: "Mocktails & Shakes",
    serving: "",
    description: "Colourful mocktails and thick milkshakes — a favourite for the table's youngest guests.",
    image: "assets/images/19_mocktails_and_shakes.jpg",
    variants: [
      { name: "Blue Lagoon", price: 150 },
      { name: "Shirley Temple", price: 150 },
      { name: "Green Mint Mojito", price: 150 },
      { name: "Pink Mojito", price: 150 },
      { name: "Passion Fruit Mojito", price: 150 },
      { name: "Chocolate Milkshake", price: 200 },
      { name: "Strawberry Milkshake", price: 200 },
      { name: "Vanilla Milkshake", price: 200 }
    ]
  }
];

const REVIEWS_DATA = [
  {
    name: "Maren Heiberg",
    time: "5 months ago",
    rating: 5,
    quote: "We met friends at Sakura yesterday. We ordered the chicken katsu, pork katsu, sushi, bibimbap and some other things. Every order was fresh and delicious."
  },
  {
    name: "Daniel Chettri",
    time: "5 months ago",
    rating: 5,
    quote: "My family and friends had a lovely dinner at Sakura Family Restaurant. The food was amazing, and the environment was warm and welcoming."
  },
  {
    name: "Mahesh Shrestha",
    time: "a year ago",
    rating: 5,
    quote: "The food was absolutely brilliant — one must commend the chef's skill in crafting such delectable Japanese cuisine."
  },
  {
    name: "Dewasish Dewan",
    time: "a year ago",
    rating: 5,
    quote: "It stands out for its authentic Japanese cuisine, warm and inviting ambiance, and impeccable hygiene standards."
  },
  {
    name: "Mike Stadler",
    time: "a year ago",
    rating: 5,
    quote: "Dining at Sakura was a completely satisfying experience! The sushi was fresh, authentic, and well presented. Panko breaded shrimp and chicken, tasty!"
  },
  {
    name: "pratsy",
    time: "10 months ago",
    rating: 5,
    quote: "If you’re looking for authentic Korean and Tibetan food, this place is a hidden gem! The location might not be very eye-catching, but the food is truly special."
  },
  {
    name: "Toby A",
    time: "a year ago",
    rating: 5,
    quote: "The sushi and hand made noodles are excellent here. Also the atmosphere is great. My family will be coming back here regularly."
  },
  {
    name: "Nirupendra Pande",
    time: "a year ago",
    rating: 5,
    quote: "It is a lovely place with a great ambience. Every minute spent in the restaurant was blissful. The food was great, and the people were extremely hospitable."
  },
  {
    name: "chhedup lama",
    time: "",
    rating: 5,
    quote: "A fantastic place with an inviting ambiance, offering an exceptional range of Pan-Asian delights, including Korean, Japanese, and Tibetan cuisines."
  },
  {
    name: "Rahul Chhetri",
    time: "a year ago",
    rating: 5,
    quote: "A must visit place — mouthwatering food and calm zen atmosphere. Dining was an amazing experience. Will visit again soon."
  }
];

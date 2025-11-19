const categories = [
  {
    id: 1,
    name: "Casual",
    icon: "shirt-outline",
    description: "Comfortable everyday wear for a relaxed lifestyle",
    color: "#FF6B6B",
    image:
      "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300&h=200&fit=crop",
  },
  {
    id: 2,
    name: "Business",
    icon: "briefcase-outline",
    description: "Professional attire for the modern workplace",
    color: "#4ECDC4",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&h=200&fit=crop",
  },
  {
    id: 3,
    name: "Sport",
    icon: "bicycle-outline",
    description: "Performance gear for active lifestyles",
    color: "#95E1D3",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=300&h=200&fit=crop",
  },
  {
    id: 4,
    name: "Classic",
    icon: "diamond-outline",
    description: "Timeless pieces that never go out of style",
    color: "#F38181",
    image:
      "https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=300&h=200&fit=crop",
  },
  {
    id: 5,
    name: "Trend",
    icon: "trending-up-outline",
    description: "Latest fashion trends and contemporary styles",
    color: "#AA96DA",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=200&fit=crop",
  },
  {
    id: 6,
    name: "Formal",
    icon: "pricetag-outline",
    description: "Elegant attire for special occasions",
    color: "#FCBAD3",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
  },
  {
    id: 7,
    name: "Party",
    icon: "wine-outline",
    description: "Stand out styles for celebrations and events",
    color: "#FFFFD2",
    image:
      "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=300&h=200&fit=crop",
  },
  {
    id: 8,
    name: "Winter",
    icon: "snow-outline",
    description: "Warm and cozy clothing for cold weather",
    color: "#A8D8EA",
    image:
      "https://images.unsplash.com/photo-1483054990674-e71e4e1cdce5?w=300&h=200&fit=crop",
  },
  {
    id: 9,
    name: "Summer",
    icon: "sunny-outline",
    description: "Light and breathable wear for sunny days",
    color: "#FFD93D",
    image:
      "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=300&h=200&fit=crop",
  },
  {
    id: 10,
    name: "Kids",
    icon: "happy-outline",
    description: "Fun and playful clothing for children",
    color: "#6BCB77",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=300&h=200&fit=crop",
  },
];

const products = [
  {
    id: 1,
    categoryId: 1,
    name: "Oversized Hoodie",
    price: 60.0,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&hue=rotate-45",
    ],
    description:
      "Experience ultimate comfort with this oversized hoodie. Made from premium cotton blend, featuring a relaxed fit perfect for casual everyday wear. The soft fleece interior keeps you warm while the breathable fabric ensures all-day comfort.",
  },
  {
    id: 2,
    categoryId: 4,
    name: "Classic Hoodie",
    price: 45.0,
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&sat=-50",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&brightness=1.2",
    ],
    description:
      "A timeless classic that never goes out of style. This hoodie features a regular fit with adjustable drawstrings and a kangaroo pocket. Perfect for layering or wearing on its own.",
  },
  {
    id: 3,
    categoryId: 2,
    name: "Pullover",
    price: 55.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop&hue=rotate-30",
    ],
    description:
      "Sophisticated and versatile pullover crafted from high-quality materials. Features a modern cut and refined details that make it perfect for both casual and semi-formal occasions.",
  },
  {
    id: 4,
    categoryId: 3,
    name: "Performance Running Shirt",
    price: 35.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=400&h=500&fit=crop&hue=rotate-60",
    ],
    description:
      "High-performance athletic shirt designed for serious runners. Features moisture-wicking technology, breathable mesh panels, and reflective details for low-light visibility. The lightweight fabric ensures maximum comfort during intense workouts.",
  },
  {
    id: 5,
    categoryId: 3,
    name: "Athletic Shorts",
    price: 40.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400&h=500&fit=crop&brightness=1.1",
    ],
    description:
      "Premium athletic shorts with advanced fabric technology. Built-in compression liner provides support while the outer layer offers freedom of movement. Multiple pockets for convenience and quick-dry material for all-weather training.",
  },
  {
    id: 6,
    categoryId: 2,
    name: "Tailored Blazer",
    price: 150.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=400&h=500&fit=crop&hue=rotate-20",
    ],
    description:
      "Expertly tailored blazer in premium wool blend. Features a modern slim fit, notched lapels, and functional button cuffs. Perfect for professional settings and important meetings. Fully lined with interior pockets for functionality.",
  },
  {
    id: 7,
    categoryId: 2,
    name: "Business Dress Shirt",
    price: 65.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop&brightness=1.15",
    ],
    description:
      "Classic business dress shirt crafted from Egyptian cotton. Features a spread collar, French cuffs, and a tailored fit. Wrinkle-resistant fabric makes it perfect for travel and busy professionals. Available in timeless colors.",
  },
  {
    id: 8,
    categoryId: 6,
    name: "Evening Gown",
    price: 220.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=500&fit=crop&hue=rotate-45",
    ],
    description:
      "Stunning floor-length evening gown perfect for galas and formal events. Features elegant draping, a flattering silhouette, and exquisite detailing. Made from luxurious fabric with a subtle sheen. Includes a concealed back zipper and built-in bra support.",
  },
  {
    id: 9,
    categoryId: 6,
    name: "Tuxedo Set",
    price: 350.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1594938328870-f3e7d6c86754?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1594938328870-f3e7d6c86754?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1594938328870-f3e7d6c86754?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1594938328870-f3e7d6c86754?w=400&h=500&fit=crop&brightness=1.1",
    ],
    description:
      "Complete tuxedo set for the most sophisticated occasions. Includes jacket with satin lapels, matching trousers with silk side stripe, dress shirt, bow tie, and cummerbund. Precision tailoring ensures a perfect fit. Made from finest wool blend.",
  },
  {
    id: 10,
    categoryId: 7,
    name: "Sequin Party Dress",
    price: 95.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop&hue=rotate-90",
    ],
    description:
      "Dazzling sequin dress that catches the light from every angle. Features a flattering A-line silhouette, comfortable lining, and adjustable straps. Perfect for cocktail parties, celebrations, and night outs. Easy care with hand wash only.",
  },
  {
    id: 11,
    categoryId: 7,
    name: "Metallic Blazer",
    price: 120.0,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=500&fit=crop&brightness=1.2",
    ],
    description:
      "Stand out with this eye-catching metallic blazer. Features a relaxed fit, shoulder pads for structure, and functional pockets. The shimmering fabric makes it perfect for parties and special events. Pair with jeans or dress pants.",
  },
  {
    id: 12,
    categoryId: 8,
    name: "Puffer Jacket",
    price: 130.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=500&fit=crop&hue=rotate-30",
    ],
    description:
      "Ultra-warm puffer jacket with premium down insulation. Water-resistant outer shell protects against snow and rain. Features a detachable hood, multiple pockets, and elastic cuffs. Temperature rated for extreme cold weather conditions.",
  },
  {
    id: 13,
    categoryId: 8,
    name: "Wool Overcoat",
    price: 180.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=500&fit=crop&brightness=1.1",
    ],
    description:
      "Luxurious wool overcoat for sophisticated winter style. Features a classic double-breasted design, wide lapels, and a belt for adjustable fit. Fully lined with interior pockets. Perfect for formal occasions and everyday elegance.",
  },
  {
    id: 14,
    categoryId: 8,
    name: "Knit Sweater",
    price: 75.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop&hue=rotate-45",
    ],
    description:
      "Cozy cable-knit sweater in soft merino wool blend. Features a crew neck, ribbed cuffs and hem, and a relaxed fit. Perfect for layering or wearing alone. Machine washable for easy care. Available in multiple winter colors.",
  },
  {
    id: 15,
    categoryId: 9,
    name: "Linen Shirt",
    price: 50.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=500&fit=crop&brightness=1.15",
    ],
    description:
      "Breathable linen shirt perfect for hot summer days. Features a relaxed fit, button-down collar, and chest pocket. The natural fabric keeps you cool and comfortable. Ideal for beach vacations, casual outings, or warm weather commuting.",
  },
  {
    id: 16,
    categoryId: 9,
    name: "Summer Dress",
    price: 65.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=500&fit=crop&hue=rotate-60",
    ],
    description:
      "Flowing summer dress in lightweight cotton blend. Features a flattering empire waist, adjustable straps, and a tiered skirt. The vibrant print and airy fabric make it perfect for sunny days, garden parties, and vacation getaways.",
  },
  {
    id: 17,
    categoryId: 9,
    name: "Swim Shorts",
    price: 45.0,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop&hue=rotate-120",
    ],
    description:
      "Quick-dry swim shorts with mesh lining and elastic waistband. Features side pockets and a secure back pocket with velcro closure. The water-resistant fabric dries quickly after swimming. Perfect for beach days, pool parties, and water sports.",
  },
  {
    id: 18,
    categoryId: 10,
    name: "Kids Graphic Tee",
    price: 20.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=400&h=500&fit=crop&hue=rotate-90",
    ],
    description:
      "Fun graphic t-shirt for kids featuring colorful designs. Made from soft, breathable cotton that's gentle on sensitive skin. Durable construction withstands active play and frequent washing. Available in sizes for toddlers through pre-teens.",
  },
  {
    id: 19,
    categoryId: 10,
    name: "Kids Denim Jacket",
    price: 55.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1548883354-7622d03aca27?w=400&h=500&fit=crop&brightness=1.1",
    ],
    description:
      "Classic denim jacket sized perfectly for kids. Features button closure, chest pockets, and adjustable button cuffs. Made from durable denim that softens with wear. A versatile layering piece that works for all seasons and occasions.",
  },
  {
    id: 20,
    categoryId: 10,
    name: "Kids Sneakers",
    price: 40.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=400&h=500&fit=crop&hue=rotate-45",
    ],
    description:
      "Comfortable and supportive sneakers designed for active kids. Features cushioned insoles, non-slip rubber soles, and easy velcro or lace closure. Reinforced toe caps provide extra durability. Perfect for school, sports, and everyday play.",
  },
  {
    id: 21,
    categoryId: 5,
    name: "Oversized Blazer",
    price: 110.0,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop&brightness=1.1",
    ],
    description:
      "On-trend oversized blazer with strong shoulders and a relaxed fit. Features rolled sleeves, boyfriend cut, and minimalist design. Made from premium poly-blend fabric. Perfect for creating effortlessly chic looks with jeans or dresses.",
  },
  {
    id: 22,
    categoryId: 5,
    name: "Cargo Pants",
    price: 70.0,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&h=500&fit=crop&hue=rotate-30",
    ],
    description:
      "Trendy cargo pants with multiple utility pockets. Features a mid-rise fit, tapered legs, and adjustable drawstring waist. Made from durable cotton twill. Perfect for streetwear looks and combines style with functionality.",
  },
  {
    id: 23,
    categoryId: 1,
    name: "Vintage Jeans",
    price: 80.0,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop&brightness=1.15",
    ],
    description:
      "Classic vintage-wash jeans with authentic distressing and fading. Features a comfortable straight leg fit, five-pocket design, and button fly. Made from premium denim that ages beautifully. A wardrobe essential for casual everyday style.",
  },
  {
    id: 24,
    categoryId: 1,
    name: "Casual Sneakers",
    price: 65.0,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=500&fit=crop&hue=rotate-60",
    ],
    description:
      "Versatile casual sneakers that go with everything. Features canvas upper, rubber sole, and padded collar for comfort. Classic low-top design with metal eyelets and durable laces. Perfect for daily wear, running errands, or weekend outings.",
  },
  {
    id: 25,
    categoryId: 4,
    name: "Leather Loafers",
    price: 125.0,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=500&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=500&fit=crop",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=500&fit=crop&sat=-100",
      "https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&h=500&fit=crop&brightness=1.1",
    ],
    description:
      "Premium leather loafers with timeless appeal. Hand-crafted from genuine leather with cushioned insoles and durable rubber soles. Features traditional penny loafer styling. Perfect for both business casual and smart casual occasions.",
  },
];
export { categories, products };

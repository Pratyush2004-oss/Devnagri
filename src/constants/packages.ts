export const IMAGES = [
  "https://images.unsplash.com/photo-1614088459293-5669fadc3448?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbCUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1602619026153-0a2e22f2b84b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRyYXZlbCUyMGRlc3RpbmF0aW9ufGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1719955781545-c60219441bfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1682685797857-97de838c192e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1682685797857-97de838c192e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHJhdmVsJTIwZGVzdGluYXRpb258ZW58MHx8MHx8fDA%3D",
];

const arr: number[] = [];
export const getRandomIndexedImage = (): string => {
  // get the images in random but not get the images which are already selected
  const randomIndex = Math.floor(Math.random() * IMAGES.length);
  if (arr.length > 0 && arr.includes(randomIndex)) {
    return getRandomIndexedImage();
  }
  // arr.push(randomIndex);
  return IMAGES[randomIndex];
};

export const TOURS = [
  {
    __id: "1",
    name: "Kumaun Darshan Tour Package",
    overview:
      "Embark on an enchanting 8-day, 7-night journey through the majestic hills of Kumaon, Uttarakhand, with the Devnagari Tour and Travels' 'Kumaun Darshan' package. Thoughtfully designed for families, couples, groups, and solo travelers, this tour blends adventure, spirituality, and relaxation. Starting from Haldwani, Kathgodam, or Pantnagar, you'll explore sacred temples like Kanchi Dham and Jageshwar, marvel at the mysterious Patal Bhuvaneshwar cave, witness the breathtaking Panchachuli peaks from Munsyari, and venture into the remote Darma Valley. This comprehensive package ensures a comfortable and memorable exploration of 'Devbhoomi' (the Land of Gods).",
    description:
      "<h2>Explore the Divine Beauty of Kumaon</h2>\n<p>Embark on a memorable <strong>8-day, 7-night journey</strong> with Devnagari Tour and Travels through the captivating landscapes of the Kumaon region in Uttarakhand. This 'Kumaun Darshan' tour is meticulously crafted to offer a perfect blend of spiritual pilgrimage, breathtaking natural beauty, and thrilling adventure. It's an ideal getaway for families, couples, groups, and solo travelers seeking to immerse themselves in the serene and divine atmosphere of the Himalayas. Our package, starting from Pantnagar, Kathgodam, or Haldwani, covers transport, comfortable stays, and meals, ensuring a hassle-free and enriching experience.</p>\n\n<h3>A Spiritual and Scenic Expedition</h3>\n<p>The Kumaon Himalayas are not just mountains; they are legends, stories, and the abode of gods. This tour is your gateway to exploring this sacred land, often referred to as <strong>'Devbhoomi'</strong>. Your journey begins with a visit to the revered <strong>Kanchi Dham</strong>, the ashram of Baba Neem Karoli Maharaj, a place filled with peace and spiritual energy. You will then proceed to the <strong>Chitai Golu Temple</strong>, renowned as the temple for the 'God of Justice', where devotees hang bells to have their wishes fulfilled. The spiritual trail continues to the ancient <strong>Jageshwar Dham</strong>, a cluster of over 100 stone temples dedicated to Lord Shiva, nestled in a serene deodar forest.</p>\n\n<p>The tour delves deeper into Kumaon's mystical side with a visit to the <strong>Hat Kalika Temple</strong> in Gangolihat, a powerful Shakti Peeth, and the incredible limestone cave of <strong>Patal Bhuvaneshwar</strong>. This subterranean shrine is a world in itself, with magnificent stalactite and stalagmite formations creating natural idols of various Hindu deities, offering a glimpse of all four Dhams in one place. You'll also visit the sacred town of Bageshwar, situated at the confluence of the Saryu and Gomti rivers, and pay homage at the ancient <strong>Bagnath Temple</strong>.</p>\n\n<h3>Gateway to the High Himalayas: Munsyari and Beyond</h3>\n<p>Prepare to be mesmerized as the journey takes you to <strong>Munsyari</strong>, the 'Little Kashmir' of Uttarakhand. This picturesque hamlet offers jaw-dropping, up-close views of the magnificent <strong>Panchachuli peaks</strong>. The drive itself is an experience, passing through lush tea gardens in Chaukori and the stunning Birthi Waterfall. In Munsyari, you will visit the Nanda Devi Temple, the highest temple dedicated to the goddess in the Kumaon region, and soak in the panoramic vistas.</p>\n<p>From Munsyari, the adventure continues to the border town of <strong>Dharchula</strong>, located on the banks of the Kali River, which forms the international border with Nepal. Here, you can experience a unique cross-cultural atmosphere by visiting the local market in Nepal. The route is dotted with natural wonders like the Madkot hot springs and the confluence of the Kali and Gori rivers at Jauljibi.</p>\n\n<h3>Into the Remote Valleys: Narayan Ashram and Darma Valley</h3>\n<p>The tour then takes you to the serene and remote <strong>Narayan Ashram</strong>, a spiritual and socio-educational center established in 1936, offering stunning views of the Chipla Kedar peak. This leg of the journey is for those who seek tranquility away from the tourist crowds. The true highlight for adventure enthusiasts is the expedition into the pristine <strong>Darma Valley</strong>, leading to the <strong>Panchachuli Base Camp</strong> at Dugtu village. This region is a paradise of alpine meadows, gushing waterfalls, and traditional villages like Seepu, which holds mythological significance related to Lord Shiva's journey to Adi Kailash.</p>\n\n<h3>The Heart of Kumaon: Pithoragarh and Champawat</h3>\n<p>The final leg of your journey brings you to <strong>Pithoragarh</strong>, the main city in the region, also known as 'Soar Valley'. Here, you can opt for a trek to the Dhwaj Temple for panoramic views of the surrounding peaks. The return journey is equally scenic and packed with interesting stops. You will drive through Champawat, visiting serene lakes like Tharkot Jheel and Kolidhek Jheel, and the famous Nanakmatta Dam. This comprehensive tour ensures that you witness every facet of Kumaon—from its revered temples and bustling towns to its remote, untouched valleys—leaving you with memories to cherish for a lifetime.</p>",
    itinerary: [
      {
        day: 1,
        title: "Haldwani to Gangolihat (via Jageshwar)",
        distance: "Approx. 200 km",
        details: [
          "Early morning departure from Pantnagar, Kathgodam, or Haldwani.",
          "Sightseeing at Haldwani View Point and the scenic Bheemtal lake.",
          "Visit the famous Kainchi Dham Ashram of Baba Neem Karoli Maharaj for darshan.",
          "Proceed to Chitai Golu Temple in Almora, known as 'The God of Justice'.",
          "Explore the ancient temple complex of Jageshwar Dham.",
          "Drive to Gangolihat for the overnight stay.",
        ],
        inclusions:
          "Transport (Sedan/MUV), Hotel Stay, Breakfast, Dinner & Evening Tea.",
        night_stay: "Jageshwar or Gangolihat.",
      },
      {
        day: 2,
        title: "Gangolihat to Bageshwar",
        distance: "Approx. 120 km",
        details: [
          "Morning visit to Hat Kalika Temple, a revered Shaktipeeth.",
          "Explore the mystical Patal Bhuvaneshwar cave, a unique subterranean shrine.",
          "Drive towards Bageshwar, enjoying sightseeing at Ganai Gangoli and Seraghat en route.",
          "Arrive in Bageshwar and visit the local market.",
        ],
        inclusions:
          "Transport (Sedan/MUV), Hotel Stay, Breakfast, Dinner & Evening Tea.",
        night_stay: "Bageshwar.",
      },
      {
        day: 3,
        title: "Bageshwar to Munsyari",
        distance: "Approx. 130 km",
        details: [
          "Morning prayers at the ancient Bagnath Temple and Saryu Ghat in Bageshwar.",
          "Begin the scenic drive to Munsyari.",
          "En route, enjoy the beautiful landscapes including Odyari Band, Chaukori Tea Garden, Birthi Waterfall, and Kalamuni Dhar.",
        ],
        inclusions:
          "Transport (Sedan/MUV), Hotel Stay, Breakfast, Dinner & Evening Tea.",
        night_stay: "Munsyari.",
      },
      {
        day: 4,
        title: "Munsyari to Dharchula",
        distance: "Approx. 100 km",
        details: [
          "Visit Nanda Devi Temple and enjoy spectacular views of the Panchachuli Peaks and Hansling Parvat.",
          "Explore the local market of Munsyari before driving to Dharchula.",
          "Sightseeing includes Madkot (Hot Water Spring), Bangapani Waterfalls, the confluence of Kali & Gori rivers at Jauljibi, and the Kali Temple.",
          "Visit the local market across the border in Darchula, Nepal.",
        ],
        inclusions:
          "Transport (Sedan/MUV), Hotel Stay, Breakfast, Dinner & Evening Tea.",
        night_stay: "Dharchula.",
      },
      {
        day: 5,
        title: "Dharchula to Narayan Ashram",
        duration: "Approx. 3-4 hours",
        details: [
          "Drive to the serene Narayan Ashram.",
          "Sightseeing on the way includes the India-Nepal border, Ranthi Waterfall, Thanidhar View Point, views of Chipla Kedar peaks, and Chirkila Dam.",
          "Visit the Narayan Swami Ashram and enjoy the scenic, snowy mountain views.",
        ],
        inclusions:
          "Transport (SUV & 4x4), T.R.C. Camp/Homestay, Breakfast, Dinner & Evening Tea.",
        night_stay: "Narayan Ashram.",
      },
      {
        day: 6,
        title: "Narayan Ashram to Darma Valley (Panchachuli Base Camp)",
        distance: "Approx. 60 km",
        details: [
          "Proceed towards the beautiful Darma Valley.",
          "Sightseeing includes Kanchyoti Bridge and Waterfall, Nagling, and Baling village.",
          "Reach Panchachuli Base Camp at Dugtu village.",
          "Visit Seepu Village, significant in mythology related to Adi Kailash Yatra.",
          "Option for a trek to Aadi-Aachari Taal (pond).",
        ],
        inclusions:
          "Transport (SUV & 4x4), Homestay, Breakfast, Dinner & Evening Tea.",
        night_stay: "Dugtu / Datu village.",
      },
      {
        day: 7,
        title: "Darma Valley to Pithoragarh",
        distance: "Approx. 160 km",
        details: [
          "Morning departure from Darma Valley towards Pithoragarh.",
          "Visit Jasuli Devi Park.",
          "Sightseeing en route includes Chirkila Dam, Tawaghat, Dharchula View Point, and Askot View Point.",
          "Optional 3km trek to Dhwaj Temple based on requirement.",
        ],
        inclusions:
          "Transport (Sedan/MUV), Homestay, Breakfast, Dinner & Evening Tea.",
        night_stay: "Pithoragarh.",
      },
      {
        day: 8,
        title: "Pithoragarh to Haldwani/Kathgodam/Pantnagar Drop",
        distance: "Approx. 200 km",
        details: [
          "Local sightseeing in Pithoragarh: Mostmanu Temple, Vardani View Point, Ulkadevi Temple, and Kamakhya Devi Temple.",
          "Drive towards Champawat and then to the plains.",
          "Sightseeing on the way: Tharkot Jheel, Gurna Mata Temple, Kolidhek Jheel (Lohaghat), tea gardens, Swala village, and Nanakmatta Dam.",
          "Drop-off at Pantnagar, Kathgodam, or Haldwani, marking the end of the tour.",
        ],
        inclusions: "Transport and sightseeing as per itinerary.",
      },
    ],
    images: [
      getRandomIndexedImage(),
      getRandomIndexedImage(),
      getRandomIndexedImage(),
    ],
    price: {
      standard_plan: 12000,
      deluxe_plan: 15000,
    },
    days: 8,
    places: [
      "Haldwani",
      "Bheemtal",
      "Kanchi Dham",
      "Almora",
      "Jageshwar Dham",
      "Chitai Golu",
      "Gangolihat",
      "Hatkalika",
      "Patal Bhuvaneshwar",
      "Bageshwar",
      "Bagnath",
      "Chaukori",
      "Munsyari",
      "Dharchula",
      "Narayan Ashram",
      "Darma Valley",
      "Panchachuli Base Camp",
      "Pithoragarh",
      "Lohaghat",
      "Champawat",
      "Nanakmatta",
    ],
    tour_operator: {
      name: "Devnagari Tour and Travels",
      contact_number: "9456193464",
      website: "https://devnagaritourtravels.com/",
      email:""
    },
    inclusions: [
      "Transport (Sedan/MUV/SUV/4x4 as per itinerary)",
      "Hotel / Homestay / Camp accommodation",
      "Meals: Breakfast, Dinner, and Evening Tea",
      "Local Tour Guide",
      "Medical & First Aid kit",
      "All Sightseeing as per the itinerary",
    ],
    terms_and_conditions: {
      payment: "Full payment required before departure.",
      identification:
        "Valid government-issued ID is mandatory for all travelers.",
      booking: "Bookings are non-transferable.",
      refunds: "No refunds for any unavailed inclusions.",
      luggage:
        "Travelers are responsible for their own luggage and belongings.",
      punctuality:
        "Departure time is fixed. Arrive 30 minutes prior. No refund for missed departure.",
      vehicle_ac: "AC will be switched off in hilly areas.",
      conduct: "Smoking and drinking are strictly prohibited during the tour.",
      liability:
        "The company is not responsible for accidents, injuries, or loss of property.",
      itinerary_changes:
        "Itinerary may be altered due to weather, road conditions, or other unforeseen circumstances.",
    },
    cancellation_policy:
      "A 30% advance payment is mandatory to confirm the booking. The advance amount is strictly non-refundable as the trip is organized on short notice.",
    pdf_url: "",
  },
  {
    __id: "2",
    name: "Adi Kailash Om Parvat Yatra 2025",
    overview:
      "Embark on a profound 5-day, 4-night spiritual journey to the sacred lands of Adi Kailash and Om Parvat with Devnagari Tour and Travels. This meticulously planned 'Delhi to Delhi' yatra is designed for groups, couples, families, and solo travelers seeking a divine connection in the Himalayas. The package includes transport, accommodation, meals, permits, and medical support. Witness the mystical impression of 'Aum' on Om Parvat and perform 'darshan' at Adi Kailash, the replica of Mount Kailash. This tour offers a unique opportunity to experience the spiritual heart of the Kumaon Himalayas.",
    description:
      "<h2>A Divine Pilgrimage to the Land of Shiva</h2>\n<p>Join us for a deeply spiritual <strong>5-day, 4-night expedition</strong> to the revered peaks of <strong>Adi Kailash and Om Parvat</strong>. This yatra, organized by Devnagari Tour and Travels, is a sacred pilgrimage designed to take you into the heart of the Himalayas, to the very land where Lord Shiva is believed to reside. Our all-inclusive package, running from <strong>Delhi to Delhi</strong>, is perfect for devout pilgrims, adventure seekers, and nature lovers alike. We cater to all types of travelers, including groups, families, and solo participants, ensuring a safe, comfortable, and spiritually fulfilling experience.</p>\n\n<h3>The Sacred Peaks: Adi Kailash and Om Parvat</h3>\n<p>The journey's primary destinations are two of the most sacred peaks in the Indian Himalayas. <strong>Om Parvat</strong> is a breathtaking natural wonder where the pattern of snow deposition on the mountain face miraculously resembles the sacred symbol 'Aum' (ॐ). Witnessing this divine inscription is a moment of profound spiritual significance. The yatra then proceeds to <strong>Adi Kailash</strong>, also known as Chota Kailash. This majestic peak is a stunning replica of the great Mount Kailash in Tibet and is revered as one of Lord Shiva's ancient abodes. The opportunity to have 'darshan' and touch the feet ('charan sparsh') of this holy mountain is a lifetime achievement for devotees.</p>\n\n<h3>Journey Through Kumaon's Heartland</h3>\n<p>Your pilgrimage begins in Delhi, traveling through the scenic landscapes of the Kumaon region. The route itself is dotted with places of interest and natural beauty. You will pass through the plains and visit the <strong>Nanakmatta Dam</strong> before ascending into the hills via Champawat and Lohaghat. The first night's halt is in the beautiful town of <strong>Pithoragarh</strong>. From there, you will travel to the border town of <strong>Dharchula</strong>, located at the confluence of the Kali and Gori rivers, which serves as the gateway to the yatra. The journey from Dharchula is a thrilling drive through rugged terrain, passing waterfalls and scenic river valleys en route to <strong>Gunji</strong>, the base for your visits to the sacred peaks.</p>\n\n<h3>An All-Inclusive Spiritual Experience</h3>\n<p>We take care of all the logistics so you can focus on your spiritual experience. The package includes all transportation, comfortable stays in hotels and village homestays, and nutritious meals. We also handle the essential <strong>inner line permits</strong> required to enter this restricted border area. An experienced local guide and driver will accompany you, ensuring your journey is smooth and insightful. With fixed group departures available in <strong>May, June, September, and October</strong>, you can choose a time that best suits you to undertake this journey of a lifetime.",
    itinerary: [
      {
        day: 1,
        title: "Delhi to Pithoragarh",
        details: [
          "Early morning pickup from Delhi and drive to Pithoragarh.",
          "Sightseeing en route includes Nanakmatta Dam, Champawat, and Lohaghat.",
          "Check into the hotel in Pithoragarh for an overnight stay.",
        ],
        inclusions: "Transport, Hotel stay, Dinner & Evening tea.",
        night_stay: "Pithoragarh.",
      },
      {
        day: 2,
        title: "Pithoragarh to Dharchula",
        details: [
          "After checkout, visit Mostamanu Temple and Vardani View Point.",
          "Drive to Dharchula.",
          "Sightseeing on the way includes Ogla, Askot, and the sangam (confluence) of the Kali and Gori rivers.",
          "Visit the Nepal border and the local market in Nepal.",
          "Check into the hotel in Dharchula.",
        ],
        inclusions: "Transport, Hotel stay, Breakfast, Dinner & Evening tea.",
        night_stay: "Dharchula.",
      },
      {
        day: 3,
        title: "Dharchula to Adi Kailash Darshan & Gunji Stay",
        details: [
          "Early morning drive towards Adi Kailash.",
          "Sightseeing includes Ranthi Waterfall, Tawaghat, and Gunji.",
          "Perform 'Darshan' and 'Charan Sparsh' at Adi Kailash.",
          "Return to Gunji village and check into a homestay for the night.",
        ],
        inclusions:
          "Transport, Homestay, Inner line permit, Breakfast, Dinner & Evening tea.",
        night_stay: "Gunji Village.",
      },
      {
        day: 4,
        title: "Om Parvat Darshan & Drive to Pithoragarh",
        details: [
          "Proceed for Om Parvat Yatra in the morning.",
          "Have darshan and perform puja at Om Parvat.",
          "Sightseeing also includes the Kali Mata Temple.",
          "Drive back to Pithoragarh and check into the hotel.",
        ],
        inclusions: "Transport, Hotel stay, Breakfast, Dinner & Evening tea.",
        night_stay: "Pithoragarh.",
      },
      {
        day: 5,
        title: "Pithoragarh to Delhi Drop",
        details: [
          "Early morning departure from Pithoragarh.",
          "Drive back to Delhi.",
          "En route, visit Gurna Mata Temple and Kolidhek Jheel.",
          "Drop-off in Delhi, marking the end of the yatra.",
        ],
        inclusions: "Transport, Breakfast & Evening tea.",
        night_stay: "N/A",
      },
    ],
    images: [
      getRandomIndexedImage(),
      getRandomIndexedImage(),
      getRandomIndexedImage(),
    ],
    price: {
      standard_plan: 27000,
      deluxe_plan: 30000,
    },
    days: 5,
    places: [
      "Nanakmatta",
      "Champawat",
      "Lohaghat",
      "Pithoragarh",
      "Dharchula",
      "Sangam (Kali & Gori River)",
      "Nepal Border Market",
      "Ranthi Waterfall",
      "Tawaghat",
      "Gunji",
      "Adi Kailash",
      "Om Parvat",
      "Kali Mata Temple",
    ],
    tour_operator: {
      name: "Devnagari Tour and Travels",
      contact_number: "9456193464",
      website: "devnagaritourtravels.com",
      email: "info@devnagaritourtravels.com",
    },
    inclusions: [
      "Transport",
      "Hotel and Homestay Accommodation",
      "Meals as per itinerary",
      "All Sightseeing",
      "Inner Line Permit",
      "Medical & First Aid Support",
      "Experienced Driver and Local Tour Guide",
    ],
    packing_list: [
      "Warm Clothing: Thermal layers, fleece jackets, heavy down jacket, waterproof/windproof outer layers.",
      "Footwear: Sturdy, waterproof trekking boots with good ankle support.",
      "Accessories: Warm socks, gloves, woolen cap, and scarf.",
      "Personal Care: Sunscreen, lip balm, moisturizer, and personal medications.",
      "Documents & Cash: Valid government-issued ID, necessary permits, and sufficient cash.",
      "Other Essentials: Sunglasses, a headlamp or flashlight, and a reusable water bottle.",
    ],
    terms_and_conditions: {
      payment: "Full payment must be completed before the trip departure.",
      identification: "A valid government-issued ID is mandatory for boarding.",
      booking: "Bookings are non-transferable.",
      refunds:
        "No refunds will be issued for any inclusions not availed by the traveler.",
      luggage:
        "Travelers are responsible for their own luggage and personal belongings.",
      punctuality:
        "Departure times are fixed; anyone missing the bus will not be eligible for a refund.",
      vehicle_ac: "AC will be turned off in hilly regions for safety.",
      conduct: "Smoking and drinking are strictly prohibited during the tour.",
      liability:
        "The company is not responsible for accidents, injuries, or changes to the itinerary due to unforeseen circumstances.",
    },
    cancellation_policy:
      "A 30% advance payment is mandatory to confirm the booking. This advance amount is strictly non-refundable.",
    pdf_url: "",
  },
  {
    __id: "3",
    name: "Munsiyari/Khaliya Top Tour Package",
    overview:
      "Discover the breathtaking beauty of the Kumaon Himalayas with this 3-day, 2-night tour to Munsiyari and Khaliya Top, starting from Pithoragarh. Ideal for adventure seekers and nature lovers, this package combines scenic drives with an exhilarating trek. Experience the majestic Panchachuli peaks from Munsiyari, a serene hill station, and then trek to the stunning meadows of Khaliya Top for panoramic views of snow-covered Himalayan giants. With options for standard and deluxe plans, this tour offers a perfect blend of comfort and adventure.",
    description:
      "<h2>Experience the Majesty of Munsiyari and Khaliya Top</h2>\n<p>Embark on a spectacular <strong>3-day, 2-night adventure</strong> into the heart of Uttarakhand's Kumaon region with our Munsiyari and Khaliya Top tour. This package, starting and ending in Pithoragarh, is perfectly crafted for those who wish to witness the raw, untouched beauty of the Himalayas. <strong>Munsiyari</strong>, a picturesque hill station, serves as the gateway, offering mesmerizing views of the iconic Panchachuli peaks and a tranquil environment filled with waterfalls, temples, and pristine lakes.</p>\n\n<h3>The Khaliya Top Trek: A Walk in the Clouds</h3>\n<p>The highlight of this tour is the trek to <strong>Khaliya Top</strong>, a magnificent alpine meadow renowned for its accessibility and stunning 360-degree views of the greater Himalayan range. This trek is considered ideal for both beginners and seasoned trekkers, offering a rewarding experience without being overly strenuous. As you ascend, the landscape unfolds into a breathtaking panorama of snow-laden peaks, including <strong>Panchachuli, Nanda Devi, and Rajrambha</strong>. The experience of camping under a starlit sky at Khaliya Top and waking up to a glorious sunrise over the mountains is truly unforgettable.</p>\n\n<h3>A Journey of Scenic Wonders</h3>\n<p>The journey to and from Munsiyari is as captivating as the destination itself. The drive from Pithoragarh takes you through winding mountain roads with sights like the confluence of the <strong>Kali and Gori rivers</strong>, the hot springs at Madkot, and the magnificent <strong>Birthi Waterfall</strong>. During your stay in Munsiyari, you will visit the sacred Nanda Devi Temple and Gayatri Ashram, soaking in the spiritual ambiance of the region. This tour is an all-inclusive experience, covering your transport, accommodation in hotels and camps, meals, and the guidance of an experienced local expert, allowing you to immerse yourself fully in the Himalayan splendor.",
    itinerary: [
      {
        day: 1,
        title: "Pithoragarh to Munsiyari",
        details: [
          "Early morning departure from Pithoragarh.",
          "Scenic drive with sightseeing at Satgarh, Askot, and the sangam of the Kali and Gori rivers.",
          "Visit the hot water springs at Madkot before reaching Munsiyari.",
          "In Munsiyari, visit the Nanda Devi Temple and enjoy views of the Panchachuli peaks and Hansling mountain.",
          "Explore Gayatri Ashram and local areas before checking into the hotel.",
        ],
        inclusions: "Transport, Hotel Stay, Lunch, and Dinner.",
        night_stay: "Munsiyari.",
      },
      {
        day: 2,
        title: "Munsiyari to Khaliya Top Trek",
        details: [
          "After an early checkout, begin the trek to Khaliya Top.",
          "Enjoy the stunning scenery and views of snowy mountains as you ascend.",
          "Reach the Khaliya Top zero point for clear views of the Panchachuli, Nandadevi, and Rajrambha mountain peaks.",
          "Witness a beautiful sunset over the Himalayas.",
          "Overnight stay in a camp or TRC Guesthouse with a bonfire.",
        ],
        inclusions:
          "Tour Guide, Breakfast, Dinner, Camping/Stay (TRC Guesthouse), Bonfire.",
        night_stay: "Khaliya Top.",
      },
      {
        day: 3,
        title: "Khaliya Top to Munsiyari/Pithoragarh",
        details: [
          "Wake up early to witness a spectacular sunrise over the peaks.",
          "Descend from Khaliya Top and reach Munsiyari.",
          "Begin the drive back to Pithoragarh.",
          "Stop to visit the famous Birthi Waterfall en route.",
          "The tour concludes upon arrival in Pithoragarh.",
        ],
        inclusions: "Transport, Breakfast, and Lunch.",
        night_stay: "N/A",
      },
    ],
    images: [
      getRandomIndexedImage(),
      getRandomIndexedImage(),
      getRandomIndexedImage(),
    ],
    price: {
      standard_plan: 12000,
      deluxe_plan: 15000,
    },
    days: 3,
    places: [
      "Pithoragarh",
      "Munsiyari",
      "Khaliya Top",
      "Birthi Waterfall",
      "Madkot (Hot Water Spring)",
      "Sangam (Kali & Gori River)",
      "Nanda Devi Temple",
    ],

    tour_operator: {
      name: "Devnagari Tour and Travels",
      contact_number: "9456193464",
      website: "https://devnagaritourtravels.com/",
      email: "info@devnagaritourtravels.com",
    },
    inclusions: [
      "Transport",
      "Accommodation (Hotel & Camping/Guesthouse)",
      "Meals as per itinerary",
      "Tour Guide for trek",
      "Medical & First Aid kit",
      "All Sightseeing as per the itinerary",
    ],
    packing_list: [
      "Warm Clothing: Thermal layers, fleece jackets, heavy down jacket.",
      "Outerwear: Waterproof and windproof outer layers.",
      "Footwear: Waterproof trekking boots with good ankle support.",
      "Accessories: Warm socks, gloves, woolen cap, and scarf.",
      "Personal Care: Sunscreen, lip balm, moisturizer, personal medications.",
      "Documents & Cash: Valid ID and sufficient cash.",
      "Other Essentials: Sunglasses, headlamp or flashlight, reusable water bottle.",
    ],
    terms_and_conditions: {
      payment: "Full payment for the trip must be completed before departure.",
      identification:
        "All travelers must carry and present a valid government-issued ID.",
      booking: "Bookings are non-transferable.",
    },
    cancellation_policy:
      "A 30% advance payment of the total trip cost is mandatory at the time of booking to confirm your participation. This advance amount is strictly non-refundable.",
    pdf_url: "",
  },
  {
    __id: "4",
    name: "Adi Kailash Om Parvat Yatra 2025 (from Haldwani)",
    overview:
      "Embark on a divine 4-day, 3-night spiritual yatra to Adi Kailash and Om Parvat, starting from Pantnagar, Kathgodam, or Haldwani. This tour is perfectly suited for groups, couples, families, and solo travelers wanting to visit the sacred land of Lord Shiva in the Pithoragarh region. With fixed group departures available in May, June, September, and October, the package includes all essential services like transport, stay, meals, and permits for a seamless pilgrimage. Experience the spiritual aura of these holy peaks and create memories that will last a lifetime.",
    description:
      "<h2>A Sacred Journey to the Abode of Shiva from Haldwani</h2>\n<p>This <strong>4-day, 3-night Adi Kailash and Om Parvat Yatra</strong> is a specially curated spiritual tour beginning from the foothills of Kumaon at Pantnagar, Kathgodam, or Haldwani. Designed by Devnagari Tour & Travels, this pilgrimage is an invitation to explore the wonders of Adi Kailash and create lasting memories. The tour is ideal for all kinds of travelers, whether you are in a group, with family, a couple, or traveling solo. We offer both standard and deluxe arrangements to cater to your preferences.</p>\n\n<h3>Experience Divine Wonders</h3>\n<p>The yatra takes you to two of the most revered sites in the Himalayas. You will have the opportunity to perform 'darshan' and 'puja' at <strong>Om Parvat</strong>, a mountain peak where the natural formation of snow creates a perfect 'Aum' symbol. The journey continues to <strong>Adi Kailash</strong>, where pilgrims can perform 'darshan' and 'Charan Sparsh' (touching the feet) of the holy mountain. This all-encompassing tour also includes visits to the Kali Mata temple, the vibrant local market in Nepal, and scenic spots like the confluence of the Kali and Gori rivers.</p>\n\n<h3>Seamless and All-Inclusive Pilgrimage</h3>\n<p>We ensure a comfortable and hassle-free journey by managing all the logistics. The tour package includes transportation, accommodation in hotels and a village homestay, and most meals. We also take care of the crucial <strong>inner line permits</strong> required for this region. An experienced local guide and driver will accompany you, ensuring your safety and providing insights into the local culture and traditions. With fixed departure dates in the pleasant months of <strong>May, June, September, and October</strong>, this yatra is an accessible way to fulfill your spiritual aspirations.</p>",
    itinerary: [
      {
        day: 1,
        title: "Haldwani/Kathgodam to Dharchula",
        details: [
          "Early morning pickup from Pantnagar, Kathgodam (Haldwani) and drive to Dharchula.",
          "Sightseeing en route includes Nanakmatta dam, Champawat, lohaghat, Pithoragarh, and the Sangam of the Kali and Gori rivers at Joljibi.",
          "Check into the hotel upon arrival in Dharchula.",
        ],
        inclusions: "Transport, Hotel stay, dinner & evening tea.",
        night_stay: "Dharchula.",
      },
      {
        day: 2,
        title: "Dharchula to Adi Kailash Darshan & Gunji Stay",
        details: [
          "After an early morning checkout, drive towards Adi Kailash.",
          "Sightseeing on the way includes Ranthi waterfall, Tawaghat, and Gunji.",
          "Perform 'Darshan' and 'Charan Sparsh' at Adi Kailash.",
          "Drive to Gunji village and check into a local homestay for the night.",
        ],
        inclusions:
          "Transport, Home stay, inner line permit, Breakfast, dinner, & evening tea.",
        night_stay: "Gunji Village.",
      },
      {
        day: 3,
        title: "Om Parvat Darshan & Drive to Pithoragarh",
        details: [
          "In the morning, proceed for the Om Parvat yatra.",
          "Have 'Darshan' and perform 'puja' at Om Parvat.",
          "Sightseeing includes Om Parvat, Kali Mata temple, and a visit to the Nepal border and local market.",
          "Drive to Pithoragarh and check into the hotel.",
        ],
        inclusions: "Transport, hotel stay, breakfast, dinner & evening tea.",
        night_stay: "Pithoragarh.",
      },
      {
        day: 4,
        title: "Pithoragarh to Haldwani/Kathgodam Drop",
        details: [
          "Early morning departure for Pantnagar, Kathgodam (Haldwani).",
          "On the way, visit Gurna Mata temple and Kolidhek Jheel.",
          "The tour concludes with the drop-off at Pantnagar, Kathgodam (Haldwani).",
        ],
        inclusions: "Transport, Breakfast & evening tea.",
        night_stay: "N/A",
      },
    ],
    images: [
      getRandomIndexedImage(),
      getRandomIndexedImage(),
      getRandomIndexedImage(),
    ],
    price: {
      standard_plan: 22000,
      deluxe_plan: 25000,
    },
    days: "4 Days / 3 Nights",
    places: [
      "Nanakmatta",
      "Champawat",
      "Pithoragarh",
      "Sangam of Kali and Gori river",
      "Nepal border",
      "Nepal market",
      "Dharchula",
      "Ranthi water fall",
      "Tawaghat",
      "Gunji",
      "Adi Kailash",
      "Om Parvat",
      "Kali Mata temple",
    ],
    tour_operator: {
      name: "Devnagari Tour and Travels",
      contact_number: "9456193464",
      website: "devnagaritourtravels.com",
      email: "info@devnagaritourtravels.com",
    },
    inclusions: [
      "Tour Packages",
      "Stay & Meals",
      "Sightseeing",
      "Inner line permit",
      "Medical & First Aid",
      "Transport",
      "Tour Guide",
    ],
    packing_list: [
      "Warm Clothing: Thermal layers, fleece jackets, a heavy down jacket, waterproof and windproof outer layers.",
      "Sturdy Footwear: Waterproof trekking boots with good ankle support.",
      "Accessories: Warm socks, gloves, a woolen cap, and a scarf.",
      "Personal Care: Sunscreen, lip balm, moisturizer, and personal medications.",
      "Essentials: A valid ID, necessary permits, and sufficient cash.",
      "Other: Sunglasses, a headlamp or flashlight, and a reusable water bottle.",
    ],
    terms_and_conditions: {
      payment: "Full payment for the trip must be completed before departure.",
      identification:
        "All travelers must carry and present a valid government-issued ID.",
      booking: "Bookings are non-transferable.",
      refunds:
        "No refunds will be issued for any inclusions not availed by the traveler.",
      luggage:
        "Travelers are responsible for their luggage and personal belongings.",
    },
    cancellation_policy:
      "To confirm your participation, a 30% advance payment of the total trip cost is mandatory at the time of booking. Please note, the advance amount is strictly non-refundable.",
    pdf_url: "",
  },
];

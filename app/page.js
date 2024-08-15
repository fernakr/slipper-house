import Image from "next/image";
import leftWall from "./images/left-wall.jpg";
import rightWall from './images/right-wall.jpg';

export default function Home() {

  // when link is clicked blur the focus in a react app
  // https://stackoverflow.com/questions/61502527/when-link-is-clicked-blur-the-focus-in-a-react-app


  const locations = [
    {
      label: "Left Wall",
      image: leftWall,
      id: "left-wall"
    },
    {
      label: "Right Wall",
      image: rightWall,
      id: "right-wall"
    }
  ]
  const schedule = [
    {
      "time": "8:00 PM",
      "presenter": "Sandy",
      "Content": "Event Announcements",
      "duration": "10 min"
    },
    {
      "time": "8:10 PM",
      "presenter": "Lauren Xu",
      "Content": "Poetry",
      "duration": "10 min"
    },
    {
      "time": "",
      "presenter": "Aly Rosa",
      "Content": "Singing",
      "duration": "15 min"      
    },
    {
      "time": "",
      "presenter": "Bhumika Purohit",
      "Content": "Prose Reading",
      "duration": "5 min"
    },
    {
      "time": "",
      "presenter": "Tiff Yo",
      "Content": "Prose Reading",
      "duration": "5 min"
    },
    {
      "time": "",
      "presenter": "Norman Tran",
      "Content": "Poetry and Group Meditation",
      "duration": "15 min"
    }
  ];

  const team = [
    {
      "Name": "Project Team",
      "members": [
        {
          "Name": "Sandy Lam",
          "Role": "Project Lead"
        },
        {
          "Name": "Kristine Fernandez",
          "Role": "Gallery Lead"
        },
        {
          "Name": "Marisa Chang",
          "Role": "Gallery Coordinator"
        },
        {
          "Name": "Bryant Peng",
          "Role": "Marketing Lead"
        },
        {
          "Name": "Eriane Austria",
          "Role": "Marketing Coordinator"
        },
        {
          "Name": "Cathy Le",
          "Role": "Graphic Designer"
        },
        {
          "Name": "Tiff Yo",
          "Role": "Event Consultant"
        },
        {
          "Name": "Kim",
          "Role": "Owner at Gia Dinh Goods"
        },
        {
          "Name": "Khanh",
          "Role": "Owner at Gia Dinh Goods"
        },

      ],

    },
   
    {
      "Name": "Poster Team",
      "Role": "",
      members: [
        {
          "Name": "Cathy Le",
          "Role": ""
        },
        {
          "Name": "Eriane Austria",
          "Role": ""
        },
        {
          "Name": "Jasmine C",
          "Role": ""
        },
        {
          "Name": "Amy Xin",
          "Role": ""
        },
        {
          "Name": "Kai Ardn",
          "Role": ""
        },
        {
          "Name": "Ariel S",
          "Role": ""
        }        
      ]
    },
   {
      "Name": "Gallery Support Team",
      "Role": "",
      members: [
        {
          "Name": "Nathan Dinh",
          "Role": "Gallery Specialist / Kristine 2"
        },
        {
          "Name": "Jasmine C",
          "Role": "Gallery Specialist"
        },
        {
          "Name": "Charlie Gao + Robert",
          "Role": "Gallery Specialist"
        },
        {
          "Name": "Lauren Xu",
          "Role": "Gallery Specialist"
        },
      ],
      
    },
   
    {
      "Name": "Day of Volunteers",
      "Role": "",
      members: [
        {
          "Name": "Casey Tang",
          "Role": "Photographer"
        },
        {
          "Name": "Norman Tran",
          "Role": "MC"
        },
        {
          "Name": "Julie Do",
          "Role": ""
        },
        {
          "Name": "Kai Ardn",
          "Role": ""
        },
        {
          "Name": "Jasmine C",
          "Role": ""
        },
        {
          "Name": "Melysia C.",
          "Role": ""
        },
        {
          "Name": "Amy Xin",
          "Role": ""
        },
        {
          "Name": "Thomas Nguyen",
          "Role": ""
        },
        {
          "Name": "Mel Nguyen",
          "Role": ""
        },
        {
          "Name": "Tiffany Vela",
          "Role": ""
        },
        {
          "Name": "Misa Nazareno",
          "Role": ""
        },
      ]
    },
  
  ]
  const artists =
  [
    {
      "name": "aly rosa",
      "contact": "@alyadoration",
      "theme": "Our living room windows were always open in the apartment I grew up in. Even during the rainy season on Mt. Makiling, the cool breeze would just fill up space. Against the backdrop of rain, OPM would play on the radio in our kitchen, and Pilita Corrales (a.k.a Asia's Queen of Songs) was a distinguished voice any Filipino could recognize. Dahil Sa Iyo is a song of hers that I first listened to in my childhood living room when I was 10 years old. I learned this song for my Lola who passed in 2009.",
      "piece_1_title": "Untitled",
      "piece_1_medium": "Song/Performance",
      "piece_1_description": "",
      "piece_1_location": "Performance",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Amy Xin",
      "contact": "amyxinart.com / @amys.art.n.stuff",
      "theme": "",
      "piece_1_title": "House;Home",
      "piece_1_medium": "Oil on canvas",
      "piece_1_description": "",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Ariel Sagastume",
      "contact": "@hapi.hapa.art",
      "theme": "I interpret the idea of home and the items I had in my parents' home or my current home. How a living room/home should include the things that have peacefulness or significance for you. Living room in the literal context of the room or rooms that provide a sense of living and existence.",
      "piece_1_title": "사랑 -Love, 행운 -Luck, 생활 -Life",
      "piece_1_medium": "Acrylic on traditional dance fan, calligraphy\nink on canvas",
      "piece_1_description": "사랑 ~Love\nInspired by the 雙喜 Double Happiness and Chinese red knot hangings I have carried with me vast distance and always put in our living room, the theme of Love as part of home life is shown with my kissing carp symbolic of connection. Carp have been a longtime favorite of mine as well as showing the Yin and Yang energies I believe is essential to maintaining harmony in a loving home. The living room is a wonderful space to coexist with your loved ones and share fond memories like laughing and slurping on noodles together. Featured are 盤長結 Pan Chang Knot tassels symbolizing there is no beginning or end, simply the ever flowing energy of love and life.\n\n행운 ~Luck\nSurfing on the waves of time and energy, the two gold ingot boats ride out the ebbs and flows. 福 Luck is on their side as the sun points them in the right direction. Life is all about charting your course and staying true to your inner strength. Our journey begins in our childhood home and continues in new ways to each place we live. Feng Shui was a staple of my childhood home life and I’m proud to say I keep these traditions alive through my own practice. Having good luck in a home brings me warm and cozy feels. From red envelopes and hanging red knots to gold coins for good fortune, lunar new year celebrations were all part of the living room festivities and invite so much joy into our home.\n\n생활 ~Life\nDrawing from my own 부채 Buchae, Korean Traditional Fans used in martial arts and fan dance, I harmonize the two flavors of my childhood, traditional Korean and Chinese fan elements to show how life is a beautiful dance of culture and harmony. Buchae are well known for their beautiful peony flower designs that radiate royalty and serenity. Kept in our home dojang, it was always a love of mine to work with the fans my parents passed down to me and learn various techniques and movements. Featured is my 노리개 tassel worn on my hanbok with double crane for long, happy marriage and longevity. Both Chinese fan dance and 부채춤 Buchaechum, Korean fan dance, continues to bring me so much joy during festivals and celebrations with their graceful yet powerful energies. \n\nThank you for taking this journey of Love, Luck, and Life with me! May you have many blessings along your journey! \n감사합니다\n\n谢谢",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Ben Aqua",
      "contact": "@b3naqua on all socials",
      "theme": "When I was thinking of what feels like \"living room\" & cozy vibes, hoodies and kimchi instantly came to mind. So why not make something that can do both? Hoodies are a warm blanket of comfort and protection, while kimchi instantly makes me feel connected to my mom & my Korean heritage.",
      "piece_1_title": "Kimchi Hoodie",
      "piece_1_medium": "Photography, sublimation print on textile",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Bhumika Purohit",
      "contact": "@pour.your.art.out.loves",
      "theme": "I interpreted the theme of the \"living room\" as a symbol of togetherness and community. The living room, traditionally the heart of a home, is where people gather to share experiences, connect, and create lasting memories. It’s a space that invites comfort and intimacy, allowing individuals to come together and engage in meaningful conversations, celebrate milestones, or simply enjoy each other's company.",
      "piece_1_title": "The Weight of Second Chances",
      "piece_1_medium": "Prose",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "Community",
      "piece_2_medium": "Acrylic",
      "piece_2_description": "",
      "piece_2_location": "right-wall",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "Fly",
      "piece_3_medium": "Mixed medium",
      "piece_3_description": "",
      "piece_3_location": "right-wall",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Bryant Peng",
      "contact": "@brza88",
      "theme": "a living room is a place of comfort. that's how i feel about the local Chinese grocery store my mom used to take me to - before the chains drove them out of business - as well as their sister restaurant, which thankfully survived the pandemic and is thriving to this day. as an Austin native, i wanted to commemorate these places that were a large part of *my* home growing up",
      "piece_1_title": "RIP ASIA MARKET, LONG LIVE ASIA CAFE",
      "piece_1_medium": "Screen print on textile",
      "piece_1_description": "When my parents first moved to Austin in the 90s, it was rough trying to find Asian groceries. Then Asia Market opened, and it instantly became a staple in the Asian community as well as my mom's weekly routine.\nAt one point they opened a cafeteria in the back, and it was so popular that it turned into a restaurant next door called Asia Cafe. I had countless meals there, from family dinners on the weekend to special occasions in the private dining rooms. It's still open 7 days a week.\nAsia Market wasn't so lucky. They couldn't keep up after H-Mart and 99 Ranch came to town in 2018, and when I dropped by in 2022 I saw they were gone for good.\nI designed this commemorative tee as a memento to remember Asia Market. The sticker is a quote from asiamarketeatery.com, their original website.",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "TRUE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Cathy Le",
      "contact": "thecathyle.com / @thecathyle",
      "theme": "The living room, to me, is a sanctuary of time where life's quieter moments unfold, transforming the mundane into the meaningful. As a silent yet attentive witness, it captures the tapestry of our everyday experiences, watching our victories, defeats, and the simplicity of just being. To explore this theme, I have chosen to dissect time itself through the humble living room clock, embedding it with hidden meanings and a story waiting to be unraveled by the hero of the journey: you.",
      "piece_1_title": "A Hero's Journey",
      "piece_1_medium": "Acrylic, ink, paper, digital story",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Cindy Nguyen",
      "contact": "@cindyinthewild",
      "theme": "My interpretation of a living room extends beyond, weaving together real and imagined objects, fleeting memories, and references to places I've called home. From Houston to DC to Seattle, I carried fragments with me from place to place—even things I could not physically take with me. Sunrises at the beach. The street I crossed every morning with my dog. The plants I gave away before moving. The view of the moon from the last apartment. As I make my home in Austin, I bring all of these with me.",
      "piece_1_title": "dreaming about jackson street",
      "piece_1_medium": "Digital illustration, giclée print",
      "piece_1_description": "Sometimes I like to remember the feeling of being in the places I used to call home. This piece puts together real and imagined objects that have moved with me from place, blurring together the memories of each home together.",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "TRUE",
      "piece_2_title": "galveston on my mind",
      "piece_2_medium": "Digital illustration, giclée print",
      "piece_2_description": "I love the feeling of when I see something familiar in a new light. This piece includes elements of my childhood home: the yellow curtains, the window guard pattern, the way that sunsets and sunrises filter through. These elements are nostalgic yet become more distant and strange to me over time.",
      "piece_2_location": "right-wall",
      "piece_2_for_sale": "TRUE",
      "piece_3_title": "suburban nights",
      "piece_3_medium": "Digital illustration, giclée print",
      "piece_3_description": "When I think about what makes a cozy home, I think of my dog Rem, the view of the moon, and a warm lamp.",
      "piece_3_location": "right-wall",
      "piece_3_for_sale": "TRUE"
    },
    {
      "name": "Eriane Austria",
      "contact": "erianeaustria.com",
      "theme": "A living room, to me, is a place that feels lived-in and evokes comfort, familiarity, and togetherness. I thought about how I still associate home with where my family is even though I've technically moved out many years ago. In my work, I view my living room as the spaces and moments my family and I have shared together while also exploring feelings of in-betweenness with places, my Filipina American identity, and people in my life.",
      "piece_1_title": "Pink Slumber Party",
      "piece_1_medium": "Mixed medium",
      "piece_1_description": "",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "In Between",
      "piece_2_medium": "Mixed medium",
      "piece_2_description": "",
      "piece_2_location": "right-wall",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "Jelly's Window Time",
      "piece_3_medium": "Mixed medium",
      "piece_3_description": "",
      "piece_3_location": "right-wall",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Kelly Zhu",
      "contact": "@kellyzhuphoto",
      "theme": "In my family, the dining room was an extension of our living room and it’s where we found a sense of togetherness and comfort. When thinking about the theme, this photo immediately came to mind. It was taken in 2011 during the annual Ghost Festival in Taiwan. It was so special to have my family come together to pay respects to our ancestors. Looking back, I feel a sense of appreciation for my grandma, her dining room will always be a memorable space for us to gather, eat, and celebrate.",
      "piece_1_title": "Ghost Festival Preparations 2011, Keelung, Taiwan",
      "piece_1_medium": "Photography",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Kristine Fernandez",
      "contact": "kristinefernandez.com / @24hrpizzadotcom",
      "theme": "To me living room encompasses subjects like family and belonging, which bring up both positive feelings as well as some conflicting feelings around these ideas. Both of the pieces I created for slipper house have some joy to them but they also have a bit of wistfulness and exploration and self-discovery.",
      "piece_1_title": "Bagoong",
      "piece_1_medium": "Gouache on paper with foam, prose",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "Through rose-colored glasses",
      "piece_2_medium": "Goauche on paper with color gel sheet",
      "piece_2_description": "",
      "piece_2_location": "right-wall",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Lauren Ying Xu",
      "contact": "@Laurxu_",
      "theme": "A cozy safe space with loved ones",
      "piece_1_title": "Various Titles",
      "piece_1_medium": "Poetry",
      "piece_1_description": "",
      "piece_1_location": "Performance",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Marlon Hedrick",
      "contact": "",
      "theme": "The living room is a sacred space in that, in its context, each person, individually and collectively, defines themselves continuously, in a singular manner and in relation to one another, through the lens of a very simple yet grave question—what does it mean to be important to somebody?",
      "piece_1_title": "the last christmas before my father died\nthe last christmas before Chuck died",
      "piece_1_medium": "Video, poetry, original music composition",
      "piece_1_description": "",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Mavyn Vu",
      "contact": "mavyn.studio / @mmav.mp4",
      "theme": "The objects that decorate a living room are visualizations of memory -- particularly of family members. In many Vietnamese households, there are traditional altars set up with images of past deceased family members, with bowls of fruit and sticks of incense set up around. I wanted to take that concept of memory in living spaces and include the idea of honoring/mourning/wondering about not presently deceased selves, but past selves, particularly the past selves of immigrant parents.",
      "piece_1_title": "Would you know this face if it came back to you",
      "piece_1_medium": "Mixed media",
      "piece_1_description": "",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Meah Lin",
      "contact": "meahlindesign.com",
      "theme": "",
      "piece_1_title": "Paper Boxes",
      "piece_1_medium": "Interactive activity",
      "piece_1_description": "",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "Three Sisters",
      "piece_2_medium": "Colored pencils",
      "piece_2_description": "",
      "piece_2_location": "right-wall",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Melissa Nguyen",
      "contact": "adoptjubi@gmail.com",
      "theme": "",
      "piece_1_title": "dear mama",
      "piece_1_medium": "Prose",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "dinner with my mom",
      "piece_2_medium": "Prose",
      "piece_2_description": "",
      "piece_2_location": "left-wall",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Misa Nazareno",
      "contact": "@takeonmisa",
      "theme": "I interpreted as being back home the Philippines, its warmth and the many things that represent it in terms of food, nature and culture.",
      "piece_1_title": "Doing my pennants",
      "piece_1_medium": "Felt and thread",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Nathan Dinh",
      "contact": "nathanhdinh.weebly.com",
      "theme": "Traditionally, the living room is where you hold guests or do activities. But, as someone that lives by themselves and rarely has guests I feel I do not utilize the space very much. When reflecting on how I personally use the living room space in my home, I associated it with resting. My couch is immediately next to my front door. So, when I return home after a tiring day I would not make it to my bed and end up on my couch.",
      "piece_1_title": "5:30PM",
      "piece_1_medium": "Oil on panel",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Norman Tran",
      "contact": "@normantran",
      "theme": "I have a memory of my dad meditating in our living room. That image of him in his final weeks inspired this piece.",
      "piece_1_title": "Never",
      "piece_1_medium": "Poetry",
      "piece_1_description": "",
      "piece_1_location": "Performance",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "sandy lam",
      "contact": "@soundlysandy",
      "theme": "a cozy place to hang with the homies",
      "piece_1_title": "couch",
      "piece_1_medium": "Prose",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Thomas Nguyễn",
      "contact": "@thomaseatsdinner",
      "theme": "",
      "piece_1_title": "Sourdough",
      "piece_1_medium": "Photography",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Tiffany Vela DBA Weila Art",
      "contact": "@weila.art",
      "theme": "",
      "piece_1_title": "Living Room Seasons: Couches of my Life",
      "piece_1_medium": "Acrylic on paper",
      "piece_1_description": "Read clockwise\nAge 0~12: Memories of childhood infected by the sickly sweetness of nostalgia. As appealing as the bakery window display that I almost forget about the stomachaches that followed.\nAge 15~22: An era of rumination, painful memories, exploration, substance abuse, little self-care or worth. A traumatized cocoon of myself yet to emerge.\nAge 28~beyond: Embracing and owning my colors, knowing what I want and acting upon it. A period of comforts, pleasure, eclecticism, and pushing the boundaries of my own potential.\nAge 23~27: Beginnings of emergence. Finding color in my life, both figuratively and literally in my surroundings. Discovery, getting to know the self, forgiveness, and ambition.",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Tâm Lê",
      "contact": "@tam_le",
      "theme": "My piece is called \"Girl Dinner\" which, when done really right, happens in the living room. My girl dinners are an amalgamation of popcorn, chips, and candy—whatever I can scrounge from the pantry. They are an absolute party for my tastebuds, but do very little for my body. Similarly, the dining set I have here is a delight to the eyes, but offers very little functionality to someone who actually wants to eat.",
      "piece_1_title": "Girl Dinner",
      "piece_1_medium": "Ceramic",
      "piece_1_description": "",
      "piece_1_location": "left-wall",
      "piece_1_for_sale": "FALSE",
      "piece_2_title": "",
      "piece_2_medium": "",
      "piece_2_description": "",
      "piece_2_location": "",
      "piece_2_for_sale": "FALSE",
      "piece_3_title": "",
      "piece_3_medium": "",
      "piece_3_description": "",
      "piece_3_location": "",
      "piece_3_for_sale": "FALSE"
    },
    {
      "name": "Zoee Xiao",
      "contact": "zoeexiao.com",
      "theme": "Living room to me is a cozy and social space for the family to hang out and connect. It is also where guests spend most of their time when visiting. As a result, it usually has the most interesting decoration of the whole house, which reflects the hosts' style. So I added paintings reflecting elements I wished my house would have growing up.",
      "piece_1_title": "Baby's Living Room Corner",
      "piece_1_medium": "Acrylic on canvas",
      "piece_1_description": "",
      "piece_1_location": "right-wall",
      "piece_1_for_sale": "TRUE",
      "piece_2_title": "Tropical Fish Tank",
      "piece_2_medium": "Watercolor on paper",
      "piece_2_description": "",
      "piece_2_location": "right-wall",
      "piece_2_for_sale": "TRUE",
      "piece_3_title": "That Luxury Indoor Rockery",
      "piece_3_medium": "Watercolor on paper",
      "piece_3_description": "",
      "piece_3_location": "right-wall",
      "piece_3_for_sale": "TRUE"
    }
  ]
  const menu = [
    {
      "label": "program",
      "id": "program",
      "subMenu": [
        {
          "label": "about slipper house",
          "id": "slipper-house"
        },
        {
          "label": "artists",
          "id": "artists"
        },
        {
          "label": "schedule",
          "id": "schedule"
        },
        {
          "label": "slipper house team",
          "id": "slipper-house-team"
        }
      ]
    },
    {
      "label": "about slipper assembly",
      "id": "about"
    }
  ]
  return (
    <main className="text-center p-8 justify-center home">
      <div className=" max-w-prose pb-14 m-auto">
        <h1 id="top">
          <span className="block text-base">slipper assembly presents</span>          
          <span className="block">slipper house</span>
        </h1>
        <hr />
        <h2>menu</h2>
        { menu.map((menuItem, index) => (
          <ul key={ index } className="no-list">
            <li>
              <a className="text-lg font-bold" href={`#${menuItem.id} `}>{menuItem.label}</a>
              <ul className="no-list mb-2">
                {menuItem.subMenu && menuItem.subMenu.map((subMenuItem, index) => (
                  <li key={ index }>
                    <a href={`#${subMenuItem.id} `} >{subMenuItem.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        ))}
        {/* <ul className="no-list menu">
          <li>
            <a href="#program" >program</a>
            <ul className="no-list">
              <li>
                <a href="#slipper-house">about slipper house</a>
              </li>
              <li>
                <a href="#artists">artists</a>
              </li>
              <li>
                <a href="#schedule">schedule</a>
              </li>
              <li>
                <a href="#slipper-house-team">slipper house team</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about">about slipper assembly</a>
          </li>
        </ul> */}
        <hr />
        <h2 id="program">program</h2>
        <h3 id="slipper-house">about slipper house</h3>
        <ul className="no-list">
          <li>the goal of slipper house is to provide an <strong>accessible, inclusive, welcoming</strong> space for slipper assembly members to share their art</li>
          <li className="mt-2"><strong>non-traditional</strong> gallery experience – a space to uplift the slipper community</li>
          </ul>
        <h3>theme</h3>  
        <strong className="text-lg">Living Room</strong>
        <ul className="no-list">
          <li>House / Home</li>
          <li>Belonging / Community</li>
          <li>Coziness / Comfort</li>
        </ul>                              

        <h3 id="artists">artists</h3>
      
        <ul className="no-list">
          {artists.map((artist, index) => (
            <li key={ index }>
              <a href={`#${artist.name} `}>{artist.name}</a>
            </li>
          ))

          }
        </ul>      
        
        <div id="for-sale" className="bg-orange-50 p-4 my-8 text-sm">
          <p >Pieces are marked for sale if artist is interested in selling. </p><p className="mt-2">Please use the contact information + the piece title listed to inquire about the piece.</p>
        </div>
        { artists.map((artist, index) => {
          const pieces = [];
          if (artist.piece_1_title) {
            pieces.push({
              title: artist.piece_1_title,
              medium: artist.piece_1_medium,
              description: artist.piece_1_description,
              location: artist.piece_1_location,
              for_sale: artist.piece_1_for_sale
            });
          }
          if (artist.piece_2_title) {
            pieces.push({
              title: artist.piece_2_title,
              medium: artist.piece_2_medium,
              description: artist.piece_2_description,
              location: artist.piece_2_location,
              for_sale: artist.piece_2_for_sale
            });
          }
          if (artist.piece_3_title) {
            pieces.push({
              title: artist.piece_3_title,
              medium: artist.piece_3_medium,
              description: artist.piece_3_description,
              location: artist.piece_3_location,
              for_sale: artist.piece_3_for_sale

            });
          }
          return (
            <div key={ index }>
              <h4 id={artist.name}>{artist.name}</h4>
              <p>{artist.contact}</p>
              
              <div className="text-base mt-1 mb-4" dangerouslySetInnerHTML={
                      {__html: '<p>' + artist.theme.replace(/\n/g, '</p><p class="mt-1">') + '</p>'}}></div>
              { pieces.map((piece, index) => {

                const location = locations.find(location => location.id === piece.location);
                
                return (
                  <div key={ index } className="mt-3">
                    <h5 dangerouslySetInnerHTML={{__html:piece.title.replace(/\n/g, '<br/>') }}></h5>
                    <p className="text-sm">                      
                      {piece.medium}
                    </p>
                    <p className="italic text-sm" >
                      {piece.location === 'Performance' ? <a href="#schedule">Performance</a> : 
                        location ? <a href={location.image.src} >
                          {location.label }
                        </a> : ''}
                        { piece.for_sale && <span className="color-gray-100 text-sm"> / <a href="#for-sale">For sale</a></span>}    
                    </p>
                    
                    { piece.description && <div className="mt-1 text-sm" dangerouslySetInnerHTML={
                      {__html: '<p>' + piece.description.replace(/\n/g, '</p><p>') + '</p>'}}></div>}                
                  </div>
                );
              })}
              { index !== artists.length - 1 && <hr />}
            </div>
            ); 
        })}        
        <hr />
        <h3 id="schedule">schedule</h3>
        <p className="text-lg"><em>performances start at 8:00pm</em></p>
        <ul className="no-list">
          {schedule.map((event, index) => (
            <li key={ index } className="mt-6 leading-5">
                <strong className="block mb-1">{event.presenter}</strong>
                {event.Content} ({event.duration})
            </li>
          ))

          }
        </ul>
        <hr />
        <h3 id="slipper-house-team">slipper house team</h3>
        { team.map((group, index) => (
          <div key={ index }>
            <h4 className="mt-4 text-lg">{group.Name}</h4>
            { group.members.map((member, index) => (
              <div key={ index }>
                <p>
                  <span className="font-semibold	">{member.Name}</span>                  
                  
                  {member.Role ? <em> - {member.Role}</em> : ''}

                </p>
              </div>
            ))}
          </div>
        ))}
        <hr />
        {/* <h3>layout</h3>
        <h4 className="mt-5 mb-1">left wall</h4>
        <div><Image src={ leftWall} alt="slipper house logo" className="max-w-prose w-full m-auto border"/></div>      
        <h4 className="mt-5 mb-1">right wall</h4>
      <div><Image src={ rightWall} alt="slipper house logo" className="max-w-prose w-full m-auto border"/></div> */}
        
        <h2 id="about">about slipper assembly</h2>
        {/* <h3>what is it?</h3> */}
        <p><em>slipper assembly</em> is a home for Asian creatives and makers in Austin.<br /> We create cozy spaces for kinship and self-expression.<br />
        <strong>Co-founders: Bryant, Tiff, Kristine, &amp; Benson</strong>
          
        </p>
        <p className="mt-3"><a href="/slipper-house/community-guidelines">Read our community guidelines</a>          </p>
      </div>
      
  
        <a href="#top" className="fixed bottom-0 left-0 p-1 px-2 w-full text-right bg-stone-900 text-white">Back to Top</a>
    </main>
  );
}

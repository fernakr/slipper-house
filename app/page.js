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
  const artists =[
    {
      "name": "aly rosa",
      "contact": "@alyadoration",
      "theme": "Our living room windows were always open in the apartment I grew up in. Even during the rainy season on Mt. Makiling, the cool breeze would just fill up space. Against the backdrop of rain, OPM would play on the radio in our kitchen, and Pilita Corrales (a.k.a Asia's Queen of Songs) was a distinguished voice any Filipino could recognize. Dahil Sa Iyo is a song of hers that I first listened to in my childhood living room when I was 10 years old. I learned this song for my Lola who passed in 2009.",
      "piece1_title": "Untitled",
      "piece1_medium": "Song",
      "piece1_description": "",
      "piece1_location": "Performance",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Amy Xin",
      "contact": "amyxinart.com / @amys.art.n.stuff",
      "theme": "",
      "piece1_title": "House;Home",
      "piece1_medium": "Oil on canvas",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Ariel Sagastume",
      "contact": "@hapi.hapa.art",
      "theme": "I interpret the idea of home and the items I had in my parents' home or my current home. How a living room/home should include the things that have peacefulness or significance for you. Living room in the literal context of the room or rooms that provide a sense of living and existence.",
      "piece1_title": "사랑 -Love, 행운 -Luck, 생활 -Life",
      "piece1_medium": "3 painted paper hand fans",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Ben Aqua",
      "contact": "@b3naqua on all socials",
      "theme": "When I was thinking of what feels like \"living room\" & cozy vibes, hoodies and kimchi instantly came to mind. So why not make something that can do both? Hoodies are a warm blanket of comfort and protection, while kimchi instantly makes me feel connected to my mom & my Korean heritage.",
      "piece1_title": "Kimchi Hoodie",
      "piece1_medium": "Photography, textile",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Bhumika Purohit",
      "contact": "@pour.your.art.out.loves",
      "theme": "I interpreted the theme of the \"living room\" as a symbol of togetherness and community. The living room, traditionally the heart of a home, is where people gather to share experiences, connect, and create lasting memories. It’s a space that invites comfort and intimacy, allowing individuals to come together and engage in meaningful conversations, celebrate milestones, or simply enjoy each other's company.",
      "piece1_title": "The Weight of Second Chances",
      "piece1_medium": "Prose",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "Community",
      "piece2_medium": "Acrylic",
      "piece2_description": "",
      "piece2_location": "right-wall",
      "piece3_title": "Fly",
      "piece3_medium": "Mixed medium",
      "piece3_description": "",
      "piece3_location": "right-wall"
    },
    {
      "name": "Bryant Peng",
      "contact": "@brza88",
      "theme": "a living room is a place of comfort. that's how i feel about the local Chinese grocery store my mom used to take me to - before the chains drove them out of business - as well as their sister restaurant, which thankfully survived the pandemic and is thriving to this day. as an Austin native, i wanted to commemorate these places that were a large part of *my* home growing up",
      "piece1_title": "RIP ASIA MARKET, LONG LIVE ASIA CAFE",
      "piece1_medium": "Framed t-shirt",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Cathy Le",
      "contact": "thecathyle.com / @thecathyle",
      "theme": "The living room, to me, is a sanctuary of time where life's quieter moments unfold, transforming the mundane into the meaningful. As a silent yet attentive witness, it captures the tapestry of our everyday experiences, watching our victories, defeats, and the simplicity of just being. To explore this theme, I have chosen to dissect time itself through the humble living room clock, embedding it with hidden meanings and a story waiting to be unraveled by the hero of the journey: you.",
      "piece1_title": "A Hero's Journey",
      "piece1_medium": "Acrylic paint, ink, paper, digital story",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Cindy Nguyen",
      "contact": "@cindyinthewild",
      "theme": "My interpretation of a living room extends beyond, weaving together real and imagined objects, fleeting memories, and references to places I've called home. From Houston to DC to Seattle, I carried fragments with me from place to place—even things I could not physically take with me. Sunrises at the beach. The street I crossed every morning with my dog. The plants I gave away before moving. The view of the moon from the last apartment. As I make my home in Austin, I bring all of these with me.",
      "piece1_title": "dreaming about jackson street",
      "piece1_medium": "Giclee art print",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "galveston on my mind",
      "piece2_medium": "Giclee art print",
      "piece2_description": "",
      "piece2_location": "right-wall",
      "piece3_title": "suburban nights",
      "piece3_medium": "Giclee art print",
      "piece3_description": "",
      "piece3_location": "right-wall"
    },
    {
      "name": "Eriane Austria",
      "contact": "erianeaustria.com",
      "theme": "A living room, to me, is place that feels lived-in and evokes comfort, familiarity, and togetherness. I thought about how I still associate home with where my family is even though I've technically moved out many years ago. In my work, I view my living room as the spaces and moments my family and I have shared together while also exploring the feeling of in-betweenness.",
      "piece1_title": "Pink Slumber Party",
      "piece1_medium": "Mixed medium",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "In Between",
      "piece2_medium": "Mixed medium",
      "piece2_description": "",
      "piece2_location": "right-wall",
      "piece3_title": "Jelly's Window Time",
      "piece3_medium": "Mixed medium",
      "piece3_description": "",
      "piece3_location": "right-wall"
    },
    {
      "name": "Kelly Zhu",
      "contact": "@kellyzhuphoto",
      "theme": "In my family, the dining room was an extension of our living room and it’s where we found a sense of togetherness and comfort. When thinking about the theme, this photo immediately came to mind. It was taken in 2011 during the annual Ghost Festival in Taiwan. It was so special to have my family come together to pay respects to our ancestors. Looking back, I feel a sense of appreciation for my grandma, her dining room will always be a memorable space for us to gather, eat, and celebrate.",
      "piece1_title": "Ghost Festival Preparations 2011, Keelung, Taiwan",
      "piece1_medium": "Photography",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Kristine Fernandez",
      "contact": "kristinefernandez.com / @24hrpizzadotcom",
      "theme": "To me living room encompasses subjects like family and belonging, which bring up both positive feelings as well as some conflicting feelings around these ideas. Both of the pieces I created for slipper house have some joy to them but they also have a bit of wistfulness and exploration and self-discovery.",
      "piece1_title": "Bagoong",
      "piece1_medium": "Gouache on paper attached to foam with prose",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "Through rose-colored glasses",
      "piece2_medium": "Goauche on paper with color gel sheet",
      "piece2_description": "",
      "piece2_location": "right-wall",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Lauren Ying Xu",
      "contact": "@Laurxu_",
      "theme": "A cozy safe space with loved ones",
      "piece1_title": "Various Titles",
      "piece1_medium": "Poetry",
      "piece1_description": "",
      "piece1_location": "Performance",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Marlon Hedrick",
      "contact": "",
      "theme": "The living room is a sacred space in that, in its context, each person, individually and collectively, defines themselves continuously, in a singular manner and in relation to one another, through the lens of a very simple yet grave question—what does it mean to be important to somebody?",
      "piece1_title": "the last christmas before my father died\nthe last christmas before Chuck died",
      "piece1_medium": "Mixed media (Video, poetry, original music composition)",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Mavyn Vu",
      "contact": "mavyn.studio / @mmav.mp4",
      "theme": "The objects that decorate a living room are visualizations of memory -- particularly of family members. In many Vietnamese households, there are traditional altars set up with images of past deceased family members, with bowls of fruit and sticks of incense set up around. I wanted to take that concept of memory in living spaces and include the idea of honoring/mourning/wondering about not presently deceased selves, but past selves, particularly the past selves of immigrant parents.",
      "piece1_title": "Would you know this face if it came back to you",
      "piece1_medium": "Mixed media",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Meah Lin",
      "contact": "meahlindesign.com",
      "theme": "",
      "piece1_title": "Paper Boxes",
      "piece1_medium": "Interactive activity",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "Three Sisters",
      "piece2_medium": "Colored pencils",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Melissa Nguyen",
      "contact": "adoptjubi@gmail.com",
      "theme": "",
      "piece1_title": "dear mama",
      "piece1_medium": "Prose",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "dinner with my mom",
      "piece2_medium": "Prose",
      "piece2_description": "",
      "piece2_location": "left-wall",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Misa Nazareno",
      "contact": "@takeonmisa",
      "theme": "I interpreted as being back home the Philippines, its warmth and the many things that represent it in terms of food, nature and culture.",
      "piece1_title": "Doing my pennants",
      "piece1_medium": "Felt and thread",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Nathan Dinh",
      "contact": "nathanhdinh.weebly.com",
      "theme": "Traditionally, the living room is where you hold guests or do activities. But, as someone that lives by themselves and rarely has guests I feel I do not utilize the space very much. When reflecting on how I personally use the living room space in my home, I associated it with resting. My couch is immediately next to my front door. So, when I return home after a tiring day I would not make it to my bed and end up on my couch.",
      "piece1_title": "5:30PM",
      "piece1_medium": "Oil on panel",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Norman Tran",
      "contact": "@normantran",
      "theme": "I have a memory of my dad meditating in our living room. That image of him in his final weeks inspired this piece.",
      "piece1_title": "Never",
      "piece1_medium": "Poetry",
      "piece1_description": "",
      "piece1_location": "Performance",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "sandy lam",
      "contact": "@soundlysandy",
      "theme": "a cozy place to hang with the homies",
      "piece1_title": "couch",
      "piece1_medium": "Prose",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Thomas Nguyễn",
      "contact": "@thomaseatsdinner",
      "theme": "",
      "piece1_title": "Sourdough",
      "piece1_medium": "Photography",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Tiffany Vela DBA Weila Art",
      "contact": "@weila.art",     
      "theme": "Read clockwise\r\nAge 0~12: Memories of childhood infected by the sickly sweetness of nostalgia. As appealing as the bakery window display that I almost forget about the stomachaches that followed.\r\nAge 15~22: An era of rumination, painful memories, exploration, substance abuse, little self-care or worth. A traumatized cocoon of myself yet to emerge.\r\nAge 28~beyond: Embracing and owning my colors, knowing what I want and acting upon it. A period of comforts, pleasure, eclecticism, and pushing the boundaries of my own potential.\r\nAge 23~27: Beginnings of emergence. Finding color in my life, both figuratively and literally in my surroundings. Discovery, getting to know the self, forgiveness, and ambition.", 
      "piece1_title": "Living Room Seasons: Couches of my Life\r\n",
      "piece1_medium": "Acrylic on canvas (4 framed pieces)",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Tâm Lê",
      "contact": "@tam_le",
      "theme": "My piece is called \"Girl Dinner\" which, when done really right, happens in the living room. My girl dinners are an amalgamation of popcorn, chips, and candy—whatever I can scrounge from the pantry. They are an absolute party for my tastebuds, but do very little for my body. Similarly, the dining set I have here is a delight to the eyes, but offers very little functionality to someone who actually wants to eat.",
      "piece1_title": "Girl Dinner",
      "piece1_medium": "Ceramics",
      "piece1_description": "",
      "piece1_location": "left-wall",
      "piece2_title": "",
      "piece2_medium": "",
      "piece2_description": "",
      "piece2_location": "",
      "piece3_title": "",
      "piece3_medium": "",
      "piece3_description": "",
      "piece3_location": ""
    },
    {
      "name": "Zoee Xiao",
      "contact": "zoeexiao.com",
      "theme": "Living room to me is a cozy and social space for the family to hang out and connect. It is also where guests spend most of their time when visiting. As a result, it usually has the most interesting decoration of the whole house, which reflects the hosts' style. So I added paintings reflecting elements I wished my house would have growing up.",
      "piece1_title": "Baby's Living Room Corner",
      "piece1_medium": "Acrylic on canvas",
      "piece1_description": "",
      "piece1_location": "right-wall",
      "piece2_title": "Tropical Fish Tank",
      "piece2_medium": "Watercolor on paper",
      "piece2_description": "",
      "piece2_location": "right-wall",
      "piece3_title": "That Luxury Indoor Rockery",
      "piece3_medium": "Watercolor on paper",
      "piece3_description": "",
      "piece3_location": "right-wall"
    }
  ];
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
    <main className="text-center p-8 justify-center">
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
          <li><strong>non-traditional</strong> gallery experience – a space to uplift the slipper community</li>
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
        <hr/>
        { artists.map((artist, index) => {
          const pieces = [];
          if (artist.piece1_title) {
            pieces.push({
              title: artist.piece1_title,
              medium: artist.piece1_medium,
              description: artist.piece1_description,
              location: artist.piece1_location
            });
          }
          if (artist.piece2_title) {
            pieces.push({
              title: artist.piece2_title,
              medium: artist.piece2_medium,
              description: artist.piece2_description,
              location: artist.piece2_location
            });
          }
          if (artist.piece3_title) {
            pieces.push({
              title: artist.piece3_title,
              medium: artist.piece3_medium,
              description: artist.piece3_description,
              location: artist.piece3_location
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
                    </p>
                    { piece.description && <div className="mt-1 text-sm" dangerouslySetInnerHTML={
                      {__html: '<p>' + piece.description.replace(/\n/g, '</p><p>') + '</p>'}}></div>}                
                  </div>
                );
              })}
              <hr />
            </div>
            ); 
        })}
        <h3 id="schedule">schedule</h3>
        <p className="text-lg"><em>performances start at 8:00pm</em></p>
        <ul className="no-list">
          {schedule.map((event, index) => (
            <li key={ index } className="mt-5 leading-5">
                <strong className="block">{event.presenter}</strong>
                {event.Content} ({event.duration})
            </li>
          ))

          }
        </ul>
        <hr />
        <h3 id="slipper-house-team">slipper house team</h3>
        Team here
        <hr />
        {/* <h3>layout</h3>
        <h4 className="mt-5 mb-1">left wall</h4>
        <div><Image src={ leftWall} alt="slipper house logo" className="max-w-prose w-full m-auto border"/></div>      
        <h4 className="mt-5 mb-1">right wall</h4>
      <div><Image src={ rightWall} alt="slipper house logo" className="max-w-prose w-full m-auto border"/></div> */}
        
        <h2 id="about">about <br />slipper assembly</h2>
        {/* <h3>what is it?</h3> */}
        <p><em>slipper assembly</em> is a home for Asian creatives and makers in Austin.<br /> We create cozy spaces for kinship and self-expression.<br />
        <strong>Co-founders: Bryant, Tiff, Kristine, &amp; Benson</strong>
          
        </p>
      </div>
      
  
        <a href="#top" className="fixed bottom-0 left-0 p-1 px-2 w-full text-right bg-stone-900 text-white">Back to Top</a>
    </main>
  );
}

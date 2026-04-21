export type TrustResult = "Significant" | "Normal" | "Decrease";
export type TimeOfDay = "Morning" | "Afternoon" | "Evening" | "Late Night";

export type DialogueChoice = {
  text: string | string[];
  result: TrustResult;
};

export type TrustEvent = {
  id: string;
  type: "Invites" | "Wish" | "Fun" | "Random";
  title: string;
  location: string;
  time?: TimeOfDay[];
  image?: string;
  choices?: DialogueChoice[];
};

export type Agent = {
  id: string;
  name: string;
  fullName?: string;
  rarity: "S" | "A";
  attribute: "Electric" | "Ether" | "Fire" | "Ice" | "Physical";
  specialAttribute?: string;
  specialty: "Anomaly" | "Attack" | "Defense" | "Rupture" | "Stun" | "Support";
  birthDate: string;
  species: string;
  faction: string;
  color: string;
  images: string[];
  version: string;
  isNew?: boolean;
  isWip?: boolean;
  events: TrustEvent[];
};

export const agentsData: Agent[] = [
  {
    id: "alice",
    name: "Alice",
    fullName: "Alice Thymefield",
    rarity: "S",
    attribute: "Physical",
    specialty: "Anomaly",
    birthDate: "August 30",
    species: "Thiren",
    faction: "Spook Shack",
    color: "#f6e2c0",
    images: [
      "/agent/Alice_Thymefield.webp",
      "/outfit/Alice_Thymefield_Sea_of_Thyme.webp",
    ],
    version: "2.1",
    events: [
      // INVITATION EVENTS
      {
        id: "alice_thymefield_inv_01",
        type: "Invites",
        title: "Ah, Very Well Then",
        location: "Lumina Square",
        choices: [
          {
            text: "You've got a sharp eye for detail!",
            result: "Normal",
          },
          {
            text: "I know, because I've been watching you too.",
            result: "Significant",
          },
        ],
      },
      {
        id: "alice_thymefield_inv_02",
        type: "Invites",
        title: "Bad Student's Adventure",
        location: "Fantasy Resort",
        choices: [
          { text: "Feels like being exiled.", result: "Normal" },
          { text: "Feels like I'm ruling the world.", result: "Normal" },
          {
            text: "Feels like we're the only ones left in the world.",
            result: "Significant",
          },
        ],
      },
      {
        id: "alice_thymefield_inv_03",
        type: "Invites",
        title: "First Flea Market",
        location: "Failume Heights",
        choices: [
          { text: "Buy an old fan to keep cool.", result: "Significant" },
          { text: "Buy symmetrical accessories.", result: "Significant" },
          { text: "Buy an old radio.", result: "Normal" },
        ],
      },
      {
        id: "alice_thymefield_inv_04",
        type: "Invites",
        title: "Rich Lady's Outer Ring Debut?!",
        location: "Blazewood",
        choices: [
          {
            text: "She's more at home with ghost stories than motorcycles.",
            result: "Normal",
          },
          { text: "I want to see Alice in biker gear.", result: "Normal" },
          {
            text: "You can have your very own symmetrical motorcycle!",
            result: "Significant",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "alice_thymefield_wish_01",
        type: "Wish",
        title: "Tropical Fish and You",
        location: "Fantasy Resort - Aquarium",
      },
      {
        id: "alice_thymefield_wish_02",
        type: "Wish",
        title: "Pinnacle of Symmetrical Aesthetics",
        location: "Starloop Tower - VIP Lounge",
      },
      {
        id: "alice_thymefield_wish_03",
        type: "Wish",
        title: "Urban Legend Check",
        location: "Ballet Twins Road - Sculpture",
      },
      {
        id: "alice_thymefield_wish_04",
        type: "Wish",
        title: "Statue Renovation Project",
        location: "Port Elpis - Sea God Statue",
      },
      {
        id: "alice_thymefield_wish_05",
        type: "Wish",
        title: "Rabbit Tails",
        location: "Lumina Square - Overpass",
      },
      // FUN EVENTS
      {
        id: "alice_thymefield_fun_01",
        type: "Fun",
        title: "Metro Station - Closed Gate",
        location: "Ballet Twins Road",
      },
      {
        id: "alice_thymefield_fun_02",
        type: "Fun",
        title: "Beach - Stage",
        location: "Fantasy Resort",
      },
      {
        id: "alice_thymefield_fun_03",
        type: "Fun",
        title: "Boutique",
        location: "Fantasy Resort",
      },
      {
        id: "alice_thymefield_fun_04",
        type: "Fun",
        title: "Summer's Key",
        location: "Fantasy Resort",
      },
      {
        id: "alice_thymefield_fun_05",
        type: "Fun",
        title: "Quality Tea",
        location: "Lumina Square",
      },
      {
        id: "alice_thymefield_fun_06",
        type: "Fun",
        title: "Officer Mewmew",
        location: "Lumina Square",
      },
      {
        id: "alice_thymefield_fun_07",
        type: "Fun",
        title: "SREC Poster",
        location: "Lumina Square",
      },
      {
        id: "alice_thymefield_fun_08",
        type: "Fun",
        title: "Tater King",
        location: "Port Elpis",
      },
      {
        id: "alice_thymefield_fun_09",
        type: "Fun",
        title: "Lighthouse - Stairs",
        location: "Port Elpis",
      },
      // RANDOM ENCOUNTERS
      {
        id: "alice_thymefield_rnd_01",
        type: "Random",
        title: "Plaza Walkway",
        location: "Ballet Twins Road",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: [
              "It's not worth it. Just drop it.",
              "I want to see Alice safe and sound",
            ],
            result: "Normal",
          },
          {
            text: "Better leave it here",
            result: "Normal",
          },
          {
            text: "I can take it home, you know",
            result: "Significant",
          },
        ],
      },
      {
        id: "alice_thymefield_rnd_02",
        type: "Random",
        title: "Seagaze Road",
        location: "Fantasy Resort",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "I'm not so scared when I'm with you",
            result: "Normal",
          },
          {
            text: "I don't think it's that scary",
            result: "Normal",
          },
          {
            text: "Let's scream together at the scary parts",
            result: "Significant",
          },
        ],
      },
      {
        id: "alice_thymefield_rnd_03",
        type: "Random",
        title: "Mystic Wares",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "She encountered a talking Ethereal",
            result: "Decrease",
          },
          {
            text: "She wanted to pass the necklace on to someone who loves symmetry",
            result: "Significant",
          },
          {
            text: "She created another perfectly symmetrical accessory",
            result: "Normal",
          },
        ],
      },
      {
        id: "alice_thymefield_rnd_04",
        type: "Random",
        title: "Seagaze Road",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Sorry, I was trying to greet you normally...",
            result: "Normal",
          },
          {
            text: "Sorry! I just really wanted to see your reaction...",
            result: "Significant",
          },
          {
            text: "Sorry! It just seemed like it'd be fun, so...",
            result: "Decrease",
          },
        ],
      },
      {
        id: "alice_thymefield_rnd_05",
        type: "Random",
        title: "Dew Gardening Shop",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "How you're aristocratic on the surface.",
            result: "Decrease",
          },
          {
            text: "How you're down-to-earth at your core.",
            result: "Normal",
          },
          {
            text: "How you face your responsibilities with courage.",
            result: "Significant",
          },
        ],
      },
      {
        id: "alice_thymefield_rnd_06",
        type: "Random",
        title: "Port Promenade",
        location: "Port Elpis",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: ["I really like your eyes.", "Your eyes are special."],
            result: "Decrease",
          },
          {
            text: [
              "I really like your eyes.",
              "Your gaze is clear like crystal.",
            ],
            result: "Decrease",
          },
          {
            text: [
              "I really like your eyes.",
              "Looking into your eyes always gives me strength.",
            ],
            result: "Normal",
          },
          {
            text: "Nobody has to be perfect.",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "anby",
  //   name: "Anby",
  //   fullName: "Anby Demara",
  //   attribute: "Electric",
  //   specialty: "Stun",
  //   faction: "Cunning Hares",
  //   rarity: "A",
  //   color: "#ffabc6",
  //   images: ["/agent/Anby_Demara.webp", "/agent/Soldier_0_-_Anby.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "anton",
  //   name: "Anton",
  //   fullName: "Anton Ivanov",
  //   attribute: "Electric",
  //   specialty: "Attack",
  //   faction: "Belobog Heavy Industries",
  //   rarity: "A",
  //   color: "#504b42",
  //   images: ["/agent/Anton_Ivanov.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  {
    id: "aria",
    name: "Aria",
    rarity: "S",
    attribute: "Ether",
    specialty: "Anomaly",
    birthDate: "June 07",
    species: "Intelligent Construct",
    faction: "Angels of Delusion",
    color: "#ff93a7",
    images: ["/agent/Aria.webp", "/outfit/Aria_Discordant_Note.webp"],
    version: "2.6",
    events: [
      // INVITATION EVENTS
      {
        id: "aria_inv_01",
        type: "Invites",
        title: "Exclusive Reward",
        location: "Lumina Square",
        choices: [
          {
            text: "Richard Teamilk, Rich in Tea, Rich in Milk...",
            result: "Normal",
          },
        ],
      },
      {
        id: "aria_inv_02",
        type: "Invites",
        title: "Performing a Divination",
        location: "Failume Heights",
        choices: [{ text: "(Choices don't matter)", result: "Significant" }],
      },
      {
        id: "aria_inv_03",
        type: "Invites",
        title: "Seaside Stroll",
        location: "Fantasy Resort",
        choices: [{ text: "(Choices don't matter)", result: "Significant" }],
      },
      {
        id: "aria_inv_04",
        type: "Invites",
        title: "Secret Audience",
        location: "Blazewood",
        choices: [{ text: "(Choices don't matter)", result: "Significant" }],
      },
      // WISH EVENTS
      {
        id: "aria_wish_01",
        type: "Wish",
        title: "Memories of the Past",
        location: "Lumina Square - Capsule Hotel",
      },
      {
        id: "aria_wish_02",
        type: "Wish",
        title: "Soul Resonance",
        location: "Fantasy Resort - Stage Area",
      },
      {
        id: "aria_wish_03",
        type: "Wish",
        title: "Singing Haven",
        location: "Blazewood - Cliffside",
      },
      {
        id: "aria_wish_04",
        type: "Wish",
        title: "A Dream Stage",
        location: "Sixth Street - 404 Error",
      },
      {
        id: "aria_wish_05",
        type: "Wish",
        title: "Echoes from the Alley",
        location: "Lumina Square - Alley",
      },
      // FUN EVENTS
      {
        id: "aria_fun_01",
        type: "Fun",
        title: "Cheesetopia",
        location: "Blazewood",
      },
      {
        id: "aria_fun_02",
        type: "Fun",
        title: "Fantasy Boutique Shop",
        location: "Fantasy Resort",
      },
      {
        id: "aria_fun_03",
        type: "Fun",
        title: "Floatie Ice Cream",
        location: "Fantasy Resort",
      },
      {
        id: "aria_fun_04",
        type: "Fun",
        title: "Archipelago Shoot",
        location: "Fantasy Resort",
      },
      {
        id: "aria_fun_05",
        type: "Fun",
        title: "Bangboo Charging Station at the Parking Lot",
        location: "Lumina Square",
      },
      {
        id: "aria_fun_06",
        type: "Fun",
        title: "Beaverson Beauty Salon",
        location: "Lumina Square",
      },
      {
        id: "aria_fun_07",
        type: "Fun",
        title: "Traffie Bangboo near Mewmew",
        location: "Lumina Square",
      },
      {
        id: "aria_fun_08",
        type: "Fun",
        title: "SREC Wall Ad",
        location: "Lumina Square",
      },
      {
        id: "aria_fun_09",
        type: "Fun",
        title: "Waterfall Soup",
        location: "Sixth Street",
      },
      {
        id: "aria_fun_10",
        type: "Fun",
        title: "Convenience Store",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "aria_rnd_01",
        type: "Random",
        title: "Souvenir Shop",
        location: "Fantasy Resort",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "aria_rnd_02",
        type: "Random",
        title: "141 Convenience Store",
        location: "Lumina Square",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "aria_rnd_03",
        type: "Random",
        title: "Old Duyi's Physiotheraphy Studio",
        location: "Lumina Square",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "aria_rnd_04",
        type: "Random",
        title: "Public Security Office",
        location: "Lumina Square",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "aria_rnd_05",
        type: "Random",
        title: "Port Promenade",
        location: "Port Elpis",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "aria_rnd_06",
        type: "Random",
        title: "Godfinger",
        location: "Sixth Street",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "astra",
  //   name: "Astra",
  //   fullName: "Astra Yao",
  //   attribute: "Ether",
  //   specialty: "Support",
  //   faction: "Stars of Lyra",
  //   rarity: "S",
  //   color: "#ce4841",
  //   images: ["/agent/Astra_Yao.webp", "/outfit/Astra_Yao_Chandelier.webp"],
  //   version: "1.5",
  //   events: [],
  // },
  {
    id: "banyue",
    name: "Banyue",
    rarity: "S",
    attribute: "Fire",
    specialty: "Rupture",
    birthDate: "July 24",
    species: "Intelligent Construct",
    faction: "Krampus Compliance Authority",
    color: "#7770fd",
    images: ["/agent/Banyue.webp"],
    version: "2.4",
    isWip: true,
    events: [
      // INVITATION EVENTS
      {
        id: "banyue_inv_01",
        type: "Invites",
        title: "Massaging Hands",
        location: "Lumina Square",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "banyue_inv_02",
        type: "Invites",
        title: "Boxing and Martial Arts",
        location: "Blazewood",
        choices: [
          {
            text: "Let's do this!",
            result: "Normal",
          },
        ],
      },
      {
        id: "banyue_inv_03",
        type: "Invites",
        title: "A Breezy Day by the Sea",
        location: "Port Elpis",
        choices: [
          {
            text: "I see...",
            result: "Normal",
          },
        ],
      },
      {
        id: "banyue_inv_04",
        type: "Invites",
        title: "Love It or Leave It",
        location: "Good Goods",
        choices: [
          {
            text: "Everyone's really into them right now.",
            result: "Normal",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "banyue_wish_01",
        type: "Wish",
        title: "Battery Thief",
        location: "Lumina Square - Charging Station",
      },
      {
        id: "banyue_wish_02",
        type: "Wish",
        title: "Now That's What I Call Skills!",
        location: "Failume Heights - Mahjong Parlor",
      },
      {
        id: "banyue_wish_03",
        type: "Wish",
        title: "Martial Artist",
        location: "Port Elpis - Dock",
      },
      {
        id: "banyue_wish_04",
        type: "Wish",
        title: "Sanctuary",
        location: "Ballet Twins Metro Station - Entrance",
      },
      {
        id: "banyue_wish_05",
        type: "Wish",
        title: "Learning New Vocabulary",
        location: "Lumina Square - Capsule Hotel",
      },
      // FUN EVENTS
      // {
      //   id: "banyue_fun_01",
      //   type: "Fun",
      //   title: "Cheesetopia",
      //   location: "Blazewood",
      // },
      // RANDOM ENCOUNTERS
      // {
      //   id: "banyue_rnd_01",
      //   type: "Random",
      //   title: "Souvenir Shop",
      //   location: "Fantasy Resort (Morning - Afternoon)",
      //   choices: [
      //     {
      //       text: "(Choices don't matter)",
      //       result: "Normal",
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   id: "ben",
  //   name: "Ben",
  //   fullName: "Ben Bigger",
  //   attribute: "Fire",
  //   specialty: "Defense",
  //   faction: "Belobog Heavy Industries",
  //   rarity: "A",
  //   color: "#504b42",
  //   images: ["/agent/Ben_Bigger.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "billy",
  //   name: "Billy",
  //   fullName: "Billy Kid",
  //   attribute: "Physical",
  //   specialty: "Attack",
  //   faction: "Cunning Hares",
  //   rarity: "A",
  //   color: "#ffabc6",
  //   images: ["/agent/Billy_Kid.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "burnice",
  //   name: "Burnice",
  //   fullName: "Burnice White",
  //   attribute: "Fire",
  //   specialty: "Anomaly",
  //   faction: "Sons of Calydon",
  //   rarity: "S",
  //   color: "#f1723b",
  //   images: ["/agent/Burnice_White.webp"],
  //   version: "1.2",
  //   events: [],
  // },
  // {
  //   id: "caesar",
  //   name: "Caesar",
  //   fullName: "Caesar King",
  //   attribute: "Physical",
  //   specialty: "Defense",
  //   faction: "Sons of Calydon",
  //   rarity: "S",
  //   color: "#f1723b",
  //   images: ["/agent/Caesar_King.webp"],
  //   version: "1.2",
  //   events: [],
  // },
  {
    id: "cissia",
    name: "Cissia",
    rarity: "S",
    attribute: "Electric",
    specialty: "Attack",
    birthDate: "January 10",
    species: "Thiren",
    faction: "Metropolitan Order Division",
    color: "#c4a87f",
    images: ["/agent/Cissia.webp"],
    version: "2.7",
    isNew: true,
    isWip: true,
    events: [],
  },
  // {
  //   id: "corin",
  //   name: "Corin",
  //   fullName: "Corin Wickes",
  //   attribute: "Physical",
  //   specialty: "Attack",
  //   faction: "Victoria Housekeeping Co.",
  //   rarity: "A",
  //   color: "#7a6e6e",
  //   images: ["/agent/Corin_Wickes.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  {
    id: "dialyn",
    name: "Dialyn",
    rarity: "S",
    attribute: "Physical",
    specialty: "Stun",
    birthDate: "May 28",
    species: "Human",
    faction: "Krampus Compliance Authority",
    color: "#7770fd",
    images: ["/agent/Dialyn.webp"],
    version: "2.4",
    events: [
      // INVITATION EVENTS
      {
        id: "dialyn_inv_01",
        type: "Invites",
        title: "Even if the Ocean Never Answered",
        location: "Fantasy Resort",
        choices: [
          {
            text: "Let me be your echo.",
            result: "Significant",
          },
          {
            text: "Let's run away together.",
            result: "Decrease",
          },
        ],
      },
      {
        id: "dialyn_inv_02",
        type: "Invites",
        title: "The Perfect Fluff",
        location: "Failume Heights",
        choices: [{ text: "(Choices don't matter)", result: "Normal" }],
      },
      {
        id: "dialyn_inv_03",
        type: "Invites",
        title: "Watch Out for Seagulls",
        location: "Port Elpis",
        choices: [
          {
            text: "Thanks to the ever-thoughtful customer service rep.",
            result: "Significant",
          },
          {
            text: "Thanks to the merciful Judge.",
            result: "Decrease",
          },
        ],
      },
      {
        id: "dialyn_inv_04",
        type: "Invites",
        title: "Wonderland and the Thief's Invitation",
        location: "Lumina Square",
        choices: [{ text: "(Choices don't matter)", result: "Normal" }],
      },
      // WISH EVENTS
      {
        id: "dialyn_wish_01",
        type: "Wish",
        title: "50% Sugary Memories",
        location: "Failume Heights - Balabala Tong Sui",
      },
      {
        id: "dialyn_wish_02",
        type: "Wish",
        title: "Expired Human",
        location: "Failume Heights - Cable Car",
      },
      {
        id: "dialyn_wish_03",
        type: "Wish",
        title: "In the Display Window",
        location: "Failume Heights - Overpass",
      },
      {
        id: "dialyn_wish_04",
        type: "Wish",
        title: "Boss's Appointed Hire",
        location: "Sixth Street - Metro Entrance",
      },
      {
        id: "dialyn_wish_05",
        type: "Wish",
        title: "Fluffy Temptation",
        location: "Failume Heights - Overpass Entrance",
      },
      // FUN EVENTS
      {
        id: "dialyn_fun_01",
        type: "Fun",
        title: "Dew Gardening Shop",
        location: "Lumina Square",
      },
      {
        id: "dialyn_fun_02",
        type: "Fun",
        title: "Physiotherapy studio",
        location: "Lumina Square",
      },
      {
        id: "dialyn_fun_03",
        type: "Fun",
        title: "Coff Cafe",
        location: "Lumina Square",
      },
      {
        id: "dialyn_fun_04",
        type: "Fun",
        title: "N.E.P.S. - Gate",
        location: "Lumina Square",
      },
      {
        id: "dialyn_fun_05",
        type: "Fun",
        title: "Lumina Square Station",
        location: "Lumina Square",
      },
      {
        id: "dialyn_fun_06",
        type: "Fun",
        title: "Yum Cha Sin",
        location: "Failume Heights",
      },
      {
        id: "dialyn_fun_07",
        type: "Fun",
        title: "Box Galaxy",
        location: "Sixth Street",
      },
      {
        id: "dialyn_fun_08",
        type: "Fun",
        title: "Payphone",
        location: "Sixth Street",
      },
      {
        id: "dialyn_fun_09",
        type: "Fun",
        title: "Newsstand",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "dialyn_rnd_01",
        type: "Random",
        title: "Peace Herbal",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "You worried about something?",
            result: "Significant",
          },
          {
            text: "Being a customer service rep must be really stressful, huh?",
            result: "Decrease",
          },
        ],
      },
      {
        id: "dialyn_rnd_02",
        type: "Random",
        title: "Seagaze Road",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "But Blick meant well, you know.",
            result: "Normal",
          },
          {
            text: "I want to record Dialyn in combat too.",
            result: "Significant",
          },
        ],
      },
      {
        id: "dialyn_rnd_03",
        type: "Random",
        title: "Yum Cha Sin",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "dialyn_rnd_04",
        type: "Random",
        title: "Music Festival Satge",
        location: "Fantasy Resort",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "dialyn_rnd_05",
        type: "Random",
        title: "Branch Street",
        location: "Sixth Street",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "dialyn_rnd_06",
        type: "Random",
        title: "Newsstand",
        location: "Sixth Street",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Not going with your customer service persona today?",
            result: "Significant",
          },
          {
            text: "Important Judge business?",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "ellen",
  //   name: "Ellen",
  //   fullName: "Ellen Joe",
  //   attribute: "Ice",
  //   specialty: "Attack",
  //   faction: "Victoria Housekeeping Co.",
  //   rarity: "S",
  //   color: "#7a6e6e",
  //   images: ["/agent/Ellen_Joe.webp", "/outfit/Ellen_Joe_On_Campus.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "evelyn",
  //   name: "Evelyn",
  //   fullName: "Evelyn Chevalier",
  //   attribute: "Fire",
  //   specialty: "Attack",
  //   faction: "Stars of Lyra",
  //   rarity: "S",
  //   color: "#ce4841",
  //   images: ["/agent/Evelyn_Chevalier.webp"],
  //   version: "1.5",
  //   events: [],
  // },
  // {
  //   id: "grace",
  //   name: "Grace",
  //   fullName: "Grace Howard",
  //   attribute: "Electric",
  //   specialty: "Anomaly",
  //   faction: "Belobog Heavy Industries",
  //   rarity: "S",
  //   color: "#504b42",
  //   images: ["/agent/Grace_Howard.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "harumasa",
  //   name: "Haru­masa",
  //   fullName: "Asaba Haru­masa",
  //   attribute: "Electric",
  //   specialty: "Attack",
  //   faction: "Hollow Special Operations Section 6",
  //   rarity: "S",
  //   color: "#44a2ab",
  //   images: ["/agent/Asaba_Harumasa.webp"],
  //   version: "1.4",
  //   events: [],
  // },
  // {
  //   id: "hugo",
  //   name: "Hugo",
  //   fullName: "Hugo Vlad",
  //   attribute: "Ice",
  //   specialty: "Attack",
  //   faction: "Mockingbird",
  //   rarity: "S",
  //   color: "#7676ad",
  //   images: ["/agent/Hugo_Vlad.webp"],
  //   version: "1.7",
  //   events: [],
  // },
  // {
  //   id: "jane",
  //   name: "Jane",
  //   fullName: "Jane Doe",
  //   attribute: "Physical",
  //   specialty: "Anomaly",
  //   faction: "Criminal Investigation Special Response Team",
  //   rarity: "S",
  //   color: "#5ea5dd",
  //   images: ["/agent/Jane_Doe.webp", "/outfit/Jane_Doe_Nocturne_of_Light.webp"],
  //   version: "1.1",
  //   events: [],
  // },
  {
    id: "ju_fufu",
    name: "Ju Fufu",
    rarity: "S",
    attribute: "Fire",
    specialty: "Stun",
    birthDate: "January 06",
    species: "Thiren",
    faction: "Yunkui Summit",
    color: "#f9e88c",
    images: ["/agent/Ju_Fufu.webp"],
    version: "2.0",
    events: [
      // INVITATION EVENTS
      {
        id: "ju_fufu_inv_01",
        type: "Invites",
        title: "Dusty Treasure",
        location: "Failume Heights",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ju_fufu_inv_02",
        type: "Invites",
        title: "Golden Tiger Claw",
        location: "Sixth Street",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ju_fufu_inv_03",
        type: "Invites",
        title: "Tiger of Fire",
        location: "Blazewood",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ju_fufu_inv_04",
        type: "Invites",
        title: "Tiger of the Sea",
        location: "Port Elpis",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "ju_fufu_01",
        type: "Wish",
        title: "Like New, Like Old",
        location: "Failume Heights - Observation Deck",
      },
      {
        id: "ju_fufu_02",
        type: "Wish",
        title: "Can't Trust Everything",
        location: "Failume Heights - Tong Sui Shop",
      },
      {
        id: "ju_fufu_03",
        type: "Wish",
        title: "The Feline Family",
        location: "Failume Heights - Fluffy",
      },
      {
        id: "ju_fufu_04",
        type: "Wish",
        title: "Feast from the Tiger's Mouth",
        location: "Failume Heights - Yum Cha Sin",
      },
      {
        id: "ju_fufu_05",
        type: "Wish",
        title: "Treasures",
        location: "Failume Heights - Antique Store",
      },
      // FUN EVENTS
      {
        id: "ju_fufu_fun_01",
        type: "Fun",
        title: "Suibian Temple",
        location: "Failume Heights",
      },
      {
        id: "ju_fufu_fun_02",
        type: "Fun",
        title: "Mahjong Parlor",
        location: "Failume Heights",
      },
      {
        id: "ju_fufu_fun_03",
        type: "Fun",
        title: "Good Goods",
        location: "Failume Heights",
      },
      {
        id: "ju_fufu_fun_04",
        type: "Fun",
        title: "Devon Pawnshop",
        location: "Failume Heights",
      },
      {
        id: "ju_fufu_fun_05",
        type: "Fun",
        title: "Dew Gardening Shop",
        location: "Lumina Square",
      },
      {
        id: "ju_fufu_fun_06",
        type: "Fun",
        title: "The Simmer",
        location: "Lumina Square",
      },
      {
        id: "ju_fufu_fun_07",
        type: "Fun",
        title: "Gravity Cinema",
        location: "Lumina Square",
      },
      {
        id: "ju_fufu_fun_08",
        type: "Fun",
        title: "Godfinger",
        location: "Sixth Street",
      },
      {
        id: "ju_fufu_fun_09",
        type: "Fun",
        title: "Random Play",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "ju_fufu_rnd_01",
        type: "Random",
        title: "Fluffy",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "I think you're super scary!",
            result: "Normal",
          },
          {
            text: "I think you're super adorable!",
            result: "Decrease",
          },
        ],
      },
      {
        id: "ju_fufu_rnd_02",
        type: "Random",
        title: "Indestructibles",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ju_fufu_rnd_03",
        type: "Random",
        title: "Talking to Pan Yinhu",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ju_fufu_rnd_04",
        type: "Random",
        title: "Near the Bench",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ju_fufu_rnd_05",
        type: "Random",
        title: "The Simmer",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ju_fufu_rnd_06",
        type: "Random",
        title: "Waterfall Soup",
        location: "Sixth Street",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "koleda",
  //   name: "Koleda",
  //   fullName: "Koleda Belobog",
  //   attribute: "Fire",
  //   specialty: "Stun",
  //   faction: "Belobog Heavy Industries",
  //   rarity: "S",
  //   color: "#504b42",
  //   images: ["/agent/Koleda_Belobog.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "lighter",
  //   name: "Lighter",
  //   attribute: "Fire",
  //   specialty: "Stun",
  //   faction: "Sons of Calydon",
  //   rarity: "S",
  //   color: "#f1723b",
  //   images: ["/agent/Lighter.webp"],
  //   version: "1.3",
  //   events: [],
  // },
  {
    id: "lucia",
    name: "Lucia",
    fullName: "Lucia Elowen",
    rarity: "S",
    attribute: "Ether",
    specialty: "Support",
    birthDate: "March 17",
    species: "Thiren",
    faction: "Spook Shack",
    color: "#f6e2c0",
    images: ["/agent/Lucia_Elowen.webp"],
    version: "2.3",
    events: [
      // INVITATION EVENTS
      {
        id: "lucia_elowen_inv_01",
        type: "Invites",
        title: "Agents of Justice! Move Out!",
        location: "Lumina Square",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "lucia_elowen_inv_02",
        type: "Invites",
        title: "Beheboth Terror",
        location: "Lumina Square - Gravity Cinema",
        choices: [{ text: "(Choices don't matter)", result: "Normal" }],
      },
      {
        id: "lucia_elowen_inv_03",
        type: "Invites",
        title: "Exclusive Recipe",
        location: "Failume Heights",
        choices: [{ text: "(Choices don't matter)", result: "Normal" }],
      },
      {
        id: "lucia_elowen_inv_04",
        type: "Invites",
        title: "Magazine Reading Journey",
        location: "Sixth Street",
        choices: [{ text: "(Choices don't matter)", result: "Normal" }],
      },
      // WISH EVENTS
      {
        id: "lucia_elowen_wish_01",
        type: "Wish",
        title: "Energy Drink",
        location: "Failume Heights - Coff Cafe Stall",
      },
      {
        id: "lucia_elowen_wish_02",
        type: "Wish",
        title: "City Whispers",
        location: "Lumina Square - Overpass",
      },
      {
        id: "lucia_elowen_wish_03",
        type: "Wish",
        title: "The Ocean, Dreams, and Ethereals",
        location: "Port Elpis - Dock",
      },
      {
        id: "lucia_elowen_wish_04",
        type: "Wish",
        title: "Antique Tales",
        location: "Failume Heights - Antique Shop",
      },
      {
        id: "lucia_elowen_wish_05",
        type: "Wish",
        title: "A Small Gift",
        location: "Sixth Street - 141 Convenience Store",
      },
      // FUN EVENTS
      {
        id: "lucia_elowen_fun_01",
        type: "Fun",
        title: "Boobox",
        location: "Failume Heights",
      },
      {
        id: "lucia_elowen_fun_02",
        type: "Fun",
        title: "Vending Machine",
        location: "Failume Heights",
      },
      {
        id: "lucia_elowen_fun_03",
        type: "Fun",
        title: "Check Inn",
        location: "Failume Heights",
      },
      {
        id: "lucia_elowen_fun_04",
        type: "Fun",
        title: "Quality Tea",
        location: "Lumina Square",
      },
      {
        id: "lucia_elowen_fun_05",
        type: "Fun",
        title: "NEPS",
        location: "Lumina Square",
      },
      {
        id: "lucia_elowen_fun_06",
        type: "Fun",
        title: "Dock",
        location: "Port Elpis",
      },
      {
        id: "lucia_elowen_fun_07",
        type: "Fun",
        title: "Sage in a Barrel",
        location: "Port Elpis",
      },
      {
        id: "lucia_elowen_fun_08",
        type: "Fun",
        title: "404 Error",
        location: "Sixth Street",
      },
      {
        id: "lucia_elowen_fun_09",
        type: "Fun",
        title: "Newsstand",
        location: "Sixth Street",
      },
      {
        id: "lucia_elowen_fun_10",
        type: "Fun",
        title: "Officer Mewmew",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "lucia_elowen_rnd_01",
        type: "Random",
        title: "NEPS",
        location: "Lumina Square",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "lucia_elowen_rnd_02",
        type: "Random",
        title: "Boobox",
        location: "Failume Heights",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "lucia_elowen_rnd_03",
        type: "Random",
        title: "Good Goods",
        location: "Failume Heights",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "lucia_elowen_rnd_04",
        type: "Random",
        title: "Old Capital Association",
        location: "Failume Heights",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "lucia_elowen_rnd_05",
        type: "Random",
        title: "Yum Cha Sin",
        location: "Failume Heights",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "lucia_elowen_rnd_06",
        type: "Random",
        title: "Underpass",
        location: "Sixth Street",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "lucy",
  //   name: "Lucy",
  //   fullName: "Luciana de Montefio",
  //   attribute: "Fire",
  //   specialty: "Support",
  //   faction: "Sons of Calydon",
  //   rarity: "A",
  //   color: "#f1723b",
  //   images: ["/agent/Luciana_de_Montefio.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "lycaon",
  //   name: "Lycaon",
  //   fullName: "Von Lycaon",
  //   attribute: "Ice",
  //   specialty: "Stun",
  //   faction: "Victoria Housekeeping Co.",
  //   rarity: "S",
  //   color: "#7a6e6e",
  //   images: ["/agent/Von_Lycaon.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  {
    id: "manato",
    name: "Manato",
    fullName: "Komano Manato",
    rarity: "A",
    attribute: "Fire",
    specialty: "Rupture",
    birthDate: "January 05",
    species: "Thiren",
    faction: "Spook Shack",
    color: "#f6e2c0",
    images: [
      "/agent/Komano_Manato.webp",
      "/outfit/Komano_Manato_White_Heart_Silhouette.webp",
    ],
    version: "2.3",
    events: [
      // INVITATION EVENTS
      {
        id: "komano_manato_inv_01",
        type: "Invites",
        title: "A Good Day Can Be Made With Dim Sum!",
        location: "Failume Heights",
        choices: [
          {
            text: "Shrimp dumplings, char siu buns, and steamed spare ribs.",
            result: "Normal",
          },
          {
            text: "I wanna eat them all!",
            result: "Significant",
          },
        ],
      },
      {
        id: "komano_manato_inv_02",
        type: "Invites",
        title: "A Steaming Taste of Happiness!",
        location: "Lumina Square",
        choices: [
          { text: "Meat! Meat! Meat!", result: "Normal" },
          {
            text: "The veggies hit different in hotpot, you know...",
            result: "Significant",
          },
        ],
      },
      {
        id: "komano_manato_inv_03",
        type: "Invites",
        title: "Mystery of the Ballet Twins Sculpture!",
        location: "Ballet Twins Road",
        choices: [
          { text: "Manato is Manato...", result: "Normal" },
          {
            text: "You don't need to become anyone else...",
            result: "Significant",
          },
        ],
      },
      {
        id: "komano_manato_inv_04",
        type: "Invites",
        title: "The Reverb Arena Secret Deal",
        location: "Reverb Arena",
        choices: [
          {
            text: "No way, I won't abandon my companions.",
            result: "Significant",
          },
          { text: "You should retreat first.", result: "Normal" },
        ],
      },
      // WISH EVENTS
      {
        id: "komano_manato_wish_01",
        type: "Wish",
        title: "Dog Thiren's Secret Base",
        location: "Failume Heights - Sailume Bay - Beach",
      },
      {
        id: "komano_manato_wish_02",
        type: "Wish",
        title: "Fresh Ingredients",
        location: "Port Elpis - Dock",
      },
      {
        id: "komano_manato_wish_03",
        type: "Wish",
        title: "Neighborhood Commission",
        location: "Failume Heights - Yum Cha Sin",
      },
      {
        id: "komano_manato_wish_04",
        type: "Wish",
        title: "Unconventional Side Hustle",
        location: "Blazewood - Cheesetopia",
      },
      {
        id: "komano_manato_wish_05",
        type: "Wish",
        title: "Miners' Equipment Maintenance",
        location: "Brant Street Construction Site - Maintenance Area",
      },
      // FUN EVENTS
      {
        id: "komano_manato_fun_01",
        type: "Fun",
        title: "Cliffside",
        location: "Blazewood",
      },
      {
        id: "komano_manato_fun_02",
        type: "Fun",
        title: "Cactus",
        location: "Blazewood",
      },
      {
        id: "komano_manato_fun_03",
        type: "Fun",
        title: "Junction Box",
        location: "Brant Street Construction Site",
      },
      {
        id: "komano_manato_fun_04",
        type: "Fun",
        title: "Supply Store",
        location: "Brant Street Construction Site",
      },
      {
        id: "komano_manato_fun_05",
        type: "Fun",
        title: "Soup Shop",
        location: "Failume Heights",
      },
      {
        id: "komano_manato_fun_06",
        type: "Fun",
        title: "Underground Pass",
        location: "Failume Heights",
      },
      {
        id: "komano_manato_fun_07",
        type: "Fun",
        title: "Good Goods",
        location: "Failume Heights",
      },
      {
        id: "komano_manato_fun_08",
        type: "Fun",
        title: "Sculpture",
        location: "Failume Heights",
      },
      {
        id: "komano_manato_fun_09",
        type: "Fun",
        title: "Tater King",
        location: "Port Elpis",
      },
      {
        id: "komano_manato_fun_10",
        type: "Fun",
        title: "Lighthouse - 2nd Floor",
        location: "Port Elpis",
      },
      // RANDOM ENCOUNTERS
      {
        id: "komano_manato_rnd_01",
        type: "Random",
        title: "Old Duyi's Physiotherapy Studio",
        location: "Lumina Square",
        time: ["Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "komano_manato_rnd_02",
        type: "Random",
        title: "Boobox",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "komano_manato_rnd_03",
        type: "Random",
        title: "Peace Herbal",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        image: "/event/komano_manato/komano_manato_rnd_03.webp",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "komano_manato_rnd_04",
        type: "Random",
        title: "Sailume Bay - Observation Deck",
        location: "Failume Heights",
        time: ["Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "komano_manato_rnd_05",
        type: "Random",
        title: "Beach Event Area",
        location: "Fantasy Resort",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "I wandered over here without even realizing it...",
            result: "Decrease",
          },
          {
            text: "It's because of all the wonderful memories we share!",
            result: "Significant",
          },
        ],
      },
      {
        id: "komano_manato_rnd_06",
        type: "Random",
        title: "Box Galaxy",
        location: "Sixth Street",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "miyabi",
  //   name: "Miyabi",
  //   fullName: "Hoshimi Miyabi",
  //   attribute: "Ice",
  //   specialAttribute: "Frost",
  //   specialty: "Anomaly",
  //   faction: "Hollow Special Operations Section 6",
  //   rarity: "S",
  //   color: "#44a2ab",
  //   images: ["/agent/Hoshimi_Miyabi.webp"],
  //   version: "1.4",
  //   events: [],
  // },
  {
    id: "nangong_yu",
    name: "Nangong Yu",
    rarity: "S",
    attribute: "Ether",
    specialty: "Stun",
    birthDate: "September 29",
    species: "Thiren",
    faction: "Angels of Delusion",
    color: "#ff93a7",
    images: [
      "/agent/Nangong_Yu.webp",
      "/outfit/Nangong_Yu_Rhapsody's_Muse.webp",
    ],
    version: "2.7",
    isNew: true,
    events: [
      // INVITATION EVENTS
      {
        id: "nangong_yu_inv_01",
        type: "Invites",
        title: "Angel Off Stage",
        location: "Sixth Street - 404 Livehouse",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Significant",
          },
        ],
      },
      {
        id: "nangong_yu_inv_02",
        type: "Invites",
        title: "Business Mogul Nangong Yu",
        location: "Lumina Square",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "nangong_yu_inv_03",
        type: "Invites",
        title: "Feathers and the Sun Fall Together",
        location: "Fantasy Resort",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Significant",
          },
        ],
      },
      {
        id: "nangong_yu_inv_04",
        type: "Invites",
        title: "Sea God and the Angel",
        location: "Fantasy Resort",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Significant",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "nangong_yu_wish_01",
        type: "Wish",
        title: "Where Delusions Began",
        location: "Sixth Steet - 404 Livehouse",
      },
      {
        id: "nangong_yu_wish_02",
        type: "Wish",
        title: "Healthy Tea",
        location: "Failume Heights - Peace Herbal",
      },
      {
        id: "nangong_yu_wish_03",
        type: "Wish",
        title: "The Most Dazzling Stage",
        location: "Starloop Tower - Lounge",
      },
      {
        id: "nangong_yu_wish_04",
        type: "Wish",
        title: "Flight of the Angels",
        location: "Reverb Arena",
      },
      {
        id: "nangong_yu_wish_05",
        type: "Wish",
        title: "Echoes of the Sea",
        location: "Port Elpis - Dock",
      },
      // FUN EVENTS
      {
        id: "nangong_yu_fun_01",
        type: "Fun",
        title: "Beaverson Beauty Salon",
        location: "Lumina Square",
      },
      {
        id: "nangong_yu_fun_02",
        type: "Fun",
        title: "Quality Tea",
        location: "Lumina Square",
      },
      {
        id: "nangong_yu_fun_03",
        type: "Fun",
        title: "Sān-Z Studio",
        location: "Lumina Square",
      },
      {
        id: "nangong_yu_fun_04",
        type: "Fun",
        title: "Good Goods",
        location: "Failume Heights",
      },
      {
        id: "nangong_yu_fun_05",
        type: "Fun",
        title: "A-Shuo",
        location: "Failume Heights",
      },
      {
        id: "nangong_yu_fun_06",
        type: "Fun",
        title: "Fries Booth",
        location: "Port Elpis",
      },
      {
        id: "nangong_yu_fun_07",
        type: "Fun",
        title: "Bangboo Statue near Box Galaxy",
        location: "Sixth Street",
      },
      {
        id: "nangong_yu_fun_08",
        type: "Fun",
        title: "Convenience Store",
        location: "Sixth Street",
      },
      {
        id: "nangong_yu_fun_09",
        type: "Fun",
        title: "Bardic Needle",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "nangong_yu_rnd_01",
        type: "Random",
        title: "Fluffy",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "nangong_yu_rnd_02",
        type: "Random",
        title: "Stormguard",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "nangong_yu_rnd_03",
        type: "Random",
        title: "404 Livehouse",
        location: "Sixth Street",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "nangong_yu_rnd_04",
        type: "Random",
        title: "Bardic Needle",
        location: "Sixth Street",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "nangong_yu_rnd_05",
        type: "Random",
        title: "Coff Cafe",
        location: "Sixth Street",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "nangong_yu_rnd_06",
        type: "Random",
        title: "Waterfall Soup",
        location: "Sixth Street",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  //   id: "nekomata",
  //   name: "Nekomata",
  //   fullName: "Nekomiya Mana",
  //   attribute: "Physical",
  //   specialty: "Attack",
  //   faction: "Cunning Hares",
  //   rarity: "S",
  //   color: "#ffabc6",
  //   images: ["/agent/Nekomiya_Mana.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "nicole",
  //   name: "Nicole",
  //   fullName: "Nicole Demara",
  //   attribute: "Ether",
  //   specialty: "Support",
  //   faction: "Cunning Hares",
  //   rarity: "A",
  //   color: "#ffabc6",
  //   images: [
  //     "/agent/Nicole_Demara.webp",
  //     "/outfit/Nicole_Demara_Cunning_Cutie.webp",
  //   ],
  //   version: "1.0",
  //   events: [],
  // },
  {
    id: "orphie_and_magus",
    name: "Orphie & Magus",
    fullName: "Orphie Magnusson & Magus",
    rarity: "S",
    attribute: "Fire",
    specialty: "Attack",
    birthDate: "November 3",
    species: "Human & Intelligent Construct",
    faction: "Obol Squad",
    color: "#dcac48",
    images: ["/agent/Orphie_Magnusson_&_Magus.webp"],
    version: "2.2",
    events: [
      // INVITATION EVENTS
      {
        id: "orphie_and_magus_inv_01",
        type: "Invites",
        title: "If Doomsday Comes",
        location: "Failume Heights",
        choices: [
          {
            text: "The vase.",
            result: "Normal",
          },
          {
            text: "The guitar.",
            result: "Normal",
          },
          {
            text: "Orphie.",
            result: "Significant",
          },
        ],
      },
      {
        id: "orphie_and_magus_inv_02",
        type: "Invites",
        title: "Strange Yet Familiar",
        location: "Port Elpis",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Significant",
          },
        ],
      },
      {
        id: "orphie_and_magus_inv_03",
        type: "Invites",
        title: "The Best Gift",
        location: "Failume Heights",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Significant",
          },
        ],
      },
      {
        id: "orphie_and_magus_inv_04",
        type: "Invites",
        title: "The Taste of Coffee",
        location: "Fantasy Resort",
        choices: [
          {
            text: "Mint Espresso.",
            result: "Decrease",
          },
          {
            text: "Mochaccino.",
            result: "Normal",
          },
          {
            text: "Fruit Foam Cappuccino.",
            result: "Significant",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "orphie_and_magus_wish_01",
        type: "Wish",
        title: "Nighttime Horror Fantasy",
        location: "Failume Heights - Sailume Bay",
      },
      {
        id: "orphie_and_magus_wish_02",
        type: "Wish",
        title: "Social Rendezvous Training Rules",
        location: "Port Elpis - Dock",
      },
      {
        id: "orphie_and_magus_wish_03",
        type: "Wish",
        title: "Farewell and Reunion",
        location: "Failume Heights - Cable Car Station",
      },
      {
        id: "orphie_and_magus_wish_04",
        type: "Wish",
        title: "Devil Chili Soda",
        location: "Reverb Arena",
      },
      {
        id: "orphie_and_magus_wish_05",
        type: "Wish",
        title: "One Maintenance Oil Special, Please",
        location: "Blazewood",
      },
      // FUN EVENTS
      {
        id: "orphie_and_magus_fun_01",
        type: "Fun",
        title: "The Simmer",
        location: "Lumina Square",
      },
      {
        id: "orphie_and_magus_fun_02",
        type: "Fun",
        title: "Playground",
        location: "Lumina Square",
      },
      {
        id: "orphie_and_magus_fun_03",
        type: "Fun",
        title: "Good Goods",
        location: "Failume Heights",
      },
      {
        id: "orphie_and_magus_fun_04",
        type: "Fun",
        title: "Devon Pawnshop",
        location: "Failume Heights",
      },
      {
        id: "orphie_and_magus_fun_05",
        type: "Fun",
        title: "Coastal Fishing Spot",
        location: "Port Elpis",
      },
      {
        id: "orphie_and_magus_fun_06",
        type: "Fun",
        title: "Box Galaxy",
        location: "Sixth Street",
      },
      {
        id: "orphie_and_magus_fun_07",
        type: "Fun",
        title: "Coff Cafe",
        location: "Sixth Street",
      },
      {
        id: "orphie_and_magus_fun_08",
        type: "Fun",
        title: "Random Play",
        location: "Sixth Street",
      },
      {
        id: "orphie_and_magus_fun_09",
        type: "Fun",
        title: "Turbo",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "orphie_and_magus_rnd_01",
        type: "Random",
        title: "Fluffy",
        location: "Lumina Square",
        time: ["Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "orphie_and_magus_rnd_02",
        type: "Random",
        title: "Fluffy",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "orphie_and_magus_rnd_03",
        type: "Random",
        title: "Mystic Wares",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "orphie_and_magus_rnd_04",
        type: "Random",
        title: "Seagaze Road",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Sure...",
            result: "Normal",
          },
          {
            text: "No problem!",
            result: "Normal",
          },
          {
            text: "I was just thinking the same!",
            result: "Significant",
          },
        ],
      },
      {
        id: "orphie_and_magus_rnd_05",
        type: "Random",
        title: "Coff Cafe Stall",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "orphie_and_magus_rnd_06",
        type: "Random",
        title: "Waterfall Soup",
        location: "Sixth Street",
        time: ["Evening", "Late Night"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  {
    id: "pan_yinhu",
    name: "Pan Yinhu",
    rarity: "A",
    attribute: "Physical",
    specialty: "Defense",
    birthDate: "May 10",
    species: "Thiren",
    faction: "Yunkui Summit",
    color: "#f9e88c",
    images: ["/agent/Pan_Yinhu.webp", "/outfit/Pan_Yinhu_Culinary_Jewel.webp"],
    version: "2.0",
    events: [
      // INVITATION EVENTS
      {
        id: "pan_yinhu_inv_01",
        type: "Invites",
        title: "Cactus Style!",
        location: "Blazewood",
        choices: [
          {
            text: "I thought you said this wouldn't be intense...",
            result: "Normal",
          },
          {
            text: "It hurt, but surprisingly very satisfying.",
            result: "Normal",
          },
          {
            text: "When's the next training session?",
            result: "Significant",
          },
        ],
      },
      {
        id: "pan_yinhu_inv_02",
        type: "Invites",
        title: "Divination!",
        location: "Failume Heights",
        choices: [
          {
            text: "(Trade two fire for two ice)",
            result: "Significant",
          },
          {
            text: "(Trade one fire for one ice)",
            result: "Normal",
          },
        ],
      },
      {
        id: "pan_yinhu_inv_03",
        type: "Invites",
        title: "Exclusive Intel Source!",
        location: "Sixth Street",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Significant",
          },
        ],
      },
      {
        id: "pan_yinhu_inv_04",
        type: "Invites",
        title: "No middleman markup!",
        location: "Port Elpis",
        choices: [
          {
            text: "I think one crate is a little too much.",
            result: "Normal",
          },
          {
            text: "I think one crate is not enough.",
            result: "Normal",
          },
          {
            text: "With your cooking? We'll eat the whole crate without a problem.",
            result: "Significant",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "pan_yinhu_01",
        type: "Wish",
        title: "The Temptation of Junk Food",
        location: "Port Elpis - Fry stand",
      },
      {
        id: "pan_yinhu_02",
        type: "Wish",
        title: "Steal-the-Deal Bonanza!",
        location: "Failume Heights - Good Goods",
      },
      {
        id: "pan_yinhu_03",
        type: "Wish",
        title: "The Joy of Mixing Drinks",
        location: "Reverb Arena - Drinks Stand",
      },
      {
        id: "pan_yinhu_04",
        type: "Wish",
        title: "Perfect Training Spot",
        location: "Lumina Square - Riverside",
      },
      {
        id: "pan_yinhu_05",
        type: "Wish",
        title: "Inspiration for New Recipes!",
        location: "Failume Heights - Yum Cha Sin",
      },
      // FUN EVENTS
      {
        id: "pan_yinhu_fun_01",
        type: "Fun",
        title: "Cyclical Destiny Sculpture",
        location: "Failume Heights",
      },
      {
        id: "pan_yinhu_fun_02",
        type: "Fun",
        title: "Check Inn",
        location: "Failume Heights",
      },
      {
        id: "pan_yinhu_fun_03",
        type: "Fun",
        title: "The Simmer",
        location: "Lumina Square",
      },
      {
        id: "pan_yinhu_fun_04",
        type: "Fun",
        title: "Quality Tea",
        location: "Lumina Square",
      },
      {
        id: "pan_yinhu_fun_05",
        type: "Fun",
        title: "SREC Poster",
        location: "Lumina Square",
      },
      {
        id: "pan_yinhu_fun_06",
        type: "Fun",
        title: "Sage in a Barrel",
        location: "Port Elpis",
      },
      {
        id: "pan_yinhu_fun_07",
        type: "Fun",
        title: "Blast Boom Stand",
        location: "Reverb Arena",
      },
      // RANDOM ENCOUNTERS
      {
        id: "pan_yinhu_rnd_01",
        type: "Random",
        title: "Officer Mewmew",
        location: "Brant Street Construction Site",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Calculator is better.",
            result: "Decrease",
          },
          {
            text: "Abacus is better.",
            result: "Normal",
          },
        ],
      },
      {
        id: "pan_yinhu_rnd_02",
        type: "Random",
        title: "Lumina Galleria",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "I'll squeeze in there with you!",
            result: "Normal",
          },
          {
            text: "I'll distract them!",
            result: "Significant",
          },
          {
            text: "I'll hold them off for you!",
            result: "Decrease",
          },
        ],
      },
      {
        id: "pan_yinhu_rnd_03",
        type: "Random",
        title: "Lumina Square",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "How many mild soup base options are there?",
            result: "Normal",
          },
          {
            text: "How's the ingredient variety?",
            result: "Normal",
          },
          {
            text: "Is there a hot water kettle for rinsing utensils?",
            result: "Significant",
          },
        ],
      },
      {
        id: "pan_yinhu_rnd_04",
        type: "Random",
        title: "Devon Pawnshop",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "It's more like a freshly shed clump of fur.",
            result: "Significant",
          },
          {
            text: "It's more like a freshly coughed-up hairball.",
            result: "Normal",
          },
          {
            text: "It's more like a bunch of weeds.",
            result: "Decrease",
          },
        ],
      },
      {
        id: "pan_yinhu_rnd_05",
        type: "Random",
        title: "Yum Cha Sin",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Not enough meat, maybe?",
            result: "Normal",
          },
          {
            text: "Not enough variety in the menu?",
            result: "Normal",
          },
          {
            text: "Does the food taste different from before?",
            result: "Significant",
          },
        ],
      },
      {
        id: "pan_yinhu_rnd_06",
        type: "Random",
        title: "Box Galaxy",
        location: "Sixth Street",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Your heart is resisting, senior.",
            result: "Normal",
          },
          {
            text: "Deep down, you know cheating like this isn't right.",
            result: "Significant",
          },
          {
            text: "You're exhausted.",
            result: "Decrease",
          },
        ],
      },
    ],
  },
  // {
  //   id: "piper",
  //   name: "Piper",
  //   fullName: "Piper Wheel",
  //   attribute: "Physical",
  //   specialty: "Anomaly",
  //   faction: "Sons of Calydon",
  //   rarity: "A",
  //   color: "#f1723b",
  //   images: ["/agent/Piper_Wheel.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "pulchra",
  //   name: "Pulchra",
  //   fullName: "Pulchra Fellini",
  //   attribute: "Physical",
  //   specialty: "Stun",
  //   faction: "Sons of Calydon",
  //   rarity: "A",
  //   color: "#f1723b",
  //   images: ["/agent/Pulchra_Fellini.webp"],
  //   version: "1.6",
  //   events: [],
  // },
  // {
  //   id: "qingyi",
  //   name: "Qingyi",
  //   attribute: "Electric",
  //   specialty: "Stun",
  //   faction: "Criminal Investigation Special Response Team",
  //   rarity: "S",
  //   color: "#5ea5dd",
  //   images: ["/agent/Qingyi.webp"],
  //   version: "1.1",
  //   events: [],
  // },
  {
    id: "seed",
    name: "Seed",
    rarity: "S",
    attribute: "Electric",
    specialty: "Attack",
    birthDate: "November 22",
    species: "Human & Intelligent Construct",
    faction: "Obol Squad",
    color: "#dcac48",
    images: ["/agent/Seed.webp"],
    version: "2.2",
    events: [
      // INVITATION EVENTS
      {
        id: "seed_inv_01",
        type: "Invites",
        title: "A World Where Loved Ones Exist",
        location: "Sixth Street",
        choices: [
          {
            text: [
              "I'd keep this one as is, and draw another one.",
              "I want to put Seed in my new drawing.",
            ],
            result: "Significant",
          },
          {
            text: "I'd draw more flowers.",
            result: "Normal",
          },
          {
            text: "I'd to draw more friends.",
            result: "Normal",
          },
        ],
      },
      {
        id: "seed_inv_02",
        type: "Invites",
        title: "Cramped Hang Out",
        location: "Lumina Square",
        choices: [
          {
            text: [
              "That your hair has a floral scent.",
              "They should mass produce flower-scented concrete pipes.",
            ],
            result: "Significant",
          },
          {
            text: "That the concrete pipe might be a time machine.",
            result: "Normal",
          },
          {
            text: "That it's not too hot inside, saves on the electricity bill.",
            result: "Normal",
          },
        ],
      },
      {
        id: "seed_inv_03",
        type: "Invites",
        title: "Ehn-na? Ehn-na-wah-dah-ehn-na!",
        location: "Failume Heights",
        choices: [
          {
            text: "Long live the Phantom Bangboo Brigade!",
            result: "Normal",
          },
          {
            text: "Thanks for helping me out!",
            result: "Normal",
          },
          {
            text: "I wanna go home with you.",
            result: "Significant",
          },
        ],
      },
      {
        id: "seed_inv_04",
        type: "Invites",
        title: "What the Waves Will Wash Away",
        location: "Fantasy Resort",
        choices: [
          {
            text: "What wasn't washed away was their reply.",
            result: "Significant",
          },
          {
            text: "It's to make sure we don't forget.",
            result: "Normal",
          },
          {
            text: "To save some words for next time.",
            result: "Normal",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "seed_wish_01",
        type: "Wish",
        title: "Bangboo Mechanic",
        location: "Blazewood - Lower-Level",
      },
      {
        id: "seed_wish_02",
        type: "Wish",
        title: "Life Simulation Class",
        location: "Failume Heights - Fluffy",
      },
      {
        id: "seed_wish_03",
        type: "Wish",
        title: "Return to the Sea",
        location: "Fantasy Resort - Aquarium",
      },
      {
        id: "seed_wish_04",
        type: "Wish",
        title: "Director, Take Your Position",
        location: "Lumina Square - Gravity Cinema",
      },
      {
        id: "seed_wish_05",
        type: "Wish",
        title: "Narrow Space",
        location: "Sixth Street - Street Poop Bangboo",
      },
      // FUN EVENTS
      {
        id: "seed_fun_01",
        type: "Fun",
        title: "Cyclical Destiny Sculpture",
        location: "Failume Heights",
      },
      {
        id: "seed_fun_02",
        type: "Fun",
        title: "Indestructable",
        location: "Failume Heights",
      },
      {
        id: "seed_fun_03",
        type: "Fun",
        title: "Suibian Temple",
        location: "Failume Heights",
      },
      {
        id: "seed_fun_04",
        type: "Fun",
        title: "Floatie Ice Cream",
        location: "Fantasy Resort",
      },
      {
        id: "seed_fun_05",
        type: "Fun",
        title: "Archipelago Shoot",
        location: "Fantasy Resort",
      },
      {
        id: "seed_fun_06",
        type: "Fun",
        title: "Dew Gardening Shop",
        location: "Lumina Square",
      },
      {
        id: "seed_fun_07",
        type: "Fun",
        title: "Capsule Hotel",
        location: "Lumina Square",
      },
      {
        id: "seed_fun_08",
        type: "Fun",
        title: "Godfinger",
        location: "Sixth Street",
      },
      {
        id: "seed_fun_09",
        type: "Fun",
        title: "Sage in a Barrel",
        location: "Sixth Street",
      },
      {
        id: "seed_fun_10",
        type: "Fun",
        title: "Box Galaxy",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "seed_rnd_01",
        type: "Random",
        title: "Talking to Grace",
        location: "Brant Street Construction Site",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Grace and I are friends!",
            result: "Decrease",
          },
          {
            text: "Of course, I love these machines!",
            result: "Normal",
          },
          {
            text: "I came here looking for you, Seed.",
            result: "Normal",
          },
        ],
      },
      {
        id: "seed_rnd_02",
        type: "Random",
        title: "Talking to Orphie",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "You can give me a nickname!",
            result: "Normal",
          },
          {
            text: "Let's just stick to codenames.",
            result: "Decrease",
          },
        ],
      },
      {
        id: "seed_rnd_03",
        type: "Random",
        title: "Devon Pawnshop",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "She just wanted her father's company.",
            result: "Significant",
          },
          {
            text: "These gifts are so last season!",
            result: "Decrease",
          },
          {
            text: "Should give a handmade gift.",
            result: "Normal",
          },
        ],
      },
      {
        id: "seed_rnd_04",
        type: "Random",
        title: "Talking to the Lady in White",
        location: "Failume Heights",
        time: ["Evening", "Late Night"],
        choices: [
          {
            text: "You touched her heart.",
            result: "Normal",
          },
          {
            text: "Can you really get that much from just feeling it?",
            result: "Decrease",
          },
        ],
      },
      {
        id: "seed_rnd_05",
        type: "Random",
        title: "Talking to Trigger",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Point to the sleeping cat)",
            result: "Normal",
          },
          {
            text: "(Point to Trigger's ponytail)",
            result: "Normal",
          },
          {
            text: "(Point to own cheek)",
            result: "Significant",
          },
        ],
      },
      {
        id: "seed_rnd_06",
        type: "Random",
        title: "Talking to Soldier 11",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "It smells like flowers... like I've stepped into a flower field...",
            result: "Significant",
          },
          {
            text: "It smells like paper... like I've walked into a bookstore...",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "seth",
  //   name: "Seth",
  //   fullName: "Seth Lowell",
  //   attribute: "Electric",
  //   specialty: "Defense",
  //   faction: "Criminal Investigation Special Response Team",
  //   rarity: "A",
  //   color: "#5ea5dd",
  //   images: ["/agent/Seth_Lowell.webp"],
  //   version: "1.1",
  //   events: [],
  // },
  // {
  //   id: "rina",
  //   name: "Rina",
  //   fullName: "Alexandrina Sebastiane",
  //   attribute: "Electric",
  //   specialty: "Support",
  //   faction: "Victoria Housekeeping Co.",
  //   rarity: "S",
  //   color: "#7a6e6e",
  //   images: ["/agent/Alexandrina_Sebastiane.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "soldier_11",
  //   name: "Soldier 11",
  //   attribute: "Fire",
  //   specialty: "Attack",
  //   faction: "Obol Squad",
  //   rarity: "S",
  //   color: "#dcac48",
  //   images: ["/agent/Soldier_11.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  // {
  //   id: "soukaku",
  //   name: "Soukaku",
  //   attribute: "Ice",
  //   specialty: "Support",
  //   faction: "Hollow Special Operations Section 6",
  //   rarity: "A",
  //   color: "#44a2ab",
  //   images: ["/agent/Soukaku.webp"],
  //   version: "1.0",
  //   events: [],
  // },
  {
    id: "sunna",
    name: "Sunna",
    rarity: "S",
    attribute: "Physical",
    specialty: "Support",
    birthDate: "July 18",
    species: "Human",
    faction: "Angels of Delusion",
    color: "#ff93a7",
    images: ["/agent/Sunna.webp", "/outfit/Sunna_Afternoon_Tea_Break.webp"],
    version: "2.6",
    events: [
      // INVITATION EVENTS
      {
        id: "sunna_inv_01",
        type: "Invites",
        title: "Diagnosed with Delusion",
        location: "Sixth Street",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Significant",
          },
        ],
      },
      {
        id: "sunna_inv_02",
        type: "Invites",
        title: "How to Heal Your Digital Pet",
        location: "Failume Heights",
        choices: [{ text: "(Choices don't matter)", result: "Significant" }],
      },
      {
        id: "sunna_inv_03",
        type: "Invites",
        title: "Superfan Representative",
        location: "Fantasy Resort",
        choices: [{ text: "(Choices don't matter)", result: "Significant" }],
      },
      {
        id: "sunna_inv_04",
        type: "Invites",
        title: "Rock! Paper! Boo!",
        location: "Blazewood",
        choices: [{ text: "(Choices don't matter)", result: "Significant" }],
      },
      // WISH EVENTS
      {
        id: "sunna_wish_01",
        type: "Wish",
        title: "Dreams & Delusions",
        location: "Reverb Arena",
      },
      {
        id: "sunna_wish_02",
        type: "Wish",
        title: "Rising Star",
        location: "Sixth Street - Bardic Needle",
      },
      {
        id: "sunna_wish_03",
        type: "Wish",
        title: "Solo Practice",
        location: "Sixth Street - Corner",
      },
      {
        id: "sunna_wish_04",
        type: "Wish",
        title: "The Voice of All Things",
        location: "Failume Heights - Sailume Bay",
      },
      {
        id: "sunna_wish_05",
        type: "Wish",
        title: "Two Sides of the Stage",
        location: "Sixth Street - 404 Error",
      },
      // FUN EVENTS
      {
        id: "sunna_fun_01",
        type: "Fun",
        title: "Dew Gardening Shop",
        location: "Lumina Square",
      },
      {
        id: "sunna_fun_02",
        type: "Fun",
        title: "The Simmer",
        location: "Lumina Square",
      },
      {
        id: "sunna_fun_03",
        type: "Fun",
        title: "Playground",
        location: "Lumina Square",
      },
      {
        id: "sunna_fun_04",
        type: "Fun",
        title: "Gravity Cinema - Right Poster",
        location: "Lumina Square",
      },
      {
        id: "sunna_fun_05",
        type: "Fun",
        title: "Waterfall Soup",
        location: "Lumina Square",
      },
      {
        id: "sunna_fun_06",
        type: "Fun",
        title: "Drinks",
        location: "Reverb Arena",
      },
      {
        id: "sunna_fun_07",
        type: "Fun",
        title: "404 Error Entrance",
        location: "Sixth Street",
      },
      {
        id: "sunna_fun_08",
        type: "Fun",
        title: "404 Error Stage",
        location: "Sixth Street",
      },
      {
        id: "sunna_fun_09",
        type: "Fun",
        title: "Bangboo Statue near Box Galaxy",
        location: "Sixth Street",
      },
      {
        id: "sunna_fun_10",
        type: "Fun",
        title: "Mr. Panda at Coff Cafe",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "sunna_rnd_01",
        type: "Random",
        title: "Coff Cafe",
        location: "Lumina Square",
        time: ["Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "sunna_rnd_02",
        type: "Random",
        title: "JC Pharmacy",
        location: "Lumina Square",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "sunna_rnd_03",
        type: "Random",
        title: "N.E.P.S - Inside",
        location: "Lumina Square",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "sunna_rnd_04",
        type: "Random",
        title: "Yum Cha Sin",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "sunna_rnd_05",
        type: "Random",
        title: "404 Error",
        location: "Sixth Street",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "sunna_rnd_06",
        type: "Random",
        title: "Coff Cafe",
        location: "Sixth Street",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "trigger",
  //   name: "Trigger",
  //   attribute: "Electric",
  //   specialty: "Stun",
  //   faction: "Obol Squad",
  //   rarity: "S",
  //   color: "#dcac48",
  //   images: ["/agent/Trigger.webp"],
  //   version: "1.6",
  //   events: [],
  // },
  // {
  //   id: "vivian",
  //   name: "Vivian",
  //   fullName: "Vivian Banshee",
  //   attribute: "Ether",
  //   specialty: "Anomaly",
  //   faction: "Mockingbird",
  //   rarity: "S",
  //   color: "#7676ad",
  //   images: [
  //     "/agent/Vivian_Banshee.webp",
  //     "/outfit/Vivian_Banshee_Iris_of_the_Shore.webp",
  //   ],
  //   version: "1.7",
  //   events: [],
  // },
  // {
  //   id: "yanagi",
  //   name: "Yanagi",
  //   fullName: "Tsukishiro Yanagi",
  //   attribute: "Electric",
  //   specialty: "Anomaly",
  //   faction: "Hollow Special Operations Section 6",
  //   rarity: "S",
  //   color: "#44a2ab",
  //   images: ["/agent/Tsukishiro_Yanagi.webp"],
  //   version: "1.3",
  //   events: [],
  // },
  {
    id: "ye_shunguang",
    name: "Ye Shunguang",
    rarity: "S",
    attribute: "Physical",
    specialAttribute: "Honed Edge",
    specialty: "Attack",
    birthDate: "January 20",
    species: "Thiren",
    faction: "Yunkui Summit",
    color: "#f9e88c",
    images: [
      "/agent/Ye_Shunguang.webp",
      "/agent/Ye_Shunguang_Enlightened_Mind.webp",
      "/outfit/Ye_Shunguang_Touch_of_Dawnlight.webp",
    ],
    version: "2.5",
    events: [
      // INVITATION EVENTS
      {
        id: "ye_shunguang_inv_01",
        type: "Invites",
        title: "Fur Grooming Techniques",
        location: "Failume Heights",
        choices: [
          {
            text: "Of course!",
            result: "Normal",
          },
          {
            text: "I'm a real pro!",
            result: "Significant",
          },
        ],
      },
      {
        id: "ye_shunguang_inv_02",
        type: "Invites",
        title: "Lumina Experience Guide",
        location: "Lumina Square",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ye_shunguang_inv_03",
        type: "Invites",
        title: "Movie-Watching Guide",
        location: "Lumina Square",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ye_shunguang_inv_04",
        type: "Invites",
        title: "Story of the Stars",
        location: "Failume Heights",
        choices: [
          {
            text: "The stars and moon were keeping you company.",
            result: "Normal",
          },
          {
            text: [
              "The breeze was listening to your voice.",
              "Lets wait together.",
            ],
            result: "Normal",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "ye_shunguang_01",
        type: "Wish",
        title: "Gacha Extravaganza",
        location: "Sixth Street - Box Galaxy",
      },
      {
        id: "ye_shunguang_02",
        type: "Wish",
        title: "Pets and Responsibilities",
        location: "Failume Heights - Fluffy",
      },
      {
        id: "ye_shunguang_03",
        type: "Wish",
        title: "Lucky Draw",
        location: "Lumina Square - Newsstand",
      },
      {
        id: "ye_shunguang_04",
        type: "Wish",
        title: "Miracle of Life",
        location: "Blazewood - Cactus",
      },
      {
        id: "ye_shunguang_05",
        type: "Wish",
        title: "Future Dreams",
        location: "Failume Heights - Observation Deck",
      },
      // FUN EVENTS
      {
        id: "ye_shunguang_fun_01",
        type: "Fun",
        title: "The Simmer",
        location: "Lumina Square",
      },
      {
        id: "ye_shunguang_fun_02",
        type: "Fun",
        title: "Gravity Cinema - Right Poster",
        location: "Lumina Square",
      },
      {
        id: "ye_shunguang_fun_03",
        type: "Fun",
        title: "Quality Tea",
        location: "Lumina Square",
      },
      {
        id: "ye_shunguang_fun_04",
        type: "Fun",
        title: "Lumina Square Station",
        location: "Lumina Square",
      },
      {
        id: "ye_shunguang_fun_05",
        type: "Fun",
        title: "Balabala Tong Sui",
        location: "Failume Heights",
      },
      {
        id: "ye_shunguang_fun_06",
        type: "Fun",
        title: "Yum Cha Sin",
        location: "Failume Heights",
      },
      {
        id: "ye_shunguang_fun_07",
        type: "Fun",
        title: "Random Play Branch",
        location: "Failume Heights",
      },
      {
        id: "ye_shunguang_fun_08",
        type: "Fun",
        title: "Cyclical Destiny Sculpture",
        location: "Failume Heights",
      },
      {
        id: "ye_shunguang_fun_09",
        type: "Fun",
        title: "A-Shuo",
        location: "Failume Heights",
      },
      {
        id: "ye_shunguang_fun_10",
        type: "Fun",
        title: "Coff Cafe",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "ye_shunguang_rnd_01",
        type: "Random",
        title: "Random Play Branch",
        location: "Failume Heights",
        time: ["Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ye_shunguang_rnd_02",
        type: "Random",
        title: "Aqua Mirage Aquarium",
        location: "Fantasy Resort",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "The little fish will have a better life.",
            result: "Normal",
          },
          {
            text: "And their shoal also has a brighter future ahead.",
            result: "Normal",
          },
          {
            text: "Just like... us and New Eridu!",
            result: "Decrease",
          },
        ],
      },
      {
        id: "ye_shunguang_rnd_03",
        type: "Random",
        title: "N.E.P.S.",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "You can add each other on Knock Knock.",
            result: "Normal",
          },
          {
            text: "That'll make you friends, and there's no need for such formalities between friends.",
            result: "Decrease",
          },
        ],
      },
      {
        id: "ye_shunguang_rnd_04",
        type: "Random",
        title: "Near HIA Club",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        image: "/event/ye_shunguang/ye_shunguang_rnd_04.webp",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ye_shunguang_rnd_05",
        type: "Random",
        title: "Coastal Fishing Spot",
        location: "Port Elpis",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ye_shunguang_rnd_06",
        type: "Random",
        title: "Counter",
        location: "Random Play",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Wow!",
            result: "Decrease",
          },
          {
            text: "That sounds amazing, Senior!",
            result: "Normal",
          },
        ],
      },
    ],
  },
  {
    id: "yidhari",
    name: "Yidhari",
    fullName: "Yidhari Murphy",
    rarity: "S",
    attribute: "Ice",
    specialty: "Rupture",
    birthDate: "March 19",
    species: "Thiren",
    faction: "Spook Shack",
    color: "#f6e2c0",
    images: ["/agent/Yidhari_Murphy.webp"],
    version: "2.3",
    isWip: true,
    events: [],
  },
  {
    id: "yixuan",
    name: "Yixuan",
    rarity: "S",
    attribute: "Ether",
    specialAttribute: "Auric Ink",
    specialty: "Rupture",
    birthDate: "December 03",
    species: "Human",
    faction: "Yunkui Summit",
    color: "#f9e88c",
    images: ["/agent/Yixuan.webp", "/outfit/Yixuan_Trails_of_Ink.webp"],
    version: "2.0",
    events: [
      // INVITATION EVENTS
      {
        id: "yixuan_inv_01",
        type: "Invites",
        title: "A Trip Together",
        location: "Lumina Square",
        choices: [
          {
            text: "What do you think about it, Shifu?",
            result: "Normal",
          },
          {
            text: "Any tips, Shif? I'd love to know!",
            result: "Significant",
          },
        ],
      },
      {
        id: "yixuan_inv_02",
        type: "Invites",
        title: "Beverage Training",
        location: "Failume Heights",
        choices: [
          {
            text: "That's a level of meditation only you could achieve, Shifu.",
            result: "Significant",
          },
          {
            text: "Is that training? It sounds like torture!",
            result: "Normal",
          },
        ],
      },
      {
        id: "yixuan_inv_03",
        type: "Invites",
        title: "Land of Vibrant Life",
        location: "Reverb Arena",
        choices: [
          {
            text: "Sometimes I really miss the old days.",
            result: "Normal",
          },
          {
            text: "I'll always remember the time I spent with you, Shifu.",
            result: "Significant",
          },
        ],
      },
      {
        id: "yixuan_inv_04",
        type: "Invites",
        title: "Sound of the Tide",
        location: "Port Elpis",
        choices: [
          {
            text: "I see...",
            result: "Normal",
          },
          {
            text: "I think you'll have good fortune, Shifu.",
            result: "Significant",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "yixuan_01",
        type: "Wish",
        title: "An Unfinished Story",
        location: "Failume Heights - Devon Pawnshop",
      },
      {
        id: "yixuan_02",
        type: "Wish",
        title: "Qingming Birds",
        location: "Failume Heights - Fluffy",
      },
      {
        id: "yixuan_03",
        type: "Wish",
        title: "The Taste of Happiness",
        location: "Failume Heights - Tong Sui Shop",
      },
      {
        id: "yixuan_04",
        type: "Wish",
        title: "Like Today",
        location: "Failume Heights - Seagaze Road",
      },
      {
        id: "yixuan_05",
        type: "Wish",
        title: "Herbs",
        location: "Failume Heights - Peace Herbal",
      },
      // FUN EVENTS
      {
        id: "yixuan_fun_01",
        type: "Fun",
        title: "Capsule Hotel",
        location: "Lumina Square",
      },
      {
        id: "yixuan_fun_02",
        type: "Fun",
        title: "Cyclical Destiny Sculpture",
        location: "Failume Heights",
      },
      {
        id: "yixuan_fun_03",
        type: "Fun",
        title: "Suibian Temple",
        location: "Failume Heights",
      },
      {
        id: "yixuan_fun_04",
        type: "Fun",
        title: "Fluffy",
        location: "Failume Heights",
      },
      {
        id: "yixuan_fun_05",
        type: "Fun",
        title: "Good Goods",
        location: "Failume Heights",
      },
      {
        id: "yixuan_fun_06",
        type: "Fun",
        title: "Near Cable Car",
        location: "Failume Heights",
      },
      {
        id: "yixuan_fun_07",
        type: "Fun",
        title: "Seagaze Road",
        location: "Failume Heights",
      },
      {
        id: "yixuan_fun_08",
        type: "Fun",
        title: "Godfinger",
        location: "Sixth Street",
      },
      {
        id: "yixuan_fun_09",
        type: "Fun",
        title: "Newsstand",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "yixuan_rnd_01",
        type: "Random",
        title: "Fluffy",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Looks like it's hopeless.",
            result: "Normal",
          },
          {
            text: "I'm sure Shifu has an idea.",
            result: "Significant",
          },
        ],
      },
      {
        id: "yixuan_rnd_02",
        type: "Random",
        title: "Good Goods",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "I see.",
            result: "Normal",
          },
          {
            text: "You've got a real talent for making new friends!",
            result: "Significant",
          },
        ],
      },
      {
        id: "yixuan_rnd_03",
        type: "Random",
        title: "Talking to a Nervous Office Worker",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "You'd best take what Shifu says seriously!",
            result: "Significant",
          },
          {
            text: "Be sure to look after your pets.",
            result: "Normal",
          },
        ],
      },
      {
        id: "yixuan_rnd_04",
        type: "Random",
        title: "Talking to an Old Man",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Was there really a theft? I never heard about it...",
            result: "Normal",
          },
          {
            text: "You're a great actor, Shifu!",
            result: "Significant",
          },
        ],
      },
      {
        id: "yixuan_rnd_05",
        type: "Random",
        title: "Talking to Two Girls",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "That's right!",
            result: "Normal",
          },
          {
            text: "I'm lucky to have such a great Shifu.",
            result: "Significant",
          },
        ],
      },
      {
        id: "yixuan_rnd_06",
        type: "Random",
        title: "Yum Cha Sin",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Whatever works.",
            result: "Decrease",
          },
          {
            text: "I'm just happy to get the chance to be out with you.",
            result: "Significant",
          },
        ],
      },
    ],
  },
  {
    id: "yuzuha",
    name: "Yuzuha",
    fullName: "Ukinami Yuzuha",
    rarity: "S",
    attribute: "Physical",
    specialty: "Support",
    birthDate: "November 02",
    species: "Human",
    faction: "Spook Shack",
    color: "#f6e2c0",
    images: [
      "/agent/Ukinami_Yuzuha.webp",
      "/outfit/Ukinami_Yuzuha_Tanuki_in_Broad_Daylight.webp",
    ],
    version: "2.1",
    events: [
      // INVITATION EVENTS
      {
        id: "ukinami_yuzuha_inv_01",
        type: "Invites",
        title: "Good Omen",
        location: "Failume Heights - A-Shuo",
        choices: [
          {
            text: "About relationships.",
            result: "Significant",
          },
          {
            text: "About wealth.",
            result: "Normal",
          },
          {
            text: "About academics or career.",
            result: "Normal",
          },
        ],
      },
      {
        id: "ukinami_yuzuha_inv_02",
        type: "Invites",
        title: "Observation Log",
        location: "Failume Heights - Yum Cha Sin",
        choices: [
          { text: "Yes.", result: "Significant" },
          { text: "No.", result: "Normal" },
        ],
      },
      {
        id: "ukinami_yuzuha_inv_03",
        type: "Invites",
        title: "Sea of Plenty",
        location: "Port Elpis",
        choices: [
          { text: "Ocean.", result: "Normal" },
          { text: "Land.", result: "Normal" },
          { text: "Sky.", result: "Significant" },
        ],
      },
      {
        id: "ukinami_yuzuha_inv_04",
        type: "Invites",
        title: "Story in Progress",
        location: "Sixth Street",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "ukinami_yuzuha_wish_01",
        type: "Wish",
        title: "Through Thick and Thin",
        location: "Failume Heights - Peace Herbal",
      },
      {
        id: "ukinami_yuzuha_wish_02",
        type: "Wish",
        title: "Strange Tenant",
        location: "Failume Heights - Check Inn",
      },
      {
        id: "ukinami_yuzuha_wish_03",
        type: "Wish",
        title: "Memories About Old Items",
        location: "Failume Heights - Good Goods",
      },
      {
        id: "ukinami_yuzuha_wish_04",
        type: "Wish",
        title: "Color of the Sky",
        location: "Failume Heights - Observation Deck",
      },
      {
        id: "ukinami_yuzuha_wish_05",
        type: "Wish",
        title: "Shower Tips",
        location: "Failume Heights - Fluffy",
      },
      // FUN EVENTS
      {
        id: "ukinami_yuzuha_fun_01",
        type: "Fun",
        title: "Devon Pawnshop",
        location: "Failume Heights",
      },
      {
        id: "ukinami_yuzuha_fun_02",
        type: "Fun",
        title: "Coff Cafe Stall",
        location: "Failume Heights",
      },
      {
        id: "ukinami_yuzuha_fun_03",
        type: "Fun",
        title: "Yum Cha Sin",
        location: "Failume Heights",
      },
      {
        id: "ukinami_yuzuha_fun_04",
        type: "Fun",
        title: "Boobox",
        location: "Failume Heights",
      },
      {
        id: "ukinami_yuzuha_fun_05",
        type: "Fun",
        title: "Playground",
        location: "Lumina Square",
      },
      {
        id: "ukinami_yuzuha_fun_06",
        type: "Fun",
        title: "Quality Tea",
        location: "Lumina Square",
      },
      {
        id: "ukinami_yuzuha_fun_07",
        type: "Fun",
        title: "Box Galaxy",
        location: "Sixth Street",
      },
      {
        id: "ukinami_yuzuha_fun_08",
        type: "Fun",
        title: "Random Play",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "ukinami_yuzuha_rnd_01",
        type: "Random",
        title: "Balabala Tong Sui",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Link arms with Yuzuha)",
            result: "Normal",
          },
          {
            text: "(Rest your head on Yuzuha's shoulder)",
            result: "Significant",
          },
        ],
      },
      {
        id: "ukinami_yuzuha_rnd_02",
        type: "Random",
        title: "Good Goods",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ukinami_yuzuha_rnd_03",
        type: "Random",
        title: "Mystic Wares",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "Thanks, Yuzuha!",
            result: "Normal",
          },
          {
            text: "Wouldn't have made it without you, Yuzuha.",
            result: "Normal",
          },
          {
            text: "As expected from Yuzuha, the Prank Queen!",
            result: "Significant",
          },
        ],
      },
      {
        id: "ukinami_yuzuha_rnd_04",
        type: "Random",
        title: "Random Play Branch",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ukinami_yuzuha_rnd_05",
        type: "Random",
        title: "Yum Cha Sin",
        location: "Failume Heights",
        time: ["Morning", "Afternoon"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "ukinami_yuzuha_rnd_06",
        type: "Random",
        title: "Gravity Cinema",
        location: "Lumina Square",
        time: ["Evening"],
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
    ],
  },
  {
    id: "zhao",
    name: "Zhao",
    rarity: "S",
    attribute: "Ice",
    specialty: "Defense",
    birthDate: "October 14",
    species: "Thiren",
    faction: "Krampus Compliance Authority",
    color: "#7770fd",
    images: ["/agent/Zhao.webp"],
    version: "2.5",
    events: [
      // INVITATION EVENTS
      {
        id: "zhao_inv_01",
        type: "Invites",
        title: "Empty-Headed by the Seaside",
        location: "Port Elpis",
        choices: [
          {
            text: "(Choices don't matter)",
            result: "Normal",
          },
        ],
      },
      {
        id: "zhao_inv_02",
        type: "Invites",
        title: "The Pusher and the Swinger",
        location: "Blazewood",
        choices: [
          {
            text: "Wanna take a stroll elsewhere?",
            result: "Decrease",
          },
          {
            text: [
              "Wanna go on the swing for a bit?",
              "Just sit tight. I'll push you this time.",
            ],
            result: "Normal",
          },
        ],
      },
      {
        id: "zhao_inv_03",
        type: "Invites",
        title: "When I'm lonely, I always want to keep some pets",
        location: "Lumina Square",
        choices: [
          {
            text: ["I'd rather stick to plants.", "You can talk to me."],
            result: "Normal",
          },
          {
            text: ["How about keeping some fish?"],
            result: "Decrease",
          },
        ],
      },
      {
        id: "zhao_inv_04",
        type: "Invites",
        title: "Witness Howl's Cuteness",
        location: "Failume Heights",
        choices: [
          {
            text: "Like those three little ones at the convenience store!",
            result: "Decrease",
          },
          {
            text: "Like Mewmew!",
            result: "Decrease",
          },
          {
            text: "Like you?",
            result: "Normal",
          },
        ],
      },
      // WISH EVENTS
      {
        id: "zhao_01",
        type: "Wish",
        title: " A Small Shop",
        location: "Failume Heights - Good Goods",
      },
      {
        id: "zhao_02",
        type: "Wish",
        title: "Basic Intel",
        location: "Failume Heights - Tong Sui Shop",
      },
      {
        id: "zhao_03",
        type: "Wish",
        title: "Coffee & Tea",
        location: "Failume Heights - Coff Cafe Stall",
      },
      {
        id: "zhao_04",
        type: "Wish",
        title: "Teatime Talk",
        location: "Failume Heights - Yum Cha Sin",
      },
      {
        id: "zhao_05",
        type: "Wish",
        title: "The Same Feeling",
        location: "Port Elpis",
      },
      // FUN EVENTS
      {
        id: "zhao_fun_01",
        type: "Fun",
        title: "Dew Gardening Shop",
        location: "Lumina Square",
      },
      {
        id: "zhao_fun_02",
        type: "Fun",
        title: "N.E.P.S. - Gate",
        location: "Lumina Square",
      },
      {
        id: "zhao_fun_03",
        type: "Fun",
        title: "Cyclical Destiny Sculpture",
        location: "Failume Heights",
      },
      {
        id: "zhao_fun_04",
        type: "Fun",
        title: "Boobox",
        location: "Failume Heights",
      },
      {
        id: "zhao_fun_05",
        type: "Fun",
        title: "Porcelumex Poster",
        location: "Failume Heights",
      },
      {
        id: "zhao_fun_06",
        type: "Fun",
        title: "Fluffy",
        location: "Failume Heights",
      },
      {
        id: "zhao_fun_07",
        type: "Fun",
        title: "Newsstand",
        location: "Sixth Street",
      },
      // RANDOM ENCOUNTERS
      {
        id: "zhao_rnd_01",
        type: "Random",
        title: "Beaverson Beauty Salon",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        image: "/event/zhao/zhao_rnd_01.webp",
        choices: [
          {
            text: "Yo, just spotted you and had to say hi!",
            result: "Normal",
          },
          {
            text: "Just here to look around!",
            result: "Decrease",
          },
        ],
      },
      {
        id: "zhao_rnd_02",
        type: "Random",
        title: "Lumina Galleria",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "That's totally up your alley.",
            result: "Normal",
          },
          {
            text: "As long as they serve you well.",
            result: "Decrease",
          },
        ],
      },
      {
        id: "zhao_rnd_03",
        type: "Random",
        title: "SREC Poster",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Sixth Street!",
            result: "Normal",
          },
          {
            text: "As long as I'm with people I truly care...",
            result: "Significant",
          },
          {
            text: "I really want that set from the ad...",
            result: "Decrease",
          },
        ],
      },
      {
        id: "zhao_rnd_04",
        type: "Random",
        title: "Waterfall Soup",
        location: "Lumina Square",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Extra meaty pork noodles!",
            result: "Decrease",
          },
          {
            text: "What a shame.",
            result: "Decrease",
          },
          {
            text: [
              "Then I'll have a bowl of vegetable noodles too.",
              "You can have my portion of vegetables.",
            ],
            result: "Normal",
          },
        ],
      },
      {
        id: "zhao_rnd_05",
        type: "Random",
        title: "Cable Car: Failume Heights Station",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Want a hint?",
            result: "Normal",
          },
          {
            text: "You'll never come up with the right answer.",
            result: "Decrease",
          },
        ],
      },
      {
        id: "zhao_rnd_06",
        type: "Random",
        title: "Good Goods",
        location: "Failume Heights",
        time: ["Morning", "Afternoon", "Evening"],
        choices: [
          {
            text: "Are we really competing over this too!",
            result: "Decrease",
          },
          {
            text: ["Not just grown-ups...", "The kids really like you."],
            result: "Normal",
          },
        ],
      },
    ],
  },
  // {
  //   id: "zhuyuan",
  //   name: "Zhu Yuan",
  //   attribute: "Ether",
  //   specialty: "Attack",
  //   faction: "Criminal Investigation Special Response Team",
  //   rarity: "S",
  //   color: "#5ea5dd",
  //   images: ["/agent/Zhu_Yuan.webp"],
  //   version: "1.0",
  //   events: [],
  // },
];

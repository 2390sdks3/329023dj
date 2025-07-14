// Mobil menÃ¼ aÃ§ma/kapatma
(function() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.querySelector('.nav');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('nav-open');
        });
    }
})();
// Spor id map
const sport_id_map = {
    "1": "futbol",
    "2": "basketbol",
    "3": "tenis",
    "7": "voleybol"
};

// Sample data

const futbolMatches = [
  {
    "time": "00:35",
    "league": "Paraguay. Premier League.",
    "title": "Atletico Tembetary - Deportivo Recoleta",
    "url": "/event.html?id=androstreamlivech254612206",
    "id": 254612206,
    "_sort_key": "2025-07-15 00:30"
  },
  {
    "time": "01:00",
    "league": "Argentina. Premier League.",
    "title": "Banfield - Defensa y Justicia",
    "url": "/event.html?id=androstreamlivech254613283",
    "id": 254613283,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:00",
    "league": "Brazil. Serie B.",
    "title": "Athletic Minas Gerais - Avai",
    "url": "/event.html?id=androstreamlivech254613284",
    "id": 254613284,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:00",
    "league": "Bolivia. Primera division.",
    "title": "Nacional Potosi - Real Oruro",
    "url": "/event.html?id=androstreamlivech254613285",
    "id": 254613285,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:00",
    "league": "Brazil. Copa Espirito Santo. Quarter-finals. Second leg.",
    "title": "Real Noroeste - Capixaba SC",
    "url": "/event.html?id=androstreamlivech254613286",
    "id": 254613286,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:00",
    "league": "Brazil. Copa Paulista. Group stage.",
    "title": "Oeste SP - Santo Andre",
    "url": "/event.html?id=androstreamlivech254613293",
    "id": 254613293,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:00",
    "league": "Brazil. Copa Paulista. Group stage.",
    "title": "Guarani 2 Campinas - Rio Branco SP",
    "url": "/event.html?id=androstreamlivech254613294",
    "id": 254613294,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:30",
    "league": "Brazil. Serie C.",
    "title": "Retro Brasil - Alagoano",
    "url": "/event.html?id=androstreamlivech254614519",
    "id": 254614519,
    "_sort_key": "2025-07-15 01:30"
  },
  {
    "time": "01:30",
    "league": "Brazil. Serie C.",
    "title": "Maringa - Brusque",
    "url": "/event.html?id=androstreamlivech254614521",
    "id": 254614521,
    "_sort_key": "2025-07-15 01:30"
  },
  {
    "time": "02:00",
    "league": "Brazil. Serie A.",
    "title": "Juventude RS - Sport Recife",
    "url": "/event.html?id=androstreamlivech254527458",
    "id": 254527458,
    "_sort_key": "2025-07-15 02:00"
  },
  {
    "time": "02:00",
    "league": "Colombia. Serie B.",
    "title": "Atletico Huila - Deportes Quindio",
    "url": "/event.html?id=androstreamlivech254615739",
    "id": 254615739,
    "_sort_key": "2025-07-15 02:00"
  }
];

const basketbolMatches = [
  {
    "time": "01:00",
    "league": "NBA. Summer league.",
    "title": "Indiana Pacers - Chicago Bulls",
    "url": "/event.html?id=androstreamlivech254504314",
    "id": 254504314,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:00",
    "league": "Brazil. U20. Catarinense.",
    "title": "ADIEE / Avai / FME U20 - Ajab Secel U20",
    "url": "/event.html?id=androstreamlivech254613406",
    "id": 254613406,
    "_sort_key": "2025-07-15 01:00"
  },
  {
    "time": "01:30",
    "league": "NBA. Summer league.",
    "title": "Dallas Mavericks - Charlotte Hornets",
    "url": "/event.html?id=androstreamlivech254504312",
    "id": 254504312,
    "_sort_key": "2025-07-15 01:30"
  },
  {
    "time": "01:40",
    "league": "Rocket League.",
    "title": "Raiders (Red) - Knights (Yellow)",
    "url": "/event.html?id=androstreamlivech254614957",
    "id": 254614957,
    "_sort_key": "2025-07-15 01:40"
  },
  {
    "time": "01:55",
    "league": "Nations League. U23. Venezuela.",
    "title": "Puerto Rico U23 - Argentina U21",
    "url": "/event.html?id=androstreamlivech254615562",
    "id": 254615562,
    "_sort_key": "2025-07-15 01:55"
  },
  {
    "time": "05:00",
    "league": "NBA. Summer league.",
    "title": "Sacramento Kings - Phoenix Suns",
    "url": "/event.html?id=androstreamlivech254504313",
    "id": 254504313,
    "_sort_key": "2025-07-15 05:00"
  },
  {
    "time": "05:00",
    "league": "WNBA.",
    "title": "Golden State Valkyries (w) - Phoenix Mercury (w)",
    "url": "/event.html?id=androstreamlivech254504315",
    "id": 254504315,
    "_sort_key": "2025-07-15 05:00"
  },
  {
    "time": "05:30",
    "league": "NBA. Summer league.",
    "title": "LA Lakers - LA Clippers",
    "url": "/event.html?id=androstreamlivech254504318",
    "id": 254504318,
    "_sort_key": "2025-07-15 05:30"
  }
];

const tenisMatches = [
  {
    "time": "23:30",
    "league": "UTR Pro. Women. Boston.",
    "title": "Isaacs A - Vico J",
    "url": "/event.html?id=androstreamlivech254608496",
    "id": 254608496,
    "_sort_key": "2025-07-14 23:30"
  },
  {
    "time": "00:35",
    "league": "ATP Challenger. Granby. Qualification.",
    "title": "Watt J - Rice K",
    "url": "/event.html?id=androstreamlivech254504621",
    "id": 254504621,
    "_sort_key": "2025-07-15 00:35"
  },
  {
    "time": "01:30",
    "league": "ITF. Women. Doubles. Granby.",
    "title": "Osuigwe V / Scott K - Giavara H / Osborne A",
    "url": "/event.html?id=androstreamlivech254606103",
    "id": 254606103,
    "_sort_key": "2025-07-15 01:30"
  },
  {
    "time": "04:00",
    "league": "ATP. Los Cabos. Hard.",
    "title": "Habib H - Kovacevic A",
    "url": "/event.html?id=androstreamlivech254504600",
    "id": 254504600,
    "_sort_key": "2025-07-15 04:00"
  },
  {
    "time": "04:00",
    "league": "ATP-D. Los Cabos. Hard.",
    "title": "Lammons N / Withrow J - Duckworth J / Walton A",
    "url": "/event.html?id=androstreamlivech254504607",
    "id": 254504607,
    "_sort_key": "2025-07-15 04:00"
  },
  {
    "time": "05:30",
    "league": "ATP. Los Cabos. Hard.",
    "title": "Vukic A - Nava E",
    "url": "/event.html?id=androstreamlivech254504599",
    "id": 254504599,
    "_sort_key": "2025-07-15 05:30"
  },
  {
    "time": "07:00",
    "league": "ATP. Los Cabos. Hard.",
    "title": "Kachmazov A - Ficovich J P",
    "url": "/event.html?id=androstreamlivech254504597",
    "id": 254504597,
    "_sort_key": "2025-07-15 07:00"
  },
  {
    "time": "07:00",
    "league": "ATP. Los Cabos. Hard.",
    "title": "Daniel T - Hernandez Alex",
    "url": "/event.html?id=androstreamlivech254504598",
    "id": 254504598,
    "_sort_key": "2025-07-15 07:00"
  },
  {
    "time": "10:30",
    "league": "WTA. Iasi. Clay.",
    "title": "Tig P M - Carle M L",
    "url": "/event.html?id=androstreamlivech254391837",
    "id": 254391837,
    "_sort_key": "2025-07-15 10:30"
  },
  {
    "time": "11:00",
    "league": "ATP Challenger. Pozoblanco.",
    "title": "Sanches Izquierdo N - Elias G",
    "url": "/event.html?id=androstreamlivech254391815",
    "id": 254391815,
    "_sort_key": "2025-07-15 11:00"
  },
  {
    "time": "11:00",
    "league": "ATP Challenger. Pozoblanco.",
    "title": "Soto M - Martineau M",
    "url": "/event.html?id=androstreamlivech254391817",
    "id": 254391817,
    "_sort_key": "2025-07-15 11:00"
  },
  {
    "time": "11:00",
    "league": "ATP Challenger. Pozoblanco.",
    "title": "Sultanov K - Purtseladze S",
    "url": "/event.html?id=androstreamlivech254391820",
    "id": 254391820,
    "_sort_key": "2025-07-15 11:00"
  },
  {
    "time": "11:00",
    "league": "WTA 125K. Rome.",
    "title": "Radivojevic L - Palicova B",
    "url": "/event.html?id=androstreamlivech254528002",
    "id": 254528002,
    "_sort_key": "2025-07-15 11:00"
  },
  {
    "time": "11:00",
    "league": "WTA. Hamburg. Clay.",
    "title": "Tomova V - Maria T",
    "url": "/event.html?id=androstreamlivech254528150",
    "id": 254528150,
    "_sort_key": "2025-07-15 11:00"
  },
  {
    "time": "11:00",
    "league": "WTA. Hamburg. Clay.",
    "title": "Lys E - Romero Gormaz L",
    "url": "/event.html?id=androstreamlivech254528151",
    "id": 254528151,
    "_sort_key": "2025-07-15 11:00"
  },
  {
    "time": "11:00",
    "league": "WTA. Hamburg. Clay.",
    "title": "Sharma A - Jacquemot E",
    "url": "/event.html?id=androstreamlivech254528153",
    "id": 254528153,
    "_sort_key": "2025-07-15 11:00"
  },
  {
    "time": "11:30",
    "league": "ATP. Gstaad. Clay.",
    "title": "Cerundolo J M - Struff J-L",
    "url": "/event.html?id=androstreamlivech254391779",
    "id": 254391779,
    "_sort_key": "2025-07-15 11:30"
  },
  {
    "time": "11:30",
    "league": "ATP Challenger. Bunschoten.",
    "title": "BlanÑaneaux G - Tabur C",
    "url": "/event.html?id=androstreamlivech254391798",
    "id": 254391798,
    "_sort_key": "2025-07-15 11:30"
  },
  {
    "time": "11:30",
    "league": "ATP Challenger. Bunschoten.",
    "title": "Houkes M - Geerts M",
    "url": "/event.html?id=androstreamlivech254391801",
    "id": 254391801,
    "_sort_key": "2025-07-15 11:30"
  },
  {
    "time": "11:30",
    "league": "ATP Challenger. Bunschoten.",
    "title": "Ferreira Silva F - Gakhov I",
    "url": "/event.html?id=androstreamlivech254391846",
    "id": 254391846,
    "_sort_key": "2025-07-15 11:30"
  },
  {
    "time": "11:30",
    "league": "ATP. Gstaad. Clay.",
    "title": "Comesana F - Trungelliti M",
    "url": "/event.html?id=androstreamlivech254528000",
    "id": 254528000,
    "_sort_key": "2025-07-15 11:30"
  },
  {
    "time": "12:00",
    "league": "ATP. Bastad. Clay.",
    "title": "Gaston H - Tseng Chun-Hsin",
    "url": "/event.html?id=androstreamlivech254391785",
    "id": 254391785,
    "_sort_key": "2025-07-15 12:00"
  },
  {
    "time": "12:00",
    "league": "ATP. Bastad. Clay.",
    "title": "Ofner S - Dzumhur D",
    "url": "/event.html?id=androstreamlivech254391786",
    "id": 254391786,
    "_sort_key": "2025-07-15 12:00"
  },
  {
    "time": "12:00",
    "league": "ATP Challenger. San Marino.",
    "title": "Gea A - Mayot H",
    "url": "/event.html?id=androstreamlivech254391829",
    "id": 254391829,
    "_sort_key": "2025-07-15 12:00"
  },
  {
    "time": "12:00",
    "league": "WTA. Iasi. Clay.",
    "title": "Waltert S - Sevastova A",
    "url": "/event.html?id=androstreamlivech254391836",
    "id": 254391836,
    "_sort_key": "2025-07-15 12:00"
  },
  {
    "time": "12:00",
    "league": "WTA. Iasi. Clay.",
    "title": "Avanesyan E - Prisacariu A",
    "url": "/event.html?id=androstreamlivech254391844",
    "id": 254391844,
    "_sort_key": "2025-07-15 12:00"
  },
  {
    "time": "12:00",
    "league": "ATP Challenger. San Marino.",
    "title": "Rincon D - Engel J",
    "url": "/event.html?id=androstreamlivech254392300",
    "id": 254392300,
    "_sort_key": "2025-07-15 12:00"
  },
  {
    "time": "12:30",
    "league": "ATP Challenger. Pozoblanco.",
    "title": "Cejudo M - Crawford O",
    "url": "/event.html?id=androstreamlivech254391816",
    "id": 254391816,
    "_sort_key": "2025-07-15 12:30"
  },
  {
    "time": "12:30",
    "league": "ATP Challenger. Pozoblanco.",
    "title": "Sun Fajing - Escoffier A",
    "url": "/event.html?id=androstreamlivech254391824",
    "id": 254391824,
    "_sort_key": "2025-07-15 12:30"
  },
  {
    "time": "12:30",
    "league": "WTA. Doubles. Hamburg. Clay.",
    "title": "Bayerlova M / Wuerth T - Brockmann T J / Zhenikhova S",
    "url": "/event.html?id=androstreamlivech254528133",
    "id": 254528133,
    "_sort_key": "2025-07-15 12:30"
  },
  {
    "time": "13:00",
    "league": "ATP. Gstaad. Clay.",
    "title": "Landaluce M - Goffin D",
    "url": "/event.html?id=androstreamlivech254391781",
    "id": 254391781,
    "_sort_key": "2025-07-15 13:00"
  },
  {
    "time": "13:00",
    "league": "ATP. Bastad. Clay.",
    "title": "Kopriva V - Dellien H",
    "url": "/event.html?id=androstreamlivech254391789",
    "id": 254391789,
    "_sort_key": "2025-07-15 13:00"
  },
  {
    "time": "13:00",
    "league": "ATP Challenger. Bunschoten.",
    "title": "Pucinelli de Almeida M - Den Ouden G",
    "url": "/event.html?id=androstreamlivech254391803",
    "id": 254391803,
    "_sort_key": "2025-07-15 13:00"
  },
  {
    "time": "13:00",
    "league": "ATP Challenger. Bunschoten.",
    "title": "Rottgering M - Hassan B",
    "url": "/event.html?id=androstreamlivech254392302",
    "id": 254392302,
    "_sort_key": "2025-07-15 13:00"
  },
  {
    "time": "13:00",
    "league": "ATP-D. Bastad. Clay.",
    "title": "De Jong J / Gille S - Pavlasek A / Zielinski J",
    "url": "/event.html?id=androstreamlivech254527985",
    "id": 254527985,
    "_sort_key": "2025-07-15 13:00"
  },
  {
    "time": "13:00",
    "league": "ATP. Gstaad. Clay.",
    "title": "Rinderknech A - Passaro  F",
    "url": "/event.html?id=androstreamlivech254527999",
    "id": 254527999,
    "_sort_key": "2025-07-15 13:00"
  },
  {
    "time": "13:30",
    "league": "ATP. Bastad. Clay.",
    "title": "Ymer E - Boyer T",
    "url": "/event.html?id=androstreamlivech254391787",
    "id": 254391787,
    "_sort_key": "2025-07-15 13:30"
  },
  {
    "time": "13:30",
    "league": "ATP Challenger. San Marino.",
    "title": "Fatic N - Tirante T A",
    "url": "/event.html?id=androstreamlivech254391830",
    "id": 254391830,
    "_sort_key": "2025-07-15 13:30"
  },
  {
    "time": "13:30",
    "league": "WTA. Doubles. Iasi. Clay.",
    "title": "Barnett A / Lechemia E - Feng Shuo / Zimmermann K",
    "url": "/event.html?id=androstreamlivech254527995",
    "id": 254527995,
    "_sort_key": "2025-07-15 13:30"
  },
  {
    "time": "13:30",
    "league": "WTA. Doubles. Iasi. Clay.",
    "title": "Shymanovich I / Siskova A - Bogdan A / Teichmann J",
    "url": "/event.html?id=androstreamlivech254527998",
    "id": 254527998,
    "_sort_key": "2025-07-15 13:30"
  },
  {
    "time": "13:30",
    "league": "WTA. Hamburg. Clay.",
    "title": "Noha Akugue N - Bondar A",
    "url": "/event.html?id=androstreamlivech254528155",
    "id": 254528155,
    "_sort_key": "2025-07-15 13:30"
  },
  {
    "time": "14:00",
    "league": "WTA. Hamburg. Clay.",
    "title": "Cengiz B - Kraus S",
    "url": "/event.html?id=androstreamlivech254528156",
    "id": 254528156,
    "_sort_key": "2025-07-15 14:00"
  },
  {
    "time": "14:30",
    "league": "ATP. Gstaad. Clay.",
    "title": "Carballes Baena R - Taberner C",
    "url": "/event.html?id=androstreamlivech254391774",
    "id": 254391774,
    "_sort_key": "2025-07-15 14:30"
  },
  {
    "time": "14:30",
    "league": "ATP-D. Bastad. Clay.",
    "title": "Matos R / Melo M - Harper C / Seggerman R",
    "url": "/event.html?id=androstreamlivech254527984",
    "id": 254527984,
    "_sort_key": "2025-07-15 14:30"
  },
  {
    "time": "14:30",
    "league": "WTA 125K. Porto.",
    "title": "Diatchenko V - Knutson G A",
    "url": "/event.html?id=androstreamlivech254528158",
    "id": 254528158,
    "_sort_key": "2025-07-15 14:30"
  },
  {
    "time": "15:00",
    "league": "ATP. Bastad. Clay.",
    "title": "Ugo Carabelli C - Garin C",
    "url": "/event.html?id=androstreamlivech254391784",
    "id": 254391784,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "15:00",
    "league": "ATP. Bastad. Clay.",
    "title": "Ymer M - Van de Zandschulp B",
    "url": "/event.html?id=androstreamlivech254391788",
    "id": 254391788,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "15:00",
    "league": "ATP Challenger. San Marino.",
    "title": "Basile P - Vallejo A D",
    "url": "/event.html?id=androstreamlivech254391795",
    "id": 254391795,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "15:00",
    "league": "ATP Challenger. San Marino.",
    "title": "Collarini A - Neumayer L",
    "url": "/event.html?id=androstreamlivech254391831",
    "id": 254391831,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "15:00",
    "league": "ATP-D. Bastad. Clay.",
    "title": "Grevelius E / Heinonen A - Arneodo R / Guinard M",
    "url": "/event.html?id=androstreamlivech254527987",
    "id": 254527987,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "15:00",
    "league": "WTA. Doubles. Hamburg. Clay.",
    "title": "Uchijima Moyuka / Zheng Saisai - Fossa Huergo N / Kempen M",
    "url": "/event.html?id=androstreamlivech254528131",
    "id": 254528131,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "15:00",
    "league": "WTA. Hamburg. Clay.",
    "title": "Boisson L - Grabher J",
    "url": "/event.html?id=androstreamlivech254528152",
    "id": 254528152,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "15:00",
    "league": "WTA 125K. Porto.",
    "title": "Valentova T - Jorge F",
    "url": "/event.html?id=androstreamlivech254528157",
    "id": 254528157,
    "_sort_key": "2025-07-15 15:00"
  },
  {
    "time": "16:00",
    "league": "ATP Challenger. Bunschoten.",
    "title": "Barrena A - Jianu F C",
    "url": "/event.html?id=androstreamlivech254391797",
    "id": 254391797,
    "_sort_key": "2025-07-15 16:00"
  },
  {
    "time": "16:00",
    "league": "ATP. Gstaad. Clay.",
    "title": "Kym J - Hemery C",
    "url": "/event.html?id=androstreamlivech254528160",
    "id": 254528160,
    "_sort_key": "2025-07-15 16:00"
  },
  {
    "time": "16:00",
    "league": "WTA 125K. Doubles. Porto.",
    "title": "Liang En Shuo / Plipuech P - Ovcharenko E / Webley-Smith E",
    "url": "/event.html?id=androstreamlivech254528162",
    "id": 254528162,
    "_sort_key": "2025-07-15 16:00"
  },
  {
    "time": "16:00",
    "league": "WTA 125K. Doubles. Porto.",
    "title": "Christie F / Wagner A - Cascino E / Monnet C",
    "url": "/event.html?id=androstreamlivech254528167",
    "id": 254528167,
    "_sort_key": "2025-07-15 16:00"
  },
  {
    "time": "16:30",
    "league": "ATP. Bastad. Clay.",
    "title": "Barrios Vera M T - Navone M",
    "url": "/event.html?id=androstreamlivech254391783",
    "id": 254391783,
    "_sort_key": "2025-07-15 16:30"
  },
  {
    "time": "16:30",
    "league": "ATP Challenger. San Marino.",
    "title": "Dellien M - Klein L",
    "url": "/event.html?id=androstreamlivech254391794",
    "id": 254391794,
    "_sort_key": "2025-07-15 16:30"
  },
  {
    "time": "16:30",
    "league": "ATP-D. Gstaad. Clay.",
    "title": "Balaji N. S / Bollipalli R C - Paul J / Stricker D",
    "url": "/event.html?id=androstreamlivech254527990",
    "id": 254527990,
    "_sort_key": "2025-07-15 16:30"
  },
  {
    "time": "16:30",
    "league": "ATP Challenger. Doubles. San Marino.",
    "title": "Vega Hernandez D / Molchanov D - Cervantes I / Rincon D",
    "url": "/event.html?id=androstreamlivech254528136",
    "id": 254528136,
    "_sort_key": "2025-07-15 16:30"
  },
  {
    "time": "16:30",
    "league": "WTA 125K. Porto.",
    "title": "Voloshchuk A - Watson H",
    "url": "/event.html?id=androstreamlivech254528159",
    "id": 254528159,
    "_sort_key": "2025-07-15 16:30"
  },
  {
    "time": "17:00",
    "league": "WTA 125K. Rome.",
    "title": "Marcinko P - Salkova D",
    "url": "/event.html?id=androstreamlivech254528001",
    "id": 254528001,
    "_sort_key": "2025-07-15 17:00"
  },
  {
    "time": "17:00",
    "league": "WTA. Doubles. Hamburg. Clay.",
    "title": "Kichenok N / Ninomiya M - Noha Akugue N / Schunk N-M",
    "url": "/event.html?id=androstreamlivech254528134",
    "id": 254528134,
    "_sort_key": "2025-07-15 17:00"
  },
  {
    "time": "17:30",
    "league": "WTA 125K. Doubles. Porto.",
    "title": "Cabrera L / Preston T - Bhatia R / Drazic M",
    "url": "/event.html?id=androstreamlivech254528163",
    "id": 254528163,
    "_sort_key": "2025-07-15 17:30"
  },
  {
    "time": "17:30",
    "league": "WTA 125K. Doubles. Porto.",
    "title": "Diatchenko V / Hruncakova V - Brooks M / Chong E W",
    "url": "/event.html?id=androstreamlivech254528164",
    "id": 254528164,
    "_sort_key": "2025-07-15 17:30"
  },
  {
    "time": "18:00",
    "league": "ATP Challenger. Doubles. San Marino.",
    "title": "Drzewiecki K / Ho Ray - Pichler D / Pokorny L",
    "url": "/event.html?id=androstreamlivech254528125",
    "id": 254528125,
    "_sort_key": "2025-07-15 18:00"
  },
  {
    "time": "18:00",
    "league": "ATP Challenger. Doubles. San Marino.",
    "title": "Jecan M A / Liutarevich I - Gomez F A / Martinez L D",
    "url": "/event.html?id=androstreamlivech254528138",
    "id": 254528138,
    "_sort_key": "2025-07-15 18:00"
  },
  {
    "time": "18:00",
    "league": "WTA. Hamburg. Clay.",
    "title": "Serban R G - Korpatsch T",
    "url": "/event.html?id=androstreamlivech254528149",
    "id": 254528149,
    "_sort_key": "2025-07-15 18:00"
  },
  {
    "time": "18:30",
    "league": "ATP. Gstaad. Clay.",
    "title": "Shevchenko A - Wawrinka S",
    "url": "/event.html?id=androstreamlivech254391777",
    "id": 254391777,
    "_sort_key": "2025-07-15 18:30"
  },
  {
    "time": "18:30",
    "league": "WTA. Iasi. Clay.",
    "title": "Cirstea S - Buzarnescu M",
    "url": "/event.html?id=androstreamlivech254391841",
    "id": 254391841,
    "_sort_key": "2025-07-15 18:30"
  },
  {
    "time": "19:00",
    "league": "ATP Challenger. Pozoblanco.",
    "title": "Added D - Moro Canas A",
    "url": "/event.html?id=androstreamlivech254391822",
    "id": 254391822,
    "_sort_key": "2025-07-15 19:00"
  },
  {
    "time": "19:00",
    "league": "ATP Challenger. San Marino.",
    "title": "Royer V - Mena F",
    "url": "/event.html?id=androstreamlivech254392299",
    "id": 254392299,
    "_sort_key": "2025-07-15 19:00"
  },
  {
    "time": "19:00",
    "league": "ATP Challenger. Doubles. Bunschoten.",
    "title": "Kaukovalta P / Niklas-Salminen P - Hermans M / Veldheer M",
    "url": "/event.html?id=androstreamlivech254528129",
    "id": 254528129,
    "_sort_key": "2025-07-15 19:00"
  },
  {
    "time": "19:30",
    "league": "WTA 125K. Doubles. Porto.",
    "title": "Ayukawa M / Szabo B - Santos A F / Voloshchuk A",
    "url": "/event.html?id=androstreamlivech254528161",
    "id": 254528161,
    "_sort_key": "2025-07-15 19:30"
  },
  {
    "time": "20:00",
    "league": "WTA 125K. Rome.",
    "title": "Quevedo Kaitlin - Selekhmeteva O",
    "url": "/event.html?id=androstreamlivech254528003",
    "id": 254528003,
    "_sort_key": "2025-07-15 20:00"
  },
  {
    "time": "20:00",
    "league": "WTA 125K. Rome.",
    "title": "Brancaccio N - Trevisan M",
    "url": "/event.html?id=androstreamlivech254528004",
    "id": 254528004,
    "_sort_key": "2025-07-15 20:00"
  },
  {
    "time": "20:30",
    "league": "ATP Challenger. Doubles. Pozoblanco.",
    "title": "Cejudo M / Lopez Escribano A - Ingildsen J / Pereira T",
    "url": "/event.html?id=androstreamlivech254528147",
    "id": 254528147,
    "_sort_key": "2025-07-15 20:30"
  },
  {
    "time": "22:00",
    "league": "ATP Challenger. Pozoblanco.",
    "title": "Grenier H - Shelbayh A",
    "url": "/event.html?id=androstreamlivech254391814",
    "id": 254391814,
    "_sort_key": "2025-07-15 22:00"
  },
  {
    "time": "22:00",
    "league": "ATP Challenger. Doubles. Pozoblanco.",
    "title": "Butvilas E / Moro Canas A - Duncan S / MacKinlay J",
    "url": "/event.html?id=androstreamlivech254528122",
    "id": 254528122,
    "_sort_key": "2025-07-15 22:00"
  }
];

const voleybolMatches = [
  {
    "time": "23:55",
    "league": "Russia. Women. Regional competitions. Liga Pro. Tver.",
    "title": "Pantery-pro (w) - Foksi-pro (w)",
    "url": "/event.html?id=androstreamlivech254610185",
    "id": 254610185,
    "_sort_key": "2025-07-14 23:55"
  }
];

const karsilasmalar = [
  {
    "time": "23:30",
    "league": "NBA Summer League",
    "title": "Houston Rockets - Atlanta Hawks",
    "url": "/event.html?id=androstreamlivess1"
  },
  {
    "time": "01:30",
    "league": "NBA Summer League",
    "title": "Dallas Mavericks - Charlotte Hornets",
    "url": "/event.html?id=androstreamlivenba"
  },
  {
    "time": "03:30",
    "league": "NBA Summer League",
    "title": "SA Spurs - Utah Jazz",
    "url": "/event.html?id=androstreamlivenba"
  },
  {
    "time": "05:30",
    "league": "NBA Summer League",
    "title": "LA Lakers - LA Clippers",
    "url": "/event.html?id=androstreamlivenba"
  },
  {
    "time": "23:30",
    "league": "NBA Summer League",
    "title": "Detroit Pistons - Minnesota TW",
    "url": "/event.html?id=androstreamlivenba"
  }
];

const channels = [
  { title: "BeIN Sports 1", url: "/event.html?id=androstreamlivebs1" },
  { title: "BeIN Sports 2", url: "/event.html?id=androstreamlivebs2" },
  { title: "BeIN Sports 3", url: "/event.html?id=androstreamlivebs3" },
  { title: "BeIN Sports 4", url: "/event.html?id=androstreamlivebs4" },
  { title: "BeIN Sports 5", url: "/event.html?id=androstreamlivebs5" },
  { title: "BeIN Sports Max 1", url: "/event.html?id=androstreamlivebsm1" },
  { title: "BeIN Sports Max 2", url: "/event.html?id=androstreamlivebsm2" },
  { title: "S Sport", url: "/event.html?id=androstreamlivess1" },
  { title: "S Sport 2", url: "/event.html?id=androstreamlivess2" },
  { title: "Tivibu Spor", url: "/event.html?id=androstreamlivets" },
  { title: "Tivibu Spor 1", url: "/event.html?id=androstreamlivets1" },
  { title: "Tivibu Spor 2", url: "/event.html?id=androstreamlivets2" },
  { title: "Tivibu Spor 3", url: "/event.html?id=androstreamlivets3" },
  { title: "Tivibu Spor 4", url: "/event.html?id=androstreamlivets4" },
  { title: "Smart Spor 1", url: "/event.html?id=androstreamlivesm1" },
  { title: "Smart Spor 2", url: "/event.html?id=androstreamlivesm2" },
  { title: "Euro Sport 1", url: "/event.html?id=androstreamlivees1" },
  { title: "Euro Sport 2", url: "/event.html?id=androstreamlivees2" },
  { title: "iDMAN Tv", url: "/event.html?id=androstreamliveidm" },
  { title: "Trt 1", url: "/event.html?id=androstreamlivetrt1" },
  { title: "Trt Spor", url: "/event.html?id=androstreamlivetrts" },
  { title: "Trt Spor YÄ±ldÄ±z", url: "/event.html?id=androstreamlivetrtsy" },
  { title: "Atv", url: "/event.html?id=androstreamliveatv" },
  { title: "A Spor", url: "/event.html?id=androstreamliveas" },
  { title: "A2", url: "/event.html?id=androstreamlivea2" },
  { title: "Tjk Tv", url: "/event.html?id=androstreamlivetjk" },
  { title: "Ht Spor", url: "/event.html?id=androstreamliveht" },
  { title: "Nba Tv", url: "/event.html?id=androstreamlivenba" },
  { title: "Tv8", url: "/event.html?id=androstreamlivetv8" },
  { title: "Tv8,5", url: "/event.html?id=androstreamlivetv85" },
  { title: "Tabi Spor", url: "/event.html?id=androstreamlivetb" },
  { title: "Tabi Spor 1", url: "/event.html?id=androstreamlivetb1" },
  { title: "Tabi Spor 2", url: "/event.html?id=androstreamlivetb2" },
  { title: "Tabi Spor 3", url: "/event.html?id=androstreamlivetb3" },
  { title: "Tabi Spor 4", url: "/event.html?id=androstreamlivetb4" },
  { title: "Tabi Spor 5", url: "/event.html?id=androstreamlivetb5" },
  { title: "Tabi Spor 6", url: "/event.html?id=androstreamlivetb6" },
  { title: "Tabi Spor 7", url: "/event.html?id=androstreamlivetb7" },
  { title: "Tabi Spor 8", url: "/event.html?id=androstreamlivetb8" },
  { title: "Fb Tv", url: "/event.html?id=androstreamlivefb" },
  { title: "Cbc Sport", url: "/event.html?id=androstreamlivecbcs" },
  { title: "Gs Tv", url: "/event.html?id=androstreamlivegs" },
  { title: "Sports Tv", url: "/event.html?id=androstreamlivesptstv" },
  { title: "Exxen Tv", url: "/event.html?id=androstreamliveexn" },
  { title: "Exxen Sports 1", url: "/event.html?id=androstreamliveexn1" },
  { title: "Exxen Sports 2", url: "/event.html?id=androstreamliveexn2" },
  { title: "Exxen Sports 3", url: "/event.html?id=androstreamliveexn3" },
  { title: "Exxen Sports 4", url: "/event.html?id=androstreamliveexn4" },
  { title: "Exxen Sports 5", url: "/event.html?id=androstreamliveexn5" },
  { title: "Exxen Sports 6", url: "/event.html?id=androstreamliveexn6" },
  { title: "Exxen Sports 7", url: "/event.html?id=androstreamliveexn7" },
  { title: "Exxen Sports 8", url: "/event.html?id=androstreamliveexn8" }
];

// DOM elements
const searchInput = document.getElementById('searchInput');
const matchList = document.getElementById('matchList');
const channelList = document.getElementById('channelList');
const tabs = document.querySelectorAll('.tab');
const viewBtns = document.querySelectorAll('.view-btn');
const contentTitle = document.querySelector('.content-title');
const contentCount = document.querySelector('.content-count');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');

// State
let currentTab = 'matches';
let currentView = 'grid';
let searchQuery = '';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    renderMatches();
    setupEventListeners();
});

// Event listeners
function setupEventListeners() {
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.dataset.tab;
            switchTab(tabId);
        });
    });

    // View switching
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const view = btn.dataset.view;
            switchView(view);
        });
    });

    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        if (currentTab === 'channels') {
            renderChannels();
        } else {
            renderMatches();
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', () => {
        // Mobile menu functionality can be added here
        console.log('Mobile menu clicked');
    });

    // Play button
    const playButton = document.getElementById('customPlayButton');
    const mainVideoPlayer = document.getElementById('mainVideoPlayer');
    const playerOverlay = document.querySelector('.player-overlay');
    const playerInfo = document.querySelector('.player-info');
    const videoPlayerDiv = document.querySelector('.video-player');
    let isPlaying = false;
    let overlayVisible = true;

    function showOverlayAndInfo() {
        if (playerOverlay) playerOverlay.style.display = '';
        if (playerInfo) playerInfo.style.display = '';
        overlayVisible = true;
    }
    function hideOverlayAndInfo() {
        if (isPlaying) {
            if (playerOverlay) playerOverlay.style.display = 'none';
            if (playerInfo) playerInfo.style.display = 'none';
            overlayVisible = false;
        }
    }

    if (playButton && mainVideoPlayer) {
        playButton.addEventListener('click', () => {
            if (mainVideoPlayer.paused) {
                mainVideoPlayer.play();
            } else {
                mainVideoPlayer.pause();
            }
        });
    }
    if (mainVideoPlayer && playerOverlay && playerInfo && videoPlayerDiv) {
        mainVideoPlayer.addEventListener('play', () => {
            isPlaying = true;
            hideOverlayAndInfo();
        });
        mainVideoPlayer.addEventListener('pause', () => {
            isPlaying = false;
            showOverlayAndInfo();
        });
        mainVideoPlayer.addEventListener('ended', () => {
            isPlaying = false;
            showOverlayAndInfo();
        });
        videoPlayerDiv.addEventListener('mouseenter', () => {
            showOverlayAndInfo();
        });
        videoPlayerDiv.addEventListener('mouseleave', () => {
            hideOverlayAndInfo();
        });
    }
    // Ortadaki bÃ¼yÃ¼k play sadece ilk seferde gÃ¶rÃ¼nsÃ¼n
    let firstPlay = true;
    if (mainVideoPlayer && playerOverlay) {
        mainVideoPlayer.addEventListener('play', () => {
            if (firstPlay) {
                playerOverlay.style.display = 'none';
                firstPlay = false;
            }
        });
    }
    // Mini oynat/durdur ve tam ekran butonlarÄ±
    const miniPlayBtn = document.getElementById('miniPlayBtn');
    const miniPlayIcon = document.getElementById('miniPlayIcon');
    const miniPauseIcon = document.getElementById('miniPauseIcon');
    const miniFullscreenBtn = document.getElementById('miniFullscreenBtn');
    if (miniPlayBtn && mainVideoPlayer && miniPlayIcon && miniPauseIcon) {
        miniPlayBtn.addEventListener('click', () => {
            if (mainVideoPlayer.paused) {
                mainVideoPlayer.play();
            } else {
                mainVideoPlayer.pause();
            }
        });
        mainVideoPlayer.addEventListener('play', () => {
            miniPlayIcon.style.display = 'none';
            miniPauseIcon.style.display = '';
        });
        mainVideoPlayer.addEventListener('pause', () => {
            miniPlayIcon.style.display = '';
            miniPauseIcon.style.display = 'none';
        });
    }
    if (miniFullscreenBtn && mainVideoPlayer) {
        miniFullscreenBtn.addEventListener('click', () => {
            if (mainVideoPlayer.requestFullscreen) {
                mainVideoPlayer.requestFullscreen();
            } else if (mainVideoPlayer.webkitRequestFullscreen) {
                mainVideoPlayer.webkitRequestFullscreen();
            } else if (mainVideoPlayer.msRequestFullscreen) {
                mainVideoPlayer.msRequestFullscreen();
            }
        });
    }

    // Ses kontrolÃ¼
    const volumeSlider = document.getElementById('volumeSlider');
    if (mainVideoPlayer && volumeSlider) {
        volumeSlider.addEventListener('input', function() {
            mainVideoPlayer.volume = parseFloat(this.value);
        });
        // Video baÅŸladÄ±ÄŸÄ±nda slider'Ä± gÃ¼ncel tut
        mainVideoPlayer.addEventListener('volumechange', function() {
            volumeSlider.value = mainVideoPlayer.volume;
        });
    }
}

// Tab switching
function switchTab(tabId) {
    currentTab = tabId;
    // Update active tab
    tabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.tab === tabId);
    });
    // Update content
    if (tabId === 'channels') {
        matchList.style.display = 'none';
        channelList.style.display = 'grid';
        contentTitle.textContent = '7/24 Kanallar';
        renderChannels();
        // Otomatik kanal oynatma kaldÄ±rÄ±ldÄ±
    } else {
        matchList.style.display = 'grid';
        channelList.style.display = 'none';
        contentTitle.textContent = getTabTitle(tabId);
        renderMatches();
        // Otomatik maÃ§ oynatma kaldÄ±rÄ±ldÄ±
    }
}

// View switching
function switchView(view) {
    currentView = view;
    
    // Update active view button
    viewBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === view);
    });

    // Update grid classes
    if (view === 'list') {
        matchList.style.gridTemplateColumns = '1fr';
        channelList.style.gridTemplateColumns = '1fr';
    } else {
        matchList.style.gridTemplateColumns = '';
        channelList.style.gridTemplateColumns = '';
    }
}

// Get tab title
function getTabTitle(tabId) {
    const titles = {
        'matches': 'KarÅŸÄ±laÅŸmalar',
        'football': 'Futbol MaÃ§larÄ±',
        'basketball': 'Basketbol MaÃ§larÄ±',
        'tennis': 'Tenis MaÃ§larÄ±',
        'volleyball': 'Voleybol MaÃ§larÄ±'
    };
    return titles[tabId] || 'KarÅŸÄ±laÅŸmalar';
}

// Kategoriye gÃ¶re doÄŸru diziyi dÃ¶ndÃ¼r
function getFilteredMatches() {
    let filtered = [];
    if (currentTab === 'matches') {
        filtered = karsilasmalar;
    } else if (currentTab === 'football') {
        filtered = futbolMatches;
    } else if (currentTab === 'basketball') {
        filtered = basketbolMatches;
    } else if (currentTab === 'tennis') {
        filtered = tenisMatches;
    } else if (currentTab === 'volleyball') {
        filtered = voleybolMatches;
    } else {
        filtered = karsilasmalar;
    }
    // Arama filtresi
    if (searchQuery) {
        filtered = filtered.filter(match =>
            (match.title && match.title.toLowerCase().includes(searchQuery)) ||
            (match.league && match.league.toLowerCase().includes(searchQuery))
        );
    }
    return filtered;
}

// Filter channels
function getFilteredChannels() {
    let filtered = channels;
    if (searchQuery) {
        filtered = filtered.filter(channel =>
            channel.title.toLowerCase().includes(searchQuery)
        );
    }
    return filtered;
}

// Render matches
function renderMatches() {
    const filteredMatches = getFilteredMatches();
    contentCount.textContent = `${filteredMatches.length} maÃ§`;

    matchList.innerHTML = filteredMatches.map(match => {
        // Sadece saat bilgisini gÃ¶ster
        let timeOnly = match.time;
        // EÄŸer time alanÄ±nda tarih ve saat birlikte varsa, sadece saat kÄ±smÄ±nÄ± al
        if (typeof timeOnly === 'string' && timeOnly.includes(' ')) {
            const parts = timeOnly.split(' ');
            timeOnly = parts[parts.length - 1];
        }
        return `
        <div class="match-card" onclick="selectMatch('${match.id ? match.id : match.title}')">
            <div class="match-header">
                <span class="match-league">${match.league}</span>
                <div class="match-badges">
                    <span class="badge live">CanlÄ±</span>
                    ${match.status === 'upcoming' ? '<span class="badge upcoming">YakÄ±nda</span>' : ''}
                    ${match.rating ? `
                        <span class="badge rating">
                            <svg viewBox="0 0 24 24" fill="currentColor" width="12" height="12">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                            </svg>
                            ${match.rating}
                        </span>
                    ` : ''}
                </div>
            </div>
            
            <div class="match-teams">
                <div class="teams-container">
                    <div class="team">
                        <div class="team-name">${match.title ? match.title.split(' - ')[0] : match.homeTeam}</div>
                    </div>
                    <div class="match-score">
                        ${match.score || '<span class="vs-text">vs</span>'}
                    </div>
                    <div class="team">
                        <div class="team-name">${match.title ? match.title.split(' - ')[1] : match.awayTeam}</div>
                    </div>
                </div>
            </div>

            <div class="match-footer">
                <div class="footer-item">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12,6 12,12 16,14"></polyline>
                    </svg>
                    <span>${timeOnly}</span>
                </div>
                ${match.viewers ? `
                    <div class="footer-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>${match.viewers.toLocaleString()}</span>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    }).join('');
}

// Render channels
function renderChannels() {
    const filteredChannels = getFilteredChannels();
    contentCount.textContent = `${filteredChannels.length} kanal`;

    channelList.innerHTML = filteredChannels.map(channel => `
        <div class="channel-card" onclick="selectChannel('${channel.title}')">
            <div class="channel-header">
                <div class="channel-info">
                    <div class="channel-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polygon points="5,3 19,12 5,21 5,3"></polygon>
                        </svg>
                    </div>
                    <div class="channel-details">
                        <h4>${channel.title}</h4>
                        <div class="channel-badges">
                            <span class="badge live">CanlÄ±</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}

// Select match
function selectMatch(matchIdOrTitle) {
    // Ã–nce karsilasmalar dizisinde ara
    let match = karsilasmalar.find(m => m.title === matchIdOrTitle || String(m.id) === String(matchIdOrTitle));
    // DiÄŸer dizilerde bulamazsa, eski matches dizilerinde ara
    if (!match) {
        match = [...futbolMatches, ...basketbolMatches, ...tenisMatches, ...voleybolMatches].find(m => String(m.id) === String(matchIdOrTitle) || m.title === matchIdOrTitle);
    }
    if (match) {
        console.log('Selected match:', match);
        const iframePlayer = document.getElementById('matchPlayer');
        // Kategori maÃ§larÄ±nda sadece url kullan
        if (iframePlayer && match.url) {
            iframePlayer.src = "about:blank";
            setTimeout(() => {
                iframePlayer.src = match.url;
            }, 50);
        }
    }
}

// Select channel
function selectChannel(channelTitle) {
    const channel = channels.find(c => c.title === channelTitle);
    if (channel) {
        console.log('Selected channel:', channel);
        // KanalÄ± oynatmak iÃ§in url kullanÄ±labilir
        const iframePlayer = document.getElementById('matchPlayer');
        if (iframePlayer && channel.url) {
            iframePlayer.src = channel.url;
        }
        
        // SayfanÄ±n en Ã¼stÃ¼ne kaydÄ±r
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Update featured match
function updateFeaturedMatch(match) {
    const matchTitle = document.querySelector('.match-title');
    const league = document.querySelector('.league');
    const liveBadge = document.querySelector('.live-badge');
    const mainVideoPlayer = document.getElementById('mainVideoPlayer');

    if (matchTitle) {
        matchTitle.textContent = `${match.homeTeam} vs ${match.awayTeam}`;
    }
    if (league) {
        league.textContent = match.league;
    }
    if (liveBadge) {
        if (match.status === 'live') {
            liveBadge.style.display = '';
        } else {
            liveBadge.style.display = 'none';
        }
    }
    // HLS desteÄŸi ile video oynat
    if (mainVideoPlayer && match.src) {
        if (mainVideoPlayer.canPlayType('application/vnd.apple.mpegurl')) {
            mainVideoPlayer.src = match.src;
            mainVideoPlayer.load();
            mainVideoPlayer.play();
        } else if (window.Hls) {
            if (window.hlsInstance) {
                window.hlsInstance.destroy();
            }
            const hls = new Hls();
            hls.loadSource(match.src);
            hls.attachMedia(mainVideoPlayer);
            window.hlsInstance = hls;
            hls.on(Hls.Events.MANIFEST_PARSED, function() {
                mainVideoPlayer.play();
            });
        } else {
            mainVideoPlayer.src = '';
            alert('TarayÄ±cÄ±nÄ±z bu yayÄ±nÄ± desteklemiyor.');
        }
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
let lastScrollY = window.scrollY;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Header background effect
    if (currentScrollY > 100) {
        header.style.background = 'rgba(15, 23, 42, 0.98)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'rgba(15, 23, 42, 0.95)';
        header.style.backdropFilter = 'blur(20px)';
    }
    
    lastScrollY = currentScrollY;
});

// Loading animation for cards
function showLoadingCards() {
    const loadingHTML = Array(6).fill().map(() => `
        <div class="match-card loading">
            <div style="height: 20px; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 16px;"></div>
            <div style="height: 60px; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 16px;"></div>
            <div style="height: 16px; background: rgba(255,255,255,0.1); border-radius: 4px;"></div>
        </div>
    `).join('');
    
    matchList.innerHTML = loadingHTML;
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards for animation
function observeCards() {
    document.querySelectorAll('.match-card, .channel-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Call observe cards after rendering
const originalRenderMatches = renderMatches;
const originalRenderChannels = renderChannels;

renderMatches = function() {
    originalRenderMatches.call(this);
    setTimeout(observeCards, 100);
};

renderChannels = function() {
    originalRenderChannels.call(this);
    setTimeout(observeCards, 100);
};

// MaÃ§ kartlarÄ±na tÄ±klama ile video deÄŸiÅŸimi

function scrollToPlayerSection() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

matchList.addEventListener('click', function(e) {
    const card = e.target.closest('.match-card');
    if (card) {
        const matchId = card.getAttribute('onclick')?.match(/'(.*?)'/)?.[1];
        if (matchId) {
            selectMatch(matchId);
            setTimeout(scrollToPlayerSection, 100);
        }
    }
});

channelList.addEventListener('click', function(e) {
    const card = e.target.closest('.channel-card');
    if (card) {
        const url = card.getAttribute('data-url');
        const iframePlayer = document.getElementById('matchPlayer');
        if (iframePlayer && url) {
            iframePlayer.src = url;
            setTimeout(scrollToPlayerSection, 100);
        }
    }
});

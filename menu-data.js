/* ===================================================================
   Aquí — Menüdaten (Quelle: Speisekarte Summerstage 2026)
   Preise in Euro. "2 Stk / 3 Stk" wird über price2 dargestellt.
   tag: optionales Label (z.B. "vegetarisch")
   =================================================================== */

const FOOD_MENU = [
  {
    title: "Entradas",
    items: [
      { name: "Elote", price: "6,2", desc: "Gegrillter Maiskolben, Sour Cream, Smokey Rub" },
      { name: "Totopos", price: "6,2", desc: "Tortilla-Chips mit Guacamole, Salsa Roja, Sour Cream" },
      { name: "Nachos / Loaded Fries · con Queso", price: "8,9", desc: "Pico de Gallo, Guacamole, Käse, Bohnen" },
      { name: "Nachos / Loaded Fries · con Carnitas", price: "11,9", desc: "Geschmortes Schweinefleisch, Jalapeños" },
      { name: "Mix Platte", price: "16,9", desc: "In frittierter Weizentortilla-Schale: Onion Rings, Tortillas, gegrillte Maiskolben, Chili Poppers, Sour Cream, Guacamole und Salsa Roja" },
      { name: "Gazpacho", price: "5,9", desc: "Würzige kalte Tomatensuppe" },
      { name: "Chicken Wings mit Sweet Chili", price: "9,9", desc: "7 Stück, dazu Salsa Roja" }
    ]
  },
  {
    title: "Ensaladas",
    items: [
      { name: "Monterey Salad", tag: "vegetarisch", price: "9,2", desc: "Gemischter Salat, Tomaten, Mais, Bohnen", options: "+ gegrillte Hühnerbrust (120g) 3,9 · + Garnele (4 Stk) 4,9" },
      { name: "New Mexico Salad", price: "8,9", desc: "Gekochte Süßkartoffel, Tomaten, Zwiebeln, Mais, Feta" },
      { name: "Ceviche", price: "15,9", desc: "Kabeljau, Leche de Tigre, gelbe Chili, rote Zwiebeln, gekochte Süßkartoffel, Limettensaft, Koriander, Knoblauch" },
      { name: "Cocktail de Shrimp", price: "12,9", desc: "Shrimps mit Cocktailsauce, Pico de Gallo, Limettensaft und Koriander" }
    ]
  },
  {
    title: "Tacos",
    note: "Maistortillas, serviert mit Limetten · 2 Stk / 3 Stk",
    items: [
      { name: "Pollo", price: "7,9", price2: "9,9", desc: "Hühnerbrust in Mais-Sahne-Sauce mit karamellisierten Zwiebeln" },
      { name: "Birria", price: "8,9", price2: "10,9", desc: "Geschmortes Rindfleisch mit Käse, Guacamole, Pico de Gallo" },
      { name: "Carnitas", price: "7,9", price2: "9,9", desc: "Geschmortes Schweinefleisch, frische rote Zwiebel, Koriander, Jalapeños" },
      { name: "California Baja Fish", price: "7,9", price2: "11,9", desc: "Knusprig gebackener Kabeljau, Coleslaw, Guacamole, Chipotle-Mayo-Salsa" },
      { name: "Taco Mix (Pollo, Birria, Carnitas)", price: "9,9", price2: "17,5", desc: "3 Stk / 6 Stk" }
    ]
  },
  {
    title: "Mexican Classics",
    note: "3 gestapelte Maistortillas",
    items: [
      { name: "Sweet Potato Enchiladas", price: "13,9", desc: "Gefüllt mit Süßkartoffel, Feta & Käse, überbacken mit Cheddar-Sauce, dazu karamellisierte Zwiebel, Salsa Verde und Reis" },
      { name: "Enchiladas con Verdura", price: "12,9", desc: "Gefüllt mit geschmortem Gemüse, überbacken mit Cheddar-Käsemix, dazu Reis" },
      { name: "Enchiladas con Pollo", price: "13,9", desc: "Gefüllt mit Hühnerbrust und Mais in Sahne-Sauce, überbacken mit Cheddar-Käsemix, dazu Reis" }
    ]
  },
  {
    title: "Burrito",
    note: "Gerollte Weizentortillas mit schwarzen Bohnen, Mais, Käse-Mix, Salat, Reis, Tomatensauce",
    items: [
      { name: "con Pollo", price: "13,9", desc: "Gegrillte Hühnerbrust" },
      { name: "Carnitas", price: "13,9", desc: "Geschmortes Schweinefleisch" },
      { name: "Birria", price: "15,9", desc: "Geschmortes Rindfleisch" }
    ]
  },
  {
    title: "Fajitas",
    note: "4 Weizentortillas zum Selbstbefüllen, mit Guacamole, Salsa Roja, Sour Cream, Salat, Käsemix",
    items: [
      { name: "con Pollo", price: "17,9", desc: "Saftige gegrillte Hühnerbrust, Zwiebeln, Tricolore-Paprika" },
      { name: "con Carne", price: "19,9", desc: "Gegrillte Steakstreifen, Zwiebeln, Tricolore-Paprika" },
      { name: "Mixtas", price: "21,9", desc: "Gegrillte Hühnerbrust mit Steakstreifen, Zwiebeln, Tricolore-Paprika" }
    ]
  },
  {
    title: "Quesadillas",
    note: "Zusammengeklappte gegrillte Weizentortillas mit geschmolzenem Käse, dazu Reis, Salat, Pico de Gallo und Sour Cream",
    items: [
      { name: "Chicken Avocado", price: "12,9", desc: "Saftig gegrillte Hühnerbrust mit schwarzen Bohnen, dazu Guacamole" },
      { name: "Spicy Pork", price: "12,9", desc: "Gegrillt-geschmortes Schweinefleisch mit Salat, dazu Jalapeños" },
      { name: "Cheesy Beef", price: "13,9", desc: "Gegrillt-geschmortes Rindfleisch, dazu Guacamole" },
      { name: "Verduras", tag: "vegetarisch", price: "12,9", desc: "Würzig geschmortes Gemüse, dazu Salsa Roja" }
    ]
  },
  {
    title: "Bowls",
    items: [
      { name: "Burrito Bowl", price: "15,9", desc: "Fleisch nach Wahl, Reis, eingelegte rote Zwiebeln, Blattsalat, schwarze Bohnen, Sour Cream, Pico de Gallo, Guacamole, Limetten", options: "Schweinefleisch · Hühnerbrust · Rindfleisch" },
      { name: "California Baja Fish Bowl", price: "16,9", desc: "Knusprig frittierter Kabeljau, Coleslaw und drei hausgemachte Salsas: Avocado-Mango, Chipotle-Mayo-Limette, Guacamole" }
    ]
  },
  {
    title: "Kids",
    items: [
      { name: "Grilled Chicken", price: "7,5", desc: "Gegrillte Hühnerbrust mit Pommes und Ketchup" },
      { name: "Small Quesadillas", price: "6,9", desc: "Gegrillte Weizentortillas mit Cheddar-Käsemix und Sour Cream" }
    ]
  },
  {
    title: "Salsa & Sides",
    items: [
      { name: "Salsa Roja", price: "2,2", desc: "Tomate-Chili-Salsa" },
      { name: "Salsa Verde", price: "2,2", desc: "Grüne Tomaten, Chili, Limettensaft" },
      { name: "Pico de Gallo", price: "2,5", desc: "Tomaten, Zwiebel, Chili, Kräuter" },
      { name: "Chipotle Salsa", price: "2,5", desc: "Jalapeños, Chili, Zwiebel, Knoblauch" },
      { name: "Guacamole", price: "2,5" },
      { name: "Sweet Potato Fries", price: "5,5", desc: "mit Trüffel-Mayo" },
      { name: "Pommes Frites", price: "5,2", desc: "mit Ketchup" },
      { name: "Portion Reis", price: "3,9" },
      { name: "Jalapeños", price: "2,2" },
      { name: "Ensaladas Mixtas", price: "5,5" },
      { name: "Weizentortilla (1 Stück)", price: "0,8" }
    ]
  },
  {
    title: "Dessert",
    items: [
      { name: "Churros", price: "5,9", desc: "3 Stück · Choco-Sauce, Karamell oder Erdbeere" },
      { name: "Cheesecake", price: "5,9" },
      { name: "Eis Kugel im Becher", price: "4,9", desc: "Zitrone oder Passion Fruit" }
    ]
  }
];

const DRINKS_MENU = [
  {
    title: "Aperitif & Gespritzt",
    items: [
      { name: "Weißer Spritzer", price: "4,6" },
      { name: "Sarti Spritz", price: "6,9" },
      { name: "Strawberry Spritz", price: "7,9" },
      { name: "Passion Fruit Spritz", price: "7,9" },
      { name: "Select „Premium“ Spritz", price: "7,9" },
      { name: "Summer Secco", price: "6,9", desc: "Red Bull Summer Edition, Prosecco" },
      { name: "Minty Spritz", price: "6,9", desc: "Organic Minty Blackberry, Prosecco" },
      { name: "Sommerspritzer 0,5 l", price: "6,5" },
      { name: "Hugo", price: "6,5" }
    ]
  },
  {
    title: "Cocktails & Longdrinks",
    items: [
      { name: "Caipirinha", price: "12,2" },
      { name: "Caipiroshka", price: "12,2" },
      { name: "Strawberry Caipiroshka", price: "12,9" },
      { name: "Mojito", price: "12,2" },
      { name: "Strawberry Mojito", price: "12,9" },
      { name: "Classic Margarita", price: "12,2" },
      { name: "Strawberry Margarita", price: "12,9" },
      { name: "Daiquiri", price: "12,2" },
      { name: "Strawberry Daiquiri", price: "12,9" },
      { name: "Mango Daiquiri", price: "12,9" },
      { name: "Moscow Mule", price: "12,9" },
      { name: "Hollywood Mule", price: "12,9" },
      { name: "Negroni", price: "12,9" },
      { name: "Pornstar Martini", price: "12,9" },
      { name: "Espresso Martini", price: "12,9" },
      { name: "Pina Colada", price: "12,5" },
      { name: "Mango Colada", price: "12,5" },
      { name: "Pimms No.1 Cup", price: "8,9" },
      { name: "Belsazar Rose & Red Bull Organic Tonic", price: "9,8" },
      { name: "Belsazar Riesling & Red Bull Organic Tonic", price: "9,8" }
    ]
  },
  {
    title: "Pitchers · 1 Liter",
    note: "alle 36,0",
    items: [
      { name: "Daiquiri" }, { name: "Strawberry Daiquiri" }, { name: "Mango Daiquiri" },
      { name: "Classic Margarita" }, { name: "Strawberry Margarita" }
    ]
  },
  {
    title: "Alkoholfreie Cocktails",
    items: [
      { name: "Virgin Watermelon Mojito", price: "7,9" },
      { name: "Strawberry Mocktail", price: "7,9" },
      { name: "Strawberry Blast Smoothie", price: "8,5" },
      { name: "Tropical Mango Splash", price: "8,5" },
      { name: "Coconut Kiss", price: "7,9" },
      { name: "Mango Kiss", price: "8,5" }
    ]
  },
  {
    title: "Hausgemachte Limonade",
    note: "0,25 / 0,5 l",
    items: [
      { name: "Mango-Maracuja", price: "4,9", price2: "6,9" },
      { name: "Gurke-Minze", price: "4,9", price2: "6,9" },
      { name: "Erdbeere-Zitrone", price: "4,9", price2: "6,9" }
    ]
  },
  {
    title: "Soft Drinks",
    items: [
      { name: "Römerquelle prickelnd / still", price: "3,7", price2: "5,4", desc: "0,33 / 0,75 l" },
      { name: "Coca Cola / Zero / Fanta", price: "3,9", desc: "0,33 l" },
      { name: "Spezi", price: "4,2", desc: "0,5 l" },
      { name: "Almdudler / Zero", price: "3,9", desc: "0,33 l" },
      { name: "Wasser Zitrone / Himbeere / Holunder", price: "2,4", price2: "3,5", desc: "0,25 / 0,5 l" },
      { name: "Rauch Ice Tea Pfirsich / Zitrone", price: "3,9", desc: "0,33 l" },
      { name: "Makava BIO", price: "3,9", desc: "0,33 l" },
      { name: "Zisch Frisch Keli Maracuja", price: "3,9", desc: "0,33 l" },
      { name: "The Organics by Red Bull", price: "4,5", desc: "0,25 l · Tonic / Black Orange / Minty Blackberry / Bitter Lemon / Ginger Beer" }
    ]
  },
  {
    title: "Energy Drinks",
    note: "0,25 l",
    items: [
      { name: "Red Bull", price: "4,5" },
      { name: "Red Bull Zero", price: "4,5" },
      { name: "Red Bull Peach Edition", price: "4,5" },
      { name: "Red Bull Summer Edition", price: "4,5" }
    ]
  },
  {
    title: "Bier",
    items: [
      { name: "Ottakringer Lager vom Fass", price: "4,4", price2: "5,4", desc: "0,33 / 0,5 l" },
      { name: "Ottakringer Bio Zwickl vom Fass", price: "4,6", price2: "5,6", desc: "0,33 / 0,5 l" },
      { name: "Schneider Weiße Weizen", price: "5,5", desc: "0,5 l" },
      { name: "Ottakringer Radler", price: "5,5", desc: "0,5 l" },
      { name: "Null Komma Josef", tag: "alkoholfrei", price: "5,1", desc: "0,5 l" },
      { name: "Corona", price: "4,9", desc: "0,33 l" }
    ]
  },
  {
    title: "Sekt",
    note: "1/8 l / Flasche 0,75 l",
    items: [
      { name: "BIO Kattus Organic Grüner Veltliner", price: "5,3", price2: "34" },
      { name: "BIO Kattus Organic Rosé", price: "5,3", price2: "34" }
    ]
  },
  {
    title: "Weiß / Rosé",
    note: "1/8 l / Flasche 0,75 l",
    items: [
      { name: "Summerstage White · Hagn Grüner Veltliner", price: "4,3", price2: "26" },
      { name: "Wiener gem. Satz DAC · Christ, Wien", price: "4,5", price2: "28" },
      { name: "Gelber Muskateller · Polz, Südsteiermark", price: "4,5", price2: "28" },
      { name: "Sauvignon Blanc · Polz, Südsteiermark", price: "4,5", price2: "26" },
      { name: "Summerstage Rosé · Hagn, Weinviertel", price: "4,5", price2: "27" }
    ]
  },
  {
    title: "Rot",
    note: "1/8 l / Flasche 0,75 l",
    items: [
      { name: "Summerstage Cuvée · Hagn", price: "4,6", price2: "28" },
      { name: "Rioja · Spanien", price: "4,9", price2: "29" },
      { name: "Zweigelt · Markowitsch", price: "4,2", price2: "28" },
      { name: "Malbec · Argentinien", price: "5,2", price2: "29" }
    ]
  },
  {
    title: "Tequila y Mezcal",
    note: "2cl",
    items: [
      { name: "Sierra Tequila", price: "2,9" },
      { name: "Cuervo 1800 Añejo", price: "3,5" },
      { name: "Don Julio Reposado", price: "3,5" },
      { name: "Patrón Añejo", price: "3,5" },
      { name: "Mezcal Zignum Añejo", price: "3,5" }
    ]
  },
  {
    title: "Rum",
    note: "2cl",
    items: [
      { name: "Captain Morgan", price: "5,2" },
      { name: "Diplomático Reserva 12yo", price: "4,5" },
      { name: "Ron Zacapa Centenario 23yo", price: "5,2" }
    ]
  },
  {
    title: "Spirits",
    items: [
      { name: "Baileys", price: "5,2", desc: "4cl" },
      { name: "Finsbury London Gin", price: "3,5", desc: "2cl" },
      { name: "Tanqueray London Dry Gin", price: "3,5", desc: "2cl" },
      { name: "Johnny Walker Red", price: "3,5", desc: "2cl" },
      { name: "Jack Daniels", price: "3,5", desc: "2cl" },
      { name: "Jameson", price: "3,5", desc: "2cl" },
      { name: "Talisker Sky", price: "3,5", desc: "2cl" },
      { name: "Smirnoff Vodka", price: "3,2", desc: "2cl" },
      { name: "Ketel One Vodka", price: "3,5", desc: "2cl" },
      { name: "Belsazar Vermouth Riesling / Rosé", price: "5,2", desc: "4cl" }
    ]
  },
  {
    title: "Shots",
    items: [
      { name: "Lime Shot", price: "5,5" },
      { name: "Hot Strawberry", price: "6,5" },
      { name: "Mango Shot", price: "6,5" }
    ]
  }
];

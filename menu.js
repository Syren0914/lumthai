// Sample menu data (you can replace it with your actual menu data)
const menuData = {
    specials: [
      
      {
        name:"Pad Thai",
        price:"13.95",
        description: "Traditional Thai thin rice noodles stir-fried in tamarind sauce with eggs, scallions, and bean sprouts, topped with crushed peanuts. Cooked with your choice of meat.",
        image: "/Lumthai_Food/nooddle and Rice/Pad thai beef.jpg",
        type:"specials"

      },
      {
        name:"Pineapple Fried Rice",
        type:"specials",
        price:"20.00",
        description:"Stir-fried jasmine rice with shrimps, eegs, pineapple, cashew nut, tomatoes and scallions served in a pineapple shell.",
        image:"/Lumthai_Food/Signature/Pineapple FR.jpg"
      },
      {
        name:"Crispy Duck Curry",
        type:"specials",
        price:"20.00",
        description:"Boneless deep-fried duck in creamy coconut red curry sauce with pineapple, cherry tomatoes, bell peppers, basil leaves, and lychee. Served with jasmine rice.",
        image:"/Lumthai_Food/Signature/Crisy Duck curry.jpg"

      },{
        name:"Crispy Chicken Ka Prao",
        type:"specials",
        price:"16.00",
        description:"Deep-fried crispy chicken stir-fried with spicy and sweet basil sauce, bell peppers, and onions topped with fried basil leaves.",
        image:"/Lumthai_Food/Signature/Crispy Chicken Kaprao.jpg"
      },{
        name:"Crispy Shrimp Ka Prao",
        type:"specials",
        price:"18.00",
        description:"Deep-fried crispy shrimp stir-fried with spicy and sweet basil sauce, bell peppers, and onions topped with fried basil leaves.",
        image:"/Lumthai_Food/Signature/Crispy Shrimp Ka prao.jpg"
      },{
        name:"Crispy Eggplant",
        type:"specials",
        price:"18.00",
        description:"Lightly battered crispy eggplant and bell peppers topped with chili basil and garlic sauce. Served with jasmine rice.",
        image:"/images/food-8.png"
      },{
        name:"papaya Salad With Fried Chicken",
        type:"specials",
        price:"20.00",
        description:"Papaya salad with our cooked to prefection crispy chicken and a scoop of sticky rice.",
        image:"/images/food-8.png"
      },{
        name:"Lumthai Cashew Chicken",
        type:"specials",
        price:"18.00",
        description:"Deep Fried Chicken stir-fried with roasted cashew nuts, onions, scallions, celery, and bell peppers sautéed in Lum Thai’s special sauce.",
        image:"/Lumthai_Food/Signature/Cashew Chicken.jpg"
      },{
        name:"Lumthai Cashew Shrimp",
        type:"specials",
        price:"18.00",
        description:"Deep Fried Chicken or Shrimp stir-fried with roasted cashew nuts, onions, scallions, celery, and bell peppers sautéed in Lum Thai’s special sauce.",
        image:""
      },{
        name:"Khao Soi",
        type:"specials",
        price:"20.00",
        description:"Thai traditional northern style fresh turmeric soup with chicken thigh cilantro, scallions, creamy coconut curry, and egg noodles. Served with pickled cabbage and red onions.",
        image:"/Lumthai_Food/Signature/Khao Soi.jpg"
      },{
        name:"Crispy Whole<br> Flounder Fish",
        type:"specials",
        price:"(Market Price)",
        description:"Deep fried whole flounder with your choice one sauce. Served with jasmine rice. Choice of sauce: <br> 1. Chili basil garlic sauce <br>(With onions, basil & bell peppers)<br> 2. Spicy chili mango salad <br>( with red onions, scallions & cilantro)<br> 3. Theee flavor sauce ( sour, sweet and spicy) <br> (With tamarind juice, onions & bell peppers)",
        image:"/images/food-28.png"
      },{
        name:"Beef Sizzling",
        type:"specials",
        price:"20.00",
        description:"Sizzling beef served with sauté mix vegetable and mushroom on a hot plate served with jasmine rice.",
        image:"/images/food-33.png"
      }
      

      
      



    ],
    appetizers: [
      {
        name: "Chicken Satay",
        price: "8.95",
        description: "Chicken skewers served with cucumbers in sweet vinegar sauce and peanut sauce.",
        image: "/Lumthai_Food/Appetizers/Chicken S.jpg",
        type:"appetizer"
      },
      {
        name: "Steamed Dumplings",
        price: "8.95",
        description: "Thai-style steamed dumplings stued with pork, shrimp and water chestnuts.",
        image: "/Lumthai_Food/Appetizers/Dumpling.jpg",
        type:"appetizer"
      },
      {
        name: "Curry Puffs",
        price: "7.95",
        description: "Flakey and crispy pastry pus lled with savory curried potatoes, chicken, and onions. Served with cucumbers in sweet vinegar sauce.",
        image: "/Lumthai_Food/Appetizers/Curry Puff.jpg",
        type:"appetizer"
      },
      {
        name: "Crispy Wontons",
        price: "7.95",
        description: "Deep fried chicken wontons with house special sauce.",
        image: "/Lumthai_Food/Appetizers/Chicken S.jpg",
        type:"appetizer"
      },
      {
        name: "Chicken Wings",
        price: "9.95",
        description: "Wings marinated in garlic sauce, then deep fried to perfection. Served with sweet chili dipping sauce.",
        image: "/Lumthai_Food/Appetizers/Wings.jpg",
        type:"appetizer"
      },
      {
        name: "Fried Calamari",
        price: "8.95",
        description: "Fresh squid lightly battered and deep fried. Served with sweet & sour sauce Deep fried shrimp wrapped in thin crispy rolls. Served with sweet & sour sauce.",
        image: "/Lumthai_Food/Appetizers/Calamari l.jpg",
        type:"appetizer"
      },
      {
        name: "Blanket Shrimp",
        price: "8.95",
        description: "Whole shrimp wrapped in spring roll wrappers and deep fried until crispy.",
        image: "/Lumthai_Food/Appetizers/Blanket Shrimp.jpg",
        type:"appetizer"
      },
      {
        name: "Crab Rangoon",
        price: "8.95",
        description: "Crab with cream cheese cooked in crispy wonton wrappers. Served with sweet and sour sauce.",
        image: "/Lumthai_Food/Appetizers/Crab Ragoon N.jpg",
        type:"appetizer"
      },
      {
        name: "Spring Rolls",
        price: "7.95",
        description: "Deep fried crispy rolls stuffed with clear noodles, carrots, and cabbage. Served with sweet & sour sauce.",
        image: "/Lumthai_Food/Appetizers/Spring Roll.jpg",
        type:"appetizer"
      },
      {
        name: "Fried Tofu",
        price: "7.95",
        description: "Deep fried tofu cubes. Served with sweet & sour sauce and crushed peanuts.",
        image: "/Lumthai_Food/Appetizers/Tofu.jpg",
        type:"appetizer"
      },
      {
        name: "Garden Herb Rolls",
        price: "8.95",
        description: "Fresh rice paper rolls stuffed with lettuce, mixed vegetables, mint, and fresh basil. Served with sweet peanut chili dipping sauce.",
        image: "/Lumthai_Food/Appetizers/Gargen Hreb roll.jpg",
        type:"appetizer"
      },{
        name: "Crispy Chives Dumplings",
        price: "7.50",
        description: "Deep fried chive dumpling serve with sweet soy sauce",
        image: "Lumthai_Food/Appetizers/Chives.jpg",
        type:"appetizer"
      },


      
    ],
    desserts: [
      {
        name: "Sticky Rice With Mango",
        price: "8.95",
        description: "Fresh soft mango served with sweetened sticky rice and topped with sweet coconut cream.",
        image: "/Lumthai_Food/Dessert/Sticky Rice Mango.jpg",
        type:"dessert"
      },{
        name: "Crispy Fried Banana With Coco Ice Cream",
        price: "8.95",
        description: "Banana wrapped in rice paper and deep fried to perfection. Served with one scoop of cocnut ice cream.",
        image: "/Lumthai_Food/Dessert/fried-banana.jpg",
        type:"dessert"

      },{
        name: "Coconut Ice Cream",
        price: "5.95",
        description: "",
        image: "/Lumthai_Food/Dessert/simple-coconut-ice-cream.jpg",
        type:"dessert"

      },{
        name: "Green Tea Ice Cream",
        price: "$5.95",
        description: "",
        image: "/Lumthai_Food/Dessert/green-tea-matcha-ice-cream-2031118-hero-01-14e95fdc74154590b112b62048ba8f67.jpg",
        type:"dessert"

      }
      
    ],
    drinks: [
      {
        name: "Thai Iced Tea",
        price: "5.00",
        description: "",
        type:"drink",
        image: "/Lumthai_Food/drink/thai-iced-tea-square-1-of-1.jpg"
      },{
        name: "Coke",
        price: "3.00",
        description: "",
        type:"drink",
        image: "https://images.unsplash.com/photo-1596803244618-8dbee441d70b?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },{
        name: "Ginger Ale",
        price: "3.00",
        type:"drink",
        description: "",
        image: "https://i5.walmartimages.com/seo/Canada-Dry-Ginger-Ale-Soda-12oz-Cans-Quantity-of-36_74e3f5cd-f5d7-4153-8b4a-96a07b75297e.b8f1a08a710b2f27be55a6cc48440e5e.jpeg"
      },{
        name: "Diet Coke",
        price: "3.00",
        type:"drink",
        description: "",
        image: "https://www.coca-cola.com/content/dam/onexp/us/en/brands/diet-coke/en_diet%20coke_prod_original_en_diet%20coke_prod_caffeine%20free_750x750_v1.jpg"
      },{
        name: "Sprite",
        price: "3.00",
        type:"drink",
        description: "",
        image: "https://m.media-amazon.com/images/I/71-29yqCPzL.jpg"
      },{
        name: "Bottled Water",
        price: "2.00",
        type:"drink",
        description: "",
        image: "https://kidspressmagazine.com/wp-content/uploads/2014/04/dreamstime_xl_12522351.jpg"
      },{
        name: "Logan Juice",
        price: "5.00",
        type:"drink",
        description: "",
        image: "/Lumthai_Food/drink/Crab Ragoon.jpg"
      },{
        name: "Lemonade",
        price: "3.00",
        type:"drink",
        description: "",
        image: "https://www.allrecipes.com/thmb/-sGgcEhnlIhqr0legC4Q7TPkRhU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/32385-best-lemonade-ever-DDMFS-4x3-8cef7761205e417499c89eb178e5ba2b.jpg"
      },{
        name: "Hot Green Tea",
        price: "4.00",
        type:"drink",
        description: "",
        image: "https://img.livestrong.com/-/clsd/getty/0f7723434c0f486bb45aa974c2f28ce0.jpg"
      },{
        name: "Hot Jasmine Tea",
        price: "4.00",
        type:"drink",
        description: "",
        image: "https://www.blizzstatic.com/dynamicmedia/image/599/6076f310bbeed.png?w=450&h=319"
      },{
        name: "Iced Black Tea",
        price: "3.00",
        type:"drink",
        description: "",
        image: "https://res.cloudinary.com/hksqkdlah/image/upload/SFS_iced_tea_41_wzgpm8.jpg"
      },{
        name: "Sparkling Water",
        price: "4.00",
        type:"drink",
        description: "",
        image: "https://blog.myfitnesspal.com/wp-content/uploads/2018/07/Is-Flavored-Sparkling-Water-Killing-Your-Weight-Loss-Goals_-1.jpg"
      },
      
    ],
    sides: [
        {
          name: "Brown Rice",
          price: "4.00",
          description: "",
          type:"sides",
          image: "/Lumthai_Food/Side/Brown Rice.jpg"
        },{
            name: "Side Thin Noodles",
            type:"sides",
            price: "4.00",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Side Wide Noodles",
            price: "4.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Side Mix Vegetable",
            price: "4.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Side Broccoli",
            price: "4.00",
            type:"sides",
            description: "",
            image: "/Lumthai_Food/Side/Broccoli.jpg"
          },{
            name: "Extra Chicken",
            price: "4.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Extra Pork",
            price: "4.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Extra Beef",
            price: "4.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Extra Shrimp",
            price: "6.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },
          {
            name: "Extra Seafood",
            price: "6.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Extra Egg",
            price: "2.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Extra Veggie",
            price: "4.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Extra Fried Tofu",
            price: "4.00",
            type:"sides",
            description: "",
            image: "https://howdaily.com/wp-content/uploads/2016/10/fried-tofu-dish-1024x683.jpg?x67400"
          },{
            name: "Sub Brown Rice",
            price: "3.00",
            type:"sides",
            description: "",
            image: "/images/logo.png"
          },{
            name: "Sticky Rice",
            price: "3.00",
            type:"sides",
            description: "",
            image: "/Lumthai_Food/Side/Rice.jpg"
          }
        
      ]
  };
  
  // Function to generate HTML for menu items
  function generateMenuHTML(menuItems) {
    let html = '';
    menuItems.forEach(item => {
      html += `
        <li>
          <div class="menu-card hover:card">
            <figure class="card-banner img-holder" style="--width: 100; --height: 100;">
                <a href="${item.image}"  data-lightbox="food-15"  >
                <img src="${item.image}" class="img-cover" width="100" height="100" loading="lazy" alt="${item.name}">
          </a>
            </figure>
            <div>
              <div class="title-wrapper">
                <h3 class="title-3">
                  <a href="#" class="card-title">${item.name}</a>
                </h3>
                <span class="badge label-1">${item.type}</span>
                <span class="span title-2">$${item.price}</span>
              </div>
              <p class="card-text label-1">${item.description}</p>
            </div>
          </div>
        </li>`;
    });
    return html;
  }
  
  // Generate HTML for each menu category
  const specialsHTML = generateMenuHTML(menuData.specials);
  const appetizersHTML = generateMenuHTML(menuData.appetizers);
  const dessertsHTML = generateMenuHTML(menuData.desserts);
  const drinksHTML = generateMenuHTML(menuData.drinks);
  const sidesHTML = generateMenuHTML(menuData.sides);

  
  // Example usage: Append generated HTML to the respective ul elements on your webpage
  document.getElementById('specials').innerHTML = specialsHTML;
  document.getElementById('appetizers').innerHTML = appetizersHTML;
  document.getElementById('desserts').innerHTML = dessertsHTML;
  document.getElementById('drinks').innerHTML = drinksHTML;
  document.getElementById('sides').innerHTML = sidesHTML;

  
// Sample menu data (you can replace it with your actual menu data)
const menuData = {
    soup:[
        {
            name: "Tom Yum",
            price: "7.00",
            description: "Spicy / sour flavored soup made with a combination of fragrant lemongrass, kaffir lime leaves, lime juice, chili paste, tomatoes, red onions, scallions, cilantro, and mushrooms. <br>Chicken/ Veggie / Soft Tofu <span class='span title-2'>$7.00</span> <br> Shrimp <span class='span title-2'>$8.00</span> <br> Seafood <span class='span title-2'>$10.00</span>" ,
            image: "/Lumthai_Food/Appetizers/Soup/Tom_Yum.jpg",
            type:"soup"
        },
        {
            name: "Tom Kha",
            price: "7.00",
            description: "Spicy / sour / creamy coconut milk lemongrass soup with galangal, shallots, lemongrass, tomatoes, red onions kaffir lime leaves, lime juice, chili paste, scallions, and mushrooms. <br> Chicken/ Veggie / Soft Tofu <span class='span title-2'>$7.00</span> <br> Shrimp <span class='span title-2'>$8.00</span> <br> Seafood <span class='span title-2'>$10.00</span>" ,
            image: "/Lumthai_Food/Appetizers/Soup/Tom_Kha.jpg",
            type:"soup"
        },
        {
            name: "Veggie Soup",
            price: "7.00",
            description: "Vegetable broth soup with mixed vegetables, scallions, and cilantro. Topped with crispy garlic." ,
            image: "/images/logo.png",
            type:"soup"
        },
        {
            name: "Wonton Soup",
            price: "8.00",
            description: "Wontons stuffed with minced chicken/shrimp in a clear broth with carrots, scallions, cilantro, white pepper, napa, and fried garlic." ,
            image: "/images/logo.png",
            type:"soup"
        },

    ],
    salad:[
        {
            name: "Chicken Pop",
            price: "10.00",
            description: "Thai style popcorn chicken.",
            image: "/images/food-15.png",
            type:"specials"
        },

    ],
    curries:[
        {
            name: "Chicken Pop",
            price: "10.00",
            description: "Thai style popcorn chicken.",
            image: "/images/food-15.png",
            type:"specials"
        },

    ],
    friedrice:[
        {
            name: "Chicken Pop",
            price: "10.00",
            description: "Thai style popcorn chicken.",
            image: "/images/food-15.png",
            type:"specials"
        },

    ],
    noodles:[
        {
            name: "Chicken Pop",
            price: "10.00",
            description: "Thai style popcorn chicken.",
            image: "/images/food-15.png",
            type:"specials"
        },

    ],
    entree:[
        {
            name: "Chicken Pop",
            price: "10.00",
            description: "Thai style popcorn chicken.",
            image: "/images/food-15.png",
            type:"specials"
        },

    ],
    
    specials: [
      {
        name: "Chicken Pop",
        price: "10.00",
        description: "Thai style popcorn chicken.",
        image: "/images/food-15.png",
        type:"specials"
      },
      {
        name:"Pad Thai",
        price:"13.95",
        description: "Traditional Thai thin rice noodles stir-fried in tamarind sauce with eggs, scallions, and bean sprouts, topped with crushed peanuts. Cooked with your choice of meat.",
        image: "/images/food-6.png",
        type:"specials"

      },
      {
        name:"Pineapple Fried Rice",
        type:"specials",
        price:"20.00",
        description:"Stir-fried jasmine rice with shrimps, eegs, pineapple, cashew nut, tomatoes and scallions served in a pineapple shell.",
        image:"/images/food-15.png"
      },
      {
        name:"Crispy Duck Curry",
        type:"specials",
        price:"20.00",
        description:"Boneless deep-fried duck in creamy coconut red curry sauce with pineapple, cherry tomatoes, bell peppers, basil leaves, and lychee. Served with jasmine rice.",
        image:"/images/food-7.png"

      },{
        name:"Crispy Chicken Ka Prao",
        type:"specials",
        price:"16.00",
        description:"Deep-fried crispy chicken stir-fried with spicy and sweet basil sauce, bell peppers, and onions topped with fried basil leaves.",
        image:""
      },{
        name:"Crispy Shrimp Ka Prao",
        type:"specials",
        price:"18.00",
        description:"Deep-fried crispy shrimp stir-fried with spicy and sweet basil sauce, bell peppers, and onions topped with fried basil leaves.",
        image:""
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
        image:""
      },{
        name:"Lumthai Cashew Shrimp",
        type:"specials",
        price:"18.00",
        description:"DDeep Fried Chicken or Shrimp stir-fried with roasted cashew nuts, onions, scallions, celery, and bell peppers sautéed in Lum Thai’s special sauce.",
        image:""
      },{
        name:"Khao Soi",
        type:"specials",
        price:"20.00",
        description:"Thai traditional northern style fresh turmeric soup with chicken thigh cilantro, scallions, creamy coconut curry, and egg noodles. Served with pickled cabbage and red onions.",
        image:""
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
    desserts: [
      {
        name: "Sticky Rice With Mango",
        price: "8.95",
        description: "Fresh soft mango served with sweetened sticky rice and topped with sweet coconut cream.",
        image: "",
        type:"dessert"
      },{
        name: "Crispy Fried Banana With Coco Ice Cream",
        price: "8.95",
        description: "Banana wrapped in rice paper and deep fried to perfection. Served with one scoop of cocnut ice cream.",
        image: "",
        type:"dessert"

      },{
        name: "Coconut Ice Cream",
        price: "5.95",
        description: "",
        image: "",
        type:"dessert"

      },{
        name: "Green Tea Ice Cream",
        price: "$5.95",
        description: "",
        image: "",
        type:"dessert"

      }
      
    ],
    drinks: [
      {
        name: "Thai Iced Tea",
        price: "$5.00",
        description: "",
        type:"drink",
        image: "/images/logo.png"
      },{
        name: "Coke",
        price: "$3.00",
        description: "",
        type:"drink",
        image: "/images/logo.png"
      },{
        name: "Ginger Ale",
        price: "$3.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Diet Coke",
        price: "$3.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Sprite",
        price: "$3.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Bottled Water",
        price: "$2.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Logan Juice",
        price: "$5.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Lemonade",
        price: "$3.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Hot Green Tea",
        price: "$4.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Hot Jasmine Tea",
        price: "$4.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Iced Black Tea",
        price: "$3.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },{
        name: "Sparkling Water",
        price: "$4.00",
        type:"drink",
        description: "",
        image: "/images/logo.png"
      },
      
    ],
    sides: [
        {
          name: "Brown Rice",
          price: "4.00",
          description: "",
          type:"sides",
          image: "/images/logo.png"
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
            image: "/images/logo.png"
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
            image: "/images/logo.png"
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
            image: "/images/logo.png"
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
  const soupHTML = generateMenuHTML(menuData.soup);
  const saladHTML = generateMenuHTML(menuData.salad);
  const curriesHTML =generateMenuHTML(menuData.curries);
  const friedRiceHTML = generateMenuHTML(menuData.friedrice);
  const noodlesHTML = generateMenuHTML(menuData.noodles);
  const entreeHTML = generateMenuHTML(menuData.entree)
  const specialsHTML = generateMenuHTML(menuData.specials);
  const dessertsHTML = generateMenuHTML(menuData.desserts);
  const drinksHTML = generateMenuHTML(menuData.drinks);
  const sidesHTML = generateMenuHTML(menuData.sides);
  

  
  // Example usage: Append generated HTML to the respective ul elements on your webpage
  document.getElementById('soup').innerHTML = soupHTML;
  document.getElementById('salad').innerHTML = saladHTML;
  document.getElementById('curries').innerHTML = curriesHTML;
  document.getElementById('friedrice').innerHTML = friedRiceHTML;
  document.getElementById('noodles').innerHTML = noodlesHTML;
  document.getElementById('entree').innerHTML = entreeHTML;
  document.getElementById('specials').innerHTML = specialsHTML;
  document.getElementById('desserts').innerHTML = dessertsHTML;
  document.getElementById('drinks').innerHTML = drinksHTML;
  document.getElementById('sides').innerHTML = sidesHTML;

  
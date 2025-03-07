const mongoose = require("mongoose");

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require("./models/Recipe.model");
// Import of the data from './data.json'
const data = require("./data");

const MONGODB_URI = "mongodb://localhost:27017/recipe-app";

// Connection to the database "recipe-app"  //ITERATION 2
mongoose.connect(MONGODB_URI)
.then((x) => {
  console.log(`Connected to the database: "${x.connection.name}"`);
  // Before adding any recipes to the database, let's remove all existing ones
  //return Recipe.deleteMany()                        //******se borra el listado de recetas anterior
})
/* .then(() => {
    console.log("db erased") */
    //})

/* Recipe.create({                                   //*****se crea la base de datos y se inserta la receta que se pasa como un objeto
      "title": "Asian Glazed Chicken Thighs",
      "level": "Amateur Chef",
      "ingredients": [
        "1/2 cup rice vinegar",
        "5 tablespoons honey",
        "1/3 cup soy sauce (such as Silver Swan®)",
        "1/4 cup Asian (toasted) sesame oil",
        "3 tablespoons Asian chili garlic sauce",
        "3 tablespoons minced garlic",
        "salt to taste",
        "8 skinless, boneless chicken thighs"
      ],
      "cuisine": "Asian",
      "dishType": "main_course",
      "image": "https://images.media-allrecipes.com/userphotos/720x405/815964.jpg",
      "duration": 40,
      "creator": "Chef LePapu"
    })
    .then((recipe => {console.log(`recipe ${recipe.title} created`)
  }
  ))    

  .catch(error => {
    console.error('Error connecting to the database', error);
  });
}) */

//ITERATION 3 Insert Many and console.log titles of recipes created

/* Recipe.insertMany(data)
  .then((recipes) => {
    recipes.forEach((recipe) => console.log(`recipe ${recipe.title} created`));
  })
  .catch((error) => {
    console.error("Error connecting to the database", error);
  });
}) */

//ITERATION 4 Find and Update

/* Recipe.findOneAndUpdate({ title: "Rigatoni alla Genovese" }, { duration: 100 }).then((recipe) => {
  console.log(`recipe ${recipe.title} updated`)
})
 */

//ITERATION 5 Delete One

Recipe.findOneAndDelete({title: "Carrot Cake"}).then((recipe) => {
  console.log(`recipe ${recipe.title} erased.`)
})
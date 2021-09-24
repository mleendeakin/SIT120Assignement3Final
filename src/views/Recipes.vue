<template>
    <div v-if="showModal">
        <Modal header="modalTitle" :recipeTitle="modalTitle" :recipeIngredients="modalIngredients" :recipeMethod="modalMethod" :recipeImage="modalImage" @close="toggleModal"/>
    </div>
    
    <div class="buttons">
        <button class="filter-button" @click="handleButtonBreakfast(breakfastPressed)">Breakfast</button>
        <button class="filter-button" @click="handleButtonDesserts(dessertsPressed)">Snacks</button>
        <button class="filter-button" @click="handleButtonDrinks(drinksPressed)">Drinks and Cocktails</button>
        <button class="filter-button" @click="handleButtonSnacks(snacksPressed)">Desserts</button>

    </div>
    <!-- Each recipe item contains an with the name, a picture, method, and an ingredients list. All of this is also sent as props to the modal on click.
    The function down below in the method: section, detail what is taking place on the events. -->
    <div class="recipes-container">
        <div class="recipes-grid">
            <div class="recipes-row">
                <div class="recipe-item" v-if="breakfastPressed" @click="handleRecipeClick('bananaSplit'); click=toggleModal()">
                    <div class="recipe-item-image">
                        <img :src="recipes.bananaSplit.image" alt="">              
                    </div>
                    <div class="recipe-item-details">
                    <h2>{{recipes.bananaSplit.title}}</h2>
                    <div class="prep-details">

                    </div>
                    </div>     
                </div>
                <div class="recipe-item" v-if="drinksPressed" @click="handleRecipeClick('seaBreeze'); click=toggleModal()">
                    <div class="recipe-item-image">
                        <img :src="recipes.seaBreeze.image" alt="">
                    </div>
                    <div class="recipe-item-details">
                    <h2>{{recipes.seaBreeze.title}}</h2>
                    </div>  
                </div>
                <div class="recipe-item" v-if="snacksPressed" @click="handleRecipeClick('frozenYogurtBites'); click=toggleModal()">
                    <div class="recipe-item-image">
                        <img :src="recipes.frozenYogurtBites.image" alt="">
                    </div>
                    <div class="recipe-item-details">
                    <h2>{{recipes.frozenYogurtBites.title}}</h2>
                    </div>  
                </div>
                

            </div>
            <div class="recipes-row">
                <div class="recipe-item" v-if="snacksPressed" @click="handleRecipeClick('chocolateCoveredStrawberries'); click=toggleModal()">
                    <div class="recipe-item-image">
                        <img :src="recipes.chocolateCoveredStrawberries.image" alt="">
                    </div>
                    <div class="recipe-item-details">
                        <h2>{{recipes.chocolateCoveredStrawberries.title}}</h2>
                    </div>     
                </div>
                <div class="recipe-item" v-if="drinksPressed" @click="handleRecipeClick('tequilaSunrise'); click=toggleModal()">
                    <div class="recipe-item-image">
                        <img :src="recipes.tequilaSunrise.image" alt="">
                    </div>
                    <div class="recipe-item-details">
                        <h2>{{recipes.tequilaSunrise.title}}</h2>
                    </div>  
                </div>
                <div class="recipe-item" v-if="dessertsPressed" @click="handleRecipeClick('quickBananaIcecream'); click=toggleModal()">
                    <div class="recipe-item-image">
                        <img :src="recipes.quickBananaIcecream.image" alt="">              
                    </div>
                    <div class="recipe-item-details">
                        <h2>{{recipes.quickBananaIcecream.title}}</h2>
                    </div>  
                </div>
                

            </div>          
        </div>
            

    </div>
</template>



<script>
import Modal from '@/components/Modal.vue'


export default {
    props: [],
    components: { Modal },
    data () {
        return {
            breakfastPressed: true,
            dessertsPressed: true,
            drinksPressed: true,
            snacksPressed: true,

            showModal: false,
            modalTitle: "",
            modalIngredients: "",
            modalMethod: "",
            modalImage: "",
            //Props and Objects to Modal


            recipes: {
                bananaSplit: {
                    title: "Banana Split",
                    ingredients: "1 Banana, 2 Scoops of Icecream, Handful of Peanuts, Chocolate Sauce",
                    method: "Sice the Bananas in half (length ways), Place them in a bowl, and scoop 2 scoops of icecream on top of the bananas, put some chocolate sauce ontop of the icecream and banana, and sprinkle the crushed peanuts over the top.",
                    prepTime: "10",
                    image: require("../assets/BananaSplit.jpg")
                },
                seaBreeze: {
                    //recipe taken from https://www.bbcgoodfood.com/recipes/sea-breeze
                    title: "Sea Breeze",
                    ingredients: "Shot of Vodka, Cranberry Juice, Grapefruit Juice, ice, slice of lime",
                    method: "Half fill a tall glass with ice and then pour in the shot of vodka, a good amount of cranberry juice and top off with grapefruit juice. Stir gently until the glass is cold. Place the Lime on top and enjoy!",
                    prepTime: "5",
                    image: require("../assets/SeaBreeze.jpg")
                },
                frozenYogurtBites: {
                    //recipe taken from https://iheartvegetables.com/frozen-yogurt-bites/
                    title: "Frozen Yogurt Fruit Bites",
                    ingredients: "1 Cup of Vanilla Yogurt, 1 Tablespoon of melted coconut oil, 1/2 a cup of frozen blueberries, 1/2 a cup of granola/oatmeal",
                    method: "Line a baking tim with some baking paper, Mix the coconut oil until combined, place 1 1/2 table spoons of greek yogurt in the bottom of each cup, Add 1 tablespoon of Blueberries to each cup and add another tablespoon of yogurt on top, sprinkle some granola on top. Place in the freezer for 3 hours or until set.",
                    prepTime: "10",
                    image: require("../assets/yogurtBites.jpg")
                },
                chocolateCoveredStrawberries: {
                    //recipe taken from https://www.delish.com/cooking/recipe-ideas/recipes/a58094/how-to-make-chocolate-covered-strawberries/
                    title: "Chocolate Covered Strawberries",
                    ingredients: "1 Punnet of Strawberries, 2 cups of Chocolate Chips, 2 Table Spoons of Coconut Oil",
                    method: "Line a large baking sheet with parchment paper, Rince strawberries and pat dry with paper towels. In a small microwafe safe bowl, combine chocolate chips and coconut oil, and microwave in 30 second intervals. stirring in between, until completely melted. Dip strawberries in the chocolate and place them on the baking sheet. refridgerate for 30minutes or until the chocolate has set!",
                    prepTime: "30",
                    image: require("../assets/strawberryChocolate.jpg")
                },
                tequilaSunrise: {
                    //recipe taken from https://www.bbcgoodfood.com/recipes/tequila-sunrise
                    title: "Tequila Sunrise",
                    ingredients: "2 Teaspoons of Grenadine, Ice, a shot of tequila, Tablespoon of triple sec, 1 large Orange Juiced, 1/2 a lemon Juiced, Cocktail Cherry",
                    method: "Pour the grenadine into a glass and set it to the side. Fill a cocktail shaker with ice and add the tequila, triple sec and fruit juices. Shake until the outside of the shaker feels cold. Add afew ice cubes to the serving glass and carefully strain the mixture into the glass. Garnish with a cherry on top",
                    prepTime: "30",
                    image: require("../assets/tequila.jpg")
                },
                quickBananaIcecream: {
                    title: "Quick Banana Ice Cream",
                    ingredients: "2 Peeled Large Bananas",
                    method: "Slice the bananas thinly and place into a container, Place the container into the freezer for 2 hours. Remove from the freezer and place into a food processor and blend till creamy. Transfer into a small container and freeze for 4 hours or until solid! ",
                    prepTime: "5",
                    image: require("../assets/bananaIcecream.jpg")
                }

            }
        }
    },
    methods: {
        handleButtonToggle(buttonPress)
        {
            buttonPress = !buttonPress
        },
        handleButtonBreakfast(breakfastPressed)
        {
            this.breakfastPressed = !this.breakfastPressed
        },
        handleButtonSnacks(dessertsPressed)
        {
            this.dessertsPressed = !this.dessertsPressed
        },
        handleButtonDrinks(drinksPressed)
        {
            this.drinksPressed = !this.drinksPressed
        },
        handleButtonDesserts(snacksPressed)
        {
            this.snacksPressed = !this.snacksPressed
        },

        handleRecipeClick(temp)
        {
            this.modalTitle = this.recipes[temp].title
            this.modalIngredients = this.recipes[temp].ingredients
            this.modalMethod = this.recipes[temp].method
            this.modalImage = this.recipes[temp].image
        },

        toggleModal()
        {
            this.showModal = !this.showModal;
        }
    } 

}
</script>

<style>

.h2 {
    font-size: 18px;
}

.recipes-grid {
    margin-left: 200px;
}

.recipes-row {
    display: flex;
}

.recipe-item {
    border-style: solid;
    border-width: 15px;
    border-color: #519945;
    width: 400px;
    height: 350px;
    background-color: #7aac5b;
    margin: 20px;
}

.recipe-item:hover {
  background-color: #4f8346;
  cursor: pointer;
}

.recipe-item-image {
    height: 60%;
    
    margin: 20px;
    
    /* background-image: url(../assets/autumn.png); */

}

.recipe-item-image img {
    height: 100%;
    width: 100%;
}

.recipe-item-details {
    width: 90%;
    height: 20%;
    background-color: #519945;
    margin: 20px;
    font-size: 20px;
    color: black; 
    text-align: center;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}

.prep-time-box {
    width: 40px;
    height: 70px;
    margin: 10px 0 0 10px;
    padding: 8px;
    position: absolute;
    background-color: #519945;
    font-size: 35px;
    border-radius: 15%;
    
}

.prep-time-box-unit {
    height: 35%;
    width: 100%;
    background-color: #519945;
    font-size: 20px;
    border-radius: 15%;
}


.filter-button{
    background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
}

@media (max-width: 1250px) {
  .recipe-item {
        
        border-width: 15px;
        width: 250px;
        height: 200px;
        margin: 20px;
    }

    .recipe-item-details {
    width: 90%;
    height: 20%;
    background-color: #519945;
    margin: 20px;
    font-size: 15px;
    }
}

@media (max-width: 1000px) {
  .recipe-item {
        
        border-width: 15px;
        width: 150px;
        height: 150px;
        margin: 20px;
    }

    .recipe-item-details {
    width: 90%;
    height: 20%;
    background-color: #519945;
    margin: 20px;
    font-size: 10px;
    }
}


</style>
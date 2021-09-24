<template>
    <h1>Seasons information!</h1>
    <!-- Foreach Column within this template, it will iterate through the arrays that have been created, for the monnths and the fruits of the season,
    and place them in the DOM as <li> tags -->
    <div class="season-container">
        <!-- Summer Column -->
        <div class="season-column">
            <div class="season-title">
                <h2>SUMMER</h2>
            </div>
            <div class="season-tiles-container">
                <div class="season-picture">
                <img class="season-image" :src="summerImage" alt="">
            </div>         
            </div>
            <div class="season-contents">
                <div class="season-months">
                    <h3>Months of the Season</h3>
                    <ul class="month-list">
                        <li v-for="month in summerMonths" :key="month.key">{{month.month}}</li>
                    </ul>
                </div>
                <div class="season-fruits">
                    <h3>Fruit that are in season</h3>
                    <ul class="month-list" >
                        <li v-for="fruit in summer" :key="fruit.key">{{fruit.name}}</li>
                    </ul>
                </div>

            </div>
        </div>
        <!-- Autumn Column -->
        <div class="season-column">
            <div class="season-title">
                <h2>AUTUMN</h2>
            </div>
            <div class="season-tiles-container">
                <div class="season-picture">
                <img class="season-image" :src="autumnImage" alt="">
            </div>         
            </div>
            <div class="season-contents">
                <div class="season-months">
                    <h3>Months of the Season</h3>
                    <ul class="month-list">
                        <li v-for="month in autumnMonths" :key="month.key">{{month.month}}</li>
                    </ul>
                </div>
                <div class="season-fruits">
                    <h3>Fruit that are in season</h3>
                    <ul class="month-list" >
                        <li v-for="fruit in autumn" :key="fruit.key">{{fruit.name}}</li>
                    </ul>
                </div>

            </div>
        </div>
        <!-- Winter Column -->
        <div class="season-column">
            <div class="season-title">
                <h2>WINTER</h2>
            </div>
            <div class="season-tiles-container">
                <div class="season-picture">
                <img class="season-image" :src="winterImage" alt="">
            </div>         
            </div>
            <div class="season-contents">
                <div class="season-months">
                    <h3>Months of the Season</h3>
                    <ul class="month-list">
                        <li v-for="month in winterMonths" :key="month.key">{{month.month}}</li>
                    </ul>
                </div>
                <div class="season-fruits">
                    <h3>Fruit that are in season</h3>
                    <ul class="month-list" >
                        <li v-for="fruit in winter" :key="fruit.key">{{fruit.name}}</li>
                    </ul>
                </div>

            </div>
        </div>
        <!-- Spring Column -->
        <div class="season-column">
            <div class="season-title">
                <h2>SPRING</h2>
            </div>
            <div class="season-tiles-container">
                <div class="season-picture">
                <img class="season-image" :src="springImage" alt="">
            </div>         
            </div>
            <div class="season-contents">
                <div class="season-months">
                    <h3>Months of the Season</h3>
                    <ul class="month-list">
                        <li v-for="month in springMonths" :key="month.key">{{month.month}}</li>
                    </ul>
                </div>
                <div class="season-fruits">
                    <h3>Fruit that are in season</h3>
                    <ul class="month-list" >
                        <li v-for="fruit in spring" :key="fruit.key">{{fruit.name}}</li>
                    </ul>
                </div>

            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props: [],
    data () {
        return {
            //Images for the season containers
            summerImage: require("../assets/summer.png"),
            autumnImage: require("../assets/autumn.png"),
            winterImage: require("../assets/winter.png"),
            springImage: require("../assets/spring.png"),
            //Each of the Months and fruit are used for the v-for loops for each of the lists in the columns
            //It will iterate through each item (Month or Fruit), and key and place it into a list.
            //Summer Array for the months
            summerMonths: [
                {month: 'December', key: 1},
                {month: 'January', key: 2},
                {month: 'February', key: 3},
            ],
            //Autumn Array for the months
            autumnMonths: [
                {month: 'March', key: 1},
                {month: 'April', key: 2},
                {month: 'May', key: 3},
            ],
            //Winter Array for the months
            winterMonths: [
                {month: 'June', key: 1},
                {month: 'July', key: 2},
                {month: 'August', key: 3},
            ],
            //Spring Array for the months
            springMonths: [
                {month: 'September', key: 1},
                {month: 'October', key: 2},
                {month: 'November', key: 3},
            ],
            //Summer Array for the fruit that are in season
            summer: [
                
                {name: 'Bananas', key: 1},
                {name: 'Blackberries', key: 2},
                {name: 'Blueberries', key: 3},
                {name: 'Cherries', key: 4},
                {name: 'Grapes', key: 5},
                {name: 'Rockmelon', key: 6},
                {name: 'Watermelon', key: 7},
                {name: 'Oranges (Valencia)', key: 8},
                {name: 'Peaches', key: 9},
                {name: 'Plums', key: 10},
                {name: 'Rasberries', key: 11},
                {name: 'Strawberries', key: 12},

            ],
            //Autumn Array for the fruit that are in season
            autumn: [
                
                {name: 'Apples', key: 1},
                {name: 'Bananas', key: 2},
                {name: 'Figs', key: 3},
                {name: 'Grapes', key: 4},
                {name: 'Kiwifruit', key: 5},
                {name: 'Lemons', key: 6},
                {name: 'Watermelon', key: 7},
                {name: 'Nectarines', key: 8},
                {name: 'Peaches', key: 9},
                {name: 'Pears', key: 10},
                {name: 'Plums', key: 11},           
            ],
            //Winter Array for the fruit that are in season
            winter: [
                
                {name: 'Bananas', key: 1},
                {name: 'Grapefruit', key: 2},
                {name: 'Kiwifruit', key: 3},
                {name: 'Lemons', key: 4},
                {name: 'Manderines', key: 5},             
                {name: 'Oranges (Navel)', key: 6},        
            ],
            //Spring Array for the fruit that are in season
            spring: [
                {name: 'Bananas', key: 1},
                {name: 'Grapefruit', key: 2},
                {name: 'Lemons', key: 3},
                {name: 'Oranges (Navel)', key: 4},             
                {name: 'Strawberries', key: 5},        
            ],
        }
    }
}
</script>

<style>

.season-container {
    display: flex;
}

.season-column {
    width: 400px;
    height: 900px;
    background-color: #519945;
    margin-left: 50px;
    display: inline;
}

.season-title{
    margin-top: 5px;
    height: 7%;
    width: 90%;
    background: #7aac5b;
    margin-left: auto;
    margin-right: auto;
    padding: 5px;
    border-radius: 10px;
}
.season-picture {
    height: 80%;
    width: 40%;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    background-color: #7aac5b;
    border-radius: 10px;
}

.season-tiles-container {
    height: 20%;
    width: 100%;
    
}
.season-image {
    height: 100%;
    width: 90%;
}

.season-contents {
    height: 100%;
    width: 100%;
}

.season-months {
    background-color: #7aac5b;
    width: 80%;
    height: 15%;
    margin-right: auto;
    margin-left: auto;
    list-style: none;
    border-radius: 10px;
}

.season-months h3 {
    margin: 0px;
}

.month-list {
    list-style: none;
    margin-right: 60px;
    font-size: 18px;
}

.season-fruits {
    background-color: #7aac5b;
    width: 80%;
    height: 35%;
    margin-top: 20px; 
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
}

</style>
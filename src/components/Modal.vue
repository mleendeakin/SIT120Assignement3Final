<template>
    <!-- Custom event that will toggle the modal on the recipes page. -->
    <div class="background" @click="closeModal">
        <div class="modal">
            <h1>{{recipeTitle}}</h1>
            <!-- <p> {{header}} </p>
            <p>{{recipeInfo}}</p> -->
            <div class="right-container">
                <h2>Method</h2>
                <p>{{recipeMethod}}</p>
            </div>
            <div class="left-container">
                <div class="image-container">
                    <img class="image" :src="recipeImage" alt="">
                </div>
            </div>
            <div class="ingedients-container">
                <h2>Ingredients</h2>
                <p>{{recipeIngredients}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    //Props belong to the parent Recipes.vue
    props: ['header', 'recipeTitle', 'recipeIngredients', 'recipeMethod', 'recipeImage'],
    methods: {
        closeModal()
        {
            this.$emit('close')
        }
    }
}


</script>

<style>

.modal {
    width: 800px;
    height: 600px;
    padding: 20px;
    margin: 100px auto;
    background: #519945;
    border-radius: 10px;
}

.background {
    top: 0;
    position: fixed;
    background: rgba(0,0,0,0.5);
    width: 100%;
    height: 100%;
}

.right-container {
    width: 50%;
    height: 80%;
    float: right;
    background-color: #4CAF50;
}

.left-container {
    width: 45%;
    height: 40%;
    background-color: #4CAF50;
}

.ingedients-container {
    width: 45%;
    height: 35%;
    margin-top: 20px;
    background-color: #4CAF50;
}

.image-container{
    height: 90%;
    width: 90%;
    margin: auto;
}

.image {
    height: inherit;
    width: inherit;
}

</style>
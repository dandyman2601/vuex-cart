<template>  
    <div class="container">
        <!-- <img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" width="300" height="300">
        <img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" width="300" height="300">
        <img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" width="300" height="300">
        <img src="https://www.w3schools.com/css/paris.jpg" alt="Paris" width="300" height="300"> -->


        <div class="box1">box1</div>
        <div class="box2">box2</div>
        <div class="box3">box3</div>
        <div class="box4">box4</div>
        <div class="box5">box5</div>
        <div class="box6">box6</div>
        <div class="box7">box7</div>
    </div>
    
</template>

<style scoped>
    /* .container {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media only screen and (max-width: 600px) {
        .container {
        grid-template-columns: 1fr;

        }
    } */

    .box1 { 
        background-color:red;
        grid-column: 1 / -1;
    }
    .box2 { 
        background-color:blue;

    }
    .box3 { 
        background-color:green;

    }
    .box4 { 
        background-color: maroon;

    }
    .box5 { 
        background-color: skyblue;
        grid-row: 2/4;
        grid-column:4/4;

    }
    .box6 { 
        background-color: orange;
                        grid-column: 1 / 4;

    }
    .box7 { 
        background-color:pink;
                grid-column: 1 / -1;

    }

    .container {
        display: grid;
        grid-template-rows: 60px 80px 180px 60px;
        grid-gap: 10px;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>
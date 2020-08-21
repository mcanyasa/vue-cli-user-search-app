<template>
    <div>
    
        <router-view></router-view>
        <p>
            <router-link to="/Joblist">JobList</router-link>
            <!-- <router-link to="/Jobdetail">JobDetail</router-link> -->
        </p>
    </div>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
    font-family: 'Varela Round', sans-serif;
}

body {
    font-family: 'Times New Roman', Times, serif;
}

h1 {
    margin: 40px 0 0;
    text-align: left;
}

.columns {
    margin-bottom: 5px;
    margin-top: 5px;
}
</style>

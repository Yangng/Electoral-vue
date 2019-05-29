<template>
<div id="app">
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'electoral'
}
</script>

<style>
/* CSS */
#app {
    width: 100%;
    height: 100%;
}
body,
html {
  width: 100%;
  height: 100%;
  padding: 0px;
  margin: 0px;
}

* {
    -moz-user-select: none;
    /*火狐*/

    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
}

ul,
li {
    margin: 0;
    padding: 0;
}

li {
    list-style: none;
}
</style>

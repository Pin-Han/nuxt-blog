<template>
  <div>
    <header class="header">
      <ul class="nav-items">
        <li><Logo/></li>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li>
          <nuxt-link to="/users">Users</nuxt-link>
        </li>
      </ul>
    </header>
  </div>
</template>
<script>
import Logo from "~/components/Logo.vue";

export default {
  components:{
    Logo
  }
}
</script>
<style>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
.nav-items {
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  width: 80%;
}
.nav-items a {
  color: black;
  text-decoration: none;
}
.nav-items a:hover,
.nav-items a:active {
  color: white;
}
</style>

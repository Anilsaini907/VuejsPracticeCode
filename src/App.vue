<template>

  <div id="app">
   
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    <post />
      <showBlogs />
        </div>
        
    <router-view/>

   
  </div>
</template>
<script>
// @ is an alias to /src
import showBlogs from '@/components/showBlogs.vue'
import post from '@/components/post.vue'

export default {

  components: {
    showBlogs,
    post
  }
}
</script>



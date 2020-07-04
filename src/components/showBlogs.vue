
<template>
  <div id="show-blogs">
   <h1>show</h1>
   <ul v-for="blog of blogdata"
   :key="blog.id">
      <li>{{blog.id}}</li> <li>{{blog.id}}</li> 
   </ul>
  </div>
</template>


<script>

import axios from 'axios'

export default {
    
  
  data: function() {     
    return {
      blogdata: []
    };
  },
  mounted() {
       var self=this
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(function( res){
      console.log('data:',res.data)
      self.blogdata = res.data;
      console.log('blogdata',self.blogdata);
    });
  }

}
</script>>
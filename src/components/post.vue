<template>
  <div id="app">
      <h1>Post data</h1>
    <form>
      <input v-model="title" placeholder="Title" required />
      <textarea v-model="body" placeholder="Body" required />
      <button @click.prevent="sendPost()">Submit post</button>
    </form>

    <ul >
      <li>Id : {{post.id}}</li>
      <li>Title: {{post.title}}</li>
      <li> body: {{post.body}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      post: "",
      usreid:"",
      title: "",
      body: ""
    };
  },
 methods: {
    sendPost() {
    var self=this
      const postData = { usreid: this.usreid, title: this.title, body: this.body };
    axios.post("https://jsonplaceholder.typicode.com/posts", postData)
        .then(function( res){
      console.log('data:',res.data);
      self.post = res.data;
        });
    }
  },
 
};
</script>
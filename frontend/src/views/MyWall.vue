<template>
 <div>
  <navBar/>
   <div class="container">
    <h1>Mur de conversation</h1>
                        
            <div class="card p-3 border-blue mt-3"> 
                <div id="card">
                <Post v-for="post in posts" v-bind:key="post.id" :post="post" @deletePostEvent="deletePost" />
                
                </div>
            </div>
           
        
  </div>
 </div> 
</template>

<script>
import navBar from '../components/NavBar.vue'
import Post from '../components/MyPost'
import axios from 'axios'

export default {
  name:'MyWall',
  components:{
    navBar,
    Post
  },
  data(){
    return{
      users:[],
      posts:[],
      comments:[],
    }
    },
    created(){
      axios.get("http://localhost:3000/api/users" , {
        headers: {
          Authorization: "Bearer " + sessionStorage.token,
          },
      })
      .then((response)=> 
      (this.users = response.data))
      .catch((err) => console.log(err));

    axios.get("http://localhost:3000/api/auth/posts", {
      headers: {
      Authorization: "Bearer " + sessionStorage.token,
    },
    })
    .then((response)=>{console.log(response),
    this.posts= response.data})
    .catch((err) => console.log(err));
    },
    methods:{
      deletePost(item) {
        axios
        .delete("http://localhost:3000/api/auth/posts/" + item.id, {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        })
        .then((response) => {
          console.log(response);
          this.posts = this.posts.filter((post) => post.id != item.id);
        })
        .catch((err) => console.log(err));
    },
  }
}
</script>


<style scoped>

.container {
  font-family: 'Comic Sans MS', 'cursive';
}
main {
  margin-top: 30px;
}
h1{
  color: red;
  display: flex;
  justify-content: center;
  border-style: inset;
  padding: 10px;
  background-color: blanchedalmond;
  margin-bottom: 50px;
}
.card{
  border: 1px solid grey;
  box-shadow: 2px 3px 3px #c75e5e;
  background-color: peachpuff;
}

.form{
  margin-top: 30px;
}
.row{
  background-color: blanchedalmond;
}

</style>
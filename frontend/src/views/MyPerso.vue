<template>
<div>
  <navBar />
  <div class="container">
    <div class="container pb-cmnt-container">
      <h1>Bienvenue sur ton espace {{ user.firstName }} {{ user.lastName }}</h1>
      <div class="row">
        <div class="col-md-9 col-md-offset-3">
          <div class="panel panel-info">
            <div class="panel-body">
              <div class="form-group green-border-focus">
                <label for="title">Sujet :</label><br />
                <input type="text" v-model="title" class="form-control" /><br />
                <label for="postMsg">Exprimez vous :</label>
                <textarea
                  v-model="content"
                  class="form-control"
                  id="postMgs"
                  rows="3"
                ></textarea>
                <label for="avatar">Ajouter une image : </label>
                <input ref="file" v-on:change="handleFileUpload()" type="file" id="image" name="image" accept="image/png, image/jpeg, image/gif">
                <div class="mgs">{{ message }}</div>
              </div>
              <button
                class="btn btn-primary pull-right"
                type="text"
                @click="postMessage()"
              >
                Partager
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card row-8 p-3 border-blue mt-3">
      <div id="card">
        <Post v-for="post in posts" v-bind:key="post.id" :post="post" @deletePostEvent="deletePost"/>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
import navBar from "../components/NavBar.vue";
import Post from "../components/MyPost";
import axios from "axios";

export default {
  name: "MyPerso",
  components: {
    navBar,
    Post,
  },
  data() {
    return {
      user: [],
      posts: [],
      users: [],
      content: "",
      post: [],
      comment: [],
      createdAt: "",
      title: "",
      message: "",
      file: "",
    };
  },
  created() {
    const userId = sessionStorage.getItem("user");
    axios
      .get("http://localhost:3000/api/users/" + userId, {
        headers: {
          Authorization: "Bearer " + sessionStorage.token,
        },
      })
      .then((response) => (this.user = response.data))
      .catch((err) => console.log(err));

    
    axios
      .get("http://localhost:3000/api/auth/posts/" + userId, {
        headers: {
          Authorization: "Bearer " + sessionStorage.token,
        },
      })
      .then((response) => {
        console.log(response);
        this.posts = response.data;
      })
      .catch((err) => console.log(err));
  },

  methods: {
    handleFileUpload(
    ){
      console.log (this.$refs.file.files[0])
        this.file = this.$refs.file.files[0];
      },
    postMessage() {
    if (this.content==''|| this.title=='') {
        (this.message="Veuillez inscrire un sujet et un message")
    }else{
      let formData = new FormData();
      formData.append("title", this.title);
      formData.append('file', this.file);
      formData.append("content", this.content);
      axios
        .post(
          "http://localhost:3000/api/auth/posts/post",
         formData,
          {
            headers: {
              Authorization: "Bearer " + sessionStorage.token,
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.content = "";
          this.title = "";
          const userId = sessionStorage.getItem("user");
          axios
            .get("http://localhost:3000/api/auth/posts/" + userId, {
              headers: {
                Authorization: "Bearer " + sessionStorage.token,
              },
            })
            .then((response) => {
              console.log(response);
              this.posts = response.data;
              this.message = "";
            })
            .catch((err) => console.log(err));
        });
    }
    },
    deletePost(item) {
      axios
        .delete("http://localhost:3000/api/auth/posts/" +item.id, {
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
  },
};
</script>


<style>
#app{
  padding-bottom: 90px;
  display: block;
  margin:0px;
}
</style>


<style scoped>
h1 {
  color:red;
  display: flex;
  justify-content: center;
  border-style: inset;
  padding: 10px;
  background-color: blanchedalmond;
  border-color: indianred;
}

.card {
  border: 1px solid red;
  box-shadow: 2px 3px 3px red;
  background-color:blanchedalmond;
}
.form {
  margin-top: 30px;
}

.form-control {
  border-radius: 20px;
  width:100%;
}
.form-group {
  margin: 20px 0px 20px 0px;
}
label {
  font-family: "Comic Sans MS", "cursive";
  margin-bottom: 5px;
}
.row {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 50px;
  margin-top: 50px;
  border: 1px solid red;
  box-shadow: 2px 3px 3px red;
  background-color: blanchedalmond;
}
main {
  margin-top: 20px;
}
.row>*{
  width:100%;
}
.btn {
  margin-bottom:10px;
}

.mgs {
  color: red;
}

</style> 
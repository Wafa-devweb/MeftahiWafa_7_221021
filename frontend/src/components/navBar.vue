<template> 
            <nav class="row-12  navbar navbar-expand-lg navbar mx-3 ">
            <div class="navbar-brand"><img src="../assets/icon-title.png" alt="titre"></div>
            
            <div class="collapse navbar-collapse d-flex" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/MyPerso" class="nav-link">Ma page |</router-link>
                </li>
                 <li class="nav-item">
                    <router-link to="/MyWall" class="nav-link">Mur |</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/MyProfil" class="nav-link">Profil |</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/MyMenbre" class="nav-link">Membres |</router-link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="logout()">Déconnection</a>
                </li>
              </ul> 
            </div>
          </nav> 
</template>


 

<script>
export default {
        name: 'NavBar',
        methods:{
            logout(){
                sessionStorage.clear();
                this.$router.push('/')
            }
        }    
}
</script>


<!-- Ajouter un attribut pour limiter le CSS à ce composant uniquement-->
<style scoped> 
#app{
  font-family : "Comic Sans MS", "cursive";
  margin:0px;
  padding:0px;
  background-color: 'E1-45';
}
.navbar{
  WIDTH: 100%;
  MARGIN-BOTTOM: 40PX;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  margin-left:0;
  margin-right:0;
}
.mx-3 {
  margin-right: unset;
  margin-left: unset;
}
body{
  margin:0px;
  padding:0px;
  font-family: 'Comic Sans MS', 'cursive';
}
.navbar-brand img{
width: 100px;
margin-left: 0em;
}

.nav-item{
font-size: large;
font-weight: bolder;
cursor: pointer;
transform: scale(1);
transition: .3s ease-in-out;
}
.nav-item:hover{
transform: scale(1.2);
}

.nav-link{
color: red;
}


</style>
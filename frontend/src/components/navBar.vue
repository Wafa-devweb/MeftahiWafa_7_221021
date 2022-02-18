<template> 
            <nav class="row-12  navbar navbar-expand-lg navbar mx-3 ">
            <div class="navbar-brand"><img src="../assets/icon-title.jpg" alt="titre"></div>
            
            <div class="collapse navbar-collapse d-flex" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item active">
                    <router-link to="/perso" class="nav-link">Ma page </router-link>
                </li>
                 <li class="nav-item">
                    <router-link to="/wall" class="nav-link">Mur</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/profil" class="nav-link">Profil</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/menbre" class="nav-link">Membres</router-link>
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
        name: 'navBar',
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
  background-color: none 'SE2250' ;
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
font-family: 'Comic Sans MS', cursive;
color: rgb(12, 12, 161);
}

.navbar{
WIDTH: 100%;
MARGIN-BOTTOM: 40PX;
}
</style>
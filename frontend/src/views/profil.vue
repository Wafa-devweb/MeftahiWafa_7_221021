<template>
    <h1> profil </h1>
</template>

<!-------- en cours 
<template>
  <navBar/>
    <h1>Mon Profil</h1>
    <div class="container mt-5 d-flex justify-content-center">
      <div class="card p-4 mt-3">
        <div class="first">
          <h6 class="heading">{{user.firstName}} {{user.lastName}} </h6>
          <div class="time d-flex flex-row align-items-center justify-content-between mt-3">
          </div>
        </div>
        <div class="second d-flex flex-row mt-2">
          <div class="main">
            <div class="d-flex flex-row mb-1"> <span>{{user.email}} </span>
            </div>
          </div>
        </div> 
        <hr class="line-color">
        <div class="password">
          <p class="heading">Changer mon email</p>
          <label class="change" for="user-email">email:</label><br/>
          <input id="user-email" v-model="user.email">
          <div class="third mt-4"> <button class="btn btn-success btn-block" @click.prevent="modifyProfil(user)"> Modifier</button></div>
        </div>
        <hr class="line-color">
        <div class="third mt-4"> <button class="btn btn-success btn-block" @click.prevent="deleteUser()"><i class="fas fa-trash"></i> Supprimer le compte</button>
        </div>
      </div>
    </div>
</template>
--------->
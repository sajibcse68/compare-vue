<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">

      <router-link to="/home" tag="li" class="nav-item" active-class="active" exact><a>Home</a></router-link>
      <router-link to="/user/1" tag="li" class="nav-item" active-class="active" exact><a>User 1</a></router-link>
      <router-link to="/user/2" tag="li" class="nav-item" active-class="active" exact><a>User 2</a></router-link>

    </ul>
  </div>
</nav>
  </div>
</template>
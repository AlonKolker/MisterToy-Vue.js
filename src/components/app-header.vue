<template>
  <header class="header-conteiner full main-layout">
    <div class=" flex items-center space-between">
      <div class="flex items-center space-between">
        <img class="logo-img" src="../styles/img/logo.png" alt="" />
        <span>Mister-Toy</span>
      </div>

      <nav class="nav">
        <RouterLink class="mark" to="/">Home</RouterLink>
        <RouterLink class="mark" to="/Toys">Toys</RouterLink>
        <RouterLink class="mark" to="/toyChart">Toy-Chart</RouterLink>
        <RouterLink class="mark" to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
</template>

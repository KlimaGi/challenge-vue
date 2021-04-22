<template>
  <div class=" ">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <span class="navbar-brand"></span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <router-link class="nav-link active" aria-current="page" to="/"
              >Today Plan</router-link
            >
            <router-link class="nav-link" to="/time-line"
              >Time Line</router-link
            >
            <router-link class="nav-link" to="/lesson-list"
              >Lesson List</router-link
            >
            <router-link class="nav-link" to="/about">About</router-link>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&display=swap");
$color: #3b4755;
$color-light: #8d478d;
$pseudo-white: #f3eff2;
* {
  box-sizing: border-box;
  width: 100%;
  font-family: "Kiwi Maru", serif !important;
}

nav {
  color: $color;
  background-image: linear-gradient(150deg, $color 0%, $pseudo-white 94%);
}
a {
  color: $color !important;
  text-decoration: none;
}
a:hover {
  color: $color-light !important;
}

.container {
  width: 100%;
  margin: 0 auto;
  min-height: 300px;
}
</style>

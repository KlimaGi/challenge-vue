<template>
  <h1 class="p-3">About</h1>
  <div class="container">
    <div class="m-5 justify-content-center">
      <p class=" pb-2">
        When you increase your long-term memory, when you reach and go through
        the critical limit, then the creation process begins which is wider. You
        can understand much more things at the same time. It is beautiful to
        cross your limits. And here you are at the next level. Here everything
        is harder, yet.
      </p>
      <p class=" pb-2">
        For me is interesting to find a way how can I improve my memory. What
        can I do more, than my understanding about things (code =) in my case),
        could be wider. I keep reading scientists' research, memory competition
        creators' books. And trying to adjust their best practices to my brain.
        And still trying to create a useful tool. At least one user will use
        that tool (it’s me =). So let's see the creation sequence. The most
        interesting part here is to create code logic for this.
      </p>
    </div>
  </div>

  <div class="foto-back container-fluid">
    <div class="container p-5">
      <p class="text-center">Basic plan</p>
      <img
        src="../../public/img/basic-plan-sm.jpg"
        class="rounded mx-auto d-block"
        alt="..."
      />
    </div>
  </div>

  <div class="container-fluid">
    <div class="container p-5">
      <img
        src="../../public/img/today-page-sm.png"
        class="rounded mx-auto d-block"
        alt="..."
      />
    </div>
  </div>

  <div class="foto-back container-fluid">
    <div class="container p-5">
      <img
        src="../../public/img/lesson-item-sm.png"
        class="rounded mx-auto d-block"
        alt="..."
      />
    </div>
  </div>

  <div class="container-fluid">
    <div class="container p-5">
      <img
        src="../../public/img/lesson-list-page-sm.png"
        class="rounded mx-auto d-block"
        alt="..."
      />
    </div>
  </div>
  <div class="foto-back container-fluid">
    <div class="container p-5">
      <img
        src="../../public/img/time-line-sm.png"
        class="rounded mx-auto d-block"
        alt="..."
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped lang="scss">
$color: #3b4755;
$color-light: #702070;
$pseudo-white: #f3eff2;

h1 {
  color: $color;
  background-image: linear-gradient(300deg, $color 0%, $pseudo-white 94%);
}

.container {
  width: 60%;
}

.foto-back {
  background-color: $pseudo-white;
}
</style>

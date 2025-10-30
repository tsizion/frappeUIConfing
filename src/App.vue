<script setup>
import Hero from "./components/Hero.vue";
import NavBar from "./components/NavBar.vue";
import JobList from "./views/JobLIst.vue";
</script>

<template>
  <NavBar />
  <main class="mt-6">
    <Hero />
    <!-- <JobList /> -->
  </main>
  <Footer />
</template>

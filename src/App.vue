<script setup>
import NavBar from './components/NavBar.vue';
import JobList from './views/JobLIst.vue';
</script>

<template>
  <NavBar />
  <main class="max-w-4xl mx-auto mt-6 p-4">
    <JobList />
  </main>
</template>

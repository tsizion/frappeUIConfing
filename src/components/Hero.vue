<template>
  <section
    class="pt-36 pb-20 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200"
  >
    <div class="max-w-5xl mx-auto text-center px-6">
      <!-- Title -->
      <h1
        class="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4"
      >
        Find the <span class="text-blue-600">Perfect Job</span> for You
      </h1>

      <!-- Subtitle -->
      <p class="text-gray-600 mb-8 text-lg">
        Search by keyword, skill, or interest and start your journey today.
      </p>

      <!-- Search Bar -->
      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-3 bg-white shadow-md rounded-full p-3 sm:p-4 max-w-3xl mx-auto"
      >
        <TextInput
          v-model="query"
          placeholder="Search by keyword, skill, or interest..."
          class="w-full sm:flex-1 text-base"
          :size="'lg'"
        />
        <Button
          variant="solid"
          theme="blue"
          size="lg"
          class="rounded-full w-full sm:w-auto"
          @click="handleSearch"
        >
          Search
        </Button>
      </div>

      <!-- Popular Searches -->
      <div class="mt-10">
        <h3 class="text-gray-700 font-semibold mb-4">Popular Searches</h3>
        <div class="flex flex-wrap justify-center gap-3">
          <Badge
            v-for="tag in popularSearches"
            :key="tag"
            class="cursor-pointer rounded-full px-4 py-2 text-blue-700 bg-blue-100 hover:bg-blue-200 transition"
            @click="query = tag"
          >
            {{ tag }}
          </Badge>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { TextInput, Button, Badge } from "frappe-ui";

const query = ref("");

const popularSearches = [
  "Software Engineer",
  "UI/UX Designer",
  "Remote Jobs",
  "Marketing",
  "Data Analyst",
  "Internship",
];

const handleSearch = () => {
  if (query.value.trim() === "") return;
  console.log("Searching for:", query.value);
  // You can replace console.log with your actual search logic or navigation
};
</script>

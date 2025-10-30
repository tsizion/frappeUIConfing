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
        <div class="relative w-full sm:flex-1">
          <input
            v-model="query"
            type="text"
            placeholder="Search by keyword, skill, or interest..."
            class="w-full text-base bg-white border border-gray-300 rounded-full px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            @keyup.enter="handleSearch"
          />
          <!-- Search Icon (visible only on small screens) -->
          <button
            class="absolute inset-y-0 right-3 flex items-center sm:hidden"
            @click="handleSearch"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-5 h-5 text-gray-500 hover:text-blue-500 transition"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
              />
            </svg>
          </button>
        </div>

        <!-- Search Button (hidden on small screens) -->
        <Button
          variant="solid"
          theme="blue"
          size="md"
          class="rounded-full w-full sm:w-40 hidden sm:block"
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
            @click="
              query = tag;
              handleSearch();
            "
          >
            {{ tag }}
          </Badge>
        </div>
      </div>
    </div>

    <!-- Job List Section -->
    <div class="max-w-4xl mx-auto mt-16 p-4 bg-white rounded-2xl shadow-lg">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Job Listings</h1>
        <Button label="Add Job" @click="openCreate" />
      </div>

      <div v-if="filteredJobs.length">
        <JobCard
          v-for="job in filteredJobs"
          :key="job.id"
          :job="job"
          :onEdit="updateJob"
          :onDelete="deleteJob"
        />
      </div>

      <p v-else class="text-gray-500 text-center py-6">No jobs found.</p>

      <!-- New Job Dialog -->
      <Dialog v-model="showDialog">
        <template #body-title>
          <h3 class="text-lg font-bold">New Job</h3>
        </template>
        <template #body-content>
          <div class="space-y-4 mt-2">
            <Input v-model="form.title" label="Job Title" />
            <Input v-model="form.company" label="Company" />
            <Select
              v-model="form.type"
              label="Type"
              :options="['Full-time', 'Part-time', 'Contract']"
            />
          </div>
        </template>
        <template #actions>
          <Button label="Save" @click="saveJob" />
          <Button class="ml-2" variant="subtle" @click="showDialog = false">
            Cancel
          </Button>
        </template>
      </Dialog>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
import { TextInput, Button, Badge, Input, Dialog, Select } from "frappe-ui";
import JobCard from "../components/JobCard.vue";

// 🔍 Search state
const query = ref("");
const popularSearches = [
  "Software Engineer",
  "UI/UX Designer",
  "Remote Jobs",
  "Marketing",
  "Data Analyst",
  "Internship",
];

// 💼 Jobs list
const jobs = reactive([
  { id: 1, title: "Frontend Developer", company: "Tech Co", type: "Full-time" },
  { id: 2, title: "Backend Developer", company: "Dev Ltd", type: "Part-time" },
  { id: 3, title: "UI/UX Designer", company: "Designify", type: "Contract" },
]);

// 🧠 Search filter
const filteredJobs = computed(() => {
  if (!query.value.trim()) return jobs;
  const q = query.value.toLowerCase();
  return jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      job.type.toLowerCase().includes(q)
  );
});

const handleSearch = () => {
  // Optional: add custom behavior like scrolling or toast
  console.log("Searching for:", query.value);
};

// ➕ Add / Edit / Delete logic
const showDialog = ref(false);
const form = reactive({
  title: "",
  company: "",
  type: "",
});

function openCreate() {
  Object.assign(form, { title: "", company: "", type: "" });
  showDialog.value = true;
}

function saveJob() {
  if (!form.title.trim() || !form.company.trim()) return;
  jobs.push({ ...form, id: Date.now() });
  showDialog.value = false;
}

function updateJob(updatedJob) {
  const index = jobs.findIndex((j) => j.id === updatedJob.id);
  if (index > -1) jobs[index] = { ...updatedJob };
}

function deleteJob(id) {
  const index = jobs.findIndex((j) => j.id === id);
  if (index > -1) jobs.splice(index, 1);
}
</script>

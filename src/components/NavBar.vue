<template>
  <nav
    class="fixed w-full top-0 left-0 z-50 bg-[#fafaff] border-b border-transparent transition-all duration-300"
    :class="{ 'border-gray-200': scrolled }"
  >
    <div class="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
      <!-- Logo -->
      <div class="flex items-center">
        <img :src="logo" alt="Logo" class="h-20 w-auto" />
      </div>

      <!-- Desktop Menu -->
      <div class="hidden lg:flex items-center gap-8 font-sans">
        <!-- Jobseekers Dropdown -->
        <div class="relative" @mouseleave="jobseekersOpen = false">
          <button
            @click="toggleDropdown('jobseekers')"
            class="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-semibold"
          >
            Jobseekers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            v-if="jobseekersOpen"
            class="absolute top-full mt-2 bg-white border shadow-md rounded-md py-2 w-40"
          >
            <li v-for="item in jobseekersItems" :key="item">
              <a href="#" class="block px-4 py-2 hover:bg-blue-50">{{
                item
              }}</a>
            </li>
          </ul>
        </div>

        <!-- Employers Dropdown -->
        <div class="relative" @mouseleave="employersOpen = false">
          <button
            @click="toggleDropdown('employers')"
            class="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-semibold"
          >
            Employers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul
            v-if="employersOpen"
            class="absolute top-full mt-2 bg-white border shadow-md rounded-md py-2 w-40"
          >
            <li v-for="item in employersItems" :key="item">
              <a href="#" class="block px-4 py-2 hover:bg-blue-50">{{
                item
              }}</a>
            </li>
          </ul>
        </div>

        <a href="#read" class="text-gray-700 hover:text-blue-600 font-semibold"
          >Read</a
        >
        <a
          href="#newsletter"
          class="text-gray-700 hover:text-blue-600 font-semibold"
          >Newsletter</a
        >
      </div>

      <!-- Login Button -->
      <Button
        variant="'solid'"
        theme="blue"
        size="md"
        class="hidden lg:block bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold px-5 rounded-lg transition"
        @click="dialogLogin = true"
      >
        Login
      </Button>

      <!-- Mobile Hamburger -->
      <div class="lg:hidden flex items-center">
        <button
          @click="menuOpen = !menuOpen"
          class="bg-[#2563eb] p-2 rounded-md flex items-center justify-center"
        >
          <span v-if="menuOpen">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          <span v-else>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="menuOpen"
      class="lg:hidden bg-white w-full shadow-md border-t border-gray-200 absolute top-full left-0 z-40"
    >
      <ul class="flex flex-col p-4 gap-2">
        <!-- Jobseekers Dropdown -->
        <li>
          <button
            @click="mobileJobseekersOpen = !mobileJobseekersOpen"
            class="w-full text-left flex justify-between items-center px-2 py-2 text-gray-700 hover:bg-blue-50 rounded"
          >
            Jobseekers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul v-if="mobileJobseekersOpen" class="pl-4 mt-1 flex flex-col gap-1">
            <li v-for="item in jobseekersItems" :key="item">
              <a href="#" class="block px-2 py-1 hover:bg-blue-50 rounded">{{
                item
              }}</a>
            </li>
          </ul>
        </li>

        <!-- Employers Dropdown -->
        <li>
          <button
            @click="mobileEmployersOpen = !mobileEmployersOpen"
            class="w-full text-left flex justify-between items-center px-2 py-2 text-gray-700 hover:bg-blue-50 rounded"
          >
            Employers
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <ul v-if="mobileEmployersOpen" class="pl-4 mt-1 flex flex-col gap-1">
            <li v-for="item in employersItems" :key="item">
              <a href="#" class="block px-2 py-1 hover:bg-blue-50 rounded">{{
                item
              }}</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#read" class="block px-2 py-2 hover:bg-blue-50 rounded"
            >Read</a
          >
        </li>
        <li>
          <a href="#newsletter" class="block px-2 py-2 hover:bg-blue-50 rounded"
            >Newsletter</a
          >
        </li>
      </ul>
    </div>
  </nav>

  <!-- Login / Signup Dialog -->
  <Dialog v-model="dialogLogin">
    <template #body-title>
      <h3 class="text-2xl font-semibold text-[#2563eb]">
        {{ isLogin ? "Login" : "Create Account" }}
      </h3>
    </template>

    <template #body-content>
      <div v-if="isLogin" class="space-y-4 p-2">
        <FormControl
          label="Phone Number"
          placeholder="Enter your phone number"
          type="text"
          size="sm"
          variant="subtle"
          v-model="loginForm.phone"
        />
        <FormControl label="Password" variant="subtle" size="sm">
          <Password v-model="loginForm.password" />
        </FormControl>
        <p class="text-sm text-gray-600 text-center mt-4">
          Don't have an account?
          <span
            class="text-blue-600 font-semibold cursor-pointer hover:underline"
            @click="isLogin = false"
            >Create account</span
          >
        </p>
      </div>

      <div v-else class="space-y-4 p-2">
        <FormControl
          label="Full Name"
          placeholder="Enter your full name"
          type="text"
          size="sm"
          variant="subtle"
          v-model="signupForm.fullname"
        />
        <FormControl
          label="Email"
          placeholder="Enter your email"
          type="email"
          size="sm"
          variant="subtle"
          v-model="signupForm.email"
        />
        <FormControl
          label="Password"
          placeholder="Enter your password"
          type="password"
          size="sm"
          variant="subtle"
          v-model="signupForm.password"
        />
        <FormControl
          label="Confirm Password"
          placeholder="Confirm your password"
          type="password"
          size="sm"
          variant="subtle"
          v-model="signupForm.confirmPassword"
        />
        <p class="text-sm text-gray-600 text-center mt-4">
          Already have an account?
          <span
            class="text-blue-600 font-semibold cursor-pointer hover:underline"
            @click="isLogin = true"
            >Login</span
          >
        </p>
      </div>
    </template>

    <template #actions="{ close }">
      <div class="flex justify-start flex-row-reverse gap-2">
        <Button
          variant="solid"
          class="bg-[#2563eb] hover:bg-[#1d4ed8] text-white"
          @click="handleSubmit(close)"
          >{{ isLogin ? "Login" : "Register" }}</Button
        >
        <Button variant="outline" @click="close">Cancel</Button>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import logo from "../assets/logo.png";
import { FormControl, Button, Dialog } from "frappe-ui";

const scrolled = ref(false);
const menuOpen = ref(false);
const jobseekersOpen = ref(false);
const employersOpen = ref(false);
const mobileJobseekersOpen = ref(false);
const mobileEmployersOpen = ref(false);
const dialogLogin = ref(false);
const isLogin = ref(true);

const jobseekersItems = ["Find Jobs", "Upload CV", "Career Tips"];
const employersItems = ["Post Job", "Search CVs", "Hire Talent"];

const loginForm = ref({ phone: "", password: "" });
const signupForm = ref({
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const handleSubmit = (close) => {
  if (isLogin.value) console.log("Logging in with:", loginForm.value);
  else console.log("Creating account with:", signupForm.value);
  close();
};

const handleScroll = () => {
  scrolled.value = window.scrollY > 50;
};

const toggleDropdown = (menu) => {
  if (menu === "jobseekers") {
    jobseekersOpen.value = !jobseekersOpen.value;
    employersOpen.value = false;
  } else if (menu === "employers") {
    employersOpen.value = !employersOpen.value;
    jobseekersOpen.value = false;
  }
};

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

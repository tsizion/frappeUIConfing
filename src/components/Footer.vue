<script setup>
import logo from "../assets/logo.png";

const currentYear = new Date().getFullYear();

const links = {
  jobseekers: ["Find Jobs", "Upload CV", "Career Tips"],
  employers: ["Post Job", "Search CVs", "Hire Talent"],
  company: ["About Us", "Blog", "Contact"],
};
</script>

<template>
  <footer
    class="bg-[#f9fafb] border-t border-gray-200 pt-10 pb-6 text-gray-700"
  >
    <!-- Match navbar's container exactly -->
    <div class="max-w-7xl mx-auto px-6">
      <!-- Grid layout -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Logo & Description -->
        <div>
          <img :src="logo" alt="Logo" class="h-16 mb-3" />
          <p class="text-sm text-gray-600 leading-relaxed max-w-xs">
            Connecting jobseekers and employers through smart, simple, and
            secure digital experiences.
          </p>
          <div class="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" class="hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.2l-.3 3h-1.9v7A10 10 0 0 0 22 12z"
                />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.8 0-5 2.2-5 5v14c0 2.8 2.2 5 5 5h14c2.8 0 5-2.2 5-5v-14c0-2.8-2.2-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.5c-1 0-1.7-.8-1.7-1.7s.7-1.7 1.7-1.7 1.7.8 1.7 1.7-.7 1.7-1.7 1.7zm13.5 11.5h-3v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.6h-3v-10h2.9v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.9v5.4z"
                />
              </svg>
            </a>
            <a href="#" aria-label="Twitter" class="hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 4.6c-.9.4-1.8.7-2.8.8 1-.6 1.7-1.5 2-2.6-.9.6-1.9 1-3 1.2A4.8 4.8 0 0 0 16.6 3c-2.6 0-4.8 2.1-4.8 4.8 0 .4 0 .9.1 1.3A13.7 13.7 0 0 1 1.6 3.1a4.7 4.7 0 0 0-.6 2.4c0 1.7.9 3.2 2.3 4.1-.8 0-1.5-.3-2.1-.6v.1c0 2.3 1.7 4.2 3.9 4.6-.4.1-.9.2-1.3.2-.3 0-.6 0-.9-.1.6 2 2.4 3.5 4.6 3.6A9.7 9.7 0 0 1 0 19.5a13.6 13.6 0 0 0 7.4 2.2c8.9 0 13.7-7.4 13.7-13.7v-.6c.9-.7 1.6-1.5 2.2-2.4z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Jobseekers -->
        <div>
          <h3 class="text-lg font-semibold mb-3 text-gray-900">Jobseekers</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="item in links.jobseekers" :key="item">
              <a href="#" class="hover:text-blue-600">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Employers -->
        <div>
          <h3 class="text-lg font-semibold mb-3 text-gray-900">Employers</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="item in links.employers" :key="item">
              <a href="#" class="hover:text-blue-600">{{ item }}</a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold mb-3 text-gray-900">Company</h3>
          <ul class="space-y-2 text-sm">
            <li v-for="item in links.company" :key="item">
              <a href="#" class="hover:text-blue-600">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Line -->
      <div
        class="border-t border-gray-200 mt-8 pt-4 text-center text-sm text-gray-500"
      >
        © {{ currentYear }}
        <span class="font-semibold text-blue-600">Expertly</span>. All rights
        reserved.
      </div>
    </div>
  </footer>
</template>

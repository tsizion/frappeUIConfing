<template>
  <Dialog v-model="dialogLogin">
    <template #body-title>
      <h3 class="text-2xl font-semibold text-[#2563eb]">{{ isLogin ? "Login" : "Create Account" }}</h3>
    </template>

    <template #body-content>
      <div v-if="isLogin" class="space-y-4 p-2">
        <FormControl label="Phone Number" placeholder="Enter your phone number" type="text" size="sm" variant="subtle" v-model="loginForm.phone"/>
        <FormControl label="Password" variant="subtle" size="sm">
          <Password v-model="loginForm.password"/>
        </FormControl>
        <p class="text-sm text-gray-600 text-center mt-4">
          Don't have an account?
          <span class="text-blue-600 font-semibold cursor-pointer hover:underline" @click="isLogin = false">Create account</span>
        </p>
      </div>

      <div v-else class="space-y-4 p-2">
        <FormControl label="Full Name" placeholder="Enter your full name" type="text" size="sm" variant="subtle" v-model="signupForm.fullname"/>
        <FormControl label="Email" placeholder="Enter your email" type="email" size="sm" variant="subtle" v-model="signupForm.email"/>
        <FormControl label="Password" placeholder="Enter your password" type="password" size="sm" variant="subtle" v-model="signupForm.password"/>
        <FormControl label="Confirm Password" placeholder="Confirm your password" type="password" size="sm" variant="subtle" v-model="signupForm.confirmPassword"/>
        <p class="text-sm text-gray-600 text-center mt-4">
          Already have an account?
          <span class="text-blue-600 font-semibold cursor-pointer hover:underline" @click="isLogin = true">Login</span>
        </p>
      </div>
    </template>

    <template #actions="{ close }">
      <div class="flex justify-start flex-row-reverse gap-2">
        <Button variant="solid" class="bg-[#2563eb] hover:bg-[#1d4ed8] text-white" @click="handleSubmit(close)">
          {{ isLogin ? "Login" : "Register" }}
        </Button>
        <Button variant="outline" @click="close">Cancel</Button>
      </div>
    </template>
  </Dialog>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, FormControl, Button } from "frappe-ui";

const dialogLogin = ref(false);
const isLogin = ref(true);

const loginForm = ref({ phone: "", password: "" });
const signupForm = ref({ fullname: "", email: "", password: "", confirmPassword: "" });

const handleSubmit = (close) => {
  if (isLogin.value) console.log("Logging in with:", loginForm.value);
  else console.log("Creating account with:", signupForm.value);
  close();
};

defineExpose({ dialogLogin });
</script>

<script setup>
import NavBar from './components/NavBar.vue';
import { Badge } from 'frappe-ui';
</script>

<template>
 <NavBar/> 
<Badge
  :variant="'outline'"
  :ref_for="true"
  theme="gray"
  size="sm"
  label="Badge"
>
  Badge
</Badge></template>



<script setup>
import { reactive, ref } from 'vue';
import { Input, Button, Dialog, Select } from 'frappe-ui';
import JobCard from '../components/JobCard.vue';

const jobs = reactive([
  { id: 1, title: 'Frontend Developer', company: 'Tech Co', type: 'Full-time' },
  { id: 2, title: 'Backend Developer', company: 'Dev Ltd', type: 'Part-time' },
]);

const showDialog = ref(false);
const form = reactive({
  title: '',
  company: '',
  type: '',
});

function openCreate() {
  Object.assign(form, { title: '', company: '', type: '' });
  showDialog.value = true;
}

function saveJob() {
  jobs.push({ ...form, id: Date.now() });
  showDialog.value = false;
}

function updateJob(updatedJob) {
  const index = jobs.findIndex(j => j.id === updatedJob.id);
  if (index > -1) jobs[index] = { ...updatedJob };
}

function deleteJob(id) {
  const index = jobs.findIndex(j => j.id === id);
  if (index > -1) jobs.splice(index, 1);
}
</script>

<template>
  <div>
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold">Job Listings</h1>
      <Button label="Add Job" @click="openCreate" />
    </div>

    <JobCard
      v-for="job in jobs"
      :key="job.id"
      :job="job"
      :onEdit="updateJob"
      :onDelete="deleteJob"
    />

    <!-- ✅ Only keep this dialog for NEW jobs -->
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
        <Button class="ml-2" variant="subtle" @click="showDialog = false">Cancel</Button>
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Badge, Button, Card, Dialog, Input, Select, toast } from 'frappe-ui'

const props = defineProps(['job', 'onEdit', 'onDelete'])

const showEditDialog = ref(false)
const showDeleteConfirm = ref(false)

const form = reactive({
  title: '',
  company: '',
  type: '',
})

function openEditDialog() {
  Object.assign(form, props.job)
  showEditDialog.value = true
}

function saveEdit() {
  const updatedJob = { ...props.job, ...form }
  props.onEdit(updatedJob)
  showEditDialog.value = false
}

function confirmDelete() {
  props.onDelete(props.job.id)
  toast({
    title: 'Job Deleted',
    description: `${props.job.title} was removed.`,
    status: 'success',
  })
  showDeleteConfirm.value = false
}
</script>

<template>
  <!-- Job Card -->
  <Card class="mb-4">
    <div class="flex justify-between items-start">
      <div>
        <h2 class="text-lg font-semibold">{{ job.title }}</h2>
        <p class="text-sm text-gray-600">{{ job.company }}</p>
        <Badge variant="subtle" theme="blue" class="mt-2">
          {{ job.type }}
        </Badge>
      </div>
      <div class="flex gap-2">
        <Button label="Edit" size="sm" @click="openEditDialog" />
        <Button label="Delete" size="sm" variant="destructive" @click="showDeleteConfirm = true" />
      </div>
    </div>
  </Card>

  <!-- ✅ Edit Dialog using #body-title and #body-content -->
  <Dialog v-model="showEditDialog">
    <template #body-title>
      <h3 class="text-lg font-bold">Edit Job</h3>
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
      <Button variant="solid" @click="saveEdit">Save</Button>
      <Button class="ml-2" variant="subtle" @click="showEditDialog = false">Cancel</Button>
    </template>
  </Dialog>

  <!-- ✅ Delete Confirmation Dialog -->
  <Dialog v-model="showDeleteConfirm">
    <template #body-title>
      <h3 class="text-lg font-bold text-red-600">Confirm Delete</h3>
    </template>

    <template #body-content>
      <p>Are you sure you want to delete <strong>{{ job.title }}</strong>?</p>
    </template>

    <template #actions>
      <Button variant="destructive" @click="confirmDelete">Yes, Delete</Button>
      <Button class="ml-2" variant="subtle" @click="showDeleteConfirm = false">Cancel</Button>
    </template>
  </Dialog>
</template>

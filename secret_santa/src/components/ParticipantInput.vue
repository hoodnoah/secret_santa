<script setup lang="ts">
import { ref } from 'vue'

const firstName = ref("")
const lastName = ref("")
const email = ref("")

</script>

<template>
  <div id="participant-input">
    <input
      type="text"
      id="fname-input"
      placeholder="First Name"
      v-model="firstName"
    />
    <input
      type="text"
      id="lname-input"
      placeholder="Last Name"
      v-model="lastName"
    />
    <input
      type="text"
      id="email-input"
      placeholder="Email"
      v-model="email"
    />
    <button>add friend</button>
    <div>{{ `${lastName}, ${firstName} ${email}` }}</div>
  </div>
</template>

<style>
#participant-input {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1rem;
}
</style>

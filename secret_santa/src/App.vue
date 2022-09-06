<script setup lang="ts">
import ParticipantInput from '@/components/ParticipantInput.vue'
</script>

<template>
  <main>
    <h1>Secret Santa</h1>
    <div class="input-section">
      <h2>Step 1: add your friends</h2>
      <ParticipantInput />
    </div>
  </main>
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 66vw;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}
</style>

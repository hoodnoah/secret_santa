<script setup lang="ts">
import { ref } from 'vue'
import { useParticipantStore } from '@/stores/participants';
import InputField from "./InputField.vue"
import type { Participant } from '@/types/Participants';
import { validateParticipant } from '@/util/ParticipantOps';  

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const invalidInput = ref(false)

const participants = useParticipantStore();

function clearFields() {
  firstName.value = ""
  lastName.value = ""
  email.value = ""
}

function addParticipant() {
  const partialParticipant: Pick<Participant, "FirstName" | "LastName" | "Email"> = {
    FirstName: firstName.value,
    LastName: lastName.value,
    Email: email.value
  }

  const participantIsValid = validateParticipant(partialParticipant)

  participantIsValid ? participants.addParticipant(partialParticipant) : console.log("invalid input")// invalidInput.value = true

  clearFields()

  /* console.log(participants.participants) */
  console.log(firstName.value)
}
</script>

<template>
  <div id="participant-input">
    <InputField placeholder="first name" v-model.trim="firstName" />
    <InputField placeholder="last name" v-model.trim="lastName" />
    <InputField placeholder="email" v-model.trim="email" />
    <button @click="addParticipant" />
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

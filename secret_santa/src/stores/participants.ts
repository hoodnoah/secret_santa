import { defineStore } from 'pinia'
import {v4 as uuidv4} from "uuid"
import {A, O} from "@mobily/ts-belt"
import type { Participant } from '@/types/Participants'
import { compareParticipants } from '@/util/ParticipantOps'

type NewParticipant = Pick<Participant, "FirstName" | "LastName" | "Email">

export const useParticipantStore = defineStore({
  id: 'participants',
  state: () => ({
    participants: [] as Array<Participant>,
  }),
  getters: {
    first: (state) => state.participants[0],
  },
  actions: {
    addParticipant(pt: NewParticipant) {
      const ptWithID = {...pt, ID: uuidv4()}
      this.participants = [...this.participants, ptWithID]
    },
    removeParticipant(pt: Participant) {
      this.participants = this.participants.filter(
        (p2) => p2.ID != pt.ID
      )
    },
    clearParticipants() {
      this.participants = []
    },
    sortParticipants() {
      this.participants = [...this.participants].sort(compareParticipants)
    },
    getParticipantById(id: string):  O.Option<Participant> {
      return A.getBy(this.participants, (pt: Participant) => pt.ID === id)
    }
  },
})

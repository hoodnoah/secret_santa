import { defineStore } from "pinia";
import type { Participant } from "@/types/Participants";

export const useParticipantStore = defineStore({
  id: "participants",
  state: () => ({
    participants: [] as Array<Participant>,
  }),
  getters: {
    first: (state) => state.participants[0],
  },
  actions: {
    addParticipant(pt: Participant) {
      this.participants = [...this.participants, pt];
    },
  },
});

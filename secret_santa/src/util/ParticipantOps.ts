import type { Participant } from "../types/Participants";

/**
 * Compares two strings for ordering
 *
 * @param {string} s1 - the first string
 * @param {string} s2 - the second string
 * @returns {number} -1 if s1 < s2; 0 if s1 == s2; 1 if s1 > s2
 */
const strComp = (s1: string, s2: string): number => {
  if(s1 < s2) {
    return -1
  } else if(s1 > s2) {
    return 1
  } else {
    return 0
  }
}

/**
 * Given two participants, p1 and p2, determine their relative ordering
 * tests by lastName -> firstName -> email 
 *
 * @param {Participant} p1 - the first participant
 * @param {Participant} p2 - the second participant
 * @returns {number} -1 if p1 < p2; 0 if p1 == p2; 1 if p1 > p2
 */
const compareParticipants = (p1: Participant, p2: Participant): number => {
  if(strComp(p1.LastName, p2.LastName) != 0) {
    return strComp(p1.LastName, p2.LastName)
  } else if(strComp(p1.FirstName, p2.FirstName) != 0) {
    return strComp(p1.FirstName, p2.FirstName)
  } else return strComp(p1.Email, p2.Email)
}

export {compareParticipants}



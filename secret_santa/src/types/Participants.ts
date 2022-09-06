import { O } from '@mobily/ts-belt'

type Email = string
type ParticipantID = string

interface Participant {
  ID: ParticipantID
  FirstName: string
  LastName: string
  Email: Email
  Partner: O.Option<Participant>
  PreviousPair: O.Option<Participant>
  CurrentPair: O.Option<Participant>
}

export type { Participant }

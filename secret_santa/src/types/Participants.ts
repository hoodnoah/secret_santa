type Email = string;

interface Participant {
  FirstName: string;
  LastName: string;
  Email: Email;
  Partner: Participant;
  PreviousPair: Participant;
  CurrentPair: Participant;
}

export type { Participant };

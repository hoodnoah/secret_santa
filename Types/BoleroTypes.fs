namespace Types

module BoleroTypes =

    type Participant =
        { FirstName: string
          LastName: string
          Email: string
          Spouse: Participant option
          PreviousYear: Participant option
          CurrentYear: Participant option }

    type TextInput =
        { FirstName: string
          LastName: string
          Email: string }

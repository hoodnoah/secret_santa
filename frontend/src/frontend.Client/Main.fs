module frontend.Client.Main

open Elmish
open Bolero
open Bolero.Html

open Types.BoleroTypes

type Model =
    { Participants: Participant seq
      TextInput: TextInput }

let initModel =
    { Participants = Seq.empty
      TextInput =
        { FirstName = ""
          LastName = ""
          Email = "" } }

// messages specific to the Participant portion of state
type ParticipantMsg =
    | AddParticipant of Participant
    | RemoveParticipant of Participant
    | ClearParticipants

// messages specific to the TextInput portion of the state
type TextInputMsg =
    | SetFirstName of string
    | SetLastName of string
    | SetEmail of string
    | ClearTextInput

// messages for the whole program
type Message =
    | ParticipantMsg of ParticipantMsg
    | TextInputMsg of TextInputMsg


let updateParticipants (message: ParticipantMsg) (participantsState: Participant seq) =
    match message with
    | AddParticipant p -> Seq.append participantsState [ p ]
    | RemoveParticipant p -> Seq.filter (fun x -> x <> p) participantsState
    | ClearParticipants -> Seq.empty

let updateTextInput (message: TextInputMsg) (textInputState: TextInput) =
    match message with
    | SetFirstName fn -> { textInputState with FirstName = fn }
    | SetLastName ln -> { textInputState with LastName = ln }
    | SetEmail e -> { textInputState with Email = e }
    | ClearTextInput ->
        { FirstName = ""
          LastName = ""
          Email = "" }


let update (message: Message) (model: Model) =
    match message with
    | ParticipantMsg p ->
        let updatedParticipants = updateParticipants p model.Participants
        { model with Participants = updatedParticipants }
    | TextInputMsg t ->
        let updatedTextInput = updateTextInput t model.TextInput
        { model with TextInput = updatedTextInput }

let viewInput (model: string) dispatch =
    input {
        attr.value model
        on.change (fun e -> dispatch (unbox e.Value))
    }

let view model dispatch =
    let TextInputDispatch (textInputMsg: TextInputMsg) : unit =
        dispatch (Message.TextInputMsg textInputMsg)

    let ParticipantDispatch (participantMsg: ParticipantMsg) : unit =
        dispatch (Message.ParticipantMsg participantMsg)

    div {
        viewInput model.TextInput.FirstName (fun n -> TextInputDispatch(SetFirstName n))
        viewInput model.TextInput.LastName (fun n -> TextInputDispatch(SetLastName n))
        viewInput model.TextInput.Email (fun e -> TextInputDispatch(SetEmail e))
        $"Hello, {model.TextInput.FirstName} {model.TextInput.LastName} {model.TextInput.Email}"
    }

type MyApp() =
    inherit ProgramComponent<Model, Message>()

    override this.Program = Program.mkSimple (fun _ -> initModel) update view

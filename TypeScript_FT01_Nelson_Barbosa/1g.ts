// G

let change : number = 0
let finalChange : number = 0
let message : string = ""

change = Number (prompt ("Please insert the change: "))

finalChange = change * (1 - 0.1)

message = `The real change is ${finalChange}.`

alert(message)
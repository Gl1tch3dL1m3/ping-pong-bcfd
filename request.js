/*

REQUEST COMMAND - READ THIS BEFORE INSERTING!
Open your request command and...

if you want an embed message, insert this script into "title" field.
Then type "$get(desc)" in "description" field.

if you want a normal message, insert this script into it, but replace "$get(title)" with "$get(desc)"

You must have 2 request commands. One with ✅ reaction and another with ❌ (as stated in README file).
INSERT THIS SCRIPT ONLY INTO ONE OF THEM!

*/

$eval
var title = ""
var desc = ""

try {
  var oppo$ID = (oppo$ID == null) ? 0 : oppo$ID += 0
  var oppo$mentionedID = (oppo$mentionedID == null) ? 0 : oppo$mentionedID += 0
  var mode$ID = (mode$ID == null) ? 0 : mode$ID += 0
  var mode$mentionedID = (mode$mentionedID == null) ? 0 : mode$mentionedID += 0

  if ($ID == $mentionedID || oppo$ID != 0 || oppo$mentionedID != 0 || mode$ID != 0 || mode$mentionedID != 0) {
    title = "Error!"
    desc = "There is a problem creating the request. It's possible that the user already has a request from someone else, you already have a request from someone or you pinged yourself."
  }

  else {
    oppo$ID = $mentionedID
    oppo$mentionedID = $ID
    mode$ID = 1
    mode$mentionedID = 1
    var isReqCreator$ID = 1
    var isReqCreator$mentionedID = 0
    title = "$mentionedName, do you want to play Ping Pong with $name?"
    desc = "Use the reactions below to interact with the message. $name can delete this request by using `pp!finish <user>`."
  }
  
} catch(e) {
  title = "Error!"
  desc = "You must ping someone you want to send a request to."
}
$halt $get(title)

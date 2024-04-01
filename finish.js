$eval
/*

FINISH COMMAND - READ THIS BEFORE INSERTING!
Open your finish command and...

if you want an embed message, insert this script into "title" field.
Then type "$get(desc)" in "description" field.

if you want a normal message, insert this script into it, but replace "$get(title)" with "$get(desc)"

*/

var title = ""
var desc = ""

try {
  if (oppo$mentionedID == $ID) {
    title = "Match finished!"
    desc = "Your current match was successfully finished. ✅"

    delete turn$ID
    delete turn$mentionedID
    delete oppo$ID
    delete mode$ID
    delete isReqCreator$ID
    delete oppo$mentionedID
    delete mode$mentionedID
    delete isReqCreator$mentionedID
  }
  else {
    title = "Error!"
    desc = "You are not playing with this user. ❌"
  }
}
catch(e) {
  title = "Error!"
  desc = "You aren't playing with this user or you didn't mention anyone. ❌"
}
$halt $get(title)

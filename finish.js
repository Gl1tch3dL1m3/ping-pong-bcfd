$eval
// Add "get(desc)" in "description" field

var title = ""
var desc = ""

try {
  if (mode$ID == 3) {
    title = "Match finished!"
    desc = "Your current match was successfully finished. ✅"
    delete mode$ID
  }
  else if (oppo$mentionedID == $ID) {
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

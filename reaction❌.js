$eval
/* 

❌ REACTION EVENT - READ THIS BEFORE INSERTING!
Open your reaction event and...

if you want an embed message, insert this script into "title" field.
Then type "$get(desc)" in "description" field.

if you want a normal message, insert this script into it, but replace "$get(title)" with "$get(desc)"

*/
/*
Modes:
0 - Not playing
1 - Request active
2 - Playing
*/

var title = ""
var desc = ""

try {
  if (mode$ID == 1 && isReqCreator$ID == 0) {
    title = "Request denied!"
    desc = "<@" + oppo$ID + ">'s request has been denied. The match is cancelled. ❌"
    delete mode$ID
    delete oppo$ID
    delete isReqCreator$ID
  }
} catch(e) {
  // Leave this blank...
}
$halt $get(title)

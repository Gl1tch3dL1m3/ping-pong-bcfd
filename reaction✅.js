/* 

✅ REACTION EVENT - READ THIS BEFORE INSERTING!
Open your reaction event and...

if you want an embed message, insert this script into "title" field.
Then type "$get(desc)" in "description" field.

if you want a normal message, insert this script into it, but replace "$get(title)" with "$get(desc)"

*/


$eval
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
    var turn$ID = 1
    mode$ID = 2
    
    title = "Let's play!"
    desc = "Use `pp!ping` to ping a ball to your opponent. Your opponent pings you back and this repeats until someone loses. $name starts first. Have fun! 🎲"
  }
} catch(e) {
  // Leave this blank...
}
$halt $get(title)

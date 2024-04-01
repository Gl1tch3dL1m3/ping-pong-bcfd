$eval
/*

SINGLEPLAYER COMMAND - READ THIS BEFORE INSERTING!
Open your singleplayer command and...

if you want an embed message, insert this script into "title" field.
Then type "$get(desc)" in "description" field.

if you want a normal message, insert this script into it, but replace "$get(title)" with "$get(desc)"

*/
var title = ""
var desc = ""

var mode$ID = (mode$ID == null) ? 0 : mode$ID

if (mode$ID > 0) {
  title = "Error!"
  desc = "You are already playing with someone or have a pending request. You must finish that match before playing with the bot. ❌"
}
else {
  mode$ID = 3
  title = "Let's play!"
  desc = "Use `pp!ping` to ping a ball to the bot. The bot pings the ball back to you and this repeats until someone loses. $name starts first. Have fun! 🎲"
}
$halt $get(title)

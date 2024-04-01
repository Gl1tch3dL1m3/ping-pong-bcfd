$eval
/* 

PING COMMAND - READ THIS BEFORE INSERTING!
Open your ping command and...

if you want an embed message, insert this script into "title" field.
Then type "$get(desc)" in "description" field.

if you want a normal message, insert this script into it, but replace "$get(title)" with "$get(desc)"

*/

var title = ""
var desc = ""

try {
  if (mode$ID == 3) {
    var gennum = Math.floor(Math.random() * 15)
    title = "Ping!"

    if (gennum != 1) {
      desc = "🙋: Pong! 🏓"
      var gennum2 = Math.floor(Math.random() * 15)
      if (gennum2 != 1) {
        desc += "\n🤖: Pong! 🏓"
      }
      else {
        desc += "\n🤖: OOF! Bot missed the shot and you won. Congratulations, $name! 🏆"
        delete mode$ID
      }
    }
    else {
      desc = "💁: OOF! You missed the shot and the bot won! 🏆"
      delete mode$ID
    }
  }

  else if (mode$ID == 2 && turn$ID == 1 && oppo$mentionedID == $ID) {
    var gennum = Math.floor(Math.random() * 15)

    if (gennum != 1) {
    turn$ID = 0
    var turn$mentionedID = (turn$mentionedID == null) ? 1 : turn$mentionedID += 0
    var mode$mentionedID = 2
    
    title = "Ping!"
    desc = "You pinged a ball to your $mentionedName. Now it's their turn to ping a ball. 🏓"
    }
    else {
      title = "OOF!"
      desc = "You missed the shot and your opponent won. Congratulations, $mentionedName! 🏆\n\n*Match over!*"

      delete turn$ID
      delete turn$mentionedID
      delete oppo$ID
      delete mode$ID
      delete isReqCreator$ID
      delete oppo$mentionedID
      delete mode$mentionedID
      delete isReqCreator$mentionedID
    }
  }

  else if (turn$ID == 0) {
    title = "Error!"
    desc = "It's not your turn now. ❌"
  }

  else {
    title = "Error!"
    desc = "Please check if you are playing with anyone or if you pinged the right user. ❌"
  }
} catch(e) {
  title = "Error!"
  desc = "You aren't playing with anyone. ❌"
}
$halt $get(title)

$eval
/*
Add "get(desc)" in "description" field

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

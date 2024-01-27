//longest substring with unique values
function longestsubstring(s) {
  let substringss = {};
  let start = 0;
  let maxlength = 0;
  let longeststring = 0;

  for (let end = 0; end < s.length; end++) {
    if (s[end] in substringss && substringss[s[end]] >= start) {
      //if the char is present ,update the start by adding 1 to the last occurence index
      start = substringss[s[end]] + 1;
    }
    substringss[s[end]] = end;

    //update the max length
    if (end - start + 1 > maxlength) {
      maxlength = end - start + 1;
      longeststring = start;
    }
  }
  return s.substring(longeststring, longeststring + maxlength);
}
let input = "abcabcdbb";
let result = longestsubstring(input);
console.log(result);

//  question: There is a drill in the army. The Army general wants to know the best cumulative power of his troops.
// Troops give the best results when the maximum different level of a soldier stands together. If a troop
// contains 2 same levels of a soldier their power becomes 0. Let assume there are x different levels in the
// army, You have to find the power of the best troop from the army given. Assume 1 soldier power to be 1
// unit.
// 1) Input: army = "wpwkewe" (w,p,k,e : are different levels of soldier) Output: 4 At max 4 is max power of
// any troop formed. (pwke)

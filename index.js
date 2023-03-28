function scuberGreetingForFeet(n){
  // Write your code here!
    if (n <= 400) {
      return 'This one is on me!';
    } else if (400 < n && n < 2000) {
      return "That will be twenty bucks."
    } else if (2000 < n && n < 2500) {
      return "I will gladly take your thirty bucks.";
    } else {
      return "No can do.";
    }
}

function ternaryCheckCity(a){
  // Write your code here!
  return a === "NYC"?   `Ok, sounds good.`: `No go.`;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
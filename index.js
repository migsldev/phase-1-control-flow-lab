function scuberGreetingForFeet(distanceFeet){
  // Write your code here!
  if (distanceFeet <= 400) {
    return 'This one is on me!'

  } else if (distanceFeet > 400 && distanceFeet < 2000) {
    return "That will be twenty bucks."
    
  } else if (distanceFeet > 2000 && distanceFeet <= 2500) {
    return "I will gladly take your thirty bucks."
  
  } else if (distanceFeet > 2500) {
    return "No can do."
  
  }
} 
console.log(scuberGreetingForFeet(199)); // 199 feet
console.log(scuberGreetingForFeet(1500)); // 1500 feet
console.log(scuberGreetingForFeet(2001)); // 2001 feet
console.log(scuberGreetingForFeet(2501)); // 2501 feet

function ternaryCheckCity(city){
  // Write your code here!
 return city === "NYC" ? 'Ok, sounds good.': 'No go.';
}
console.log(ternaryCheckCity("NYC"));
console.log(ternaryCheckCity("Pittsburgh"));


function switchOnCharmFromTip(tipValue){
  // Write your code here!
  switch(tipValue) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('thanks for everything'));

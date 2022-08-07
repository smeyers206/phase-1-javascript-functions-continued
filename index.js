function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(task = "go to the office") {
  return `This Monday, I will ${task}.`;
}
function wrapAdjective(flair, msg = "You are ") {
  return function (compliment = "special") {
    return `${msg}${flair}${compliment}${flair}!`;
  };
}

wrapAdjective("||")("a dedicated programer");

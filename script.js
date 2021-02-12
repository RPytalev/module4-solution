(function() {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (let name of names) {

  if (name.includes('J', 0) || name.includes('j', 0)) {

    byeSpeaker.name = name;
    byeSpeaker.speak(byeSpeaker.name);

  } else {

    helloSpeaker.name = name;
    helloSpeaker.speak(helloSpeaker.name);
  }
}

})();







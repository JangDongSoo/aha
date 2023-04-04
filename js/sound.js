	/* Based on: https://twitter.com/MaximeEuziere/status/788342068431257604 */
  function say(string) {
    let utterance = new (SpeechSynthesisUtterance)(string)
    utterance.voice = speechSynthesis.getVoices[0]
    speechSynthesis.speak(utterance)
  }
  var tag = document.querySelectorAll('input[type=button]')
  for (i=0;i<tag.length;i++){
    tag[i].addEventListener('click',function(e){say(e.target.value)})
  }
const ipt = document.getElementById("inputArea");
const btn = document.getElementById("speakButton");

btn.addEventListener("click", function(){
  const uttr = new SpeechSynthesisUtterance(ipt.value);
  speechSynthesis.speak(uttr);
});

var synth = window.speechSynthesis;
var utterance = new SpeechSynthesisUtterance(' A sound mind in a sound body, Перевод- Здоровый дух в здоровом теле,  Аналог в русском- В здоровом теле здоровый дух.');
function talk () {
        speechSynthesis.speak (
            new SpeechSynthesisUtterance(' A sound mind in a sound body, Перевод- Здоровый дух в здоровом теле,  Аналог в русском- В здоровом теле здоровый дух.')
        )
    };   
function  stop (){
    synth.pause();
}
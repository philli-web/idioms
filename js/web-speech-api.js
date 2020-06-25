
var synth = window.speechSynthesis;
var utterance = new SpeechSynthesisUtterance("По-английски - A sound mind in a sound body,  Перевод- Здоровый дух в здоровом теле,  Аналог в русском- В здоровом теле здоровый дух");
function talk () {
        speechSynthesis.speak (utterance);
    // Берем метод у спичсинтсезис апи для того чтобы проговарить
}

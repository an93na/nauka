function znajdzElementy(selector){
   return document.querySelectorAll(selector);
}

function znajdzElement(selektor) {
    return document.querySelector(selektor);
}

const lista = znajdzElement("ul");
const dodaj = znajdzElement("button");
const input = znajdzElement("input[name='rzecz']");

dodaj.addEventListener('click', () => {
    // console.log('klik');
    const rzecz = input.value;
})
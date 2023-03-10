function znajdzElementy(selector){
   return document.querySelectorAll(selector);
}

function znajdzElement(selektor) {
    return document.querySelector(selektor);
}
function zrobElement(nazwa,tekst){
    const element = document.createElement(nazwa);
    element.innerText = tekst;
    return element;
}

const lista = znajdzElement("ul");
const dodaj = znajdzElement("button");
const input = znajdzElement("input[name='rzecz']");
const bledy = znajdzElement("#bledy");

dodaj.addEventListener('click', () => {
    // console.log('klik');
    const rzecz = input.value;
    if (input.value !== ""){
        input.value="";
            const elLi = zrobElement("li",rzecz);
            const elUsun = zrobElement("button","usun");
            lista.appendChild(elLi);
            elLi.appendChild(elUsun);
    }
    else {
        const ostrzezenie =  zrobElement("div","nie można dodac pustej czynności");
        bledy.appendChild(ostrzezenie);
    }
    
})
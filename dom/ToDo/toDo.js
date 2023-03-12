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

function pokazKomunikat(tekst, waga){
    const ostrzezenie =  zrobElement("div",tekst);
        for(let i=0; i<bledy.children.length; i++){
            bledy.children[i].remove();
        }
        ostrzezenie.setAttribute("class", "waga"+waga)
        bledy.appendChild(ostrzezenie);
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
            pokazKomunikat('dodano czynność', 0)
    }
    else {
        pokazKomunikat('nie można dodać pustego pola', 2)
    }
})
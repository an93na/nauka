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
        setTimeout(() => {
            for(let i=0; i<bledy.children.length; i++){
                bledy.children[i].remove();
            }
        },2000)
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
            const elGora = zrobElement("button", "w górę");
            const elDol = zrobElement("button", "w dol");
            const elGotowe = zrobElement("button", "zrobione");
            lista.appendChild(elLi);

            elLi.appendChild(elUsun);
            elLi.appendChild(elGora);
            elLi.appendChild(elDol);
            elLi.appendChild(elGotowe);
            

            elGotowe.onclick = (evt) => {
                
                evt.target.parentElement.style.textDecoration = "line-through";
            }

            elUsun.onclick = (evt) => {
                evt.target.parentElement.remove();
            }

            elGora.onclick = (evt) => {
                const li1 = evt.target.parentElement;
                const liPoprzedzający = li1.previousElementSibling;
                const ul = li1.parentElement;
                ul.insertBefore(li1, liPoprzedzający);
            }
            
            elDol.onclick = (evt) => {
                
                const li1 = evt.target.parentElement;
                const liNastepny = li1.nextElementSibling;
                const ul = li1.parentElement;
                if(liNastepny !== null) {
                    ul.insertBefore(liNastepny, li1);
                }
                
            }
            

            pokazKomunikat('dodano czynność', 0)
    }
    else {
        pokazKomunikat('nie można dodać pustego pola', 2)
    }
})
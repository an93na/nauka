
//querySelectorAll znajduje elementy i zwraca tablice, czyli znajduje wszystkie elementy
const elementyTd = document.querySelectorAll('td');
let pierwszyElementTd = elementyTd[0];
let ostatniElementTd = elementyTd[elementyTd.length-1];
console.log('Bieżący dokument zawiera: '+ elementyTd.length + ' elementów td');
console.log("Pierwszy element to: ", pierwszyElementTd);
console.log("Ostatni element to: ", ostatniElementTd);
//querySelector znajduje i zwraca pierszy element (tylko jeden)
const pierwszyTd = document.querySelector("td");
console.log("Pierwszy element td to : ", pierwszyTd);

//getElementById wyszukuje po id
let elementId = document.getElementById('element2');
console.log('znaleziony element po Id: ', elementId);

//getElementsByClassName wyszukuje po nazwie klasy i zwraca kilka elementów
let klasy = document.getElementsByClassName("klasa1");
console.log("elementy znalezione po ElementsByClassName", klasy);

//getElementsByTagName wyszukuje po znacznikach i zwraca kilka elementow
let znacznik = document.getElementsByTagName("td");
console.log("Wyszukiwanie po getElementsByTagName ", znacznik);

//getElementsByName wyszukuje pole o danej nazwie w formularzu
let wartoscName = document.getElementsByName("imie");
let wartoscName2 = document.getElementsByName("nazwisko");
console.log("Szukanie po nazwie /imie/ w formularzu getElementsByName", wartoscName);
console.log("Szukanie po nazwie /nazwisko/ w formularzu getElementsByName", wartoscName2);

const el = document.getElementsByName('nazwisko')[0];
const maType= el.hasAttribute('type');
console.log('element o name = nazwisko ' + (maType? 'ma atrybut type':'nie ma atrybutu type'));

const przyciskSet = document.getElementById("set");
const przyciskDel = document.getElementById("del");

przyciskSet.addEventListener('click', function() {console.log('kliknięto na set')
                                                    el.setAttribute('class', 'wazne')});
przyciskDel.addEventListener('click', function() {console.log('kliknięto na del')
                                                    el.removeAttribute('class', 'wazne')});
                                                    
const hasloWidget = document.getElementsByName("haslo")[0];
const sila = document.getElementById("sila");
hasloWidget.addEventListener('keyup', function() {console.log('kliknięto na klawisz')
                                                    let komplikacja = hasloWidget.value.length /8;
                                                    let kolor = 'weak';
                                                    if (komplikacja < 0.25){
                                                        kolor = 'weak';
                                                    }
                                                    else if (komplikacja <0.5){
                                                        kolor = 'medium';
                                                    }
                                                    else if (komplikacja <0.75){
                                                        kolor = 'almost';
                                                    }
                                                    else if (komplikacja < 1){
                                                        kolor = 'close'
                                                    }
                                                    else if (komplikacja < 1.5){
                                                        kolor = 'ok'
                                                    }
                                                    else if (komplikacja <2) {
                                                        kolor = 'super'
                                                    }
                                                    else {
                                                        kolor = 'extra'
                                                    }
                                                    console.log('obecna wartość to: '+ komplikacja);
                                                    hasloWidget.setAttribute("class", kolor);
                                                    sila.innerText= "siła hasła = " + komplikacja + kolor;
});

// const element = document.createElement("h1");
// console.log(element);
// element.innerText = "dodany element"
// const elH3 = document.getElementsByTagName("h3")[0];
// elH3.insertBefore(element,elH3.firstChild);

const dodajEl = document.getElementsByName("dodaj")[0];
dodajEl.addEventListener("click", function()
{
    const kontener = document.getElementById("kontener");
    let nowyElement = document.createElement("span");
    nowyElement.innerText = "nowySpan id = "+Math.floor(Math.random()*100); 
    kontener.insertBefore(nowyElement, kontener.firstChild);
    const kolorR = 16 + Math.floor(Math.random()*256);
    const kolorG = 16 + Math.floor(Math.random()*256);
    const kolorB = 16 + Math.floor(Math.random()*256);
    let kolorSzestnastkowy = "#"+kolorR.toString(16)+kolorG.toString(16)+kolorB.toString(16);
    nowyElement.style.backgroundColor = kolorSzestnastkowy;
    nowyElement.addEventListener("click", function(evt){
        console.log("klik span", evt);
        // evt.target.innerText="Trafiony"
        evt.target.remove();
    })
});
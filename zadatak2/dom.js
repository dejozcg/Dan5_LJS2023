var button = document.querySelector('input[type=submit]');
var items = document.getElementById('lista');
button.addEventListener('click', dodajkvadratice);
var plus = document.getElementById('butonPlus');
var polindrom = document.getElementById("provjeri");
// polindrom.addEventListener('click', provjeripolindrom);

function provjeripolindrom(event){
    event.preventDefault();
    var input = document.getElementsByClassName("unosteksta");
    var string = '';
    for(var i = 0; i < input.length; i++)  {
        // input[i].addEventListener('input', izbrisiKaraktere);
        string += input[i].value;
    }
    var str = string.split('').reverse().join('');
    console.log('string je: ' + string);
    console.log('obrnuti string je: ' + str);

    if(string === str){
        console.log('Unijete vrijednosti su polindrom');
    }else{
        console.log('Unijete vrijednosti nisu polindrom');

    }
}

function dodajLisener(){
    plus.addEventListener('click', dodajnovopolje);
    polindrom.addEventListener('click', provjeripolindrom);
    // var dugmad = document.querySelectorAll("button");
    var dugmad = document.getElementsByClassName("ukloni");
    for(var i = 0; i < dugmad.length; i++)  {
        dugmad[i].addEventListener('click', izbrisipolje);
        // console.log(dugmad[i]);
    }
    var input = document.getElementsByClassName("unosteksta");
    for(var i = 0; i < input.length; i++)  {
        input[i].addEventListener('input', izbrisiKaraktere);
    }
}

function dodajkvadratice(event) {
    event.preventDefault();
    var broj = document.getElementById("insert").value;
    tip = typeof(broj);

    if(!parseInt(broj)){
        document.getElementById("inputlabel").innerHTML = "Unesite cijeli broj";
    }else{
        console.log('ovdje');
        document.getElementById("inputlabel").innerHTML = '';
        for(var i=1; i<=broj; i++){
            items.innerHTML += `<li><input class="unosteksta" type="text" placeholder="unesite text"><button class="ukloni">-</button></li>`;
        }
       plus.style.display = "";
    //    button.disabled = true;

        // console.log(plus);
        dodajLisener();
    }
}

function dodajnovopolje(event){
    event.preventDefault();
    const li = document.createElement('li');
    li.innerHTML = `<li><input class="unosteksta" type="text" placeholder="unesite text"><button>-</button></li>`;
    items.appendChild(li);
    dodajLisener();
}

function izbrisipolje(event) {
        var a = event.target.parentElement;
        a.remove();
        dodajLisener();
}

function izbrisiKaraktere(event){
    var str = event.currentTarget.value;

    // console.log(event.currentTarget.value);

    
    const result = str.replace(/[^a-zA-Z\s]/g, '');
    event.currentTarget.value = result;

}



// console.log(items);
// let li = document.querySelectorAll("li");

// var i = 1;
// for (l of li){
//     l.setAttribute("id", i);
//     i++;
// }


// console.log(button);
// function addItems(event){
//     event.preventDefault();
//     document.getElementById("lista").innerHTML += "<li>" + document.getElementById("insert").value + " <button>X</button> </li>"; 
    
// };

// document.querySelector("input[type=submit]").addEventListener("click", addItems);

// var dugmad = document.querySelectorAll("button");
// for (dugme of dugmad){
//     dugme.addEventListener("click", remove);
// }

// function remove(event) {
//     var a = event.target.parentElement;
//     a.remove();
// }

// var search = document.getElementById("search");

// search.addEventListener("input", trazi);

// function trazi(event){
//     console.log(search.value);
//     for (l of li){
//         if(!l.innerHTML.includes(search.value)){
//             l.remove();
//             console.log(l)
//         }
//     }
// }
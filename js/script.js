/** 1 ARRAY CON 16 NUM CASUALI NON RIPETUTI
 *  2 CLICK EVENT :
 *                - verificare se il num è presente nell array bombe:
 *                        SE SI ---> add class active; aumentare il punteggio
                          se no --->

 */


// ELEMENTI GLOBALI

let   difficolta = document.getElementById('level').value;
const container  = document.getElementById('my_container');
const btnStart   = document.getElementById('btnOne');
const boxNumber  = 100;
let   bombsL     = lvBombs(difficolta);
let   bombs      = [];
let   punteggio  = 0;

console.log(difficolta)
console.log(bombsL)

//  bottone start
btnStart.addEventListener("click", function(){generatoreBoxs(container)});


// -------------- boxs generator-------------
function generatoreBoxs(container) {
  console.log('generatore box start!')

  difficolta = document.getElementById('level').value;
  bombsL     = lvBombs(difficolta);
  bombs      = bombsGen(bombsL);
  console.warn('bombs presenti',bombs)
  
  //    svota messaggi
  message.innerHTML = ''
  points.innerHTML = ''
  //    svuota container
  container.innerHTML ='';
  punteggio  = 0
  // ciclo d aggiunta dei div al container
    for (let i = 1; i < boxNumber + 1; i++) {  
    container.append(singleBox(i));
  }
  console.log('generatore box and!')
  }

// ---------- single box generator------------
function singleBox(id) {
  box = document.createElement('div');
  box.className = 'box';
  box.id = id;
  box.innerHTML = id;
  box.addEventListener('click', function(){clickBox(id,this); })
  return box;
}


// ---------- box click------------
function clickBox(id,ths) {
  console.log('box',id,'clicked')
  if (bombs.includes(id)){
    ths.classList.add('bomb')
    console.log('loose')
    freez();
    mostraPunteggio(punteggio,(boxNumber - bombsL));
    looseMessage();
    
  }else{
    ths.classList.add('active')
    punteggio ++;
    
      if ((punteggio) >= (boxNumber - bombsL)){
          console.log('win')
          freez();
          mostraPunteggio(punteggio,(boxNumber - bombsL));
          winMessage();
      }
  }
}


// -------------bombs generator-------------
function bombsGen(len) {
  console.log('bombsGen start')
  let   arr      = [];
//  generare un numero rando da 1 a 100, e verificare che non sia gia presente se si aggiungere se no generarne un altro finche l arrey leght è quello desiderato
while (arr.length < len) { 
  R = Math.floor(Math.random()*100 + 1)
  if (arr.includes(R)){
  }else{
      arr.push(R);
  }
}
  console.log('bombsGen and')
  return arr
}

// evento di congelamento : aggiunge un div absolute al container
freez()
function freez() {
  console.log('freez')
  let freez = document.createElement('div');
  freez.className = 'freez'
  container.append(freez)
}

// mostra punteggio

function mostraPunteggio(p,winC) {
  punt = document.getElementById('points');
  punt.innerHTML = `punteggio ${p} su ${winC}`
}

function winMessage() {
  message = document.getElementById('message');
  message.innerHTML = 'hai vinto!!!'
}

function looseMessage() {
  message = document.getElementById('message');
  message.innerHTML = 'BOOMMM hai perso!!!'
}

// difficoltà cambia numero di bombe
function lvBombs(lv) {
number = 0;
if (lv == 0){
  number = 8;
} else if (lv == 1){
  number = 16;
}else {
  number = 32;
}
return number  
}





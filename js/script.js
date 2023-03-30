/** 1 ARRAY CON 16 NUM CASUALI NON RIPETUTI
 *  2 CLICK EVENT :
 *                - verificare se il num è presente nell array bombe:
 *                        SE SI ---> add class active; aumentare il punteggio
                          se no --->

 */

// ELEMENTI GLOBALI
const difficolta = document.getElementById('level').value;
const container  = document.getElementById('my_container');
const btnStart   = document.getElementById('btnOne');
const boxNumber  = 100;
let   bombs      = [];
let   bombsL     = 6;

// -------------bombs generator-------------

bombsGen()
function bombsGen() {
  console.log('bombsGen start')
//  aggiungere n alementi in array bombs
  // for (let i = 1; i < bombsL +1 ; i++) {
  //   bombs.push(i);
  // }
//  generare un numero rando da 1 a 100, e verificare che non sia gia presente se si aggiungere se no generarne un altro finche l arrey leght è quello desiderato
while (bombs.length < bombsL) {
  
  R = Math.floor(Math.random()*100 + 1)
  if (bombs.includes(R)){

  }else{
    bombs.push(R);
    console.log('aggiunto', R)
  }
}
  
  console.log('bombs', bombs)
  console.log('bombsGen and')
}






//  bottone start
btnStart.addEventListener("click", function(){generatoreBoxs(container)});


// -------------- boxs generator-------------
function generatoreBoxs(container) {
  console.log('generatore box start!')
    //    svuota container
        container.innerHTML ='';
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

// ---------- bomb array -----------

// ---------- box click------------
function clickBox(id,ths) {
  console.log('box',id,'clicked')
  ths.classList.add('active')
  // ths.removeEventListener('click',function(){})
}


// CLICK CELLA
//  verifico se è una bomba
/**  si ---> fine gioco

    no ---> aggiungo classe active alla celle
            punteggio + 1 
            verificare se punteggio ha raggiunto il massimo --> fine gioco
 */
/*
// FINE GIOCO
- ACCENDERE TUTTE LE BOMBE
- stampare msg con punteggio se vinci o perdi
- congelo la griglia e l opacizzo

*/

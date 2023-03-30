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
let   arr      = [];
let   bombsL     = 6;

//  bottone start
btnStart.addEventListener("click", function(){generatoreBoxs(container)});


// -------------- boxs generator-------------
function generatoreBoxs(container) {
  console.log('generatore box start!')

  bombs = bombsGen();
  console.warn('bombs presenti',bombs)

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


// ---------- box click------------
function clickBox(id,ths) {
  console.log('box',id,'clicked')
  console.log(bombs)
  console.log(bombs.includes(id))
  if (bombs.includes(id)){
    console.log('boommm')
  }else{
    ths.classList.add('active')
  }

  // ths.removeEventListener('click',function(){})
}


// -------------bombs generator-------------
function bombsGen() {
  console.log('bombsGen start')
  let   arr      = [];
//  generare un numero rando da 1 a 100, e verificare che non sia gia presente se si aggiungere se no generarne un altro finche l arrey leght è quello desiderato
while (arr.length < bombsL) { 
  R = Math.floor(Math.random()*100 + 1)
  if (arr.includes(R)){
  }else{
      arr.push(R);
  }

}
  console.log('bombsGen and')
  return arr
}


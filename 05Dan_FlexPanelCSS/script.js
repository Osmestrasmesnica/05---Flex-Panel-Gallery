const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) { /*e je za event */
  console.log(e.propertyName); /*tokom klika 2 stvari se menjaju, velicina fonta i flex tako da moramo da preciziramo koji cekamo */
  if (e.propertyName.includes('flex')){ /*preciziramo sta cekamo */
    this.classList.toggle('open-active'); /*kazemo sta se radi ako propertyName ima flex u sebi */
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen)); /*slusamo klik na svakom panelu, kada se klikne otvorice se i aktivirace se css open, i kada se to zavrsi aktivira se sledeci event */
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); /*sledeci event koji krece kada se prethodni zavrsi */

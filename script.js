let valeur = 0;
let check = false;
let oneList = { valeur: 0, check: true };

const tache = todoForm.addEventListener("input", (e) => {
  oneList.valeur = e.target.value;
  return oneList.valeur;
});

const formul = document.addEventListener("submit", (e) => {
  e.preventDefault();
  maListe.innerHTML += `<li>${oneList.valeur}<span id="finish"></span></li>`;
  oneList.check = true;
  todoForm.value = "";
});

maListe.addEventListener("click", (e) => {
  if (oneList.check === true) {
    finish.innerHTML = " (terminé)";
    oneList.check = false;
  } else {
    e.target.remove();
  }
});

const form = document.querySelector("form");

// Local Storage

// On peut voir notre local storage dans Inspecter > Appli > Stockage Local

// Le but est donc de prendre tout mon contenu <ul> et de l'injecter dans mon local storage, pour ne pas que mon contenu disparaisse si je ferme puis rouvre la page
const storeList = () => {
  window.localStorage.todoList = maListe.innerHTML;
};
// "todoList" est le nom de l'espace de stockage que j'ai choisi de nommer ici. C'est le nom qui appraîtra ensuite dans mon local storage. Je lui passe tout le contenu de mon <ul> qui contient mes <li>. L'id de mon <ul> est "maListe"

const getTodos = () => {
  if (window.localStorage.todoList) {
    // La condition ci-dessus dit "est-ce qu'il y a qqch dans ma todoList dnas le localStorage?" Si oui, alors fonction fais la chose ci-dessous
    maListe.innerHTML = window.localStorage.todoList;
  } else {
    maListe.innerHTML = `<li>Créez votre to-do, cliquez dessus pour le supprimer</li>`;
    // Si todoList vide à l'ouverture de la page, alors indique ce message
  }
};
getTodos();
// C'est ici la fonction qui permet d'appeler ma todolist lorsque je ré-ouvre ma page. On remarque que c'est exactement l'inverse de storeList, puisqu'ici on injecte le contenu du local storage, dans ma page, et non l'inverse.
// On n'oublie pas d'appeler cette fonction ici.

//

// Code
form.addEventListener("submit", (e) => {
  e.preventDefault();
  maListe.innerHTML += `<li>${todoInput.value}</li>`;
  todoInput.value = "";
  storeList();
});
// e.preventDefault pour ne pas que la page se rafraichisse à chaque submit (sinon chaque <li> va disparaître)
// Ici je dis : "à chaque fois que je soumets mon formulaire, j'ajoute la valeur de l'input dans une nouvelle <li>"
// Puis je rends le input vide pour pouvoir taper qqch de nouveau
// Ma fonction storeList permet d'actualiser à chaque submit mon stockage de mes <li>

maListe.addEventListener("click", (e) => {
  if (e.target.classList.contains("checked")) {
    e.target.remove();
  } else {
    e.target.classList.add("checked");
    // ici j'ajoute la classe "checked" du CSS
  }
  storeList();
});
// 1 - Ce que dis le IF :
//     Ici on vérifie que si notre <li> clickée possède la classe "checked" (ce qui signifie qu'on l'a déjà cliqué une fois pour lui injecter cette classe), alors je remove cette <li>
// 2 - Ce que dis le ELSE :
//     Si ma <li> clickée n'a pas déjà été cliquée une fois auparavant, elle n'a donc pas eu encore la classe "checked". Donc à ce moment là, je lui injecte cette classe "checked". Car pour rappel dans notre code, on ne supprime pas tout de suite notre <li>, d'abord au 1er click, la <li> indique "terminé" puis si on clique une 2nde fois, alors là la <li> est supprimée
// Note : J'ajoute de nouveau storeList pour actualiser mon stockage à chaque modification ou suppression d'une <li>

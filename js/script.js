//variable prix
let sandwich = 5.50;
let plateauMezze = 10.50;
let platDujour = 8;
let total = 0;

                                                                //Ecran 1
let container = document.createElement("div");
document.body.appendChild(container);
let p = document.createElement("p");
container.appendChild(p);
p.textContent = "Séletionnez un ou plusieurs plats";

let form1 = document.createElement("form");
container.appendChild(form1);


//Sandwish
let para1 = document.createElement("p");
form1.appendChild(para1);
let boxSandwish = document.createElement("input");
boxSandwish.type = "checkbox";
para1.appendChild(boxSandwish);
let labelSandwich = document.createElement("label");
para1.appendChild(labelSandwich);
labelSandwich.textContent = "Sandwish (5,50 euros)"


//Pateau mezze
let para2 = document.createElement("p");
form1.appendChild(para2);
let boxplateau = document.createElement("input");
boxplateau.type = "checkbox";
para2.appendChild(boxplateau);
let labelplateau = document.createElement("label");
para2.appendChild(labelplateau);
labelplateau.textContent = "Plateau mezze (10,50 euros)"


//plat du jour
let para3 = document.createElement("p");
form1.appendChild(para3);
let boxplat = document.createElement("input");
boxplat.type = "checkbox";
para3.appendChild(boxplat);
let labelplat = document.createElement("label");
para3.appendChild(labelplat);
labelplat.textContent = "Plat du jour (8 euros)"


//bouton
let btnContinue = document.createElement("input");
form1.appendChild(btnContinue);
btnContinue.type = "button";
btnContinue.value = "Continuer"

//message erreur
let labelerreur = document.createElement("label");
labelerreur.textContent = "Veuillez Selectionner au moins un plat";
labelerreur.style.color = "red";
container.appendChild(labelerreur);
labelerreur.hidden = true;






btnContinue.addEventListener("click", msgerreur, false);

function msgerreur() {
  if (boxSandwish.checked == false && boxplateau.checked == false && boxplat.checked == false) {
    labelerreur.hidden = false;
  } else {
    container.hidden = true
    container1.hidden = false
    total = 0
  }
  //ça verifie si les cases sont cochés et ajoute leur prix au prix total
  if (boxSandwish.checked == true) {
    total += sandwich;
  }
  if (boxplateau.checked == true) {
    total += plateauMezze;
  }
  if (boxplat.checked == true) {
    total += platDujour;
  }
  //affiche le prix total
  p1.textContent = "Le prix total de votre commande est de " + total + " euros";
}


                                                            //Ecran 2 container1
let container1 = document.createElement("div");
document.body.appendChild(container1);
let p1 = document.createElement("p");
container1.appendChild(p1);
container1.hidden = true;


p1.textContent = "Le prix total de votre commande est de " + total + " euros";

let form2 = document.createElement("form");
container1.appendChild(form2);

//bouton Retour
let btnRetour = document.createElement("input");
form2.appendChild(btnRetour);
btnRetour.type = "button";
btnRetour.value = "Retour";
//bouton container1
let btnContinue1 = document.createElement("input");
form2.appendChild(btnContinue1);
btnContinue1.type = "button";
btnContinue1.value = "Continuer"

btnContinue1.addEventListener("click", suite, false);

//Bouton retour
btnRetour.addEventListener("click", retour, false);

function retour() {
  container.hidden = false
  container1.hidden = true
}

function suite() {
  container1.hidden = true
  container2.hidden = false
}

                                                            //ecran 3 container2
let container2 = document.createElement("div");
container2.hidden = true;
document.body.appendChild(container2);
let p2 = document.createElement("p");
container2.appendChild(p2);

p2.textContent = "Comment souhaitez-vous payer votre commande ?";

let form3 = document.createElement("form");
container2.appendChild(form3);

let para4 = document.createElement("p");
form3.appendChild(para4);
let cartebleu = document.createElement("input");
form3.appendChild(cartebleu);
cartebleu.type = "radio";
cartebleu.name = "choixpaiment"
let labelcartebleu = document.createElement("label");
form3.appendChild(labelcartebleu);
labelcartebleu.textContent = "Maintenant par carte bancaire VISA";

let para5 = document.createElement("p");
form3.appendChild(para5);
let especes = document.createElement("input");
form3.appendChild(especes);
especes.type = "radio";
especes.name = "choixpaiment"
let labelespeces = document.createElement("label");
form3.appendChild(labelespeces);
labelespeces.textContent = "À la livraison en espèces ou en chèque";

btnRetour.addEventListener("click", retour, false);

//bouton retour
let para6 = document.createElement("p");
form3.appendChild(para6);
let btnRetour1 = document.createElement("input");
form3.appendChild(btnRetour1);
btnRetour1.type = "button";
btnRetour1.value = "retour";

//bouton continuer
let btnContinue2 = document.createElement("input");
form3.appendChild(btnContinue2);
btnContinue2.type = "button";
btnContinue2.value = "Continuer";
//bouton continuer
btnContinue2.addEventListener("click", suite1, false);

//Bouton retour



function suite1 () {
  if (cartebleu.checked === true ) {
    container2.hidden = true;
    container3.hidden = false;
  } else if (especes.checked === true) {
    container2.hidden = true;
    container4.hidden = false;
  }
}


                                                          //ecran 4 container3
let container3 = document.createElement("div");
container3.hidden = true;
document.body.appendChild(container3);
let p3 = document.createElement("p");
container3.appendChild(p3);

p3.textContent = "Paiement par carte bancaire VISA";

let p5 = document.createElement("p");
container3.appendChild(p5);
container3.hidden = true;
p5.textContent = "Numéro carte bancaire : "
let champ = document.createElement("input");
container3.appendChild(champ);
champ.type = "texte";

//date expiration
let p6= document.createElement("p");
container3.appendChild(p6);
container3.hidden = true;
p6.textContent = "Date d'expiration :";

//numero date expiration mois
let labelMois= document.createElement("label")
container3.appendChild(labelMois)
container3.hidden = true
labelMois.textContent = "Mois ";
let champ1 = document.createElement("input");
container3.appendChild(champ1);
champ1.type = "number";
champ1.setAttribute("min",1);
champ1.setAttribute("max",12);


//numero date expiration année
let labelAnne= document.createElement("label")
container3.appendChild(labelAnne)
container3.hidden = true
labelAnne.textContent = " Année ";
let champ2 = document.createElement("input");
container3.appendChild(champ2);
champ2.type = "number";
champ2.setAttribute("min",2018);
champ2.setAttribute("max",2030);

//Cryptogramme
let p9= document.createElement("p");
container3.appendChild(p9);
container3.hidden = true;
p9.textContent = "Cryptogramme :";
let champ3 = document.createElement("input");
container3.appendChild(champ3);
champ3.type = "number";
champ3.setAttribute("min",1);
champ3.setAttribute("max",999);

//Nom du titulaire
let p10 = document.createElement("p");
container3.appendChild(p10);
container3.hidden = true;
p10 .textContent = "Nom du titulaire : "
let champ4 = document.createElement("input");
container3.appendChild(champ4);
champ4.type = "texte";


//bouton retour
let para7 = document.createElement("p");
container3.appendChild(para7);
let btnRetour2 = document.createElement("input");
container3.appendChild(btnRetour2);
btnRetour2.type = "button";
btnRetour2.value = "Retour";

//bouton continuer
let btnContinue3 = document.createElement("input");
container3.appendChild(btnContinue3);
btnContinue3.type = "button";
btnContinue3.value = "Continuer";
//bouton continuer
btnContinue3.addEventListener("click", suite2, false);

//Bouton retour
btnRetour2.addEventListener("click", retour2, false);

function suite2() {
  if (champ.value == null || champ.value == "" || champ1.value == null || champ1.value == "" || champ2.value == null || champ2.value == "" || champ3.value == null || champ3.value == "" ||
    champ4.value == null || champ4.value == "") {
    labelerreur1.hidden = false;
   } else {
     container3.hidden = true;
     container4.hidden = false;
   }
 }

function retour2() {
  container3.hidden = true
  container2.hidden = false
}



//message erreur
let para8 = document.createElement("p");
container3.appendChild(para8);
let labelerreur1 = document.createElement("label");
labelerreur1.textContent = "Veuillez saisir toutes les informations demandées avant de continuer.";
labelerreur1.style.color = "red";
container3.appendChild(labelerreur1);
labelerreur1.hidden = true;




                                                          //Ecran 5 container5
let container4 = document.createElement("div");
container4.hidden = true;
document.body.appendChild(container4);
let p11 = document.createElement("p");
container4.appendChild(p11);


p11.textContent = "Votre commande a bien été prise en compte.";

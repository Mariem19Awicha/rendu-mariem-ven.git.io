const SYMBOLE = "#";
const RETOUR_LIGNE = "<br>";
function lireNombre (id) {
    // Récupération de la référence sur l'élément passé via le paramètre id
    var elNombre = document.getElementById(id);
    // Récupération de la donnée saisie
    // !! cette donnée est en format String !!
    var strNombre = elNombre.value;
    // Conversion de la représentation de la valeur du nombre en numérique SANS décimale integer
    var nNombre = parseInt(strNombre);
    // Retourner le résultat
    return nNombre;
    // CODE OPTIMISE en une ligne ...
    // retrun parseFloat(document.getElementById(id).value);
} // lireNombre
 
 
function forgerTriangle(nbLignes) {
    // Chaine de caractères représentant le triangle
    var strTriangle = "";
    // Algorithme de la création du triangle
    // Variables locales
    var noLigne = 0;
    var noColonne = 0;
    // Forge du triangle
    while (noLigne <= nbLignes) {
        while (noColonne < noLigne) {
            // Concaténation des symboles
            strTriangle += SYMBOLE;
            // Prochaine colonne
            noColonne++;
        } // while 
        // Ajoute le retour ligne (concaténation)
        strTriangle += RETOUR_LIGNE;
        // Prochaine ligne
        noLigne++;
        // Recommencer du début
        noColonne = 0;
    } // while  
    // Retourner le résultat
    return strTriangle;   
} // forgerTriangle
 
 
function afficherTriangle(triangle) {
    // Accéder à l'élément dans lequel il faut afficher le triangle
    var elTriangle = document.getElementById("triangle");
    // Insérer la donnée dans le DOM sur l'élément id="triangle"
    elTriangle.innerHTML = triangle;
    // CODE OPTIMISE en une ligne ...
    // document.getElementById("triangle").innerHTML = triangle;
} // afficherTriangle
 
 
function onClickDessineTriangle() {
    // Récupérer les valeurs (numérique float)
    var nbLignes = lireNombre("nbLignes");
    // Forger le triangle
    var strTriangle = forgerTriangle(nbLignes);
    // Afficher le triangle
    afficherTriangle(strTriangle);   
    // CODE OPTIMISE en une ligne ...
    // afficherTriangle(forgerTriangle(lireNombre("nbLignes"), lireNombre("nbColonnes")));
} // onClickDessineTriangle
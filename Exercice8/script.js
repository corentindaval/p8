//Votre code ici


function add(a,b) {
    var resultat;
    if (typeof a == "string") {
        a=parseFloat(a)
    }
    if (typeof b == "string") {
        b = parseFloat(b)
    }
        if (b < 0) {
            resultat = a - (-b);
        } else {
            resultat = a + b;
        }
    
    return resultat;
}



 export default add;

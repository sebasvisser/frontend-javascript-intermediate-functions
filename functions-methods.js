// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat

function getEmailDomain(mail) {
    let indexAt = mail.search("@");
    return mail.slice(indexAt+1,mail.length);
}
// ---- Verwachte uitkomsten:
console.log("Opdracht 1:")
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
console.log("Verwacht novi-education.nl => " + getEmailDomain("n.eeken@novi-education.nl"));

// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
console.log("Verwacht novi.nl => " + getEmailDomain("t.mellink@novi.nl"));

// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
console.log("Verwacht outlook.com => " + getEmailDomain("a.wiersma@outlook.com"));






/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)

function typeOfEmail(emailadres){
    let indexAt = emailadres.search("@");
    let domain =  emailadres.slice(indexAt+1,emailadres.length);
    if (domain === "novi.nl"){
        return "Medewerker";
    }else if (domain === "novi-education.nl"){
        return "Student";
    }else {
        return "Extern";
    }
}
// ---- Verwachte uitkomsten:
console.log("Opdracht 2:")
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
console.log("Verwacht Student => " + typeOfEmail("n.eeken@novi-education.nl"));

// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
console.log("Verwacht Medewerker => " + typeOfEmail("t.mellink@novi.nl"));

// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
console.log("Verwacht Extern => " + typeOfEmail("novi.nlaapjesk@outlook.com"));

// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
console.log("Verwacht Extern => " + typeOfEmail("a.wiersma@outlook.com"));




/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const MotDePasse = document.getElementById('password')

const NombreCaractere = document.querySelector(".validation-longueur");
const MajusculeMinuscule = document.querySelector(".validation-majuscule");
const CaractereSpecial = document.querySelector(".validation-caractere")
const longeur = document.getElementById("longeur")







function ValidationLongeur(){
    if(MotDePasse.value.length >= 8){
        NombreCaractere.style.color = "green";
    }
    else{
        NombreCaractere.style.color = "red";
        
    }
}

function ValidationMajusculeLongeur(){
    const regex_Mm = /[a-z]/&&/[A-Z]/;
    if(regex_Mm === MotDePasse){
        MajusculeMinuscule.style.color = "green"
    }
    else{
        MajusculeMinuscule.style.color = "red"
    }
}

function ValidationCaractereSpecial(){
    const regex_CaractereSpecial = / #|!$%?&*()_-+=/
    if(regex_CaractereSpecial === MotDePasse){
        CaractereSpecial.style.color = "green"
    }
    else{
        CaractereSpecial.style.color = "red"
    }
}

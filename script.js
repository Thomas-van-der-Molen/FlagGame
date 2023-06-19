
//yes I hardcoded the answers in an object
//I used python to help scrape the data and format it
//Things I can add:
//A timer
//Menu bar with options for fast delete and learn mode
//Improve the appearance
//Next up: country outlines game

const answers =
{
    "Andorra" : "&#x1F1E6;&#x1F1E9;",
    "UnitedArabEmirates" : "&#x1F1E6;&#x1F1EA;",
    "Afghanistan" : "&#x1F1E6;&#x1F1EB;",
    "AntiguaandBarbuda" : "&#x1F1E6;&#x1F1EC;",
    "Albania" : "&#x1F1E6;&#x1F1F1;",
    "Armenia" : "&#x1F1E6;&#x1F1F2;",
    "Angola" : "&#x1F1E6;&#x1F1F4;",
    "Argentina" : "&#x1F1E6;&#x1F1F7;",
    "Austria" : "&#x1F1E6;&#x1F1F9;",
    "Australia" : "&#x1F1E6;&#x1F1FA;",
    "Azerbaijan" : "&#x1F1E6;&#x1F1FF;",
    "BosniaandHerzegovina" : "&#x1F1E7;&#x1F1E6;",
    "Barbados" : "&#x1F1E7;&#x1F1E7;",
    "Bangladesh" : "&#x1F1E7;&#x1F1E9;",
    "Belgium" : "&#x1F1E7;&#x1F1EA;",
    "BurkinaFaso" : "&#x1F1E7;&#x1F1EB;",
    "Bulgaria" : "&#x1F1E7;&#x1F1EC;",
    "Bahrain" : "&#x1F1E7;&#x1F1ED;",
    "Burundi" : "&#x1F1E7;&#x1F1EE;",
    "Benin" : "&#x1F1E7;&#x1F1EF;",
    "Brunei" : "&#x1F1E7;&#x1F1F3;",
    "Bolivia" : "&#x1F1E7;&#x1F1F4;",
    "Brazil" : "&#x1F1E7;&#x1F1F7;",
    "Bahamas" : "&#x1F1E7;&#x1F1F8;",
    "Bhutan" : "&#x1F1E7;&#x1F1F9;",
    "Botswana" : "&#x1F1E7;&#x1F1FC;",
    "Belarus" : "&#x1F1E7;&#x1F1FE;",
    "Belize" : "&#x1F1E7;&#x1F1FF;",
    "Canada" : "&#x1F1E8;&#x1F1E6;",
    "DemocraticRepublicOfCongo" : "&#x1F1E8;&#x1F1E9;",
    "CentralAfricanRepublic" : "&#x1F1E8;&#x1F1EB;",
    "RepublicOfCongo" : "&#x1F1E8;&#x1F1EC;",
    "Switzerland" : "&#x1F1E8;&#x1F1ED;",
    "IvoryCoast" : "&#x1F1E8;&#x1F1EE;",
    "Chile" : "&#x1F1E8;&#x1F1F1;",
    "Cameroon" : "&#x1F1E8;&#x1F1F2;",
    "China" : "&#x1F1E8;&#x1F1F3;",
    "Colombia" : "&#x1F1E8;&#x1F1F4;",
    "CostaRica" : "&#x1F1E8;&#x1F1F7;",
    "Cuba" : "&#x1F1E8;&#x1F1FA;",
    "CapeVerde" : "&#x1F1E8;&#x1F1FB;",
    "Cyprus" : "&#x1F1E8;&#x1F1FE;",
    "CzechRepublic" : "&#x1F1E8;&#x1F1FF;",
    "Germany" : "&#x1F1E9;&#x1F1EA;",
    "Djibouti" : "&#x1F1E9;&#x1F1EF;",
    "Denmark" : "&#x1F1E9;&#x1F1F0;",
    "Dominica" : "&#x1F1E9;&#x1F1F2;",
    "DominicanRepublic" : "&#x1F1E9;&#x1F1F4;",
    "Algeria" : "&#x1F1E9;&#x1F1FF;",
    "Ecuador" : "&#x1F1EA;&#x1F1E8;",
    "Estonia" : "&#x1F1EA;&#x1F1EA;",
    "Egypt" : "&#x1F1EA;&#x1F1EC;",
    "Eritrea" : "&#x1F1EA;&#x1F1F7;",
    "Spain" : "&#x1F1EA;&#x1F1F8;",
    "Ethiopia" : "&#x1F1EA;&#x1F1F9;",
    "Finland" : "&#x1F1EB;&#x1F1EE;",
    "Fiji" : "&#x1F1EB;&#x1F1EF;",
    "Micronesia" : "&#x1F1EB;&#x1F1F2;",
    "France" : "&#x1F1EB;&#x1F1F7;",
    "Gabon" : "&#x1F1EC;&#x1F1E6;",
    "UnitedKingdom" : "&#x1F1EC;&#x1F1E7;",
    "Grenada" : "&#x1F1EC;&#x1F1E9;",
    "Georgia" : "&#x1F1EC;&#x1F1EA;",
    "Ghana" : "&#x1F1EC;&#x1F1ED;",
    "Gambia" : "&#x1F1EC;&#x1F1F2;",
    "Guinea" : "&#x1F1EC;&#x1F1F3;",
    "EquatorialGuinea" : "&#x1F1EC;&#x1F1F6;",
    "Greece" : "&#x1F1EC;&#x1F1F7;",
    "Guatemala" : "&#x1F1EC;&#x1F1F9;",
    "GuineaBissau" : "&#x1F1EC;&#x1F1FC;",
    "Guyana" : "&#x1F1EC;&#x1F1FE;",
    "Honduras" : "&#x1F1ED;&#x1F1F3;",
    "Croatia" : "&#x1F1ED;&#x1F1F7;",
    "Haiti" : "&#x1F1ED;&#x1F1F9;",
    "Hungary" : "&#x1F1ED;&#x1F1FA;",
    "Indonesia" : "&#x1F1EE;&#x1F1E9;",
    "Ireland" : "&#x1F1EE;&#x1F1EA;",
    "Israel" : "&#x1F1EE;&#x1F1F1;",
    "India" : "&#x1F1EE;&#x1F1F3;",
    "Iraq" : "&#x1F1EE;&#x1F1F6;",
    "Iran" : "&#x1F1EE;&#x1F1F7;",
    "Iceland" : "&#x1F1EE;&#x1F1F8;",
    "Italy" : "&#x1F1EE;&#x1F1F9;",
    "Jamaica" : "&#x1F1EF;&#x1F1F2;",
    "Jordan" : "&#x1F1EF;&#x1F1F4;",
    "Japan" : "&#x1F1EF;&#x1F1F5;",
    "Kenya" : "&#x1F1F0;&#x1F1EA;",
    "Kyrgyzstan" : "&#x1F1F0;&#x1F1EC;",
    "Cambodia" : "&#x1F1F0;&#x1F1ED;",
    "Kiribati" : "&#x1F1F0;&#x1F1EE;",
    "Comoros" : "&#x1F1F0;&#x1F1F2;",
    "SaintKittsandNevis" : "&#x1F1F0;&#x1F1F3;",
    "NorthKorea" : "&#x1F1F0;&#x1F1F5;",
    "SouthKorea" : "&#x1F1F0;&#x1F1F7;",
    "Kuwait" : "&#x1F1F0;&#x1F1FC;",
    "Kazakhstan" : "&#x1F1F0;&#x1F1FF;",
    "Laos" : "&#x1F1F1;&#x1F1E6;",
    "Lebanon" : "&#x1F1F1;&#x1F1E7;",
    "SaintLucia" : "&#x1F1F1;&#x1F1E8;",
    "Liechtenstein" : "&#x1F1F1;&#x1F1EE;",
    "SriLanka" : "&#x1F1F1;&#x1F1F0;",
    "Liberia" : "&#x1F1F1;&#x1F1F7;",
    "Lesotho" : "&#x1F1F1;&#x1F1F8;",
    "Lithuania" : "&#x1F1F1;&#x1F1F9;",
    "Luxembourg" : "&#x1F1F1;&#x1F1FA;",
    "Latvia" : "&#x1F1F1;&#x1F1FB;",
    "Libya" : "&#x1F1F1;&#x1F1FE;",
    "Morocco" : "&#x1F1F2;&#x1F1E6;",
    "Monaco" : "&#x1F1F2;&#x1F1E8;",
    "Moldova" : "&#x1F1F2;&#x1F1E9;",
    "Montenegro" : "&#x1F1F2;&#x1F1EA;",
    "Madagascar" : "&#x1F1F2;&#x1F1EC;",
    "MarshallIslands" : "&#x1F1F2;&#x1F1ED;",
    "NorthMacedonia" : "&#x1F1F2;&#x1F1F0;",
    "Mali" : "&#x1F1F2;&#x1F1F1;",
    "Myanmar" : "&#x1F1F2;&#x1F1F2;",
    "Mongolia" : "&#x1F1F2;&#x1F1F3;",
    "Mauritania" : "&#x1F1F2;&#x1F1F7;",
    "Malta" : "&#x1F1F2;&#x1F1F9;",
    "Mauritius" : "&#x1F1F2;&#x1F1FA;",
    "Maldives" : "&#x1F1F2;&#x1F1FB;",
    "Malawi" : "&#x1F1F2;&#x1F1FC;",
    "Mexico" : "&#x1F1F2;&#x1F1FD;",
    "Malaysia" : "&#x1F1F2;&#x1F1FE;",
    "Mozambique" : "&#x1F1F2;&#x1F1FF;",
    "Namibia" : "&#x1F1F3;&#x1F1E6;",
    "Niger" : "&#x1F1F3;&#x1F1EA;",
    "Nigeria" : "&#x1F1F3;&#x1F1EC;",
    "Nicaragua" : "&#x1F1F3;&#x1F1EE;",
    "Netherlands" : "&#x1F1F3;&#x1F1F1;",
    "Norway" : "&#x1F1F3;&#x1F1F4;",
    "Nepal" : "&#x1F1F3;&#x1F1F5;",
    "Nauru" : "&#x1F1F3;&#x1F1F7;",
    "NewZealand" : "&#x1F1F3;&#x1F1FF;",
    "Oman" : "&#x1F1F4;&#x1F1F2;",
    "Panama" : "&#x1F1F5;&#x1F1E6;",
    "Peru" : "&#x1F1F5;&#x1F1EA;",
    "PapuaNewGuinea" : "&#x1F1F5;&#x1F1EC;",
    "Philippines" : "&#x1F1F5;&#x1F1ED;",
    "Pakistan" : "&#x1F1F5;&#x1F1F0;",
    "Poland" : "&#x1F1F5;&#x1F1F1;",
    "Palestine" : "&#x1F1F5;&#x1F1F8;",
    "Portugal" : "&#x1F1F5;&#x1F1F9;",
    "Palau" : "&#x1F1F5;&#x1F1FC;",
    "Paraguay" : "&#x1F1F5;&#x1F1FE;",
    "Qatar" : "&#x1F1F6;&#x1F1E6;",
    "Romania" : "&#x1F1F7;&#x1F1F4;",
    "Serbia" : "&#x1F1F7;&#x1F1F8;",
    "Russia" : "&#x1F1F7;&#x1F1FA;",
    "Rwanda" : "&#x1F1F7;&#x1F1FC;",
    "SaudiArabia" : "&#x1F1F8;&#x1F1E6;",
    "SolomonIslands" : "&#x1F1F8;&#x1F1E7;",
    "Seychelles" : "&#x1F1F8;&#x1F1E8;",
    "Sudan" : "&#x1F1F8;&#x1F1E9;",
    "Sweden" : "&#x1F1F8;&#x1F1EA;",
    "Singapore" : "&#x1F1F8;&#x1F1EC;",
    "Slovenia" : "&#x1F1F8;&#x1F1EE;",
    "Slovakia" : "&#x1F1F8;&#x1F1F0;",
    "SierraLeone" : "&#x1F1F8;&#x1F1F1;",
    "SanMarino" : "&#x1F1F8;&#x1F1F2;",
    "Senegal" : "&#x1F1F8;&#x1F1F3;",
    "Somalia" : "&#x1F1F8;&#x1F1F4;",
    "Suriname" : "&#x1F1F8;&#x1F1F7;",
    "SouthSudan" : "&#x1F1F8;&#x1F1F8;",
    "SaoTomeandPrincipe" : "&#x1F1F8;&#x1F1F9;",
    "ElSalvador" : "&#x1F1F8;&#x1F1FB;",
    "Syria" : "&#x1F1F8;&#x1F1FE;",
    "Eswatini" : "&#x1F1F8;&#x1F1FF;",
    "Chad" : "&#x1F1F9;&#x1F1E9;",
    "Togo" : "&#x1F1F9;&#x1F1EC;",
    "Thailand" : "&#x1F1F9;&#x1F1ED;",
    "Tajikistan" : "&#x1F1F9;&#x1F1EF;",
    "EastTimor" : "&#x1F1F9;&#x1F1F1;",
    "Turkmenistan" : "&#x1F1F9;&#x1F1F2;",
    "Tunisia" : "&#x1F1F9;&#x1F1F3;",
    "Tonga" : "&#x1F1F9;&#x1F1F4;",
    "Turkey" : "&#x1F1F9;&#x1F1F7;",
    "TrinidadandTobago" : "&#x1F1F9;&#x1F1F9;",
    "Tuvalu" : "&#x1F1F9;&#x1F1FB;",
    "Taiwan" : "&#x1F1F9;&#x1F1FC;",
    "Tanzania" : "&#x1F1F9;&#x1F1FF;",
    "Ukraine" : "&#x1F1FA;&#x1F1E6;",
    "Uganda" : "&#x1F1FA;&#x1F1EC;",
    "UnitedStates" : "&#x1F1FA;&#x1F1F8;",
    "Uruguay" : "&#x1F1FA;&#x1F1FE;",
    "Uzbekistan" : "&#x1F1FA;&#x1F1FF;",
    "VaticanCity" : "&#x1F1FB;&#x1F1E6;",
    "SaintVincentandTheGrenadines" : "&#x1F1FB;&#x1F1E8;",
    "Venezuela" : "&#x1F1FB;&#x1F1EA;",
    "Vietnam" : "&#x1F1FB;&#x1F1F3;",
    "Vanuatu" : "&#x1F1FB;&#x1F1FA;",
    "Samoa" : "&#x1F1FC;&#x1F1F8;",
    "Yemen" : "&#x1F1FE;&#x1F1EA;",
    "SouthAfrica" : "&#x1F1FF;&#x1F1E6;",
    "Zambia" : "&#x1F1FF;&#x1F1F2;",
    "Zimbabwe" : "&#x1F1FF;&#x1F1FC;"
};

/* used for testing
const answers = 
{
    "Albania" : "&#x1F1E6;&#x1F1F1;",
    "Armenia" : "&#x1F1E6;&#x1F1F2;",
    "Angola" : "&#x1F1E6;&#x1F1F4;",
    "Argentina" : "&#x1F1E6;&#x1F1F7;"
};*/

const flagEmoji = document.getElementById("flagemoji");
const userInput = document.getElementById("UserFlagInput");
const gameStatus = document.getElementById("progressLabel");
const progBar = document.getElementById("progressBar");

var completed = 0;
var flag;

function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function startGame() {
    //Do some setup-----
    userInput.value = "";
    userInput.focus();
    completed = 0;
    progBar.value = 0;
    gameStatus.innerText = "Countries: " + completed + "/196";
    //------------------
    getNextFlag();
}

function getNextFlag() {
    const num = getRandomInt(Object.keys(answers).length);
    var keys = Object.keys(answers);
    flag = keys[num];
    //need to check if there are still flags in the list, otherwise the player has won
    if(flag != undefined){
        flagEmoji.innerHTML = answers[flag];
    }
    else{
        console.log(flag);
        console.log(answers);
    }
    //console.log(flag);
}

function check(guess) {
    //format the guess and answer
    guess = guess.replaceAll(" ", "");//remove spaces
    guess = guess.toLowerCase();//ignore capitalization
    //guess = guess.replace("and","")//remove "and"
    //guess = guess.replace("of","")//remove "of"
    var temp = flag;
    temp = temp.replace(" ", "");//shouldn't be any space, just remove in case
    temp = temp.toLowerCase();
    //temp = temp.replace("and", "");//remove "and"
    //temp = temp.replace("of", "");//remove "of"
    if(guess == temp){
        userInput.value = "";//clear the text box
        delete answers[flag];//remove the flag from the pool
        completed++;
        getNextFlag();
    }
}

startGame();

userInput.addEventListener('input', function (event) {
    check(userInput.value);

    if(event.inputType == "deleteContentBackward"){
        userInput.value="";//fast delete
    }

    progBar.value = completed;
    gameStatus.innerText = "Countries: " + completed + "/196";
})

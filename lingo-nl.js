var words = [
	"APPEL",
	"ALDUS",
	"AFWAS",
	"AFTEL",
	"AARDE",
	"ARMEN",
	"ACTIE",
	"APART",
	"ADRES",
	"AVOND",
	"ADERS",
	"ALARM",
	"BOTEN",
	"BALEN",
	"BETER",
	"BOMEN",
	"BOREN",
	"BOVEN",
	"BOXEN",
	"BROOD",
	"BROEK",
	"BRAND",
	"BREED",
	"BENEN",
	"BEELD",
	"BRIEF",
	"BETEN",
	"BASIS",
	"BLAUW",
	"BEREN",
	"BUREN",
	"BANEN",
	"BLOED",
	"BROER",
	"BLOND",
	"BOTER",
	"BELEG",
	"BRENG",
	"BAKEN",
	"BEKER",
	"BLIND",
	"BEZIG",
	"BADEN",
	"BEDEL",
	"BAZEN",
	"BAZIN",
	"BAREN",
	"BEDEN",
	"BEKEN",
	"BEZEM",
	"BAARD",
	"BIDET",
	"BREUK",
	"CONUS",
	"CELLO",
	"CREME",
	"CLOUD",
	"CACAO",
	"CADET",
	"CAVIA",
	"CEDER",
	"COMBI",
	"CHINA",
	"CLOWN",
	"DRAAI",
	"DEDEN",
	"DALEN",
	"DERDE",
	"DELEN",
	"DWAAS",
	"DADEN",
	"DADER",
	"DAMES",
	"DINER",
	"DATUM",
	"DOZEN",
	"DREUN",
	"DUITS",
	"DAGEN",
	"DEREN",
	"DWERG",
	"DWAAL",
	"DWING",
	"DRUIL",
	"DROOG",
	"DRAAD",
	"DWEIL",
	"DRANK",
	"DUREN",
	"DWARS",
	"DRUGS",
	"DATEN",
	"DALER",
	"DOORN",
	"DISCO",
	"DEGEN",
	"DROOM",
	"DIENT",
	"DRONE",
	"DADEL",
	"DUWEN",
	"DRUIF",
	"DEKEN",
	"DELER",
	"ELVEN",
	"EIGEN",
	"ENGER",
	"ENGEL",
	"ELDER",
	"ENKEL",
	"EFFEN",
	"EMAIL",
	"EGAAL",
	"FIETS",
	"FRIET",
	"FILES",
	"FOREL",
	"FILMS",
	"FEEST",
	"FRUIT",
	"FALEN",
	"FLORA",
	"FAUNA",
	"FEEEN",
	"FREAK",
	"FORUM",
	"FUSIE",
	"GEVEN",
	"GAVEN",
	"GROEN",
	"GRAAI",
	"GETAL",
	"GRENS",
	"GROND",
	"GROEF",
	"GRAAL",
	"GEWEI",
	"GAMES",
	"GROTE",
	"GROET",
	"GAREN",
	"GEBAK",
	"GRAAG",
	"GENRE",
	"GLANS",
	"GELUK",
	"GEEUW",
	"HOREN",
	"HEREN",
	"HALEN",
	"HAGEL",
	"HAREN",
	"HELEN",
	"HARDE",
	"HEMEL",
	"HOOFD",
	"HUREN",
	"HAMER",
	"HAKEN",
	"HEDEN",
	"HOTEL",
	"HOBBY",
	"HELER",
	"HOGER",
	"IEDER",
	"INDEX",
	"IMMER",
	"ICOON",
	"INLOG",
	"INZET",
	"INNIG",
	"JOVEL",
	"JAREN",
	"JICHT",
	"JABOT",
	"JACHT",
	"JADEN",
	"JAGEN",
	"JAGER",
	"JAPON",
	"JARIG",
	"JAWEL",
	"JEANS",
	"JEMIG",
	"JEUGD",
	"JOINT",
	"JONAS",
	"JOULE",
	"KOKEN",
	"KREET",
	"KOKER",
	"KERST",
	"KEGEL",
	"KOUDE",
	"KADER",
	"KRENT",
	"KAMER",
	"KAARS",
	"KAART",
	"KRAAN",
	"KRANT",
	"KEREN",
	"KRUID",
	"KEREL",
	"KUBUS",
	"KRAAL",
	"KLEUR",
	"KROON",
	"KLEIN",
	"KORST",
	"KLOPT",
	"KABEL",
	"KUNST",
	"KOPJE",
	"KRANS",
	"KLIMT",
	"KATER",
	"KLINK",
	"KUDDE",
	"KRUIS",
	"LOPEN",
	"LATEN",
	"LEPEL",
	"LINKS",
	"LADEN",
	"LEVEN",
	"LEZEN",
	"LUCHT",
	"LENEN",
	"LASER",
	"LENTE",
	"LICHT",
	"LADER",
	"LEDER",
	"LUNCH",
	"LIJST",
	"LEGER",
	"LEDEN",
	"LEGEN",
	"LAGEN",
	"LEZER",
	"LEVER",
	"LINGO",
	"LOPER",
	"LUIER",
	"LAGER",
	"LEEUW",
	"MAAND",
	"MALEN",
	"MAKEN",
	"MEDIA",
	"METER",
	"MOTOR",
	"MATEN",
	"MARKT",
	"MAZEN",
	"MOLEN",
	"MEEST",
	"MEREN",
	"MODEL",
	"MEDEN",
	"MADEN",
	"MACHT",
	"MEEUW",
	"MAGER",
	"MAGEN",
	"MAREN",
	"MANEN",
	"NOORD",
	"NIEUW",
	"NEGEN",
	"NAMEN",
	"NEVEN",
	"NODIG",
	"NADEN",
	"NEDER",
	"NEMEN",
	"ONDER",
	"OPTEL",
	"OVAAL",
	"OVALE",
	"ONWEL",
	"OPTIE",
	"ORDEN",
	"OPPAS",
	"OUDER",
	"OPHEF",
	"OASES",
	"PALEN",
	"PLEIN",
	"PEGEL",
	"PAARS",
	"PRIJS",
	"PIANO",
	"PIXEL",
	"PADEN",
	"PASTA",
	"PIZZA",
	"POTEN",
	"PAARD",
	"PUBER",
	"PAUZE",
	"PREEK",
	"POLIS",
	"PATER",
	"PROEF",
	"PANDA",
	"PENIS",
	"PRINS",
	"PLUTO",
	"POLEN",
	"PLINT",
	"QUOTA",
	"QUANT",
	"QUARK",
	"QUEUE",
	"QUILT",
	"QUOTE",
	"ROBOT",
	"REKEN",
	"RADEN",
	"REGEN",
	"RADIO",
	"RENTE",
	"REGIO",
	"RUGBY",
	"REDEN",
	"ROKEN",
	"RUZIE",
	"RUIST",
	"REGEL",
	"RACEN",
	"RACES",
	"RIOOL",
	"RAMEN",
	"RADAR",
	"ROMAN",
	"ROKJE",
	"RAZEN",
	"ROEDE",
	"STAAN",
	"STAAL",
	"SPEEL",
	"STEEG",
	"STOEL",
	"STOOK",
	"STEEK",
	"SCHEP",
	"SPIJS",
	"STOEP",
	"SHIRT",
	"SAMEN",
	"SITES",
	"SPORT",
	"SPALK",
	"SJAAL",
	"STORM",
	"STAAT",
	"STEUN",
	"STRAK",
	"SERIE",
	"SHOWS",
	"SCHAT",
	"SNOEP",
	"SFEER",
	"SMEER",
	"SPEER",
	"SCENE",
	"SPELD",
	"SMEED",
	"SMAAK",
	"SUPER",
	"STAND",
	"STEER",
	"SMELT",
	"SEDAN",
	"SKIER",
	"SLUIS",
	"SNEER",
	"STEEL",
	"TRUCK",
	"TERUG",
	"TYPEN",
	"TALEN",
	"TABOE",
	"TEGEL",
	"TAART",
	"TAFEL",
	"TROUW",
	"TEKEN",
	"TEREN",
	"TAKEN",
	"TREUR",
	"TENEN",
	"TITEL",
	"THUIS",
	"TIARA",
	"TEDER",
	"TOETS",
	"TABAK",
	"TREIN",
	"TARWE",
	"TELEN",
	"TELER",
	"UITEN",
	"UILIG",
	"UITJE",
	"UIVER",
	"ULTRA",
	"UNIEK",
	"UPPIE",
	"URAAN",
	"UIERS",
	"VELEN",
	"VLOER",
	"VIDEO",
	"VAREN",
	"VEGEN",
	"VEREN",
	"VADER",
	"VATEN",
	"VUREN",
	"VROUW",
	"VLEES",
	"VOGEL",
	"VROEG",
	"VEZEL",
	"VEINS",
	"VORST",
	"VEDER",
	"VANAF",
	"VIEZE",
	"VEGER",
	"VILLA",
	"VELER",
	"VREDE",
	"VRIES",
	"WOORD",
	"WAGEN",
	"WONEN",
	"WAREN",
	"WARME",
	"WETEN",
	"WATER",
	"WEREN",
	"WAZIG",
	"WEGEN",
	"WEVEN",
	"WEZEN",
	"WEKEN",
	"WRAAK",
	"WILDE",
	"WREED",
	"WREDE",
	"WENST",
	"WOEST",
	"XENON",
	"YACHT",
	"YUCCA",
	"ZWAAR",
	"ZWARE",
	"ZESDE",
	"ZAGEN",
	"ZALIG",
	"ZOMER",
	"ZEDEN",
	"ZWART",
	"ZEVEN",
	"ZICHT",
	"ZADEL",
	"ZWEET",
	"ZENUW",
	"ZWEER",
	"ZWEEF",
	"ZADEN",
	"ZAKEN",
	"ZEKER",
	"ZEVER",
	"ZEEEN"
]; // word list
var input = document.getElementById('guess'); // the input box
var button = document.getElementById('button'); // the button
var guess;

// change css class
var changeClass = function(cng, old, newClass){
  cng.className = cng.className.replace(old, newClass);
}

// game loop
var gameloop = function(){
  // pick a random word
  var rand = words[Math.floor(Math.random() * words.length)];
  var hasDuplicates = (/([a-zA-Z]).*?\1/).test(rand); // if multiple insances of a letter in the word
  
  var pressn = 1; // turn number
  
  // get all indexes of a given value in an array
  var getAllIndexes = function(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
  }
  
  // give first letter
  document.getElementById("row1").firstElementChild.innerHTML=rand[0];
  
  // guess event
  input.onkeypress = function(event) {
    if (event.key == "Enter" || event.keyCode == 13) {
      document.getElementById('smallMsg').innerHTML = "Green = correct letter, Yellow = wrong place"; // reset message
      guess = input.value.toUpperCase();
      
      var current = "row" + pressn;
      // current row
      var childDivs = document.getElementById(current).getElementsByTagName('div');
      var c = 0; // correct count
      
      // If not right number of letters
      if(guess.length !== 5){
        document.getElementById('smallMsg').innerHTML = "Guesses must be 5 letters!";
        if(pressn===5){
          end("Sorry, you lost.", "Correct word: " + rand);
        }
        pressn++;
        document.getElementById(current).firstElementChild.innerHTML=rand[0];
        return; // move down
      }

      // check for correctness
      for(var i=0; i<childDivs.length; i++) {
        childDivs[i].innerHTML = guess[i];
        
        // if letter match in right place
        if(guess[i] == rand[i]){
          changeClass(childDivs[i], 'default', 'correct');
          c++;
        } 
        // if exists but is in the wrong place
        else if(rand.indexOf(guess[i])!=-1){
          if(hasDuplicates === false && childDivs[rand.indexOf(guess[i])].className != "square correct"){
            changeClass(childDivs[i], 'default', 'wrongplace');
          } //if
          // if there are duplicate letters
          else if(hasDuplicates === true){
            var ind = getAllIndexes(rand, guess[i]);
            if (ind.length > 1){
              for (var j=0; j<ind.length;j++){
                if(childDivs[ind[j]].className != "square correct" && childDivs[i].className != "square wrongplace"){
                  changeClass(childDivs[i], 'default', 'wrongplace');
                } //if
              } //for
            } //if
            else if (childDivs[rand.indexOf(guess[i])].className != "square correct"){
              changeClass(childDivs[i], 'default', 'wrongplace');
            } //else if
          } //else if(hasDuplicates === true)
        } //else if
        
        input.value = ""; // clear input box
        
        if(c===5) { // if they have all the correct letters
          end("Congrats, you won!", "Play Again?");
        } //if
        else if (pressn === 5){ // if they're out of tries
          end("Sorry, you lost.", "Correct word: " + rand);
        } //else if
      } //for (check for correctness loop)
      pressn++; // inc number of guesses
    } //if (key = 'enter')
  } //input 
} //gameloop

// endgame
var end = function(msg, smallmsg){
  document.getElementById('msgBox').innerHTML = msg;
  document.getElementById('smallMsg').innerHTML = smallmsg;
  changeClass(button, "invisible", "visible");
  document.getElementById('guess').readOnly = true;
}

// reset
var playagain = function(){
  document.getElementById('msgBox').innerHTML="Guess the Word!"; // main message
  document.getElementById('smallMsg').innerHTML = "Green = correct letter, Yellow = wrong place"; // small message
  document.getElementById('guess').readOnly = false;
  changeClass(button, "visible", "invisible");
  
  // clean boxes
  for(var i=1;i<6;i++){
    var resets = document.getElementById('row'+i).getElementsByTagName('div');
    for(var j=0;j<5;j++){
      resets[j].innerHTML="";
      if(resets[j].className == "square correct" || resets[j].className == "square wrongplace"){
        changeClass(resets[j], "correct", "default");
        changeClass(resets[j], "wrongplace", "default");
      } //if
    } //for
  } //for
  // restart the loop
  gameloop();
};

// start loop
gameloop();

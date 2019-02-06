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
	"ZEVER",
	"ZICHT",
	"ZADEL",
	"ZWEET",
	"ZENUW",
	"ZWEER",
	"ZWEEF",
	"ZADEN",
	"ZAKEN",
	"ZEKER",
	"ZEVEN",
	"ZEEEN"
];
<<<<<<< HEAD

var activeRow = 1;

var word = words[Math.floor(Math.random() * words.length)];
var chars = word.split("");
var hasDuplicates = (/([a-zA-Z]).*?\1/).test(word);

/*console.log(chars);*/
=======

var word = words[Math.floor(Math.random() * words.length)];
var hasDuplicates = (/([a-zA-Z]).*?\1/).test(word);

for (var i = 0; i < word.length; i++) {
    console.log(word.charAt(i));				//splits the word in seperate characters
}
>>>>>>> master

var h1 = document.createElement('h1');
h1.innerHTML = "LINGO";
h1.className = "titel";
var h3 = document.createElement('h3');
h3.innerHTML = "GREEN = CORRECT || YELLOW = WRONG PLACE";
h3.className = "msg";
document.body.appendChild(h1);
document.body.appendChild(h3);

<<<<<<< HEAD
=======


>>>>>>> master
var body = document.getElementsByTagName("body")[0];
body.className = "container";

  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
  tblBody.className = "tblBody";

  for (var i = 1; i < 6; i++) {
    var row = document.createElement("tr");
    row.id = "row" + i;


    for (var j = 0; j < 5; j++) {
      var cell = document.createElement("td");
      cell.id = row.id + "c" + j;
      row.appendChild(cell);
      cell.style.padding = "40px";
    }
    tblBody.appendChild(row);
  }

  tbl.appendChild(tblBody);
  body.appendChild(tbl);
  tbl.setAttribute("border", "1");

<<<<<<< HEAD
document.getElementById("row1c0").innerHTML=chars[0];
=======
>>>>>>> master

var input = document.createElement("input");
input.type = "text";
input.className = "guess";
input.setAttribute('placeholder', 'voer je antwoord in');
body.appendChild(input); 

<<<<<<< HEAD
 input.onkeypress = function(event) {			//guess event
    if (event.key == "Enter" || event.keyCode == 13) {
    	var guess = input.value.toLowerCase();
    	var guessArr = guess.split("");
    	var guessArrCopy = guess.split("");
    	var charsCopy = chars;
    	console.log(guessArrCopy + " copy");
    	console.log(charsCopy + " copy");
    }
    for (var k = 0; k < guessArrCopy.length; k++) {
    	    document.getElementById("row" + activeRow + "c" + k).innerHTML = guessArrCopy[k];
    }
    activeRow++;
}

for (var i = 0; i < 5; i++) {
	document.getElementById("row" + activeRow + "c" + i).style.backgroundcolor = "red";

	if (word == input) {
           alert("you won");
           location.reload();
       }

      else  if (activeRow > 5) {
        alert("Sorry, you lost." + "Correct word: " + word);
          location.reload();
        }


									// ------  check for colors and correct letters  ------ \\


          for (var i = 0; i < 5; i++) {
          document.getElementById("row"+(activeRow-1)+"c" + i).classList.add("red");

          if (charsCopy[i] == guessArrCopy[i]) {
          document.getElementById("row"+(activeRow-1)+"c" + i).style.backgroundColor = "green";
            charsCopy[i]= null;
            guessArrCopy[i] = null;
          }
          }
          for (var i = 0; i < 5; i++) {
            if ( guessArrCopy[i] != null) {
              if (charsCopy.indexOf(guessArrCopy[i]) > -1) {
                document.getElementById("row"+(activeRow-1)+"c" + i).classList.add("yellow");
                charsCopy[charsCopy.indexOf(guessArrCopy[i])]= null;
                guessArrCopy[i] = null;
              }
            }
          }
       }
=======
var sub = document.createElement("input");
sub.setAttribute("type", "submit");
sub.className = "submit";
body.appendChild(sub);
>>>>>>> master

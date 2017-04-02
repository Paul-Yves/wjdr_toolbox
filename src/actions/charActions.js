import familyNames from "../data/familyNames";
const nameDict = {
  "Humain":{
    "male":["Adelbert", "Albrecht", "Berthold", "Dieter",
      "Eckhardt", "Felix", "Gottfried", "Gustav", "Heinz",
      "Johann","Konrad", "Leopold", "Magnus", "Otto", "Pieter",
      "Rudiger", "Siegfried", "Ulrich", "Waldemar", "Wolfgang"],
    "female":["Alexa", "Alfrida", "Beatrix", "Bianka", "Carlott",
      "Elfrida", "Elise", "Gabrielle","Gretchen","Hanna","Ilsa",
      "Klara","Jarla","Ludmilla","Limstella","Mathilde",
      "Regina","Solveig","Theodora","Ulrike","Wertha"]
  },
  "Nain":{
    "male":["Bardin", "Brokk", "Dimzad", "Durak","Garil","Gottri",
      "Guttri", "Grundi","Hargin","Imrak","Kargun","Jotunn","Magnar",
      "Mordrin","Nargond","Orzad","Ragnar","Snorri","Storri",
      "Thingrim","Urgrim"],
    "female":["Anika","Asta","Astrid","Berta","Brigid","Dagmar","Elsa",
      "Erika","Franziska","Greta","Hunni","Ingrid","Janna",
      "Karin","Petra","Sigrid","Sigrun","Silma","Thylda","Ulla"]
  },
  "Halfling":{
    "male":["Adam","Albert","Alfred","Axel","Carl","Edgar",
      "Hugo","Jakob","Ludo","Max","Niklaus","Oskar","Paul",
      "Ralf","Rudi","Theo","Thomas","Udo","Viktor","Walter"],
    "female":["Agnes","Alice","Elena","Eva","Frida","Greta",
      "Hanna","Heidi","Hilda","Janna","Karin","Leni","Marie",
      "Petra", "Silma","Sophia","Susi","Theda","Ulla","Wanda"],
  },
  "Elfe":{
    "male":["Aluthol","Amendil","Angran","Cavindel","Dolwen","Eldillor",
      "Falandar","Farnoth","Gildiril","Harrond","Imhol","Imrik","Larandar","Laurenor",
      "Mellion","Mormacar","Ravandil","Teclis","Torendil","Tyrion","Urdithane","Valahuir","Yavandir"],
    "female":["Alane","Ariel","Alariel","Altronia","Davndrel","Eldril",
      "Eponia","Fanriel","Filamir","Gallina","Halion","Iludil","Ionor",
      "Lindara","Lorandara","Maruviel","Pelgrana","Siluvaine","Tallana",
      "Ulliana","Vivandrel","Yuviel"]
  },
}

function randFromList(list){
  let rndIdx = Math.floor(Math.random()*list.length);
  return list[rndIdx];
}

export const addCharacter = (charInfo) => {
  const sexe = charInfo.isFemale ? "female" : "male";
  const name = randFromList(nameDict[charInfo.selectedRace][sexe]);
  let lastName = "";
  if(charInfo.selectedRace==="Nain"){
    const parentSex = Math.random()>0.5? "female" : "male";
    const suffix = charInfo.isFemale ? "sdotr":"son";
    lastName = randFromList(nameDict[charInfo.selectedRace][parentSex])+suffix;
  }else{
    lastName = randFromList(familyNames[charInfo.selectedRace]);
  }
  return {
      type: "addCharacter",
      item: {isFemale: charInfo.isFemale, name, lastName}
  };
}

export const delCharacter = (charId) =>{
  return {
      type: "delCharacter",
      id: charId
  };
}
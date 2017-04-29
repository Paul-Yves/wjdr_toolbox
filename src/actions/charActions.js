import familyNames from "../data/familyNames";
import {
  humanNames, dwarfMain, dwarfPrefix, elfPrefix,
  elfConnector, elfMain, halflingPrefix, halflingMain
} from "../data/advancedNames";
import { randFromList } from '../data/diceBag';

const nameDict = {
  "Humain": {
    "male": ["Adelbert", "Albrecht", "Berthold", "Dieter",
      "Eckhardt", "Felix", "Gottfried", "Gustav", "Heinz",
      "Johann", "Konrad", "Leopold", "Magnus", "Otto", "Pieter",
      "Rudiger", "Siegfried", "Ulrich", "Waldemar", "Wolfgang"],
    "female": ["Alexa", "Alfrida", "Beatrix", "Bianka", "Carlott",
      "Elfrida", "Elise", "Gabrielle", "Gretchen", "Hanna", "Ilsa",
      "Klara", "Jarla", "Ludmilla", "Limstella", "Mathilde",
      "Regina", "Solveig", "Theodora", "Ulrike", "Wertha"]
  },
  "Nain": {
    "male": ["Bardin", "Brokk", "Dimzad", "Durak", "Garil", "Gottri",
      "Guttri", "Grundi", "Hargin", "Imrak", "Kargun", "Jotunn", "Magnar",
      "Mordrin", "Nargond", "Orzad", "Ragnar", "Snorri", "Storri",
      "Thingrim", "Urgrim"],
    "female": ["Anika", "Asta", "Astrid", "Berta", "Brigid", "Dagmar", "Elsa",
      "Erika", "Franziska", "Greta", "Hunni", "Ingrid", "Janna",
      "Karin", "Petra", "Sigrid", "Sigrun", "Silma", "Thylda", "Ulla"]
  },
  "Halfling": {
    "male": ["Adam", "Albert", "Alfred", "Axel", "Carl", "Edgar",
      "Hugo", "Jakob", "Ludo", "Max", "Niklaus", "Oskar", "Paul",
      "Ralf", "Rudi", "Theo", "Thomas", "Udo", "Viktor", "Walter"],
    "female": ["Agnes", "Alice", "Elena", "Eva", "Frida", "Greta",
      "Hanna", "Heidi", "Hilda", "Janna", "Karin", "Leni", "Marie",
      "Petra", "Silma", "Sophia", "Susi", "Theda", "Ulla", "Wanda"],
  },
  "Elfe": {
    "male": ["Aluthol", "Amendil", "Angran", "Cavindel", "Dolwen", "Eldillor",
      "Falandar", "Farnoth", "Gildiril", "Harrond", "Imhol", "Imrik", "Larandar", "Laurenor",
      "Mellion", "Mormacar", "Ravandil", "Teclis", "Torendil", "Tyrion", "Urdithane", "Valahuir", "Yavandir"],
    "female": ["Alane", "Ariel", "Alariel", "Altronia", "Davndrel", "Eldril",
      "Eponia", "Fanriel", "Filamir", "Gallina", "Halion", "Iludil", "Ionor",
      "Lindara", "Lorandara", "Maruviel", "Pelgrana", "Siluvaine", "Tallana",
      "Ulliana", "Vivandrel", "Yuviel"]
  },
}

const advancedName = function (charInfo, sexe) {
  if (charInfo.selectedRace === "Humain") {
    return randFromList(humanNames[sexe]);
  } else if (charInfo.selectedRace === "Nain") {
    return randFromList(dwarfPrefix) + randFromList(dwarfMain[sexe]);
  } else if (charInfo.selectedRace === "Elfe") {
    return randFromList(elfPrefix) + randFromList(elfConnector) + randFromList(elfMain[sexe]);
  }
  return randFromList(halflingPrefix) + randFromList(halflingMain[sexe]);
}

export const addCharacter = (charInfo) => {
  const sexe = charInfo.isFemale ? "female" : "male";
  let name = randFromList(nameDict[charInfo.selectedRace][sexe]);
  if (charInfo.advanced) {
    name = advancedName(charInfo, sexe);
  }
  let lastName = "";
  if (charInfo.selectedRace === "Nain") {
    const parentSex = Math.random() > 0.5 ? "female" : "male";
    const parentAdvanced = Math.random() > 0.5;
    const suffix = charInfo.isFemale ? "sdotr" : "son";
    lastName = randFromList(nameDict[charInfo.selectedRace][parentSex]) + suffix;
    if (parentAdvanced) {
      lastName = advancedName(charInfo, parentSex) + suffix;
    }
  } else {
    lastName = randFromList(familyNames[charInfo.selectedRace]);
  }
  return {
    type: "addCharacter",
    item: { isFemale: charInfo.isFemale, name, lastName }
  };
}

export const delCharacter = (charId) => {
  return {
    type: "delCharacter",
    id: charId
  };
}
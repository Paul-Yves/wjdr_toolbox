const randFromList = function(list){
  let rndIdx = Math.floor(Math.random()*list.length);
  return list[rndIdx];
};

const d10 = function(number){
    if(!number){
        number = 1;
    }
    let result = 0;
    for(let i = 0; i < number; i++){
        result += Math.floor(10*Math.random()+1);
    }
    return result;
}
const d6 = function(number){
    if(!number){
        number = 1;
    }
    let result = 0;
    for(let i = 0; i < number; i++){
        result += Math.floor(6*Math.random()+1);
    }
    return result;
}

const intervalRand = function(interval){
    return Math.floor((interval[1]-interval[0])*Math.random()+interval[0]);
}

export {randFromList, d10, d6, intervalRand}
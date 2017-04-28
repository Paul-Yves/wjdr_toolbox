import {resources, priceMods, volumeToDemand} from '../data/tradeTables';
import {randFromList, d10, d6} from '../data/diceBag';

export const selectSeason = (season)=>{
    return {
        type:"selectSeason",
        season: season
    }
}

export const generateTradeTown = (townInfo) => {
    const resList = resources.map((res)=>{
        let basePrice = res.price.length ? res.price[townInfo.season] : res.price;
        const price = Math.round(10*randFromList(priceMods) * basePrice)/10;
        let volume = res.volume.length ? res.volume[townInfo.season] : res.volume;
        const availability = townInfo.cv * 5 * d10() * volume;
        let demand = townInfo.ca *3 * d6();
        if(townInfo.isTrader){
            demand += 30;
        }
        if(volumeToDemand[""+volume]){
            demand += volumeToDemand[""+volume];
        }
        return {name: res.name, price, availability, demand};
    })
    return {
        type:"generateTrade",
        resources: resList
    }
}
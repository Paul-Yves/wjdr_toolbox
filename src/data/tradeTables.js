export const communities = [
    {size: "<100", label: "Village", percent: 35},
    {size: "<1000", label: "Petite ville", percent: 60},
    {size: "<10000", label: "Ville", percent: 70},
    {size: ">10000", label: "Cité", percent: 100},
];
export const wealthMod = [-30, -15, 0, 10, 20];

export const priceMods = [-10,-5,0,5,10,15].map(mod=>(100+mod)/100); //percentage to apply to the price
export const resources =[
    {
        name:"grain", volume:[0.5,1,2,0.5],
        price:[2,2,1,1.5]
    },
    { name:"fer", volume:1, price:15 },
    { name:"fer raffiné", volume:1, price:65 },
    { name:"plomb", volume:0.5, price:25 },
    { name:"plomb raffiné", volume:0.5, price:80 },
    { name:"etain", volume:0.25, price:30 },
    { name:"etain raffiné", volume:0.25, price:130 },
    { name:"cuivre", volume:0.25, price:50 },
    { name:"cuivre raffiné", volume:0.25, price:160 },
    { name:"argent", volume:0.1, price:10 },
    { name:"argent raffiné", volume:0.1, price:400 },
    { name:"produits de luxe", volume:0.5, price:50 },
    { 
        name:"bois", volume:[1,1.5,2,0.5], 
        price:[15,10,10,17] 
    },
    { 
        name:"laine", volume:[2,0.5,0.5,0.25], 
        price:[4,5,7,8] 
    },
]
export const volumeToDemand = {"2":-10,"1.5":-5,"1":0,"0.5":10,"0.25":20,"0.1":28}
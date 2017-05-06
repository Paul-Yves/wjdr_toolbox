export const defaultCrit = {
    "arm": [
        "Le personnage perd ce qu'il tient en main. les boucliers, maintenus par une lanière, ne sont pas affectés.",
        "Le bras est engourdi et inutilisable pendant 1 round." +
        "La main est hors d'usage jusqu'à ce que des soins médicaux soient prodigués. Tout ce que le personnage" +
        "tenait dans cette main est laché (comme plus haut, a l'exception du bouclier).",
        "Armure endommagée. Le nombre de poins d’Armm-e" +
        "affectés a cette zone est réduit de 1 fusqu’à ce que" +
        "l’armure soit réparée a l’aide d’un test de Métier" +
        "(fabricant d’armures) réussi. si le personnage n’a aucune" +
        "armure, ou si le système de base des armures est employé," +
        "utilisez le méme résulnt que si vous aviez obtenu 2.",
        "Le bras est hors (fluage jusqu'à ce que des soins" +
        "médicaux soient prodigués. 1but ce que le personnage" +
        "tenait dans cette main est laché (bouclier excepté).",

        "Le bras est littéralement détruit parle choc." +
        "le personnage lâche tout ce qu’il tenait en main" +
        " (bouclier excepté). L'hémorragie est telle que le" +
        "personnage a 20% de risques de mourir a chaque" +
        "round jusqu’à ce que des soins lui soient prodigués." +
        "Faites un test au début du tour de la victime a chaque" +
        "round.Utilisez le systeme de Mort subite pour tout" +
        "autre coup critique inﬂigé au personnage.",

        "La main est réduite a un amas de chair sanguinolent." +
        "Tout ce que le personnage tenait dans cette main est" +
        "laché (bouclier excepté).L'hémorragie est telle que" +
        "le personnage a 20% de risques de mourir a chaque" +
        "round jusqu'à ce que des soins lui soient prodigués." +
        "Elïectuez un test au début de chaque tour de jeu de" +
        "la victime.Utilisez le systeme de Mort subite pour" +
        "tout autre coup critique inﬂigé au personnage." +
        "S'il survit au combat, le personnage doit réussir un" +
        "test d'Endurance pour éviter de perdre a jamais l'usage de sa main.",

    ],
    "leg": [

    ],
    "body": [

    ],
    "head": [

    ]
}
export const firearm = {
    "arm": [

    ],
    "leg": [

    ],
    "body": [

    ],
    "head": [

    ]
}
export const critSources = [
    {source: "default",label: "Classique"}, {source: "firearm", label: "Armes à feu"},
];
export const critTable = {
    "default": defaultCrit, firearm,
}
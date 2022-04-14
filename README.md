### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

###

Groupe 10 - PANGANIBAN François

Le projet est une todo list avec la possiblité d'ajouter une tâche, de lister les tâches et de les supprimer.

### Ajouter une tâche

L'utilisateur appuie sur le bouton "Ajouter" pour ajotuer une tâche à la liste. Le bouton change alors de taille et de couleur.

On utilise une intégration des animations CSS avec des classes.

Les deux classes sont ".form-button" et ".form-button-blue" dans une balise <button>.
La fonction userRef() permet de manipuler le bouton activé et ainsi de changer le nom de la classe à partir d'une fonction ternaire.

### Affichage d'une tâche

A chaque première apparition de la tache, ellse fera une translation vers la gauche.

On utilise une intégration des animationspure CSS avec la balise style.

La balise <li> contient un attribut style avec une fonction ternaire transition qui indique s'il ya trnasition ou non grace à la varible "shouldTranslate"

La variable "translate" représente le nombre de pixel horizontal de la translation. Elle est initialisé à 100 avec useState() pour qu'elle apparaisse 100px à droite du point original.
La variable "shouldTransition" détermine si l'animation doit avoir lieu ou non. Elle est initialisé à true avec useState() pour qu'elle puisse s'activer directement.


La fonction useEffect() met "translate" à 0 avec setTranslate(0) et "shouldTranslaation" à false avec setShouldTranslate(false) si "translate" vaut 100.

### Accordeon

Appuyer sur "Ajouter une tache" permet d'ouvrir/fermer l'accordeon.

On utilise l'integration d'un framework (Material UI)

Balises utiliser: <Accordion>, <AccordionSummary>, <AccordionDetails>

La variable "expanded" indique si l'accordeon est deplier ou non (initialiser à false avec UseState()).
La fonction handleChange(panel) permet d'inverser la variable "expanded.

### Bouton "Ma to do list'

Le bouton "Ma to do list" s'affiche en faisant des rotations sur lui-même.

On utilise l'animation CSS avec une librairie React (framer-motion)

La balise concerné <motion.div>

On utilise l'attribut animate et les propriétés voualnt etre animer.
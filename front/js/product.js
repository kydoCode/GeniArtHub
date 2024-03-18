function init(){
    buildEndpoint()
    retrieveIdFromQuery()
}
/*
ALGO

- on passe l'id
- l'id sert à afficher les valeurs dans la data (écrire et controler au console.log)
- réécrire le tabeau pour les combinaisons ?
- name / taille (clé, identifiant) = prix
- géré quantité et localstorage


*/



// Ici pour les product
let getData = []
let urlToParse = ""
// Fonction asynchrone pour récupérer les données à partir de l'URL spécifiée
async function fetchData(dataSet) {
    try {
        const response = await fetch(dataSet)
        // Vérifier si la réponse est valide
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        // Convertir la réponse en JSON et stocker les données
        allData = await response.json()
        // Appeler la fonction pour traiter les données
        processData()
    } catch (error) {
        console.error('Error fetching data', error)
        throw error
    }
}

// Fonction pour construire l'URL d'un produit à partir de son ID
function buildEndpoint(id) {
    let pathBase = "product.html?id=" + id
    console.log("pathBase est:", pathBase)
    return pathBase
}

// Fonction pour extraire l'ID à partir de l'URL de la requête
function retrieveIdFromQuery(url) {
    idFromQuery = url.get("id")
    return idFromQuery
} 

// Fonction pour afficher les détails d'un produit spécifique
function displayRow(rowUrl) {
    let inARow = retrieveIdFromQuery(rowUrl)
    // Construire le HTML pour afficher les détails du produit
    const rowDisplay = `<figure>
                            <img src="${inARow.image}" alt="${inARow.titre}">
                        </figure>
                        <div>
                            <h1>${inARow.titre}</h1>
                            <p>${inARow.description}</p>
                        </div>`
    // Insérer le HTML généré dans le DOM
    document.querySelector(".detailoeuvre").insertAdjacentHTML("beforeend", rowDisplay)

    // Générer le HTML pour la description de l'oeuvre
    const descSub = `<aside>
                        <h2>Description de l’oeuvre : ${inARow.titre}</h2>
                    </aside>`
    // Insérer le HTML généré dans le DOM
    document.querySelector("h2").insertAdjacentHTML("beforeend", descSub)
}

// Appeler la fonction pour afficher les détails du produit spécifié dans l'URL
displayRow(url)
console.log(displayRow)

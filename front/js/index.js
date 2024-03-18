// Déclaration d'une variable pour stocker les données récupérées
let allData = []
// URL à partir de laquelle récupérer les produits
let urlToParse = "http://localhost:3000/api/products/"

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

// Appeler la fonction pour récupérer les données
fetchData(urlToParse)

// Afficher les données récupérées (attention : les données peuvent ne pas être disponibles immédiatement)
console.log(allData)

// Fonction pour traiter les données récupérées et les afficher dans le DOM
async function processData() {
    for (const item of allData) {
        try {
            // Générer le HTML pour chaque produit
            const article = `<article>
                                <img src="${item.image}" alt="${item.titre}">
                                <a href="product.html?id=${item._id}">Buy ${item.shorttitle}</a>
                            </article>`
            /*for(const element of allData[declinaisons]){

                element.taille element.prix

            }*/
            // Insérer le HTML généré dans le DOM
            document.querySelector(".products").insertAdjacentHTML("beforeend", article)
        } catch (error) {
            console.log("Error processing data:", error)
        }
    }
}


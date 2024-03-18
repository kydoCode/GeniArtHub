    // Retrieve all products
    let allData = []
    let urlToParse = "http://localhost:3000/api/products/"

    // Faire une func init pour les appels

   /* function init() {
        // On fait les appels ici
        allData = await response.json()
        processData()
        fetchData(urlToParse)
    }*/

    async function fetchData(dataSet) {
        try {
            const response = await fetch(dataSet)
            if(!response.ok){
                throw new Error('Network response was not ok')
            }
            allData = await response.json()
            processData()
            //allData.append(data)
            // console.log(allData)
        } catch (error) {
            console.error('Error fetching data', error)
            throw error
        }
    }

    fetchData(urlToParse)
    console.log(allData)
    /* data = fetchData(urlToParse)
    console.log(data) */

    // getMalerei(data)
    // getMalerei

    /*
    _id
        shorttitle
        titre
        description
        image
        declinaisons
    */

    /*
    _id: string
    shorttitle: string // titre court
    titre: string // titre
    description: string // texte
    image: string
    declinaisons: [objets{taille: string, prix: float/double}]
    */


    function buildEndpoint(id) {
        let pathBase = "product.html?id="+id // ?get sur le front, pas vers le serveur // "http://localhost:3000/api/products/"+id
        console.log("pathBase est:", pathBase)
        return pathBase    
    }

    // Retrieve 
    async function processData() {
        for(const item of allData){
            try {
                const article = `<article>
                                    <img src="${item.image}" alt="${item.titre}">
                                    <a href="product.html?id=${item._id}">Buy ${item.shorttitle}</a>
                                </article>`
                document.querySelector(".products").insertAdjacentHTML("beforeend", article)            
                /* let retrievePic = document.querySelector("#product-image")
                let retrieveButton = document.querySelector("#product-button")
                
                console.log(retrievePic, retrieveButton)
                retrievePic.src = item.image
                console.log(item.image)
                retrieveButton.innerHTML = buildEndpoint(item._id)
                console.log(item._id) */
                // bouton avec func
            } catch (error) {
                console.log("Error processing data:", error)
            }
        }      
    }


    // Retrieve ID from URL
    
    let url = new URL(urlString)
    let idFromQuery;

    function retrieveIdFromQuery(url) {
        idFromQuery = url.searchParams.get("id")
        return idFromQuery
    } 

   for(const declinaison in allData.declinaisons)  {
    
   }
  // sd


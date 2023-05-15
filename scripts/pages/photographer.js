//Mettre le code JavaScript lié à la page photographer.html*

// création lien entre l'ID des photographes et l'URL
const getParam = () => {
    let search = window.location.search
    console.log(search)
    let result = new URLSearchParams(search).get('id')

    console.log(result)

    if (result != null) {
        // console.log(result)
        return result
    }

    return false
}

getParam();



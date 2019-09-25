var product = {};

function showImagesGallery(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("categoryName");
            let productDescriptionHTML = document.getElementById("categoryDescription");
            let productsoldCountHTML = document.getElementById("productsoldCount");
            let productCostHTML = document.getElementById("productcost");
            let productCategoryHTML = document.getElementById("productcategory");
            let productCurrencyHTML = document.getElementById("productcurrency");
            //let productCriteriaHTML = document.getElementById("productCriteria");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productsoldCountHTML.innerHTML = product.soldCount;
           // productCriteriaHTML.innerHTML = product.productCriteria;
            productCostHTML.innerHTML = product.cost;
            productCurrencyHTML.innerHTML = product.currency;
            productCategoryHTML.innerHTML = product.category;
            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});
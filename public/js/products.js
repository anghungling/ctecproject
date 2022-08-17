//This function is to call the movies api and get all the movies
//that is showing in Shaw Theatres for Showing Now and Coming Soon
//under the index.html, it runs this function to call the get all movies function
function getProductsData() { 
    var request = new XMLHttpRequest();
    request.open('GET', product_url, true); //apps.js
    //This function will be called when data returns from the web api
    request.onload = function () {
        //get all the movies records into our movie array
        product_array = JSON.parse(request.responseText);
        fetchComments(); 
        getUser();
        console.log(product_array) 
        displayProducts(category); 
    };
    //This command starts the calling of the movies web api and end the function   
    request.send();
}
function displayProducts(category) {
    var table = document.getElementById("productsTable");//look for productsTable in the html files
    var productCount = 0;
    var message = "";

    table.innerHTML = "";
    totalProducts = product_array.length; //counts the size of the array
    //display thumbnail & title of the movie in the table
    for (var count = 0; count < totalProducts; count++) {
        var image = product_array[count].image;
        var product = product_array[count].product;
        //it is from the function displayMovies, when trigger will show details
        //count=index number of movie in the array, value of count = current index

        //onclick & target needs to be changed
        var cell = '<div class="card col-4 px-4"><img class="card-img-top" src="' + image + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showProductComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#productModal" class="card-title" item="' + count + '" onClick="showProductDetails(this)">' + product + '</h5></div>\
                </div>'
        table.insertAdjacentHTML('beforeend', cell);
        productCount++;
    }
    message = productCount + " Products " + category;
    document.getElementById("parent").textContent = "";
}

function displayCategoryProduct(category) {
    var table = document.getElementById("productsTable");
    //look for productsTable in the html files
    var productCount = 0;
    table.innerHTML = "";
    totalProducts = product_array.length;//counts the size of the array
    for (var count = 0; count < totalProducts; count++) {
        if (product_array[count].type == category) {
            //if product cuisine is equal to the category then display
            console.log(product_array[count].type)
            var image = product_array[count].image;
            var product = product_array[count].product;
            var cell = '<div class="card col-4 px-4"><img class="card-img-top" src="' + image + '" alt="Card image cap">\
                        <div class="card-body"><i class="far fa-comment fa-lg" style="float:left;cursor:pointer" data-toggle="modal" data-target="#commentModal" item="' + count + '" onClick="showProductComments(this)"></i>\
                        <h5 style="padding-left:30px;cursor:pointer" data-toggle="modal" data-target="#productModal" class="card-title" item="' + count + '" onClick="showProductDetails(this)">' + product + '</h5></div>\
                </div>'
            table.insertAdjacentHTML('beforeend', cell);
            productCount++;
        }
    }
    document.getElementById("parent").textContent = "";
}

function showHA() {
    category = "Home Appliances";
    displayCategoryProduct(category);
}
function showBPC() {
    category = "Beauty & Personal Care";
    displayCategoryProduct(category);
}
function showElectronics() {
    category = "Electronics";
    displayCategoryProduct(category);
}
function showFurniture() {
    category = "Furniture";
    displayCategoryProduct(category);
}
function showSNE() {
    category = "Sports & Equipments";
    displayCategoryProduct(category);
}
function showWNA() {
    category = "Watches & Accessories";
    displayCategoryProduct(category);
}


function showProductDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;
    document.getElementById("productTitle").textContent = product_array[item].product;
    document.getElementById("image").src = product_array[item].image;
    document.getElementById("information").textContent = product_array[item].information;
}

$(document).ready(function () {
    //when user type something on the search bar
    $("#searchbar").on("keyup", function () {
        //check for the products after converting to lower case
        var value = $(this).val().toLowerCase();
        //search for product in the productsTable
        $("#productsTable div").each(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

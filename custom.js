// https://fakestoreapi.com/products
var apiCall = async () => {
    const response = await fetch("https://fakestoreapi.com/products",
        {
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            }
        });
    const jsonResponse = await response.json();
    //    console.log(jsonResponse);
    var tBody = document.getElementById('t-body');
    const autoCompleteInputTag = document.querySelector(".autoCompleteInput", [0]);

    const resultContainerTag = document.querySelector(".resultContainer", [0]);

    autoCompleteInputTag.addEventListener("keyup", (e) => {
        resultContainerTag.innerHTML = "";
        const searchText = e.target.value.toLowerCase();
        if (searchText.length === 0) {
            return;
        }
        const filteredProducts = jsonResponse.filter((product) => {
            return product.title.toLowerCase().includes(searchText);
        });

        if (filteredProducts.length > 0) {
            for (let i = 0; i < filteredProducts.length; i++) {
                const productItemContainer = document.createElement("div");
                productItemContainer.id = filteredProducts[i].id;
                productItemContainer.classList.add("productItemContainer");

                const productId = document.createElement("div");
                productId.classList.add("productId");
                productId.append(filteredProducts[i].id);

                const productName = document.createElement("div");
                productName.classList.add("productName");
                productName.append(filteredProducts[i].title);

                const productImage = document.createElement("img");
                productImage.classList.add("productImage");
                productImage.src = filteredProducts[i].image;

                productItemContainer.append(productId, productName, productImage);
                resultContainerTag.append(productItemContainer);
            }
        }
    });


    var myList = '';

    for (var i = 0; i < jsonResponse.length; i++) {
        //    console.log(jsonResponse[i].id);
        myList +=
            `<tr>
 <td>${jsonResponse[i].id}</td>
 <td>${jsonResponse[i].title}</td>

 <td>${jsonResponse[i].price} mmk</td>
 <td><image src="${jsonResponse[i].image} " class="img"></td>
</tr>`
    }
    tBody.innerHTML = myList;


};
apiCall();


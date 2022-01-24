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
    var myList = '';

    for (var i = 0; i < jsonResponse.length; i++) {
        //    console.log(jsonResponse[i].id);
        myList +=
            `<tr>
 <td>${jsonResponse[i].id}</td>
 <td>${jsonResponse[i].title}</td>
 <td></td>
 <td>${jsonResponse[i].price} mmk</td>
 <td><image src="${jsonResponse[i].image} " class="img"></td>
</tr>`
    }
    tBody.innerHTML = myList;


};
apiCall();


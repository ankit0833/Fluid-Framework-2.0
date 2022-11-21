Shopify.queryParams = {};
// Preserve existing query parameters
if (location.search.length) {
  var params = location.search.substr(1).split('&');
   for (var i = 0; i < params.length; i++) {
    var keyValue = params[i].split('=');
    if (keyValue.length) {
      Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
    }
  }
}

// Update sort_by query parameter on select change
document.querySelector('#sort-by').addEventListener('change', function(e) {
  var value = e.target.value;
  Shopify.queryParams.sort_by = value;
  location.search = new URLSearchParams(Shopify.queryParams).toString();
});

//fetch api

let add_cart_btn = document.querySelectorAll(".add_cart_btn");
let var_cart_id  = document.querySelectorAll("[data-productid]");


array.forEach(element => {
  add_cart_btn.addEventListener("click", (event)=>{
    event.preventDefault();
    alert();
  })
    
});

// let formData = {
//   'items': [{
//    'id': 36110175633573,
//    'quantity': 2
//    }]
//  };
// fetch(window.Shopify.routes.root + 'cart/add.js', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify(formData)
// })
// .then(response => {
//   return response.json();
// })
// .catch((error) => {
//   console.error('Error:', error);
// });

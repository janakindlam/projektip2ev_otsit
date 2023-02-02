fetch("products.json")
	.then(function(response){
	   return response.json();
	})
	.then(function(products){
	   let placeholder = document.querySelector("#data-output");
	   let out = "";
	   for(let product of products){
	      out += `
	         <tr>
	            <td> <img src='${product.image}'> </td>
	            <td>${product.name}</td>
	            <td>${product.price}</td>
	            <td>${product.inventory}</td>
	            <td>${product.productCode}</td>
	         </tr>
	      `;
	   }
	 
	   placeholder.innerHTML = out;
	});


const input = document.querySelector("#productImage");
input.addEventListener("change", function(event) {
  	const image = event.target.value;
	console.log(image);
});

const pname = document.querySelector("#productName");
pname.addEventListener("change", function(event) {
  	const name = event.target.value;
	console.log(name);
});

const select = document.querySelector("#productLocation");
select.addEventListener("change", function(event) {
	const selectedOption = event.target.value;
	console.log(selectedOption);
});
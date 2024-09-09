const products = [
{name:'shirt',price:30},
{name:'pant',price:500},
{name:'shampoo',price:200},


]
function getShoppingTotal(products){
 let total = 0;
 for(const product of products){
 total = total+product.price;

 }
return total;

} 
 const total = getShoppingTotal(products);
 console.log('total ajke khosabe:',total);
 
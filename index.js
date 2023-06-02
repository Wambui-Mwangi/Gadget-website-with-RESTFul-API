const productsContainer=document.getElementById('products')
const getProducts=()=>{
    return fetch('https://dummyjson.com/products?limit=8')
    .then(response => response.json())
    .then(response=>response)
    .catch(error=>error)
}
getProducts();
const displayProducts=async()=>{
    const products=await getProducts()
    console.log(products);
    products.products.map(item=>{
        console.log(item);
        let div=document.createElement('div');
        let img=document.createElement('img');
        img.id='images'
        let heading=document.createElement('h2');
        heading.id = 'heading'
        let brand=document.createElement('p');
        let price=document.createElement('p');
        let rates=document.createElement('h4');
        img.src=item.thumbnail
        heading.innerHTML=item.title;
        brand.innerHTML=item.brand
        price.innerHTML=item.price
        rates.innerHTML=item.rating
        div.appendChild(img)
        div.appendChild(heading)
        div.appendChild(brand)
        div.appendChild(price)
        div.appendChild(rates)
        div.setAttribute('key',item.id);
        div.setAttribute('class','product');
        productsContainer.appendChild(div)
    })
}
displayProducts()
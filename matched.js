const products = [

    {id: 1, name:"xiami one night phone", price:19000},
    {id: 2, name:"iphone", price:129000},
    {id: 3, name:"mac book air", price:119000},
    {id: 4, name:"lenovo Thinpad laptop", price:89000},
    {id: 5, name:"Hp Elide book", price:99000},
    {id: 6, name:"Samsung phone note 7", price:49000},
    {id: 7, name:"Nokia old age phone", price:1900},
    {id: 8, name:"phone one", price:29000},
];

function matchedProducts (products, search){
    const matched = [];
    for(const product of products){
        if(product.name.includes(search)){
            matched.push(product);
        }
    }

    return matched;
}


const result = matchedProducts(products, "phone");
console.log(result);
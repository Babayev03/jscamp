function addToCart(quantity ,productName = "Elma") {
    console.log("Sepete eklendi : " + productName + " Adet : " + quantity)
}

addToCart(10)


let sayHello = () =>{
    console.log("Hello World!")
}
sayHello()
let sayHello2 = function() {
    console.log("Hello World 2!")

}
sayHello2()


function addToCart2(product, quantity, unitPrice) {
    console.log("Ürün : " + product)
    console.log("Sayı : " + quantity)
    console.log("Fiyatı : " + unitPrice)
}
 addToCart2("Elma",5,10)
 addToCart2("Armut",2,20)
 addToCart2("limon",2,15)

 function addToCart3(product) {
console.log("Ürün : " + product.ProductName)
console.log("Sayı : " + product.quantity)
console.log("Fiyatı : " + product.unitPrice)
 }
 let product1 = {ProductName:"Elma", unitPrice:10, quantity:5}
 addToCart3(product1)
 

 let product2 = {ProductName:"Elma", unitPrice:10, quantity:5}
 let product3 = {ProductName:"Elma", unitPrice:10, quantity:5}
 product2 = product3
 product2.productName = "Karpuz"
 console.log(product3.productName)


 function addToCart4(x) {
     console.log(products) 
 } 
 let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"karpuz", unitPrice:10, quantity:5}

 ]

 addToCart4(products)


 function add(bisey, ...numbers) {
     let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]       
    }
    console.log(total) 
    console.log(bisey)
 }
 
 add(20,30)
 add(20,30,40)
 add(20,30,40,50)
 add(20,30,40,50,60)


 let numbers2 = [30,20,100,400,250,600]
 console.log(Math.max(...numbers2))

 
 let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name :"İç Anadolu", population :"20M"},
    {name :"Marmara", population :"30M"},
    {name :"Karadeniz", population :"10M"},
    [
        ["Ankara","Konya"],
        ["Istanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]

]
console.log(icAnadolu.name)
console.log(icAnadolu.population)
console.log(icAnadoluSehirleri)


let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} = {productName:"Elma", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
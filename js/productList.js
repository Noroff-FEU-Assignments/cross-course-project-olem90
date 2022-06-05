export const productArray = [
    {
        name:"Ping Pong",
        id: "1",
        image: src="images/cover1",
        price: 28.99,
    },
    {
        name:"Forge Legend",
        id: "2",
        image: src="images/cover2",
        price: 28.99,
    },
    
];

for(let i = 0; i < productArray.length; i++){
    console.log(productArray[i].name)
}
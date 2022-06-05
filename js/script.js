const addToCartBtn = document.querySelector(".add-to-cart-button");

addToCartBtn.onclick = function(){
    
    addItemToCart()

}

function addItemToCart(){
    const itemCard = document.createElement("div");
    itemCard.classList.add("items-card");
    const itemCardContent = `<div class="items-card">
    <div class="item">
    <div class="cart-image">
        <img src="images/cover5.jpg" alt="Furious">
    <div class="item-qty">
    <div class="qty-input">
        <label for="Qty">Qty</label>
        <input type="number">
    </div>
    </div>
    </div>
    <div>
    <div class="product-info">
        <p class="item-title">Furious</p>
        <p class="item-price">31.99$</p>
    </div>    
    </div>
    <div class="remove-btn">
        <a href="">Remove</a>
    </div>
    </div>
    </div>`;
}

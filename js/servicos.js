document.addEventListener("DOMContentLoaded", function () {
    const addButtonList = document.querySelectorAll(".add-to-cart");
    const removeButtonList = document.querySelectorAll(".remove-from-cart");
    const quantityInputList = document.querySelectorAll("input[type='number']");
    const carrinhoList = document.getElementById("itens-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");
    const carrinho = []; // Array para armazenar os itens no carrinho
    
    addButtonList.forEach(function (button, index) {
     button.addEventListener("click", function () {
         // Recuperar o preço do atributo data-preco do botão clicado
         const itemPrice = parseFloat(button.getAttribute("data-preco"));
         const itemQuantity = parseInt(quantityInputList[index].value);
    
         // Adicionar o item ao carrinho com seu próprio preço
         carrinho.push({ preco: itemPrice, quantidade: itemQuantity });
         atualizarCarrinho();
     });
    });
    
    removeButtonList.forEach(function (button, index) {
     button.addEventListener("click", function () {
         // Adicionar lógica para remover o item do carrinho
         carrinho.splice(index, 1);
         atualizarCarrinho();
     });
    });
    
    quantityInputList.forEach(function (input, index) {
     input.addEventListener("change", function () {
         // Adicionar lógica para alterar a quantidade do item no carrinho
         carrinho[index].quantidade = parseInt(input.value);
         atualizarCarrinho();
     });
    });
    
    function atualizarCarrinho() {
     // Limpar a lista do carrinho
     carrinhoList.innerHTML = "";
    
     // Calcular o total do carrinho
     let total = 0;
    
     carrinho.forEach(function (item) {
         const listItem = document.createElement("li");
         const subtotal = item.preco * item.quantidade;
         listItem.textContent = `Preço: R$ ${item.preco.toFixed(2)} - Quantidade: ${item.quantidade} - Subtotal: R$ ${subtotal.toFixed(2)}`;
         carrinhoList.appendChild(listItem);
    
         total += subtotal;
     });
    
     totalCarrinho.textContent = `Total: R$ ${total.toFixed(2)}`;
    }
    });
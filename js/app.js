let ticketStock = {
    pista: 100,
    superior: 200,
    inferior: 400
};  

function getTicketInputs() {
    let ticketType = document.getElementById('tipo-ingresso').value;
    let ticketQty = Number.parseInt(document.getElementById('qtd').value);
    if (validateQtyInput(ticketQty)) {
        return ticketData = {type: ticketType, qty: ticketQty};
    }
    return null;
}

function validateQtyInput(ticketQty) {
    if (ticketQty > 0 && Number.isInteger(ticketQty)) {
        return true;
    } else {
        alert('Quantidade Inválida! Deve ser um número positivo.');
        return false;
    }
}

function removeFromTicketStock(ticketType, ticketQty) {
    if (ticketType === 'pista') {
        checksAvailabilityInStock(ticketType, ticketQty);
    } else if (ticketType === 'superior') {
        checksAvailabilityInStock(ticketType, ticketQty);
    } else {
        checksAvailabilityInStock(ticketType, ticketQty);
    }
}

function checksAvailabilityInStock(ticketType, ticketQty) {
    if (ticketQty > ticketStock[ticketType]) {
        alert('Quantidade de ingressos indisponível');
    } else {
        alert('Compra realizada com sucesso!');
        ticketStock[ticketType] -= ticketQty;
    }
}

function displayTicketStock() {
    document.getElementById('qtd-pista').textContent = ticketStock['pista'];
    document.getElementById('qtd-superior').textContent = ticketStock['superior'];
    document.getElementById('qtd-inferior').textContent = ticketStock['inferior'];
}

function cleanTicketQtyInput() {
    document.getElementById('qtd').value = '1';
}

function buyTicket() {
    let ticketData = getTicketInputs();
    if (ticketData != null) {
        let ticketType = ticketData['type'];
        let ticketQty = ticketData['qty'];
        removeFromTicketStock(ticketType, ticketQty);
        displayTicketStock();
        cleanTicketQtyInput();
    }
    return false;
}

function defineBuyButton() {
    let BuyButton = document.querySelector('button');
    BuyButton.addEventListener('click', buyTicket);    
}

displayTicketStock();
defineBuyButton();

function loadAllCustomersForComboBox(){
    $("#selectCusId").empty();
    for(let c of customers){
        $("#selectCusId").append(`<option>${c.id}</option>`);
    }
}

function loadAllItemsForComboBox(){
    $("#selectItmCode").empty();
    for(let it of items){
        $("#selectItmCode").append(`<option>${it.code}</option>`)
    }
}

$("#addToCart").click(function (){
    let itemCode=$("#selectItmCode").val();
    let itemName=$("#selectedItmName").val();
    let itemPrice=$("#selectedItmPrice").val();
    let itemQty=$("#selectedQty").val();
    let itemTotal=parseInt(itemPrice)*parseInt(itemQty);

    var cartObject={
        itCode: itemCode,
        itName:itemName,
        itPrice:itemPrice,
        itQty:itemQty,
        itTotal:itemTotal
    }
    cart.push(cartObject);

    loadAllItemsToCart();
});

function loadAllItemsToCart(){

    $("#tblCart").empty();

    for (var c of cart){
        var row=`<tr><td>${c.itCode}</td><td>${c.itName}</td><td>${c.itPrice}</td><td>${c.itQty}</td><td>${c.itTotal}</td></tr>`;
        $("#tblCart").append(row);
    }

}
/*--------btn add----------*/
$("#btnItmAdd").click(function (){
    let itemCode=$("#ItemCode").val();
    let itemName=$("#ItemName").val();
    let itemQty=$("#ItemQty").val();
    let itemPrice=$("#ItemPrice").val();

    var itemObject={
        code: itemCode,
        name:itemName,
        qty:itemQty,
        price:itemPrice
    }
    items.push(itemObject);

    loadAllCustomers();

    bindRowClickEvents();
});
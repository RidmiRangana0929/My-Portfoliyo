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

    loadAllItems();

    bindRowClickEvents2();
});

/*--------load all----------*/
function loadAllItems(){

    $("#tblItem").empty();

    for (var item of items){
        var row=`<tr><td>${item.code}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;
        $("#tblItem").append(row);
    }

}

/*--------row click----------*/
function bindRowClickEvents2() {
    $("#tblItem>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();

        $('#ItemCode').val(id);
        $('#ItemName').val(name);
        $('#ItemQty').val(address);
        $('#ItemPrice').val(salary);

    });
}
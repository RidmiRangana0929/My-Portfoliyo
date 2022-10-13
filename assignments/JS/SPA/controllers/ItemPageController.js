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

    clearText2();

    bindRowClickEvents2();
});

/*--------search with enter----------*/
$("#ItemCode").on('keyup', function (event) {
    if (event.code == "Enter") {
        let Code = $("#ItemCode").val();
        let item = searchItem(Code);
        if (item != null) {
            setTextFieldValues2(item.code, item.name, item.qty, item.price);
        } else {
            alert("There is no item available for code " + Code + ".");
            setTextFieldValues2("", "", "", "");
        }
    }
});

/*--------btn update----------*/
$("#btnItmUpdate").click(function () {
    let itemID = $("#ItemCode").val();
    let response = updateItem(itemID);
    if (response) {
        alert("Item Details Updated Successfully..!");
        setTextFieldValues2("", "", "", "");
    } else {
        alert("Something Wrong! Try Again!");

    }

    clearText2();

});

/*--------btn get all----------*/
$("#btnItmGetAll").click(function (){
    loadAllItems();
});

/*--------btn clear all----------*/
$("#btnItmClearAll").click(function (){
    clearText2();
});

/*--------btn remove----------*/
$("#btnItmRemove").click(function () {
    let removeCode = $("#ItemCode").val();

    let option = confirm("Do you want to delete " + removeCode + " Item ?");
    if (option){
        if (removeItem(removeCode)) {
            alert("Item Deleted Successfully..!");
            setTextFieldValues2("", "", "", "");
        } else {
            alert("Something Wrong! Check Item Code and Try Again!");
        }
    }
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

function updateItem(itemID) {
    let item = searchItem(itemID);

    if (item != null) {
        item.code = $("#ItemCode").val();
        item.name = $("#ItemName").val();
        item.qty = $("#ItemQty").val();
        item.price = $("#ItemPrice").val();
        loadAllItems();
        return true;
    } else {
        return false;
    }
}

function setTextFieldValues2(code, name, qty, price) {
    $("#ItemCode").val(code);
    $("#ItemName").val(name);
    $("#ItemQty").val(qty);
    $("#ItemPrice").val(price);
}

function clearText2(){
    $("#ItemCode,#ItemName,#ItemQty,#ItemPrice").val("");
}

function searchItem(itmID) {
    for (let item of items) {
        if (item.code == itmID) {
            return item;
        }
    }
    return null;
}

function removeItem(itemID) {
    let item = searchItem(itemID);
    if (item != null) {
        let indexNumber = items.indexOf(item);
        items.splice(indexNumber, 1);
        loadAllItems();
        return true;
    } else {
        return false;
    }
}
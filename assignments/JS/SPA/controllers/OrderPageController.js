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
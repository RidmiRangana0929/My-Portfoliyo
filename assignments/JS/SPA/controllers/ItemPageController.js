/*
$("#btnItmAdd").click(function () {
    //local scope // function scope

    //select all the four text fields and then get their typed values
    let itemCode = $("#ItemCode").val();
    let itemName = $("#ItemName").val();
    let itemQty = $("#ItemQty").val();
    let itemPrice = $("#ItemPrice").val();

    // alert(customerID+" "+ customerName+" "+customerAddress+" "+customerSalary);

    //Put all of these values inside a named container
    // customer

    var itemObject = {
        code: itemCode,
        name: itemName,
        qty: itemQty,
        price: itemPrice
    }

    //add the customer object to the array
    items.push(itemObject);


    // console.log(customers);

    loadAllItems();

});

function loadAllItems() {
    //remove all the table body content before adding data
    $("#tblItem").empty();


    // get all customer records from the array
    for (var item of items) {
        // console.log(customer);// customer object

        // add those data to the table row
        // var row= "<tr><td>"+customer.id+"</td><td>"+customer.name+"</td><td>"+customer.address+"</td><td>"+customer.salary+"</td></tr>";

        // Using String Literals to do the same thing as above
        var row = `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.qty}</td><td>${item.price}</td></tr>`;

        //then add it to the table body of customer table
        $("#tblItem").append(row);
    }
}*/

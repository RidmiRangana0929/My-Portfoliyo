/*--------btn save----------*/
$("#btnCusSave").click(function (){
    let customerId=$("#CustomerID").val();
    let customerName=$("#CustomerName").val();
    let customerAddress=$("#CustomerAddress").val();
    let customerSalary=$("#CustomerSalary").val();

    var customerObject={
        id: customerId,
        name:customerName,
        address:customerAddress,
        salary:customerSalary
    }
    customers.push(customerObject);

    loadAllCustomers();

    bindRowClickEvents();
});

/*--------btn update----------*/
$("#btnCusUpdate").click(function () {
    let customerID = $("#CustomerID").val();
    let response = updateCustomer(customerID);
    if (response) {
        alert("Customer Details Updated Successfully..!");
        setTextfieldValues("", "", "", "");
    } else {
        alert("Something Wrong! Try Again!");

    }
});

/*--------btn get all----------*/
$("#btnCusGetAll").click(function () {
    loadAllCustomers();
});

/*--------btn update----------*/



/*--------load all----------*/
function loadAllCustomers(){

    $("#tblCustomer").empty();

    for (var customer of customers){
/*
        var row =  '<tr><td>'+customer.id+'</td><td>'+customer.name+'</td><td>'+customer.address+'</td><td>'+customer.salary+'</td></tr>';
*/
        var row=`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;
        $("#tblCustomer").append(row);
    }

}

/*--------row click----------*/
function bindRowClickEvents() {
    $("#tblCustomer>tr").click(function () {
        let id = $(this).children(":eq(0)").text();
        let name = $(this).children(":eq(1)").text();
        let address = $(this).children(":eq(2)").text();
        let salary = $(this).children(":eq(3)").text();

        $('#CustomerID').val(id);
        $('#CustomerName').val(name);
        $('#CustomerAddress').val(address);
        $('#CustomerSalary').val(salary);

    });
}

function setTextfieldValues(id, name, address, salary) {
    $("#CustomerID").val(id);
    $("#CustomerName").val(name);
    $("#CustomerAddress").val(address);
    $("#CustomerSalary").val(salary);
}

function searchCustomer(cusID) {
    for (let customer of customers) {
        if (customer.id == cusID) {
            return customer;
        }
    }
    return null;
}

function updateCustomer(customerID) {
    let customer = searchCustomer(customerID);

    if (customer != null) {
        customer.id = $("#CustomerID").val();
        customer.name = $("#CustomerName").val();
        customer.address = $("#CustomerAddress").val();
        customer.salary = $("#CustomerSalary").val();
        loadAllCustomers();
        return true;
    } else {
        return false;
    }
}
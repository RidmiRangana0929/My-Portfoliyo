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
});


$("#btnCusGetAll").click(function () {
    loadAllCustomers();
});


function loadAllCustomers(){

    $("#tblCustomer").empty();

    for (var customer of customers){
        var row =  '<tr><td>'+customer.id+'</td><td>'+customer.name+'</td><td>'+customer.address+'</td><td>'+customer.salary+'</td></tr>';
        /*var row=`<tr><td>${customer.id}</td><td>${customer.name}</td><td>${customer.address}</td><td>${customer.salary}</td></tr>`;*/
        $("#tblCustomer").append(row);
    }

}
function setTextfieldValues(id, name, address, salary) {
    $("#CustomerID").val(id);
    $("#CustomerName").val(name);
    $("#CustomerAddress").val(address);
    $("#CustomerSalary").val(salary);
}
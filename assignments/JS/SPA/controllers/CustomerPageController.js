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


function loadAllCustomers(){

}
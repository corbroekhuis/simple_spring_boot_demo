var api = "http://localhost:9090/api/customer" ;
var customerTable;

function init(){

    console.log('inside init' );

    // Add click event to button
    $("#create-customer").click(function (){
        createCustomer();
    });

    initCustomerTable();
    // Get customers from backend and and update table
    getCustomerData();

}

function initCustomerTable() {

    console.log('inside initCustomerTable' );

    // Create columns (with titles) for datatable: id, name, address, age
    columns = [
        { "title":  "Customer ID",
            "data": "id" ,
            "visible": false },
        { "title":  "Name",
            "data": "name" },
        { "title":  "Address",
            "data": "address" },
        { "title": "Age",
            "data": "age"},
    ];

    // Define new table with above columns
    customerTable = $("#customerTable").DataTable( {
        "order": [[ 0, "asc" ]],
        "columns": columns
    });

}

function getCustomerData(){

    console.log('inside getCustomerData' );
    // http:/localhost:9090/api/customer
    // json list of customers
    $.ajax({
        url: api,
        type: "get",
        dataType: "json",
        // success: function(customers, textStatus, jqXHR){
        success: function(customers){

 //           console.log('Data: ' + customers );

            if (customers) {
                customerTable.clear();
                customerTable.rows.add(customers);
                customerTable.columns.adjust().draw();
            }
        },

        fail: function (error) {
            console.log('Error: ' + error);
        }

    });

}

function createCustomer(){

    console.log('inside createCustomer' );

    // Put customer data from page in Javascript object --- SIMILAR TO JSON
    var customerData = {
            name: $("#name").val(),
            address: $("#address").val(),
            age: $("#age").val()
    }

    // Transform Javascript object to json
    var customerJson = JSON.stringify(customerData);

    console.log(customerJson);

    $.ajax({
        url: api,
        type: "post",
        data: customerJson,    // json for request body
        contentType:"application/json; charset=utf-8",   // What we send to frontend
        dataType: "json",  // get back from frontend
        // success: function(customer, textStatus, jqXHR){
        success: function(customer){

          console.log(customer);

          // Clear fields in page
          $("#name").val('');
          $("#address").val('');
          $("#age").val('');

          // Refresh table data
          getCustomerData();

        },

        fail: function (error) {
          console.log('Error: ' + error);
        }

    });

}

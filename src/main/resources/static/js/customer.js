var api = "http://localhost:9090/api/customer" ;

function init(){

    console.log('inside init' );

    // Add click event to button
    $("#create-customer").click(function (){
        createCustomer();
    });

    // Get customers from backend and update DOM
    getCustomers();

}

function getCustomers(){

    console.log('inside getCustomers' );
    // http:/localhost:9090/api/customer
    // json list of customers
    $.ajax({
        url: api,
        type: "get",
        dataType: "json",
        success: function(customers, textStatus, jqXHR){
            // process the data (json) and modify the DOM
            var html =
            '<table class="table">' +
            '<tr>' +
            '<th>Name</th>' +
            '<th>Address</th>' +
            '<th>Age</th>' +
            '</tr>';
            $.each(customers, function(index, customer) {
                html = html + '<tr>'+
                '<td>'+ customer.name + '</td>' +
                '<td>'+ customer.address + '</td>' +
                '<td>'+ customer.age + '</td>' +
                '</tr>'
                console.log(customer.name + ' ' + customer.age + ' yrs');
            });

            html = html + '</table>';

            $("#customers").html(html);

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
        success: function(customer, textStatus, jqXHR){

          console.log(customer);

          // Clear fields in page
          $("#name").val('');
          $("#address").val('');
          $("#age").val('');

          // Refresh table data
          getCustomers();

        },

        fail: function (error) {
          console.log('Error: ' + error);
        }

    });

}

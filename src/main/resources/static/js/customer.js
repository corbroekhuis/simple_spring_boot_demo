var api = "http://localhost:9090/api/customer" ;

init();

function init(){

    $("#create-customer").click(function (){
        createCustomer();
    });

    getCustomers();

}

function getCustomers(){

    console.log('inside getCustomers' );
    $.ajax({
        url: api,
        type: "get",
        dataType: "json",
        contentType: "application/json",
        success: function(customers, textStatus, jqXHR){

            $.each(customers, function(index, customer) {
                console.log(customer.name + ' ' + customer.age + ' yrs');
            });

            // process the data (json) and modify the DOM
            console.log('status: ' + jqXHR.status + ', data: ' + customers[0].name);
        },

        fail: function (error) {
            console.log('Error: ' + error);
        }

    });

}

function createCustomer(){

    console.log('inside createCustomer' );

}

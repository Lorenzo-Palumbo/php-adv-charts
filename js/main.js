$(document).ready(function (){

    $.ajax({
        url:'server.php',
        method:'GET',
        success:function(data){
            var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
            var ctx = $('#myChart');
            var chart = new Chart(ctx, {

                type: 'line',

                data: {
                    labels: months,
                    datasets: [{
                        label: 'My First dataset',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: data
                    }]
                },
            });
        },
        error:function(){
            alert('errore');
        }
    });

    /*----------------------Metodo con data-database-------------------
    var data = $('#myChart').data('database');
    // var data =  [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];
    var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

    var ctx = $('#myChart');
    var chart = new Chart(ctx, {

        type: 'line',

        data: {
            labels: months,
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: data
            }]
        },
    }); */






});

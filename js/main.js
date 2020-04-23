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

    $.ajax({
        url:'server.php',
        method:'GET',
        success: function (data) {
            var fatturato = datiFatturato(data);
            graficoLine(fatturato.tipo, fatturato.mesi, fatturato.vendite);
            var venditeAgenti = datiVenditeAgenti(data);
            graficoPie(venditeAgenti.tipo, venditeAgenti.vendita, venditeAgenti.venditori);
        },
        error: function (){
            alert('errore')
        }
    });

    function datiFatturato(data){
        var fatturato = data.fatturato;
        var type = fatturato.type;
        var fatturato = fatturato.data;
        var months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
        return{
            tipo: type,
            vendite: fatturato,
            mesi: months
        }
    };
    function datiVenditeAgenti(data){
        var array_fatturati_venditori = data.fatturato_by_agent;
        var fatturati_venditori = array_fatturati_venditori.data;
        var type = array_fatturati_venditori.type;

        var venditori = [];
        var vendita = [];

        for (var key in fatturati_venditori) {
            venditori.push(key);
            vendita.push(fatturati_venditori[key]);
        };
        return{
            tipo: type,
            venditori: venditori,
            vendita: vendita
        }
    };
    function graficoLine(type, labels, data){
        var ctx = $('#myChart-two');
        var chart = new Chart(ctx, {

            type: type,

            data: {
                labels: labels,
                datasets: [{
                    label: 'Fatturato',
                    backgroundColor: 'rgb(063, 136, 143)',
                    borderColor: 'rgb(031, 052, 056)',
                    data: data
                }]
            },
        });
    };
    function graficoPie(type, totVenditore, venditori){
        var ctx = $('#myChart-three');
        var myPieChart = new Chart(ctx, {
            type: type,
            data: {
                datasets: [{
                    data: totVenditore,
                    backgroundColor: ['#ed5555', '#6ca36c', '#6565b8', '#ae5e5e']
                }],

                labels: venditori
            }
        });
    };




});

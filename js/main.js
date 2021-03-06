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

    $.ajax({
        url:'server.php',
        method:'GET',
        success:function(data){
            var vendite = datiVendite(data);
            graficoLineStep3(vendite.tipo, vendite.dati);
            var fatturatoAgente = datiFatturatoAgenti(data);
            graficoPieStep3(fatturatoAgente.tipo, fatturatoAgente.vendita, fatturatoAgente.venditori);
            var team = datiTeam(data);
            graficoLine3team(team.tipo, team.team1, team.team2, team.team3);
        },
        error:function(){
            alert('error');
        }
    });

    function graficoLineStep3(type, data){
        var ctx = $('#myChart-four');
        var chart = new Chart(ctx, {

            type: type,

            data: {
                labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                datasets: [{
                    label: 'Vendite',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: data
                }]
            },
        });
    };
    function datiVendite(data){
        var fatturato = data.fatturato;
        var tipo = fatturato.type;
        var dati = fatturato.data;
        return{
            tipo:tipo,
            dati:dati
        }
    };
    function graficoPieStep3(type, data, sellers){
        var ctx = $('#myChart-five');
        var chart = new Chart(ctx, {

            type: type,

            data: {
                datasets: [{
                    data: data,
                    backgroundColor:['#ed5555', '#6ca36c', '#6565b8', '#ae5e5e']
                }],

                labels: sellers
            }
        });
    };
    function datiFatturatoAgenti(data){
        var fatturatoAgenti = data.fatturato_by_agent;
        var tipo = fatturatoAgenti.type;
        var dati = fatturatoAgenti.data;

        var venditori = [];
        var vendita = [];
        for (var key in dati) {
            venditori.push(key);
            vendita.push(dati[key]);
        };
        return{
            tipo:tipo,
            venditori:venditori,
            vendita:vendita
        }
    };
    function graficoLine3team(tipo, team1, team2, team3){
        var ctx = $('#myChart-six');
        var chart = new Chart(ctx, {

            type: tipo,

            data: {
                labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
                datasets: [
                    {
                        label: 'Team 1',
                        backgroundColor: 'rgb(165, 165, 165, 0.3)',
                        borderColor: 'rgb(63, 81, 181)',
                        data: team1
                    },
                    {
                        label: 'Team 2',
                        backgroundColor: 'rgb(165, 165, 165, 0.3)',
                        borderColor: 'rgb(76, 175, 80)',
                        data: team2
                    },
                    {
                        label: 'Team 3',
                        backgroundColor: 'rgb(165, 165, 165, 0.3)',
                        borderColor: 'rgb(255,193, 7)',
                        data: team3
                    }
                ],
            },
        });
    };
    function datiTeam(data){
        var efficienzaTeam = data.team_efficiency;
        var tipo = efficienzaTeam.type;
        var dati = efficienzaTeam.data;
        var team1 = dati.Team1;
        var team2 = dati.Team2;
        var team3 = dati.Team3;
        return{
            tipo: tipo,
            team1: team1,
            team2: team2,
            team3: team3
        }

    };

});

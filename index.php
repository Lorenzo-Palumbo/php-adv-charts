<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <link rel="stylesheet" href="css/style.css">
        <title>php-adv-charts</title>
    </head>
    <body>
        <div class="container">
            <?php include 'data.php'; ?>
            <canvas id="myChart" data-database="<?php echo $database; ?>"></canvas>
        </div>
        <script>
        /*
            $(document).ready(function (){

                < ?php //$data =  [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322]; ?>
                < ?php include 'data.php'; ?>
                < ?php $months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']; ?>;
                var data = < ?php echo $database; ?>;
                var months = < ?php echo json_encode($months); ?>;

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
            });
            */
        </script>
        <div class="container-two">
            <canvas id="myChart-two"></canvas>
        </div>
        <div class="container-three">
            <canvas id="myChart-three"></canvas>
        </div>
        
        <!-- Step 3 -->
        <div class="container-four">
            <canvas id="myChart-four"></canvas>
        </div>
        <div class="container-five">
            <canvas id="myChart-five"></canvas>
        </div>
        <div class="container-six">
            <canvas id="myChart-six"></canvas>
        </div>

        <script src="js/main.js" charset="utf-8"></script>
    </body>
</html>

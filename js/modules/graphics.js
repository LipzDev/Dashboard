export default function initGraphics(){
// GRAFICO DA REDONDO

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Blue','Pink','Yellow'],
        datasets: [{            
            data: [5,2,3],
            backgroundColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
               'rgba(54, 162, 235, 1)',
               'rgba(255, 99, 132, 1)',
               'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },   
});


// GRAFICO DE BARRAS

var ctx = document.getElementById('myCharBar').getContext('2d');
var myChart = new Chart(ctx, {
   type: 'bar',
   data: {
       labels: ['Blue', 'Pink', 'Yellow'],
       datasets: [{
           label: 'Graphic',
           data: [12,1,7.5],
           backgroundColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'
        ],
           borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'            
           ],
           borderWidth: 1
       }]
   },  
});
}

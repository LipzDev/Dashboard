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

// GRAFICO DE LINE

var ctx = document.getElementById('myChartLine').getContext('2d');
var myChart = new Chart(ctx, {
   type: 'line',
   data: {
       labels: ['Blue', 'Pink', 'Yellow'],
       datasets: [{
           label: 'Graphic 1',
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

// GRAFICO DE LINE

var ctx = document.getElementById('myChartLine2').getContext('2d');
var myChart = new Chart(ctx, {
   type: 'line',
   data: {
       labels: ['Blue', 'Pink', 'Yellow'],
       datasets: [{
           label: 'Graphic 2',
           data: [12,1,7.5],
           backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
        ],
           borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'            
           ],
           borderWidth: 1
       }]
   },  
});

// GRAFICO DE LINE

var ctx = document.getElementById('myChartLine3').getContext('2d');
var myChart = new Chart(ctx, {
   type: 'line',
   data: {
       labels: ['Blue', 'Pink', 'Yellow'],
       datasets: [{
           label: 'Graphic 3',
           data: [12,1,7.5],
           backgroundColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'
            
        ],
           borderColor: [
            'rgba(255, 206, 86, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)'            
           ],
           borderWidth: 1
       }]
   },  
});

// GRAFICO DE LINE

var ctx = document.getElementById('myChartLine4').getContext('2d');
var myChart = new Chart(ctx, {
   type: 'line',
   data: {
       labels: ['Blue', 'Pink', 'Yellow'],
       datasets: [{
           label: 'Graphic 4',
           data: [12,1,7.5],
           backgroundColor: [
            'rgba(54, 162, 235, 0)',
            'rgba(255, 99, 132, 0)',
            'rgba(255, 206, 86, 0)'
        ],
           borderColor: [
            'rgba(54, 162, 235, 1)',
            'rgba(255, 99, 132, 1)',
            'rgba(255, 206, 86, 1)'            
           ],
           borderWidth: 3
       }]
   },  
});




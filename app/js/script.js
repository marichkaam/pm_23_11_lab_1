import Chart from 'chart.js/auto';

var ctx = document.getElementById('myChart').getContext("2d");

var gradientStroke = ctx.createLinearGradient(100, 0, 800, 0);
gradientStroke.addColorStop(0, '#E01745');
gradientStroke.addColorStop(1, '#1794E0');



var myChart = new Chart(ctx, {
type: 'line',
data: {
labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
datasets: [{
   // label: "Data",
    borderColor: gradientStroke,
    pointBorderColor: gradientStroke,
    pointBackgroundColor: gradientStroke,
   pointHoverBackgroundColor: gradientStroke,
    pointHoverBorderColor: gradientStroke,
    pointBorderWidth: 0,
    pointHoverRadius: 0,
    pointHoverBorderWidth: 1,
    pointRadius: 0,
    fill: false,
    borderWidth: 7,
    data: [100, 120, 150, 100, 180, 170, 160]
}]
},
options: {          
legend: {
    position: "bottom"
},
scales: {
    yAxes: [{
      
        ticks: {
            fontColor: "#FFFFFF",
            fontStyle: "bold",
            beginAtZero: true,
            maxTicksLimit: 5,
            padding: 20
        },
        gridLines: {
           drawBorder: false,
           display: false,
        }

    }],
    xAxes: [{
        gridLines: {
            zeroLineColor: "transparent"
        },
        ticks: {
            padding: 20,
            fontColor: "rgba(0,0,0,0.5)",
            fontStyle: "bold"
        }
    }]
}
}
});

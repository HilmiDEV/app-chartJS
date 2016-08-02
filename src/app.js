

// Get the context 2d of the canvas element
var context = document.getElementById("mycanv").getContext('2d');

var data = [{
    value: 25,
    label: 'Java',
    color: '#811BD6'
},
    {
        value: 10,
        label: 'Scala',
        color: '#9CBABA'
    },
    {
        value: 30,
        label: 'PHP',
        color: '#D18177'
    },
    {
        value : 35,
        label: 'HTML',
        color: '#6AE128'
    }];

var chart = new Chart(context, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
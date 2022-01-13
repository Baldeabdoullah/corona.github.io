let labels1 = ['Janvier', 'Fevrier','Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre' ];

let data1 = [0, 0, 175, 758, 2712, 3148, 3439, 3379, 1371, 634, 473, 3051];
let colors1 = ['green',  'blue'];

let myChart1 = document.getElementById("myChart").getContext('2d');

let chart1 = new Chart(myChart1, {
    type: 'line',
    data : {
        labels: labels1,
        datasets: [ {
            data: data1,
            label: '2020',
            fill: true,
          
            backgroundColor: 'green',

        }]
    },
    options: {
        title: {
            //text: "cas 2020",
            display: true,
            responsive: true,
        }
    }

});





let labels2 = ['Janvier', 'Fevrier','Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre' ];

let data2 = [7383,7997 , 4185, 1639, 1072, 1712, 19162, 10515, 970, 142, 68, 0];
let colors2 = ['green',  'blue'];

let myChart2 = document.getElementById("myChart2").getContext('2d');

let chart2 = new Chart(myChart2, {
    type: 'line',
    data : {
        labels: labels2,
        datasets: [ {
            data: data2,
            label: ' 2021',
            fill: true,
          
            backgroundColor: 'green',

        }]
    },
    options: {
        title: {
           // text: "cas 2021",
            display: true,
        },
        
    }

});

// LE NOMBRE DE DECES


// 2020


let labels3 = ['Janvier', 'Fevrier','Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre' ];

let data3 = [0,0 , 0, 9,33,70,93,134, 99, 13, 9,77];
let colors3 = ['green',  'blue'];

let myChart3 = document.getElementById("myChart3").getContext('2d');

let chart3 = new Chart(myChart3, {
    type: 'line',
    data : {
        labels: labels3,
        datasets: [ {
            data: data3,
            label: ' 2020',
            fill: true,
          
            backgroundColor: 'green',

        }]
    },
    options: {
        title: {
           // text: "cas 2021",
            display: true,
        },
        
    }

});


//2021


let labels4 = ['Janvier', 'Fevrier','Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre' ];

let data4 = [218,244, 179, 56,32,27,187,412, 93, 20, 0,0];
let colors4 = ['green',  'blue'];

let myChart4 = document.getElementById("myChart4").getContext('2d');

let chart4 = new Chart(myChart4, {
    type: 'line',
    data : {
        labels: labels4,
        datasets: [ {
            data: data4,
            label: ' 2021',
            fill: true,
          
            backgroundColor: 'green',

        }]
    },
    options: {
        title: {
           // text: "cas 2021",
            display: true,
        },
        
    }

});





//VACCIN



let labels5 = ['Janvier', 'Fevrier','Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre' ];

let data5 = [0,27018, 233736, 150589,41392,62609,124669,507540, 100323, 23145, 0,0];
let colors5 = ['green',  'blue'];

let myChart5 = document.getElementById("myChart5").getContext('2d');

let chart5 = new Chart(myChart5, {
    type: 'line',
    data : {
        labels: labels5,
        datasets: [ {
            data: data5,
            label: ' 2021',
            fill: true,
          
            backgroundColor: 'green',

        }]
    },
    options: {
        title: {
           // text: "cas 2021",
            display: true,
        },
        
    }

});








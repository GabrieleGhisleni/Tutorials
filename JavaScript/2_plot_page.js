
var parameters = {
    title: 'Functions sin(x)',
    target: '#figure',
    width: 1200,
    height:800,
    data: [{
    fn: 'sin(x)', 
    color: 'red'}       
    ],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
}


functionPlot(parameters);

function plot(){
    var color = document.querySelector('#color').value

    var ymax = document.querySelector('#ymax').value
    var ymin = document.querySelector('#ymin').value

    var xmax = document.querySelector('#xmax').value
    var xmin = document.querySelector('#xmin').value
    var fun = document.querySelector('#function').value
    var color = document.querySelector('#color').value


    parameters.data[0].color = color
    parameters.data[0].fn = fun
    parameters.title = 'Function: '+ fun
    parameters.yAxis.domain[1] = ymax
    parameters.yAxis.domain[0] = ymin

    parameters.xAxis.domain[1] = xmax
    parameters.xAxis.domain[0] = xmin
    console.log(parameters)


    functionPlot(parameters)
}
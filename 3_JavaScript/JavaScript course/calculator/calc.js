function clear_display(cl=true){
    localStorage.clear()
    localStorage.second = false
    localStorage.eq = false
    if( cl === true){
        $('#display').val(undefined)
    }
}

function clear_display_2(){
        localStorage.clear();   
         localStorage.second = false;   
           $('#display').val(undefined);
    }


function display(o, r=false){
    if (typeof r == 'number'){
        $('#display').val(r)
    }
    else{
        if (o === true){var storage = localStorage.numerator}
        else {var storage = localStorage.second}
        if (storage != undefined){
            $('#display').val(storage)
        }
    }

}

function insertValue(){
    var val = ($(this).html())
    if ((JSON.parse(localStorage.second) === true) || ((JSON.parse(localStorage.eq) === true))){
        localStorage.second = val
        localStorage.eq = false
        display(false)
    }
    else if (typeof JSON.parse(localStorage.second) == 'number'){
        localStorage.second = localStorage.second  + val
        display(false)
    }
    else{
        var storage = localStorage.numerator
        if (storage == undefined){
            localStorage.numerator = val
        }
        else{
            localStorage.numerator = storage + val
        }
        display(true)
    }
}

// --------------------------------------------------
function plusFunction(){
    localStorage.second = true
    localStorage.plus = true
}

function minusFunction(){
    localStorage.second = true
    localStorage.minus = true
}

function fracFunction(){
    localStorage.second = true
    localStorage.div = true
}

function dotFunction(){
    localStorage.second = true
    localStorage.dot = true
}

function equalFunction(){
    var res = 0;
    var num = Number(localStorage.numerator)
    var den = Number(localStorage.second)
    if (localStorage.dot){res = num * den}
    if (localStorage.plus){res = num + den}
    if (localStorage.minus){res = num - den}
    if (localStorage.div){res = num / den}
    clear_display(cl=false)
    localStorage.eq = true
    localStorage.numerator = res
    display(true, r=res)
}

// --------------------------------------------------
clear_display()
$('#buttonC').click(clear_display_2)
$('.button_num').click(insertValue)

$('#plusButton').click(plusFunction)
$('#fracButton').click(fracFunction)
$('#minusButton').click(minusFunction)
$('#dotButton').click(dotFunction)
$('#buttonEqual').click(equalFunction)

$('html').click(function(){console.log(localStorage)})

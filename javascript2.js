
function fibonacci_set(max){
    if (max > 1){
        var fib_list = [1];
        //console.log("Printing fib_list:")
        //console.log(fib_list);
        var current_fib = 1;
        while( current_fib < max){
            fib_list.push(current_fib);
            //console.log(fib_list);
            current_fib = fib_list[fib_list.length - 1] + fib_list[fib_list.length -2];
            /*
            console.log("Printing fib_list[-1]");
            console.log(fib_list[fib_list.length -1])
            console.log("Printing fib_list[-2]");
            console.log(fib_list[fib_list.length -2])
            */
            //console.log(current_fib);
            
        }
        return fib_list;
    }
    else
    {
        return [1, 1];
    }
}
   
   
function even(n){
    return n%2 === 0;
}

function sum(list){
    var total = 0;
    for (var i = 0; i < list.length; i++) {
        total += list[i];
    }
    return total;
}

function filter(operation, list){
    var n = 0;
    while(n < list.length) {
        if (operation(list[n]) === false) {
            list.splice(n, 1);
            
        }else{
            n += 1;
    }
    }
    return list;
}
//var even_f_nums = even()

//console.log(filter(even, fibonacci_set(4000)));
console.log(sum(filter(even, fibonacci_set(4000000))));
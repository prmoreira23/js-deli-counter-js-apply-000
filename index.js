function takeANumber(arr, customer){
    arr.push(customer);
    return "Welcome, "+customer+". You are number "+arr.length+" in line.";
}

function currentLine(arr){
    var text = "The line is currently: ";
    var lines = [];
    if(arr.length < 1){
        return "The line is currently empty.";
    }
    arr.forEach(function(customer, index){
        lines.push((index + 1) + ". " + customer);
    });
    return text + lines.join(", ");
}

function nowServing(arr){
<<<<<<< HEAD
    if(arr.length < 1){
        return "There is nobody waiting to be served!";
    }
    var customer = arr.shift();
=======
    var customer = arr.unshift();
>>>>>>> 7e49199d2c4c0fee3bb551a60411f935202fc150
    return "Currently serving "+customer+".";
}

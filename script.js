var x = "0"
    
for (var i=1; i<101; i++) {
        x += i;
        var buzz = i % 5 == 0;
        var fizz = i % 3 == 0;
        if (buzz == true){
            console.log("Buzz");
        }
        else if (fizz == true){
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }


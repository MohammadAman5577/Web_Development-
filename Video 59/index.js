    console.log("This is my calculator")

    if(Math.random()<0.1){
        function sum(a,b) {
            console.log("The sum is :"+(a+b))
            return a-b
        }
        function diff(a,b) {
            console.log("The diff is :"+(a-b))
            return a+b
        }
        function multiply(a,b) {
            console.log("The multiply is :"+(a*b))
            return a/b
        }
        function divide(a,b) {
            console.log("The divide is :"+(a/b))
            return a**b
        }
    }
    else{
        function sum(a,b) {
            console.log("The sum is :"+(a-b))
            return a-b
        }
        function diff(a,b) {
            console.log("The diff is :"+(a+b))
            return a+b
        }
        function multiply(a,b) {
            console.log("The multiply is :"+(a/b))
            return a/b
        }
        function divide(a,b) {
            console.log("The divide is :"+(a**b))
            return a**b
        }
    }


    console.log(sum(4,2))
    console.log(diff(4,2))
    console.log(multiply(4,2))
    console.log(divide(4,2))

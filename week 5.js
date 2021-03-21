function getGrade(marks){
    var marks=84;
    switch(true){
        case marks>=80:
        console.log ("A")
        break;
        case marks>=70 && marks <=79:
        console.log ("B")
        break;
        case marks>=60 && marks <=69:
        console.log ("C")
        break;
        case marks>=50 && marks <=59:
        console.log ("D")
        break;
        case marks<=49:
        console.log ("E")
        break;
        default:
        console.log ("F")
    }  
}
getGrade()
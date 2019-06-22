$(document).ready(function(){

    var counter = 0;
    var win= 0;
    var loss= 0;


    // function randomNum(min, max){
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max-min +1)) + min;
    // }
    for (var i = 0; i < )

    var targetNumber = 77;
    $("#diamond-img").text(targetNumber);

    var imageone= [1, 5, 10];
    var imagetwo= randomNum(0, 20, 30);
    var imagethree= randomNum(-1,-20,40);
    var imagefour= randomNum(25, 2, 4);

    // function reset (){
    //     counter = 0;
    //     $("#h1").html(targetNumber);
    //     targetNumber = randomNum(20,80);
    //     $("#playerscore").text(counter);
    //     imageone= randomNum(1, 5, 10);
    //     imagetwo= randomNum(0, 20, 30);
    //     imagethree= randomNum(-1,-20,40);
    //     imagefour= randomNum(25, 2, 4);
    // }

    $("#spinningd").on("click", function(){
        counter += imageone;
        winslose();
        $(playerscore).text(counter);
    });
    
    $("#diamond2").on("click", function(){
        counter += imagetwo;
        winslose();
        $(playerscore).text(counter);
    });
   
    $("#nwts").on("click", function(){
        counter += imagethree;
        winslose();
        $(playerscore).text(counter);
    });

    $("#blackdiamond").on("click", function(){
        counter += imagefour;
        winslose();
        $(playerscore).text(counter);
    });
     
    function winsloss (){

        if (counter === targetNumber){
            win += 1;
            alert("Gahh Damn Good Job!!!");
            $(win).text(win);
            reset();
        } else if (counter > targetNumber){
            loss += 1;
            alert("Pshhh You are sorry try again shawty!");
            $(loss).text(loss);
            reset();
        }
    }


});
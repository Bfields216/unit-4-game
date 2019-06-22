$(document).ready(function(){

    var counter = 0;
    var win= 0;
    var loss= 0;


    function randomNum(max){
        max = Math.floor(max);
        return Math.floor(Math.random() * (max +1));
    };
    // for (var i = 0; i < )

    var targetNumber = 77;
    $(".diamond-img").text(targetNumber);

    var imageone= randomNum(1,10);
        console.log(imageone);
    var imagetwo= randomNum(20,30);
        console.log(imagetwo);
    var imagethree= randomNum(1,20);
        console.log(imagethree);
    var imagefour= randomNum(25, 2);
        console.log(imagefour);

    function reset (){
        counter = 0;
        $("#h1").html(targetNumber);
        targetNumber = randomNum(20,80);
        $(".playerscore").text(counter);
        imageone= randomNum(1,10);
        imagetwo= randomNum(20, 30);
        imagethree= randomNum(20,40);
        imagefour= randomNum(25, 2);
    }

    $("#spinningd").on("click", function(){
        counter += imageone;
        winsloss();
        $(".playerscore").text(counter);
    });
    
    $("#diamond2").on("click", function(){
        counter += imagetwo;
        winsloss();
        $(".playerscore").text(counter);
    });
   
    $("#nwts").on("click", function(){
        counter += imagethree;
        winsloss();
        $(".playerscore").text(counter);
    });

    $("#blackdiamond").on("click", function(){
        counter += imagefour;
        winsloss();
        $(".playerscore").text(counter);
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
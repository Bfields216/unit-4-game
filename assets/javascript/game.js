$(document).ready(function(){
    //create varibles for the javascript file
    var counter = 0;
    var win= 0;
    var loss= 0;
    
    //here is the function that will call upon random numbers for each image
    function randomNum(min,max){
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max-min +1)) + min;};
    // function randomNum(max){
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max +1));
    // };
    // for (var i = 0; i < )
        // targetted number
    var targetNumber = 77;
    $(".diamond-img").text(targetNumber);
        //image values being choosen
    var imageone= randomNum(1,10);
        console.log(imageone);
    var imagetwo= randomNum(20,3);
        console.log(imagetwo);
    var imagethree= randomNum(1,21);
        console.log(imagethree);
    var imagefour= randomNum(40, 12);
        console.log(imagefour);

    
        //function to allow the image to output a number
    $("#spinningd").on("click", function(){
        counter += imageone;
        winsloss();
        $("#h3").text(counter);
    });
    
    $("#diamond2").on("click", function(){
        counter += imagetwo;
        winsloss();
        $("#h3").text(counter);
    });
   
    $("#nwts").on("click", function(){
        counter += imagethree;
        winsloss();
        $("#h3").text(counter);
    });

    $("#blackdiamond").on("click", function(){
        counter += imagefour;
        winsloss();
        $("#h3").text(counter);
    });
     
    function winsloss (){
        //this is the code to determine if you have reached the #'s choosen or if you went over
        if (counter === targetNumber){
            win++;
            alert("Gahh Damn Good Job!!!");
            $("#wins").text(win);
            reset();
        } else if (counter > targetNumber){
            loss++;
            alert("Pshhh You are sorry try again shawty!");
            $("#losses").text(loss);
            reset();
        }
    }
    //Here is the reset function to start the game over
    function reset (){
        counter = 0;
        $(".diamond-img").html(targetNumber);
        targetNumber = randomNum(min,max);
        $(".playerscore").text(counter);
        imageone= randomNum(min,max);
        imagetwo= randomNum(min,max);
        imagethree= randomNum(min,max);
        imagefour= randomNum(min,max);
    }

    $("#reset").on("click", function(){
        reset();
    })

});
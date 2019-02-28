

$(document).ready(function(){

    var radioVals = [];
    var correctVals = [ "George", "James", "William", "Picts", "Belgium", "Basque", "Richard", "Victoria"];
    var correct = 0;
    var wrong = 0; 
    var unanswered = 0;
    var title = "<h1>Oi, Guv!</h1><h3>An English history themed trivia quiz</h3><br/><br/>"
    var time = 60;

    setTimeout(timeUp, 1000 * 60);

    intervalId = setInterval(count, 1000);

    function count() {

        // DONE: increment time by 1, remember we cant use "this" here.
        time--;
      
        // DONE: Get the current time, pass that into the timeConverter function,
        //       and save the result in a variable.
        var converted = timeConverter(time);
        console.log(converted);
      
        // DONE: Use the variable we just created to show the converted time in the "display" div.
        $("#display").text("Time left: " + converted);
      }
      


    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
      
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
      
        if (minutes === 0) {
          minutes = "00";
        }
        else if (minutes < 10) {
          minutes = "0" + minutes;
        }
      
        return minutes + ":" + seconds;
      }
      
      


function timeUp(){

    var radioValue1 = $("input[name='13colonies']:checked").val();
    if(radioValue1){
        if(radioValue1 == correctVals[0]){
            correct++
           // radioVals.push(radioValue1);
          //  alert("You selected: " + radioValue1);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue2 = $("input[name='bible']:checked").val();
    if(radioValue2){
        if(radioValue2 == correctVals[1]){
            correct++;
        //    radioVals.push(radioValue2);
       //     alert("You selected: " + radioValue2);
        }
        else{
                wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue3 = $("input[name='normans']:checked").val();
    if(radioValue3){
        if(radioValue3 == correctVals[2]){
            correct++;
     //       radioVals.push(radioValue3);
    //        alert("You selected: " + radioValue3);
        }
        else{
            wrong++;
        }
    }
        else{
            unanswered++;
        }

    var radioValue4 = $("input[name='saxons']:checked").val();
    if(radioValue4){
        if(radioValue4 == correctVals[3]){
            correct++;
      //      radioVals.push(radioValue4);
     //       alert("You selected: " + radioValue4);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue5 = $("input[name='geo']:checked").val();
    if(radioValue5){
        if(radioValue5 == correctVals[4]){
            correct++;
       //     radioVals.push(radioValue5);
       //     alert("You selected: " + radioValue5);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue6 = $("input[name='lang']:checked").val();
    if(radioValue6){
        if(radioValue6 == correctVals[5]){
            correct++;
       //     radioVals.push(radioValue6);
       //     alert("You selected: " + radioValue6);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }

    var radioValue7 = $("input[name='crusade']:checked").val();
    if(radioValue7){
        if(radioValue7 == correctVals[6]){
            correct++;
        //    radioVals.push(radioValue7);
        //    alert("You selected: " + radioValue7);
        }
        else{
            wrong++;
        }
    }
     else{
        unanswered++;
    }

    var radioValue8 = $("input[name='victorian']:checked").val();
    if(radioValue8){
        if(radioValue8 == correctVals[7]){
            correct++;
        //    radioVals.push(radioValue8);
         //   alert("You selected: " + radioValue8);
        }
        else{
            wrong++;
        }
    }
    else{
        unanswered++;
    }


        $(".container").html(title + "Correct answers: " + correct + " Wrong answers: " + wrong + " Unfinished answers: " + unanswered);
    }

  //  $("input[type='radio']").click(function(){
   // });


});
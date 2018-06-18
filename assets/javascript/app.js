var time = 30;
var correctAnswer = 0;  
var incorrectAnswer = 0; 
var unanswered = 0;
var timer;


$(".center-start").show();
$(".center-finish").hide();
$(".top").hide();
$("form").hide();

$("#start-button").click(function() {
    event.preventDefault();
    $(".center-start").hide();
    $("#start-button").hide();
    $(".top").show();
    $("form").show();
    timer = setInterval (decrement, 1000);
  });

  $("#done-button").click(function() {
    event.preventDefault();
    $(".center-start").hide();
    $("#start-button").hide();
    $(".top").hide();
    $("form").hide();
    checkAnswers();
    clearInterval(timer);
    $(".center-finish").show();

    
  });

function decrement () {
        $("#time-left").html(time);
        time --;
        console.log(time);
            if (time === 0) {
                clearInterval(timer);
                checkAnswers ();
                $(".center-finish").show();
                $("form").hide();
                $(".top").hide();
            }
    }
function checkAnswers () {
    var selValue = $("#answer").val();    
        for(var i = 1; i <= 8; i++) { 
            var radios = document.getElementsByName('group'+i);
            for(var j = 0; j < 4; j++) { 
                var radio = radios[j];
                if(radio.value == "correct" && radio.checked) {
                    correctAnswer ++;
                }
                if(radio.value == "wrong" && radio.checked) {
                    incorrectAnswer ++;
                }
                if (radio.value != "wrong" || radio.value != "correct") {
                    unanswered = 8 - ( correctAnswer + incorrectAnswer);
                 }
                
            }
        } 
console.log("Correct: " + correctAnswer);
console.log("Wrong: " + incorrectAnswer);
console.log("No Answer: " + unanswered);
$("#correct-answers").append(correctAnswer);
$("#incorrect-answers").append(incorrectAnswer);
$("#unanswered").append(unanswered);
}




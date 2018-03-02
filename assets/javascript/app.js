var time = 5;
var start = $("#time-left").html(time);
var timer = setInterval (decrement, 1000);
    
    function decrement () {
        time --;
        $("#time-left").html(time);
        console.log(time);
            if (time === 0) {
                clearInterval(timer);
                
            }
}
 
// https://stackoverflow.com/questions/13935786/quiz-counts-radio-button-values



 let timeInSeconds = 1 * 60 + 30;

 const x = setInterval(function() {

     const minutes = Math.floor(timeInSeconds / 60);
     const seconds = timeInSeconds % 60;

     document.getElementById("timer").innerHTML = 
         (minutes < 10 ? "0" : "") + minutes + ":" + 
         (seconds < 10 ? "0" : "") + seconds;

     if (timeInSeconds <= 0) {
         clearInterval(x);
         document.getElementById("timer").innerHTML = "00:00";
     }
     timeInSeconds--;
 }, 1000);
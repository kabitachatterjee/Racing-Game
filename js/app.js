console.log("JS file linked");

var width = $(window).width();
console.log(width);
var countOfClicks1 = 0;
var countOfClicks2 = 0;
 winner = localStorage;
 console.log(winner.getItem('Mickey') );
 console.log(winner.getItem('Donald') );


$(window).keypress(function (e) {
  //countOfClicks++;

        if (e.keyCode === 32 && (width - (165 + countOfClicks1 * 150) >=280)) {
          countOfClicks1++;
          $("#hero1").css("margin-left","+=150px");
          winner.setItem('Mickey', countOfClicks1);

      }

  else if (e.keyCode === 122 && (width - (165 + countOfClicks2 * 150) >=280)) {
        countOfClicks2++;
        $("#hero2").css("margin-left","+=150px");
        winner.setItem('Donald', countOfClicks2);
    }

    else {
      location.reload();



}



});

// function reloadCode() {
//     if (window.location.hash.substr(1) == "triggerReloadCode") {
//         window.location.hash = "";
//         /* Statements */
//         console.log("hello");
//         console.log(winner.getItem('Mickey') );
//         console.log(winner.getItem('Donald') );
//         if( winner.getItem('Mickey') > winner.getItem('Donald') ){
//
//           console.log("Mickey won!!");
//         }
//         else if( winner.getItem('Donald') > winner.getItem('Mickey') ){
//           console.log("Donald won!!");
//         }
//         else {
//           console.log("It's a tie!!");
//         }
//
//     }
// }

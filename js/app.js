console.log("JS file linked");

let width = $(window).width();
console.log(width);
let countOfClicks1 = 0;
let countOfClicks2 = 0;
 winner = localStorage;


$(window).keypress(function (e) {

        if (e.keyCode === 109 && (width - (165 + countOfClicks1 * 150) >=280)) {
          countOfClicks1++;
          $("#hero1").css("margin-left","+=150px");
          winner.setItem('Mickey', countOfClicks1);

      }

  else if (e.keyCode === 100 && (width - (165 + countOfClicks2 * 150) >=280)) {
        countOfClicks2++;
        $("#hero2").css("margin-left","+=150px");
        winner.setItem('Donald', countOfClicks2);
    }

    else {
      location.reload();
      $(document).ready(function(){
        setWinner();
});
}



});
function setWinner(){
  console.log(winner);
  if( winner.getItem('Mickey') > winner.getItem('Donald') ){

            console.log("Mickey won!!");
          }
          else if( winner.getItem('Donald') > winner.getItem('Mickey') ){
            console.log("Donald won!!");
          }
          else {
            console.log("It's a tie!!");
          }

}

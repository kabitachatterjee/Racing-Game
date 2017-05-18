console.log("JS file linked");

let width = $(window).width();
let countOfClicksM = 0;
let countOfClicksD = 0;
 winner = localStorage;


$(window).keypress(function (e) {
  e.preventDefault();

        if (e.keyCode === 109 && (width - (165 + countOfClicksM * 150) >=280)) {
          countOfClicksM++;
          $("#hero1").css("margin-left","+=150px");
          winner.setItem('Mickey', countOfClicksM);

      }

  else if (e.keyCode === 100 && (width - (165 + countOfClicksD * 150) >=280)) {
        countOfClicksD++;
        $("#hero2").css("margin-left","+=150px");
        winner.setItem('Donald', countOfClicksD);
    }

    else {
      location.reload();
      $(document).ready(function(){
        setWinner();
        winner.clear();
});
}



});
function setWinner(){
  var msg = "";
  if( winner.getItem('Mickey') > winner.getItem('Donald') ){

            console.log("Mickey won!!");
            msg = "Mickey won!!";


          }
          else if( winner.getItem('Donald') > winner.getItem('Mickey') ){
            console.log("Donald won!!");
            msg = "Donald won!!";

          }
          else {
            console.log("It's a tie!!");
            msg = "It's a tie!!";

          }
          $('.message').append(msg);
          //alert(msg);

}

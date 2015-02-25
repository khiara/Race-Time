var choice;

$(document).ready(function(){
  $('.racer').on('click', function(e){
    e.preventDefault();
    $(this).prepend('<p>You picked</p>');
  });
  $('#Mopsy').on('click', function() {
    $('#TimmyPete').hide(); 
    choice = "Mopsy";
  });
  $('#TimmyPete').on('click', function() {
    $('#Mopsy').hide();
    choice = "TimmyPete";
  });
});

$('#game').on('click', function() {
  $(this).hide();
  var Animal = function(n, s, f) {
    this.name = n;
    this.speed = s;
    this.focus = f;
    this.position = 0;
    this.report = function() {
      return this.name + " is at " + this.position;
  };
  this.run = function() {
    if(this.focus > (Math.random() * 10)) {
      this.position += this.speed;
    }
  };
  }

  var turtle = new Animal("TimmyPete the Turtle", 2, 9.5);
  var rabbit = new Animal("Mopsy the Rabbit", 7, 2);
  var distance = 75;
  
  while(turtle.position < distance && rabbit.position < distance) {
    turtle.run();
    rabbit.run();
  };

  console.log(turtle.report());
  console.log(rabbit.report());

  var resultTurtle = (turtle.report());
  var resultRabbit = (rabbit.report());
  var message = resultTurtle + " while " + resultRabbit;
  var message2;

  if ((turtle.position > rabbit.position) && (choice == "TimmyPete")) {
    message2 = "TimmyPete wins! You are a champion racer!";
  } else if ((turtle.position > rabbit.position) && (choice == "Mopsy")) {  
    message2 = "TimmyPete wins! Sorry, Mopsy!";
  } else if ((rabbit.position > turtle.position) && (choice == "Mopsy")) {
    message2 = "You win! Mopsy is victorious!";
  } else {
    message2 = "Mopsy is the winner. Better luck next time!";
  }
   var resultMessage = message + " -- " + message2;

  $('#results p').append(resultMessage);     
});

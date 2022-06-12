$(function(){

$('.js-form').submit(e =>{
  e.preventDefault();

  //Create a variable for the input tag
  const userTextElement = $(e.currentTarget).find('#user-text');

  //Letting the input become text for p
  $('.js-display-user-text').text(`Item: ${userTextElement.val()}`);

  //make the input empty again
  userTextElement.val("");
})
})  
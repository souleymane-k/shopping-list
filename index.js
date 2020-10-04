/* create app where customer can 
1st add item
2nd check
3rd uncheck
4th remove

Use these methods: even.preventDefault(), togglesClass, .submit(), closest().
*/

$(function() {
/* when input and submit $ add item  () even.preventDefault, submit*/
    $('#js-shopping-list-form').on('submit', function(event){
        event.preventDefault();
         let userInput = $(event.currentTarget).find('#shopping-list-entry');
             $("#shopping-list-entry").text(`${userInput.val()}`);
               userInput.val("");
    });  
/* Added find item apply .toggleClass, click*/
  $(".shopping-item").on('click', '.shopping-item-toggle', function (event){
         event.preventdefault();
         $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
            

  });
  /* deleted and item  */
  $("shopping-item").on('click', '#shopping-item-delete',function(event){
      $(this).remove
  });
/* Line cross to the item () .closest */
  $( "li.shopping-item__checked" ).closest( "li" ).css( "text-decoration", "line-through");
  

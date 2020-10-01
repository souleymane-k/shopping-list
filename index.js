/* create app where customer can 
1st add item
2nd check
3rd uncheck
4th remove

Use these methods: even.preventDefault(), togglesClass, .submit(), closes().
*/

$(function() {
/* when input and submit $ add item  () even.preventDefault, submit*/
    $('.js-shopping-list-form').on('submit', function(event){
          event.preventDefault();
           let userInput = $(event.currentTarget).find('#shopping-list-entry');
               $("#shopping-list-entry").text(`${userInput.val()}`);
                 userInput.val("");
      });  
 /* Added item text.val() is added to the list () .toggleClass, click*/
    $("#shopping-item-toggle").on('click', '#shopping-item-toggle', function (event){
           event.preventdefault();
             $("#shopping-item").text($(event.shopping-item-toggle).text());
                $( "#shopping-item").toggleClass(button-label, addOrRemove)

    });
    /* deleted and item  */
    $("shopping-item").on('click', '#shopping-item-delete',function(event){
        $(this).remove
    });
/* Line cross to the item () .closest */
    $( "li.shopping-item__checked" ).closest( "li" ).css( "text-decoration", "line-through");
    
    

/*  if not wanted Item removed 
    $('ul').on('click', 'li', function(event) {
        this.remove(); 
      */      
  });

  /*  $(function() {
  
  $("button").click(function(event) {
    $("ul").append(
      "<li>" +
      ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    );
  });
  
  $('li').click(function(event) {
    this.remove();
  });
}); */


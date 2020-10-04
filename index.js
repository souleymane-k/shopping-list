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


   /* add li list of items with all values of botton and span*/            
               $("shopping-item").append(
                 <li>
                <span class="shopping-item">userInput</span>      
                 <div class="shopping-item-controls">
                   <button class="shopping-item-toggle">
                     <span class="button-label">check</span>
                   </button>
                   <button class="shopping-item-delete">
                     <span class="button-label">delete</span>
                   </button>
                 </div>
               </li>);
    }); 
    /* apply toggleClass */ 

  $('.shopping-item-toggle').on('click', '.shopping-item', function (event){
         event.preventDefault();
      $(this).closest('li').find('.shopping-item').toggleClass('.shopping-item__checked');
  });
  
  /* deleted and item  */
  $(".shopping-item-delete").on('click', '.shopping-item',function(event){
      $(this).closest('li').remove();
  });
/* Line cross to the item () .closest */
  $( "li.shopping-item__checked" ).closest( "li" ).css( "text-decoration", "line-through");
  
});
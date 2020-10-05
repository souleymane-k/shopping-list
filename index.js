/* create app where customer can 
1st add item
2nd check
3rd uncheck
4th remove

Use these methods: even.preventDefault(), togglesClass, .submit(), closest().
*/

$(function() {
/* when input and submit $ add item  () even.preventDefault, submit*/
     $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
         const userInput = $("#shopping-list-entry").val();
             $('#shopping-list-entry').val('');

   /* add li list of items with all values of botton and span*/            
               $('.shopping-list').append(`<li>
               <span class="shopping-item">${userInput}</span>      
                <div class="shopping-item-controls">
                  <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                  </button>
                  <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                  </button>
                </div>
              </li>`);
    }); 
  
  /* deleted and item  */
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
      $(this).closest('li').remove();
    });
/* apply toggleClass */ 
   $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
     $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

});
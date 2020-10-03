/* create app where customer can 
1st add item
2nd check
3rd uncheck
4th remove

Use these methods: even.preventDefault(), togglesClass, .submit(), closes().
*/

$(function() {
/* when input and submit $ add item  () even.preventDefault, submit*/
    $('#js-shopping-list-form').on('submit', function(event){
          event.preventDefault();
           const userInput = $("#shopping-list-entry").val();
              userInput.val("");
                 
      });  
    /* Added item text.val() is added to the list () .toggleClass, click*/
$('.shopping-list').append(
    `<li>
      <span class="shopping-item">${listItem}</span>
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
    $("shopping-item").on('click', '#shopping-item-delete',function(event){
        $(this).closest('li').remove();
    });
/* Line cross through the item () .closest */
$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

       
  




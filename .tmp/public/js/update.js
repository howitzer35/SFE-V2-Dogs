(function() {

   $(function() {

     let selected;

     //disable all input fields at first
     $("#updateDogForm :input").prop("disabled", true);
     $("#dog_id").on("change", function() {
       $("#updateDogForm :input").prop("disabled", false);
       selected = $(this).val();
       $.get("http://localhost:1337/dog/" + selected, function(dog) {

         //loop over the dog i got back from the api
         $.each(dog, function(key, val) {

           //find the input field that matches the name of the key
           let el = $('[name="' + key + '"]');

           //find the type of field that we selected
           let type = el.attr('type');

           //based on the type choose how we set the value
           switch (type) {
             case 'checkbox':
               el.attr('checked', 'checked');
               break;
             case 'radio':
               el.filter('[value="' + val + '"]').attr('checked', 'checked');
               break;
             default:
               el.val(val);
           }
         });
       })
     });

     $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 50
      });

   })
   $("#updateDogForm").validate({
     errorClass: "text-danger",
     rules: {
       name: {
         required: true,
         minlength: 1,
       },
       breed: {
         required: true,
       },
       sex: {
         required: true,
       },
       age: {
         required: true,
       },
       height_in_inches: {
         required: true,
       },
       weight_in_pounds: {
         required: true,
       },
     },
     messages: {
       first_name: {
         required: "this is required",
         minlength: "this is the new error"
       }
     }


   });
 })();

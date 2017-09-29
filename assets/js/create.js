(function(){

  $(function(){

    $("#addDogForm").validate({
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
        required: "success",
        minlength: "unsuccessful"
        },
      }
    })
  })

})();

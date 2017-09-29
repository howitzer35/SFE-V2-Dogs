(function(){

   $(function(){

      $('#dogTable').DataTable({
      dom: 'Bfrtip',
        buttons: [
            'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        colReorder: true,
        scrollX: true
    });

   })

 })();

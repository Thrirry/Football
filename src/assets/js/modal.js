$('#exampleModal').on('show.bs.modal', function(event) {
    var button = $(event.relatedTarget)
    var recipient = button.data('whatever')
    var modal = $(this)	
    // var watername = document.getElementById("tests").value
    // console.log(angular.element(document.getElementById('tests')).val());
    // console.log(angular.element(document.getElementById('#tests')).val());


    // var iEl = angular.element( document.querySelector( '#inputName').rows[0].cells.length);
    // console.log(iEl.val());

  //   var tdElem = document.getElementById ( "inputName" );
	 // var tdText = tdElem.textContent;
	 // console.log(tdText)

	 // console.log(document.getElementById("myTable").rows[3].cells.namedItem("inputName").innerHTML);


    // var id = angular.element( document.querySelector( '#inputID') );
    // console.log(id.val());

    // modal.find('.modal-title').text('Edit ' + tdText + ' Product')//
    // modal.find('.modal-body input').text('' + iEl.val() + '')


})
// $('#my_modal').on('show.bs.modal', function(e) {
//     var bookId = $(e.relatedTarget).data('book-id');
//     $(e.currentTarget).find('input[name="bookId"]').val(bookId);
// });


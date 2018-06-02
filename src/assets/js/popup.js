var tbl = document.getElementById("tblWater");
        if (tbl != null) {
            for (var i = 0; i < tbl.rows.length; i++) {
                for (var j = 0; j < tbl.rows[i].cells.length; j++)
                    tbl.rows[i].cells[j].onclick = function () { getval(this); };
            }
    }

    function getval(cel) {
    // console.log((cel.innerHTML));

    $('#exampleModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var modal = $(this) 
        modal.find('.modal-title').text(cel.textContent + ' product')

    })

}


var tbl = document.getElementById("tblFood");
        if (tbl != null) {
            for (var i = 0; i < tbl.rows.length; i++) {
                for (var j = 0; j < tbl.rows[i].cells.length; j++)
                    tbl.rows[i].cells[j].onclick = function () { getval(this); };
            }
    }

    function getval(cel) {
    // console.log((cel.innerHTML));

    $('#exampleModal').on('show.bs.modal', function(event) {
        var button = $(event.relatedTarget)
        var modal = $(this) 
        modal.find('.modal-title').text(cel.textContent + ' product')

    })

}
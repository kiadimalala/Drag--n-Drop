export function dropBoard(){
    $('.board').each(function () {
        $(this).droppable({
            accept: '.task',
            drop: function (e, ui) {
                let droppedItem = $(ui.draggable)
                $(this).append(droppedItem)
            }
    
        })
    })
}
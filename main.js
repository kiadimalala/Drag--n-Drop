import {
    createBoard,
    id
} from './js/createBoard.js'
import {
    addTask
} from './js/addTask.js'

createBoard();
addTask()
$('.task').each(function () {
$(this).draggable({
helper: 'clone'
})
})

$('.board').each(function () {
    $(this).droppable({
        accept: '.task',
        drop: function (e, ui) {
            let droppedItem = $(ui.draggable)
            $(this).append(droppedItem)
        }

    })
})


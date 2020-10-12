
export function createBoard() {
    $(document).on('click', '#create', function () {
        let title = $('.title').val()
        if (title === '') {
            console.log('Saisir');
        } else {
            let board = `
                    <div  class=" board droppable text-gray-800 shadow-xl w-64 p-2 border-2 rounded-lg flex flex-col items-center h-auto mx-1 overflow-y-auto overflow-x-hidden ">
                    <h1 class="text-xl text-center">${title}</h1>
                    </div>
                   `
           $('.title').val(null)
            $('.main').append(board)
            $(document).find('.board')
            $('.droppable').droppable({
                accept:'.task',
                drop: function (e, ui) {
                    let droppedItem = $(ui.draggable)
                    $(this).append(droppedItem)
                }
            })
        }
    })
}
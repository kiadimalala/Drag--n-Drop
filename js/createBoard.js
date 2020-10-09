// export let id = 1
// export function addId(){
//     id++
// }
export function createBoard() {
    $(document).on('click', '#create', function () {
        let title = $('.title').val()
        if (title === '') {
            console.log('Saisir');
        } else {
            let board = `
                    <div  class=" board text-gray-800 shadow-xl w-64 p-2 border-2 rounded-lg flex flex-col items-center h-auto mx-1 ">
                    <h1 class="text-xl text-center">${title}</h1>
                    </div>
                   `
           $('.title').val(null)
            $('.main').append(board)

        }
    })
}
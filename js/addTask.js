export function addTask() {

    $(document).on('keypress', '#task', function (e) {
        let task = $('#task').val()
        let task_template = `
        <div class=" task break-words border w-56 bg-gray-400 my-1 rounded flex flex-col p-2 ">
        <button class="flex delete self-end w-4 h-4 focus:outline-none"><i class="fa fa-times text-center "
        aria-hidden="true"></i></button>
        <p class="">
         ${task}
        </p>
        </div>`
        if (task === '') {
            console.log('saisir');
        } else {
            if (e.which === 13) {
                e.preventDefault();
                $('#task').val(null)
                $('.board').first().append(task_template);
                $('.task').draggable({
                    helper:('clone')
                })
            
            }
        }


    })





}
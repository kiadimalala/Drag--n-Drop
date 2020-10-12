export function dragTask(){
    $('.task').each(function () {
        $(this).draggable({
        helper: 'clone'
        })
        })
}
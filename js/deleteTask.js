export function deleteTask(){
    $(document).on ('click','.delete',function(){
        $(this).parent().remove()
    })
}
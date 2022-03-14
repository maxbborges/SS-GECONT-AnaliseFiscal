$(document).ready(function () {
    init();
});

function init(){
    if (ATIVIDADE<4){
        $('#div_01').hide()
        $('#div_02').hide()
    } else {
        if (ATIVIDADE==10 || ATIVIDADE==12){
            
        } else {
            $('#div_00').hide()
        }
    }

    var statusPendencia = $("[name='analPendencia']").val()
    if (ATIVIDADE!=14 && ATIVIDADE!=27 && statusPendencia!="Não"){
        $('#div_02').hide()
    }
}
function validateForm(form) {
    var activity = getValue('WKNumState');
    if (activity == 4){
        if ((form.getValue("AnalNota") == null || form.getValue("AnalNota") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
            throw "Existe pendencia nas notas fiscais? n\u00E3o pode ser vazio.";
        }
    }

    if (activity == 14){
        if ((form.getValue("analPendencia") == null || form.getValue("analPendencia") == "") && (getValue('WKNumProces') == null || (getValue('WKNumProces') > 0 && getValue('WKCompletTask') == 'true'))) {
            throw "Existe pend\u00EAncia? n\u00E3o pode ser vazio.";
        }
    }
    
    
}
function enableFields(form) {
    var activity = getValue('WKNumState');
    if (activity != 4) {
        form.setEnabled('analNota', false);
        form.setEnabled('atxt_pendencia_01', false);
    }
    if (activity != 14) {
        form.setEnabled('analPendencia', false);
        form.setEnabled('atxt_pendencia_02', false);
    }
}
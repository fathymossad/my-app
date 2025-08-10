// Copyright (c) 2025, fathy and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student", {
    refresh(frm) {

    },
    onload: function (frm) {
        frm.fields_dict['inf_student'].grid.get_field('teacher').get_query = function (doc, cdt, cdn) {
            return {
                filters: {
                    is_active: 1
                }
            };
        };
    },

});



frappe.ui.form.on('Information Student', {

    inf_student_add: function (frm) {
        frappe.show_alert('Hi, you have added a new row!', 5);
    },
    appreciations: function (frm) {

    }

});

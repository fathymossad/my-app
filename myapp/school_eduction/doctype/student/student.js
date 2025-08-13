// Copyright (c) 2025, fathy and contributors
// For license information, please see license.txt

frappe.ui.form.on("Student", {

    refresh: function (frm) {
        if (!frm.is_new()) {
            frm.add_custom_button('Add Information', () => {
                let d = new frappe.ui.Dialog({
                    title: 'Add Student Information',
                    fields: [
                        {
                            label: 'Teacher',
                            fieldname: 'teacher',
                            fieldtype: 'Link',
                            options: 'Teacher',
                        },
                        {
                            label: 'Subject',
                            fieldname: 'subject',
                            fieldtype: 'Data',
                        },
                        {
                            label: 'Appreciations',
                            fieldname: 'appreciations',
                            fieldtype: 'Select',
                            options: ['Excellent', 'Good', 'Average', 'Poor'],
                        },
                        {
                            label: 'Grade',
                            fieldname: 'grade',
                            fieldtype: 'Int',
                        }
                    ],
                    primary_action_label: 'Submit',
                    primary_action(values) {
                        frm.add_child('inf_student', {
                            teacher: values.teacher,
                            subject: values.subject,
                            appreciations: values.appreciations,
                            grade: values.grade
                        });

                        frm.refresh_field('inf_student');
                        d.hide();
                    }
                });

                d.show();
            });
        }
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
    after_save: function (frm) {


    }

});



frappe.ui.form.on('Information Student', {

    inf_student_add: function (frm) {
        frappe.show_alert('Hi, you have added a new row!', 5);
    },

});

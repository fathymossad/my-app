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
                            get_query: function (doc, cdt, cdn) {
                                return {
                                    filters: {
                                        is_active: 1
                                    }
                                };
                            }
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
                            read_only: 1,
                        },
                        {
                            label: 'Grade',
                            fieldname: 'grade',
                            fieldtype: 'Int',
                            onchange: function () {
                                let grade = d.get_value('grade');
                                let appreciation = '';

                                if (grade >= 95 && grade <= 100) {
                                    appreciation = 'Excellent';
                                }
                                else if (grade >= 85 && grade < 95) {
                                    appreciation = 'Very Good';
                                } 
                                else if (grade >= 75 && grade < 85) {
                                    appreciation = 'Average';
                                } 
                                else if (grade >= 65 && grade < 75) {
                                    appreciation = 'Poor';
                                } 
                                else {
                                    appreciation = '';
                                }

                                d.set_value('appreciations', appreciation);
                            }
                        }
                    ],
                    primary_action_label: 'Submit',
                    primary_action(values) 
                    {
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
            }, 'Actions');
        }


        if (!frm.is_new() && frm.doc.docstatus === 0) {
            let has_poor = false;
            let has_good = false;

            frm.doc.inf_student.forEach(row => {
                if (row.appreciations === 'Poor') {
                    has_poor = true;
                } else if (['Excellent', 'Very Good', 'Average'].includes(row.appreciations)) {
                    has_good = true;
                }
            });

            if (!has_poor && has_good) {
                frm.add_custom_button('Transfer Student', () => {
                    frm.call({
                        method: 'create_new_student',
                        doc : frm.doc,
                    })
                }, 'Actions');
            }
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


    },


});



frappe.ui.form.on('Information Student', {

    inf_student_add: function (frm) {
        frappe.show_alert('Hi, you have added a new row!', 5);
    },
    
});

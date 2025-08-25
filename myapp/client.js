

// frappe.ui.form.on('Client Side Scripting TT', {
//  refresh: function (frm) {
//      if (frm.is_new()) {


//          frm.set_intro(" Now you can add new client ")


//      }


//      frm.add_custom_button('click me button 1', () => {
//          frappe.msgprint("you click me 1")


//      }, 'click me')
//      frm.add_custom_button('click me button 2', () => {
//          frappe.msgprint("you click me 2")


//      }, 'click me')
//  },
//  validate: function (frm) {


//      // frm.set_value('full_name', frm.doc.frist_name + " " + frm.doc.middle_name + " " + frm.doc.last_name)


//      let row = frm.add_child("family_member", {


//          name1: "Fathy Mossad",
//          relation: "ggggg",
//          age: 24,


//      })




//  },
//  enable: function (frm) {


//      frm.set_df_property('frist_name', 'reqd', 1)


//      frm.set_df_property('middle_name', 'read_only', 1)


//  }
//  // onload: function (frm) {
//  //  frappe.msgprint("i love python")
//  // }
// });




// frappe.ui.form.on('Client Side Scripting TT', {


//  // family_member_on_form_rendered: function (frm) {
//  //  frappe.throw("not availabel")
//  // },
//  // enable: function (frm) {


//  //  frappe.msgprint("uuuuuuuuuuu")
//  // },
//  // after_save: function (frm) {


//  //  frappe.msgprint(__("the full name is '{0}'",
//  //      [frm.doc.frist_name + " " + frm.doc.middle_name + " " + frm.doc.last_name]
//  //  ))
//  //  for (let row of frm.doc.family_member) {
//  //      frappe.msgprint(__("'{0}'. the name is '{1}' and the relation is '{2}' ",
//  //          [row.idx, row.name1, row.relation]
//  //      ))
//  //  }


//  // }






// });
// frappe.ui.form.on('Family Member', {


//  name1: function (frm) {
//      frappe.msgprint("mmmmmmmmmbbbbb")
//  },
//  age(frm, cdt, cdn) {
//      frappe.msgprint("l;lle;lqr;qw")
//  }
// })



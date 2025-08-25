# For license information, please see license.txt


import frappe
from frappe.model.document import Document


class ServerSideScriptingTT(Document):
   # def validate(self):
   #     frappe.msgprint("hallo python") 
      






   # def validate (self):
   #     frappe.msgprint(("the full name is '{0}'").format(
   #         self.frist_name + " " + self.middle_name + " " + self.last_name
   #   ))
      
   # def validate(self):
   # for row in self.get("family_member") :
   #       frappe.msgprint(("'{0}'. The name is '{1}' and The relation is '{2}' ").format(
   #           row.idx , row.name1 , row.relation
   #       ) )


 
      




   def validate (self):
       # self.get_document()
       # self.new_document()
       # self.delete_document()
       # self.save_document()
       self.get_list()








   # def get_document(self):
   #   doc=frappe.get_doc('Client Side Scripting TT',self.client_side_scripting)
   #   frappe.msgprint(("The frist Nmae is '{0}' and The Age is '{1}'").format(doc.frist_name , doc.age))


   #   for row in doc.get("family_member") :
   #       frappe.msgprint(("'{0}'. The name is '{1}' and The relation is '{2}' ").format(
   #           row.idx , row.name1 , row.relation
   #       ) )




   # def new_document(self):
   #   doc=frappe.new_doc('Client Side Scripting TT')
   #   doc.frist_name = 'fathy'
   #   doc.middle_name = 'mossad'
   #   doc.age = 13
   #   doc.append('family_member',{ "name1": "gggggggggg",
   #                                "relation":"hhhhhhhhhh",
   #                                "age": 23
   #   })
   #   doc.insert()








   # def delete_document(self):
   #   frappe.delete_doc("Client Side Scripting TT","PRE00010")   






          
   # def save_document(self):
   #   doc=frappe.new_doc('Client Side Scripting TT')
   #   doc.frist_name = 'Ahmedd'
   #   doc.middle_name = 'Zaid'
   #   doc.age = 13
   #   doc.save()






  


   def get_list(self):
       doc=frappe.db.get_list('Client Side Scripting TT',
                       filter={
                            "enable" : 1
                       })
      
      



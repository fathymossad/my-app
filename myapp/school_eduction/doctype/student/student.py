# Copyright (c) 2025, fathy and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class Student(Document):
	
	def validate (self) :
		self.validate_id()
		self.validate_grade()

		frappe.msgprint ("The Full Name is '{0}'".format(
			(self.first_name or '') + " " + (self.second_name or '') + " " + (self.third_name or '')
		))

		full_name = (self.first_name or '' ) + " " + (self.second_name or '' ) + " " + (self.third_name or '' ) 
		self.full_name =full_name



	def validate_id(self):
		if self.id:
			duplicate = frappe.db.exists("Student", {
				"id": self.id,
				"name": ["!=", self.name] 
			})

			if duplicate:
				frappe.throw(("Student ID '{0}' is already in use by another student.").format(self.id))

    

	def validate_grade(self):
		if self.inf_student:
			for row in self.inf_student:
				if not row.grade: 
					row.appreciations = ''
					continue

				grade_value = row.grade
				if 95 <= grade_value <= 100:
					row.appreciations = 'Excellent'
				elif 85 <= grade_value < 95:
					row.appreciations = 'Very Good'
				elif 75 <= grade_value < 85:
					row.appreciations = 'Average'
				elif 65 <= grade_value < 75:
					row.appreciations = 'Poor'
				else:
					row.appreciations = ''

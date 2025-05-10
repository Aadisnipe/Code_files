class Person:
    def __init__(self, name,roll_n0):
        self.name = name
        self.__roll_no=roll_n0
    def roll(self):
        print(self.__roll_no)

'''class Student(Person):
    def __init__(self,student_id):
       # super().__init__(name)  # Initialize name from parent
        self.student_id = student_id'''
stu1=Person("boba",90)
print(stu1.name)
stu1.roll()

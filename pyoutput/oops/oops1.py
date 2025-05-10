class Car:
    insurance="must be taken"
    def __init__(self,company,model):
        self.company=company
        self.model=model
    

    def milage(self):
        return self.model + " has milage of 100 km"
class Electriccar(Car):
    def __init__(self, company, model,batterycap):
        super().__init__(company, model)
        self.batterycap=batterycap
    def milage(self):
        return self.model + " has milage of " + self.batterycap + "kwh"
my_car=Car("tata","nano")
print(f"{my_car.company} {my_car.model}")
print(my_car.milage())
my_Evcar=Electriccar("tata","nexson","98")
print(my_Evcar.milage())
print(my_car.insurance)


class Pet:
    def __init__(self, name, tricks, health, energy):
        self.name = name
        self.tricks = tricks
        self.health = 100
        self.energy = 200
        def sleep():
            f"{self.name} is sleeping"
            return self
        def eat():
            print(f"{self.name} is eating")
            return self  
        def play():
            print(f"{self.name} is plaing")
            return self  
        def make_noise():
            print(f"{self.noise} is making noise")
            return self 

class Dog(Pet):
    def __init__(self,name, tricks, health, energy):
        super().__init__(name, tricks, health, energy)
        self.noise = "bark"

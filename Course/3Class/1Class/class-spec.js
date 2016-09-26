describe("Class in ", function() {
    
    describe("ES5: ", function() {
    
        xit("We will create a class using 'Functions'", function(){
            
            var e;
            
            function Employee(name) {
                
                this.name = name;
                
            }
            
            Employee.prototype.getName = function(){
                return this.name;
            }
            
            Employee.prototype.workStatus = function(){
                return "Completed";
            }
            
            e = new Employee();
            
            expect(e.workStatus()).toBe("Completed");
            
        });

    });
    
    describe("ES6: ", function() {
    
        xit("We will create a class using 'class' keyword", function(){
            
            let e;
            
            class Employee {
                
                constructor(name) {
                    this.name = name;
                }
                
                getName() {
                    return this.name;
                }
                
                workStatus() {
                    return "Completed";
                }
            }
                        
            e = new Employee("Scott");
            
            expect(e.getName()).toBe("Scott");
            expect(e.workStatus()).toBe("Completed");
            
        });
        
        
        xit("Getters and Setters", function(){
            
            let e;
            
            class Employee {
                
                constructor(name) {
                    this.empName = name;
                }
                
                get name() {
                    return this.empName; // Variable name and getter name should not be same
                }
                
                set name(value) {
                    this.empName = value;
                }
                
                workStatus() {
                    return "Completed";
                }
            }
                        
            e = new Employee("Scott");
            
            expect(e.name).toBe("Scott");
            e.name = "Tiger";
            expect(e.name).toBe("Tiger");
            //expect(typeof e.name).toBe("function");
            
        });

    });
  
});
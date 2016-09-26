describe("Inheritence in ", function() {
    
    describe("ES5: ", function() {

        it("We use function 'prototype' property", function(){

        });

    });
    
    
    describe("ES6 ", function() {
        
        class Person {
            
            constructor(name) {
                this.name = name;
            }
            
            get _name(){
                return this.name;
            }
            
            set _name(newValue){
                this.name = newValue;
            }
        }
        

        xit("We use 'extends' keyword", function(){
            
            class Employee extends Person{
                //Every employee "is-a" person 

                doWork() {
                    return `${this._name} is working.`;
                }

            }
            
            let e1 = new Employee('Scott'); // Person Constructor is calling;
            
            expect(e1.doWork()).toBe('Scott is working.');

        });
        
        
        xit("'super' keyword", function(){
            
            //Employee has name and title
            class Employee extends Person{
                
                constructor(title, name) {
                    //??
                    this.title = title;
                    
                }

                doWork() {
                    return `${this._name} is working.`;
                }

            }
            
            let e1 = new Employee('Mr.', 'Scott'); // Person Constructor is calling;
            
            expect(e1.doWork()).toBe('Scott is working.');

        });
        
        
        xit("Override parent functions", function(){
            
            //Employee has name and title
            class Employee extends Person{
                
                constructor(title, name) {
                    super(name);
                    this.title = title;
                    
                }

                doWork() {
                    return `${this._name} is working.`;
                }
                
                get _name() {
                    return `${this.title} ${super._name}`;
                }

            }
            
            let e1 = new Employee('Mr.', 'Scott'); // Person Constructor is calling;
            
            expect(e1._name).toBe('Mr. Scott');

        });

    });
  
});
describe("Arrow Functions ", function() {
    
    //Arrow functions are simplest form of functions
    
    let result;
    
    xit("with: No Parameters", function(){
        
        //function declaration
        let square = () => 2*2;
        
        result = square();
        
        expect(result).toBe(4);
    });
    
    
    xit("with: Single Parameter", function(){
        
        //function declaration
        let square = value => value*value; // (value) => value * value; //
        
        result = square(2);
        
        expect(result).toBe(4);
    });
    
    
    xit("with: Multiple Parameters & Multiline", function(){
        
        //function declaration
        let square = (value, square) => {
            let result = 1;
            for(let i = 0; i < square; i++){
                result *= value;
            }
            return result;
        };
        
        result = square(2, 2);
        
        expect(result).toBe(4);
    });
    
    
    xit("as: a Callback function", function(){
        
        let numbers = [1, 2, 3, 4, 5];
        let sum = 0;
        
        //General way
        numbers.forEach(function(value){
            sum += value;
        });
        
        expect(sum).toBe(15);
        
        
        //With arrow function
        sum = 0;
        
        numbers.forEach(value => sum += value);
        
        expect(sum).toBe(15);
    });
    
    
    it("using: in Asynchronus calls", function(){
        
        this.company = "Divami";
        
        
        //What is the solution for this??
        setTimeout(function(){
            console.log(this.company);
        }, 1000);
        
        setTimeout(() => {
            console.log(this.company);
        }, 1000);
        
        expect(this.company).toBe("Divami");
        
    });
    
});
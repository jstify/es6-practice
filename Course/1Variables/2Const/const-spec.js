describe("Const", function() {
    
    xit('is also a block level scoping', function(){
        let doWork = function(flag){
            if(flag){
                const PI = 3.14;
            }
            
            return PI;
        }
        
        let results = doWork(false);
        expect(results).toBe(3.14);
        
    });
    
    xit('is read only property', function(){
        
        const PI = 3.14;
        
        PI = 3.1428; // Some browsers will raise error
        
        expect(PI).toBe(3.1428);
        
    });
    
    describe("vs. Let :- ", function() {
        xit('We can not declare two variables with same name using let and const', function(){
            
            const MAX_SIZE = 20;
            
            let xMAX_SIZE = 10;
            
            expect(MAX_SIZE).toBe(20);
        });
    });
  
});
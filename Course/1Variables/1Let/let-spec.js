//Change let to var

describe("Var vs. Let:- ", function() {
    
    //Var testing
    describe("Var", function() {
        xit('can be accessed out side of brackets scope as it is function level scoping', function(){
            var doWork = function(flag){
                if(flag){
                    var x = 10;
                }
                return x;
            }

            var results = doWork(true);
            expect(results).toBe(10);
        });
    });
    
    
    //Let testing
    //Move return inside if
    //Set flag false
    describe("Let", function() {
        xit('can not be accessed out side of brackets scope', function(){
            var doWork = function(flag){
                if(flag){
                    let x = 10;
                }
                return x;
            }

            var results = doWork(true);
            expect(results).toBe(10);
        });
        
    });
});

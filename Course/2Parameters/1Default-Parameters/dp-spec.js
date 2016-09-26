describe("Default Parameters in ", function() {
    
    xdescribe("ES5:", function() {
        it("We have to use conditions to set default parameters", function(){
            var results,
                value,
                doWork;
                
            doWork = function(name){
                //It will assign a value everytime it fails the condition
                name = name || "scott";
                return name;
            }
            value = undefined; //"divami",  "", undefined, null, false, 0
            results = doWork(value);
            
            expect(results).toBe("scott");

        });
    });
    
    xdescribe("ES6:", function() {
        
        var results,
            value,
            doWork;

        doWork = function(name = "scott"){
            return name;
        }
        
        it("We no need to use conditions to set default parameters", function(){
            
            results = doWork();
            
            expect(results).toBe("scott");

        });
        
        
        xit("It will assign the value only when the parameter value is undefined", function(){
            
            value = undefined; //"divami",  "", undefined, null, false, 0
            results = doWork(value);
            
            expect(results).toBe("scott");
            
        });
    });
  
});
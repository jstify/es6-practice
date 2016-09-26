describe("Rest Parameters in ", function() {
    
    describe("ES5: ", function() {
    
        xit("We use arguments array", function(){
            var results,
                sum;
            
            sum = function(){
                var results = 0,
                    length = arguments.length,
                    i;
                for(i=0; i<length; i++){
                    results += arguments[i];
                }
                
                return results;
            }
            
            results = sum(2, 8, 10);
            expect(results).toBe(20);

        });

    });
    
    xdescribe("ES6: ", function() {
    
        it("We use last parameter preceeding with '...'", function(){
            var results,
                getTotalMarks;
            
            getTotalMarks = function(name, ...marks){
                var results = 0,
                    length = marks.length,
                    i;
                for(i=0; i<length; i++){
                    results += marks[i];
                }
                
                return `${name}: ${results}`;
            }
            
            results = getTotalMarks('Siva', 2, 8, 10);
            expect(results).toBe('Siva: 20');

        });

    });
  
});
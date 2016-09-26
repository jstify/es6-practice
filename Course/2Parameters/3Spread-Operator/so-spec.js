describe("Spread Operator in ", function() {
    
    describe("ES5: ", function() {

        xit("We can implement it using 'apply'", function(){
            let list = [2, 5, 10, 8, 20, 3, 6],
                max;
            
            max = Math.max.apply(null, list);
            expect(max).toBe(20);
        });

    });
    
    describe("ES6: ", function() {

        xit("We send array preceeding with '...'", function(){
            let list = [2, 5, 10, 8, 20, 3, 6],
                max;
            
            max = Math.max(...list); //We no need to do looping
            expect(max).toBe(20);
        });
        
        
        xit("Distributing array to variables", function(){
            let profile = ['Divami', 'Design', 7],
                result,
                getProfile;
            
            getProfile = function(name, type, age) {
                return `${name} is a ${type} company, is ${age} years old.`;
            };
            
            result = getProfile(...profile);
            
            expect(result).toBe('Divami is a Design company, is 7 years old.');
        });
        
        it("Inserting array in middle of other array", function(){
            let list1 = [4, 5, 6],
                list2 = [1, 2, 3, ...list1, 7,8,9];
                
            expect(list2.toString()).toBe("1,2,3,4,5,6,7,8,9");
        });

    });
  
});
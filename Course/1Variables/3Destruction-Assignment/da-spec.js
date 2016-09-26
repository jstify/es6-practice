describe("Destruction Assignment", function() {
    
    describe("using Array: ", function() {
        xit('We can assign values from Array to Variables  easily', function(){
            
            let [x, y] = [2, 3];
            
            expect(x).toBe(2);
            expect(y).toBe(3);

        });
        
        xit('We can assign custom index values from Array to Variables', function(){
            
            let arr = [1, 2, 3];
            let [, x, y] = arr;
            
            expect(x).toBe(2);
            expect(y).toBe(3);

        });
        
        
        xit('Swapping values', function(){
            
            let x = 2;
            let y = 3;
            
            [x, y] = [y, x]
            
            expect(x).toBe(3);
            expect(y).toBe(2);

        });
    });
    
    
    describe("using Object: ", function() {
        
        var employee = {
            'name' : 'Narendra',
            'title' : 'Developer',
            'report' : {
                'manager' : 'Vish',
                'officeManager' : 'Navin'
            }
        }
        
        xit('Assigning values from object to Variables', function(){
            
            let {name:name1, title:title1} = employee;
            
            expect(name1).toBe('Narendra');
            expect(title1).toBe('Developer');

        });
        
        
        xit('If parameter and variable names are same?', function(){
            
            let {name, title} = employee;
            
            expect(name).toBe('Narendra');
            expect(title).toBe('Developer');

        });
        
        xit('Accessing from object with in object', function(){
            
            let {name, title, report:{manager:reportingManager}} = employee;
            
            expect(name).toBe('Narendra');
            expect(title).toBe('Developer');
            expect(reportingManager).toBe('Vish');

        });
        
        
        xit('Usage Scenario', function(){
            
            let doWork = function(url, {data, cache}){
                return data;
            }
            
            let result = doWork('api/test',{
                'data' : 'success',
                'cache' : false
            });
            
            expect(result).toBe('success');

        });
        
    });
  
});
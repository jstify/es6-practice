describe("Generator ", function() {
    let sum = 0;
    it("is function that generate iterator", function(){
        
        let numbers = function*() {
            yield 1;
            yield 2;
            yield 3;
            yield 4;
            yield 5;
        }
        
        sum = 0;
        
        /*for(value of numbers){
            sum += value;
        }*/
        
        let iterator = numbers();
        let next = iterator.next();
        while(!next.done){
            sum += next.value;
            next = iterator.next();
        }
        
        expect(sum).toBe(15);
        
    });
    
    it("can recieve a value in next", function(){
        
        let next;
        let range = function*(start, end) {
            let current = start;
            
            while(current <= end){
                let next = yield current;
                current += next || 1;
            }
        }
        
        sum = 0;
        
        let iterator = range(10, 15);
        next = iterator.next();
        expect(next.value).toBe(10);
        next = iterator.next(2); 
        expect(next.value).toBe(12);
        
    });
  
});
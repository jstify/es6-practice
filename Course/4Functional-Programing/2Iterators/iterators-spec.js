describe("Iterators: ", function() {
    
    //[1, 2, 3, 4]: called as Iterables
    //map, forEach & filters are called as Iterators
    
    //Iterator will divide array
    /*{value: 1, done: false}
    {value: 2, done: false}
    {value: 3, done: false}
    {value: 4, done: false}
    {value: undefined, done: true}*/
    
    //Iterator will have next() it will return next object in the list
    
    let numbers = [1, 2, 3, 4];
    let sum = 0;
    let iterator, next;
    
    xit("Using built-in iterators", function(){
        
        numbers.forEach(n => sum += n);
        
        expect(sum).toBe(10);
        
        iterator = numbers[Symbol.iterator](); //numbers.values();
        
        sum = 0;
        next = iterator.next();
        console.log(next);
        
        while (!next.done) {
            sum += next.value;
            next = iterator.next();
            console.log(next);
        }
        
        expect(sum).toBe(10);
    });
    
    
    xit("for in - Loop through 'Index'", function(){
        
        sum = 0;
        for(let index in numbers) {
            sum += numbers[index];
        }
        
        expect(sum).toBe(10);
    });
    
    
    xit("for of - Loop through 'Values'", function(){
        
        //Note: It will call numbers[Symbol.iterator]() automatically
        
        sum = 0;
        for(let value of numbers) {
            sum += value;
        }
        
        expect(sum).toBe(10);
    });
    
    
    //For the iterator array is using Array Iterator
    //Lets build Array iterator
    
    
    xit("Build your own iterable", function(){
        
        class ArrayIterator {
            constructor(array) {
                this.array = array;
                this.index = 0;
            }

            next() {
                let results = {value: undefined, done: true};
                if(this.index < this.array.length){
                    results.value = this.array[this.index];
                    results.done = false;
                    this.index += 1;
                }
                return results;
            }
        };

        class Company {
            constructor() {
                this.employee = [];
            }

            addEmployee(...names) {
                this.employee = this.employee.concat(names);
            }

            [Symbol.iterator]() {
                return new ArrayIterator(this.employee);
            }
        };

        let divami = ['Raghu', 'Sasi', 'Suresh', 'Sandeep'];
        let index = 0;

        for (let name of divami) {
            index += 1;
            console.log(name);
        }
    
        expect(index).toBe(4);
    
        //Can we add multiple iterators to a class??
       
    });
  
});
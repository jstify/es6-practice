/*
 * Advantages:
 * We can eliminate single and double quotes with using backticks
 */
describe("Template Literals", function() {
    
    let category = "music",
        id = 2112;
    
    let result = "http://apiserver/music/2112";
    
    
    xit('Adding strings without Template Literals', function(){
        
        let url = "http://apiserver/" + category + "/" + id;
        
        expect(url).toBe(result);
        
    });
    
    
    xit('Adding strings with Template Literals', function(){
        
        /*
         * Advantages:
         * We can eliminate single and double quotes with using backticks
         */
        
        let url = `http://apiserver/${category}/${id}`;
        
        expect(url).toBe(result);
        
    });
    
    
    xit('Using Template Literals with functions', function(){
        
        let upper = function(strings, ...values) {
            let results = "",
                stringsLength = strings.length,
                valuesLength = values.length;
            for (let i = 0; i < stringsLength; i++) {
                results += strings[i];
                if (i < valuesLength) {
                    results += values[i];
                }
            }
            
            return results.toUpperCase();
            
        }
        
        var x = 3,
            y = 4;
        
        let results = upper `${x} + ${y} is ${x + y}`;
        
        expect(results).toBe("3 + 4 is 7");
        
    });
  
});
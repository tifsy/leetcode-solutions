/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let funcs = functions.reverse()
    
    return function(x) {
        for(let f of funcs) x = f(x)
        return x
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
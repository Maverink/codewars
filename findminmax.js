function getMinMax(arr){
    
    var max = arr.reduce(function(a,b){
    return Math.max(a,b);
    });
    
    
    var min = arr.reduce(function(a,b){
    return Math.min(a,b);
    });
    
    return [min,max];
    
    };
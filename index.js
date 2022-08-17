const receivesAFunction = sampleFn => console.log(sampleFn());
receivesAFunction(function() {"Awesome"});

const returnsANamedFunction = () => {
    let functionName = function(){};
    return functionName
}

const returnsAnAnonymousFunction = () => {
    return function(){}
}
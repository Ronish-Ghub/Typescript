function receiveNumbers( /*res-argument*/) {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // for(let i of args){
    //     console.log(i)
    // }
    args.forEach(function (i) { console.log(i); });
}
receiveNumbers(16, 94, 59, 49, 4);

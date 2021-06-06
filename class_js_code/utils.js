
// make it easy to reuse
var utils = function () {

    function isNull(...args) {
        return args.find(arg => arg === undefined || arg === null);
    }

    function isNotNull(...args) {
        return !this.isNull(args);
    }
}
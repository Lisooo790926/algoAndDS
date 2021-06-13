
// make it easy to reuse
export class Utils {

    isNull(...args) {
        return args.find(arg => arg === undefined || arg === null);
    }

    isNotNull(...args) {
        return !this.isNull(args);
    }
}
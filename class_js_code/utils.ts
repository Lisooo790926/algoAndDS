
// make it easy to reuse
export class Utils {

    isNull(...args) {
        return !this.isNotNull(args);
    }

    isNotNull(...args) {
        return args.find(arg => arg !== undefined || arg !== null);
    }
}
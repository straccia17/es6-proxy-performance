/**
 * This function wrap the object inside a proxy
 * that measures execution time of the object's methods
 * and print them to the console.
 * 
 * @param {any} object object to wrap inside a proxy
 */
export const monitorPerformance = object => {
    return new Proxy(object, {
        get: (target, propName) => {
            const origProp = target[propName];
            if (!origProp) return;
            if (typeof origProp !== 'function') return;

            return (...args) => {
                const label = `${target.constructor.name} - ${propName}`;
                console.time(label);
                const result = origProp.apply(target, args);
                console.timeEnd(label);
                return result;
            }
        }
    });
};
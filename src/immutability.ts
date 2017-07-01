export namespace ImmutabilityUtils {
  
  export function deepCopy (data: Object) {
    return JSON.parse(JSON.stringify(data));
  }

}

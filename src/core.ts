export namespace CoreUtils {
  
  export function deepCopy (data: Object) {
    return JSON.parse(JSON.stringify(data));
  }

}

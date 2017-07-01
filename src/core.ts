export namespace CoreUtils {

  /**
   * @deprecated
   * Use the method in ImmutabilityUtils
   */
  export function deepCopy (data: Object) {
    return JSON.parse(JSON.stringify(data));
  }

}

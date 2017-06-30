export namespace WebUtils {

  export function urlJoin(partOne, partTwo): string {

    partOne = partOne.toString();
    partTwo = partTwo.toString();

    // TODO: query parameter part

    if (partOne.charAt(partOne.length - 1) === '/') {
      if (partTwo.charAt(0) === '/') {
        return partOne.substring(0, partOne.length - 1) + partTwo;
      } else {
        return partOne + partTwo;
      }
    } else {
      if (partTwo.charAt(0) === '/') {
        return partOne + partTwo;
      } else {
        return partOne + '/' + partTwo;
      }
    }

  }

}

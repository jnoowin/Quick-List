const dayjs = require("dayjs");
const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

export function DateBinarySearch(objArr, targetDate) {
  let start = 0,
    end = objArr.length - 1,
    mid;
  // if targetDate is less than the beginning of the array, return 0
  if (dayjs(objArr[start].date, "M-D-YYYY").isSameOrAfter(targetDate)) {
    return start;
  }
  // if target date is greater than the end of the array, return end + 1
  if (dayjs(objArr[end].date, "M-D-YYYY").isSameOrBefore(targetDate)) {
    return end + 1;
  }

  // binary search for appropriate position
  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    let arrDate = dayjs(objArr[mid].date, "M-D-YYYY");

    if (arrDate.isBefore(targetDate)) {
      start = mid + 1;
    } else if (arrDate.isAfter(targetDate)) {
      end = mid - 1;
    } else {
      break;
    }
  }
  return mid;
}

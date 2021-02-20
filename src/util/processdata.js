export default function GroupByCat(data) {
  var result = {};
  data.forEach((item) => {
    if (!result.hasOwnProperty(item.category)) {
      result[item.category] = {};
    }
    if (!result[item.category].hasOwnProperty(item.subcategory)) {
      result[item.category][item.subcategory] = [];
    }
    result[item.category][item.subcategory].push(item);
  });
  return result;
}

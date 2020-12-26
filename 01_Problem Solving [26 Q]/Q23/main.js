console.log('Problem Solving Q:23 ');

/*parseQueryString   */

/*  
Given a properly formatted URL, return the query string data as an array of key-value pairs, 
in the order that they appear.
If the url does not contain a query string, return undefined
*/

function parseQueryString(string) {
  const arrStr = string.split('%20').join(' ').split('?');
  if (arrStr.length > 1) {
    const arr = arrStr.pop().split('&');
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split('=');
    }
    return arr;
  }
  return undefined;
}
// OR 
function getQueryString(url) {
  if (url.indexOf('?') === -1) return;
  let result = [];
  url
    .split(/[&?]/)
    .slice(1)
    .forEach(str => {
      let tuple = str.split('=');
      tuple[1] = decodeURIComponent(tuple[1]);
      result.push(tuple);
    });
  return result;
}
/*
Examples:
parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

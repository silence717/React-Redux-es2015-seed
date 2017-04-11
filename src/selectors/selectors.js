/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-04-11
 */
export function authorsFormattedForDropdown(authors) {
  return authors.map(author => {
    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });
}

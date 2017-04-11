/**
 * @author  https://github.com/silence717
 * @desc []
 * @date 2017-04-11
 */
import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in a dropdown', () => {
      
      const authos = [
        {id: 'cory-house', firstName: 'Cory',  lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];
      
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];
      
      expect(authorsFormattedForDropdown(authos)).toEqual(expected);
    });
  });
});

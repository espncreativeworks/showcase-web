'use strict';

describe('Filter: fullDescription', function () {

  // load the filter's module
  beforeEach(module('espnCreativeworksShowcaseApp'));

  // initialize a new instance of the filter before each test
  var fullDescription;
  beforeEach(inject(function ($filter) {
    fullDescription = $filter('fullDescription');
  }));

  it('should return the "brief" and "extended" descriptions combined by a space', function () {
    var description = {
      brief: { 
        md: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 
        html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' 
      },
      extended: {  
        md: 'Sit temporibus dolor velit fugiat obcaecati reiciendis ea numquam modi atque non beatae ipsa saepe similique consectetur, nulla nam qui distinctio iusto!',
        html: '<p>Sit temporibus dolor velit fugiat obcaecati reiciendis ea numquam modi atque non beatae ipsa saepe similique consectetur, nulla nam qui distinctio iusto!</p>'
      }
    };
    expect(fullDescription(description)).toBe(description.brief.html + ' ' + description.extended.html);
  });

  it('should return a plain-text version of the "brief" and "extended" descriptions combined by a space', function () {
    var description = {
      brief: { 
        md: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 
        html: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>' 
      },
      extended: {  
        md: 'Sit temporibus dolor velit fugiat obcaecati reiciendis ea numquam modi atque non beatae ipsa saepe similique consectetur, nulla nam qui distinctio iusto!',
        html: '<p>Sit temporibus dolor velit fugiat obcaecati reiciendis ea numquam modi atque non beatae ipsa saepe similique consectetur, nulla nam qui distinctio iusto!</p>'
      }
    };
    expect(fullDescription(description, { plaintext: true })).toBe(description.brief.md + ' ' + description.extended.md);
  });

});

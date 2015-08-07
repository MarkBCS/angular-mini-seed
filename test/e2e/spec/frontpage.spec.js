'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('AngularMiniSeedApp', function() {

  it('should show Hello world!', function() {
    browser.get('index.html');
    expect(element(by.cssContainingText('h1', 'Hello world!')).isPresent()).toBeTruthy();
  });

});

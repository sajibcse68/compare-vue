// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.hello')
      .assert.containsText('h1', 'Welcome to Your Vue.js App')
      .assert.elementCount('img', 1)
      .end();
  },

  'test form submission': (browser) => {
    // const devServer = browser.globals.devServerURL;
    // debugger;

    browser
      .url('http://localhost:8080/#/form');

    // console.log('browser: ', browser);

    browser.window_handles((resp) => {
      console.log('resp: ', resp);
      const handle = resp.value[0];
      // console.log('resp: ', resp);
      browser.switchWindow(handle);
    });

    browser
      .waitForElementVisible('body', 20000)
      .verify.elementPresent('#fname')
      .verify.elementPresent('#lname')
      .verify.elementPresent('#uname')
      .verify.elementPresent('#password')
      .verify.elementPresent('#email')
      .verify.elementPresent('#age')
      .verify.elementPresent('#gender')
      .verify.elementPresent('#submit');

    browser
      .saveScreenshot('/Users/sajib/Desktop/s1.png')
      .setValue('#fname', 'Sajib')
      .setValue('#lname', 'Khan')
      .setValue('#uname', 'sajibcse68')
      .setValue('#password', '123456')
      .setValue('#email', 'sajib@gmail.com')
      .setValue('#age', '123')
      .click('#male')
      .saveScreenshot('/Users/sajib/Desktop/s2.png')
      .screenshot();

    browser
      .pause(5000)
      .click('#submit')
      .end();
  }
};

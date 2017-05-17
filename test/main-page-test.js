/* jshint expr: true */
module.exports = {
  tags: ['main-page'],
  'test main-page' : function (client) {
    client
      .url('localhost:10000/main-page')
      .pause(500)
      .click('button[id=orderButton]')
      .pause(500)
      .click('button[id=drinks]')
      .pause(500)
      .click('img[id=Plus20]')
      .pause(500)
      .click('button[id=add2Cart20]')
      .pause(500)
      .click('img[id=cart]')
      .pause(500)
      .setValue('input[id=cusName]', 'name')
      .pause(500)
      .click('button[id=checkout]')
      .pause(500)
      .acceptAlert()
      .pause(3000);
    
    client.expect.element('button[id=orderButton]').to.be.present;

    client.end();
  }
};
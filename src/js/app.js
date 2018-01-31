import './app2.js'

var template1 = require('./template/file.hbs');

const f = m => {
    console.log(m);
    $('#app').html(template1({ var1: 'ciao'}));
}
f("Hello World!");
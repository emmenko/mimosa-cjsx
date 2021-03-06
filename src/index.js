"use strict";

var config = require( "./config" )
  , getExtensions = function ( mimosaConfig ) {
    return mimosaConfig.cjsx.extensions;
  };

var compile = function ( mimosaConfig, file, cb ) {
  var output
    , error
    , text = file.inputFileText
    , options = mimosaConfig.cjsx.options;

  try {
    output = mimosaConfig.cjsx.lib.compile( text, options );
  } catch ( err ) {
    error = err;
  }

  cb( error, output );
};

module.exports = {
  name: "cjsx",
  compilerType: "javascript",
  compile: compile,
  extensions: getExtensions,
  defaults: config.defaults,
  placeholder: config.placeholder,
  validate: config.validate
};

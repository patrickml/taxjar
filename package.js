Package.describe({
  name: 'patrickml:taxjar',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Async Wrapper for Taxjar Tax Rate Lookup',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/patrickml/taxjar',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('taxjar.js', 'server');
  api.export([
    'Taxjar',
    'TaxjarConnect'
  ], 'server');
});

Npm.depends({
  taxjar: '1.0.0'
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('patrickml:taxjar');
  api.addFiles('taxjar-tests.js');
});

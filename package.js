Package.describe({
  "summary": "Server Side Rendering for Meteor with Blaze",
  "version": "2.2.0",
  "git": "https://github.com/meteorhacks/meteor-ssr",
  "name": "meteorhacks:ssr"
});

Package.onUse(function(api) {
  configurePackage(api);
  api.export(['Template', 'SSR'], ['server']);
});

Package.onTest(function(api) {
  configurePackage(api);
  api.use([
    'tinytest'
  ], 'server');

  api.addFiles([
    'test/base.js'
  ], 'server');
});

function configurePackage(api) {
  api.versionsFrom('METEOR@3.4');
  api.use(['blaze', 'spacebars', 'spacebars-compiler', 'mongo', 'random'], 'server');
  api.addFiles([
    'lib/overrides.js',
    'lib/template.js',
    'lib/dynamic.js',
    'lib/api.js',
  ], 'server');
}

function fn() {
  var env = karate.env;

  var config = {
    env: env,
    urlBase: 'https://petstore.swagger.io'
  }

  return config;
}
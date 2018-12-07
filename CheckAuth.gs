var API_KEY = Config().api_key;

function isAuthorized(e) {
  return 'key' in e.parameters && e.parameters.key[0] === API_KEY;
}

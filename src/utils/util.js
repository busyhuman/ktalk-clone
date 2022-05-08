export function log (msg) {
  if( process.env.NODE_ENV === 'development'){
    console.log(msg);
  }
}

export function isNull (str) {
  if( str === '' || str === undefined || str === null) {
    return true
  }
  return false;
}
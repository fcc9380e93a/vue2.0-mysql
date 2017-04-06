//sessionstorage

var Global = (typeof window !== 'undefined' ? window : global)

export default{
  name: 'sessionStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
}

function sessionStorage(){
  return Global.sessionStorage
}

function read(key){
  return sessionStorage().getItem(key);
}

function write(key,data){
  return sessionStorage().setItem(key,data);
}

function each(fn){
  for(let i=sessionStorage().length-1;i>=0;i--){
    var key = sessionStorage().key(i);
		fn(read(key), key);
  }
}

function remove(key){
  return sessionStorage().removeItem(key);
}

function clearAll(){
  return sessionStorage().clear();
}

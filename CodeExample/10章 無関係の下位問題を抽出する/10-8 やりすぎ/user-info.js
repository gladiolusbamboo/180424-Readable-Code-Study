// やりすぎ
const userInfo = { username: "Yuji Koyama", password: "give me caloriemate"};
const url = "http://example.com/?user_info=" + urlSafeEncryptObj(userInfo);

function urlSafeEncryptObj(obj){
  const objStr = json.dumps(obj);
  return urlSafeEncryptStr(objStr);
   
}

function urlSafeEncryptStr(date){
  const encrypted_bytes = encrypt(data);
  return base64.urlsafeB64encode(encrypted_bytes);  
}

function encrypt(data){
  const cipher = makeCipher();
  let encrypted_bytes = cipher.update(data);
  encrypted_bytes += cipher.finale(); // 残りをフラッシュする
  return encrypted_bytes;
}

function makeCipher(){
  return Cipher("aes_128_cbc", "key=PRIVATEKEY, init_vector=INIT_VECTOR, op=ENCODE");
}
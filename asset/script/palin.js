document.getElementById("btn").addEventListener("click",function(){

    let txt = document.getElementById("input-text").value;
    checkPalindrome(txt);
  });

  function checkPalindrome(txt){

    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halfLength = Math.floor( len/2 );
    let result =document.getElementById("result");
    let i;
  
    for( i = 0; i < halfLength; i++){
        if( txt_new[i] !== txt_new[len-1-i]){
            result.textContent = "Not a palindrome";
            return;
        }
        result.textContent = "It's a palindrome"
    }
  }
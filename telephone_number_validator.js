function telephoneCheck(str) {
    let phone = str.replace(/\D/g, "")
    let result
    let test10
    let test11
    if (phone.length == 10
        && str.substr(0,1)=="(" 
        && str.substr(4,1)==")" 
        || str.substr(4,3) == phone.substr(4,3)) { 
            if(str.substr(6,1)==phone.substr(6,1)){
                test10=true
            }           
        } else { test10=false}


    if(phone.length == 11 && str.substr(0,1) == 1) { 
        if(str.substr(2,1)==="(" && str.substr(6,1)===")"
        || str.substr(1,1)==="(" && str.substr(5,1)===")"
        || str.substr(1,1)===" " && str.substr(5,1)===" "
        || str.substr(1,1)===" " && str.substr(5,1)==="-"){
            test11=true
        } else{test11=false}
    }
        
    if(phone.length == 10 && test10 == true 
    || phone.length == 11 && test11 == true){
       result = true
   } else { result = false}
  
  return result;
}

telephoneCheck("(555)5(55?)-5555");
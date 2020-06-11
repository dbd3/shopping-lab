function fact(num){
    if(num == 1){
        return 1
    } else {
        num * fact(num - 1)
        console.log(num)
    }


}
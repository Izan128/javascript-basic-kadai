let num;
num = 22;

if (num % 3 == 0 && num % 15 != 0) {
        console.log("3の倍数です");
}

else if (num % 5 ==0 && num % 15 != 0) {
    console.log("5の倍数です");
}

else if (num % 15 == 0){
    console.log("15の倍数です");
}

else {
    console.log(num);
}
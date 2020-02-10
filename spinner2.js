

process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 100;
let animation = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r\|   ', '\r\/   ', '\r\-  ', '\r\\   '];

let spinner = function(){
  for (let i = 0; i < animation.length; i++ ) {
    setTimeout(() => {
      process.stdout.write(animation[i]);
    }, timer);
    timer += 200;
  }
}



const sentence = "hello from lighthouse labs";

let i = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i * 50)
  i++;
}

setTimeout(() => {
  console.log();
}, sentence.length * 51)
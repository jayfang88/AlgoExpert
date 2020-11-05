// Easy Q

// Time: O(n)
// Space: O(n)
function caesarCipherEncryptor(string, key) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';

    let newStr = '';
    for (let char of string) {
        let oldIdx = alpha.indexOf(char);
        let newIdx = (oldIdx+key) % 26;
        newStr += alpha[newIdx];
    }

    return newStr;
}


console.log(caesarCipherEncryptor('xyz', 2));       // => 'zab'
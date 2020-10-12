const clamp = [2 ** 31 * -1, 2 ** 31 - 1]

var reverse = function(x) {
    const invert = Math.abs(x).toString().split('').reverse().join('')
    const polar = x < 0 ? -1 : 1;
    const t = Number(invert) * polar
    
    if (t < clamp[0] || t > clamp[1]) return 0
    
    return t
};
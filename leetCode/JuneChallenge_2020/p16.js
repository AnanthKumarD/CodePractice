
/**
 * Link:- https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3362/
 */


/**
 * @param {string} IP
 * @return {string}
 */
var validIPAddress = function(IP) {
    var re = new RegExp('(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])', 'g');
    var re1 = new RegExp('((([0-9a-fA-F]){1-4})\\:){7}(([0-9a-fA-F]){1-4})')
    if(IP.match(re) != null) return "IPv4";
    if(IP.match(re1) !=null) return "IPv6"
    return "Neither";
};
console.log(validIPAddress("260.25.254.233"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("256.256.256.256"));
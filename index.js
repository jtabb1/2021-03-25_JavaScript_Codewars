/*

Problem Statement:

Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

ALGORITHMSBITSBINARY

*/

// My solution, adapted from the binary sum function from
// freecodecamp
var countBits = function(n) {
    let numOfOnes = 0;
    while ( n > 0 ) { 
        numOfOnes = ( n % 2 ) + numOfOnes; 
        n = Math.floor( n / 2 ); }
    return numOfOnes;
  };

  /*

  Other's solutions:

  Bit Counting
118021687% of 14,08528,768 of 103,994xcthulhu
JavaScript
TRAIN AGAINNEXT KATA
Details
Solutions
Forks (7)
Discourse (225)
Collect|
How satisfied are you with this kata?VERYSOMEWHATNONE
Show Kata Description
Show Kata Test Cases
Show Me:
All Solutions
Solutions of Users I am FollowingMy Solutions
Sort By:
Best Practices
CleverNewestOldest
jimmy-ringo, HIQO trainee, mirko87, kevincab, tealovinpanda, ReginaldoBarbosa, gespenst.serge1997, ihateCruelWorld, usmforever, 2278292564 (plus 2 more warriors)
countBits = n => n.toString(2).split('0').join('').length;
2 similar code variations are grouped with this oneShow Variations

Best Practices499Clever1224
33ForkCompare with your solutionLink
DarkoKukovec, FunGuy, saiful_coder, zuka123456, zasqdw, vik1989, edgara106, Unhaappyref, spitefulcoder, user6563946 (plus 2 more warriors)
function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}
1 similar code variation is grouped with this oneShow Variations

Best Practices118Clever551
25ForkCompare with your solutionLink
m_x86, doughsay, meetandrew, ssineriz, JeroenBoersma, colbydauph, dresende, tsetsee_yugi, mafintosh, SpeCDK (plus 650 more warriors)
var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};
154 similar code variations are grouped with this oneShow Variations

Best Practices107Clever135
1ForkCompare with your solutionLink
joeylmaalouf, kplaza1987, Zorvete, kshitij0392, evgenygoldman, dumonxetang, michealsheggs, sergi-dev
var countBits = function(n)
{
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};
3 similar code variations are grouped with this oneShow Variations

Best Practices37Clever109
5ForkCompare with your solutionLink
Max Li
const countBits = n => n.toString(2)
                        .split('')
                        .filter(ele => ele == 1)
                        .length
Best Practices27Clever18
2ForkCompare with your solutionLink
ppgnutzmann, Raghu9972, fantactuka, colbyallenc, tajpanto, lordprat, Cheng Chen, KarynaB, Kerv917, alexeykuril0 (plus 41 more warriors)
var countBits = function(n) {
  var count = 0;
  while(n > 0){
    if(n%2 === 1) {
      count++;
    }
    n = Math.floor(n/2);
  }
  return count;
};
23 similar code variations are grouped with this oneShow Variations

Best Practices25Clever12
1ForkCompare with your solutionLink
noscripts, ksliu25, jgv, miziol39, dankan108, aister, RandyWeyer, Xplor8r, Agente, marzetz (plus 11 more warriors)
var countBits = function(n) {
  // Program Me
  return n.toString(2).split("").reduce((a,b) => parseInt(a)+parseInt(b),0);
};
16 similar code variations are grouped with this oneShow Variations

Best Practices21Clever12
2ForkCompare with your solutionLink
e-user
var countBits = function (n) {
  var bits = 0;
  for (; n; n >>= 1) {
    if (n & 1) bits++;
  }
  
  return bits;
};
Best Practices20Clever6
0ForkCompare with your solutionLink
Jart, Sever51, Human4uk, jp777, kabanvin, sidnevv, arisast, aurelielelevier
var countBits = function(n) {
  return n !== 0 ? n.toString(2).match(/1/g).length:0;
};
7 similar code variations are grouped with this oneShow Variations

Best Practices14Clever21
2ForkCompare with your solutionLink
tox-p, naiqum, Jaime, jerryye, steco, jdhp, devid-kuliev, mightymensa, gbodeen, segevlahav (plus 9 more warriors)
var countBits = function(n) {
  return n.toString(2).split('').reduce((a, b) => Number(a) + Number(b), 0);
};
15 similar code variations are grouped with this oneShow Variations

Best Practices8Clever5
0ForkCompare with your solutionLink
mrkishi, nice2bwise
var countBits = function (n) {
  // from http://graphics.stanford.edu/~seander/bithacks.html
  n = n - ((n >>> 1) & 0x55555555);
  n = (n & 0x33333333) + ((n >>> 2) & 0x33333333);
  return ((n + (n >>> 4) & 0xF0F0F0F) * 0x1010101) >>> 24;
};
1 similar code variation is grouped with this oneShow Variations

Best Practices7Clever44
8ForkCompare with your solutionLink
ckeller, vas3a, roxtonro, varod, MLE, dpellier, madmed88, sronnlund, drago, herostug (plus 449 more warriors)
var countBits = function(n) {
  return (n.toString(2).match(/1/g) || []).length;
};
107 similar code variations are grouped with this oneShow Variations

Best Practices6Clever9
1ForkCompare with your solutionLink
constablebrew, avesanen, jbjumbojb, Dammmien, argshook, JohnHanam, MarcelloDiSimone, haan, andrejev2006, pawelmhm (plus 399 more warriors)
var countBits = function(n) {
  return n.toString(2).split('1').length - 1;
};
148 similar code variations are grouped with this oneShow Variations

Best Practices4Clever2
3ForkCompare with your solutionLink
saylu
function countBits (n) {
  var arr = [];
  var count = 0;
  
  while (Math.pow(2, count) <= n) {
    arr.push(Math.pow(2, count));
    count++;
  }
  
  arr.reverse();
  count = 0;
  
  for (var i = 0; i < arr.length; i++) {
    if (n - arr[i] >= 0) {
      count++;
      n -= arr[i];
    }
  }
  
  return count;
}
Best Practices3Clever1
1ForkCompare with your solutionLink
brunolm, j.hn, Noi, ChibiKookie, LawlietBlack, flynntsc, superbuggy, IsaacAbrahamson, desperad07, Ethan Stewart (plus 46 more warriors)
const countBits = (n) => n.toString(2).replace(/0/g, '').length;
17 similar code variations are grouped with this oneShow Variations

Best Practices3Clever1
0ForkCompare with your solutionLink

*/

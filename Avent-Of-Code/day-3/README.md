## --- Day 3: Binary Diagnostic ---
<br />

The submarine has been making some odd creaking noises, so you ask it to produce a diagnostic report just in case.

The diagnostic report (your puzzle input) consists of a list of binary numbers which, when decoded properly, can tell you many useful things about the conditions of the submarine. The first parameter to check is the **power consumption**.

You need to use the binary numbers in the diagnostic report to generate two new binary numbers (called the `gamma rate` and the `epsilon rate`). The power consumption can then be found by multiplying the gamma rate by the epsilon rate.

Each bit in the gamma rate can be determined by finding the <kbd>most common bit in the corresponding position</kbd> of all numbers in the diagnostic report. For example, given the following diagnostic report:

<br />


```shell
00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010
```
<br />


Considering only the first bit of each number, there are five <kbd>0</kbd> bits and seven <kbd>1</kbd> bits. Since the most common bit is <kbd>1</kbd>, the first bit of the gamma rate is <kbd>1</kbd>.

<br />

The most common second bit of the numbers in the diagnostic report is <kbd>0</kbd>, so the second bit of the gamma rate is <kbd>0</kbd>.

<br />

The most common value of the third, fourth, and fifth bits are <kbd>1</kbd>, <kbd>1</kbd>, and <kbd>0</kbd>, respectively, and so the final three bits of the gamma rate are <kbd>110</kbd>.

<br />

So, the gamma rate is the binary number <kbd>10110</kbd>, or <kbd>22</kbd> in decimal.

<br />

The epsilon rate is calculated in a similar way; rather than use the most common bit, the least common bit from each position is used. So, the epsilon rate is <kbd>01001</kbd>, or <kbd>9</kbd> in decimal. Multiplying the gamma rate (`22`) by the epsilon rate (`9`) produces the power consumption, `198`.

<br />

Use the binary numbers in your diagnostic report to calculate the gamma rate and epsilon rate, then multiply them together. 


### **What is the power consumption of the submarine?** 
(Be sure to represent your answer in decimal, not binary.)
<hr />


<br />

## --- Part Two ---
<br />


Next, you should verify the life `support rating`, which can be determined by multiplying the `oxygen generator rating` by the `CO2 scrubber rating`.

Both the oxygen generator rating and the CO2 scrubber rating are values that can be found in your diagnostic report - finding them is the tricky part. Both values are located using a similar process that involves filtering out values until only one remains. Before searching for either rating value, start with the full list of binary numbers from your diagnostic report and **consider just the first bit** of those numbers. Then:

<br />

-   Keep only numbers selected by the bit criteria for the type of rating value for which you are searching. Discard numbers which do not match the bit criteria.
-   If you only have one number left, stop; this is the rating value for which you are searching.
-   Otherwise, repeat the process, considering the next bit to the right.

<br />


The `bit criteria` depends on which type of rating value you want to find:

<br />


-   To find `oxygen generator rating`, determine the `most common` value (<kbd>0</kbd> or <kbd>1</kbd>) in the current bit position, and keep only numbers with that bit in that position. If <kbd>0</kbd> and <kbd>1</kbd> are equally common, keep values with a <kbd>1</kbd> in the position being considered.

-   To find `CO2 scrubber rating`, determine the least common value (<kbd>0</kbd> or <kbd>1</kbd>) in the current bit position, and keep only numbers with that bit in that position. If <kbd>0</kbd> and <kbd>1</kbd> are equally common, keep values with a <kbd>0</kbd> in the position being considered.


For example, to determine the `oxygen generator rating` value using the same example diagnostic report from above:

<br />

-   Start with all 12 numbers and consider only the first bit of each number. There are more <kbd>1</kbd> bits (7) than <kbd>0</kbd> bits (5), so keep only the 7 numbers with a <kbd>1</kbd> in the first position: <kbd>11110</kbd>, <kbd>10110</kbd>, <kbd>10111</kbd>, <kbd>10101</kbd>, <kbd>11100</kbd>, <kbd>10000</kbd>, and <kbd>11001</kbd>.

-   Then, consider the second bit of the 7 remaining numbers: there are more <kbd>0</kbd> bits (4) than <kbd>1</kbd> bits (3), so keep only the 4 numbers with a <kbd>0</kbd> in the second position: <kbd>10110</kbd>, <kbd>10111</kbd>, <kbd>10101</kbd>, and <kbd>10000</kbd>.

-   In the third position, three of the four numbers have a <kbd>1</kbd>, so keep those three: <kbd>10110</kbd>, <kbd>10111</kbd>, and <kbd>10101</kbd>.

-   In the fourth position, two of the three numbers have a <kbd>1</kbd>, so keep those two: <kbd>10110</kbd> and <kbd>10111</kbd>.

-   In the fifth position, there are an equal number of <kbd>0</kbd> bits and <kbd>1</kbd> bits (one each). So, to find the `oxygen generator rating`, keep the number with a <kbd>1</kbd> in that position: <kbd>10111</kbd>.

-   As there is only one number left, stop; the `oxygen generator rating` is <kbd>10111</kbd>, or <kbd>23</kbd> in decimal.

<br />

Then, to determine the `CO2 scrubber rating` value from the same example above:
<br />

-   Start again with all 12 numbers and consider only the first bit of each number. There are fewer <kbd>0</kbd> bits (5) than <kbd>1</kbd> bits (7), so keep only the 5 numbers with a <kbd>0</kbd> in the first position: <kbd>00100</kbd>, <kbd>01111</kbd>, <kbd>00111</kbd>, <kbd>00010</kbd>, and <kbd>01010</kbd>.

-   Then, consider the second bit of the 5 remaining numbers: there are fewer <kbd>1</kbd> bits (2) than <kbd>0</kbd> bits (3), so keep only the 2 numbers with a <kbd>1</kbd> in the second position: <kbd>01111</kbd> and <kbd>01010</kbd>.

-   In the third position, there are an equal number of <kbd>0</kbd> bits and <kbd>1</kbd> bits (one each). So, to find the `CO2 scrubber rating`, keep the number with a <kbd>0</kbd> in that position: <kbd>01010</kbd>.

-   As there is only one number left, stop; the `CO2 scrubber rating` is <kbd>01010</kbd>, or <kbd>10</kbd> in decimal.

<br />

Finally, to find the life support rating, multiply the oxygen generator rating (<kbd>23</kbd>) by the CO2 scrubber rating (<kbd>10</kbd>) to get <kbd>230</kbd>.

Use the binary numbers in your diagnostic report to calculate the oxygen generator rating and CO2 scrubber rating, then multiply them together. 
### **What is the life support rating of the submarine?**
(Be sure to represent your answer in decimal, not binary.)
<hr />
















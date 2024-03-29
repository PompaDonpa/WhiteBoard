## --- Day 6: Lanternfish ---
<br />

The sea floor is getting steeper. Maybe the sleigh keys got carried this way?

A massive school of glowing ***`lanternfish`*** swims past. They must spawn quickly to reach such large numbers - maybe `exponentially` quickly? You should model their growth rate to be sure.

Although you know nothing about this specific species of lanternfish, you make some guesses about their attributes. Surely, each lanternfish creates a new lanternfish once every `7` days.


However, this process isn't necessarily synchronized between every lanternfish - one lanternfish might have 2 days left until it creates another lanternfish, while another might have 4. So, you can model each fish as a single number that represents `the number of days until it creates a new lanternfish`.

Furthermore, you reason, a new lanternfish would surely need slightly longer before it's capable of producing more lanternfish: two more days for its first cycle.

<br />

So, suppose you have a lanternfish with an internal timer value of 3:

<br />

-   After one day, its internal timer would become <kbd>2</kbd>.

-   After another day, its internal timer would become <kbd>1</kbd>.

-   After another day, its internal timer would become <kbd>0</kbd>.

-   After another day, its internal timer would reset to <kbd>6</kbd>, and it would create a new lanternfish with an internal timer of <kbd>8</kbd>.

-   After another day, the first lanternfish would have an internal timer of <kbd>5</kbd>, and the second lanternfish would have an internal timer of <kbd>7</kbd>.

<br />

A lanternfish that creates a new fish resets its timer to <kbd>6</kbd>, `not` <kbd>7</kbd> (because <kbd>0</kbd> is included as a valid timer value). The new lanternfish starts with an internal timer of <kbd>8</kbd> and does not start counting down until the next day.

<br />

Realizing what you're trying to do, the submarine automatically produces a list of the ages of several hundred nearby lanternfish (your puzzle input). For example, suppose you were given the following list:

<kbd>3,4,3,1,2</kbd>

This list means that the first fish has an internal timer of <kbd>3</kbd>, the second fish has an internal timer of <kbd>4</kbd>, and so on until the fifth fish, which has an internal timer of <kbd>2</kbd>. Simulating these fish over several days would proceed as follows:

<br />

```go
Initial state: 3,4,3,1,2
After  1 day:  2,3,2,0,1
After  2 days: 1,2,1,6,0,8
After  3 days: 0,1,0,5,6,7,8
After  4 days: 6,0,6,4,5,6,7,8,8
After  5 days: 5,6,5,3,4,5,6,7,7,8
After  6 days: 4,5,4,2,3,4,5,6,6,7
After  7 days: 3,4,3,1,2,3,4,5,5,6
After  8 days: 2,3,2,0,1,2,3,4,4,5
After  9 days: 1,2,1,6,0,1,2,3,3,4,8
After 10 days: 0,1,0,5,6,0,1,2,2,3,7,8
After 11 days: 6,0,6,4,5,6,0,1,1,2,6,7,8,8,8
After 12 days: 5,6,5,3,4,5,6,0,0,1,5,6,7,7,7,8,8
After 13 days: 4,5,4,2,3,4,5,6,6,0,4,5,6,6,6,7,7,8,8
After 14 days: 3,4,3,1,2,3,4,5,5,6,3,4,5,5,5,6,6,7,7,8
After 15 days: 2,3,2,0,1,2,3,4,4,5,2,3,4,4,4,5,5,6,6,7
After 16 days: 1,2,1,6,0,1,2,3,3,4,1,2,3,3,3,4,4,5,5,6,8
After 17 days: 0,1,0,5,6,0,1,2,2,3,0,1,2,2,2,3,3,4,4,5,7,8
After 18 days: 6,0,6,4,5,6,0,1,1,2,6,0,1,1,1,2,2,3,3,4,6,7,8,8,8,8
```
<br />

Each day, a <kbd>0</kbd> becomes a <kbd>6</kbd> and adds a new <kbd>8</kbd> to the end of the list, while each other number decreases by 1 if it was present at the start of the day.

In this example, after <kbd>18</kbd> days, there are a total of <kbd>26</kbd> fish. After 80 days, there would be a total of ***`5934`***.

<br />

Find a way to simulate lanternfish. 
### **How many lanternfish would there be after 80 days?**
<hr />

<br />






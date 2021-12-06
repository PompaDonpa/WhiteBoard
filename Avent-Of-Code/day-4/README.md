# --- Day 4: Giant Squid ---
<br />

You're already almost 1.5km (almost a mile) below the surface of the ocean, already so deep that you can't see any sunlight. What you can see, however, is a giant squid that has attached itself to the outside of your submarine.
<br />

Maybe it wants to play `bingo`?
<br />

Bingo is played on a set of boards each consisting of a 5x5 grid of numbers. Numbers are chosen at random, and the chosen number is `marked` on all boards on which it appears. (Numbers may not appear on all boards.) If all numbers in any row or any column of a board are marked, that board `wins`. (Diagonals don't count.)
<br />

The submarine has a `bingo subsystem` to help passengers (currently, you and the giant squid) pass the time. It automatically generates a random order in which to draw numbers and a random set of boards (your puzzle input). For example:

<br />

```go
7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

22 13 17 11  0
 8  2 23  4 24
21  9 14 16  7
 6 10  3 18  5
 1 12 20 15 19

 3 15  0  2 22
 9 18 13 17  5
19  8  7 25 23
20 11 10 24  4
14 21 16 12  6

14 21 17 24  4
10 16 15  9 19
18  8 23 26 20
22 11 13  6  5
 2  0 12  3  7
```

<br />

After the first five numbers are drawn (<kbd>7</kbd>, <kbd>4</kbd>, <kbd>9</kbd>, <kbd>5</kbd>, and <kbd>11</kbd>), there are no winners, but the boards are marked as follows (shown here adjacent to each other to save space):
<br />

```go
22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
```
<br />

After the next six numbers are drawn (<kbd>17</kbd>, <kbd>23</kbd>, <kbd>2</kbd>, <kbd>0</kbd>, <kbd>14</kbd>, and <kbd>21</kbd>), there are still no winners:

<br />

```go
22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
 ```
<br />

Finally, <kbd>24</kbd> is drawn:

<br />

```go
22 13 17 11  0         3 15  0  2 22        14 21 17 24  4
 8  2 23  4 24         9 18 13 17  5        10 16 15  9 19
21  9 14 16  7        19  8  7 25 23        18  8 23 26 20
 6 10  3 18  5        20 11 10 24  4        22 11 13  6  5
 1 12 20 15 19        14 21 16 12  6         2  0 12  3  7
 ```

<br />

At this point, the third board `wins` because it has at least one complete row or column of marked numbers (in this case, the entire top row is marked: <kbd>14</kbd> <kbd>21</kbd> <kbd>17</kbd> <kbd>24</kbd> <kbd>4</kbd>).

-   The `score` of the winning board can now be calculated. Start by finding the `sum of all unmarked numbers` on that board; in this case, the sum is <kbd>188</kbd>.

-   Then, multiply that sum by `the number that was just called` when the board won, <kbd>24</kbd>, to get the final score, <kbd>188 * 24 = 4512</kbd>.

<br />

To guarantee victory against the giant squid, figure out which board will win first. 
### **What will your final score be if you choose that board?**
<hr />

<br />


## --- Part Two ---
<br />

On the other hand, it might be wise to try a different strategy: let the giant squid win.

<br />

You aren't sure how many bingo boards a giant squid could play at once, so rather than waste time counting its arms, the safe thing to do is to `figure out which board will win last` and choose that one. That way, no matter which boards it picks, it will win for sure.

<br />

In the above example, the second board is the last to win, which happens after <kbd>13</kbd> is eventually called and its middle column is completely marked. If you were to keep playing until this point, the second board would have a sum of unmarked numbers equal to <kbd>148</kbd> for a final score of <kbd>148 * 13 = 1924</kbd>.

<br />

Figure out which board will win last. 
### **Once it wins, what would its final score be?**
<hr />

<br />














## --- Day 5: Hydrothermal Venture ---
<br />

You come across a field of ***`hydrothermal vents`*** on the ocean floor! These vents constantly produce large, opaque clouds, so it would be best to avoid them if possible.

They tend to form in `lines`; the submarine helpfully produces a list of nearby lines of vents (your puzzle input) for you to review. For example:

<br />

```shell
0,9 -> 5,9
8,0 -> 0,8
9,4 -> 3,4
2,2 -> 2,1
7,0 -> 7,4
6,4 -> 2,0
0,9 -> 2,9
3,4 -> 1,4
0,0 -> 8,8
5,5 -> 8,2
```

<br />

Each line of vents is given as a line segment in the format <kbd>x1,y1 -> x2,y2</kbd> where <kbd>x1</kbd>,<kbd>y1</kbd> are the coordinates of one end the line segment and <kbd>x2</kbd>,<kbd>y2</kbd> are the coordinates of the other end. These line segments include the points at both ends. In other words:
<br />

-   An entry like <kbd>1,1</kbd> -> <kbd>1,3</kbd> covers points <kbd>1,1</kbd>, <kbd>1,2</kbd>, and <kbd>1,3</kbd>.

-   An entry like <kbd>9,7 -> 7,7</kbd> covers points <kbd>9,7</kbd>, <kbd>8,7</kbd>, and <kbd>7,7</kbd>.

<br />

For now, `only consider horizontal and vertical lines`: lines where either <kbd>x1 = x2</kbd> or <kbd>y1 = y2</kbd>.

<br />

So, the horizontal and vertical lines from the above list would produce the following diagram:

<br />

```rust
.......1..
..1....1..
..1....1..
.......1..
.112111211
..........
..........
..........
..........
222111....
```

<br />

In this diagram, the top left corner is <kbd>0,0</kbd> and the bottom right corner is <kbd>9,9</kbd>. Each position is shown as `the number of lines which cover that point` or <kbd>.</kbd> if no line covers that point. The top-left pair of <kbd>1</kbd>s, for example, comes from <kbd>2,2 -> 2,1</kbd>; the very bottom row is formed by the overlapping lines <kbd>0,9 -> 5,9</kbd> and <kbd>0,9 -> 2,9</kbd>.

<br />

To avoid the most dangerous areas, you need to determine the `number of points where at least two lines overlap`. In the above example, this is anywhere in the diagram with a <kbd>2</kbd> or larger - a total of <kbd>5</kbd> points.

<br />

Consider only horizontal and vertical lines. 
### **At how many points do at least two lines overlap?**
<hr />

<br />

## --- Part Two ---
<br />

Unfortunately, considering only horizontal and vertical lines doesn't give you the full picture; you need to also consider `diagonal lines`.

Because of the limits of the hydrothermal vent mapping system, the lines in your list will only ever be horizontal, vertical, or a diagonal line at exactly 45 degrees. In other words:

<br />

-   An entry like <kbd>1,1 -> 3,3</kbd> covers points <kbd>1,1</kbd>, <kbd>2,2</kbd>, and <kbd>3,3</kbd>.

-   An entry like <kbd>9,7 -> 7,9</kbd> covers points <kbd>9,7</kbd>, <kbd>8,8</kbd>, and <kbd>7,9</kbd>.

<br />

Considering all lines from the above example would now produce the following diagram:

<br />

```rust
1.1....11.
.111...2..
..2.1.111.
...1.2.2..
.112313211
...1.2....
..1...1...
.1.....1..
1.......1.
222111....
```

<br />

You still need to determine the `number of points where at least two lines overlap`. In the above example, this is still anywhere in the diagram with a <kbd>2</kbd> or larger - now a total of <kbd>12</kbd> points.

Consider all of the lines. 
### **At how many points do at least two lines overlap?**
<hr />

<br />




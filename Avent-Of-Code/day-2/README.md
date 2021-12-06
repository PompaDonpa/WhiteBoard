## --- Day 2: Dive! ---
<br />


Now, you need to figure out how to pilot this thing.

It seems like the submarine can take a series of commands like <kbd>forward 1</kbd>, <kbd>down 2</kbd>, or <kbd>up 3</kbd>:

-   <kbd>forward X</kbd> increases the horizontal position by X units.
-   <kbd>down X</kbd> increases the depth by X units.
-   <kbd>up X</kbd> decreases the depth by X units.

Note that since you're on a submarine, <kbd>down</kbd> and <kbd>up</kbd> affect your depth, and so they have the opposite result of what you might expect.

The submarine seems to already have a planned course (your puzzle input). You should probably figure out where it's going. For example:


```shell
forward 5
down 5
forward 8
up 3
down 8
forward 2
```

Your horizontal position and depth both start at 0. The steps above would then modify them as follows:

-   <kbd>forward 5</kbd> adds `5` to your horizontal position, a total of `5`.
-   <kbd>down 5</kbd> adds `5` to your depth, resulting in a value of `5`.
-   <kbd>forward 8</kbd> adds `8` to your horizontal position, a total of `13`.
-   <kbd>up 3</kbd> decreases your depth by `3`, resulting in a value of `2`.
-   <kbd>down 8</kbd> adds `8` to your depth, resulting in a value of `10`.
-   <kbd>forward 2</kbd> adds `2` to your horizontal position, a total of `15`.

After following these instructions, you would have a horizontal position of `15` and a depth of `10`. (Multiplying these together produces `150`.)

Calculate the horizontal position and depth you would have after following the planned course. 

### **What do you get if you multiply your final horizontal position by your final depth?**
<hr />

<br />


## --- Part Two ---
<br />

Based on your calculations, the planned course doesn't seem to make any sense. You find the submarine manual and discover that the process is actually slightly more complicated.

In addition to horizontal position and depth, you'll also need to track a third value, `aim`, which also starts at <kbd>0</kbd>. The commands also mean something entirely different than you first thought:

-   <kbd>down X</kbd> increases your aim by <kbd>X</kbd> units.
-   <kbd>up X</kbd> decreases your aim by <kbd>X</kbd> units.
-   <kbd>forward X</kbd> does two things:
    -   It increases your horizontal position by <kbd>X</kbd> units.
    -   It increases your depth by your aim multiplied by <kbd>X</kbd>.

Again note that since you're on a submarine, <kbd>down</kbd> and <kbd>up</kbd> do the opposite of what you might expect: "down" means aiming in the positive direction.

Now, the above example does something different:

-   <kbd>forward 5</kbd> adds `5` to your horizontal position, a total of `5`. Because your aim is `0`, your depth does not change.
-   <kbd>down 5</kbd> adds `5` to your aim, resulting in a value of `5`.
-   <kbd>forward 8</kbd> adds `8` to your horizontal position, a total of `13`. Because your aim is `5`, your depth increases by `8*5=40`.
-   <kbd>up 3</kbd> decreases your aim by `3`, resulting in a value of `2`.
-   <kbd>down 8</kbd> adds `8` to your aim, resulting in a value of `10`.
-   <kbd>forward 2</kbd> adds `2` to your horizontal position, a total of `15`. Because your aim is `10`, your depth increases by `2*10=20` to a total of `60`.

After following these new instructions, you would have a horizontal position of `15` and a depth of `60`. (Multiplying these produces `900`.)

Using this new interpretation of the commands, calculate the horizontal position and depth you would have after following the planned course. 

### **What do you get if you multiply your final horizontal position by your final depth?**
<hr />



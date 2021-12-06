// csteffen

use std::cmp;

fn solution(inputArray: Vec<i32>) -> i32 {
    let mut changes = 0;
    let mut min = inputArray[0];
    for &n in inputArray[1..].iter() {
        min = cmp::max(n, min + 1);
        changes += min - n;
    }
    changes
}


// chris_w103

fn solution(inputArray: Vec<i32>) -> i32 {
    let mut result = 0;
    inputArray.iter().skip(1).fold(inputArray[0], |prev, &int| {
        if int <= prev {
            result += prev + 1 - int;
            return prev + 1;
        }
        return int;
    });
    result
}

// ejk

fn solution(mut x: Vec<i32>) -> i32 {
    let mut z: i32 = 0; 
    
    for i in 1..x.len() {
        if x[i]-x[i-1] <=0 {
            z += 1 + x[i-1]-x[i];
            x[i] = x[i-1] + 1;
        }
    }
    z
}


// elmt

fn solution(mut input_array: Vec<i32>) -> i32 {
    let mut total = 0;
    for i in 0..(input_array.len() - 1) {
        let current = input_array[i];
        let next = input_array[i + 1];
        if current >= next {
            total += current + 1 - next;
            input_array[i + 1] = current + 1;
        }
    }
    total
}


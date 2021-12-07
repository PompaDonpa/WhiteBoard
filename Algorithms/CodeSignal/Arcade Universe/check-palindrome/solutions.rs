// daniel
fn solution(s: String) -> bool {
    return s.chars().rev().collect::<String>() == s;
}


// kurganme
fn solution(inputString: String) -> bool {
    inputString.chars().rev().collect::<String>() == inputString
}


// chris_w30
fn solution(inputString: String) -> bool {
    let length = inputString.len() as i32;
    let half: i32;
    
    if isEven(length) {
        half = length / 2;
    } else {
        half = (length - 1) / 2;
    }
    
    inputString.bytes().take(half as usize).eq(inputString.bytes().rev().take(half as usize))
}

fn isEven(num: i32) -> bool {
    num % 2 == 0
}



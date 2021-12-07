// blablubqq
fn solution(inputString: String) -> String {
    let mut input = inputString.chars().collect::<Vec<_>>();
    let mut stack = Vec::new();
    
    for i in 0..inputString.len() {
        match input[i] {
            '(' => stack.push(i),
            ')' => input[stack.pop().unwrap() + 1..i].reverse(),
            _ => {},
        }
    }
    
    input.into_iter().filter(|&c| c != '(' && c != ')').collect()
}


// moushkka
fn f(instr: &mut std::str::Chars) -> String {
    let mut out = String::new();
    while let Some(c) = instr.next() {
        match c {
            '(' => {
                out.push_str(&f(instr).chars().rev().collect::<String>());
            },
            ')' => {
                break;
            },
            x => {
                out.push(x);  
            },
        }
    }
    out
}

fn solution(inputString: String) -> String {
    f(&mut inputString.chars())
}



// anier
fn solution(input: String) -> String {
    let mut stack = Vec::with_capacity(input.len());
    let mut result = String::with_capacity(input.len());

    for byte in input.as_bytes() {
        match *byte as char {
            ')' => {
                let mut rev_stack = Vec::new();
                loop {
                    match stack.pop().unwrap() {
                        '(' => break,
                        c => rev_stack.push(c),
                    }
                }

                stack.append(&mut rev_stack);
            }
            c => stack.push(c),
        }
    }

    for chr in stack {
        result.push(chr);
    }

    result
}


// kevin_c147
fn solution(inputString: String) -> String {
    let mut stack = vec![];
    let mut cur = String::new();
    for ch in inputString.chars() {
        match ch {
            '(' => {
                stack.push(cur);
                cur = String::new();
            }
            ')' => {
                let tmp = cur;
                cur = stack.pop().unwrap();
                for ch in tmp.chars().rev() {
                    cur.push(ch);
                }
            }
            _ => cur.push(ch),
        }
    }
    cur
}



// elmt
use std::str::Chars;

fn take_paren<'a>(chars: &mut Chars<'a>, above: bool) -> Result<String, char> {
    let mut s = String::new();
    while let Some(c) = chars.next() {
        match c {
            '(' => s.push_str(&take_paren(chars, true)?.chars().rev().collect::<String>()),
            ')' if !above => return Err(')'),
            ')' => return Ok(s),
            _ => s.push(c),
        }
    }
    Ok(s)
}

fn reverse_in_parentheses(input: String) -> Result<String, char> {
    take_paren(&mut input.chars(), false)    
}

fn solution(input: String) -> String {
    reverse_in_parentheses(input).unwrap()
}

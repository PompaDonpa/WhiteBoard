// alx_a

def solution(inputString: String): String =
  if (!inputString.contains("(")) inputString
  else {
    val a = inputString.lastIndexOf("(")
    val b = inputString.indexOf(")", a)
    solution(inputString.take(a) + inputString.slice(a + 1, b).reverse + inputString.drop(b + 1))
  }


// elsn

def solution(g: String): String = {
  if (!g.contains('(') ) g
  else{
    val R = g.indexOf(')')
    val L = g.indexOf(')')-g.take(g.indexOf(')')).reverse.indexOf('(')-1
    solution(g.take(L)+g.take(R).drop(L+1).reverse+g.drop(R+1))
  }
}


// atamurius

def solution(inputString: String): String = {
    var i = -1
    def process(buff: String): String = {
        i += 1
        inputString.lift(i) match {
            case None => buff
            case Some(')') => buff.reverse
            case Some('(') => process(buff + process(""))
            case Some(c) => process(buff + c) 
        }
    }
    process("")
}


// mechks

def solution(inputString: String): String = {
    val mt = "\\([a-z]*\\)".r
    var st = inputString
    while (st.contains('('))
        st = mt.replaceAllIn(st, s => s.matched.substring(1, s.matched.length-1).reverse)
    st
}



// nr-5

def solution(inputString: String): String = {
  if(!inputString.contains("(")){
    inputString
  } else {
    val a = inputString.substring(inputString.lastIndexOf("("))
    val start= inputString.substring(0,inputString.lastIndexOf("("))
    val end=a.substring((a.indexOf(")"))+1)
    val result=start+a.substring(1,a.indexOf(")")).reverse+end
    solution(result)
  }
}



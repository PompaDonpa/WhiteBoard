// Eduard_P_2

std::string solution(std::string s) {
  stack <int> st;
  for (int i = 0; i < s.size(); ++i) {
    if (s[i] == '(')
      st.push(i);
    if (s[i] == ')') {
      int start = st.top(); st.pop();
      reverse(s.begin() + start + 1, s.begin() + i);
    }
  }
  string ans;
  for (int i = 0; i < s.size(); ++i)
    if (s[i] !=  '(' && s[i] != ')')
      ans = ans + s[i];
  return ans;
}


// progheal

string solution(string inputString) {
    regex R ("\\(([^()]*)\\)");
    smatch m;
    while(regex_search(inputString, m, R))
        inputString = m.prefix().str() + string{make_reverse_iterator(m[1].second), make_reverse_iterator(m[1].first)} + m.suffix().str();
    return inputString;
}

// sir_emantaler

std::string solution(const std::string& input) {
    std::stack<std::string> s;
    s.emplace();
    for (const auto& c : input) {
        switch (c) {
            case '(':
                s.emplace();
                break;
            case ')': {
                std::string r(std::move(s.top()));
                s.pop();
                s.top().append(r.rbegin(), r.rend());
                break;   
            }
            default:
                s.top() += c;
        }
    }
    return s.top();
}

// rdpb

std::string solution(std::string inputString) {
    std::string curr = "";
    std::stack<std::string> st;
    
    for (auto a : inputString) {
        if (a == '(') {
            st.push(curr);
            curr = "";
        }
        else if (a == ')') {
            reverse(curr.begin(), curr.end());
            curr = st.top() + curr;
            st.pop();
        }
        else {
            curr = curr + a;
        }
    }
    
    return curr;
}



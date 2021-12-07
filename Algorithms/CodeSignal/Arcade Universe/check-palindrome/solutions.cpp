// chesia
bool solution(string is)
{
    return is == string(is.rbegin(), is.rend());
}


// Eduar_P_2
bool solution(std::string inputString)
{
    if (inputString.size() < 2)
        return true;
    if (inputString[0] != inputString.back())
        return false;
    return solution(inputString.substr(1, inputString.size() - 2));
}


// urandom
bool solution(std::string s)
{
    string x = s;
    reverse(s.begin(), s.end());
    return x == s;
}


// evan_r21
bool solution(std::string inputString)
{
    int i = 0;
    int j = inputString.length() - 1;

    while (i < j)
    {
        if (inputString[i] != inputString[j])
        {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

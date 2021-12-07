// rafael_j9
int solution(arr_integer a)
{
    int cont = 0;
    for (int i = 1; i < a.size; i++)
    {
        if (a.arr[i - 1] >= a.arr[i])
        {
            int aux = (a.arr[i - 1] - a.arr[i]) + 1;
            cont += aux;
            a.arr[i] += aux;
        }
    }
    return cont;
}



// deleted-wB
int solution(arr_integer a) {
    int result = 0 ; 
    for(int i = 1 ; i < a.size; i++)
    {
        if(a.arr[i] <= a.arr[i-1])
        {
            int b = a.arr[i-1]- a.arr[i] + 1;
            result += b;
            a.arr[i] = a.arr[i] + b; 
        }   
    }

    return result;
}


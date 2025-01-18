#include <iostream>
using namespace std;
int main()
{

    int n = 4;
    int arr[7] = {3, 0, 1, 0, 4 , 0, 2};

    int r = arr[0];
    int s = 0;
    int total = 0;
    int someCounter = 0;

    for (int i = 0; i < n; i++)
    {

       
        if (arr[i] < arr[i + 1])
        {

            if (r <= arr[i + 1])
            {
                total += s;
            }
            else
            {
                s -= someCounter * (r - arr[i + 1]);
                total += s;
            }
            r = arr[i + 1];
            someCounter=0;
             
            s=0; 
        }
         // case 1 :
     else  if (r > arr[i + 1])
        {
            s += r - arr[i + 1];
            someCounter++;
        }
    
    
    }
    printf("%d", total);
    return 0;
}

#include <stdio.h>
int main()
{
    int f_num,s_num;
    printf("Enter First Number:");
    scanf("%d", &f_num);
    printf("Enter Second Number:");
    scanf("%d", &s_num);
    f_num = f_num + s_num;
    s_num = f_num - s_num;
    f_num= f_num - s_num;
    printf("After Swapping First Number:%d\n",f_num);
    printf("After Swapping Second Number:%d",s_num);
    return 0;
}
#include<iostream>
#include<vector>
using namespace std;
int binary_search(vector<int> &arr,int low,int high ,int tar);
int main(){
    vector<int> arr={1,2,3,4,5,6,7,8,9,10};
    int tar=11;
    int n=sizeof(arr)/sizeof(int);
    int low=0,high=n-1;
    int ind=binary_search(arr,low,high,tar);
    cout<<ind;
    return 0;
}
int binary_search(vector<int> &arr,int low,int high ,int tar){
    if (low > high) {
        return -1;
    }
    int mid=low+(high-low)/2;
    if(tar==arr[mid])
    return mid;
    else if(tar>arr[mid])
    return binary_search(arr,mid+1,high,tar);
    else
    return binary_search(arr,low,mid-1,tar);
}
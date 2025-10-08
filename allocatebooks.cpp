#include<iostream>
#include<vector>
using namespace std;

bool isValid(vector<int> &arr ,int m,int n,int mid){
    int stu=1,pages=0;
    for(int i=0;i<n;i++){
        if(arr[i]>mid) return false;
        if(pages+arr[i]>mid){
            stu++;
            pages=arr[i];
        }else{
            pages+=arr[i];
            
        }
    }
    return stu<=m;
}
int allocatebooks(vector<int> &arr,int m,int n){
    if(m>n) return -1;
    int l=0;
    int ans=-1,h=0;
    for(int i:arr) h+=i;
    while(l<=h){
        int mid=l+(h-l)/2;

        if(isValid(arr,m,n,mid)){
            ans=mid;
            h=mid-1;
        }else{
            l=mid+1;
        }
    }
    return ans;
}
int main(){
    vector<int> arr={15,17,30};
    int m=2,n=arr.size();

    cout << allocatebooks(arr,m,n) << endl;
    return 0;
}
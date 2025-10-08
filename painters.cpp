#include<iostream>
#include<vector>
using namespace std;

bool isValid(vector<int> &arr ,int m,int n,int mid){
    int stu=1,pages=0;
    for(int i=0;i<n;i++){
        if(arr[i]>mid) return false;
        if(pages+arr[i]<=mid){
            pages+=arr[i];
        }else{
            stu++;
            pages=arr[i];
        }
        }
        return stu>m?false:true;
}
int painters(vector<int> &arr,int m,int n){
    int l=0;
    int ans=-1,sum=0;
    for(int i=0;i<n;i++) sum+=arr[i];
    int h=sum;
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
    vector<int> arr={5,3,4,2,1};
    int m=3,n=5;

    cout << painters(arr,m,n) << endl;
    return 0;
}
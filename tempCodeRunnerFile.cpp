#include <iostream>
using namespace std;

int main() {
	int n;
	for(int i=0;i<n;i++){
	    int a,b,x,y;
	    cin>>a>>b>>x>>y;
	    if(a*b > x*y){
	        cout<<"No"<<endl;
	    }
	    else{
	        cout<<"yes"<<endl;
	    }
	}
	return 0;
}

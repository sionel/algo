#include <iostream>
#include <math.h>
#include <sstream>
#include <string>  

using namespace std;

bool palindrome(int num);

int arra[1003002] = { 0 };

int main() {

	int num;
	cin >> num;

	if (num == 1) {
		num++;
	}

		for (int i = 2; i <= 1003002; i++) {
		arra[i] = i;
	}

	for (int i = 2; i <= sqrt(1003002); i++) {
		if (arra[i] == 0)
			continue;
		for (int j = i + i; j <= 1003002; j += i) {
			arra[j] = 0;
		}
	}
	
	for (int i = num; i <= 1003002; i++) {
		if (arra[i] != 0)
			if (palindrome(arra[i])) {
				cout << arra[i];
				return 0;
			}
	}
	
	return 0;
}

bool palindrome(int num) {
	int mid;
	string tmp,a,b;
	stringstream s;
	s << num;
	tmp = s.str();
	mid = tmp.length() / 2;
	for (int x = 0; x < mid; x++) {
		a = tmp.substr(x,1);
		b = tmp.substr(tmp.length() - x - 1 ,1);

		if (a != b) {
			return false;
		}
	}
	return true;
}
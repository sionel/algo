#include <iostream>
#include <string>

using namespace std;

#define maxstack 100000

class stack {

private:

	struct instack
	{    // 현재 스택의 값과 다음 스택의 주소값을 가진다
		instack* next = NULL;
		int num;
	};

	int top = 0; // 스택이 삽입 될 위치 top

	instack item[maxstack]; // 스택의 총 크기

public:
	void push(int num) {
		if (top == 0) {
			instack newstack;
			newstack.num = num;
			item[top++] = newstack;
		}
		// 스택이 비어있을 때
		// 전 스택이 없기에 주소지정을 해줄 필요가 없다        

		else if (top == maxstack) {
			cout << "스택이 가득 찼습니다" << endl;
		}
		// 스택이 가득찼을 때

		else {
			instack newstack;
			newstack.num = num;
			item[top - 1].next = &newstack;
			item[top++] = newstack;
		}
		// 전 스택의 next값에 이번 생성되는 스택의 주소를 넣어 주어야 한다
	}

	int pop() {
		int n;
		if (top == 0) {
			n = -1;
		}
		// 스택이 비어있으면 예외처리로 넘겨버린다

		else if (top == 1) {
			n = item[--top].num;
		}
		// 스택이 1개 있을시 그 전 스택이 없으므로 주소를 NULL값으로 줘야할게 없어진다.

		else {
			item[--top - 1].next = NULL;
			n = item[top].num;
		}
		// 스택이 2개 이상일땐 빼낼 스택 이전의 스택 주소를 NULL값을 줘야한다. 
		return n;
	}
	void check_top() {
		if(top>=1)
		cout << item[top-1].num << endl;
		else cout << -1 << endl;
	}
	void empty() {
		if (top == 0)
			cout << 1 << endl;
		else cout << 0 << endl;
	}
	void size() {
		cout << top << endl;
	}
};

int main() {
	int n,x;
	string s;
	stack a;
	cin >> n;
	while (n-- > 0) {
		cin >> s;
		if (s.compare("push") == 0) {
			cin >> x;
			a.push(x);
		}
		else if (s.compare("pop") == 0) {
			cout << a.pop() << endl;
		}
		else if (s.compare("size") == 0) {
			a.size();
		}
		else if (s.compare("empty") == 0) {
			a.empty();
		}
		else if (s.compare("top") == 0) {
			a.check_top();
		}
	}

}
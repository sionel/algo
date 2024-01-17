#include <iostream>
using namespace std;

int main() {
    int size1, size2;
    int temp;
    cin >> size1 >> size2; 
    int** array1 = new int* [size1]; 
    for (int i = 0; i < size1; i++) {
        array1[i] = new int[size2];
    }
    for (int i = 0; i < size1; i++) {
        for (int j = 0; j < size2; j++) {
            cin >> array1[i][j];
        }
    }
    for (int i = 0; i < size1; i++) {
        for (int j = 0; j < size2; j++) {
            cin >> temp;
            cout << array1[i][j] + temp <<" ";
        }
        cout << endl;
    }
    return 0;
}
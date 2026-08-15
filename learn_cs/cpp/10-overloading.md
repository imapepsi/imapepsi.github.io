
Overloading
Function overloading is where you have 2 functions with the same name, but have different parameters.
The example below is a print function. Print is a simple name, but needs to handle several types of data, so we overload it by writing the function with several diffent types. When an argument is passed the program will read what datatype the value is and find the correct function.

```cpp
#include <iostream>
#include <string>
using namespace std;

void print(int num) {
    cout << num << endl;
}

void print(double num) {
    cout << num << endl;
}

void print(string str) {
    cout << str << endl;
}

int main() {
    int wholeNum = 5;
    double decimal = 0.98;
    string str = "Code";
    
    print(wholeNum);
    print(decimal);
    print(str);
    
    return 0;
}
```
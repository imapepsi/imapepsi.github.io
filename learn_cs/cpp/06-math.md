Arithmetic
C++ can do basic math such as addition, subtraction, multiplication, and division.
+ add
- subtract
* Multiply
  / divide
  % modulus (remainder)

```cpp
#include <iostream>
using namespace std;
int main() {
    int a = 13;
    int b = 5;
    cout << "Sum: " << a + b << endl;
    cout << "Difference: " << a - b << endl;
    cout << "Product: " << a * b << endl;
    cout << "Quotient: " << a / b << endl;
    cout << "Remainder: " << a % b << endl;
    
    return 0;
}
```

​Sum: 18
Difference: 8
Product: 65
Quotient: 2 (Stays as an int since a and b were declared as an int)
Remainder: 3 (5 only goes into 13 2 times (2*5=10) so the remainder is 3.)

Order of operations
Parentheses are always first, then multiplication, division, modulus, addition, subtraction.

```cpp
cout << (5+3)*2 << endl;
// 16
cout << 5+3*2 << endl;
// 11
cout << 5+3-2 << endl; //add or subtract order does not matter in this case
// 6
cout << 15/8*3 //the int of 15/8=1 is first, then multiply by 3. Goes in the order given in the statement.
// 3
cout << 15/(8*3)
// 0
```
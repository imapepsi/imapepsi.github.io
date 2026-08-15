​To get information from a user (user input) C++ uses cin, which stands for console input.
​It's similar to cout but instead of 2 arrows going to toward cout (left), the arrows go to the right. Double right arrows are known as extraction operators.

Cin function
The structure is cin >> variable (insert/save input in the variable).
Please enter a number: 34
You entered 34
Cin will get input from the user until it reaches a whitespace. So for the example if you enter 23 56:
Please enter a number: 23 56
You entered 23
​Only the number 23 will be saved.

```cpp
#include <iostream>
using namespace std;

int main() {
    int number;
    cout << "Please enter a number: ";
    cin >> number;
    cout << "You entered " << number;
    return 0;
}
```

If you want both numbers you'll need to either chain the input: cin >> number1 >> number2;
or have 2 cin lines
cin >> number1;
cin >> number2;

```cpp
If you want both numbers you'll need to either chain the input: cin >> number1 >> number2;
or have 2 cin lines
cin >> number1;
cin >> number2;
```


Get-Line function
The Get line will stop at each new line rather than each white space. The first parameter of get line is cin and the 2nd parameter is the variable you want to store it in.
getline(cin, variableName);
To use this you must use the string header by including like you include iostream. #include <string>
​
What is your name? John Smith
It's nice to meet you John Smith.

```cpp
#include <iostream>
using namespace std;

#include <string> //Do not forget this

int main() {
    string name;
    cout << "What is your name? ";
    getline(cin, name);
    cout << "It's nice to meet you " << name << "." << endl;
}
```
A variable is used to store values in programming. They can store all kinds of data.
To create a variable in C++ you must first declare the variable name and data type

```cpp
int main() {
    int number = 5;
    
    int inputNumber;
}
```

Assignment
First you must declare the type of variable by using int, float, double, or string (Must use header #include <string> for string type). Then name the variable and finally use = to set the value.
int number = 5;
You can create a variable without an assignment. This is generally for user input.
int number;

Naming Rules
No spaces
Can not start with a number
Can not use reserved words (cout, int, etc.)
Only symbol that may be used is the underscore _.
If a variable needs to be constant make the name in all caps to visual see what is constant.
Styles
Camel Case - variableName - Name starts with a lowercase and all words after are capitalized at the beginning
Snake Case - variable_name - Name is lowercase with underscores to separate words


Calling
After declaring a variable you can refer to it and change it if needed by typing the variable name.
string a = "Hello";
cout << a;

```cpp
#include <iostream>
#include <string> // Needed if using this type
using namespace std;

int main() {
    string a = "Hello";
    a = "Hey";
    cout << a;
    return 0;
}

//Output
//Hey
```
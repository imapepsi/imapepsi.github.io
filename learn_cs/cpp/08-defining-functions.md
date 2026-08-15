What is a function?
In the Hello World lesson a function is defined as a procedure or routine for a computer task.
​It's a block of code that only runs when called. They're used to generalize actions and reuse blocks of code.
The main function is redefined function used to execute any given code.
To declare a function you use the structure to the right. (functions are defined outside of main)
() - Parentheses mark that a function is being declared.

```cpp
void functionName() {
    // Code
}

void sayHowdy() {
    std::cout << "Howdy" << endl;
}
```

In order to use a function you have to call it. This is done by typing the name of the function and () parentheses inside main.

```cpp
#include <iostream>

void sayHowdy() {
    std::cout << "Howdy" << endl;
}

int main() {
    sayHowdy();
    return 0;
}

// Howdy
```



What is a function?
In the Hello World lesson a function is defined as a procedure or routine for a computer task.
​It's a block of code that only runs when called. They're used to generalize actions and reuse blocks of code.
The main function is redefined function used to execute any given code.
To declare a function you use the structure to the right. (functions are defined outside of main)
() - Parentheses mark that a function is being declared.


In order to use a function you have to call it. This is done by typing the name of the function and () parentheses inside main.

Parameters
In math, functions can take input: f(x) = x + 1   f(4) = 5   for this case x is the input.In programming a function input is known as a parameter.
​In the case of sayHowdy the () are empty so there are no variables needed to run this function.
If there are any parameters you must pass in values for the parameters when calling the function.
The passed in values are known as (arguments). For f(x) = x + 1   f(4) = 5  4 is considered an argument
You can have any number of parameters.
function(dataType variableName, dataType variableName)
Parameters - Values created during the function declaration/creation.
​Arguments - Values passed during a function call to run.

```cpp
#include <iostream>

void sayHowdy(std::string name) {
    std::cout << "Howdy " << name << endl;
}

int main() {
    sayHowdy("Jane");
    return 0;
}

// Howdy Jane
```

Return
Math functions not only have input, but also output.
For this function f(x) = x + 1   f(4) = 5 the result of
x + 1 is the output.
For a function to output something you use the return keyword (return/output a value).
If no return line is given or a blank return line is given it returns the data type void/none.
Blank return line: return;
In the main function there's the line return 0. This keyword return ends the function and gives a value of 0.

This example calls the addition function which returns the sum of 2 given numbers. When addition(1,1) runs the it will return the value 2 and then the variable sum will equal 2.

```cpp
#include <iostream>

int add(int a, int b) {
    result = a + b;
    return result; // return a + b; also works
}

int main() {
    int sum = add(1, 1)
    std::cout << sum << std::endl;
    
    return 0;
}
```

Global vs. Local Variable
In this add function there are local variables, these variables are only used within the function.
So if we tried to print result there would be an error, because result is a local variable to the add function.
A global variable can used throughout the whole program and is not trapped inside a function.
​For the example above sum is considered a global variable.
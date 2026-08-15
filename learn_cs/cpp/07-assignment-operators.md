
Shortcuts
When you create a variable and set it equal to a value the equal sign is called an assignment operator.
There are some operators the can evaluated an operation and assign a value at the same time.
This shorthand operation is created by using a math operation and an equal sign next to each-other.
x += 12 is equal to x = x + 12
x %= 3 is equal to x = x%

```cpp
int main() {
    int x = 0;
    x += 12; // x = x + 12
    
    x %= 3; // x = x % 3
    
    return 0;
}
```


This can also be used on data types such as strings.

```cpp
#include <iostream> 
#include <string>

int main() {
    std::string breakfast = "Breakfast: ";
    std::string eggs = "Eggs";
    std::string bacon = "Bacon";

    breakfast += eggs + bacon;
    
    std::cout << breakfast << std::endl;

    // Breakfast: EggsBacon

    return 0;
}
```

Increments
This shorthand syntax very useful when we want to increase a variables value by increments.
x = 0
x += 1
x += 1
x is now equal to 2.
This increment by 1 can also be written as x ++ (x +=1, x = x +1)


Prefix & Postfix
This ++ is called an increment Operator. It has 2 versions the prefix and postfix.
Prefix increments the value then assigns the value and has the math operation in front.
a = 0
b = ++a
a now equals 1 and b equals 1.
​The program adds 1 to a and defines a as the new number, then it defines b as the new number.

Postfix assigns the value then increments and the math operation is after the equal sign.
a = 0
b = a++
a is equals 1 and b equals 0.
​The program assigns the original a value (0) to b, then adds 1 to a and defines a as the new number.


```cpp
int main() {
    // Prefix
    int a = 0;
    int b = 0;
    b = ++a; // b = 1
    
    // Postfix
    int x = 0;
    int y = 0;
    
    y = x++; // y = 0;
    
    return 0;
}
```
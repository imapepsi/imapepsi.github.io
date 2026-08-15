
Pass By Value
When an argument is passed into a function the value of the argument is copied and then used in the function as a local variable.
Pass By Reference
When an argument is passed as a reference the function uses the original variable and does not create a copy. So the variable being used is actually the global variable.
To pass by reference instead of the basic dataType var... you use an ampersand & symbol before the variable name.
myFunction(int &num) 

```cpp
// Pass by value version
#include <iostream>

int addOne(int a) {
    return a++;
}

int main() {
    int num = 0;
    num = addOne(num);
    std::cout << "Num = " << num;
    
    return 0;
}

// Num = 1
```

```cpp
// Pass by Reference Example
#include <iostream>

void addOne(int &a) {
    a++;
}

int main() {
    int num = 0;
    addOne(num);
    std::cout << "Num = " << num;
    
    return 0;
}

// Num = 1
```
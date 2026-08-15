# Hello World

Below is a simple program that outputs Hello World to the user.

```cpp
#include <iostream>

int main() {
    std::cout << "Hello World!";
    return 0;
}
```

This program is made of 5 parts.

#include is called a directive. A directive tells the computer to use or open (or include) a specific header file in the program. A header file is an address for code. iostream stands for input output stream. This library allows the program to output and input information. The # at the beginning tells the program to direct the code to the compiler's pre-processor. A compiler converts code into binary for the computer to read. The pre-processor sees what the program requires in order to work.

main() begins the program and tells the computer to run the code. The braces tell the computer where the code starts and stops. It is known as a function body or code block. A function is a procedure or routine for a computer task.

std is short for standard library. A library is a collection of code that contains various functions. The colons :: tell the computer to access functions from std.

cout means console output. This function is in the standard library that outputs information to the console window. In order to output the information left arrows << tell the computer to put our statement "Hello World" into cout. The semi-colon ; marks the end of the command. Since this program just outputs Hello world a semi-colon is placed on the end.

return 0 stops the function. Zero is a return code that means the program was run successfully. Returning a value that is not a zero signals an odd termination. Since this program returns an integer the abbreviation int is written before the main function

The main structure is a header, int main(), library, function, return.
This program will output like this:
Hello World!
using namespace std tells the computer to use the standard library throughout the whole program

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!";
    return 0;
}
```

It's a shortcut to not type 'std::' every time you want to use a function from the standard library.

Think of a Library as a Library of books and functions as the books.

The header file is the address for certain books.

For example <iostream> is the address for the function cout inside the std library.

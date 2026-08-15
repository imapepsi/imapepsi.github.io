Concatenation - Multiple insertion operations

Concatenate means to link or chain together. Using the double left arrows << we can chain different words.The double left arrows are known as insertion operators.    

```cpp
#include <iosstream>
using namespace std;

int main() {
    cout << "Computer" << "Science";
    cout << "Computer " << "Science";
    return 0;
}
```

The Output looks like this
ComputerScience
Computer Science




Line Break
The cout operator will place all the insertions together. If you want to put a statement on a new line (line break) you can use endl.
Computer Science
C++

```cpp
#include <iosstream>
using namespace std;

int main() {
    cout << "Computer Science" << endl;
    cout << "C++";
    return 0;
}
```

You can also use \n. The backslash \ is an "escape character" and marks a special character.
In this case the \n says place a line break.
It will not actually print \n.
Best Practice: Use endl to start a new line

```cpp
#include <iosstream>
using namespace std;

int main() {
    cout << "Computer \n"<< "Science";
    cout << "Computer \nScience";
    return 0;
}
```

Format
Sometimes you may want to output something with a specific appearance. This is called formatting. One example is to format money. To format money you want a float that goes to 2 decimals. To do this you use this command:
cout << fixed << setprecision(2);
This command modifies cout for the rest of the program and tells cout to output all floats to 2 decimal places.
Be sure type the header #include <iomanip> (Input output manipulation).
fixed says use regular decimals
setprecision says how many decimals

Another way to format is the setw(#) (set width function). This allows you to put outputs in columns.

NOTE: This function ONLY applies to the variable or value after it.

```cpp
#include <iostream>
#include <iomainip>
using namespace std;

int main() {
    cout << fixed << setprecision(2);
    cout << "$" << 345.0310000;
    // Output
    // $345.03
    
    return 0;
}
```

```cpp
#include <iostream>
#include <iomainip>
using namespace std;

int main() {
    cout << fixed << setprecision(2);
    cout << setw(10) << "$" << 345.0310000;
    cout << setw(10) << 3.0310000;
    // Output
    //   $345.03
    //      3.03
    
    return 0;
}
```
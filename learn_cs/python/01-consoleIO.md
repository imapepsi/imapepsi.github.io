# Lesson 01: Input & Output in Python

## Reading

In this lesson we're going to learn about two essential Python functions: `print()` and `input()`. These two functions 
are the foundation of how we communicate with a computer: how we give it information and how it gives information back 
to us.

### Setting Up

1. Open the Python Shell app: `IDLE.app`
2. Click `File` in the file bar and click `New File` to create a new python file
3. Save this file as `lesson01.py` in any folder you'd like to keep your python scripts/programs

### The `print()` Function

Computers can perform tasks at incredible speed, but that's only useful if we can see the results. The `print()` function 
tells the computer to display information in a window called the **console**.

Here's an example:

```python
print("Hello World")
```

This tells the computer to display the phrase `Hello World` in the console.

> **🛠️ Try it:** 
> 
> Type `print("Hello World")` in your `lesson01.py` file.
> 
> To run your program you can use the keyboard shortcut: `F5` (may need to click `fn` + `F5` key if on Mac).
> You can also click `Run` in the menu bar and then `Run Module`

Congratulations! You just wrote your first Python program\! 🎉

**Now try this:** On the next line, write another print statement, but replace `"Hello World"` with a different greeting, 
maybe in another language!

Follow these steps:

1. Type `print`
2. Open parenthesis `(`
3. Double quote `"`
4. Your greeting
5. Closing double quote `"`
6. Closing parenthesis `)`

### The `input()` Function

Now that we can display information, we also need a way to **collect** information from the user. The `input()` function 
displays a prompt in the console and waits for the user to type a response and press **Enter**.

> **🛠️ Try it:** 
> 
> In your `lesson01.py` file type the following and run it:
> 
> ```python
> input("What is your favorite snack? ")
> ```



> **💡 Notice:** There's an extra space before the closing quote. Try removing it and running the program again. See how 
> it affects what appears in the console.

### **Variables**

Right now, our program asks for the user's favorite snack, but doesn't do anything with that answer. To save information 
so our program can use it, we use **variables**.

A **variable** is a way to temporarily store information while a program is running. Think of it like a labeled sticky 
note. You write a value on it and give it a name so you can refer to it later. Variables do **not** permanently save 
information to your computer.

We create a variable by giving it a name and using `=` to assign it a value. The name must start with a letter or an 
underscore. It can contain any combination of letters, numbers, and underscores (no spaces). Variables usually have a 
name that describes what value it's storing.

Let's create a variable called snack and assign it the value of the input statement we wrote.

```python
snack = input("What is your favorite snack? ")
```

Now whatever the user types will be saved in a variable called snack. We can use that variable anywhere else in our program.

We can print out the user's answer by writing:

```python
print(snack)
```

Or we can use it inside a sentence:

```python
print("I love " + snack + " too!")
```

> **💡 Notice:** 
> 
> There's a space at the end of `"I love "` and a space at the beginning of  `" too!"`. Python won't add 
> spaces automatically, if we leave them out, this is what we'd get:

```python
I lovepopcorntoo!
```

Programming languages don't have the ability to guess what we want. We have to be very specific.

Being specific about spacing is an important habit in programming\!

> **🛠️ Try it:** 
> 
> Write your own print statement that uses the snack variable in a creative response.

One final note on variables: values assigned to variables can be easily reassigned at any time. For example:

```python
num = 34 
print(num) 

num = 59 
print(num)
```

In this example, num is first assigned the value `34`, then reassigned to 59\. Each `print()` call reflects the current value 
of num at that point in the code.

### **Recap (Vocab & Code Syntax)**

| Vocab    | Definition                                                                                                                                                                                                    |
|----------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Variable | Stores information so your program can use it. Its value can be reassigned at any time. It can have a name starting with a letter or underscore and can contain letters, numbers, or underscores (no spaces). |
| Console  | Window where our program runs                                                                                                                                                                                 |


| Code       | What it does                       | Example Usage                       |
|------------|------------------------------------|-------------------------------------|
| `print()`  | Displays information to the user   | `print("Howdy")`                    |
| `input()`  | Collects information from the user | `input("Enter a number: ")`         |
| `Variable` | Stores information                 | `name = input("Enter your name: ")` |

---

## Code Exercise

### **Overview**

Now it's time to put everything together\! In this exercise, you'll write a short Python program that has a conversation 
with the user. Your program will ask the user a series of questions, save their answers, and respond to each one before 
moving on to the next question.

This exercise practices all three concepts from today's lesson: `print()`, `input()`, and **variables**.

### **Requirements**

Create a new file called `lesson01-exercise.py`. In this file, write a program that does the following:

1. Ask for the user's name: save it to a variable, then print a friendly response that uses their name.
2. Ask for the user's favorite movie: save it to a variable, then print a response that includes the movie title.
3. Ask a question of your own choosing: save the answer to a variable, then print a response that uses it.
4. You may include other questions and responses of your choice.

### **Example Output**

Here's some example output for the first requirement (step):

```plaintext
What is your name? Mia
Nice to meet you, Mia!
```

#### **Keep in Mind:**

- Each answer should be saved to its own variable with a meaningful name.
- Each response should be printed **before** the next question is asked.
- Pay attention to spacing inside your text. Python won't add spaces for you\!

---

## Learning With Your Little One

One of the best parts of learning to code as a parent is that you have a built-in study friend at home.  If you have a 
toddler, try one of these activities to reinforce what you just learned.

### **Age 2: Clapping Game**

Concepts: input & output

Sit facing your toddler and clap a simple pattern. Their job is to copy it back. Then let them lead and you copy them. 
That back-and-forth is exactly what your Python program does, it receives information and sends something back out.

### **Age 3: Drive-Through Pretend Play**

Concepts: input, output & variables

Set up a pretend drive-through using a doorway or cardboard box as the window. Your toddler places an order, and you take 
it, remember it, and come back with the pretend items. Try saying the order back out loud before handing it over. That's 
you acting as the variable, storing the information and using it. You could use toy food, play-doh, or drawings.

### **Age 4: Robot Chef Game**

Concepts: input, output & variables

You're the programmer, your child is a robot chef. Give them an instruction like "make a pretend pizza with mushrooms and 
cheese." The robot has to repeat the order back before making it, that's storing the variable. Then they make and serve it. They could try using a funny robot voice too.

### **Have Older Kids? Teach Them Too\!**

If you have older children who are able to type, invite them to sit with you and try writing the code themselves\! Walk 
them through what you just learned. Show them how print() displays a message, how input() collects information, and how 
variables store it. Let them type their own version of the exercise using their name, their favorite movie, or anything 
they're interested in. You might be surprised how quickly they pick it up, and teaching someone else is one of the best 
ways to deepen your own understanding.


# Lesson 02: Data Types, Type Conversion & String Formatting

## Reading

In this lesson we're going to learn about data types, type conversion, and string formatting. These concepts are the 
foundation of how Python understands and works with different kinds of information, whether it's a number, a word, or a 
true/false answer.

### Setting Up

1. Open the Python Shell app: `IDLE.app`
2. Click `File` in the file bar and click `New File` to create a new python file
3. Save this file as `lesson02.py` in the folder you'd like to keep your python scripts/programs

### Data Types

Every piece of information in Python has a data type. A data type tells Python what kind of value something is and what it can do with it. Think of it like the difference between a phone number and a price, both are numbers, but you wouldn't try to multiply a phone number.

Here are the four most common data types you'll use:

#### int (Integer)

An integer is a whole number with no decimal.

```python
age = 30
num_of_kids = 4
```

#### float (Decimal Number)

A float is a number with a decimal.

```python
price = 23.19
height = 5.6
```

#### str (String)

A string is any text value wrapped in quotes. The word string means a sequence of characters

```python
name = "Cosmo"
city = "Provo"
letters = "abc"
letter_z = "z"
```

#### bool (Boolean)

A boolean is a unique data type that can only have 2 values: True or False. Think of a boolean as how a computer says 
yes or no. The variables used for booleans usually use question language.

```python
is_raining = False
has_kids = True
```

### Checking Data Types with `type()`

If you're not sure what type a value is, Python has a function called type() that can tell you what data type any value is.

> **🛠️ Try it:** 
> 
> In your `lesson02.py` file, type the following and run the code. The type for each value will be printed to the console.
>
> ```python
> print(type(43))
> print(type(0.0))
> print(type("Howdy"))
> print(type(True))
> ```

### **Type Conversion**

The input() function always returns what the user types as a string, even if it looks like a number. This becomes a 
problem when you want to do math with it.

> **🛠️ Try it:** 
>
> Run this code and notice the error

```python
price = input("Enter the price: ")
tax = 0.03
total = price + (price * tax)
print(total)
```

This fails because Python can't multiply a string by a number. To fix it, wrap the input in a conversion function to tell 
Python what type you actually want:

```python
price = float(input("Enter the price: "))
tax = 0.03
total = price + (price * tax)
print(total)
```

Here are the conversion functions you'll use most:

`int()` converts a value to a whole number. This works well for things that will never have a decimal, like ages or years:

```python
age = int(input("Enter your age: "))
year = int(input("Enter the current year: "))
birthyear = year - age
print(birthyear)

```

`float()` works like `int(), but instead converts a value to a decimal number.

```python
price = float(input("Enter the price: "))
tip = 0.20
total = price + (price * tip)
print(total)
```

The key with using `float()` or `int()` is choosing the right one, if the value could ever have a decimal, use `float()`.
If it's always a whole number, use `int()`.

`str()` converts a value to a string. This comes up when you want to combine a number with text:

```python
age = 30
print("I am " + str(age) + " years old.")
```



### String Formatting with f-strings

In the last lesson, we combined text and variables using \+ signs. It worked, but it can get messy, especially when spacing 
and `str()` conversions are involved.

For example:

```python
name = "Cosmo"
age = 101
print("My name is " + name + " and I am " + str(age) + " years old.")
```

This code is difficult to read, and you have to add extra spaces in the right places so the sentence makes sense.

**f-strings**, which is short for format-strings, is a way we can get around this issue.

An f-string lets you drop variables directly into a sentence using curly braces {}. Just put the letter **f** before 
your opening quote:

```python
name = "Cosmo"
age = 101
print(f"My name is {name} and I am {age} years old.")
```

> **🛠️ Try it:** 
> 
> In your `lesson02.py` file, ask the user for their favorite hobby and write a response using an f-string.

To format a number inside an f-string, add a : after the variable name followed by the format specifications you want.

```python
price = 2333.45434

# For 2 decimal places like currency you can use .2f
print(f"${price:.2f}")

# For commas in a number just add a comma
print(f"${price:.2f}")

```

You can also drop little code snippets into the curly braces.

```python
age = int(input("Enter your age: "))
year = int(input("Enter the current year: "))

print(f"Your birth year is {year - age}")
```

### Recap

| Vocab           | Definition                                                  |
|-----------------|-------------------------------------------------------------|
| Data types      | Categories that tell Python what kind of value something is |
| int or integer  | Whole numbers like 5 or 100                                 |
| float           | Decimal numbers like 3.14 or 9.99                           |
| str or string   | Text values wrapped in quotes                               |
| bool or boolean | True or False values                                        |
| Type Conversion | Changing a value from one data type to another              |
| f-string        | A cleaner way to build sentences that include variables     |

| Code      | What it does                        | Example Usage                                |
|-----------|-------------------------------------|----------------------------------------------|
| `type()`  | Tells you what data type a value is | `text = "BYU :)"` <br/> `type(text)`         |
| `int()`   | Converts a value to an integer      | `num = "113"` <br/> `num = int(num)`      |
| `float()` | Converts a value to a float         | `price = "3.14"` <br/> `price = int(price)`  |
| `str()`   | Converts a value to a string        | `cost = 86.99` <br/> `print("$" + str(cost))` |

---

## Code Exercise

### Overview

Now it's time to put everything together! In this exercise you'll write a Python program that collects information from 
a user, works with different data types, and displays responses using f-strings.

This exercise practices all three concepts from today's lesson: data types, type conversion, and string formatting.

### Requirements

Create a new file called `lesson02-exercise.py`. In this file, write a program that does the following:

1. Ask for the user's name and their age. Save both to variables. Convert the age to an integer, then print a response using an f-string that includes their name and tells them how old they will be next year.
2. Ask for the price of their favorite snack. Convert it to a float, then print a response that tells them how much two of that snack would cost.
3. You may include other questions and responses of your choice.

### Keep in mind:

- Always convert `input()` values to the right number type before doing math with them.
- Use f-strings to make your print statements clean and easy to read.
- Variable names should be meaningful: price is better than p.

---

## Learning With Your Little One

One of the best parts of learning to code as a parent is that you have a built-in study friend at home.  If you have a 
toddler, try one of these activities to reinforce what you just learned.

### Age 2: Sorting Game

Concepts: data types

Gather a mix of objects from around the house, some soft toys, some hard blocks, some round things, some flat things. 
Sort them into piles together. Just like Python puts values into categories (numbers, words, true/false), your toddler 
is sorting things into their own types. Name the categories out loud as you go.

### Age 3: Telephone Operator Game

Concepts: type conversion

Play pretend telephone. Your toddler whispers a message to a stuffed animal, the stuffed animal 'translates' it to you 
in a funny voice, and you say it back in your normal voice. Each step is a conversion, the same information moving from 
one form to another, just like int() or str() in Python.

### Age 4: Mad Libs

Concepts: string formatting

Tell a silly story out loud with blanks in it. Ask your child to shout out words to fill in the gaps "One day a {animal} 
went to the {place} and ate {food}!" That's exactly how an f-string works: a sentence with spots reserved for variables. 
Let them make the story as ridiculous as possible!

### Have Older Kids? Teach Them Too!

If you have older children who are able to type, invite them to sit with you and try writing the code themselves! Walk 
them through what you just learned, show them how different data types work, what happens when you try to add a number 
to a word without converting it, and how f-strings make sentences cleaner. Let them write their own version of the exercise 
using their own name, age, and favorite things. Teaching someone else is one of the best ways to deepen your own understanding.
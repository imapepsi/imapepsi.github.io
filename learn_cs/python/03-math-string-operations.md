# Lesson 03: Math & String Operations

## Reading

In this lesson we're going to learn about math and string operations. Now that you know how to identify data types
and convert between them, it's time to learn what you can actually *do* with those values.

### Setting Up

1. Open the Python Shell app: `IDLE.app`
2. Click `File` in the file bar and click `New File` to create a new python file
3. Save this file as `lesson03.py` in the folder you'd like to keep your python scripts/programs

### Math Operations

Python can do basic arithmetic such as adding and subtracting, but it can also do more. An **operator** is a symbol
that tells Python to perform an action on one or more values, like adding two numbers together. Here are the
operators you'll use most:

| Operator | Name           | What it does                  |
|----------|----------------|--------------------------------|
| `+`      | Addition       | Adds two numbers              |
| `-`      | Subtraction    | Subtracts two numbers         |
| `*`      | Multiplication | Multiplies two numbers        |
| `/`      | Division       | Divides two numbers           |
| `//`     | Floor Division | Divides and drops the decimal |
| `%`      | Modulus        | Gives the remainder           |
| `**`     | Exponent       | Raises to a power             |

Here are some examples of using these operators.

```python
print(3 + 8)   # Add
print(3 - 8)   # Subtract
print(3 * 8)   # Multiply
print(3 / 8)   # Divide
print(8 // 3)  # Floor Division
print(8 % 3)   # Modulus
print(3 ** 2)  # Exponent (3 squared)
```

> **🛠️ Try it:**
>
> In your `lesson03.py` file, paste the examples to see the results.

#### Floor Division & Modulus

`//` and `%` are two that likely will be new to you.

`//` divides two numbers but throws away anything after the decimal point.

> **🛠️ Try it:**
>
> In your `lesson03.py` file, type the following: `print(type(8 // 3))`.
> What does the console tell you about the data type of the result of `8 // 3`?

`%` gives you what's *left over* after dividing, as in the remainder

```python
print(17 % 5)  # 2  (3 groups of 5 is 15, with 2 left over)
```

> **🛠️ Try it:**
>
> In your `lesson03.py` file, ask the user to enter a number, convert it to an int, then print the result of that
> number `% 2`. Try a few different numbers and see what you get.
>
> What pattern do you see with the results?

Every even number `% 2` equals `0`, since it divides evenly with nothing left over. Every odd number `% 2` equals
`1`, since there's always exactly one left over. `%` is a way we can check if a number is divisble by another.

We can apply the same idea for checking if a number is divisible for 3 or 5 or any other number

```python
print(6 % 3)
print(17 % 3)
```

#### Order of Operations

Just like in math class, Python follows an order of operations (PEMDAS): parentheses first, then exponents, then
multiplication/division, then addition/subtraction.

```python
print(2 + 3 * 4)    # 14, not 20 (multiplication happens first)
print((2 + 3) * 4)  # 20, parentheses force addition first
```

When in doubt, use parentheses to make your intent clear, both to Python and to anyone reading your code.

### String Operations

Strings have their own set of operations. Some symbols even do something completely different than they do with numbers.

`+` combines (concatenates) two strings together:

```python
first_name = "Cosmo"
last_name = "Cougar"
full_name = first_name + " " + last_name
print(full_name)  # Cosmo Cougar
```

Notice the `" "` in the middle, without it, Python would print `CosmoCougar` with no space. Python won't add spacing
for you, you have to tell it where.

`*` repeats a string a certain number of times:

```python
print("ha" * 3)  # hahaha
print("-" * 20)  # --------------------
```

This is useful for things like dividers or simple visual effects in your programs.

`len()` tells you how many characters are in a string:

```python
name = "Cosmo"
print(len(name))  # 5
```

> **🛠️ Try it:**
>
> In your `lesson03.py` file, ask the user for their favorite word, then print that word repeated 5 times and
> print how many letters are in it.

#### A Word of Caution

Remember from Lesson 02: `+` behaves differently depending on the data type. With numbers, `+` adds. With strings,
`+` concatenates. Python will not let you mix the two:

```python
age = 30
print("I am " + age + " years old.") # ❌ Error! Can't add a string and an int
print("I am " + str(age) + " years old.") # ✅ Works, age is converted to a string first
```

This is exactly why type conversion matters, it's not just a Lesson 02 concept, you'll lean on it constantly.

### Recap

| Vocab               | Definition                                                    |
|----------------------|----------------------------------------------------------------|
| Operator            | A symbol that performs an action on values, like `+` or `*`   |
| Floor Division      | Division that drops the decimal, leaving a whole number       |
| Modulus             | The remainder left over after division                        |
| Concatenation       | Combining two strings together using `+`                      |
| Order of Operations | The order Python follows when solving an expression (PEMDAS)  |

| Code    | What it does                                  | Example Usage                                      |
|---------|-----------------------------------------------|----------------------------------------------------|
| `+`     | Adds numbers, or joins strings together       | `total = 4 + 5` <br/> `name = "Cosmo" + " Cougar"` |
| `-`     | Subtracts numbers                             | `diff = 10 - 3`                                    |
| `*`     | Multiplies numbers, or repeats a string       | `area = 4 * 5` <br/> `line = "-" * 10`             |
| `/`     | Divides numbers                               | `avg = 10 / 4`                                     |
| `//`    | Divides numbers, drops the decimal            | `whole = 10 // 4`                                  |
| `%`     | Gives the remainder of division               | `remainder = 10 % 4`                               |
| `**`    | Raises a number to a power                    | `squared = 4 ** 2`                                 |
| `len()` | Tells you how many characters are in a string | `len("Cosmo")`                                     |

---

## Code Exercise

### Overview

Now it's time to put everything together! In this exercise you'll write a Python program that uses math and string
operations to solve a couple of everyday problems.

This exercise practices both concepts from today's lesson: math operations and string operations.

### Requirements

Create a new file called `lesson03-exercise.py`. In this file, write a program that does the following:

1. Ask the user for their age in years then use math operations to print an estimation for how many months, days, and
   minutes old they are (don't worry about leap years).
2. Ask the user for two numbers. Convert them to floats, then print the sum, difference, product, and quotient of
   the two numbers using f-strings.
3. Ask the user for a short word or phrase, then print it repeated 3 times in a row, and print how many characters
   it contains.
4. You may include other questions and responses of your choice.

### Keep in mind:

- Always convert `input()` values to the right number type before doing math with them.
- Use parentheses when an expression could be read more than one way.
- Use f-strings to make your print statements clean and easy to read.

---

## Learning With Your Little One

One of the best parts of learning to code as a parent is that you have a built-in study friend at home. If you have
a toddler, try one of these activities to reinforce what you just learned.

### Age 2: Sharing Game

Concepts: division, modulus

Grab a handful of small snacks (crackers, grapes, whatever's on hand) and split them evenly between your toddler and
a stuffed animal or sibling. Count out loud as you go, and if there's one leftover, make a big deal out of the "extra
one," that's exactly what a remainder is in Python.

### Age 3: Copycat Repeat Game

Concepts: string repetition

Say a silly word or sound and have your toddler repeat it back a set number of times, "say 'boop' three times!"
Count together as they say it. That's exactly what `"boop" * 3` does in Python, just repeating a value a set number
of times.

### Age 4: Building Block Towers

Concepts: math operations, order of operations

Build two small towers of blocks together, then ask your child questions like "if we put these two towers together,
how many blocks do we have?" or "if we take away three blocks, how many are left?" Push it further by asking what
happens if you combine towers a different way, showing that the order you do things in can change the result, just
like order of operations in Python.

### Have Older Kids? Teach Them Too!

If you have older children who are able to type, invite them to sit with you and try writing the code themselves!
Walk them through what you just learned, show them the difference between `/` and `//`, what `%` is actually doing,
and how `+` and `*` behave differently with strings than with numbers. Let them write their own version of the
exercise using their own numbers and favorite words. Teaching someone else is one of the best ways to deepen your
own understanding.
# 🇮🇳 Tamil Programming Language - Complete Syntax Cheat Sheet

## Quick Reference Table

| Concept | Tamil Keyword | Python | Example |
|---------|--------------|--------|---------|
| Print | `sollu` | `print()` | `"Hello" sollu` |
| If | `irundhal:` | `if:` | `age >= 18 irundhal:` |
| Else | `illana:` | `else:` | `illana:` |
| Else If | `illana X irundhal:` | `elif X:` | `illana age < 13 irundhal:` |
| For (range) | `varai:` | `range()` | `i 1-10 varai:` |
| For (iterate) | `in` | `in` | `i in numbers:` |
| While | `irukkumvarai:` | `while:` | `i < 10 irukkumvarai:` |
| Break | `niruththu` | `break` | `niruththu` |
| Continue | `thodaru` | `continue` | `thodaru` |
| Function | `seiyal` | `def` | `seiyal add(a,b):` |
| Input | `vaangu()` | `input()` | `name = vaangu()` |
| Return | `return` | `return` | `return result` |

---

## 📝 Basic Print Statements

```tamil
"Vanakam Kagam" sollu
# Output: Vanakam Kagam

x = 42
x sollu
# Output: 42

name = "Arjun"
"Hello, " + name sollu
# Output: Hello, Arjun
```

---

## 📊 Variables & Data Types

All Python data types work as-is:

```tamil
# Numbers
num = 42
decimal = 3.14
negative = -10

# Strings
name = "Krishna"
message = 'Namaste'

# Lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "two", 3.0]

# Dictionaries
student = {"name": "Arjun", "age": 20}

# Boolean
is_ready = True
is_empty = False

# Operations
sum_val = 5 + 3
product = 4 * 2
power = 2 ** 3  # Exponent
modulo = 10 % 3
```

---

## ❓ Conditional Statements

### Simple If

```tamil
age = 20
age >= 18 irundhal:
    "Adult" sollu
```

### If-Else

```tamil
score = 45
score >= 50 irundhal:
    "Pass" sollu
illana:
    "Fail" sollu
```

### If-Elif-Else

```tamil
marks = 75
marks >= 90 irundhal:
    "Grade A" sollu
illana marks >= 80 irundhal:
    "Grade B" sollu
illana marks >= 70 irundhal:
    "Grade C" sollu
illana:
    "Grade F" sollu
```

---

## 🔄 For Loops

### For Loop with Range

```tamil
i 1-6 varai:
    i sollu
# Output: 1 2 3 4 5
```

### For Loop with Iterable

```tamil
fruits = ["Apple", "Banana", "Orange"]
fruit in fruits:
    fruit sollu
```

---

## 🔁 While Loops

```tamil
count = 1
count <= 5 irukkumvarai:
    count sollu
    count = count + 1
```

### With Break

```tamil
i = 0
10 irukkumvarai:
    i sollu
    i = i + 1
    i == 5 irundhal:
        niruththu  # Exit loop when i is 5
```

### With Continue

```tamil
i 1-6 varai:
    i == 3 irundhal:
        thodaru  # Skip this iteration
    i sollu
# Output: 1 2 4 5
```

---

## ⚙️ Functions

### Basic Function

```tamil
seiyal greet(name):
    "Vanakam, " + name sollu

greet("Arjun")
```

### Function with Return

```tamil
seiyal add(a, b):
    return a + b

result = add(10, 20)
result sollu
# Output: 30
```

### Function with Multiple Parameters

```tamil
seiyal multiply(x, y, z):
    product = x * y * z
    return product

answer = multiply(2, 3, 4)
answer sollu
# Output: 24
```

---

## 🎯 Complete Program Examples

### Example 1: Multiplication Table

```tamil
n = 5
"Multiplication table of 5:" sollu
i 1-11 varai:
    product = n * i
    "5 * " + i + " = " + product sollu
```

### Example 2: Number Check

```tamil
num = 7

num % 2 == 0 irundhal:
    "Even number" sollu
illana:
    "Odd number" sollu
```

### Example 3: Fibonacci Series

```tamil
a = 0
b = 1
i 1-8 varai:
    a sollu
    temp = a + b
    a = b
    b = temp
```

### Example 4: Sum of Numbers

```tamil
seiyal sum_numbers(n):
    total = 0
    i 1-n irundhal:
        total = total + i
    return total

result = sum_numbers(5)
"Sum of 1 to 5: " + result sollu
```

---

## 🧮 Operators

### Arithmetic Operators (Same as Python)
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `//` Floor Division
- `%` Modulus
- `**` Power

### Comparison Operators (Same as Python)
- `==` Equal
- `!=` Not Equal
- `>` Greater Than
- `<` Less Than
- `>=` Greater or Equal
- `<=` Less or Equal

### Logical Operators (Same as Python)
- `and` Logical AND
- `or` Logical OR
- `not` Logical NOT

---

## 💡 Tips & Tricks

1. **Indentation matters** - Use consistent spaces for indentation (like Python)
2. **colons are required** - Every control structure needs a colon at the end
3. **Comments** - Use `#` for comments (Python style)
4. **Variable names** - Can contain numbers and underscores
5. **String quotes** - Use either `"` or `'` for strings, but not both in the same string

---

## ⚠️ Common Mistakes

| ❌ Wrong | ✅ Correct | Issue |
|---------|----------|-------|
| `age >= 18 irundhal` | `age >= 18 irundhal:` | Missing colon |
| `"Hello sollu` | `"Hello" sollu` | Mismatched quotes |
| `for i in list` | `i in list:` | Missing colon and wrong syntax |
| `irukkumvara` | `irukkumvarai:` | Typo in keyword |
| `Hello sollu` | `"Hello" sollu` | Strings need quotes |

---

## 🚀 Happy Coding!

Start with simple programs and gradually add complexity. Good luck learning Tamil Programming! 🇮🇳

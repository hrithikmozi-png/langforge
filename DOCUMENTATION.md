# 🇮🇳 Tamil Programming Language Compiler - Complete Documentation

## Overview

The Tamil Programming Language Compiler is a web-based tool that allows you to write code using Tamil keywords that get automatically translated to Python and executed in your browser.

**Key Features:**
- ✅ Real-time Tamil to Python translation
- ✅ Live code execution with Pyodide
- ✅ Dark theme interface with syntax highlighting
- ✅ Built-in examples for learning
- ✅ Comprehensive syntax reference
- ✅ No installation needed - runs entirely in browser

---

## 🎯 Getting Started

### Step 1: Open the Compiler
Navigate to `http://localhost:8000` in your web browser (or follow Quick Start guide)

### Step 2: Write Your First Program
Copy this into the code editor:
```
"Vanakam Kagam" sollu
```

### Step 3: Run It
Click the **"▶ Compile & Run"** button or press **Ctrl+Enter**

You'll see the output in the console below!

---

## 📚 Complete Keyword Reference

### Output (Printing)

**Tamil:** `sollu`  
**Python:** `print()`  
**Meaning:** "tell/speak"

Examples:
```tamil
"Hello" sollu
# Translates to: print("Hello")

x = 42
x sollu
# Translates to: print(x)

"Number is: " + x sollu
# Translates to: print("Number is: " + x)
```

---

### Conditionals

#### If Statement
**Tamil:** `condition irundhal:`  
**Python:** `if condition:`  
**Meaning:** "if exists/is"

```tamil
age = 25
age >= 18 irundhal:
    "Adullu" sollu
```

#### Else Clause
**Tamil:** `illana:`  
**Python:** `else:`  
**Meaning:** "otherwise"

```tamil
score = 40
score >= 50 irundhal:
    "Pass" sollu
illana:
    "Fail" sollu
```

#### Else-If Clause
**Tamil:** `illana condition irundhal:`  
**Python:** `elif condition:`

```tamil
marks = 75
marks >= 90 irundhal:
    "A" sollu
illana marks >= 80 irundhal:
    "B" sollu
illana marks >= 70 irundhal:
    "C" sollu
illana:
    "F" sollu
```

---

### Loops

#### For Loop with Range
**Tamil:** `variable start-end varai:`  
**Python:** `for variable in range(start, end):`  
**Meaning:** "varai" = "till/up to"

```tamil
i 1-6 varai:
    i sollu
# Output: 1 2 3 4 5
```

#### For Loop with Iterable
**Tamil:** `variable in collection:`  
**Python:** `for variable in collection:`

```tamil
fruits = ["Apple", "Banana", "Mango"]
fruit in fruits:
    fruit sollu
```

#### While Loop
**Tamil:** `condition irukkumvarai:`  
**Python:** `while condition:`  
**Meaning:** "irukkumvarai" = "while it is/exists"

```tamil
i = 1
i <= 5 irukkumvarai:
    i sollu
    i = i + 1
```

#### Break Statement
**Tamil:** `niruththu`  
**Python:** `break`  
**Meaning:** "niruththu" = "stop"

```tamil
i 1-10 varai:
    i == 5 irundhal:
        niruththu
    i sollu
# Stops when i reaches 5
```

#### Continue Statement
**Tamil:** `thodaru`  
**Python:** `continue`  
**Meaning:** "thodaru" = "go on/continue"

```tamil
i 1-6 varai:
    i == 3 irundhal:
        thodaru
    i sollu
# Skips printing when i is 3
```

---

### Functions

#### Function Definition
**Tamil:** `seiyal function_name(parameters):`  
**Python:** `def function_name(parameters):`  
**Meaning:** "seiyal" = "do/make"

```tamil
seiyal greet(name):
    "Hello, " + name sollu

greet("Arjun")
```

#### Return Statement
**Tamil:** `return value`  
**Python:** `return value`

```tamil
seiyal add(a, b):
    return a + b

result = add(10, 20)
result sollu  # Output: 30
```

---

### Input

**Tamil:** `vaangu()`  
**Python:** `input()`  
**Meaning:** "vaangu" = "take/receive"

```tamil
name = vaangu()
"Your name is: " + name sollu
```

---

## 🔗 Operators (Same as Python)

### Arithmetic
```
+ (addition)
- (subtraction)
* (multiplication)
/ (division)
// (floor division)
% (modulus)
** (exponentiation)
```

### Comparison
```
== (equal)
!= (not equal)
< (less than)
> (greater than)
<= (less than or equal)
>= (greater than or equal)
```

### Logical
```
and (logical AND)
or (logical OR)
not (logical NOT)
```

---

## 📋 Data Types

All Python data types work unchanged:

```tamil
# Integer
num = 42

# Float
pi = 3.14

# String
name = "Arjun"

# List
fruits = ["Apple", "Banana", "Mango"]

# Dictionary
person = {"name": "Arjun", "age": 20}

# Tuple
coordinates = (10, 20)

# Boolean
is_active = True
```

---

## 🎨 Program Structure

Tamil code follows Python's structure:
- **Indentation matters** - Use consistent spaces/tabs
- **Colons are required** - All control structures need `:` at the end
- **Comments use `#`** - Same as Python
- **Line continuation** - Use `\` for continuing lines

Example:
```tamil
# This is a comment
seiyal calculate(x, y):
    sum_val = x + y
    product = x * y
    
    sum_val > product irundhal:
        return sum_val
    illana:
        return product
```

---

## 📊 Complete Program Examples

### Program 1: Even/Odd Check
```tamil
num = 7

num % 2 == 0 irundhal:
    "Even" sollu
illana:
    "Odd" sollu
```

### Program 2: Number Pyramid
```tamil
i 1-6 varai:
    j 1-i varai:
        j sollu
```

### Program 3: Sum Calculator
```tamil
seiyal sum_range(n):
    total = 0
    i 1-n irundhal:
        total = total + i
    return total

result = sum_range(10)
"Sum from 1 to 10: " + result sollu
```

### Program 4: Character Frequency
```tamil
text = "hello"
chars = ["h", "e", "l", "o"]

char in chars:
    count = text.count(char)
    char + " appears " + count + " times" sollu
```

### Program 5: Fibonacci
```tamil
a = 0
b = 1

"Fibonacci: " sollu
i 1-8 varai:
    a sollu
    next = a + b
    a = b
    b = next
```

---

## 🐛 Error Handling & Debugging

### Common Errors

| Error | Cause | Solution |
|-------|-------|----------|
| `SyntaxError` | Missing colon | Add `:` after if/for/while/def/etc |
| `IndentationError` | Wrong indentation | Check spacing consistency |
| `NameError` | Variable undefined | Declare variable before using |
| `TypeError` | Wrong data type | Check variable types match operation |

### Tips for Debugging
1. Check the "Generated Python Code" section in console
2. Look for mismatched quotes or parentheses
3. Ensure indentation is consistent (4 spaces per level)
4. Verify all Tamil keywords are spelled correctly

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| Ctrl+Enter | Compile and run code |
| Click Clear Button | Clear console output |

---

## 🎓 Learning Path

### Beginner
1. Print statements (`sollu`)
2. Variables and data types
3. Simple conditionals (`irundhal:`, `illana:`)

### Intermediate
4. For loops (`varai:`)
5. While loops (`irukkumvarai:`)
6. Functions (`seiyal`)

### Advanced
7. Nested loops and conditionals
8. List and dictionary manipulation
9. Complex functions

---

## 💾 Saving Your Work

The compiler doesn't save code automatically. To save:
1. Copy your code from the editor
2. Paste it into a text editor
3. Save as `.tamil` or `.py` file

---

## 🌐 Browser Support

Works on any modern browser that supports:
- JavaScript ES6
- WebAssembly (for Pyodide)

**Tested on:**
- Chrome 90+
- Firefox 88+
- Edge 90+
- Safari 14+

---

## 📞 Troubleshooting

### Page won't load
- Ensure server is running on port 8000
- Try refreshing the page
- Check browser console for errors

### Python code won't execute
- Wait a few seconds for Pyodide to initialize
- Check syntax in the "Generated Python Code"
- Refresh the page and try again

### Slow performance
- Close other tabs to free up memory
- Avoid very large loops (>10,000 iterations)
- Use simpler variable names

---

## 🎯 Project Ideas

1. **Calculator** - Create a simple calculator app
2. **Grade System** - Calculate grades from marks
3. **Temperature Converter** - Convert Celsius to Fahrenheit
4. **Number Games** - Guess the number game
5. **Word Counter** - Count words in a sentence
6. **List Sorter** - Implement a sorting algorithm

---

## 📖 Resources

- **README.md** - Project overview and setup
- **QUICKSTART.md** - Quick start guide
- **SYNTAX_CHEATSHEET.md** - Quick reference
- **examples.js** - Built-in example programs

---

## 🚀 Next Steps

1. Load an example from the dropdown
2. Modify and run it
3. Try creating your own program
4. Share your creations!

Happy coding in Tamil! 🇮🇳

---

**Version:** 1.0  
**Last Updated:** March 2026  
**Created for:** Tamil Language Programming Education
# 🇮🇳 Tamil Programming Language Compiler

A web-based compiler that translates Tamil keywords to Python and executes the code directly in the browser.

## 📋 Features

- **Tamil-to-Python Translation**: Write code using Tamil keywords that get translated to Python
- **Live Execution**: Code runs instantly using Pyodide (Python in WebAssembly)
- **Dark Theme UI**: Modern, user-friendly interface with syntax reference
- **Real-time Output**: See results in the console below the editor
- **No Backend Required**: Everything runs in your browser!

## 🔤 Tamil Keywords Reference

| Tamil | Python | Example |
|-------|--------|---------|
| `sollu` | `print` | `"Vanakam" sollu` → `print("Vanakam")` |
| `irundhal:` | `if:` | `5 > 3 irundhal:` |
| `illana:` | `else:` | `illana:` |
| `illana X irundhal:` | `elif X:` | `illana age < 18 irundhal:` |
| `i 1-10 varai:` | `for i in range(1, 10):` | `i 1-10 varai:` |
| `i in X:` | `for i in X:` | `i in numbers:` |
| `X irukkumvarai:` | `while X:` | `i < 10 irukkumvarai:` |
| `niruththu` | `break` | `niruththu` |
| `thodaru` | `continue` | `thodaru` |
| `seiyal` | `def` | `seiyal add(a, b):` |
| `vaangu()` | `input()` | `name = vaangu()` |

## 💻 Example Programs

### Hello World
```
"Vanakam" sollu
```

### Conditional Logic
```
age = 20
age >= 18 irundhal:
    "Aandu periya vayasu" sollu
illana:
    "Sirumai vayasu" sollu
```

### Loop Example
```
i 1-6 varai:
    i sollu
```

### Function Definition
```
seiyal greet(name):
    "Vanakam, " + name sollu

greet("Arjun")
```

### While Loop with Break
```
i = 1
10 irukkumvarai:
    i sollu
    i = i + 1
    i == 5 irundhal:
        niruththu
```

## 🚀 How to Run

### Option 1: Using Python's Built-in Server
```bash
cd "c:\VSC\student info\dp"
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: Using Node.js http-server
```bash
npm install -g http-server
cd "c:\VSC\student info\dp"
http-server
```

### Option 3: Using VS Code Live Server Extension
- Install the "Live Server" extension in VS Code
- Right-click on `index.html` and select "Open with Live Server"

## 📝 Notes

- All Python data types (int, str, list, dict, etc.) work normally
- Arithmetic operators: `+`, `-`, `*`, `/`, `//`, `%` (same as Python)
- Logical operators: `and`, `or`, `not` (same as Python)
- Comparison operators: `==`, `!=`, `<`, `>`, `<=`, `>=` (same as Python)
- Return statement stays as `return`
- String concatenation uses `+` operator

## ⌨️ Keyboard Shortcuts

- **Ctrl+Enter**: Compile and run the code
- **Clear Button**: Clear the console output

## 🎨 Theme

The interface uses a dark theme with cyan accent colors for better programming experience.

---

**Created for Tamil Programming Language Learning** 🎓

# 🇮🇳 Tamil Programming Language Compiler

Welcome to the Tamil Programming Language Compiler! This project allows you to write code using Tamil keywords that automatically translate to Python and execute in your browser.

## 📂 Documentation Files

### 🚀 [QUICKSTART.md](QUICKSTART.md) - Start Here!
Get up and running in 2 minutes. Choose your preferred method to launch the compiler and write your first program.

### 📚 [DOCUMENTATION.md](DOCUMENTATION.md) - Complete Guide
Comprehensive documentation covering all keywords, syntax, and examples. Perfect for learning everything about the language.

### 📋 [SYNTAX_CHEATSHEET.md](SYNTAX_CHEATSHEET.md) - Quick Reference
Quick lookup table for all Tamil keywords and their Python equivalents. Great for quick searches while coding.

### 📖 [README.md](README.md) - Overview
Project overview, features, and basic information about the compiler.

---

## 🎯 Quick Links

- **Web Interface:** [index.html](index.html)
- **Compiler Logic:** [compiler.js](compiler.js)
- **Example Programs:** [examples.js](examples.js)
- **Run on Windows:** Double-click [run.bat](run.bat)

---

## 🌟 Key Features

✅ **Easy Tamil Syntax** - Write code using simple Tamil words
✅ **Python Translation** - Automatically converts to Python
✅ **Live Execution** - Runs directly in your browser
✅ **Dark Theme UI** - Modern, easy-on-the-eyes interface
✅ **Built-in Examples** - Learn from sample programs
✅ **No Installation** - Works on any modern browser
✅ **Real-time Feedback** - See errors and output instantly

---

## 🗺️ Navigation Guide

**I want to...**

- **Start coding now** → Go to [QUICKSTART.md](QUICKSTART.md)
- **Learn all keywords** → Read [DOCUMENTATION.md](DOCUMENTATION.md)
- **Quick lookup** → Use [SYNTAX_CHEATSHEET.md](SYNTAX_CHEATSHEET.md)
- **Understand project** → Check [README.md](README.md)
- **See examples** → Load from dropdown in the compiler
- **Run the program** → Double-click [run.bat](run.bat)

---

## 💬 Tamil Keywords Quick Reference

| Tamil | Python | Example |
|-------|--------|---------|
| `sollu` | `print()` | `"Hello" sollu` |
| `irundhal:` | `if:` | `x > 5 irundhal:` |
| `illana:` | `else:` | `illana:` |
| `illana X irundhal:` | `elif X:` | `illana x < 5 irundhal:` |
| `i 1-10 varai:` | `for i in range(1,10):` | `i 1-10 varai:` |
| `i in X:` | `for i in X:` | `i in numbers:` |
| `X irukkumvarai:` | `while X:` | `count irukkumvarai:` |
| `niruththu` | `break` | `niruththu` |
| `thodaru` | `continue` | `thodaru` |
| `seiyal` | `def` | `seiyal add(a,b):` |
| `vaangu()` | `input()` | `name = vaangu()` |
| `return` | `return` | `return result` |

See [SYNTAX_CHEATSHEET.md](SYNTAX_CHEATSHEET.md) for complete reference.

---

## 🎓 Learning Examples

### Hello World
```tamil
"Vanakam Kagam" sollu
```

### Simple If-Else
```tamil
age = 20
age >= 18 irundhal:
    "Adult" sollu
illana:
    "Child" sollu
```

### For Loop
```tamil
i 1-6 varai:
    i sollu
```

### Function
```tamil
seiyal greet(name):
    "Hello, " + name sollu

greet("Arjun")
```

More examples available in the compiler's built-in example dropdown!

---

## 🔧 Technical Details

- **Frontend:** HTML5, CSS3, JavaScript ES6
- **Python Runtime:** Pyodide (Python 3.10 in WebAssembly)
- **No Backend:** Runs entirely in your browser
- **No Installation:** Just open in a web browser

---

## 📦 Project Files

```
tamil-compiler/
├── index.html           # Main UI
├── compiler.js          # Translation & execution engine
├── examples.js          # Built-in example programs
├── run.bat              # Windows launcher
├── README.md            # Project overview
├── QUICKSTART.md        # Get started guide
├── SYNTAX_CHEATSHEET.md # Quick reference
├── DOCUMENTATION.md     # Complete guide
└── INDEX.md             # This file
```

---

## 🚀 Getting Started

1. **Option A: Windows Users**
   - Double-click `run.bat`
   - Open `http://localhost:8000` in your browser

2. **Option B: Manual Python Server**
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`

3. **Option C: VS Code Live Server**
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

---

## 💡 Tips for Success

1. **Start Simple** - Begin with print statements
2. **Use Examples** - Load built-in examples to learn
3. **Check Syntax** - Review the cheat sheet when unsure
4. **Read Errors** - The "Generated Python Code" helps debug
5. **Practice** - Try modifying examples to understand better

---

## ❓ FAQ

**Q: Do I need Python installed?**
A: No! Python runs in your browser via Pyodide.

**Q: Can I save my code?**
A: Copy from the editor and paste to a text file manually.

**Q: Is there a limit to program size?**
A: No, but very large loops (>10,000 iterations) may be slow.

**Q: Can I use Python libraries?**
A: Only the ones included in Pyodide (NumPy, Pandas, etc.).

**Q: Is it secure?**
A: Yes! Code runs locally in your browser, no data sent to servers.

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Page won't load | Ensure server is running on port 8000 |
| Python not executing | Wait for Pyodide to load, refresh page |
| Syntax errors | Check "Generated Python Code" in console |
| Slow performance | Avoid very large loops, close other tabs |

See [DOCUMENTATION.md](DOCUMENTATION.md) for more help.

---

## 🎯 What You Can Build

- ✅ Calculator programs
- ✅ Grade management systems
- ✅ Number games
- ✅ Text processing tools
- ✅ Data analysis scripts
- ✅ Educational programs

---

## 📞 Support

For issues or questions:
1. Check [DOCUMENTATION.md](DOCUMENTATION.md) for detailed explanations
2. Review [SYNTAX_CHEATSHEET.md](SYNTAX_CHEATSHEET.md) for syntax help
3. Look at example programs in the compiler
4. Check browser console for error messages

---

## 🎓 Educational Use

This compiler is perfect for:
- Learning programming basics in Tamil
- Teaching programming to Tamil speakers
- Understanding how compilers work
- Bilingual programming education

---

## 📝 Version Information

- **Version:** 1.0
- **Created:** March 2026
- **Python:** 3.10 (via Pyodide)
- **Browser Compatibility:** All modern browsers

---

## 🙏 Thank You!

Thank you for using the Tamil Programming Language Compiler. We hope you enjoy learning and coding in Tamil!

**Happy Coding! 🇮🇳**

---

**Next Step:** Open [QUICKSTART.md](QUICKSTART.md) to get started now!
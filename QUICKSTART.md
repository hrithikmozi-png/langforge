# Quick Start Guide - Tamil Programming Language Compiler

## Installation & Setup

You have the Tamil Programming Language Compiler ready to use! Follow these simple steps to get started.

## Method 1: Using the Batch File (Easiest for Windows)

1. **Double-click** `run.bat` in your folder
2. A command window will open and display a URL like `http://localhost:8000`
3. **Open your browser** and go to that URL
4. Start writing Tamil code!

## Method 2: Manual Python Server

If the batch file doesn't work, use Python directly:

```bash
# Open Command Prompt or PowerShell in the folder
# Then run:
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

## Method 3: Using Node.js (if installed)

```bash
npm install -g http-server
http-server
```

## Method 4: VS Code Live Server Extension

1. Install "Live Server" extension from VS Code marketplace
2. Right-click on `index.html`
3. Select "Open with Live Server"

---

## 🎯 First Program - Hello World

Copy and paste this into the editor:

```
"Vanakam Kagam" sollu
```

Click **"Compile & Run"** or press **Ctrl+Enter**

---

## 📚 More Examples

The compiler comes with built-in examples:

1. Click the **"-- Load Example --"** dropdown in the editor
2. Select an example (e.g., "Hello World", "Conditional", "For Loop")
3. The code loads automatically
4. Press **"Compile & Run"** to execute

---

## 🔧 Keyboard Shortcuts

- **Ctrl+Enter**: Compile and run the code
- **Clear Button**: Clear the console output

---

## 💡 Tips

- All Python data types work (int, str, list, dict, etc.)
- Use Python's arithmetic operators: `+`, `-`, `*`, `/`, `//`, `%`
- Use Python's logical operators: `and`, `or`, `not`
- Indentation matters (like Python)
- Comments use `#` (Python style)

---

## 📋 Common Issues

**Issue**: "Python interpreter not initialized"
- Give it a few seconds for the page to load
- Refresh the page
- Check your internet connection

**Issue**: Syntax errors in output
- Check that Tamil keywords match exactly:
  - `sollu` not `sollude`
  - `irundhal:` not `irundal:`
  - `varai:` not `varai` (don't forget the colon)

**Issue**: Print statements not showing
- Make sure to end with `sollu`
- Example: `"Hello" sollu` ✓ (correct)
- Example: `"Hello"` ✗ (wrong - no sollu)

---

## 🎓 Learning Path

1. Start with "Hello World"
2. Move to "Conditional" (if/else)
3. Try "For Loop"
4. Explore "Functions"
5. Combine multiple concepts!

---

Enjoy your Tamil Programming Journey! 🇮🇳

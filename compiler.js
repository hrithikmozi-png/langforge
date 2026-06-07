// Global reference to Python interpreter
let pyodide;

// Initialize Pyodide
async function initPyodide() {
    pyodide = await loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/'
    });
    console.log('Pyodide initialized');
}

// Initialize on page load
window.addEventListener('load', () => {
    initPyodide();
    document.getElementById('output').innerHTML = '<span style="color: #888;">Ready to compile...</span>';
});

const printConsole = (msg, style = '') => {
    const output = document.getElementById('output');
    const element = document.createElement('div');
    if (style) {
        element.innerHTML = `<span style="${style}">${escapeHtml(msg)}</span>`;
    } else {
        element.textContent = msg;
    }
    output.appendChild(element);
    output.scrollTop = output.scrollHeight;
};

const escapeHtml = (text) => {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
};

const clearConsole = () => {
    document.getElementById('output').innerHTML = '';
};

function tokenize(code) {
    // Process line by line for better context awareness
    const lines = code.split('\n');
    const processedLines = [];

    for (let line of lines) {
        // Skip empty lines and comments
        if (!line.trim()) {
            processedLines.push(line);
            continue;
        }

        // Get the indentation
        const indent = line.match(/^(\s*)/)[0];
        const trimmedLine = line.trim();

        // Process the line
        let processed = trimmedLine;

        // Function definition: seiyal name( → def name(
        processed = processed.replace(/seiyal\s+(\w+)\s*\(/g, 'def $1(');

        // For loops with range: i 1-10 varai: → for i in range(1, 10):
        processed = processed.replace(/(\w+)\s+(\d+)-(\d+)\s+varai:/g, 'for $1 in range($2, $3):');

        // For loops with iterable: i in X: → for i in X:
        // This needs to be careful not to match the "in" in other contexts
        if (processed.includes(' in ') && processed.trim().endsWith(':')) {
            processed = processed.replace(/(\w+)\s+in\s+(\w+):\s*$/g, 'for $1 in $2:');
        }

        // While loops: condition irukkumvarai: → while condition:
        processed = processed.replace(/(\S+.*?)\s+irukkumvarai:/g, 'while $1:');

        // Elif: illana condition irundhal: → elif condition:
        // MUST come before the generic if statement replacement
        processed = processed.replace(/illana\s+(.+?)\s+irundhal:/g, 'elif $1:');

        // Else: illana: → else:
        // MUST come before the generic if statement replacement
        processed = processed.replace(/illana:/g, 'else:');

        // If statement: condition irundhal: → if condition:
        processed = processed.replace(/(.+?)\s+irundhal:/g, 'if $1:');

        // Loop control
        processed = processed.replace(/\bniruththu\b/g, 'break');
        processed = processed.replace(/\bthodaru\b/g, 'continue');

        // Input/Output
        processed = processed.replace(/\bvaangu\s*\(\)/g, 'input()');

        // Print statements - more sophisticated handling
        // Pattern 1: "text" sollu → print("text")
        processed = processed.replace(/(["\'])(.+?)\1\s+sollu\b/g, 'print($1$2$1)');

        // Pattern 2: "text" + var sollu → print("text" + var)
        processed = processed.replace(/(["\'])(.+?)\1\s*\+\s*(\w+)\s+sollu\b/g, 'print($1$2$1 + $3)');

        // Pattern 3: var + "text" sollu → print(var + "text")
        processed = processed.replace(/(\w+)\s*\+\s*(["\'])(.+?)\2\s+sollu\b/g, 'print($1 + $2$3$2)');

        // Pattern 4: var sollu → print(var)
        // Be careful with this one - shouldn't match if it's part of a larger expression
        if (!processed.includes('(') && processed.trim().endsWith('sollu')) {
            processed = processed.replace(/(\w+)\s+sollu\b$/g, 'print($1)');
        }

        // Reconstruct with indentation
        processedLines.push(indent + processed);
    }

    return processedLines.join('\n');
}

function translateCode(tamilCode) {
    try {
        let pythonCode = tokenize(tamilCode);
        return pythonCode;
    } catch (error) {
        throw new Error(`Translation error: ${error.message}`);
    }
}

async function compileAndRun() {
    const codeInput = document.getElementById('codeInput').value;
    const output = document.getElementById('output');

    if (!codeInput.trim()) {
        output.innerHTML = '<span style="color: #ff5252;">❌ Please enter code to compile</span>';
        return;
    }

    output.innerHTML = '<span style="color: #ffb74d;">⏳ Compiling and running...</span>';

    try {
        // Translate Tamil code to Python
        const pythonCode = translateCode(codeInput);
        
        // Clear and prepare output
        output.innerHTML = '';
        printConsole('✓ Translation successful', 'color: #81c784;');

        if (!pyodide) {
            printConsole('❌ Python interpreter not initialized', 'color: #ff5252;');
            return;
        }

        // Capture print output
        const originalPrint = pyodide.globals.get('print');
        
        pyodide.globals.set('print', function(...args) {
            const message = args.map(arg => {
                if (arg === null) return 'None';
                if (arg === undefined) return 'undefined';
                return String(arg);
            }).join(' ');
            printConsole(message);
        });

        // Execute the Python code
        try {
            pyodide.runPython(pythonCode);
            printConsole('✓ Execution completed successfully', 'color: #81c784;');
        } catch (execError) {
            printConsole(`❌ Runtime Error: ${execError.message}`, 'color: #ff5252;');
        }
        
        // Restore original print
        pyodide.globals.set('print', originalPrint);

    } catch (error) {
        output.innerHTML = `<span style="color: #ff5252;">❌ Error: ${error.message}</span>`;
    }
}

// Allow Ctrl+Enter to compile
document.addEventListener('DOMContentLoaded', () => {
    const codeInput = document.getElementById('codeInput');
    codeInput.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.key === 'Enter') {
            compileAndRun();
        }
        
        // Handle Tab key to insert tab character instead of changing focus
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = codeInput.selectionStart;
            const end = codeInput.selectionEnd;
            const value = codeInput.value;
            
            // Insert tab character at cursor position
            codeInput.value = value.substring(0, start) + '\t' + value.substring(end);
            
            // Move cursor after the inserted tab
            codeInput.selectionStart = codeInput.selectionEnd = start + 1;
        }
    });

    // Handle example selector
    const exampleSelector = document.getElementById('exampleSelector');
    exampleSelector.addEventListener('change', (e) => {
        if (e.target.value) {
            loadExample(e.target.value);
            e.target.value = ''; // Reset selector
        }
    });
});

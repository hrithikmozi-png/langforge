// Example programs for the Tamil Programming Language Compiler

const examples = {
    helloWorld: `"Hello World" sollu`,
    
    conditional: `age = 20
age >= 18 irundhal:
    "Adult" sollu
illana:
    "Child" sollu`,
    
    forLoop: `i 1-6 varai:
    i sollu`,
    
    whileLoop: `i = 1
i < 10 irukkumvarai:
    i sollu
    i = i + 1`,
    
    function: `seiyal add(a, b):
    return a + b

result = add(5, 3)
result sollu`,
    
    listIteration: `numbers = [1, 2, 3, 4, 5]
i in numbers:
    i sollu`,
    
    stringConcat: `name = "Arjun"
"Hello, " + name sollu`,
    
    nestedIfElse: `score = 75
score >= 90 irundhal:
    "Grade A" sollu
illana score >= 80 irundhal:
    "Grade B" sollu
illana score >= 70 irundhal:
    "Grade C" sollu
illana:
    "Grade F" sollu`,
    
    tableMultiplication: `num = 5
"Multiplication table of 5:" sollu
i 1-11 varai:
    result = num * i
    "5 * " + i + " = " + result sollu`,
    
    fibonacci: `a = 0
b = 1
"Fibonacci Series:" sollu
i 1-8 varai:
    a sollu
    c = a + b
    a = b
    b = c`,
    
    breakContinue: `"Numbers with break:" sollu
i 1-10 varai:
    i == 6 irundhal:
        niruththu
    i sollu

"Numbers skipping 3:" sollu
i 1-6 varai:
    i == 3 irundhal:
        thodaru
    i sollu`
};

// Function to load examples (if needed)
function loadExample(exampleName) {
    const codeInput = document.getElementById('codeInput');
    if (examples[exampleName]) {
        codeInput.value = examples[exampleName];
    }
}

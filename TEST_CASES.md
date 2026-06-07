# 🇮🇳 Tamil Compiler - Test Cases & Expected Outputs

This file shows test cases you can try in the compiler to verify it's working correctly.

## Test 1: Hello World

**Input:**
```tamil
"Vanakam Kagam" sollu
```

**Expected Output:**
```
Vanakam Kagam
```

---

## Test 2: Simple Arithmetic

**Input:**
```tamil
x = 10
y = 20
sum = x + y
sum sollu
```

**Expected Output:**
```
30
```

---

## Test 3: If Statement

**Input:**
```tamil
age = 25
age >= 18 irundhal:
    "Adullu" sollu
illana:
    "Sirumai Pullavargal" sollu
```

**Expected Output:**
```
Adullu
```

---

## Test 4: Nested If-Else

**Input:**
```tamil
score = 85
score >= 90 irundhal:
    "A" sollu
illana score >= 80 irundhal:
    "B" sollu
illana score >= 70 irundhal:
    "C" sollu
illana:
    "F" sollu
```

**Expected Output:**
```
B
```

---

## Test 5: For Loop with Range

**Input:**
```tamil
i 1-6 varai:
    i sollu
```

**Expected Output:**
```
1
2
3
4
5
```

---

## Test 6: For Loop with List

**Input:**
```tamil
fruits = ["Pazham", "Banana", "Manga"]
fruit in fruits:
    fruit sollu
```

**Expected Output:**
```
Pazham
Banana
Manga
```

---

## Test 7: While Loop with Break

**Input:**
```tamil
i = 1
10 irukkumvarai:
    i == 5 irundhal:
        niruththu
    i sollu
    i = i + 1
```

**Expected Output:**
```
1
2
3
4
```

---

## Test 8: While Loop with Continue

**Input:**
```tamil
i = 1
6 irukkumvarai:
    i == 3 irundhal:
        i = i + 1
        thodaru
    i sollu
    i = i + 1
```

**Expected Output:**
```
1
2
4
5
```

---

## Test 9: Function Definition

**Input:**
```tamil
seiyal add(a, b):
    return a + b

result = add(15, 25)
result sollu
```

**Expected Output:**
```
40
```

---

## Test 10: String Concatenation

**Input:**
```tamil
name = "Arjun"
"Vanakam, " + name sollu
```

**Expected Output:**
```
Vanakam, Arjun
```

---

## Test 11: Multiplication Table

**Input:**
```tamil
n = 5
i 1-6 varai:
    product = n * i
    "5 * " + i + " = " + product sollu
```

**Expected Output:**
```
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5 = 25
```

---

## Test 12: Fibonacci Series

**Input:**
```tamil
a = 0
b = 1
i 1-8 varai:
    a sollu
    temp = a + b
    a = b
    b = temp
```

**Expected Output:**
```
0
1
1
2
3
5
8
13
```

---

## Test 13: Even/Odd Checker

**Input:**
```tamil
number = 7
number % 2 == 0 irundhal:
    "Even" sollu
illana:
    "Odd" sollu
```

**Expected Output:**
```
Odd
```

---

## Test 14: Sum of Numbers

**Input:**
```tamil
seiyal sum_range(n):
    total = 0
    i 1-n irundhal:
        total = total + i
    return total

result = sum_range(5)
"Sum: " + result sollu
```

**Expected Output:**
```
Sum: 15
```

---

## Test 15: List Operations

**Input:**
```tamil
numbers = [10, 20, 30, 40, 50]
num in numbers:
    num sollu
```

**Expected Output:**
```
10
20
30
40
50
```

---

## Test 16: Dictionary Iteration

**Input:**
```tamil
student = {"name": "Arjun", "age": 20}
key in student:
    student[key] sollu
```

**Expected Output (order may vary):**
```
Arjun
20
```

---

## Test 17: Complex Function

**Input:**
```tamil
seiyal factorial(n):
    n <= 1 irundhal:
        return 1
    return n * factorial(n - 1)

result = factorial(5)
"5! = " + result sollu
```

**Expected Output:**
```
5! = 120
```

---

## Test 18: Nested Loops

**Input:**
```tamil
i 1-4 varai:
    j 1-i varai:
        j sollu
```

**Expected Output:**
```
1
1
2
1
2
3
```

---

## Test 19: Multiple Variables

**Input:**
```tamil
a = 10
b = 20
c = 30
"a = " + a sollu
"b = " + b sollu
"c = " + c sollu
"Total = " + (a + b + c) sollu
```

**Expected Output:**
```
a = 10
b = 20
c = 30
Total = 60
```

---

## Test 20: Conditional with And/Or

**Input:**
```tamil
x = 15
x > 10 and x < 20 irundhal:
    "In range" sollu
illana:
    "Out of range" sollu
```

**Expected Output:**
```
In range
```

---

## Debugging Tips

If a test doesn't work as expected:

1. **Check the Generated Python Code**
   - The console shows the translated Python code
   - Look for syntax errors in the translation

2. **Common Issues:**
   - Missing colons (`:`) at the end of control structures
   - Wrong indentation (must be consistent)
   - Typos in Tamil keywords
   - Mismatched quotes in strings

3. **Examples of Common Mistakes:**
   ```
   ❌ x > 5 irundhal        (missing :)
   ✅ x > 5 irundhal:        (correct)
   
   ❌ i 1-10 varai          (missing :)
   ✅ i 1-10 varai:          (correct)
   
   ❌ "Hello sollu          (mismatched quotes)
   ✅ "Hello" sollu          (correct)
   ```

---

## Performance Test

Try this to see how fast the compiler executes:

**Input:**
```tamil
seiyal test_speed():
    total = 0
    i 1-1001 varai:
        total = total + i
    return total

result = test_speed()
"Sum of 1-1000: " + result sollu
```

**Expected Output:**
```
Sum of 1-1000: 500500
```

This should execute almost instantly!

---

## All Tests Passing?

Great! Your Tamil Compiler is working perfectly! 🎉

Now you can:
✅ Write your own programs
✅ Modify existing examples
✅ Learn Tamil programming concepts
✅ Share with friends and family

Enjoy coding in Tamil! 🇮🇳

@echo off
REM Start a local HTTP server to serve the Tamil Compiler
REM This requires Python to be installed and in your PATH

echo Starting Tamil Programming Language Compiler...
echo.
echo Opening in browser at http://localhost:8000
echo.
echo Press Ctrl+C in this window to stop the server
echo.

python -m http.server 8000

@echo off
REM Who Let Noa Brew - Setup Script
REM This script sets up the project directories and installs dependencies

echo Creating directory structure...
if not exist "src\components" mkdir "src\components"
if not exist "src\pages" mkdir "src\pages"

echo Creating React files...
node createFiles.js

echo.
echo Installing dependencies...
call npm install

echo.
echo Setup complete! You can now run:
echo   npm run dev
echo.
pause

@echo off
echo ===================================
echo GitHub上传脚本
echo ===================================
echo.
echo 请按照以下步骤操作：
echo.
echo 1. 在GitHub创建仓库（已创建可跳过）
echo 2. 输入您的GitHub用户名：
set /p username="用户名: "
echo.
echo 3. 输入仓库名称（默认: cross-border-ecommerce-analytics）：
set /p reponame="仓库名: "
if "%reponame%"=="" set reponame=cross-border-ecommerce-analytics
echo.
echo 4. 初始化Git并上传...
echo.
git init
git add .
git commit -m "Initial commit: 跨境电商数据分析实训平台"
git branch -M main
git remote add origin https://github.com/%username%/%reponame%.git
git push -u origin main
echo.
echo ===================================
echo 如果提示登录，请在浏览器中完成授权
echo ===================================
pause

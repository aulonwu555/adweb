// 改變頁面背景顏色
document.querySelector('button').addEventListener('click', function() {
    document.body.style.backgroundColor = '#ffcccb';
});

document.getElementById('username').addEventListener('input', function() {
    const username = this.value.trim();
    const errorField = document.getElementById('usernameError');
    if (username.length < 3) {
        errorField.textContent = '用戶名需至少包含 3 個字符';
    } else {
        errorField.textContent = '';
    }
});

document.getElementById('password').addEventListener('input', function() {
    const password = this.value;
    const errorField = document.getElementById('passwordError');
    if (password.length < 6) {
        errorField.textContent = '密碼需至少包含 6 個字符';
    } else {
        errorField.textContent = '';
    }
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    // 模擬後端驗證
    const validUsername = 'user123';
    const validPassword = 'password123';

    if (username === validUsername && password === validPassword) {
        alert('登入成功！');
    } else {
        alert('用戶名或密碼錯誤！');
    }
});

// 檢查用戶名只能包含字母和數字
const usernamePattern = /^[a-zA-Z0-9]{3,}$/;
// 檢查密碼包含至少一個大寫字母、數字，且長度至少6
const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

if (!usernamePattern.test(username)) {
    alert('用戶名只能包含字母和數字，且至少3個字符');
    return;
}

if (!passwordPattern.test(password)) {
    alert('密碼需包含至少一個大寫字母、一個數字，且至少6個字符');
    return;
}


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    fetch('https://example.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('登入成功！');
        } else {
            alert('登入失敗，請檢查用戶名和密碼！');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// 表單提交功能
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // 阻止表單預設提交行為

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('請填寫所有欄位！');
        return;
    }

    alert('登入成功！');
});


console.log('JavaScript 檔案已成功載入！');

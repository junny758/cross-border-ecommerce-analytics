// 角色切换
function switchRole(role) {
  document.querySelectorAll('.role-badge').forEach(b => b.classList.remove('active'));
  document.querySelector('.role-badge.' + role).classList.add('active');
  const isTeacher = role === 'teacher';
  document.querySelectorAll('.learner-only').forEach(el => el.style.display = isTeacher ? 'none' : '');
  document.querySelectorAll('.teacher-only').forEach(el => el.style.display = isTeacher ? '' : 'none');
}

// 资源标签切换
function switchTab(tabId) {
  document.querySelectorAll('.rtab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.resource-section').forEach(s => s.classList.remove('active'));
  document.querySelector('[data-tab="' + tabId + '"]').classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

// 页面加载时激活当前导航
document.addEventListener('DOMContentLoaded', function() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === path) link.classList.add('active');
  });
  // 默认激活第一个资源标签
  const firstTab = document.querySelector('.rtab');
  if (firstTab) {
    const tabId = firstTab.getAttribute('data-tab');
    if (tabId) switchTab(tabId);
  }
});

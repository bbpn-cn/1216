// 导航栏滚动效果
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 移动端菜单
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

function calculateMenuHeight() {
    let totalHeight = 0;
    navItems.forEach(item => {
        totalHeight += item.offsetHeight;
    });
    return totalHeight;
}

function toggleMenu() {
    menuBtn.classList.toggle('active');
    if (!navLinks.classList.contains('active')) {
        navLinks.style.height = '0';
        setTimeout(() => {
            navLinks.classList.add('active');
            navLinks.style.height = calculateMenuHeight() + 'px';
        }, 10);
    } else {
        navLinks.style.height = '0';
        navLinks.addEventListener('transitionend', function handler() {
            navLinks.classList.remove('active');
            navLinks.removeEventListener('transitionend', handler);
        });
    }
}

// 点击菜单按钮
menuBtn.addEventListener('click', toggleMenu);

// 点击导航链接时关闭菜单
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            toggleMenu();
        }
    });
});

// 监听窗口大小变化
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        navLinks.style.height = '';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 技能进度条动画
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        bar.style.setProperty('--progress', progress + '%');
    });
}

// 监听滚动事件
function handleSkillAnimation() {
    const skillsSection = document.querySelector('.skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    if (skillsSection.getBoundingClientRect().top < window.innerHeight * 0.8) {
        skillBars.forEach(bar => bar.classList.add('animate'));
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    initSkillBars();
    handleSkillAnimation();
    window.addEventListener('scroll', handleSkillAnimation);
});

// 检查元素是否在视口中
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 滚动处理函数
function handleScroll() {
    const skillsSection = document.querySelector('.skills');
    if (isElementInViewport(skillsSection)) {
        animateSkillBars();
    }
}

// 监听滚动事件
window.addEventListener('scroll', handleScroll);
// 页面加载时也执行一次
handleScroll();

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // 这里添加表单提交逻辑
    alert('消息已发送！');
    contactForm.reset();
});

// 页面加载完成后的动画
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    handleScroll();
});

// 添加滚动动画
function revealOnScroll() {
    const elements = document.querySelectorAll('.project-card, .skill-card, .stat-item');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        
        if (isVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// 初始化元素样式
document.querySelectorAll('.project-card, .skill-card, .stat-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
});

// 监听滚动事件
window.addEventListener('scroll', revealOnScroll);
// 页面加载时也执行一次
revealOnScroll();

// 返回顶部功能
const backToTop = document.getElementById('back-to-top');

// 监听滚动事件
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// 点击返回顶部
backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}); 
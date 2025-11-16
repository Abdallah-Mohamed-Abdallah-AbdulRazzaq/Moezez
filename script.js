document.addEventListener('DOMContentLoaded', () => {

    // --- 1. تأثير الظهور عند التمرير (Fade-in on Scroll) ---
    // (هذا الكود موجود لديك بالفعل)
    const hiddenElements = document.querySelectorAll('.hidden');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.1
    });

    hiddenElements.forEach(el => observer.observe(el));

    
    // --- 2. تفعيل الرابط النشط في شريط التنقل (Active Nav Link) ---
    // (هذا الكود موجود لديك بالفعل)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                const activeLink = document.querySelector(`nav ul li a[href="#${id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-30% 0px -70% 0px'
    });

    sections.forEach(section => navObserver.observe(section));

    // --- (إضافة 4) كود الميلان ثلاثي الأبعاد (3D Card Tilt) ---
    // (هذا هو الكود الجديد والمميز)
    
    // اختيار جميع البطاقات
    const cards = document.querySelectorAll('.card');

    // تحديد أقصى درجة ميلان
    const maxRotate = 15; // (15 درجة)

    cards.forEach(card => {
        // عند تحريك الماوس فوق البطاقة
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // موضع الماوس الأفقي داخل البطاقة
            const y = e.clientY - rect.top; // موضع الماوس العمودي داخل البطاقة

            const width = card.offsetWidth;
            const height = card.offsetHeight;

            // حساب نسبة الميلان (من -15 إلى +15)
            // (y / height - 0.5) يعطينا قيمة من -0.5 إلى 0.5
            const rotateX = (y / height - 0.5) * maxRotate * -1; // (نعكس الإشارة لتبدو طبيعية)
            const rotateY = (x / width - 0.5) * maxRotate;

            // تطبيق التأثير (نضيف منظور + إضاءة خفيفة)
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        // عند مغادرة الماوس للبطاقة
        card.addEventListener('mouseleave', () => {
            // إعادة البطاقة لوضعها الطبيعي
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
    // --- (نهاية الكود الجديد) ---

});
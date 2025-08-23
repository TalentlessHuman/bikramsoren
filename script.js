document.addEventListener('DOMContentLoaded', function() {
    // TAB SYSTEMS 
    const mainTabs = document.querySelectorAll('.sidebar li');
    const mainTabContents = document.querySelectorAll('.tab-content');
    const contentArea = document.querySelector('.content');

    mainTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            mainTabs.forEach(t => t.classList.remove('active'));
            mainTabContents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');

            // THIS IS THE SCROLLING FIX 
            if (contentArea) {
                contentArea.scrollTop = 0;
            }
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;

        });
    });

    const projectTabs = document.querySelectorAll('.project-tabs .tab-btn');
    const projectContainers = document.querySelectorAll('.projects-container');

    projectTabs.forEach(btn => {
        btn.addEventListener('click', () => {
            projectTabs.forEach(b => b.classList.remove('active'));
            projectContainers.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            const target = btn.dataset.target;
            document.getElementById(target).classList.add('active');
        });
    });

    // TYPEWRITER EFFECT
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = "Hi, It's Bikram Soren";
        let i = 0;
        typingText.innerHTML = "";
        function typeWriter() {
            if (i < text.length) {
                typingText.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        typeWriter();
    }

    // DYNAMIC CONTENT RENDERING 

    // 1. PROJECTS
    // const projects = [
    //     { title: "Personal Portfolio Website", description: "A responsive portfolio built with HTML, CSS, and vanilla JavaScript.", tags: ["HTML", "CSS", "JavaScript"], image: "https://placehold.co/600x400/2C3E50/FFFFFF?text=Portfolio", demo: "#", code: "#", status: "completed" },
    //     { title: "Cattlytix", description: "A dynamic form for research. Further details are confidential (For Now).", tags: ["HTML", "CSS", "JS", "Python", "Excel"], image: "https://placehold.co/600x400/2ecc71/FFFFFF?text=Cattlytix", demo: "#", code: "#", status: "completed" },
    //     { title: "OralAI", description: "An innovative oral cancer detection device. Further details are confidential (For Now).", tags: ["Python", "C", "C++", "Arduino", "TensorFlow"], image: "https://placehold.co/600x400/e74c3c/FFFFFF?text=OralAI", demo: "#", code: "#", status: "ongoing" },
    //     { title: "Blockchain Based Tracibility System", description: "Developing a traceability system using blockchain technology to ensure transparency and security in supply chains. Further details are confidential (For Now).", tags: ["Blockchain", "Security", "Web3"], image: "https://placehold.co/600x400/3498db/FFFFFF?text=Blockchain", demo: "#", code: "#", status: "ongoing" },
    //     { title: "Bollworm Counter", description: "An agricultural tech project to automatically count bollworms, aiding in pest control and crop management.", tags: ["HTML", "JS", "CSS", "Firebase", "Arduino", "C++"], image: "https://placehold.co/600x400/9b59b6/FFFFFF?text=Bollworm Counter", demo: "#", code: "#", status: "ongoing" }
    // ];
    const projects = [
        { title: "Personal Portfolio Website", description: "A responsive portfolio built with HTML, CSS, and vanilla JavaScript.", tags: ["HTML", "CSS", "JavaScript"], image: "https://placehold.co/600x400/2C3E50/FFFFFF?text=Portfolio", status: "completed" },
        { title: "Cattlytix", description: "A dynamic form for research. Further details are confidential (For Now).", tags: ["HTML", "CSS", "JS", "Python", "Excel"], image: "https://placehold.co/600x400/2ecc71/FFFFFF?text=Cattlytix", status: "completed" },
        { title: "Gurukul Computer Academy", description: "I have developed a comprehensive website for Gurukul Computer Academy, a institution dedicated to providing quality computer education to students.", tags: ["HTML", "CSS", "JS"], image: "https://placehold.co/600x400/F1C40F/FFFFFF?text=Gurukul Computer Academy", link: "gurukulcomputeracademy.vercel.app", status: "completed"},
        { title: "OralAI", description: "An innovative oral cancer detection device. Further details are confidential (For Now).", tags: ["Python", "C", "C++", "Arduino", "TensorFlow"], image: "https://placehold.co/600x400/e74c3c/FFFFFF?text=OralAI", status: "ongoing" },
        { title: "Blockchain Based Tracibility System", description: "Developing a traceability system using blockchain technology to ensure transparency and security in supply chains. Further details are confidential (For Now).", tags: ["Blockchain", "Security", "Web3"], image: "https://placehold.co/600x400/3498db/FFFFFF?text=Blockchain", status: "ongoing" },
        { title: "Bollworm Counter", description: "An agricultural tech project to automatically count bollworms, aiding in pest control and crop management.", tags: ["HTML", "JS", "CSS", "Firebase", "Arduino", "C++"], image: "https://placehold.co/600x400/9b59b6/FFFFFF?text=Bollworm Counter", status: "ongoing" }
    ];

    const completedGrid = document.getElementById('completed-projects-grid');
    const ongoingGrid = document.getElementById('ongoing-projects-grid');

    if (completedGrid) completedGrid.innerHTML = '';
    if (ongoingGrid) ongoingGrid.innerHTML = '';

    const completedProjects = projects.filter(p => p.status === 'completed');
    const ongoingProjects = projects.filter(p => p.status === 'ongoing');

    const createProjectCard = (project) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card hidden';
        projectCard.innerHTML = `
            <div class="project-image"><img src="${project.image}" alt="${project.title}"></div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
            </div>`;
        return projectCard;
    };
    // const createProjectCard = (project) => {
    //     const projectCard = document.createElement('div');
    //     projectCard.className = 'project-card hidden';
    //     projectCard.innerHTML = `
    //         <div class="project-image"><img src="${project.image}" alt="${project.title}"></div>
    //         <div class="project-info">
    //             <h3 class="project-title">${project.title}</h3>
    //             <p class="project-description">${project.description}</p>
    //             <div class="project-tags">${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}</div>
    //             <div class="project-links">
    //                 <a href="${project.demo}" class="project-link" target="_blank"><i class="fas fa-external-link-alt"></i> Demo</a>
    //                 <a href="${project.code}" class="project-link" target="_blank"><i class="fab fa-github"></i> Code</a>
    //             </div>
    //         </div>`;
    //     return projectCard;
    // };

    if (completedGrid) completedProjects.forEach(project => completedGrid.appendChild(createProjectCard(project)));
    if (ongoingGrid) ongoingProjects.forEach(project => ongoingGrid.appendChild(createProjectCard(project)));

    // WORK EXPERIENCE
    const workExperience = [
        { title: "Junior Researcher", company: "National Institute of Biomedical Genomics", date: "Feb 2024 - Present", description: "Developed a functional prototype for cancer detection using data-driven techniques. Currently working on developing the prototype using IoT and Machine Learning to build intelligent and real-time responsive system." },
        { title: "Full Stack Web & IoT Developer", company: "ImageIDGP Research Lab", date: "Jan 2025 - Present", description: "Working on multiple real-time IoT projects focused on smart systems and automation, while having successfully completed several full-stack web applications. Actively involved in mentoring juniors, guiding them through IoT development and hands-on implementation of various projects." },
        { title: "Convenor", company: "Infinitio (Math Club of KGEC)", date: "July 2025 - June 2026", description: "Leading the mathematics club of Kalyani Government Engineering College as the Convenor. Responsible for planning and executing all club activities, workshops, and events." },
        { title: "Convenor", company: "Les Quizerables (Quiz Club of KGEC)", date: "July 2025 - June 2026", description: "Holding the position of Convenor for the quiz club of Kalyani Government Engineering College. Responsible for organizing quizzes, managing club operations, and promoting a vibrant quizzing culture." },
        { title: "NSS Coordinator & Lead", company: "NSS Unit-KGEC", date: "July 2024 - June 2026", description: "Serving as the Lead and Coordinator of Volunteers in the NSS unit, responsible for guiding team members in social service activities. Actively organizing and managing community outreach programs to ensure effective participation and impact." }
    ];
    const experienceTimeline = document.getElementById('experience-timeline');
    if (experienceTimeline) {
        experienceTimeline.innerHTML = '';
        workExperience.forEach(exp => {
            const item = document.createElement('div');
            item.className = 'timeline-item hidden';
            item.innerHTML = `
                <div class="timeline-date">${exp.date}</div>
                <div class="timeline-content">
                    <h4 class="timeline-title">${exp.title}</h4>
                    <span class="timeline-subtitle">${exp.company}</span>
                    <p class="timeline-description">${exp.description}</p>
                </div>`;
            experienceTimeline.appendChild(item);
        });
    }

    // EDUCATION
    const education = [
        { degree: "B. Tech in Information Technology", university: "KALYANI GOVERNMENT ENGINEERING COLLEGE", date: "2022 - 2026", description: "Currently pursuing my bachelor's degree." },
        { degree: "Intermediate (H.S.)", university: "UNION ACADEMY, KALCHINI", date: "2020 - 2022", description: "Percentage: 85.40%" },
        { degree: "Matriculation", university: "UNION ACADEMY, KALCHINI", date: "2013 - 2020", description: "Percentage: 91.00%" }
    ];
    const educationTimeline = document.getElementById('education-timeline');
    if (educationTimeline) {
        educationTimeline.innerHTML = '';
        education.forEach(edu => {
            const item = document.createElement('div');
            item.className = 'timeline-item hidden';
            item.innerHTML = `
                <div class="timeline-date">${edu.date}</div>
                <div class="timeline-content">
                    <h4 class="timeline-title">${edu.degree}</h4>
                    <span class="timeline-subtitle">${edu.university}</span>
                    <p class="timeline-description">${edu.description}</p>
                </div>`;
            educationTimeline.appendChild(item);
        });
    }

    // SKILLS
    const skills = {
        "Frontend": [
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" }
        ],
        "Backend": [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
        ],
        "Database": [
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
            { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/7/73/Microsoft_Excel_2013-2019_logo.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", note: "Less Proficient" }
        ],
        "Tools & Research": [
            { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
            { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" }
        ]
    };

    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skillsContainer.innerHTML = '';
        for (const category in skills) {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category hidden';
            let skillsHTML = skills[category].map(skill => `
                <div class="skill-item">
                    <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
                    <span class="skill-name">${skill.name} ${skill.note ? `<small>(${skill.note})</small>` : ''}</span>
                </div>`).join('');
            categoryDiv.innerHTML = `<h3>${category}</h3>${skillsHTML}`;
            skillsContainer.appendChild(categoryDiv);
        }
    }

    // ACHIEVEMENTS & CERTIFICATIONS
    const achievements = [
        {
            title: "CERTIFICATE: COURSE COMPLETION",
            issuer: "GeeksforGeeks",
            date: "June 2024 - Dec 2024",
            description: "Successfully completed a 22-week course on GfG 160 - 160 Days of Problem Solving (With Summer Workshops).",
            image: "assets/160gfg.png",
            link: "https://media.geeksforgeeks.org/courses/certificates/8b2c25bab599842a7046fcad61c5d4e9.pdf" // TODO: Add the actual verification link
        },
        {
            title: "FASTEST TIME TO SOLVE MIRROR RUBIK'S CUBE BLINDFOLDED USING ONE HAND",
            issuer: "World Wide Book of Records",
            date: "July 2022",
            description: "THE WORLD RECORD OF FASTEST TIME TO SOLVE MIRROR RUBIK'S CUBE BLINDFOLDED USING ONE HAND IS ACHIEVED BY BIKRAM SOREN ON 27 JULY 2022 IN UTTAR LATABARI, WEST BENGAL ,INDIA. HE (Born 10 March, 2005) SOLVED MIRROR RUBIK'S CUBE BLINDFOLDED USING ONE HAND IN 4 MINUTES 56.70 SECONDS AND HAS SET A RECORD FOR THE WORLDWIDE BOOK OF RECORDS.",
            image: "assets/wwbor.png",
            link: "https://www.worldwideworldrecords.com/post/fastest-time-to-solve-mirror-rubik-s-cube-blindfolded-using-one-hand#:~:text=THE%20WORLD%20RECORD%20OF%20FASTEST,LATABARI%2C%20WEST%20BENGAL%20%2CINDIA." // TODO: Add the actual verification link
        },
        {
            title: "CERTIFICATE OF COMPLETION OF A RESEARCH INTERNSHIP AT THE IMAGEIDGP LAB",
            issuer: "COPI KGEC, IMAGEIDGP LAB",
            date: "3rd July 2025",
            description: "This certificate is awarded to Bikram Soren, in recognition of successfully completing a research internship at the ImageIDGP Lab, showcasing dedication, expertise, and outstanding contributions to the field.",
            image: "assets/imageidgp.png",
            link: "https://drive.google.com/file/d/1_cireUMoieAfn4P65pa9ipG3Xjcw_WoH/view?usp=sharing"
        }
    ];

    const achievementsGrid = document.getElementById('achievements-grid');
    if (achievementsGrid) {
        achievementsGrid.innerHTML = '';
        achievements.forEach(ach => {
            const card = document.createElement('div');
            card.className = 'achievement-card hidden';
            card.innerHTML = `
                <div class="achievement-image">
                    <img src="${ach.image}" alt="${ach.title}">
                </div>
                <div class="achievement-info">
                    <h3 class="achievement-title">${ach.title}</h3>
                    <p class="achievement-issuer">${ach.issuer} - <span class="achievement-date">${ach.date}</span></p>
                    <p class="achievement-description">${ach.description}</p>
                    <div class="achievement-links">
                         <a href="${ach.link}" class="achievement-link" target="_blank"><i class="fas fa-link"></i> Verify</a>
                    </div>
                </div>`;
            achievementsGrid.appendChild(card);
        });
    }

    // FORM SUBMISSION LOGIC 
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const form = e.target;
            const data = new FormData(form);
            const status = document.getElementById('formStatus');

            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    status.innerHTML = "Thanks for your message!";
                    status.style.color = 'var(--accent)';
                    form.reset();
                } else {
                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                        } else {
                            status.innerHTML = "Oops! There was a problem submitting your form.";
                        }
                        status.style.color = '#e74c3c';
                    });
                }
            }).catch(error => {
                status.innerHTML = "Oops! There was a problem submitting your form.";
                status.style.color = '#e74c3c';
            });
        });
    }

    // SHARE BUTTON LOGIC
    const shareBtn = document.getElementById('share-btn');
    const modal = document.getElementById('share-modal');
    const closeBtn = document.querySelector('.close-btn');
    const shareLinkInput = document.getElementById('share-link-input');
    const copyLinkBtn = document.getElementById('copy-link-btn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', async (event) => {
            event.preventDefault();
    
            const shareData = {
                title: "Bikram Soren | Portfolio",
                text: "Check out Bikram Soren's portfolio!",
                url: window.location.href
            };
    
            if (navigator.share) {
                try {
                    await navigator.share(shareData);
                    console.log('Portfolio shared successfully');
                } catch (err) {
                    console.log(`Couldn't share portfolio: ${err}`);
                }
            } else {
                shareLinkInput.value = window.location.href;
                modal.classList.remove('hidden');
            }
        });
    }
    
    if (modal) {
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.classList.add('hidden');
            }
        });
    
        copyLinkBtn.addEventListener('click', () => {
            shareLinkInput.select();
            navigator.clipboard.writeText(shareLinkInput.value).then(() => {
                copyLinkBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyLinkBtn.textContent = 'Copy';
                }, 2000);
            });
        });
    }
    
    // SCROLL ANIMATION 
    function setupObserver() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.1
        });

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));
    }
    setupObserver();
    
    mainTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            setTimeout(setupObserver, 50); 
        });
    });


    // THEME SWITCHER LOGIC 
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
        }
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            let theme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
            localStorage.setItem('theme', theme);
        });
    }
});

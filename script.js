
const portfolio = {

    name: "Aditya Malviya",


    stats: [
        {
            value: "4",
            label: "Projects"
        },
        {
            value: "10+",
            label: "Technical Skills"
        },
        {
            value: "",
            label: ""
        }
    ],

    skills: [
        "C",
        "C++",
        "Python",
        "NumPy",
        "Pandas",
        "Machine Learning",
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "Data Structures",
        "Algorithms",
        "Object Oriented Programming",
        "Git",
        "GitHub",
        "Flask"
    ],

    experience: [

        {
            role: "Python Intern",
            company: "Indore Municipal Corporation",
            Location: "Onsite",
            period: "Jan 2025 - Mar 2025",
            summary:
                "Developed an AI-powered chatbot using Botpress to assist citizens by providing information about municipal services and cybercrime awareness. Collaborated with the team to design conversational workflows, integrate knowledge bases, improve user interactions, and enhance the chatbot's accuracy and overall user experience."
        },

        {
            role: "CyberSecurity Intern",
            company: "Ceeras",
            Location: " Remote ",
            period: "Feb 2025 - Jun 2025",
            summary:
                "Gained practical experience in cybersecurity concepts, vulnerability assessment, network security, and security best practices. Assisted in security analysis, researched common cyber threats, and learned industry-standard tools and techniques to strengthen application and system security"
        }

    ],

    education: [

        {
            school: "IIPS DAVV, Indore",
            degree: "Integrated MCA",
            period: "2022 - 2027",
            score: "7.86 CGPA"
        },

        {
            school: "Shrikanwartara Public Higher Secondary School",
            degree: "Class XII",
            period: "2022",
            score: "79%"
        },

        {
            school: "St. Mary's Senior Secondary School",
            degree: "Class X",
            period: "2020",
            score: "78.8%"
        }

    ],

    projects: [

        {
            title: "Plant Disease Detection",
            category: "Machine Learning",
            url: "https://github.com/214aaditya/Cropdisease-detection",
            tags: ["Python", "Flask", "TensorFlow"],
            description:
                "AI-powered web application that detects plant diseases and provides disease information along with preventive measures."
        },
        {
            title: "Cheating-Survelliance-System",
            category: "Machine",
            url: "https://github.com/214aaditya/Cheating-Surveillance-System",
            tags: ["Python", "Flask", "OpenCV", "Computer Vision", "AI"],
            description:
            "A computer vision-based online exam proctoring system that detects suspicious activities in real time using Python, Flask, and OpenCV."
        }
        ,
        {
            title: "Temperature Converter",
            category: "JavaScript",
            url: "https://214aditya.github.io/Temperature-convertor/",
            tags: ["HTML", "CSS", "JavaScript"],
            description:
            "Interactive temperature conversion tool supporting Celsius, Fahrenheit and Kelvin."
        },
        
        {
            title: "Netflix Clone",
            category: "Frontend",
            url: "https://github.com/214aditya/Netflix-Clone",
            tags: ["HTML", "CSS", "JavaScript"],
            description:
                "Responsive Netflix-inspired user interface with modern design."
        },
        
    ],
    

    codingProfiles: [

        {
            platform: "GitHub",
            username: "2144aditya",
            url: "https://github.com/214aaditya"
        },

        {
            platform: "LinkedIn",
            username: "Aditya Malviya",
            url: "https://www.linkedin.com/in/aditya-malviya-a0a30b256/"
        },

        

    ],

    contacts: [

        {
            label: "Email",
            value: "adityamalviya2104@gmail.com",
            url: "mailto:adityamalviya2104@gmail.com"
        },

        {
            label: "GitHub",
            value: "214aditya",
            url: "https://github.com/214aditya"
        },

        {
            label: "LinkedIn",
            value: "Aditya Malviya",
            url: "https://www.linkedin.com/in/aditya-malviya-a0a30b256/"
        }

    ]
};

const select = (selector) => document.querySelector(selector);

/* Stats */

function renderStats() {

    select("#quickStats").innerHTML =
        portfolio.stats.map(stat => `
            <div class="stat">
                <strong>${stat.value}</strong>
                <span>${stat.label}</span>
            </div>
        `).join("");
}



/* Skills */

function renderSkills() {

    select("#skillCount").textContent =
        `${portfolio.skills.length} Skills`;

    select("#skillsList").innerHTML =
        portfolio.skills.map(skill => `
            <span class="chip">${skill}</span>
        `).join("");
}

/* Experience */

function renderExperience() {

    select("#experienceList").innerHTML =
        portfolio.experience.map(exp => `
            <article class="timeline-item">
                <h3>${exp.role}</h3>
                <p class="meta">
                    ${exp.company} | ${exp.period}
                </p>
                <p>${exp.summary}</p>
            </article>
        `).join("");
}

/* Education */

function renderEducation() {

    select("#educationList").innerHTML =
        portfolio.education.map(item => `
            <article class="timeline-item">
                <h3>${item.school}</h3>
                <p>${item.degree}</p>
                <p>${item.period} | ${item.score}</p>
            </article>
        `).join("");
}

/* Projects */

function renderProjects() {

    select("#projectList").innerHTML =
        portfolio.projects.map(project => `
            <article class="project-card">

                <div>
                    <p class="section-kicker">
                        ${project.category}
                    </p>

                    <h3>${project.title}</h3>
                </div>

                <p>${project.description}</p>

                <div class="tag-row">
                    ${project.tags.map(tag =>
                        `<span class="tag">${tag}</span>`
                    ).join("")}
                </div>

                <a
                    class="project-link"
                    href="${project.url}"
                    target="_blank">
                    View Project →
                </a>

            </article>
        `).join("");
}


/* Coding Profiles */

function renderCodingProfiles() {

    select("#codingProfiles").innerHTML =
        portfolio.codingProfiles.map(profile => `
            <a
                class="contact-link"
                href="${profile.url}"
                target="_blank">

                <span>${profile.platform}</span>

                <strong>${profile.username}</strong>

            </a>
        `).join("");
}

/* Contact */

function renderContacts() {

    select("#contactList").innerHTML =
        portfolio.contacts.map(contact => `
            <a
                class="contact-link"
                href="${contact.url}"
                target="_blank">

                <span>${contact.label}</span>

                <strong>${contact.value}</strong>

            </a>
        `).join("");
}

/* Dark Theme */

const themeButton =
    document.getElementById("themeToggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (
        document.body.classList.contains("dark-theme")
    ) {
        themeButton.innerHTML = "☀️";
    } else {
        themeButton.innerHTML = "🌙";
    }
});

/* Initial Render */

renderStats();
renderSkills();
renderExperience();
renderEducation();
renderProjects();

renderCodingProfiles();
renderContacts();


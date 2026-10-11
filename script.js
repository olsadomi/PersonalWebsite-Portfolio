let lastFocusedPlanet = null;

function zoomIntoPlanet(planetId) {
    // Hide all planets and title
    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.style.opacity = '0';
        planet.style.transition = 'opacity 0.5s ease-in-out';
    });

    const title = document.querySelector('.title');
    title.style.opacity = '0';
    title.style.transition = 'opacity 0.5s ease-in-out';

    // Get the clicked planet's position and size
    const planet = document.getElementById(planetId);
    lastFocusedPlanet = planet;
    const planetRect = planet.getBoundingClientRect();

    // Create a clone of the planet for the zoom effect
    const clone = planet.cloneNode(true);
    clone.removeAttribute('id');
    clone.setAttribute('aria-hidden', 'true');
    clone.style.position = 'fixed';
    clone.style.top = `${planetRect.top}px`;
    clone.style.left = `${planetRect.left}px`;
    clone.style.width = `${planetRect.width}px`;
    clone.style.height = `${planetRect.height}px`;
    clone.style.margin = '0';
    clone.style.transition = 'all 0.5s ease-in-out';
    document.body.appendChild(clone);

    // Animate the clone to the center of the screen
    setTimeout(() => {
        clone.style.top = '50%';
        clone.style.left = '50%';
        clone.style.transform = 'translate(-50%, -50%) scale(5)';
        clone.style.opacity = '0';
    }, 10);

    // Show the zoomed-in content after the animation
    setTimeout(() => {
        document.getElementById('zoomed-content').classList.remove('hidden');
        document.getElementById('zoomed-content').classList.add('visible');
        document.body.classList.add('dialog-open');

        // Add content based on the clicked planet
        const zoomedDetails = document.getElementById('zoomed-details');
        let surfaceColor = '';

        switch (planetId) {
            case 'planet-personal-details':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #d9d9d9, #8a8a8a, #2f2f2f)';
                zoomedDetails.innerHTML = `
                <div class="details-section personal-details">
            <div class="info-block name-block">
                <h2>Olsa Domi</h2>
                <div class="course-bubbles personal-bubbles">
                    <div class="course-bubble">
                        <h4>Web Developer · Author · Youth Advocate</h4>
                        <p>Building digital solutions with social impact.</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Based in</h4>
                        <p>Prishtina, Kosovo</p>
                    </div>
                </div>
            </div>
            <div class="info-block location-block">
                <h3>Experience</h3>
                <div class="course-bubbles personal-bubbles">
                    <div class="course-bubble">
                        <h4>Web Developer</h4>
                        <p>Sogody · Full-time</p>
                        <p class="credential-meta">August 2026–Present · Pristina</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Quality Assurance Intern</h4>
                        <p>Sogody · Internship</p>
                        <p class="credential-meta">April–August 2026 · Pristina</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Social Media Manager</h4>
                        <p>Domi &amp; Rochas · Full-time</p>
                        <p class="credential-meta">June 2021–September 2023 · Kosovo</p>
                    </div>
                </div>
            </div>
            <div class="info-block languages-block">
                <h3>Languages</h3>
                <div class="course-bubbles personal-bubbles compact-bubbles">
                    <div class="course-bubble"><h4>Albanian</h4><p>Native</p></div>
                    <div class="course-bubble"><h4>English</h4><p>C1 · Professional proficiency</p></div>
                </div>
            </div>
            <div class="info-block contact-block">
                <h3>Contact</h3>
                <div class="course-bubbles personal-bubbles compact-bubbles">
                    <a class="course-bubble contact-link" href="mailto:olsadomi@gmail.com" aria-label="Connect by email">
                        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3V5Zm2 2v.5l7 5 7-5V7H5Zm14 10V9.9l-7 5-7-5V17h14Z"/></svg>
                        <span>Connect</span>
                    </a>
                    <a class="course-bubble contact-link linkedin-link" href="https://linkedin.com/in/olsa-domi-019612273" target="_blank" aria-label="View LinkedIn profile">
                        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.7a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.8h3.8V21H3.3V9.8Zm6.1 0H13v1.5h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.2c0-1.2 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21H9.4V9.8Z"/></svg>
                        <span>View profile</span>
                    </a>
                    <a class="course-bubble contact-link" href="https://github.com/olsadomi" target="_blank" aria-label="View GitHub profile">
                        <svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.6-1.4-2.3-.3-4.6-1.1-4.6-5A3.9 3.9 0 0 1 6.7 8.6a3.6 3.6 0 0 1 .1-2.8s.8-.3 2.8 1.1a9.5 9.5 0 0 1 5.1 0c2-1.4 2.8-1.1 2.8-1.1a3.6 3.6 0 0 1 .1 2.8 3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>
                        <span>View profile</span>
                    </a>
                </div>
            </div>
        </div>
                <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
                break;
            case 'planet-education':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #c2e0ff, #4d79ff, #001a66)';
                zoomedDetails.innerHTML = `
                 <div class="details-section education-details">
            <div class="info-block high-school-block">
                <h3>Master's Degree</h3>
                <div class="course-bubbles education-bubbles">
                    <div class="course-bubble">
                        <h4>Computer and Software Engineering</h4>
                        <p>University of Pristina</p>
                        <p>Faculty of Electrical and Computer Engineering</p>
                        <p class="credential-meta">2026–Present</p>
                    </div>
                </div>
            </div>
            <div class="info-block university-block">
                <h3>Bachelor's Degree</h3>
                <div class="course-bubbles education-bubbles">
                    <div class="course-bubble">
                        <h4>BSc in Computer and Software Engineering</h4>
                        <p>University of Pristina</p>
                        <p class="credential-meta">2023–2026</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Erasmus+ Semester</h4>
                        <p>Hellenic Mediterranean University · Crete</p>
                        <p class="credential-meta">2025–2026</p>
                    </div>
                </div>
            </div>
            <div class="info-block courses-block">
                <h3>Licenses &amp; Certifications</h3>
                <div class="course-bubbles certification-list" tabindex="0" aria-label="Scrollable licenses and certifications">
                    <div class="course-bubble">
                        <h4>Using Git for Distributed Development</h4>
                        <p>The Linux Foundation</p>
                        <p class="credential-meta">Issued June 2026</p>
                        <p class="credential-id">Credential ID: Y7XRRZ9DJGA5</p>
                    </div>
                    <div class="course-bubble">
                        <h4>DevOps and AI on AWS: AIOps</h4>
                        <p>Amazon Web Services</p>
                        <p class="credential-meta">Issued June 2026</p>
                        <p class="credential-id">Credential ID: LI2U5KB2U44I</p>
                    </div>
                    <div class="course-bubble">
                        <h4>AI XForm Bootcamp</h4>
                        <p>GIZ Kosovo</p>
                        <p class="credential-meta">Issued September 2023 · Artificial Intelligence</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Introduction to Programming Using Java</h4>
                        <p>MakerMinds L.L.C.</p>
                        <p class="credential-meta">Issued June 2023 · Java</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Participation in EYE2023</h4>
                        <p>European Parliament</p>
                        <p class="credential-meta">2023 · Facilitation</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Full Stack Developer</h4>
                        <p>Arra Academy</p>
                        <p class="credential-meta">Issued January 2023 · Full-Stack Development</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Volunteering Appreciation</h4>
                        <p>YMCA Europe</p>
                        <p class="credential-meta">Issued December 2022</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Gold Award Leadership Certification</h4>
                        <p>YMCA Kosovo</p>
                        <p class="credential-meta">Issued June 2022 · Peer Leadership</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Java Programming Fundamentals</h4>
                        <p>Romb Academy</p>
                        <p class="credential-meta">Issued June 2022 · Java</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Effective Leadership</h4>
                        <p>HP Foundation</p>
                        <p class="credential-meta">Issued March 2022</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Success Mindset</h4>
                        <p>HP Foundation</p>
                        <p class="credential-meta">Issued February 2022</p>
                    </div>
                    <div class="course-bubble">
                        <h4>Introduction to Programming Using HTML and CSS</h4>
                        <p>Digital School</p>
                        <p class="credential-meta">Issued June 2021 · Front-End Development</p>
                    </div>
                </div>
            </div>
        </div>
                <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
                break;
            case 'planet-activism-volunteer':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #fff4b3, #ffcc00, #b38600)';
                zoomedDetails.innerHTML = `
                <div class="details-section activism-details">
            <div class="activism-block">
                <div class="activism-content">
                    <p class="activity-date">September 2026</p>
                    <h3>Inclusive AI Hackathon</h3>
                    <p>Built an accessible-education solution with UNICEF Kosovo and its partners.</p>
                    <a class="activity-link" href="https://unicef-project-steel.vercel.app/" target="_blank">View project</a>
                </div>
                <div class="activism-image">
                    <img src="images/picupdated2.png" alt="Presenting the inclusive education project at UNICEF's Inclusive AI Hackathon" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <p class="activity-date">June 2026</p>
                    <h3>Western Balkans Youth Forum</h3>
                    <p>Developed regional recommendations for the Berlin Process youth agenda with RYCO in Budva.</p>
                </div>
                <div class="activism-image">
                    <img src="images/picupdated1.png" alt="Speaking at RYCO's Western Balkans Youth Forum in Budva" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <p class="activity-date">April 2026</p>
                    <h3>SHEcurity Conference &amp; CTF</h3>
                    <p>Joined a conference and Capture the Flag event advancing women in cybersecurity.</p>
                </div>
                <div class="activism-image">
                    <img src="images/picupdated3.png" alt="Speaking at the SHEcurity Conference and CTF 2026" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <p class="activity-date">June 2025</p>
                    <h3>7th UN Youth Assembly</h3>
                    <p>Guest speaker sharing my journey across engineering, publishing and international youth advocacy.</p>
                </div>
                <div class="activism-image">
                    <img src="images/picupdated4.png" alt="Participating in the 7th United Nations Youth Assembly in Kosovo" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <p class="activity-date">April 2025</p>
                    <h3>MOBILE-Y Youth Exchange</h3>
                    <p>Built leadership, teamwork and intercultural skills with YMCA Sweden and YMCA Kosovo.</p>
                </div>
                <div class="activism-image">
                    <img src="images/picupdated5.png" alt="Taking part in the MOBILE-Y youth exchange in Sweden" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <h3>Youth Reference Group</h3>
                    <p>Group Facilitator · UNICEF Kosovo · 2024–Present</p>
                </div>
                <div class="activism-image">
                    <img src="images/yrg.jpg" alt="Youth Reference Group" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <h3>YMCA Kosovo</h3>
                    <p>Peer Lead · 2020–2022</p>
                </div>
                <div class="activism-image">
                    <img src="images/ymca.jpg" alt="YMCA Kosovo" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <h3>Western Balkans Young Partners Group</h3>
                    <p>Youth Activist · UNICEF ECARO · 2023–2025</p>
                </div>
                <div class="activism-image">
                    <img src="images/wbypg.jpg" alt="Western Balkans Youth Partners Group" loading="lazy">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <h3>Young People's Action Team</h3>
                    <p>Member · Generation Unlimited · 2024–2026</p>
                </div>
                <div class="activism-image">
                    <img src="images/ypat.jpg" alt="Young People's Action Team" loading="lazy">
                </div>
            </div>
        </div>
                <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
                break;
            case 'planet-publications':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #ffb3b3, #ff6666, #b30000)';
                zoomedDetails.innerHTML = `
                 <div class="details-section publications-details">
            <div class="publication-card">
                <div class="publication-image">
                    <img src="images/but.jpg" alt="Brenda Universit Tim">
                </div>
                <div class="publication-info">
                    <h3>"Brenda Universit Tim" ("Within My Universe")</h3>
                    <p>Philosophical novel · Blini BK · 2020</p>
                    <a href="https://www.instagram.com/p/CBnQKFdneaJ/?img_index=1" target="_blank" class="read-more-btn">Read More</a>
                </div>
            </div>
            <div class="publication-card">
                <div class="publication-image">
                    <img src="images/fm.jpg" alt="Formula Metaforike">
                </div>
                <div class="publication-info">
                    <h3>"Formula Metaforike" ("The Metaphorical Formula")</h3>
                    <p>Philosophical &amp; social genre · Shkrola · 2022</p>
                    <a href="https://www.instagram.com/p/CkJJJFiLxI2/?img_index=1" target="_blank" class="read-more-btn">Read More</a>
                </div>
            </div>
        </div>
                <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
                break;
            case 'planet-tech-skills':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #b3ffb3, #66ff66, #008000)';
                zoomedDetails.innerHTML = `
                <div class="details-section tech-skills-details">
            <div class="skill-circle java">Java</div>
            <div class="skill-square javascript">JavaScript</div>
            <div class="skill-hexagon react">React</div>
            <div class="skill-rhomb node">Node.js</div>
            <div class="skill-circle python">Python</div>
            <div class="skill-square php">PHP</div>
            <div class="skill-hexagon postgresql">PostgreSQL</div>
            <div class="skill-rhomb sql">SQL</div>
            <div class="skill-circle cpp">C / C++</div>
            <div class="skill-square csharp">C#</div>
            <div class="skill-hexagon git">Git / GitLab</div>
            <div class="skill-rhomb docker">Docker</div>
        </div>
                <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
                break;
            case 'planet-interviews':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #ffb3ff, #ff66ff, #800080)';
                zoomedDetails.innerHTML = `
                <div class="details-section interviews-details">
            <div class="interview-item">
                <a href="https://www.youtube.com/watch?v=UZbO5N_iHh8" target="_blank">
                    <img src="images/orashtate1thumbnail.jpg" alt="Interview 1 Thumbnail">
                </a>
                <a class="interview-description" href="https://www.youtube.com/watch?v=UZbO5N_iHh8" target="_blank">Ora 7 - Olsa Domi, shkrimtare - 22.07.2020 - Klan Kosova</a>
            </div>
            <div class="interview-item">
                <a href="https://www.youtube.com/watch?v=YbNWvnlUyec" target="_blank">
                    <img src="images/dukagjinithumbnail.jpg" alt="Interview 2 Thumbnail">
                </a>
                <a class="interview-description" href="https://www.youtube.com/watch?v=YbNWvnlUyec" target="_blank">Libri 'Brenda universit tim' nga Olsa Domi - RTV Dukagjini</a>
            </div>
            <div class="interview-item">
                <a href="https://www.youtube.com/watch?v=S8OsysF9548" target="_blank">
                    <img src="images/orashtate2thumbnail.jpg" alt="Interview 3 Thumbnail">
                </a>
                <a class="interview-description" href="https://www.youtube.com/watch?v=S8OsysF9548" target="_blank">Ora 7 - Shkrimtarja Olsa Domi prezanton librin e saj të ri me titull "Formula metaforike"</a>
            </div>
            <div class="interview-item">
                <a href="https://www.youtube.com/watch?v=ulU4jmNXsUg" target="_blank">
                    <img src="images/bisedethumbnail.png" alt="Interview 4 Thumbnail">
                </a>
                <a class="interview-description" href="https://www.youtube.com/watch?v=ulU4jmNXsUg" target="_blank">BISEDË - Olsa Domi gërsheton shkencën dhe artin letrar në veprat e saj - 22.01.2024</a>
            </div>
            <div class="interview-item">
                <a href="https://www.youtube.com/watch?v=PMOd4ukk7jg" target="_blank">
                    <img src="images/pasditethumbnail.png" alt="Interview 5 Thumbnail">
                </a>
                <a class="interview-description" href="https://www.youtube.com/watch?v=PMOd4ukk7jg" target="_blank">Pasdite - Çertifikimi i të rinjve në Intelegjencë Artificiale 26.09.2023</a>
            </div>
            <div class="interview-item">
                <a href="https://www.youtube.com/watch?v=ROa9LMk0CnM" target="_blank">
                    <img src="images/katrorthumbnail.jpg" alt="Interview 6 Thumbnail">
                </a>
                <a class="interview-description" href="https://www.youtube.com/watch?v=ROa9LMk0CnM" target="_blank">Te rinjte formesojne te ardhmen me programet e UNICEF - Aktivizmi Qytetar - Katror Media</a>
            </div>
             <div class="interview-item">
        <a href="https://www.kultplus.com/libri/olsa-domi-shpalose-universin-ne-romanin-e-saj-te-pare-shpreson-te-jete-nje-instrument-inkurajimi/
" target="_blank">
            <img src="images/kultplus.jpg" alt="News Portal 1">
        </a>
        <a class="interview-description" href="https://www.kultplus.com/libri/olsa-domi-shpalose-universin-ne-romanin-e-saj-te-pare-shpreson-te-jete-nje-instrument-inkurajimi/
" target="_blank">KultPlus - Olsa Domi shpalosë “Universin” në romanin e saj të parë, shpreson të jetë një instrument inkurajimi</a>
    </div>
    <div class="interview-item">
        <a href="https://albanianeducation.net/olsa-domi-nxenesja-nga-gjakova-boton-librin-e-dyte-shkrimin-e-kam-pasion-e-ardhmja-ime-te-shkencat-kompjuterike/" target="_blank">
            <img src="images/albanianeducation.png" alt="News Portal 2">
        </a>
        <a class="interview-description" href="https://albanianeducation.net/olsa-domi-nxenesja-nga-gjakova-boton-librin-e-dyte-shkrimin-e-kam-pasion-e-ardhmja-ime-te-shkencat-kompjuterike/" target="_blank">Albanian Education - Olsa Domi, nxënësja nga Gjakova boton librin e dytë: Shkrimin e kam pasion, e ardhmja ime te shkencat kompjuterike</a>
    </div>
</div>
        </div>
                <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
                break;
            case 'planet-international-forums':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #b3ffff, #66ffff, #008080)';
                zoomedDetails.innerHTML = `
                <div class="details-section forums-details">
            <div class="forum-block">
                <div class="forum-image">
                    <img src="images/eye.jpg" alt="European Youth Event">
                </div>
                <h3>The European Youth Event - EYE (European Parliament, Strasbourg)</h3>
                <p>Workshop Facilitator · June 2023</p>
                <a href="https://www.unicef.org/eca/media/30161/file/Bulletin%205%20July%202023.pdf" target="_blank" class="forum-btn">View Bulletin</a>
            </div>
            <div class="forum-block">
                <div class="forum-image">
                    <img src="images/wbsummit.jpg" alt="Western Balkans Summit">
                </div>
                <h3>The Western Balkans Summit (Friend of Europe, Brussels)</h3>
                <p>Kosovo Representative, Future Panel · December 2023</p>
                <a href="https://www.instagram.com/p/C0kSGiILZ7a/" target="_blank" class="forum-btn">Watch Speech</a>
            </div>
            <div class="forum-block">
                <div class="forum-image">
                    <img src="images/etf.jpg" alt="Empowering Futures Event">
                </div>
                <h3>“Empowering Futures: Demystifying Career Pathways through a Youth Lens” (ETF & UNICEF ECARO, Brussels)</h3>
                <p>Workshop Facilitator · March 2024</p>
                <a href="https://www.unicef.org/eca/media/34181/file/Learning%20for%20careers%20ECARO.pdf" target="_blank" class="forum-btn">Download Report</a>
            </div>
        </div>
                <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
                break;
            default:
                zoomedDetails.innerHTML = `
                    <div class="details-section">
                        <h2>Details Not Found</h2>
                    </div>
                    <div class="planet-surface" style="background: ${surfaceColor};"></div>
                `;
        }

        zoomedDetails.querySelectorAll('a[target="_blank"]').forEach(link => {
            link.rel = 'noopener noreferrer';
        });
        document.getElementById('zoomed-content').setAttribute('aria-label', planet.textContent.trim());
        document.querySelector('.close-btn').focus();
        clone.remove();
    }, 500);
}

function zoomOut() {
    const zoomedContent = document.getElementById('zoomed-content');
    zoomedContent.classList.remove('visible');
    window.setTimeout(() => zoomedContent.classList.add('hidden'), 250);
    document.body.classList.remove('dialog-open');

    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.style.opacity = '1';
    });

    const title = document.querySelector('.title');
    title.style.opacity = '1';
    if (lastFocusedPlanet) lastFocusedPlanet.focus();
}

document.querySelectorAll('.planet').forEach(planet => {
    planet.addEventListener('click', () => zoomIntoPlanet(planet.dataset.section));
});

document.querySelector('.close-btn').addEventListener('click', zoomOut);

document.getElementById('zoomed-content').addEventListener('click', event => {
    if (event.target.id === 'zoomed-content') zoomOut();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !document.getElementById('zoomed-content').classList.contains('hidden')) zoomOut();
});

function createStars(total) {
    const galaxy = document.querySelector('.galaxy');
    const fragment = document.createDocumentFragment();
    for (let index = 0; index < total; index += 1) {
        const star = document.createElement('span');
        star.className = 'star';
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        fragment.appendChild(star);
    }
    galaxy.appendChild(fragment);
}

createStars(window.innerWidth > 768 ? 140 : 70);

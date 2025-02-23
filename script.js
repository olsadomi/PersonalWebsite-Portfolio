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
    const planetRect = planet.getBoundingClientRect();

    // Create a clone of the planet for the zoom effect
    const clone = planet.cloneNode(true);
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

        // Add content based on the clicked planet
        const zoomedDetails = document.getElementById('zoomed-details');
        let surfaceColor = '';

        switch (planetId) {
            case 'planet-personal-details':
                surfaceColor = 'radial-gradient(circle at 30% 30%, #d9d9d9, #8a8a8a, #2f2f2f)';
                zoomedDetails.innerHTML = `
                <div class="details-section">
            <div class="info-block name-block">
                <h2>Olsa Domi</h2>
                <p>Student | Author | Activist</p>
            </div>
            <div class="info-block location-block">
                <h3>Location</h3>
                <p>Prishtinë | Gjakovë</p>
            </div>
            <div class="info-block languages-block">
                <h3>Languages</h3>
                <ul>
                    <li>Albanian (Native)</li>
                    <li>English (Fluent)</li>
                    <li>French (Elementary)</li>
                </ul>
            </div>
            <div class="info-block contact-block">
                <h3>Contact</h3>
                <p>Email: olsadomi@gmail.com</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/olsa-domi-019612273" target="_blank">My LinkedIn Profile</a></p>
                <p>GitHub: <a href="https://github.com/olsadomi" target="_blank">My GitHub Profile</a></p>
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
                <h3>High School</h3>
                <p class="hsname"><strong>"Hajdar Dushi" Gymnasium, Gjakovë</strong></p>
                <p class="hsdegree">Natural Sciences (2020-2023)</p>
            </div>
            <div class="info-block university-block">
                <h3>University</h3>
                <p class="uniname"><strong>University of Prishtina</strong></p>
                <p>Faculty of Computer and Electrical Engineering (FIEK)</p>
                <p class="unidegree">Bachelor's degree, Computer and Software Engineering (2023)</p>
            </div>
            <div class="info-block courses-block">
                <h3>Courses</h3>
                <div class="course-bubbles">
                    <div class="course-bubble">
                        <p><strong>Digital School (2021)</strong></p>
                        <p>HTML, CSS & JavaScript</p>
                    </div>
                    <div class="course-bubble">
                        <p><strong>Romb Academy (2022)</strong></p>
                        <p>Java Programming</p>
                    </div>
                    <div class="course-bubble">
                        <p><strong>Arra Academy (2023)</strong></p>
                        <p>Full-Stack Development</p>
                    </div>
                    <div class="course-bubble">
                        <p><strong>MakerMinds L.L.C. (2023)</strong></p>
                        <p>Java Programming</p>
                    </div>
                    <div class="course-bubble">
                        <p><strong>GIZ Kosovo</strong></p>
                        <p>Artificial Intelligence Bootcamp</p>
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
                    <h3>Youth Reference Group</h3>
                    <p>UNICEF Kosovo</p>
                </div>
                <div class="activism-image">
                    <img src="images/yrg.jpg" alt="Youth Reference Group">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <h3>YMCA Kosovo</h3>
                </div>
                <div class="activism-image">
                    <img src="images/ymca.jpg" alt="YMCA Kosovo">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <h3>Western Balkans Youth Partners Group</h3>
                    <p>UNICEF ECARO</p>
                </div>
                <div class="activism-image">
                    <img src="images/wbypg.jpg" alt="Western Balkans Youth Partners Group">
                </div>
            </div>
            <div class="activism-block">
                <div class="activism-content">
                    <h3>Young People's Action Team</h3>
                    <p>Generation Unlimited</p>
                </div>
                <div class="activism-image">
                    <img src="images/ypat.jpg" alt="Young People's Action Team">
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
                    <p>June, 2020</p>
                    <a href="https://www.instagram.com/p/CBnQKFdneaJ/?img_index=1" target="_blank" class="read-more-btn">Read More</a>
                </div>
            </div>
            <div class="publication-card">
                <div class="publication-image">
                    <img src="images/fm.jpg" alt="Formula Metaforike">
                </div>
                <div class="publication-info">
                    <h3>"Formula Metaforike" ("The Metaphorical Formula")</h3>
                    <p>October, 2022</p>
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
            <div class="skill-square mysql">MySQL</div>
            <div class="skill-hexagon postgresql">PostgreSQL</div>
            <div class="skill-rhomb wordpress">WordPress</div>
            <div class="skill-circle html">HTML</div>
            <div class="skill-square css">CSS</div>
            <div class="skill-hexagon javascript">JavaScript</div>
            <div class="skill-rhomb ai">AI</div>
            <div class="skill-circle cpp">C++</div>
            <div class="skill-square csharp">C#</div>
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
                <p>June, 2023</p>
                <a href="https://www.unicef.org/eca/media/30161/file/Bulletin%205%20July%202023.pdf" target="_blank" class="forum-btn">View Bulletin</a>
            </div>
            <div class="forum-block">
                <div class="forum-image">
                    <img src="images/wbsummit.jpg" alt="Western Balkans Summit">
                </div>
                <h3>The Western Balkans Summit (Friend of Europe, Brussels)</h3>
                <p>December, 2023</p>
                <a href="https://www.instagram.com/p/C0kSGiILZ7a/" target="_blank" class="forum-btn">Watch Speech</a>
            </div>
            <div class="forum-block">
                <div class="forum-image">
                    <img src="images/etf.jpg" alt="Empowering Futures Event">
                </div>
                <h3>“Empowering Futures: Demystifying Career Pathways through a Youth Lens” (ETF & UNICEF ECARO, Brussels)</h3>
                <p>March, 2024</p>
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

        clone.remove();
    }, 500);
}

function zoomOut() {
    const zoomedContent = document.getElementById('zoomed-content');
    zoomedContent.classList.remove('visible');
    zoomedContent.classList.add('hidden');

    const planets = document.querySelectorAll('.planet');
    planets.forEach(planet => {
        planet.style.opacity = '1';
    });

    const title = document.querySelector('.title');
    title.style.opacity = '1';
}

const planetSurface = document.querySelector('.planet-surface');
document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    planetSurface.style.transform = `perspective(500px) rotateX(${y}deg) rotateY(${x}deg)`;
});
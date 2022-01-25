function afterLogin(){
    return `<nav id="navContainer">
    <div class="navBar">
        <div class="logo"><a href="/internshala"><img src="https://internshala.com/static/images/common/new_internshala_logo.svg" alt=""></a></div>
        <div class="navLinks">
            <ul class="links">
                <li>
                    <a class="internshipColor" href="#">Internship</a>
                    <i class='bx bx-caret-down arrow arrow1'></i>
                    <ul class="internshipsSubMenu subMenu">
                        <li class="location">
                            <a class="locationName" href="#">Location</a>
                            <ul id="getId" class="locationSubMenu subMenu">
                                <li><a href="#">Work From Home</a></li>
                                <li><a href="#">Internship in Bangalore</a></li>
                                <li><a href="#">Internship in Delhi</a></li>
                                <li><a href="#">Internship in Hyderabad</a></li>
                                <li><a href="#">Internship in Mumbai</a></li>
                                <li><a href="#">Internship in Chennai</a></li>
                                <li><a href="#">Internship in Pune</a></li>
                                <li><a href="#">Internship in Kolkata</a></li>
                                <li><a href="#">Internship in Jaipur</a></li>
                                <li><a href="#">International Internship</a></li>
                                <li><a href="#">View all internship</a></li>
                            </ul>
                        </li>
                        <li class="profiles">
                            <a class="profileName" href="#">Profile</a>
                            <ul class="profilesSubMenu subMenu">
                                <li><a  href="#">Computer Science Internship</a></li>
                                <li><a href="#">Marketing Internship</a></li>
                                <li><a href="#">Finance Internship</a></li>
                                <li><a href="#">Graphic Design Internship</a></li>
                                <li><a href="#">Architecture Internship</a></li>
                                <li><a href="#">Mechanical Internship</a></li>
                                <li><a href="#">HR Internship</a></li>
                                <li><a href="#">Digital Marketing Internship</a></li>
                                <li><a href="#">Law Internship</a></li>
                                <li><a href="#">Electronics Internship</a></li>
                                <li><a href="#">Content Writing Internship</a></li>
                                <li><a href="#">Civil Internship</a></li>
                                <li><a href="#">Campus Ambassador Internship</a></li>
                                <li><a href="#">View all internship</a></li>
                            </ul>
                        </li>
                        <li class="categories">
                            <a class="categoryName" href="#">Category</a>
                            <ul class="categoriesSubMenu subMenu">
                                <li><a href="#">Engineering Internship</a></li>
                                <li><a href="#">MBA Internship</a></li>
                                <li><a href="#">Part-Time Jobs/Internships</a></li>
                                <li><a href="#">Humanities Internships</a></li>
                                <li><a href="#">Science Internships</a></li>
                                <li><a href="#">Creative Internships</a></li>
                                <li><a href="#">Internship with Job Offer</a></li>
                                <li><a href="#">Internships for Woman</a></li>
                                <li><a href="#">View all internships</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li id="train">
                    <a class="trainingColor" href="#">Online Training <a id="navbarOffers" href="#">OFFERS</a> </a>
                    <i class='bx bx-caret-down arrow arrow2'></i>
                    <ul class="trainingSubMenu subMenu">
                        <li class="programming">
                            <a class="programmingName" href="#">Programming</a>
                            <ul class="programmingSubMenu subMenu">
                                <li><a href="#">Programming with Python</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Ethical Hacking</a></li>
                                <li><a href="#">Programming with C and C++</a></li>
                                <li><a href="#">Android App Development</a></li>
                                <li><a href="#">Core Java</a></li>
                                <li><a href="#">React</a></li>
                                <li><a href="#">Blockchain</a></li>
                                <li><a href="#">Angular</a></li>
                                <li><a href="#">Git & GitHub</a></li>
                                <li><a href="#">How to Ace Coding Interviews</a></li>
                                <li><a href="#">Data Structures & Algorithms</a></li>
                                <li><a href="#">Clinical Trials Analysis & Reporting</a></li>
                                <li><a href="#">Matlab</a></li>
                                <li><a href="#">Software Testing</a></li>
                                <li><a href="#">Node JS</a></li>
                                <li><a href="#">Robotic Process Automation</a></li>
                                <li><a href="#">PLC Programming</a></li>
                                <li><a href="#">AR/VR</a></li>
                            </ul>
                        </li>
                        <li class="business">
                            <a class="businessName" href="#">Business & Management</a>
                            <ul class="businessSubMenu subMenu">
                                <li><a href="#">Digital Marketing</a></li>
                                <li><a href="#">Advanced Excel</a></li>
                                <li><a href="#">Financial Modeling and Valuation</a></li>
                                <li><a href="#">Business Communication Skills</a></li>
                                <li><a href="#">Beginner's Trading Certification</a></li>
                                <li><a href="#">Tally</a></li>
                                <li><a href="#">Human Resources Management</a></li>
                                <li><a href="#">Advanced Human Resources Management</a></li>
                                <li><a href="#">SQL for Data Analytics</a></li>
                                <li><a href="#">Business Analytics</a></li>
                                <li><a href="#">Digital Marketing Specialization<a id="newOffers" href="#">NEW</a></a></li>
                            </ul>
                        </li>
                        <li class="core">
                            <a class="coreName" href="#">Core Engineering</a>
                            <ul class="coreSubMenu subMenu">
                                <li><a href="#">AutoCAD</a></li>
                                <li><a href="#">Advanced 3D</a></li>
                                <li><a href="#">SOLIDWORKS</a></li>
                                <li><a href="#">Advanced SOLIDWORKS</a></li>
                                <li><a href="#">STAAD Pro</a></li>
                                <li><a href="#">Fusion 360</a></li>
                                <li><a href="#">Internet of Things</a></li>
                                <li><a href="#">Ansys</a></li>
                                <li><a href="#">3D Printing</a></li>
                                <li><a href="#">PCB Design</a></li>
                                <li><a href="#">Arduino</a></li>
                                <li><a href="#">CATIA</a></li>
                                <li><a href="#">MATLAB</a></li>
                                <li><a href="#">Engineering Drawing</a></li>
                                <li><a href="#">VLSI Design</a></li>
                            </ul>
                        </li>
                        <li class="dataScience">
                            <a class="dataScienceName" href="#">Data Science</a>
                            <ul class="dataScienceSubMenu subMenu">
                                <li><a href="#">Machine Learning</a></li>
                                <li><a href="#">Data Science</a></li>
                                <li><a href="#">Tableau</a></li>
                                <li><a href="#">Deep Learning</a></li>
                                <li><a href="#">SAS Programming</a></li>
                                <li><a href="#">Clinical Trial Analysis & Reporting</a></li>
                                <li><a href="#">Statistic for Data Science</a></li>
                                <li><a href="#">Power BI</a></li>
                                <li><a href="#">SQL for Data Analytics</a></li>
                                <li><a href="#">Data Specializations <a id="newOffers" href="#">NEW</a></a></li>
                                <li><a href="#">Natural Language Processing</a></li>
                            </ul>
                        </li>
                        <li class="design">
                            <a class="designName" href="#">Design</a>
                            <ul class="designSubMenu subMenu">
                                <li><a href="#">Graphic Design</a></li>
                                <li><a href="#">UI/UX Design</a></li>
                                <li><a href="#">Video Editing</a></li>
                                <li><a href="#">Animation</a></li>
                                <li><a href="#">WordPress</a></li>
                                <li><a href="#">Digital Art</a></li>
                                <li><a href="#">Color Theory</a></li>
                            </ul>
                        </li>
                        <li class="creative">
                            <a class="creativeName" href="#">Creative Arts</a>
                            <ul class="creativeSubMenu subMenu">
                                <li><a href="#">Creative Writing</a></li>
                                <li><a href="#">Learn Guitar in 30 days</a></li>
                                <li><a href="#">Photography</a></li>
                                <li><a href="#">Calligraphy</a></li>
                                <li><a href="#">Acting</a></li>
                            </ul>
                        </li>
                        <li class="language">
                            <a class="languageName" href="#">Language</a>
                            <ul class="languageSubMenu subMenu">
                                <li><a href="#">French</a></li>
                            </ul>
                        </li>
                        <li class="career">
                            <a class="careerName" href="#">Career Development</a>
                            <ul class="careerSubMenu subMenu">
                                <li><a href="#">Business Communication Skills</a></li>
                                <li><a href="#">Internship & Job Preparation</a></li>
                                <li><a href="#">How to Ace Coding Interviews</a></li>
                                <li><a href="#">Interviews Preparation</a></li>
                            </ul>
                        </li>
                        <li class="architecture">
                            <a class="architectureName" href="#">Architecture</a>
                            <ul class="architectureSubMenu subMenu">
                                <li><a href="#">AutoCAD</a></li>
                                <li><a href="#">Autocad 3D</a></li>
                                <li><a href="#">Revit</a></li>
                            </ul>
                        </li>
                        <!-- <li class="specialization">
                            <a class="specializationName" href="#">Specializations</a>
                            <ul class="specializationSubMenu subMenu">
                                <li><a href="#">J</a></li>
                                <li><a href="#">Business & Management</a></li>
                                <li><a href="#">Core Engineering</a></li>
                                <li><a href="#">Data Science</a></li>
                                <li><a href="#">Design</a></li>
                                <li><a href="#">Creative Arts</a></li>
                                <li><a href="#">Language</a></li>
                                <li><a href="#">Career Development</a></li>
                                <li><a href="#">Achitecture</a></li>
                                <li><a href="#">Specializations</a></li>
                            </ul>
                        </li> -->
                    </ul>
                </li>
                <li class="fresher">
                    <a class="fresherColor" href="/internshala/products/jobs">Fresher Jobs</a>
                </li>
                <li>
                    <a href="#" class="bookmarkDiv"><i id="bookMarkicon" class='bx bx-bookmark'></i></a>
                </li>
                <li class="messageDiv">
                    <a href="#"><img class="messageImg" src="/images/message_new.svg"></a>
                </li>
                <li class="registeredIcon">
                    <a id="registered"><p id="userInitial">u</p><i id="registerIcon" class='bx bx-caret-down arrow3'></i></a>
                    <ul class="registerSubMenu subMenuSmall">
                        <li><a href="./studentLogin.html">As a Student</a></li>
                        <li><a href="#">As an Employeer</a></li>
                    </ul>
                </li>
                
            </ul>
        </div>
    </div>
</nav>`;
}


export default afterLogin


import profilna from "./assets/profilna.jpg";
import gif from "./assets/giphy.gif"
import project1 from "./assets/project1.webp"
import project2 from "./assets/project2.jpg"
import project3 from "./assets/project3.webp"

function Main(){
    return(
        <div>
<header class="header">
        <a href="Home" class="logo">Dimitrije Obradovic.</a>
       <div class="bx bx-menu" id="menu-icon"></div>
        <nav class="navbar">
          <a href="#home" class="active">Home</a>
          <a href="#o-meni">About</a>
          <a href="#servisi">Services</a>
          <a href="#umeca">Skills</a>
          <a href="#projekti">Projects</a>
          <a href="#kontakt">Contact</a>
        </nav>
      </header>
  
      <section class="home" id="home">
        <div class="home-container">
          <h3>Helo, My Name Is</h3>
          <h1>Dimitrije Obradovic</h1>
          <h3>And I'm a</h3>
          <h3><span>Front-End Developer</span></h3>
          <p>Welcome To My Portfolio</p>
        </div>
      </section>
  
      <section class="o-meni" id="o-meni">
        <h2 class="heading">About <span>Me</span></h2>
  
        <div class="o-meni-container">
          <img src={profilna} alt="profile" />
          <p>
            Hello, I'm Dimitrije Obradovic, a front-end developer based in Serbia.
            Welcome to my portfolio!
            <br />
            With a passion for creating visually appealing and user-friendly web
            experiences, I take pride in crafting elegant, responsive, and
            efficient websites.
            <br />
            Whether you're looking for a modern and dynamic web presence or need
            assistance with a front-end development project, you've come to the
            right place. Feel free to explore my portfolio to get a glimpse of my
            work and expertise.
            <br />
            I look forward to the opportunity to collaborate with you on your next
            web project.
          </p>
        </div>
      </section>
  
      <section class="servisi" id="servisi">
        <h2 class="heading">Our <span>Services</span></h2>
  
        <div class="servisi-container">
          <div class="servis-box">
            <h2>-Front End Development-</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              consequuntur amet sint. Velit doloribus praesentium accusantium
              expedita quae! Modi in perspiciatis expedita fugiat sit molestiae
              esse laborum, vitae deleniti sequi.
            </p>
          </div>
  
          <div class="servis-box">
            <h2>-Responsive Web Desing-</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              consequuntur amet sint. Velit doloribus praesentium accusantium
              expedita quae! Modi in perspiciatis expedita fugiat sit molestiae
              esse laborum, vitae deleniti sequi.
            </p>
          </div>
  
          <div class="servis-box">
            <h2>-HTML And CSS Development-</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
              consequuntur amet sint. Velit doloribus praesentium accusantium
              expedita quae! Modi in perspiciatis expedita fugiat sit molestiae
              esse laborum, vitae deleniti sequi.
            </p>
          </div>
        </div>
        <div class="gif">
          <img src={gif} alt="gif" />
        </div>
      </section>
  
      <section class="umeca" id="umeca">
        <h2 class="heading">My<span>Skills</span></h2>
  
        <div class="umeca-container">
          <div class="umece-box">
            <i class="fa-brands fa-html5"></i>
            <h2>HTML</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint
              ipsum nisi nemo consequatur odit nesciunt quod at molestias
              recusandae est consequuntur, deserunt provident labore eaque hic
              facilis, neque dolorum.
            </p>
          </div>
  
          <div class="umece-box">
            <i class="fa-brands fa-css3-alt"></i>
            <h2>CSS</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ad
              libero distinctio quidem deserunt laboriosam velit quaerat nihil
              harum assumenda? Molestiae tenetur odio impedit. Iure ipsa obcaecati
              ipsum?
            </p>
          </div>
          <div class="umece-box">
            <i class="fa-brands fa-square-js"></i>
            <h2>Java-Script</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ad
              libero distinctio quidem deserunt laboriosam velit quaerat nihil
              harum assumenda? Molestiae tenetur odio impedit. Iure ipsa obcaecati
              ipsum?
            </p>
          </div>
  
          <div class="umece-box">
            <i class="fa-brands fa-angular"></i>
            <h2>Angular</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint
              ipsum nisi nemo consequatur odit nesciunt quod at molestias
              recusandae est consequuntur, deserunt provident labore eaque hic
              facilis, neque dolorum.
            </p>
          </div>
  
          <div class="umece-box">
            <i class="fa-brands fa-react"></i>
            <h2>React</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint
              ipsum nisi nemo consequatur odit nesciunt quod at molestias
              recusandae est consequuntur, deserunt provident labore eaque hic
              facilis, neque dolorum.
            </p>
          </div>
        </div>
      </section>
  
      <section class="projekti" id="projekti">
        <h2 class="heading">My <span>Projects</span></h2>
        <div class="projekt-container">
          <div class="projekti-box">
            <img src={project1} alt="project" />
            <h4>Project 1</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              perspiciatis repudiandae iure cumque. Cumque, atque. Sunt, rerum sit
              autem odit, numquam ducimus, iure molestiae dolor aperiam hic nihil
              laudantium itaque.
            </p>
          </div>
  
          <div class="projekti-box">
            <img src={project2} alt="project" />
            <h4>Project 2</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              perspiciatis repudiandae iure cumque. Cumque, atque. Sunt, rerum sit
              autem odit, numquam ducimus, iure molestiae dolor aperiam hic nihil
              laudantium itaque.
            </p>
          </div>
  
          <div class="projekti-box">
            <img src={project3} alt="project" />
            <h4>Project 3</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              perspiciatis repudiandae iure cumque. Cumque, atque. Sunt, rerum sit
              autem odit, numquam ducimus, iure molestiae dolor aperiam hic nihil
              laudantium itaque.
            </p>
          </div>
        </div>
      </section>
  
      <section class="kontakt" id="kontakt">
        <h2 class="heading">Contact <span>Me</span></h2>
        <div class="form-map">
          <form action="#">
            <div class="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="E-mail Address" />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your Message"
            ></textarea>
            <input type="submit" value="Send" class="btn" />
          </form>
        </div>
      </section>

        </div>
        
    )
}

let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  let header = document.querySelector(".header");

  header.classList.toggle("sticky", window.scrollY > 100);
};



export default Main
import "./work.scss"
import {useState, useEffect} from "react"
export default function Work() {
  const [slider, setslider] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assets/work/Sym.png",
      title: "Software Developer",
      duration : "Dec 2023 to present",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      location : "Baner, Pune",
      headline : "Projects",
      work : ["Php", "SQL", "Javascript"],
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      workDetails : ["Developed robust University applications using PHP, SQL, and JavaScript to display student and faculty data, such as attendance and feedback, in a clear and accessible manner.", "Ensured the implementation of efficient, maintainable, and scalable code to support the seamless operation of University applications.", "Actively contributed to application stability and troubleshooting, optimizing performance to meet the needs of students and faculty."]
    },
    {
      id: "2",
      icon: "./assets/work/cerencebg.png",
      title: "Software Engineer Intern",
      duration : "Jan 2023 to July 2023",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      location : "Pune, Hinjewadi Phase1",
      headline : "Projects",
      work : ["Cerence News", "TourGuide", "KTM TourGuide"],
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      workDetails : ["Developed Android applications using Kotlin and Java in live projects, gaining valuable experience in Android development.", "Utilized problem-solving skills in data structures and algorithms to deliver efficient and high-quality solutions in Android projects.", "Gained hands-on experience in software development through work on the real-world project Cerence News at Cerence.", "Contributed to a voice-based Cerence news project, actively participating in various UI-related tasks on the project."]
    },
    {
      id: "3",
      icon: "./assets/work/zensar.png",
      title: "Trainee - Core Java",
      duration : "Jan 2021 to March 2021",
      location : "Online Mode",
      headline : "Training On",
      work : ["Core Java", "PLSQL", "NOSQL"],
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",

        workDetails : ["Successfully completed a comprehensive 3-month training program in Core Java programming at Zensar Technology.", "Demonstrated the ability to design and implement efficient algorithms and data structures in Java.", "Acquired in-depth knowledge of Core Java concepts, including data types, control structures, loops, and exception handling."]
    }
  ];

  const handleclick =(way) => {
    if(way==="left") {
      setslider(slider>0 ? slider-1 : 2)
    } else{
      setslider(slider < data.length-1 ? slider+1 :0)
    }
  }

  useEffect(() => {
    if(window.innerWidth < 768) {

      let container = document.getElementById('sliding');
      let startX, currentX;
      let currentIndex = 0;
  
      const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
      };
  
      const handleTouchMove = (e) => {
        currentX = e.touches[0].clientX;
      };
  
      const handleTouchEnd = () => {
        let diffX = startX - currentX;
        if (diffX > 50) {
          handleclick("left");
          currentIndex = Math.min(currentIndex + 1, container.children.length - 1);
        } else if (diffX < -50) {
          handleclick();
          currentIndex = Math.max(currentIndex - 1, 0);
        }
        container.style.transform = `translateX(${-currentIndex * 100}%)`;
      };
  
      if (container) {
        container.addEventListener('touchstart', handleTouchStart);
        container.addEventListener('touchmove', handleTouchMove);
        container.addEventListener('touchend', handleTouchEnd);
      }
  
      return () => {
        if (container) {
          container.removeEventListener('touchstart', handleTouchStart);
          container.removeEventListener('touchmove', handleTouchMove);
          container.removeEventListener('touchend', handleTouchEnd);
        }
      };
    }
  }, [slider]);

  return (
    <div className='work' id="work">
      <h1>Explore My Work and Experience</h1>
      <div className="slider" id="sliding" style={{transform: `translateX(-${slider*100}vw)`}}>
        {data.map(d=>(
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                  <div className="leftcontainer">
                    <div className={d.icon !== "./assets/work/Sym.png" ? "imgcontainer" : "symimage"}>
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.duration}
                    </p>
                    {d.headline === "Projects" ? (
                        <a
                          href="https://www.google.com/maps/place/Cerence+India/@18.5816715,73.7369751,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bbdcf0b38e39:0x552ec6565ad1951d!8m2!3d18.5816715!4d73.73955!16s%2Fg%2F11n0ccy4xk?entry=ttu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {d.location}
                        </a>
                      ) : (
                        <span>{d.location}</span>
                      )}

                  </div>

                  {d.headline === "Projects" && <div className="letter">
                    <img src="./assets/work/letter.png" alt="" />
                     <a href="https://www.linkedin.com/posts/suraj-raut-a8a2111b8_6-months-cerence-internship-completed-activity-7085635902789533697-7S68?utm_source=share&utm_medium=member_desktop" target="_blank" rel="noopener noreferrer">Experince Letter</a>
                  </div>}
              </div>
              <div className="right">
                <div className="details">
                  <h3>{d.headline}</h3>
                  <div className="project">
                    {d.work.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>

                  <h3>Responsibilities</h3>
                  <div className="tech">
                    {d.workDetails.map((detail, index) => (
                      <p key={index}>{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>  
        </div>
        ))}
      </div>

      <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleclick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleclick()}/>
    </div>
  )
}

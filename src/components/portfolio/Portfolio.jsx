import React, { useEffect, useState, useMemo  } from "react";
import "./portfolio.scss";
import Portfoliolist from "../portfoliolist/Portfoliolist";
import { projects, certificates, achievements, education, listItem} from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("projects");
  const [data, setData] = useState([]);
  const skills = [
    {
    skill : [
      {
        id:1,
        lang:"C/CPP",
        range : "90",
        class : "cpp"
      },
      {
        id:2,
        lang:"Java",
        range : "80",
        class : "java"
      },
      {
        id:3,
        lang:"Android",
        range : "60",
        class : "android"
      },
      {
        id:4,
        lang:"Reactjs",
        range : "70",
        class : "react"
      },
      {
        id:5,
        lang:"SQL",
        range : "60",
        class : "sql"
      }
    ],
    skill1 : [
      {
        id:1,
        lang:"Data Structures and Algorithms",
        range : "90",
        class : "dsa"
      },
      {
        id:2,
        lang:"Python",
        range : "80",
        class : "python"
      },
      {
        id:3,
        lang:"PHP",
        range : "60",
        class : "php"
      },
      {
        id:4,
        lang:"Spring Boot",
        range : "70",
        class : "sboot"
      },
      {
        id:5,
        lang:"Rest API",
        range : "60",
        class : "rest"
      }
    ]
  }
  ];

  useEffect(() => {
    switch (selected) {
      case "projects":
        setData(projects);
        if(document.querySelector(".skills")) {
          document.querySelector(".skills").style.display = 'none';
        }
        break;
      case "certificates":
        setData(certificates);
        if(document.querySelector(".skills")) {
          document.querySelector(".skills").style.display = 'none';
        }
        break;
      case "content":
        setData(achievements);
        if(document.querySelector(".skills")) {
          document.querySelector(".skills").style.display = 'none';
        }
        break;
      case "education":
        if(document.querySelector(".education")) {
          document.querySelector(".education").style.display = 'block';
        }
        if(document.querySelector(".skills")) {
          document.querySelector(".skills").style.display = 'none';
        }
        setData(education);
        break;
      case "skills":
        if(document.querySelector(".education")) {
          document.querySelector(".education").style.display = 'none';
        }
        if(document.querySelector(".skills")) {
          document.querySelector(".skills").style.display = 'block';
        }
        // setData(skills);
        break;
      default:
        setData(projects);
    }
  }, [selected]);

  useEffect(() => {
    skills.forEach((item) => {
      item.skill.forEach((d) => {
        const element = document.querySelector(`.${d.class}`);
        if (element) {
          element.style.width = `${d.range}%`;
          element.style.height = "100%";
          element.style.background = "linear-gradient(135deg, rgba(236, 0, 140, 1) 0%, rgba(252, 103, 103, 1) 100%)";
          element.style.display = "block";
        }
      });
    });
    skills.forEach((item) => {
      item.skill1.forEach((d) => {
        const element = document.querySelector(`.${d.class}`);
        if (element) {
          element.style.width = `${d.range}%`;
          element.style.height = "100%";
          element.style.background = "linear-gradient(135deg, rgba(236, 0, 140, 1) 0%, rgba(252, 103, 103, 1) 100%)";
          element.style.display = "block";
        }
      });
    });

  }, [skills]);
  


  const handleImageClick = (item, title) => {
    document.querySelector(".popup-image").style.display = "block";


    if (title === "Leetcode Profile") {
      document.querySelector(".popup-image img").src =
        "assets/portfolioachive/leetprofile.png";
    } else if (title === "GeeksForGeeks Profile") {
      document.querySelector(".popup-image img").src =
        "assets/portfolioachive/gfgprofile.png";
    } else if (title === "Coding Ninja Profile") {
      document.querySelector(".popup-image img").src =
        "assets/portfolioachive/cnprofile.png";
    } else {
      document.querySelector(".popup-image img").src = item;
      document.querySelector(".popup-image img").style.transition = "1s";
    }

    const img = new Image();
    img.src = item;

    //Maintaining the Potrait Image
    if (img.height > 1200) {
      document.querySelector(".popup-image img").style.width = "69vh";
      document.querySelector(".popup-image img").style.top = "60%";
    } else {
      document.querySelector(".popup-image img").style.width = "130vh";
      document.querySelector(".popup-image img").style.top = "50%";
    }
  };
  const handleCloseClick = () => {
    document.querySelector(".popup-image").style.display = "none";
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {listItem.map((item) => (
          <Portfoliolist
            title={item.title}
            active={selected === item.id}
            setselected={setSelected}
            id={item.id}
            key={item.id} // Added a unique key prop for mapping
          />
        ))}
      </ul>

      <div className="container">
        {(selected !== "education") && (selected !== "skills") ? (
          data.map((d) => (
            <div className="item" key={d.id}>
              {" "}
              {/* Added a unique key prop */}
              <img
                src={d.img}
                alt=""
                onClick={() => handleImageClick(d.img, d.title)}
              />
              <h3>{d.title}</h3>
            </div>
          ))
        ) : (
          <div className="education">
            <div className="instituteData">
              <div className="institute">
                <img src="assets/into/sppulogo.jpg" alt="loading" />

                <div className="headline">
                  <h1 id="headline">Savitribai Phule Pune University</h1>
                  <h3 id="collegeName">
                    Zeal college of Engineering and Research
                  </h3>
                  <p>
                    <a
                      href="https://www.google.com/maps/search/zeal+college/@18.4485642,73.8225713,17z?entry=ttu"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Pune, Maharashtra
                    </a>
                  </p>
                  <p id="duration">2019 2023</p>
                </div>
              </div>
              <div className="data">
                <div className="deg-branch">
                  <h4 id="degree">Bachelor of Engineering</h4>
                  <h5 id="branch">Computer Science and Engineering</h5>
                </div>
                <div id="result">
                  <p>FE : 7.98</p>
                  <p>SE : 9.59</p>
                  <p>TE : 9.19</p>
                  <p>BE : 8.91</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="skills">
            {selected === "skills" &&  <div className="myskills">
              <div className="skill">
                {skills.map((item) => {
                  return item.skill.map((d) => {
                    console.log(d)
                    return (
                      <li id='lang-list' key={d.id}>
                         <div className="lang-per">
                          <h3 id='language'>{d.lang}</h3>
                          <p>
                            {d.range}%
                          </p>
                         </div>
                        <div className='bar'><span className={d.class}></span></div>
                       </li>
                    );
                  });
                })}
              </div>

              <div className="skill1">
                {skills.map((item) => {
                  return item.skill1.map((d) => {
                    return (
                      <li id='lang-list' key={d.id}>
                        <div className="lang-per">
                          <h3 id='language'>{d.lang}</h3>
                          <p>
                            {d.range}%
                          </p>
                        </div>
                        <div className='bar'><span className={d.class}></span></div>
                      </li>
                    );
                  });
                })}

              </div>
            </div>}
          </div>
      </div>

      <div className="popup-image" style={{ display: "none" }}>
        <span onClick={handleCloseClick}>&times;</span>
        <img src="assets/portfoliopaintings/p3.jpg" alt="" />
      </div>
    </div>
  );
}

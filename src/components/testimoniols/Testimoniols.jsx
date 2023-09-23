import ImageSlider from "./ImageSlider";
import "./testimoniols.scss";
export default function Testimonials() {
  const slides = [
    {
      url : "assets/myimg/I1.jpg",
      title : "Lion Pencil Sketch",
      width : '100%'
    },
    {
      url : "assets/myimg/I2.jpg",
      title : "Leoperd Pencil Sketch",
      width : '100%'
    },
    {
      url : "assets/myimg/I3.jpg",
      title : "Bharat Ratna Dr. A.P.J. Abdul Kalam",
      width : '50%'
    },
    {
      url : "assets/myimg/I5.jpg",
      title : "Lord Hanuman Pencil Sketch",
      width : '50%'
    },
    {
      url : "assets/myimg/I7.jpg",
      title : "Randy Orton Pencil Sketch",
      width : '50%'
    },
    {
      url : "assets/myimg/I8.jpg",
      title : "Golden Triumph: First Prize in Drawing",
      width : '100%'
    },
    {
      url : "assets/myimg/I9.jpg",
      title : "Divine Wisdom: The Legacy of Sant Kabir",
      width : '50%'
    },
    {
      url : "assets/myimg/I10.jpg",
      title : "The Father of the Nation: Mahatma Gandhi",
      width : '50%'
    },
    {
      url : "assets/myimg/I11.jpg",
      title : "Order Work Pencil Sketch",
      width : '50%'
    },
    {
      url : "assets/myimg/I12.jpg",
      title : "Mahatma Jyotirao Phule Potrait",
      width : '50%'
    },
    {
      url : "assets/myimg/I13.jpg",
      title : "Tiger Color Pencil Sketch",
      width : '100%'
    },
    {
      url : "assets/myimg/I14.jpg",
      title : "Actor Raj Kapur Potrait",
      width : '50%'
    },
    {
      url : "assets/myimg/I15.jpg",
      title : "Lord Shiva Pencil Sketch",
      width : '50%'
    },
    {
      url : "assets/myimg/I16.jpg",
      title : "Godess Durga Pencil Sketch",
      width : '50%'
    },
    {
      url : "assets/myimg/I17.jpg",
      title : "Mr. Balasaheb Thakre Potrait",
      width : '50%'
    }
  ];

  const containerStyles = {
    width: '57%',
    height: '88%',
    margin: '0px auto',
    position: 'relative',
    borderRadius : '22px',
  };
  return (
    <div id="container1" className="container1">
      <h1>My Gallery</h1>
      <div className="galleryContainer" style={containerStyles}>
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}
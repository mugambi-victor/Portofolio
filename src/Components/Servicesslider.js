import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import code from '../img/code.jpg';
import programming from '../img/programming.jpg';
import consulting from '../img/consulting.jpg';
import database from '../img/database.png'

const NextArrow = (props) => (
    <div {...props} style={{ ...props.style, backgroundColor: 'green' }}>
      
    </div>
  );
  
  const PrevArrow = (props) => (
    <div {...props} style={{ ...props.style, backgroundColor: 'red' }}>
      
    </div>
  );
  
const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: window.innerWidth < 997 ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  };

  const cardData = [
    {
        id: 1,
        content1:'Web Development',
        imageSrc: code,
        content:'I enjoy making websites, I have learnt about basic web development technologies and my proficiency in these tools enables me to craft dynamic and visually appealing web solutions with precision.',
        list:['HTML','CSS','JavaScript', 'Bootstrap', 'ReactJs', 'Wordpress'],
      },
      {
        id: 2,
        content1:'Backend',
        imageSrc: database, // Replace with the actual path to your image
        content:
          'As a backend developer, I wield a strong command over essential technologies, empowering me to architect robust and scalable solutions. My expertise encompasses a range of tools: ',
          list:['PHP','MYSQL','C#','NodeJs(Learning)'],
      },
      
      {
        id: 3,
        content1: 'PROGRAMMING',
        imageSrc: programming, // Replace with the actual path to your image
        content:
        'As a dedicated programmer, I derive joy from transforming concepts into tangible realities through code. My journey has been enriched by numerous lessons and extensive training in programming. Proficient and comfortable in working with:',
        list: ['C', 'Python', 'JavaScript'],
      },
      
      {
        id: 4,
        content1:'Consultancy',
        imageSrc: consulting, // Replace with the actual path to your image
        content:
          'When am not coding, I am an IT consultant, I help businesses with their tech needs. Whether it\'s figuring out what tools they need or coming up with smart strategies, I make sure they use technology in the best way possible. My goal is to provide practical advice and solutions that help businesses succeed in the digital world.',
          list:['MS Office suite','Networking'],
      },

    // Add more cards as needed
  ];
  const styles={
    width:'100%',
    height:'150px',
    padding:'1rem'
}
const header={
    display:'flex',
    justifyContent:'center'
}
const list={
margin:'2rem',
marginTop:'0.5rem'
}
const constt = {
    display: 'block',
    marginBottom: '3rem',
    '@media (max-width: 997px)': {
      margin:'1rem'
    },
  };
  
  return (
   
    <Slider {...settings} style={constt}>
       
      {cardData.map((card) => (
        <div key={card.id}  className='card'>
            <h3 style={header}>{card.content1}</h3>
               <img src={card.imageSrc} style={styles} alt={`Card ${card.id}`} />
          <p style={{paddingLeft:'1rem',paddingRight:'1rem', paddingTop:'-1.5rem'}}>{card.content}</p>
          <ul style={list}>
            {card.list.map((listItem, index) => (
              <li key={index}>{listItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;

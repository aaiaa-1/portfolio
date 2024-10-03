import './style/Hero.css'
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from 'react';
import img from '../images/header-img.jpg'
import { github } from "../assets";
import { linkedin } from "../assets";

const Hero = () => {
  const toRotate =["Software engineer", "DevOps enthusiast", "Full Stack Developer"];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random()*100);
  const period = 100;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {clearInterval(ticker)};
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    }else{
      setIndex(prevIndex => prevIndex + 1);
    }
  }
  
  
  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col  md={6} className='text'>
          <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className='tagline'>Welcome to my Portfolio</span>
                <h1>Hi there 👋! I'm Aya HAMZA <br /><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                  I’m a software engineer with a love for Java, DevOps, and building clean and scalable solutions. I’m all about creating smooth, efficient systems while having fun with code. Welcome to my little corner of the web, where tech gets a sprinkle of creativity! 💻✨
                  </p>
                  
                  <div className='class' >
                    <div>
                      <a href="https://www.linkedin.com/in/aya-hamza-a3a259219/" target="_blank">
                        <img src={linkedin} alt="LinkedIn"  className='linkedin'/>
                      </a>
                    </div>
                    <div>
                      <a href="https://github.com/aaiaa-1" target="_blank">
                        <img src={github} alt="LinkedIn"  className='github'/>
                      </a>
                    </div>
                  </div>
                  <a href="https://drive.google.com/file/d/1Xb2JvfZmM4lDo8Vztp5caJ4aqJ5ExpLa/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <span>View my CV</span>
                    <span style={{ marginLeft: '10px' }}><ArrowRightCircle size={25} /></span>
                  </a>


                  


              </div>}
            </TrackVisibility>          
          </Col>
          <Col md={6} style={{ textAlign: 'center' }}>
            <div style={{ maxWidth: '450px', display: 'inline-block', marginTop:'2rem'}}>
              <img src={img} alt="Header Img" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}} />
            </div>
          </Col>
        </Row>
        
      </Container>
    </section>
  )
}

export default Hero
import './style/Hero.css'
import { Col, Container, Row } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import { useState, useEffect } from 'react';
import img from '../images/header-img.jpg'

const Hero = () => {
  const toRotate =["Software engineer","Full Stack Developer", "UI/UX Designer", "Mobile Developer"];
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
                  <p>I'm a dynamic software engineer and a creative UI/UX designer. My passion is in bringing together form and function to create exceptional digital experiences. Welcome to my portfolio, where technology meets artistry.</p>
                  <button>
                    <a href="https://drive.google.com/file/d/1isfdcVXBddhBSImh8CKKl7OXL8tyIgk0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <span>View my CV</span>
                      <span><ArrowRightCircle size={25} /></span>
                    </a>
                  </button>
                  <div class="social-links">
                    <div id="linkedin" class="social-btnn flex-center">
                      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path></svg><span>
                        Aya HAMZA</span>
                    </div>

                    <div id="github" class="social-btn flex-center">
                      <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                      <span>aaiaa-1</span>
                  </div>
                </div>


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
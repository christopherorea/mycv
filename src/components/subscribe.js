import Button from "./button";

const Subscribe = ()=>{
    return(
        <div className="home-subscribe" id="subscribe">
        <img alt="osakas" src="./playground_assets/ense%C3%B1anza-1500w.jpg" className="home-image1" />
        <div className="home-container8">
          <div className="home-heading-container">
            <h1 className="home-text20 Section-Heading">Download the CV</h1>
            <span className="Section-Text home-text21">Meet my experience.</span>
          </div>
          <div className="buttons">
            <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1kPEabtYGZ4nx6ibjoBZMBm0enSb_8HWz/view?usp=sharing"><Button
                className="home-button Anchor button">Resume</Button></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/chrisgalleta/"><Button
                className="home-button Anchor button">LinkedIn</Button></a>
            <a target="_blank" rel="noreferrer" href="https://github.com/christopherorea"><Button className="home-button Anchor button">Github</Button></a>
            <a target="_blank" rel="noreferrer" href="https://medium.com/@thcookieh"><Button className="home-button Anchor button">Medium</Button></a>                    
          </div>
        </div>
      </div>
    );
};

export default Subscribe;

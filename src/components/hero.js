import Button from "./button";

const Hero = () => {
    return (
        <div className="home-container2">
            <div className="home-hero">
                <div className="home-hero-text-container">
                    <h1 className="home-heading2">
                        <span>Christopher Orea</span>
                        <br className="home-text01" />
                        <span>a.k.a. Galleta</span>
                    </h1>
                    <span className="home-text03">
                        You can not compete with someone who loves what he does. It is 
                        in his instict. He does not compete. He lives.
                    </span>
                    <div className="home-cta-btn-container">
                        <a href="#work">
                            <Button className="home-cta-btn Anchor button">
                                <span className="home-text04">MY WORK</span>
                            </Button>
                        </a>
                        <a href="#yo">
                            <Button className="home-cta-btn1 button Anchor">ABOUT ME</Button>
                        </a>
                    </div>
                </div>
                <div className="home-container3"></div>
            </div>
        </div>
    );
};

export default Hero;
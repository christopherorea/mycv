import Card from "./card";
import data from '../data/data.json';

const CardList = ()=>{
    const cards = data.map(e => <Card 
        year={e.year}
        title={e.title}  
        description={e.description}
        category={e.category}
        link={e.link}
        src={e.src}
    />);

    return(
        <div className="home-container5" id="work"> 
            <h1>
            <span>+6 Years doing NLP, NLG, LLMs, RAGs, R&D</span>
            <br />
            </h1>
            <div className="home-blog">
                {cards}
            </div>
        </div>
    );
};

export default CardList;

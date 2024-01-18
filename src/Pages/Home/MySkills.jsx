import data from "../../data/index.json";

export default function MySkills(){
    return (
        <section className="skills--section" id="mySkills">
            <div className="portfolio--container">
                <h2 className="skills--section--heading">Work</h2>
            </div>
            <div className="skills--section--container">
                {data?.skills?.map((item, index) => (
                    <div key={index} className="skills--section--card">
                        <div className="skills--section--img">
                            <img src={item.src} alt="Product chain "/>
                        </div>
                        <div className="skills--section--card--content">
                            <h3 className="skills--section--title">{item.title}</h3>
                            <h3>{item.company}</h3>
                            <h4>{item.duration}</h4>
                            <p className = "skills--section--description">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
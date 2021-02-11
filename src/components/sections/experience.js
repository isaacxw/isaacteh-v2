import Image from 'next/image';
import styled from 'styled-components';

const StyledProjectSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: auto;

    .heading {
        height: 20%;
        padding: 1rem 0.5rem;

        .title {
            display: inline;
            padding: 2rem 0;
            font-size: var(--fz-heading);
        }

        &:before {
            content: '.02';
            color: var(--yellow);
            font-family: var(--font-mono);
            font-size: 1.5rem;
            margin-right: 1rem;
        }
    }

    .featured {
        height: 60%;
        padding: 2rem;
    }

    .projects {
        height: auto;
        padding: 2rem;
        /* border: 2px solid purple; */

        .other-projects {
            margin-bottom: 1rem;
            font-size: var(--fz-xs);
            font-family: var(--font-mono);
            color: var(--yellow);
        }
    }
`;   

const StyledFeaturedProject = styled.div`
    display: flex;
    
    .project-content {
        flex-direction: column;
        position: relative;
        @media (max-width: 1080px) {
            
        }
        @media (max-width: 768px) {

            padding: 40px 40px 30px;
            z-index: 5;
        }
        @media (max-width: 480px) {
            padding: 30px 25px 20px;
        }

        .project-overline {
            margin: 10px 0;
            color: var(--yellow);
            font-family: var(--font-mono);
            font-size: var(--fz-xs);
            font-weight: 400;
        }

        .project-title {
            color: var(--lightest-slate);
            font-size: clamp(24px, 5vw, 28px);
            @media (min-width: 768px) {
                margin: 0 0 20px;
            }
            @media (max-width: 768px) {
                color: var(--white);
            }
        }

        .project-description {
            position: relative;
            width: 100%;
            z-index: 2;
            padding: 25px;
            border-radius: var(--border-radius);
            background-color: var(--light-navy);
            color: var(--light-slate);
            font-size: var(--fz-lg);
            @media (max-width: 768px) {
                padding: 20px 0;
                background-color: transparent;
                box-shadow: none;
                &:hover {
                    box-shadow: none;
                }
            }
        }

        .project-tech-list {
            display: flex;
            flex-wrap: nowrap;
            position: relative;
            z-index: 2;
            margin: 25px 0 10px;
            padding: 0;
            list-style: none;
            li {
                margin: 0 20px 5px 0;
                color: var(--light-slate);
                font-family: var(--font-mono);
                font-size: var(--fz-xs);
                white-space: nowrap;
            }
            @media (max-width: 768px) {
                margin: 10px 0;
                li {
                    margin: 0 10px 5px 0;
                    color: var(--lightest-slate);
                }
            }
        }

        .project-links {
            display: flex;
            align-items: center;
            position: relative;
            margin-top: 10px;
            margin-left: -10px;
            color: var(--lightest-slate);
            a {
                display: flex;
                justify-content: flex;
                align-items: flex;
                padding: 10px;
                
            }
        }
    }

    .project-image {
        position: relative;
        z-index: 1;
        @media (max-width: 768px) {

            height: 100%;
            opacity: 0.25;
        }
            
        .img {
            border-radius: var(--border-radius);
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1) brightness(90%);
            @media (max-width: 768px) {
                object-fit: cover;
                width: auto;
                height: 100%;
                filter: grayscale(100%) contrast(1) brightness(80%);
            }
        }
    }
`;

const StyledProjects = styled.div`
    display: flex;
    justify-content: flex-start;

    .box {
        width: 20rem;
        height: 15rem;
        border: 2px solid var(--yellow-tint);
        border-radius: 5px;
        margin: 0 0.5rem;
        padding: 2rem;
        background-color: var(--navy);

        .project-top {
            width: 100%;
            height: auto;
            margin-bottom: 1rem;
            display: flex;
            justify-content: space-between;

            a {
                font-size: var(--fz-xxl);
                color: var(--yellow);

                &:last-child {
                    margin-left: 0.5rem;
                }
            }
        }

        .title {
            font-size: var(--fz-xl);
        }

        .description {
            font-size: var(--fz-lg);
        }

        .tech-list {
            display: flex;
            flex-wrap: wrap;
            position: relative;
            z-index: 2;
            margin: 25px 0 10px;
            padding: 0;
            list-style: none;
            li {
                margin: 0 10px 5px 0;
                color: var(--light-slate);
                font-family: var(--font-mono);
                font-size: var(--fz-xs);
                white-space: nowrap;
            }
        }
    }
`;

const Experience = () => {
    const projects = [
        {
            "name": "Ask Matty",
            "description": "The official chat bot of CSUN",
            "stack": ["Typescript", "React", "Dialogflow"],
            "links": ["https://github.com/isaacxw/spotified", "https://spotified.herokuapp.com"]
        },
        {
            "name": "Google",
            "description": "The website found at Google.com",
            "stack": ["C++", "React", "Javascript"]
        },
        {
            "name": "Dropbox",
            "description": "Co-founder of Dropbox",
            "stack": ["Rust", "Golang", "MongoDB"]
        }
    ]

    return (
        <>
            <StyledProjectSection>
                <div className="heading">
                    <h2 className="title">Projects</h2>
                </div>
                <div className="featured">
                    <StyledFeaturedProject>
                        <div className="project-content">
                            <p className="project-overline">Featured Project</p>
                            <h3 className="project-title">Spotified</h3>
                            <div className="project-description">
                                Engineered a web app to let users visualize
                                their listening habits.
                            </div>
                            <ul className="project-tech-list">
                                <li>React</li>
                                <li>Javascript ES6+</li>
                                <li>Node.js</li>
                            </ul>

                            <div className="project-links">
                                <a href="#" aria-label="Github Link">
                                    <i className="fa fa-github"></i>
                                </a>   
                                <a href="#" aria-label="External Link">
                                    <i className="fa fa-code"></i>
                                </a>
                            </div>
                        </div>

                        <div className="project-image">
                            <a href="#">
                                <Image
                                    src="/spotified.png"
                                    alt="spotified"
                                    layout="fixed"
                                    width={528}
                                    height={300}
                                />
                            </a>
                        </div>
                    </StyledFeaturedProject>
                </div>


                <div className="projects">
                    <h2 className="other-projects">Other Projects</h2>
                    <StyledProjects>
                        {projects.length && Object.keys(projects).map((project, i) => 
                            <div className="box">
                                <div className="project-top">
                                    <a href="#" aria-label="Folder">
                                        <i className="fa fa-folder"></i>
                                    </a>
                                    <div className="links">
                                        <a href="#" aria-label="Github Link">
                                            <i className="fa fa-github"></i>
                                        </a>
                                        <a href="#" aria-label="External Link">
                                            <i className="fa fa-code"></i>
                                        </a>
                                    </div>
                                </div>
                                <h2 className="title">{projects[project].name}</h2>
                                <div className="description">
                                    <p>{projects[project].description}</p>
                                </div> 

                                <ul className="tech-list">
                                    {projects[project].stack.map((tech, i) => 
                                        <li key={i}>{tech}</li>
                                    )}
                                </ul>
                               
                            </div>
                        )}
                    </StyledProjects>
                    
                </div>
                
            </StyledProjectSection>
        </>
    )
}

export default Experience;
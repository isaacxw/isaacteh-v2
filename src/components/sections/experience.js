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
        width: 100%;
        height: 60%;
        padding: 2rem;

    }

    .projects {
        padding: 2rem;

        .other-projects {
            justify-content: center;
            margin-bottom: 1rem;
            font-size: var(--fz-xs);
            font-family: var(--font-mono);
            color: var(--yellow);
        }
    }
`;   

const StyledFeaturedProject = styled.div`
    display: flex;
    justify-content: center;
    
    .project-content {
        flex-direction: column;
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
            width: auto;
            margin: 0 auto;
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
        max-width: 100%;
        position: relative;
        margin-left: 2rem;
        z-index: 1;
        @media (max-width: 768px) {

            height: 100%;
            opacity: 0.25;
        }
            
        .img {
            border-radius: var(--border-radius);
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
    flex-wrap: wrap;

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
            font-size: var(--fz-sm);
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
    const featuredProject = {
        "name": "Spotified",
        "description": "Spotified is a web application that allows users to visualize their listening habits. Much like Spotify recap, just more available.",
        "stack": ["React", "Node.js", "Express", "Spotify Web API"]
    };

    const projects = [
        {
            "name": "Ask Matty",
            "description": "Ask Matty is the official chatbot of California State University, Northridge. Developed by yours truly.",
            "stack": ["Typescript", "React", "Dialogflow"],
            "links": ["https://github.com/isaacxw/spotified", "https://spotified.herokuapp.com"]
        },
        {
            "name": "WalkieTalkie",
            "description": "The WalkieTalkie project is a CMS platform that caters towards personalized chatbot behavior.",
            "stack": ["Python", "React", "Typescript"]
        },
        {
            "name": "isaacteh-v2",
            "description": "My personal website, built with React, CSS-in-JS, Next.js, and deployed with Netlify",
            "stack": ["React", "Next.js", "Netlify"]
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
                            <h3 className="project-title">{featuredProject.name}</h3>
                            <div className="project-description">
                                {featuredProject.description}
                            </div>
                            <ul className="project-tech-list">
                                {featuredProject.stack.map((tech, i) => 
                                    <li key={i}>{tech}</li>
                                )}
                            </ul>
                            
                            <div className="project-links">
                                <a href="https://github.com/isaacxw/Spotified" aria-label="Github Link" target="_blank">
                                    <i className="fa fa-github"></i>
                                </a>   
                                <a href="https://spotified.herokuapp.com" aria-label="External Link" target="_blank">
                                    <i className="fa fa-globe"></i>
                                </a>
                            </div>
                        </div>

                        <div className="project-image">
                            <a href="https://spotified.herokuapp.com" target="_blank">
                                <Image
                                    src="/images/spotified.png"
                                    alt="spotified"
                                    layout="fixed"
                                    width={550}
                                    height={310}
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
                                            <i className="fa fa-globe"></i>
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
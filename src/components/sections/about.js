import Image from 'next/image';
import styled from 'styled-components';

const StyledAboutSection = styled.section`
    max-width: 900px;
    margin: auto;

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        @media (max-width: 768px) {
            display: block;
        }
    }

    .title {
        font-size: 2.5rem;
        margin-bottom: 3rem;
    }

    .title:before {
        content: '.01';
        color: var(--yellow);
        font-family: var(--font-mono);
        font-size: 1.5rem;
        margin-right: 1rem;
    }
`;

const StyledText = styled.div`
    font-size: var(--fz-md);
        
    a {
        color: var(--yellow);
    }
    
    span {
        color:rgb(254, 118, 118);
    }

    .pre-intro {
        margin: 0 0 20px 0;
        color: var(--white);
        font-family: var(--font-mono);
        font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
        font-weight: 400;

        @media (max-width: 480px) {
            margin: 0 0 20px 2px;
        }
    }

    ul.skills-list {
        display: grid;
        grid-template-columns: repeat(2, minmax(140px, 200px));
        padding: 0;
        margin: 40px 0 0 0;
        overflow: hidden;
        list-style: none;

        li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: var(--fz-xs);

            &:before {
                content: '→';
                position: absolute;
                left: 0;
                color: #FFD300;
                font-size: var(--fz-sm);
                line-height: 12px;
            }
        }
    }
`;

const StyledImage = styled.div`
    position: relative;
    max-width: 300px;

    @media (max-width: 768px) {
        margin: 50px auto 0;
        width: 70%;
    }

    .wrapper {
        display: block;
        position: relative;
        width: 100%;
        background-color: var(--yellow);

        &:hover,
        &:focus {
            background: transparent;
            outline: 0;

            &:after {
                top: 15px;
                left: 15px;
            }

            .img {
                filter: none;
                mix-blend-mode: normal;
            }
        }

        .img {
            position: relative;
            border-radius: 5px;
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1);
            transition: var(--transition);
        }

        &:before,
        &:after {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 5px;
            transition: var(--transition);
        }

        &:before {
            top: 0;
            left: 0;
            background-color: var(--navy);
            mix-blend-mode: screen;
        }

        &:after {
            border: 20px solid var(--yellow);
            top: 20px;
            left: 20px;
            z-index: -1;
        }
    }
`;

const About = () => {
    const skills = ['Javascript ES6+', 'HTML', 'CSS', 'React', 'Python', 'Typescript'];
        
    return (
        <StyledAboutSection>
            <h2 className="title">About Me</h2>

            <div className="inner">
                <StyledText>
                    <div>
                        <p>
                            Oh hello again!
                        </p>                    
                        <p>
                            It's me, Isaac. I live in Portland, OR and I'm a <span>Software Developer</span> with experience
                            in both <span>UI/UX Design</span> and <span>Digital Marketing</span>. 
                        </p>

                        <p>
                            I currently work at <a href="https://showerspass.com" alt="Showers Pass" target="_blank">Showers Pass</a>,
                            a Pacific Northwest-based outdoor apparel company, where I develop and manage their website and internal systems. Additionally, 
                            I help out with <a href="https://vvolt.com" alt="Vvolt" target="_blank">Vvolt E-bikes</a>,
                            building and maintaining their e-commerce platform and infrastructure. 
                        </p>    
                        
                        <p>
                            I graduated from <a href="https://www.csun.edu">California State University, Northridge</a> with 
                            a <span>B.S. in Computer Science</span>. During my time there, I worked at the university's Central
                            IT department as a fullstack web developer, building cool applications for thousands of students and
                            faculty members throughout campus. 
                        </p>

                        <p>
                            Outside of work, I enjoy a good album, am a history nut, and love the great outdoors. I also enjoy biking, 
                            craft beers, and spicy ramen.            
                        </p>

                        <p>Here are some of my technical proficiencies:</p>
                    </div>

                    <ul className="skills-list">
                        {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                    </ul>
                </StyledText>

                <StyledImage>
                    <div className="wrapper">
                        <Image 
                            src="/images/me.jpg"
                            alt="Isaac Teh"
                            className="img"
                            layout="fixed"
                            width={300}
                            height={300}
                        />
                    </div>
                </StyledImage>
            </div>
        </StyledAboutSection>
    )
}

export default About;
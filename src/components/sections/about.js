import styled from 'styled-components';

const StyledAboutSection = styled.section`
    max-width: 700px;

    .inner {
        display: grid;
        grid-template-columns: 3fr 2fr;
        grid-gap: 50px;

        @media (max-width: 768px) {
            display: block;
        }
    }

    .title {
        font-size: 4rem;
        margin-top: -5rem;
        margin-bottom: 3rem;
    }
`;

const StyledText = styled.div`
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
                content: '->';
                position: absolute;
                left: 0;
                color: #FFD300;
                font-size: var(--fz-sm);
                line-height: 12px;
            }
        }
    }
`;

const About = () => {
    const skills = ['Javascript ES6+', 'HTML', 'CSS', 'React', 'Python', 'Typescript'];
        
    return (
        <StyledAboutSection>
            <h2 className="title">About Me</h2>

            <StyledText>
                <div>
                    <p>Hello there! I'm Isaac, a software engineer based in Los Angeles, CA.</p>

                    <p>
                        I enjoy creating things that live on the internet, whether that be websites,
                        applications, or anything in between. My goal is to always build products that provide
                        pixel-perfect, performant experiences.
                    </p>

                    <p>
                        Shortly after graduating from{' '}
                        <a href="https://www.csun.edu">California State University, Northridge</a>, I joined the
                        engineering team at <a href="https://www.google.com">Google</a> where I work
                        on a wide variety of interesting and meaningful projects on a daily basis.
                    </p>

                    <p>Here are a few technologies that I've been working with:</p>
                </div>

                <ul className="skills-list">
                    {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
            </StyledText>
        </StyledAboutSection>
    )
}

export default About;
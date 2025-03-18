import React from 'react';
import './curriculo.css';
import { FaCompass, FaEnvelope, FaGithub, FaFemale, FaPhone, FaLinkedin} from 'react-icons/fa'; // Adicionei os ícones aqui

interface CurriculoSectionProps {
  title: string;
  children: React.ReactNode;
}

const CurriculoSection: React.FC<CurriculoSectionProps> = ({ title, children }) => {
  return (
    <section className="curriculo-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const Curriculo: React.FC = () => {
  return (
    <div className="curriculo-container">
      <header className="curriculo-header">
        <div className="curriculo-header-content">
          <img
            src="https://avatars.githubusercontent.com/u/83501330?s=400&u=3030f71bc929ffb8147cdc520c865a6d59cdc75c&v=4" // Substitua pelo link da sua imagem
            alt="Minha foto"
            className="curriculo-avatar"
          />
          <div className="curriculo-info">
            <h1>Caroline Soares</h1>
            <p className="curriculo-subtitle">Backend Software Enginner</p>
          </div>
          
        </div>
        <br></br>
        <div className="curriculo-info-details">
          <p><FaFemale /> <span>She/Her</span> • 28 years • Brazilian</p>
          <p><FaCompass /> São Bernardo do Campo, SP, Brazil</p>
          <p><FaPhone /> +55 (11) 93229-8471</p>

          <p><FaEnvelope /> karol.siva@hotmail.com</p>
          <p><FaGithub /> <a href="https://github.com/carolinesoarws" target="_blank">github.com/carolinesoarws</a></p>
          <p><FaLinkedin /> <a href="https://www.linkedin.com/in/caroline-soares-0ba238107" target="_blank">LinkedIn</a></p>
          
        </div>

      </header>

      <CurriculoSection title="About Me">
      <p>
        Hello! My name is Caroline, but I prefer to be called Carol — it’s simpler. Over the years, I have dedicated myself 
        to the technology field, initially as a Data Engineer. 
        During this period, I built data pipelines to move raw, structured data from various sources to the data lake 
        using the tech stack Hadoop and Hive.  Although my main responsibilities were related to the Data Engineer role, 
        I also contributed to the evolution of the exclusive software architecture that performed the ETL process.
        <br /><br />

        After that, I shifted my role to Software Engineer, which is where my true passion lies. This career change was driven by
        my desire to create services and software, transforming the user experience through my creations. <br /> I'm no longer a Data Engineer,
        but all my knowledge wasn’t wasted. Now, I get to develop products and solutions for Data Engineering and Generative AI stakeholders, 
        in addition to developing a variety of other products. 
        <br /><br />
        
        I have consistent experience in designing, developing, and maintaining products and software solutions. I’m proficient in Python,
        Amazon Web Services, and Docker, as well as infrastructure as code using both CloudFormation and Terraform. I have the expertise 
        to build APIs and software with Generative AI solutions, DevOps (mostly using GitHub Actions and Amazon deployment solutions). 
        I have solid knowledge of software best practices such as TDD, Clean Code, and more. <br />I am deeply committed to the technical 
        documentation of my systems and projects, mostly using Confluence, GitHub Pages with Docusaurus, and simple DOCX files. <br /> 
        I can navigate the frontend using React with TypeScript, but I’m not a designer, so I can’t create something that’s visually stunning.
        <br /><br />

        In addition to my technical skills, I’d like to share a bit about myself. I’m fluent in English and study Korean because i love
         the culture and language. Outside of work, I’m a proud mother of two dogs named Peter and Steven. In my free time, I enjoy studying, 
         crocheting, and crafting. I love to write, watch Korean dramas, and listen to K-pop. Every week, I dedicate at least two hours to 
         singing karaoke. I’m excited about the possibilities the future holds and eager to contribute my energy, skills, and passion for technology 
         to new challenges and opportunities that arise.
      </p>

      </CurriculoSection>

      <CurriculoSection title="Education">
        <div className="curriculo-item">
          <p><strong>Master of Business Administration (MBA) - Software Engineering</strong></p>
          <p><em>FIAP College</em></p>
          <p><em>April 2021 to April 2022</em></p>
        </div>
        <div className="curriculo-item">
          <p><strong>Analysis and systems development (ADS)</strong></p>
          <p><em>Anhanguera São Bernardo do Campo College</em></p>
          <p><em>February 2015 - July 2017</em></p>
        </div>
      </CurriculoSection>

      <CurriculoSection title="Certifications">
        <ul>
          <li>Amazon Certified Cloud Practitioner (CLF-C01) - September 2023 - Credential code G9ELK4P14J1E1G9S</li>
          <li>Business Analytics Pratictioner - Itaú Unibanco - August 2023 - Credential code 537206012</li>
        </ul>
      </CurriculoSection>

      <CurriculoSection title="Habilidades">
        <div className="skills-container">
          <div className="skill-item">
            <label>JavaScript</label>
            <progress value="90" max="100"></progress>
          </div>
          <div className="skill-item">
            <label>React</label>
            <progress value="85" max="100"></progress>
          </div>
          <div className="skill-item">
            <label>Python</label>
            <progress value="80" max="100"></progress>
          </div>
          <div className="skill-item">
            <label>CSS</label>
            <progress value="70" max="100"></progress>
          </div>
        </div>
      </CurriculoSection>

      <CurriculoSection title="Publicações">
        <ul>
          <li><a href="https://example.com/artigo" target="_blank" rel="noopener noreferrer">Artigo sobre Tecnologias Web</a></li>
          <li><a href="https://example.com/paper" target="_blank" rel="noopener noreferrer">Publicação sobre IA</a></li>
        </ul>
      </CurriculoSection>

      <CurriculoSection title="Experiência">
        <div className="curriculo-item">
          <p><strong>Desenvolvedor Full Stack</strong></p>
          <p><em>Empresa XYZ</em></p>
          <p>Responsabilidades: Desenvolvimento de soluções web e manutenção de sistemas</p>
          <p>Ano: 2021 - 2023</p>
        </div>
      </CurriculoSection>
    </div>
  );
};

export default Curriculo;

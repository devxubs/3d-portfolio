import "./styles/Career.css";

const Career = () => {
   return (
      <div className="career-section section-container">
         <div className="career-container">
            <h2>
               My Education <span>&</span>
               <br /> learning
            </h2>

            <div className="career-info">
               <div className="career-timeline">
                  <div className="career-dot"></div>
               </div>
               <div className="career-info-box">
                  <div className="career-info-in">
                     <div className="career-role">
                        <h4>Full Stack Development</h4>
                        <h5>Self-Taught & Projects</h5>
                     </div>
                     <h3>2020–NOW</h3>
                  </div>
                  <p>
                     Building full-stack applications with frontend, backend,
                     databases, and modern development tools.
                  </p>
               </div>
               <div className="career-info-box">
                  <div className="career-info-in">
                     <div className="career-role">
                        <h4>Web Development</h4>
                        <h5>Self-Taught & Projects</h5>
                     </div>
                     <h3>2023–Now</h3>
                  </div>
                  <p>
                     Learning and building real-world websites and applications
                     with React, Next.js, Node.js, and modern web technologies.
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Career;

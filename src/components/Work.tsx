import { useState, useCallback, useEffect, useRef } from "react";
import "./styles/Work.css";
import { MdArrowOutward } from "react-icons/md";
import { api } from "../services/api";

type Project = {
   title: string;
   category: string;
   tools: string[];
   image: string;
   link: string;
   accent: string;
};

type ApiProject = {
   live_url?: string;
   title?: string;
   category?: string;
   technologies?: string[];
   image_url?: string;
   link?: string;
   accent?: string;
};

const DEFAULT_ACCENT = "#5eead4";

const Work = () => {
   const [projects, setProjects] = useState<Project[]>([]);
   const [activeCard, setActiveCard] = useState<number | null>(null);
   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
   const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());

   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
   const sectionRef = useRef<HTMLDivElement>(null);

   /**
    * Load projects from backend
    */
   const loadProjects = useCallback(async () => {
      try {
         const data = await api.getProjects();

         console.log("Projects received from server:", data);

         const apiProjects = data as unknown as ApiProject[];

         if (!Array.isArray(apiProjects)) {
            console.error("Invalid projects response:", data);
            setProjects([]);
            return;
         }

         const formattedProjects: Project[] = apiProjects.map((project) => ({
            title: project.title ?? "",
            category: project.category ?? "",
            tools: Array.isArray(project.technologies)
               ? project.technologies
               : [],
            image: project.image_url ?? "",
            link: project.live_url ?? project.link ?? "",
            accent: project.accent ?? DEFAULT_ACCENT,
         }));

         console.log("Formatted projects:", formattedProjects);

         setProjects(formattedProjects);
      } catch (err: unknown) {
         const message =
            err instanceof Error ? err.message : "Failed to load projects";

         console.error("Failed to load projects:", message);
         setProjects([]);
      }
   }, []);

   /**
    * Load projects on mount
    */
   useEffect(() => {
      loadProjects();
   }, [loadProjects]);

   /**
    * Intersection observer
    *
    * This depends on projects because the cards are created
    * only after the API response arrives.
    */
   useEffect(() => {
      if (projects.length === 0) return;

      const observer = new IntersectionObserver(
         (entries) => {
            entries.forEach((entry) => {
               const index = Number(entry.target.getAttribute("data-index"));

               if (entry.isIntersecting) {
                  setVisibleCards((prev) => {
                     if (prev.has(index)) {
                        return prev;
                     }

                     const next = new Set(prev);
                     next.add(index);

                     return next;
                  });
               }
            });
         },
         {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px",
         },
      );

      cardRefs.current.forEach((ref) => {
         if (ref) {
            observer.observe(ref);
         }
      });

      return () => {
         observer.disconnect();
      };
   }, [projects]);

   /**
    * Mouse move effect
    */
   const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>, index: number) => {
         const card = cardRefs.current[index];

         if (!card) return;

         const rect = card.getBoundingClientRect();

         setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
         });
      },
      [],
   );

   return (
      <div className="work-section" id="work" ref={sectionRef}>
         <div className="work-container section-container">
            {/* Section Header */}
            <div className="work-header">
               <div className="work-header-line" />

               <h2>
                  Featured <span>Gallery</span>
               </h2>

               <p className="work-subtitle">
                  A curated collection of web applications, creative interfaces,
                  and real-world projects built with modern technologies.
               </p>
            </div>

            {/* Project Counter */}
            <div className="work-counter">
               <span className="work-counter-num">{projects.length}</span>

               <span className="work-counter-label">Projects</span>
            </div>

            {/* Gallery Grid */}
            <div className="gallery-grid">
               {projects.map((project, index) => (
                  <div
                     key={`${project.title}-${index}`}
                     className={`gallery-card ${
                        visibleCards.has(index) ? "gallery-card--visible" : ""
                     } ${activeCard === index ? "gallery-card--active" : ""}`}
                     data-index={index}
                     ref={(el) => {
                        cardRefs.current[index] = el;
                     }}
                     onMouseEnter={() => setActiveCard(index)}
                     onMouseLeave={() => setActiveCard(null)}
                     onMouseMove={(e) => handleMouseMove(e, index)}
                     style={
                        {
                           /*
                            * IMPORTANT:
                            * Accent now comes directly from the server.
                            */
                           "--card-accent": project.accent || DEFAULT_ACCENT,

                           "--delay": `${index * 0.08}s`,

                           "--mouse-x": `${mousePos.x}px`,

                           "--mouse-y": `${mousePos.y}px`,
                        } as React.CSSProperties
                     }
                  >
                     {/* Glow effect on hover */}
                     <div className="gallery-card-glow" />

                     {/* Project Number */}
                     <div className="gallery-card-number">
                        {String(index + 1).padStart(2, "0")}
                     </div>

                     {/* Image */}
                     <div className="gallery-card-image">
                        {project.image ? (
                           <img
                              src={project.image}
                              alt={project.title}
                              loading="lazy"
                           />
                        ) : (
                           <div
                              className="gallery-card-image-placeholder"
                              aria-hidden="true"
                           />
                        )}

                        <div className="gallery-card-image-overlay" />
                     </div>

                     {/* Content */}
                     <div className="gallery-card-content">
                        <h3 className="gallery-card-title">{project.title}</h3>

                        <p className="gallery-card-category">
                           {project.category}
                        </p>

                        {/* Tech Pills */}
                        {project.tools.length > 0 && (
                           <div className="gallery-card-tools">
                              {project.tools.map((tool, i) => (
                                 <span
                                    key={`${tool}-${i}`}
                                    className="gallery-tool-pill"
                                 >
                                    {tool}
                                 </span>
                              ))}
                           </div>
                        )}

                        {/* Link */}
                        {project.link ? (
                           <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="gallery-card-link"
                              data-cursor="disable"
                           >
                              <span>View Project</span>
                              <MdArrowOutward />
                           </a>
                        ) : (
                           <span
                              className="gallery-card-link"
                              data-cursor="disable"
                              aria-disabled="true"
                           >
                              <span>View Project</span>
                              <MdArrowOutward />
                           </span>
                        )}
                     </div>

                     {/* Border Accent Line */}
                     <div className="gallery-card-accent-line" />
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Work;

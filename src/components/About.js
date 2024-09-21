const About = () => {
    return(
        <div className="pb-6">
        <h3 className="text-4xl text-[#CCD6F6] py-2 md:text-4xl">Experience:</h3>
        <div className="p-5">
        <h4 className="text-[#58DFC3] text-xl pb-1 md:text-2xl">Undergraduate Research Developer</h4>
        <h4 className="text-[#58DFC3] text-xl md:text-2xl">@ Memorial University - Human Computer Interaction Lab</h4>
        <ul className="list-disc text-white text-xl px-6 pt-3 list-inside space-y-3">
            <li>Coauthored a paper “Comparing Pinch and Point Poses for Stroke Drawing in Virtual Reality” with Dr. Jay Henderson.</li>
            <li>Built and designed an Unity VR app with ECS architecture for a robust game-like experience to allow users drawing on multiple surfaces with various hand poses.</li>
            <li>Implemented algorithms to optimize user experience like procedural mesh generations for 3D drawing, ray-casting, filters to reduce hand tracking jitters, data structures to collect points for analysis.</li>
        </ul>
        </div>
        <div className="p-5">
        <h4 className="text-[#58DFC3] text-xl pb-1 md:text-2xl">Front End Developer Intern</h4>
        <h4 className="text-[#58DFC3] text-xl md:text-2xl">@ Carnegie Learning - Zorbits Math</h4>
        <ul className="list-disc text-white text-xl px-6 pt-3 list-inside space-y-3">
            <li>Developing and maintaining CL dashboard, contributing to 10 projects focused on new features implementation
                and internal testing tools. Also a lot of bug-fixing, code refactoring to ensure smooth re branding of the product.</li>
            <li>Designed and implemented reusable Angular components, services, and modules, enhancing code scalability and
                maintainability by 25% in key feature like student performance reports, teacher resources, district and school
                profiles.</li>
            <li>Implemented analytical strategies by leveraging Pendo, to track user interactions with features withing the product,
                enabling a 40% improvement in product decision making with the help of quality user data.</li>
        </ul>
        </div>
        <div className="p-5">
        <h4 className="text-[#58DFC3] text-xl pb-1 md:text-2xl">Full Stack Developer</h4>
        <h4 className="text-[#58DFC3] text-xl md:text-2xl">@ DIAG Lab - Memorial University</h4>
        <ul className="list-disc text-white text-xl px-6 pt-3 list-inside space-y-3">
            <li>Worked in a team developing issue/ticket management system for a machine learning lab detecting medical images.</li>
        </ul>
        </div>
        <div className="p-5">
        <h4 className="text-[#58DFC3] text-xl pb-1 md:text-2xl">Learning Design and Development Assistant</h4>
        <h4 className="text-[#58DFC3] text-xl md:text-2xl">@ CITL - Memorial University</h4>
        <ul className="list-disc text-white text-xl px-6 pt-3 list-inside space-y-3">
            <li>Developed web pages for nursing courses which were taught online at MUN Nursing school</li>
            <li>Wrote technical reports for support page release notes.</li>
            <li>Refactored course content to avoid copyright infringement and achieve web accessibility.</li>
        </ul>
        </div>
        </div>
    )
}
export default About
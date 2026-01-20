import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 shadow-sm">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">DSB</div>
          <ul className="hidden md:flex space-x-8 font-medium">
            <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a></li>
            <li><a href="#experience" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a></li>
            <li><a href="#responsibility" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Leadership</a></li>
            <li><a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero */}
        <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-indigo-50 to-white dark:from-slate-900 dark:to-indigo-950/20">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">DHINAKARAN S B</h1>
          <h2 className="text-xl md:text-2xl text-indigo-600 dark:text-indigo-400 font-semibold mb-6">Entry-level Software Developer</h2>
          <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400 mb-10">
            Passionate about writing clean, maintainable code and delivering user-centric software solutions. 
            B.E. Computer Science graduate (2024).
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-all shadow-lg shadow-indigo-200 dark:shadow-none">
              Get In Touch
            </a>
            <a href="#projects" className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-lg font-semibold transition-all">
              View Projects
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 border-l-4 border-indigo-600 pl-4">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <p>
                B.E. Computer Science graduate (2024) from Kumaraguru College of Technology with a strong foundation in Java, OOP, and Web Development.
              </p>
              <p>
                Experienced in building frontend and full-stack applications through academic and internship projects. I strive to create efficient and scalable software.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700">
              <h4 className="font-bold text-xl mb-6">Education</h4>
              <div className="space-y-4">
                <div>
                  <div className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">B.E Computer Science</div>
                  <div className="text-slate-500 dark:text-slate-500">2020 - 2024</div>
                  <p className="font-medium mt-1">Kumaraguru College of Technology, Coimbatore</p>
                  <p className="text-indigo-500 dark:text-indigo-500 font-semibold mt-1">CGPA: 8.72</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-24 bg-slate-100 dark:bg-slate-800/50">
          <div className="max-w-5xl mx-auto px-6">
            <h3 className="text-3xl font-bold mb-12 border-l-4 border-indigo-600 pl-4">Technical Skills</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Programming', skills: ['Java', 'JavaScript', 'Data Structures'] },
                { title: 'Frontend', skills: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
                { title: 'Backend & Tools', skills: ['MySQL', 'Git', 'VS Code', 'SDLC'] }
              ].map((category, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
                  <h4 className="font-bold text-indigo-600 dark:text-indigo-400 mb-4">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm font-medium">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 border-l-4 border-indigo-600 pl-4">Internship Experience</h3>
          <div className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-700 space-y-12">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-900"></div>
              <div>
                <h4 className="text-xl font-bold">Iamneo Edutech – CS Fellowship Program</h4>
                <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">2024</div>
                <ul className="space-y-3 text-slate-600 dark:text-slate-400">
                  <li className="flex gap-2"><span>•</span><span>Completed structured training in full-stack development concepts</span></li>
                  <li className="flex gap-2"><span>•</span><span>Developed hands-on projects using Java and modern web technologies</span></li>
                  <li className="flex gap-2"><span>•</span><span>Gained exposure to real-world software development workflows</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-24 bg-slate-100 dark:bg-slate-800/50 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold mb-12 border-l-4 border-indigo-600 pl-4">Selected Projects</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Restaurant Management Software', desc: 'Online platform for menu posting, dish management, and customer experience sharing.' },
                { title: 'Fleet Management & Tracking', desc: 'Implemented live tracking, AI route optimization, and QR technology for operational profitability.' },
                { title: 'Smart Assistive Device', desc: 'Mobility gadget enabling self-sufficiency for differently abled people comparable to able-bodied users.' },
                { title: 'Urban Farming Smart System', desc: 'Aquaponics-based vertical farming system. Research published in an IEEE journal.' }
              ].map((project, idx) => (
                <div key={idx} className="group bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-xl hover:-translate-y-1 transition-all">
                  <h4 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">{project.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section id="responsibility" className="py-24 max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-bold mb-12 border-l-4 border-indigo-600 pl-4">Leadership & Responsibility</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { role: 'President', org: 'Arts Vertical, Leadership Council' },
              { role: 'Core Member', org: 'Proshow Team, Yugam’24' },
              { role: 'Overall Coordinator', org: 'Books and Beyond' },
              { role: 'Alumni Coordinator', org: 'Kumaraguru Drama Troupe' },
              { role: 'Event Coordinator', org: 'Yugam’23' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 bg-indigo-50 dark:bg-slate-800 rounded-xl border-l-4 border-indigo-600">
                <div className="font-bold text-indigo-700 dark:text-indigo-400 mb-1">{item.role}</div>
                <div className="text-slate-600 dark:text-slate-400 text-sm">{item.org}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 bg-indigo-600 text-white rounded-[3rem] mx-6 mb-12 overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
            <h3 className="text-4xl font-bold mb-6">Let's Connect</h3>
            <p className="text-indigo-100 text-lg mb-12">
              Looking for an enthusiastic developer to join your team? Reach out!
            </p>
            <div className="flex flex-col gap-6 items-center">
              <a href="mailto:dhinakaranselvam.cs@gmail.com" className="text-2xl font-semibold hover:underline decoration-white underline-offset-8 transition-all">
                dhinakaranselvam.cs@gmail.com
              </a>
              <div className="flex gap-8 mt-4 text-indigo-100">
                <a href="https://www.linkedin.com/in/dhinakaransb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/DhinakaranSelvam" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-slate-200 dark:border-slate-800 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} DHINAKARAN S B. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App



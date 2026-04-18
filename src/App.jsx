import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  BrainCircuit, 
  Image as ImageIcon,
  User,
  Home,
  AlertTriangle,
  Code2,
  Cpu,
  Video,
  LayoutTemplate,
  Megaphone,
  Mail
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'Campaign', id: 'campaign', icon: Megaphone },
    { name: 'About', id: 'about', icon: User },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <BrainCircuit className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">Verify Before You Share</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button 
                  key={item.name} 
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors ${activeTab === item.id ? 'text-blue-400' : 'text-slate-300 hover:text-blue-400'}`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800 rounded-md"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {activeTab === 'home' ? (
        <main>
          {/* Inquiry / Hero Section */}
          <section id="inquiry" className="pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium mb-6">
                    Brandon Law
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                    Our Purpose
                  </h1>
                  <p className="text-lg text-slate-400 mb-6">
                    Our objective is to equip the public, courts, and institutions with the knowledge necessary to determine the legitimacy of digital media in an era of AI fabrication.
                  </p>
                  <ul className="space-y-3 text-slate-300 border-l-2 border-blue-500/50 pl-4">
                    <li>• Educate technology users on the psychological and societal impacts of synthetic media.</li>
                    <li>• Establish a standardized digital verification protocol to protect truth, evidence, and credibility.</li>
                  </ul>
                </div>
                <div className="w-full">
                  <img 
                    src="/AI-Brain-2.png" 
                    className="h-80 lg:h-96 w-full object-cover rounded-xl border border-slate-700 shadow-2xl" 
                    alt="AI Brain Visualization"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden h-80 lg:h-96 w-full bg-slate-900 rounded-xl border border-slate-700 items-center justify-center">
                    <BrainCircuit className="h-16 w-16 text-slate-700" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Awareness / Deepfake Detection Section */}
          <section className="py-20 bg-blue-600/5 border-b border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="max-w-3xl mx-auto space-y-8">
                <AlertTriangle className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  Deepfakes use AI to create realistic fake <span className="text-blue-400">videos, images and audio.</span> They’re getting harder to detect every day.
                </h2>
                <div className="space-y-4">
                  <p className="text-2xl font-bold text-white">
                    Don’t believe everything you see online.
                  </p>
                  <p className="text-3xl font-extrabold tracking-widest text-blue-500 uppercase">
                    Pause. Question. Verify.
                  </p>
                </div>
                
                {/* Integration of Asset: CapstoneAd1.png */}
                <div className="pt-10 max-w-3xl mx-auto">
                  <img 
                    src="/CapstoneAd1.png" 
                    alt="Deepfake Awareness Ad: Would you know the difference?"
                    className="w-full h-auto rounded-xl border border-slate-700 shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.insertAdjacentHTML('afterend', '<div class="h-64 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 text-slate-500 uppercase text-xs tracking-widest">Image Asset: CapstoneAd1.png Not Found</div>');
                    }}
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-4 pt-10">
                  <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold text-slate-400">#Deepfakes</span>
                  <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold text-slate-400">#Misinformation</span>
                  <span className="px-3 py-1 bg-slate-900 border border-slate-800 rounded-full text-sm font-semibold text-slate-400">#ThinkBeforeYouShare</span>
                </div>
              </div>
            </div>
          </section>

          {/* Discussion Section */}
          <section id="discussion" className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5 order-2 lg:order-1">
                  <div className="w-full aspect-video lg:h-full lg:min-h-[400px] bg-slate-900 border border-slate-700 rounded-xl overflow-hidden flex items-center justify-center">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/fbVv0ZPk0fw" 
                      title="Deepfake Discussion Video" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                  <h2 className="text-3xl font-bold text-white mb-6">The Discussion: Why This Matters</h2>
                  <p className="text-slate-300 leading-relaxed">
                    If anyone's face or voice can be forged using artificial intelligence, eyewitness videos, news clips, and even personal memories become debatable. As a result, this threatens journalism, elections, and the justice system. 
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Beyond the technical and legal issues, the core question is what "evidence" means now. If a video, voice note, or screenshot can be faked, can we still trust recordings and testimonies the way we used to?
                  </p>
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Media Disclaimer</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      This embedded video is an external example provided for context and is not my original work.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : activeTab === 'campaign' ? (
        /* Campaign Tab - Showcasing Remaining Deliverables */
        <main className="pt-32 pb-24 min-h-[80vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-32">
              
              {/* Campaign Element: Brochure */}
              <img src="/brochure.png" alt="Our Brochure" className="w-full h-auto rounded-xl shadow-xl" />

              {/* Campaign Element: :15 Social Video Ad */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 space-y-6">
                  <div className="flex items-center space-x-3 mb-2">
                    <Video className="h-6 w-6 text-blue-500" />
                    <h2 className="text-3xl font-bold text-white">Informational Video</h2>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="w-full aspect-video bg-slate-900 border border-slate-700 rounded-xl flex flex-col items-center justify-center text-slate-500 shadow-xl overflow-hidden relative group">
                    {/* Embed Custom Video Here - Replace the placeholder div below with your iframe embed code */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900 p-6">
                      <Video className="h-12 w-12 text-slate-600 mb-4 group-hover:scale-110 transition-transform" />
                      <span className="uppercase tracking-widest text-sm font-semibold text-center mb-2">Embed Custom :15 Video Here</span>
                      <span className="text-xs text-slate-600 font-mono text-center break-all">&lt;iframe src="YOUR_VIDEO_URL"&gt;&lt;/iframe&gt;</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </main>
      ) : (
        /* About Tab - Reformatted centered layout */
        <main className="pt-40 pb-24 min-h-[80vh]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Background & Experience</h1>
                <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full"></div>
              </div>
              
              <div className="space-y-8 text-xl text-slate-300 leading-relaxed text-left max-w-2xl mx-auto">
                <p>
                  Founded by Brandon Law, a student at Belmont High School, Verify Before You Share was created to address the growing threat of synthetic media. With a background in computer science and coding in multiple languages, I have experimented with AI tools enough to understand their potential in creating deepfakes. 
                </p>
                <p>
                  Witnessing friends doubt real clips has fueled a fascination with machine learning, specifically the line drawn between using AI for creativity versus deception. My goal is to bridge the gap between technical understanding and societal impact.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
                <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-colors group">
                  <Code2 className="h-8 w-8 text-blue-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold text-lg mb-2">Computer Science</h3>
                  <p className="text-slate-500 text-sm">Technical foundation in software development and multi-language logic.</p>
                </div>
                <div className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-blue-500/30 transition-colors group">
                  <Cpu className="h-8 w-8 text-blue-500 mb-4 mx-auto group-hover:scale-110 transition-transform" />
                  <h3 className="text-white font-bold text-lg mb-2">Machine Learning</h3>
                  <p className="text-slate-500 text-sm">Exploration of neural networks and the mechanics of synthetic media.</p>
                </div>
              </div>

              {/* Contact Section */}
              <div className="pt-20 mt-12 border-t border-slate-800/50 space-y-12">
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Contact Us</h2>
                  <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
                </div>

                <div className="max-w-2xl mx-auto space-y-8">
                  {/* Contact Image Placeholder */}
                  <div className="w-full aspect-[21/9] bg-slate-900 border border-slate-700 rounded-xl flex flex-col items-center justify-center text-slate-500 shadow-xl group hover:border-blue-500/50 transition-colors cursor-pointer p-8">
                    <ImageIcon className="h-12 w-12 text-slate-600 mb-4 group-hover:scale-110 transition-transform" />
                    <span className="uppercase tracking-widest text-sm font-semibold">Contact Image Placeholder</span>
                  </div>

                  {/* Contact Information */}
                  <div className="flex flex-col items-center justify-center space-y-4 bg-slate-900/30 p-8 rounded-xl border border-slate-800">
                    <a href="mailto:blaw26@belmontschools.net" className="flex items-center space-x-3 text-blue-400 hover:text-blue-300 transition-colors">
                      <Mail className="h-6 w-6" />
                      <span className="text-lg font-medium tracking-wide">blaw26@belmontschools.net</span>
                    </a>
                    <p className="text-slate-400 font-medium tracking-wide">
                      Follow us on Twitter <span className="text-slate-200">@VerifyBeforeYouShare</span>
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 py-16 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <BrainCircuit className="h-12 w-12 text-slate-800 mb-8 opacity-50" />
          <div className="space-y-3">
            <p className="text-slate-400 font-semibold tracking-wide">Capstone Proposal • Belmont High School</p>
            <p className="text-slate-600 text-sm">Brandon Law &copy; 2026</p>
          </div>
          <div className="mt-10 flex gap-8">
            <button onClick={() => handleNavClick('home')} className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-blue-400 transition-colors">Home</button>
            <button onClick={() => handleNavClick('campaign')} className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-blue-400 transition-colors">Campaign</button>
            <button onClick={() => handleNavClick('about')} className="text-xs uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-blue-400 transition-colors">About</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

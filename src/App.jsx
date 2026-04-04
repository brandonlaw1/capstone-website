import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  BrainCircuit, 
  Image as ImageIcon,
  User,
  Home,
  AlertTriangle
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home', icon: Home },
    { name: 'About', id: 'about', icon: User },
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const PicturePlaceholder = ({ className = "h-64", label = "Image Placement" }) => (
    <div className={`w-full bg-slate-900 border border-slate-700 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:border-blue-500/50 transition-colors ${className}`}>
      <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
      <span className="text-sm font-medium tracking-wide uppercase">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <BrainCircuit className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">Capstone: Deepfakes & Truth</span>
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
                    How Deepfakes Created by AI Challenge Truth, Evidence, and Credibility.
                  </h1>
                  <p className="text-lg text-slate-400 mb-6">
                    How can people, courts, and institutions determine the legitimacy of videos and audio when they can be fabricated using artificial intelligence?
                  </p>
                  <ul className="space-y-3 text-slate-300 border-l-2 border-blue-500/50 pl-4">
                    <li>• How will technology users be affected by the rise in deepfakes?</li>
                    <li>• How do American ideas of imitation and self-reinvention explain the origin and impact of deepfakes?</li>
                  </ul>
                </div>
                <div className="w-full">
                  <img 
                    src="/AI-Brain-2.png" 
                    className="h-80 lg:h-96 w-full object-cover rounded-xl border border-slate-700" 
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
                
                {/* New Centered Image Placement Box */}
                  <div className="pt-10 max-w-3xl mx-auto">
                    <img 
                      src="/CapstoneAd1.jpg" 
                      alt="Deepfake Awareness Ad: Would you know the difference?"
                      className="w-full h-auto rounded-xl border border-slate-700 shadow-2xl transition-transform hover:scale-[1.01]"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.insertAdjacentHTML('afterend', '<div class="h-64 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 text-slate-500">Image Asset Not Found</div>');
                      }}
                    />
                  </div>

                <div className="flex flex-wrap justify-center gap-4 pt-6">
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
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 mt-6">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">Cultural Implications</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      American culture often values originality and the freedom to redefine oneself. However, that same mindset can make deception easier to justify or overlook. Deepfakes can feel both threatening and oddly familiar, revealing our society's complex relationship between truth and identity in the digital age.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        /* About Tab */
        <main className="pt-32 pb-20 min-h-[80vh]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-2">About the Researcher</h2>
                  <h1 className="text-4xl font-bold text-white mb-6">Background & Experience</h1>
                  <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                    <p>
                      With a background in computer science and coding in multiple languages, I have experimented with AI tools enough to understand their potential in creating deepfakes. 
                    </p>
                    <p>
                      Witnessing friends doubt real clips has fueled a fascination with machine learning, specifically the line drawn between using AI for creativity versus deception. My goal is to bridge the gap between technical understanding and societal impact.
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                    <span className="block text-2xl font-bold text-white">CS</span>
                    <span className="text-sm text-slate-500">Foundation</span>
                  </div>
                  <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl">
                    <span className="block text-2xl font-bold text-white">ML</span>
                    <span className="text-sm text-slate-500">Exploration</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25"></div>
                <div className="relative">
                  <PicturePlaceholder className="h-96 lg:h-[500px]" />
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <BrainCircuit className="h-10 w-10 text-slate-800 mb-6" />
          <div className="space-y-2">
            <p className="text-slate-400 font-medium">Capstone Proposal • Belmont High School</p>
            <p className="text-slate-600 text-sm">Brandon Law &copy; 2026</p>
          </div>
          <div className="mt-8 flex gap-6">
            <button onClick={() => handleNavClick('home')} className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">Home</button>
            <button onClick={() => handleNavClick('about')} className="text-xs uppercase tracking-widest text-slate-500 hover:text-white transition-colors">About</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

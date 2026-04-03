import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  BrainCircuit, 
  Image as ImageIcon,
  BookOpen,
  FileText,
  Video,
  Headphones
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Inquiry', href: '#inquiry' },
    { name: 'Discussion', href: '#discussion' },
    { name: 'Prediction', href: '#prediction' },
    { name: 'Research', href: '#research' },
  ];

  const PicturePlaceholder = ({ className = "h-64" }) => (
    <div className={`w-full bg-slate-900 border border-slate-700 rounded-xl flex flex-col items-center justify-center text-slate-500 hover:border-blue-500/50 transition-colors ${className}`}>
      <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
      <span className="text-sm font-medium tracking-wide uppercase">Image Placement</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-2">
              <BrainCircuit className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold tracking-tight text-white">Capstone: Deepfakes & Truth</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-blue-400 hover:bg-slate-800 rounded-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

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
              <PicturePlaceholder className="h-80 lg:h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Discussion Section */}
      <section id="discussion" className="py-24 bg-slate-900/30 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <PicturePlaceholder className="h-full min-h-[400px]" />
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

      {/* Experience & Prediction Section */}
      <section id="prediction" className="py-24 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Background & Experience</h2>
                <p className="text-slate-300 leading-relaxed">
                  With a background in computer science and coding in multiple languages, I have experimented with AI tools enough to understand their potential in creating deepfakes. Witnessing friends doubt real clips has fueled a fascination with machine learning, specifically the line drawn between using AI for creativity versus deception.
                </p>
              </div>
              
              <div className="bg-blue-900/20 border border-blue-500/30 p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <BrainCircuit className="w-32 h-32 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-blue-400 mb-4 relative z-10">The Core Prediction</h2>
                <p className="text-lg text-white font-medium leading-relaxed relative z-10">
                  "I predict that deepfakes won't make everyone believe false information; they will instead increase doubt and raise awareness to the media in general."
                </p>
                <p className="mt-4 text-slate-400 relative z-10">
                  This automatic doubt will spread from politics and social media into everyday life. Ultimately, <strong>trust will depend more on the source than the clip itself.</strong>
                </p>
              </div>
            </div>
            <div className="w-full h-full">
              <PicturePlaceholder className="h-full min-h-[500px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Research Library */}
      <section id="research" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Research Sources</h2>
            <p className="text-slate-400 max-w-2xl">
              A collection of literature, analysis, and media shaping the foundation of this capstone inquiry.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              
              {/* Long Form */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4">
                  <BookOpen className="h-6 w-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">The Every</h4>
                    <p className="text-sm text-slate-400">Dave Eggers • Novel</p>
                  </div>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4">
                  <BookOpen className="h-6 w-6 text-blue-400 shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">The Reality Game: How the Next Wave of Technology Will Break the Truth</h4>
                    <p className="text-sm text-slate-400">Samuel Woolley • Book</p>
                  </div>
                </div>
              </div>

              {/* Short Fiction */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4">
                  <FileText className="h-6 w-6 text-cyan-400 shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">The Truth of Fact, the Truth of Feeling</h4>
                    <p className="text-sm text-slate-400">Ted Chiang • Short Story</p>
                  </div>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4">
                  <FileText className="h-6 w-6 text-cyan-400 shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">The Perfect Match</h4>
                    <p className="text-sm text-slate-400">Ken Liu • Short Story</p>
                  </div>
                </div>
              </div>

              {/* Short Non-Fiction & Other */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4 items-center">
                  <FileText className="h-6 w-6 text-indigo-400 shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Deepfakes and the New Disinformation War</h4>
                    <p className="text-sm text-slate-400">Robert Chesney & Danielle Citron • Article</p>
                  </div>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4 items-center">
                  <Headphones className="h-6 w-6 text-indigo-400 shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Lawfare Podcast: How Should Governments Use Deepfakes?</h4>
                    <p className="text-sm text-slate-400">Lostri, Byman, Linna, Subrahmanian, Patja • Podcast</p>
                  </div>
                </div>
                <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 flex gap-4 items-center">
                  <Video className="h-6 w-6 text-indigo-400 shrink-0" />
                  <div>
                    <h4 className="font-medium text-white mb-1">Fake videos of real people -- and how to spot them</h4>
                    <p className="text-sm text-slate-400">Supasorn Suwajanakorn • TED Talk</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Research Section Image Placeholder */}
            <div className="lg:col-span-1 h-full">
              <PicturePlaceholder className="h-full min-h-[300px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
          <BrainCircuit className="h-8 w-8 text-slate-800 mb-4" />
          <p className="text-slate-600 text-sm">
            Capstone Proposal • Belmont High School • Brandon Law
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
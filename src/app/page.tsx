import WalletConnect from "@/components/WalletConnect";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500 selection:text-white font-sans overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-600/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
      
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-20 pb-20 text-center max-w-5xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-4">
            <span className="text-sm font-medium tracking-wide text-gray-300">
              Built on Stellar Ecosystem
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 pb-2">
            Vibes
          </h1>
          
          <p className="text-xl md:text-3xl font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Where social interaction meets <span className="text-white font-medium">instant global payments.</span>
          </p>

          <p className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mt-6">
            Empowering creators, communities, and everyday users to connect, support, and earn in a more open and human financial internet.
          </p>

          <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <WalletConnect />
            <a 
              href="#learn-more" 
              className="px-8 py-3.5 rounded-full font-semibold border border-white/20 text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl text-left">
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Instant USDC Payments</h3>
            <p className="text-gray-400 leading-relaxed">Send money globally with near-zero fees within seconds. Support creators and communities seamlessly.</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Human Usernames</h3>
            <p className="text-gray-400 leading-relaxed">Ditch complicated wallet addresses. Send payments using simple usernames like @daniel or @vibescreator.</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md hover:bg-white/[0.05] transition-colors">
            <div className="w-12 h-12 rounded-full bg-pink-500/20 flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white">Creator Monetization</h3>
            <p className="text-gray-400 leading-relaxed">Earn directly from your audience through instant tips, subscriptions, and exclusive digital content.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

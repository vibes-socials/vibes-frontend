import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-beige)] text-[var(--foreground)] font-sans overflow-x-hidden">
      {/* HEADER */}
      <header className="absolute top-0 w-full flex justify-between items-center p-6 lg:px-12 z-50">
        <button className="w-12 h-12 bg-black text-brand-yellow rounded-full flex items-center justify-center hover:scale-105 transition-transform" style={{ color: "var(--color-brand-yellow)" }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="8" x2="20" y2="8"></line>
            <line x1="4" y1="16" x2="20" y2="16"></line>
          </svg>
        </button>
        <div className="flex gap-2">
          <button className="bg-black text-white rounded-full px-6 py-2.5 font-bold hover:scale-105 transition-transform shadow-lg">
            Launch App
          </button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] md:h-[800px] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-bg.png"
            alt="Friends looking down"
            fill
            className="object-cover object-center md:object-top"
            priority
          />
        </div>

        {/* Floating Badges */}
        <div className="absolute top-1/4 left-[5%] md:left-[15%] z-20 animate-float">
          <div className="bg-[var(--color-brand-pink)] px-4 py-1 md:py-2 rounded-full border-[3px] border-black font-bold text-sm md:text-xl rotate-[-15deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:scale-110 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 cursor-pointer active:scale-95">Earn</div>
        </div>

        <div className="absolute top-[20%] right-[5%] md:right-[20%] z-20 animate-float-delayed">
          <div className="bg-[var(--color-brand-yellow)] px-4 py-1 md:py-2 rounded-full border-[3px] border-black font-bold text-sm md:text-xl rotate-[10deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:scale-110 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 cursor-pointer active:scale-95">Connect</div>
        </div>

        <div className="absolute bottom-1/4 left-[10%] md:left-[25%] z-20 animate-float-fast">
          <div className="bg-[var(--color-brand-purple)] px-4 py-1 md:py-2 rounded-full border-[3px] border-black font-bold text-sm md:text-xl rotate-[-10deg] text-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:scale-110 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 cursor-pointer active:scale-95">Tip</div>
        </div>

        <div className="absolute bottom-1/3 right-[10%] md:right-[25%] z-20 animate-float">
          <div className="bg-[#3D85C6] px-4 py-1 md:py-2 rounded-full border-[3px] border-black font-bold text-sm md:text-xl rotate-[15deg] text-white shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:scale-110 hover:-translate-y-2 hover:rotate-0 transition-all duration-300 cursor-pointer active:scale-95">Create</div>
        </div>

        <h1 className="logo-text text-[100px] md:text-[180px] leading-none z-10 relative">
          Vibes
        </h1>
        
        <div className="z-10 relative flex items-center gap-2 mt-[-10px] md:mt-[-20px] bg-white px-4 py-2 rounded-full border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.1)]">
          <span className="text-xs md:text-sm font-bold text-black/80 tracking-wide uppercase">Powered by Stellar</span>
          <div className="relative w-4 h-4 md:w-5 md:h-5">
            <Image src="/stellar.png" alt="Stellar" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* MEET YOUR VIBE TRIBE */}
      <section className="py-20 flex flex-col items-center text-center px-6 relative">
        <h2 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-4">Social Meets Finance</h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl font-medium">Where social interaction meets instant global payments. Earn, tip, and build your community seamlessly.</p>

        <div className="flex flex-col items-center mb-20">
          <div className="flex gap-4 opacity-50 mb-3">
            <button className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 cursor-not-allowed">
              <span className="text-xl">▶</span> Google Play
            </button>
            <button className="bg-black text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 cursor-not-allowed">
              <span className="text-xl"></span> App Store
            </button>
          </div>
          <span className="text-sm font-bold tracking-wider uppercase text-gray-500">Coming Soon</span>
        </div>

        {/* Floating coins */}
        <div className="absolute left-10 md:left-40 top-1/2 w-24 h-24 rotate-[-20deg] drop-shadow-xl z-20 hover:scale-110 transition-transform">
          <Image src="/stellar.png" alt="Stellar" fill className="object-contain" />
        </div>
        <div className="absolute right-10 md:right-40 top-1/3 w-24 h-24 rotate-[15deg] drop-shadow-xl z-20 hover:scale-110 transition-transform">
          <Image src="/usdc.png" alt="USDC" fill className="object-contain" />
        </div>

        {/* Phones Collage */}
        <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] flex justify-center items-end mt-10">
          {/* Left Phone */}
          <div className="absolute left-[10%] md:left-[15%] bottom-0 w-[140px] md:w-[260px] h-[300px] md:h-[500px] bg-black rounded-[30px] md:rounded-[40px] border-4 border-black overflow-hidden rotate-[-10deg] shadow-2xl z-10">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl z-20"></div>
            <Image src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80" alt="Jane" fill className="object-cover" />
            <div className="absolute top-8 left-4 text-white font-bold bg-black/30 px-2 py-1 rounded">Jane</div>
          </div>
          {/* Right Phone */}
          <div className="absolute right-[10%] md:right-[15%] bottom-0 w-[140px] md:w-[260px] h-[300px] md:h-[500px] bg-black rounded-[30px] md:rounded-[40px] border-4 border-black overflow-hidden rotate-[10deg] shadow-2xl z-10">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-4 bg-black rounded-b-xl z-20"></div>
            <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80" alt="Leslie" fill className="object-cover" />
            <div className="absolute top-8 left-4 text-white font-bold bg-black/30 px-2 py-1 rounded">Leslie</div>
          </div>
          {/* Center Phone */}
          <div className="absolute bottom-10 md:bottom-20 w-[160px] md:w-[300px] h-[340px] md:h-[560px] bg-black rounded-[30px] md:rounded-[45px] border-[6px] border-black overflow-hidden shadow-2xl z-20">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-20"></div>
            <Image src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80" alt="Stephine" fill className="object-cover" />
            <div className="absolute top-8 left-4 text-white font-bold text-xl drop-shadow-md">Stephine</div>
          </div>
        </div>
      </section>

      {/* STRAIGHT TO THE REAL VIBES */}
      <section className="py-24 px-6 md:px-20 bg-[var(--color-brand-blue)] flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight mb-6 leading-tight">Invisible Crypto, Real Vibes</h2>
          <p className="text-xl font-medium">Send USDC instantly with near-zero fees. Use simple human usernames like @daniel, and keep the blockchain completely invisible.</p>
        </div>
        <div className="w-full md:w-1/2 relative h-[400px] md:h-[600px] rounded-[40px] overflow-hidden border-4 border-black">
          <Image src="https://images.unsplash.com/photo-1517849845537-4d257902454a?w=800&q=80" alt="Friends laughing" fill className="object-cover" />
        </div>
      </section>

      {/* FLOW WITH THE MOMENT */}
      <section className="py-24 px-6 md:px-20 bg-[var(--color-brand-yellow)]">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold tracking-tight max-w-xl leading-tight">Monetize the Moment</h2>
          <p className="text-xl font-medium max-w-md pt-4">Earn directly from your audience through instant tips, subscriptions, and exclusive digital content via the Stellar network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {/* Floating elements */}
          <div className="absolute -top-10 left-0 w-16 h-16 bg-white border-4 border-black rounded-full flex items-center justify-center text-3xl z-10 rotate-[-15deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">😃</div>
          <div className="absolute top-1/4 left-[30%] w-16 h-16 bg-purple-500 border-4 border-black rounded-full flex items-center justify-center text-3xl z-10 rotate-[15deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-white font-bold">✨</div>
          <div className="absolute top-10 right-[30%] w-12 h-16 bg-red-500 border-4 border-black rounded-lg flex items-center justify-center text-3xl z-10 rotate-[20deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">⚡</div>

          {/* Images */}
          <div className="h-[300px] md:h-[400px] relative rounded-[30px] border-4 border-black overflow-hidden mt-10 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <Image src="https://images.unsplash.com/photo-1523301343968-6a6ebf63c672?w=800&q=80" alt="Group of friends" fill className="object-cover" />
          </div>
          <div className="h-[400px] md:h-[500px] relative rounded-[30px] border-4 border-black overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <Image src="https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=800&q=80" alt="Picnic" fill className="object-cover" />
          </div>
          <div className="h-[300px] md:h-[400px] relative rounded-[30px] border-4 border-black overflow-hidden mt-20 shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
            <Image src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&q=80" alt="Drinks" fill className="object-cover" />
          </div>
          <div className="absolute -bottom-6 right-0 w-24 h-24 bg-blue-400 border-4 border-black rounded-full flex items-center justify-center text-2xl font-bold text-white z-10 rotate-[-15deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)]">Chill</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-20 px-6 md:px-20 bg-[var(--color-brand-beige)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black/20 pb-12 mb-12 gap-8">
          <div className="logo-text text-[60px] md:text-[80px] leading-none">
            Vibes
          </div>
          <div className="text-right flex flex-col items-end">
            <h3 className="text-2xl font-bold mb-4">Join the Vibe</h3>
            <div className="flex gap-4">
              <button className="bg-black text-white rounded-full px-8 py-3 text-lg font-bold hover:scale-105 transition-transform shadow-lg">
                Launch App
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 font-medium">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold mb-2">About</h4>
            <Link href="#" className="hover:underline">About Us</Link>
            <Link href="#" className="hover:underline">Newsroom</Link>
            <Link href="#" className="hover:underline">Careers</Link>
            <Link href="#" className="hover:underline">Contact Us</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold mb-2">Community</h4>
            <Link href="#" className="hover:underline">Community</Link>
            <Link href="#" className="hover:underline">Guidelines</Link>
            <Link href="#" className="hover:underline">Blog</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold mb-2">Safety Hub</h4>
            <Link href="#" className="hover:underline">Our approach</Link>
            <Link href="#" className="hover:underline">Advice</Link>
            <Link href="#" className="hover:underline">Safety Tools</Link>
            <Link href="#" className="hover:underline">Resources</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold mb-2">Privacy Hub</h4>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
            <Link href="#" className="hover:underline">Cookie Policy</Link>
            <Link href="#" className="hover:underline">Privacy & Security</Link>
            <Link href="#" className="hover:underline">Tips</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold mb-2">Support</h4>
            <Link href="#" className="hover:underline">Help Center</Link>
            <Link href="#" className="hover:underline">FAQ</Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-sm font-medium border-t border-black/20 pt-8">
          <p>Copyright © Vibes 2026 | All Rights Reserved</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">Legal Terms</Link>
            <Link href="#" className="hover:underline">Terms & Conditions</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

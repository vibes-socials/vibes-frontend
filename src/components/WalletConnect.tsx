"use client";

import { useState, useEffect } from "react";
import { isAllowed, requestAccess, getAddress } from "@stellar/freighter-api";

export default function WalletConnect() {
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const allowed = await isAllowed();
        if (allowed) {
          const response = await getAddress();
          if (response && response.address) {
            setPublicKey(response.address);
          }
        }
      } catch (e) {
        console.error(e);
      }
    };
    checkConnection();
  }, []);

  const handleConnect = async () => {
    setLoading(true);
    try {
      const access = await requestAccess();
      if (access) {
        const response = await getAddress();
        if (response && response.address) {
          setPublicKey(response.address);
        }
      }
    } catch (error) {
      console.error("Failed to connect wallet", error);
    } finally {
      setLoading(false);
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {publicKey ? (
        <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
          <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
          <span className="font-mono text-sm tracking-wide text-white">
            {formatAddress(publicKey)}
          </span>
        </div>
      ) : (
        <button
          onClick={handleConnect}
          disabled={loading}
          className="px-8 py-3.5 bg-white text-black hover:bg-gray-100 rounded-full font-semibold transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Connecting..." : "Connect Wallet"}
        </button>
      )}
    </div>
  );
}

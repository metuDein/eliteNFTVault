"use client";
import { useState } from "react";
import axios from "axios";
import Loading from "@/components/loading/Loading";

const CryptoWalletManager = () => {
  const [platform, setPlatform] = useState("binance"); // Default to Binance
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [balances, setBalances] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchBalance = async () => {
    setError("");
    try {
      setLoading(true);
      if (platform === "binance") {
        // const response = await fetch("/api/adminrequest/cex/binance", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     apiKey: apiKey,
        //     secretKey: secretKey,
        //   }),
        // });
        const response = await fetch("/api/adminrequest/cex/binance", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-KEY": apiKey,
            "X-SECRET-KEY": secretKey,
          },
        });
        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message);
          return;
        }
        const data = await response.json();
        setBalances(data);
      } else if (platform === "coinbase") {
        const response = await fetch("/api/adminrequest/cex/binance", {
          method: "POST",
          body: JSON.stringify({
            apiKey,
            apiSecret: secretKey,
          }),
        });
        if (!response.ok) {
          throw new Error("Error fetching Coinbase balance");
        }
        const data = await response.json();
        setBalances(data);
      }
    } catch (err) {
      setError("Error fetching balance. Please check your credentials.");
      console.log(err.name, ": ", err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleWithdraw = async (asset, amount, address) => {
    setError("");
    try {
      if (platform === "binance") {
        await axios.post("/api/binance/withdraw", {
          apiKey,
          secretKey,
          asset,
          amount,
          address,
        });
        alert("Withdrawal successful on Binance!");
      } else if (platform === "coinbase") {
        await axios.post("/api/coinbase/withdraw", {
          apiKey,
          secretKey,
          asset,
          amount,
          address,
        });
        alert("Withdrawal successful on Coinbase!");
      }
    } catch (err) {
      setError("Error processing withdrawal. Please try again.");
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center text-black">
      <div className="p-6 max-w-lg mx-auto bg-gray-100 shadow-md rounded-md relative">
        {loading && <Loading otherStyles={"absolute"} />}
        <h1 className="text-2xl font-semibold mb-4">Crypto Wallet Manager</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Platform
          </label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="w-full border rounded p-2"
          >
            <option value="binance">Binance</option>
            <option value="coinbase">Coinbase</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">API Key</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Secret Key</label>
          <input
            type="text"
            value={secretKey}
            onChange={(e) => setSecretKey(e.target.value)}
            className="w-full border rounded p-2"
          />
        </div>
        <button
          onClick={handleFetchBalance}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Fetch Balance
        </button>
        {balances && (
          <div className="mt-4">
            <h2 className="text-xl font-medium">Wallet Balances</h2>
            <ul>
              {Object.entries(balances).map(([asset, balance]) => (
                <li key={asset}>
                  {asset}: {balance}
                </li>
              ))}
            </ul>
          </div>
        )}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default CryptoWalletManager;

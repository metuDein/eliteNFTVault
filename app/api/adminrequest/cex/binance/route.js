import axios from "axios";
import crypto from "crypto";
import { NextResponse } from "next/server";

const BINANCE_API_URL = "https://api.binance.com";

export async function GET(req) {
    try {
        const apiKey = req.headers.get("x-api-key");
        const secretKey = req.headers.get("x-secret-key");

        if (!apiKey || !secretKey) {
            return NextResponse.json(
                { message: "API key and secret key are required" },
                { status: 400 }
            );
        }

        const serverTimeResponse = await axios.get(`${BINANCE_API_URL}/api/v3/time`);
        const serverTime = serverTimeResponse.data.serverTime;

        const query = `timestamp=${serverTime}`;
        const signature = crypto
            .createHmac("sha256", secretKey)
            .update(query)
            .digest("hex");

        console.log("Query:", query);
        console.log("Signature:", signature);

        const binanceResponse = await axios.get(`${BINANCE_API_URL}/api/v3/account`, {
            headers: {
                "X-MBX-APIKEY": apiKey,
            },
            params: {
                timestamp: serverTime,
                signature,
            },
        });

        const balances = binanceResponse.data.balances
            .filter((balance) => parseFloat(balance.free) > 0)
            .reduce((acc, curr) => {
                acc[curr.asset] = curr.free;
                return acc;
            }, {});

        return NextResponse.json({ balances }, { status: 200 });
    } catch (error) {
        console.error("Binance API Error:", error.response?.data || error.message);
        return NextResponse.json(
            { message: "Error fetching balance from Binance", error: error.response?.data || error.message },
            { status: 500 }
        );
    }
}

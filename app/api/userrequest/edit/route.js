import User from "@/models/Users";
import { dbConn } from "@/utils/database";
import { NextResponse } from "next/server";



export async function PATCH(req) {
    const { id, apiKey, walletAddress, privateKey, apiSecret, image_url, image_public_id, } = await req.json()

    if (!id) return NextResponse.json({ message: 'no user id' }, { status: 400 })

    try {
        await dbConn()

        const user = await User.findOne({ _id: id }).exec()

        if (!user) return NextResponse.json({ message: 'user not found' }, { status: 400 })

        user.apiKey = apiKey
        user.walletAddress = walletAddress
        user.privateKey = privateKey
        user.apiSecret = apiSecret

        if (image_url) user.image = image_url
        if (image_public_id) user.public_id = image_public_id

        await user.save()

        return NextResponse.json({ message: 'user updated' }, { status: 200 })

    } catch (error) {
        console.log(error.name, ": ", error.message)
        return NextResponse.json({ message: 'failed to connect' }, { status: 500 })
    }
}
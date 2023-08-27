import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// Creating a new Topic
export async function POST(request){
    const {title, description} = await request.json();

    // connecting to mongodb
    await connectMongoDB();

    // Creating topic
    await Topic.create({
        title: title,
        description: description
    })

    // sending response
    return NextResponse.json({message:"Topic Created"},{status: 201})
}

// Getting all topic
export async function GET()
{
    await connectMongoDB();
    const topics = await Topic.find();

    return NextResponse.json({
        topics
    },{status: 200})
}

// Delete topic
export async function DELETE (request)
{
    const id  = request.nextUrl.searchParams.get("id")
    await connectMongoDB();

    const topic = await Topic.findByIdAndDelete(id)
    
    return NextResponse.json({
        message: "Topic deleted"
    })
}
import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

// update a single topic
export async function PUT(request,{params})
{
    const {id} = params;
    const {newTitle: title, newDescription: description} = await request.json();

    await connectMongoDB();
    await Topic.findByIdAndUpdate(id,{title, description})

    return NextResponse.json({message: "Topic Updated!"},{status:201})
}

// getting a single topic by id
export async function GET(request, {params})
{
    const {id} = params;

    await connectMongoDB();
    const topic = await Topic.findById(id)

    return NextResponse.json({
        topic
    },{status:200})
}
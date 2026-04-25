import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { phoneNumber } = await request.json();

    if (!phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required" },
        { status: 400 }
      );
    }

    // TODO: Replace this with your actual backend API call
    // Example:
    // const response = await fetch('https://your-backend-api.com/delete-account', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer YOUR_API_KEY'
    //   },
    //   body: JSON.stringify({ phoneNumber })
    // });
    //
    // if (!response.ok) {
    //   throw new Error('Backend API request failed');
    // }

    // Placeholder success response
    console.log(`Account deletion requested for: ${phoneNumber}`);

    return NextResponse.json(
      { message: "Account deletion request received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing deletion request:", error);
    return NextResponse.json(
      { error: "Failed to process deletion request" },
      { status: 500 }
    );
  }
}

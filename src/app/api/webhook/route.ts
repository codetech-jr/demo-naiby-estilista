import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        // In a real production app, this is where you'd send data to Zapier, Google Sheets, or a CRM.
        // For now, we simulate saving the partial lead to prevent abandonment loss.
        console.log("=========================================");
        console.log("🚨 [WEBHOOK] PARTIAL LEAD CAPTURED 🚨");
        console.log("Name:", body.name);
        console.log("Phone:", body.phone);
        console.log("Current Step Reached:", body.step);
        console.log("Data so far:", JSON.stringify(body, null, 2));
        console.log("=========================================");

        return NextResponse.json({ success: true, message: "Lead saved successfully" }, { status: 200 });
    } catch (error) {
        console.error("[WEBHOOK ERROR]", error);
        return NextResponse.json({ success: false, message: "Failed to process lead" }, { status: 500 });
    }
}

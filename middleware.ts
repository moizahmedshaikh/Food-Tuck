


import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher(["/checkout", "/shopingCart", "/success", "/orders", "/shippment", "/tracking"]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    // If the route is protected, check if the user is authenticated
    const { userId } = await auth();
    if (!userId) {
      // If the user is not authenticated, redirect them to your custom sign-in page
      const signInUrl = new URL("/signin", req.url); // Replace "/signin" with your custom sign-in page route
      signInUrl.searchParams.set("redirect_url", req.url); // Pass the current URL as a query parameter
      return NextResponse.redirect(signInUrl);
    }
    
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};



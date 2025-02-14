import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const protectedRoutes = createRouteMatcher([
  '/',
  '/upcoming',
  '/recordings',
  '/personal-room',
  '/previous',
  '/meeting(.*)',
]);

export default clerkMiddleware(async (auth, req) => {  // Use auth and req as-is
  if (protectedRoutes(req)) {
    const { userId, sessionId } = await auth();  // Get userId and sessionId

    if (!userId || !sessionId) {  // Check if user is not authenticated
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }
  }
  return NextResponse.next();  // Continue to next middleware or route
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};

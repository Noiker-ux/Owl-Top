import { NextRequest, NextResponse } from 'next/server';

const middleware = function (request: NextRequest) {
	const { pathname } = request.nextUrl;
	const headers = new Headers(request.headers);
	headers.set('x-pathname', pathname);
	return NextResponse.next({ request: { headers } });
};

export { middleware };

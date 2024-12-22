import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/api/webhooks/stripe"]
})

export const config = {
    matcher: [
        "/((?!.*\\..*|_next).*)", // Loại bỏ các tệp tĩnh (_next, hoặc tệp có phần mở rộng như .js, .css).
        "/",                      // Áp dụng cho route gốc.
        "/(api|trpc)(.*)",        // Áp dụng cho tất cả route bắt đầu bằng api hoặc trpc.
    ],
}
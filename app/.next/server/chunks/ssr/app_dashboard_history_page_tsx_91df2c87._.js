module.exports = {

"[project]/app/dashboard/history/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, d: __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/node_modules/@clerk/shared/dist/react/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$db$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/db.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$schema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utils/schema.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/conditions.js [app-ssr] (ecmascript)"); // Add desc to handle sorting
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/drizzle-orm/sql/expressions/select.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const HistoryPage = ()=>{
    const { user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useUser"])();
    const [history, setHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchHistory = async ()=>{
            if (!user?.primaryEmailAddress?.emailAddress) return;
            try {
                const results = await __TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$db$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["db"].select().from(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$schema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIOutput"]).where((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$conditions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["eq"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$schema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIOutput"].createdBy, user.primaryEmailAddress.emailAddress)).orderBy((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$drizzle$2d$orm$2f$sql$2f$expressions$2f$select$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["desc"])(__TURBOPACK__imported__module__$5b$project$5d2f$utils$2f$schema$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AIOutput"].createdAt)); // Correct way to use desc in drizzle-orm
                setHistory(results);
            } catch (error) {
                console.error('Error fetching history:', error);
            } finally{
                setLoading(false);
            }
        };
        fetchHistory();
    }, [
        user
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-10 bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white flex rounded-lg flex-col p-5",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-extrabold p-4",
                    children: "History"
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-l p-4 mt-[-20px]",
                    children: "Search your previously generated AI content."
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: history.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "No history found."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/history/page.tsx",
                        lineNumber: 46,
                        columnNumber: 15
                    }, this) : history.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "border p-4 rounded-lg shadow-sm ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold flex justify-between",
                                    children: [
                                        "Template: ",
                                        entry.templateSlug,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Word Count: ",
                                                entry?.aiResponse ? entry.aiResponse.trim().split(/\s+/).length : 0
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/dashboard/history/page.tsx",
                                            lineNumber: 52,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: JSON.parse(entry.formData).description
                                }, void 0, false, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 54,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2",
                                    children: [
                                        "AI Response: ",
                                        entry.aiResponse
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 55,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-sm text-gray-500",
                                    children: [
                                        "Created At: ",
                                        entry.createdAt
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/dashboard/history/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/app/dashboard/history/page.tsx",
                            lineNumber: 49,
                            columnNumber: 17
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/app/dashboard/history/page.tsx",
                    lineNumber: 44,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/dashboard/history/page.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/history/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = HistoryPage;
}}),

};

//# sourceMappingURL=app_dashboard_history_page_tsx_91df2c87._.js.map
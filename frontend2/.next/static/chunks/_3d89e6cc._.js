(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/BillVisualization.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// components/BillVisualization.tsx
__turbopack_context__.s({
    "default": (()=>BillVisualization)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-chartjs-2'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module 'recharts'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@visx/responsive'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@visx/xychart'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__monotoneX__as__curveMonotoneX$3e$__ = __turbopack_context__.i("[project]/node_modules/d3-shape/src/curve/monotone.js [app-client] (ecmascript) <export monotoneX as curveMonotoneX>");
(()=>{
    const e = new Error("Cannot find module 'chart.js'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ChartJSTooltip, ChartJSLegend);
const COLORS = [
    '#0088FE',
    '#00C49F',
    '#FFBB28',
    '#FF8042',
    '#8884D8'
];
function BillVisualization({ bill, historicalData }) {
    _s();
    const [visualizationType, setVisualizationType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('bar');
    // Add to your component
    useEffect({
        "BillVisualization.useEffect": ()=>{
            const savedType = localStorage.getItem('preferredVizType');
            if (savedType) setVisualizationType(savedType);
        }
    }["BillVisualization.useEffect"], []);
    useEffect({
        "BillVisualization.useEffect": ()=>{
            localStorage.setItem('preferredVizType', visualizationType);
        }
    }["BillVisualization.useEffect"], [
        visualizationType
    ]);
    // Prepare data for visualizations
    const barChartData = {
        labels: bill.lineItems.map((item)=>item.description),
        datasets: [
            {
                label: 'Amount ($)',
                data: bill.lineItems.map((item)=>item.amount),
                backgroundColor: COLORS,
                borderColor: COLORS.map((color)=>color.replace('0.6', '1')),
                borderWidth: 1
            }
        ]
    };
    const pieChartData = bill.lineItems.reduce((acc, item)=>{
        const existing = acc.find((i)=>i.name === item.category);
        if (existing) {
            existing.value += item.amount;
        } else {
            acc.push({
                name: item.category,
                value: item.amount
            });
        }
        return acc;
    }, []);
    const barChartOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context)=>`$${context.raw.toFixed(2)}`
                }
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white p-4 rounded-lg shadow",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold",
                        children: "Bill Visualization"
                    }, void 0, false, {
                        fileName: "[project]/components/BillVisualization.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: visualizationType,
                                onChange: (e)=>setVisualizationType(e.target.value),
                                className: "appearance-none bg-gray-50 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "bar",
                                        children: "Bar Chart"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 104,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "pie",
                                        children: "Pie Chart"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    historicalData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "trend",
                                        children: "Trend Analysis"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 106,
                                        columnNumber: 32
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BillVisualization.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "fill-current h-4 w-4",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    viewBox: "0 0 20 20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/BillVisualization.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/BillVisualization.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/BillVisualization.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BillVisualization.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-64",
                children: [
                    visualizationType === 'bar' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Bar, {
                        data: barChartData,
                        options: barChartOptions
                    }, void 0, false, {
                        fileName: "[project]/components/BillVisualization.tsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    visualizationType === 'pie' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ResponsiveContainer, {
                        width: "100%",
                        height: "100%",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PieChart, {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Pie, {
                                    data: pieChartData,
                                    cx: "50%",
                                    cy: "50%",
                                    labelLine: false,
                                    outerRadius: 80,
                                    fill: "#8884d8",
                                    dataKey: "value",
                                    nameKey: "name",
                                    label: ({ name, percent })=>`${name} (${(percent * 100).toFixed(0)}%)`,
                                    children: pieChartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cell, {
                                            fill: COLORS[index % COLORS.length]
                                        }, `cell-${index}`, false, {
                                            fileName: "[project]/components/BillVisualization.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/BillVisualization.tsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tooltip, {
                                    formatter: (value)=>[
                                            `$${value.toFixed(2)}`,
                                            'Amount'
                                        ],
                                    labelFormatter: (label)=>`Category: ${label}`
                                }, void 0, false, {
                                    fileName: "[project]/components/BillVisualization.tsx",
                                    lineNumber: 139,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Legend, {}, void 0, false, {
                                    fileName: "[project]/components/BillVisualization.tsx",
                                    lineNumber: 143,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/BillVisualization.tsx",
                            lineNumber: 123,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BillVisualization.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    visualizationType === 'trend' && historicalData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ParentSize, {
                        children: ({ width, height })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(XYChart, {
                                width: width,
                                height: height,
                                xScale: {
                                    type: 'band'
                                },
                                yScale: {
                                    type: 'linear'
                                },
                                margin: {
                                    top: 20,
                                    right: 20,
                                    bottom: 40,
                                    left: 40
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Grid, {
                                        columns: false,
                                        numTicks: 4,
                                        strokeDasharray: "4",
                                        stroke: "#eee"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Axis, {
                                        orientation: "bottom",
                                        tickFormat: (d)=>d.slice(0, 3)
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Axis, {
                                        orientation: "left",
                                        tickFormat: (d)=>`$${d}`
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                        dataKey: "Current",
                                        data: historicalData,
                                        xAccessor: (d)=>d.month,
                                        yAccessor: (d)=>d.current,
                                        stroke: "#4f46e5",
                                        strokeWidth: 2,
                                        curve: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__monotoneX__as__curveMonotoneX$3e$__["curveMonotoneX"]
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 161,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Line, {
                                        dataKey: "Average",
                                        data: historicalData,
                                        xAccessor: (d)=>d.month,
                                        yAccessor: (d)=>d.average,
                                        stroke: "#6b7280",
                                        strokeWidth: 1.5,
                                        strokeDasharray: "4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VisxTooltip, {
                                        snapTooltipToDatumX: true,
                                        snapTooltipToDatumY: true,
                                        showVerticalCrosshair: true,
                                        showSeriesGlyphs: true,
                                        renderTooltip: ({ tooltipData })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-2 border border-gray-200 rounded shadow",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: tooltipData?.nearestDatum?.key
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/BillVisualization.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Month: ",
                                                            tooltipData?.nearestDatum?.datum.month
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BillVisualization.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "Amount: $",
                                                            tooltipData?.nearestDatum?.datum.current.toFixed(2)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/BillVisualization.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 23
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/BillVisualization.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/components/BillVisualization.tsx",
                                        lineNumber: 179,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/BillVisualization.tsx",
                                lineNumber: 151,
                                columnNumber: 15
                            }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/BillVisualization.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/BillVisualization.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 text-sm text-gray-500",
                children: [
                    visualizationType === 'bar' && 'Click bars for details',
                    visualizationType === 'pie' && 'Hover segments for amounts',
                    visualizationType === 'trend' && 'Comparing current bill to historical data'
                ]
            }, void 0, true, {
                fileName: "[project]/components/BillVisualization.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/BillVisualization.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_s(BillVisualization, "UX4WoejRHCHS7XR+rpb98kkwkQ0=");
_c = BillVisualization;
var _c;
__turbopack_context__.k.register(_c, "BillVisualization");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/BillVisualization.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/components/BillVisualization.tsx [app-client] (ecmascript)"));
}}),
"[project]/node_modules/d3-shape/src/curve/monotone.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "monotoneX": (()=>monotoneX),
    "monotoneY": (()=>monotoneY)
});
function sign(x) {
    return x < 0 ? -1 : 1;
}
// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
    var h0 = that._x1 - that._x0, h1 = x2 - that._x1, s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0), s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0), p = (s0 * h1 + s1 * h0) / (h0 + h1);
    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}
// Calculate a one-sided slope.
function slope2(that, t) {
    var h = that._x1 - that._x0;
    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}
// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
    var x0 = that._x0, y0 = that._y0, x1 = that._x1, y1 = that._y1, dx = (x1 - x0) / 3;
    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}
function MonotoneX(context) {
    this._context = context;
}
MonotoneX.prototype = {
    areaStart: function() {
        this._line = 0;
    },
    areaEnd: function() {
        this._line = NaN;
    },
    lineStart: function() {
        this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN;
        this._point = 0;
    },
    lineEnd: function() {
        switch(this._point){
            case 2:
                this._context.lineTo(this._x1, this._y1);
                break;
            case 3:
                point(this, this._t0, slope2(this, this._t0));
                break;
        }
        if (this._line || this._line !== 0 && this._point === 1) this._context.closePath();
        this._line = 1 - this._line;
    },
    point: function(x, y) {
        var t1 = NaN;
        x = +x, y = +y;
        if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
        switch(this._point){
            case 0:
                this._point = 1;
                this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y);
                break;
            case 1:
                this._point = 2;
                break;
            case 2:
                this._point = 3;
                point(this, slope2(this, t1 = slope3(this, x, y)), t1);
                break;
            default:
                point(this, this._t0, t1 = slope3(this, x, y));
                break;
        }
        this._x0 = this._x1, this._x1 = x;
        this._y0 = this._y1, this._y1 = y;
        this._t0 = t1;
    }
};
function MonotoneY(context) {
    this._context = new ReflectContext(context);
}
(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
    MonotoneX.prototype.point.call(this, y, x);
};
function ReflectContext(context) {
    this._context = context;
}
ReflectContext.prototype = {
    moveTo: function(x, y) {
        this._context.moveTo(y, x);
    },
    closePath: function() {
        this._context.closePath();
    },
    lineTo: function(x, y) {
        this._context.lineTo(y, x);
    },
    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
        this._context.bezierCurveTo(y1, x1, y2, x2, y, x);
    }
};
function monotoneX(context) {
    return new MonotoneX(context);
}
function monotoneY(context) {
    return new MonotoneY(context);
}
}}),
"[project]/node_modules/d3-shape/src/curve/monotone.js [app-client] (ecmascript) <export monotoneX as curveMonotoneX>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "curveMonotoneX": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monotoneX"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$d3$2d$shape$2f$src$2f$curve$2f$monotone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/d3-shape/src/curve/monotone.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_3d89e6cc._.js.map
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var config = __importStar(require("./config"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.json({
        appName: config.getAppName()
    });
});
app.get('/frameworks', function (req, res) {
    res.json([
        {
            name: 'React',
            url: 'https://reactjs.org/',
            description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.'
        },
        {
            name: 'Angular',
            url: 'https://angular.io/',
            description: 'A platform and framework for building client-side applications with HTML, CSS, and JavaScript/TypeScript.'
        },
        {
            name: 'Vue.js',
            url: 'https://vuejs.org/',
            description: 'A progressive JavaScript framework for building user interfaces. It is incrementally adaptable and integrates well with other libraries.'
        },
        {
            name: 'Next.js',
            url: 'https://nextjs.org/',
            description: 'A React-based framework that enables functionality such as server-side rendering and generating static websites for React-based web applications.'
        },
        {
            name: 'Svelte',
            url: 'https://svelte.dev/',
            description: 'A radical new approach to building user interfaces. It shifts the work from the browser to the build step, resulting in faster runtime performance.'
        },
    ]);
});
app.listen(config.getPort(), function () {
    console.log("listening at http://localhost:".concat(config.getPort()));
});
//# sourceMappingURL=index.js.map
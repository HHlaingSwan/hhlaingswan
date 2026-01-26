import React from "react";
import Image from "next/image";
import shareLoc from "@/assets/images/shareLoc.png";
import arcane from "@/assets/images/arcane/arcaneImage.png";
import gac from "@/assets/images/gac.png";
import demoChat from "@/assets/images/chatApp/demoChatApp.png";
import functionallityBot from "@/assets/images/tgBot/function.png";
import homeView from "@/assets/images/masterProject/homeView.png";
import type { Project } from "@/types";

export const content: Project[] = [
  {
    title: `Global University Website (Freelance)`,
    description: (
      <>
        This is my first production static website for Global University,
        showcasing my ability to create professional and informative web pages.
        The site features a clean design, easy navigation, and essential
        information about the university&apos;s programs and services.
      </>
    ),
    url: "https://www.gacportal.com",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={gac}
          className="h-full w-full object-contain"
          alt="global university website demo"
        />
      </div>
    ),
  },
  {
    title: "Advanced Sharing & Tagging (React)",
    description:
      "Introduced comprehensive sharing functionalities, allowing users to share posts, broadcast their location, and tag friends. This fosters deeper connections and community interaction, making content sharing more dynamic and personalized.",
    url: "#projects",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={shareLoc}
          className="h-full w-full object-contain"
          alt="share location demo"
        />
      </div>
    ),
  },

  {
    title: "Static Movie Fan Page Base On Arcane Series ",
    description: (
      <>
        Created a visually captivating static fan page dedicated to the Arcane
        series, showcasing key characters, episodes, and lore. The page features
        immersive design elements that celebrate the show&apos;s unique art
        style and storytelling.
      </>
    ),
    url: "https://arcane-game.vercel.app",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={arcane}
          className="h-full w-full object-contain"
          alt="  arcane demo"
        />
      </div>
    ),
  },
  {
    title: "Real-Time Chat Application (MERN Stack)",
    description: (
      <>
        Built a full-featured real-time messaging platform with Socket.IO for
        instant message delivery. Users can send text and share images via
        Cloudinary, view online status indicators, track last seen timestamps,
        and manage contacts with add/block functionality. Features responsive
        design with smooth Framer Motion animations and skeleton loading states.
      </>
    ),
    url: "https://unit-chat-five.vercel.app/",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={demoChat}
          className="h-full w-full object-contain"
          alt="  chat application demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-8">
        {/* Tech Stack Section */}
        <div className="bg-gradient-to-br from-primary/5 to-transparent rounded-2xl p-6 border border-primary/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Tech Stack
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-background/50 rounded-xl p-4 border border-border/30">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                Backend
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Node.js 18+ with Express.js 5.x</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>MongoDB with Mongoose ODM</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Socket.IO 4.x for real-time messaging</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>JWT authentication with cookie support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Cloudinary for image storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Arcjet for security & rate limiting</span>
                </li>
              </ul>
            </div>
            <div className="bg-background/50 rounded-xl p-4 border border-border/30">
              <h4 className="font-semibold text-primary mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                Frontend
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>React 19 with TypeScript</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Vite 7.x build tool</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Zustand 5.x for state management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Tailwind CSS 4.x for styling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Radix UI components</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">▸</span>
                  <span>Framer Motion for animations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Key Features Section */}
        <div className="bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl p-6 border border-green-500/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-green-600 to-green-500/70 bg-clip-text text-transparent">
            Key Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-sm">Real-time messaging via WebSocket</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-sm">Image sharing with Cloudinary integration</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-sm">Secure JWT authentication with 7-day sessions</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-sm">Online presence and last seen timestamps</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-sm">Contact management with add/block functionality</span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-background/50 border border-border/30">
                <div className="w-5 h-5 rounded bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-xs">✓</span>
                </div>
                <span className="text-sm">Responsive design with skeleton loading states</span>
              </div>
            </div>
          </div>
        </div>

        {/* API Endpoints Section */}
        <div className="bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl p-6 border border-purple-500/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-purple-500/70 bg-clip-text text-transparent">
            API Endpoints
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-purple-600 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                Authentication
              </h4>
              <div className="space-y-3">
                <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                  <code className="text-xs font-mono bg-purple-500/10 text-purple-700 px-3 py-2 rounded-md block">
                    POST /api/auth/signup
                  </code>
                  <span className="text-xs text-muted-foreground mt-1 block">Register new user</span>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                  <code className="text-xs font-mono bg-purple-500/10 text-purple-700 px-3 py-2 rounded-md block">
                    POST /api/auth/login
                  </code>
                  <span className="text-xs text-muted-foreground mt-1 block">User login</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-purple-600 mb-4 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                Messages
              </h4>
              <div className="space-y-3">
                <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                  <code className="text-xs font-mono bg-purple-500/10 text-purple-700 px-3 py-2 rounded-md block">
                    GET /api/message/contacts
                  </code>
                  <span className="text-xs text-muted-foreground mt-1 block">Get chat partners</span>
                </div>
                <div className="bg-background/50 rounded-lg p-3 border border-border/30">
                  <code className="text-xs font-mono bg-purple-500/10 text-purple-700 px-3 py-2 rounded-md block">
                    POST /api/message/:id
                  </code>
                  <span className="text-xs text-muted-foreground mt-1 block">Send message/image</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Structure Section */}
        <div className="bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl p-6 border border-blue-500/10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-500/70 bg-clip-text text-transparent">
            Project Structure
          </h3>
          <pre className="text-sm font-mono bg-background/70 border border-border/30 rounded-xl p-5 overflow-x-auto leading-relaxed">
{`Unit-Chat/
├── backend/src/
│   ├── controllers/    # Request handlers
│   ├── models/         # Mongoose schemas  
│   ├── routes/         # API routes
│   ├── socket/         # Socket.IO setup
│   └── server.js       # Entry point
└── frontend/src/
    ├── components/     # React components
    ├── store/          # Zustand state
    └── types/          # TypeScript types`}
          </pre>
        </div>
      </div>
    ),
  },

  {
    title: "Myanmar Expense Tracker Bot",
    description: (
      <>
        Use natural language commands like{" "}
        <code className="text-amber-400">breakfast 1000</code> or
        <code className="text-amber-400"> ညနေစာ 5000</code> to log expenses
        instantly. View today&apos;s spending with
        <code className="text-amber-400">/today</code>, get monthly summaries
        with <code className="text-amber-400">/thismonth</code>, and check
        Myanmar holidays with <code className="text-amber-400">/holidays</code>.
        The bot automatically categorizes expenses by keywords and syncs
        holidays for better financial planning.
      </>
    ),
    url: "https://t.me/gogoTimeBot",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={functionallityBot}
          className="h-full w-full object-contain"
          alt="  expense tracker bot demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground">
            A simple Telegram bot for tracking daily expenses with Myanmar holiday integration. 
            Supports both Burmese and English natural language commands for expense logging.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Daily expense tracking with Burmese/English support</li>
            <li>• Monthly spending overview by day</li>
            <li>• Myanmar holidays sync from Calendarific API</li>
            <li>• Simple natural language commands</li>
            <li>• Automatic expense categorization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Commands</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-2">
              <h4 className="font-medium text-primary">Expense Logging</h4>
              <ul className="text-xs space-y-1">
                <li><code className="bg-muted px-2 py-1 rounded">breakfast 1000</code> - Add expense</li>
                <li><code className="bg-muted px-2 py-1 rounded">lunch 3000</code> - Add expense</li>
                <li><code className="bg-muted px-2 py-1 rounded">ညနေစာ 5000</code> - Add expense (Burmese)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">View Data</h4>
              <ul className="text-xs space-y-1">
                <li><code className="bg-muted px-2 py-1 rounded">/today</code> - Today&apos;s expenses</li>
                <li><code className="bg-muted px-2 py-1 rounded">/thismonth</code> - Monthly overview</li>
                <li><code className="bg-muted px-2 py-1 rounded">/holidays</code> - Myanmar holidays</li>
                <li><code className="bg-muted px-2 py-1 rounded">/settings</code> - Bot settings</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Auto Categories</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div><span className="font-medium">Keyword:</span> breakfast, မနက်စာ → <span className="text-primary">Breakfast</span></div>
            <div><span className="font-medium">Keyword:</span> lunch, နေ့လည်စာ → <span className="text-primary">Lunch</span></div>
            <div><span className="font-medium">Keyword:</span> dinner, ညနေစာ → <span className="text-primary">Dinner</span></div>
            <div><span className="font-medium">Keyword:</span> coffee, ကော်ဖီ → <span className="text-primary">Coffee</span></div>
            <div><span className="font-medium">Keyword:</span> transport, ကားခ → <span className="text-primary">Transport</span></div>
            <div><span className="font-medium">Keyword:</span> grocery, ဈေး → <span className="text-primary">Grocery</span></div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Node.js 18+ with Express.js</li>
            <li>• MongoDB with Mongoose ODM</li>
            <li>• node-telegram-bot-api for Telegram integration</li>
            <li>• Calendarific API for holiday data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Project Structure</h3>
          <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
{`telegram-bot/
├── bot/
│   ├── bot.js           # Telegram bot setup
│   ├── command.js       # All commands
│   └── handlers.js      # Command handlers
├── models/
│   ├── Expense.js       # Expense transactions
│   └── Holiday.js       # Myanmar holidays
├── services/
│   ├── expense.js       # Expense CRUD
│   └── holiday.js       # Calendarific API
└── routes/
    └── telegram.route.js # Webhook route`}
          </pre>
        </div>
      </div>
    ),
  },
  {
    title: "Master Project E-Commerce Platform",
    description: (
      <>
        A full-stack e-commerce application with comprehensive product management,
        secure authentication, shopping cart, order tracking, and admin dashboard.
        Features role-based access control, real-time inventory management, and 
        responsive design with modern UI/UX.
      </>
    ),
    url: "https://master-project-sable.vercel.app",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src={homeView}
          className="h-full w-full object-contain"
          alt="e-commerce platform demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Backend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Node.js with Express.js</li>
                <li>• MongoDB with Mongoose ODM</li>
                <li>• JWT authentication</li>
                <li>• Cloudinary for image upload</li>
                <li>• Nodemailer for email services</li>
                <li>• Arcjet for security & DDoS protection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Frontend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• React 19 with TypeScript</li>
                <li>• Vite build tool</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Zustand for state management</li>
                <li>• TanStack Query for data fetching</li>
                <li>• Radix UI components</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-primary mb-2">User Management</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Secure registration & login</li>
                <li>• JWT-based authentication</li>
                <li>• Password reset via email</li>
                <li>• Profile management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Role-Based Access</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Regular users: Browse & shop</li>
                <li>• Admin users: Full dashboard access</li>
                <li>• Protected routes & middleware</li>
                <li>• Order ownership validation</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Product Management</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Product catalog with categories (Watch, Mac, Phone, Earphone, iPad, Accessories)</li>
            <li>• Product variants (colors with hex codes, sizes)</li>
            <li>• Product badges (Sale, New, Popular)</li>
            <li>• Stock management and validation</li>
            <li>• Image management with Cloudinary</li>
            <li>• Search functionality and pagination</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Shopping & Orders</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Shopping cart with variant selection</li>
            <li>• Automatic stock validation</li>
            <li>• Order creation with shipping address</li>
            <li>• Order status tracking (pending, processing, shipped, delivered, cancelled)</li>
            <li>• Order history and filtering</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Admin Dashboard</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Products tab: CRUD operations, search, pagination</li>
            <li>• Users tab: View users, manage admin roles</li>
            <li>• Analytics tab: Popular products, charts</li>
            <li>• Orders tab: View and update order status</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">API Endpoints</h3>
          <div className="space-y-2 text-xs">
            <div><span className="font-medium">Auth:</span> POST /api/register | POST /api/log-in | POST /api/forgot-password</div>
            <div><span className="font-medium">Products:</span> GET /api/products | POST /api/products | PUT /api/products/:id</div>
            <div><span className="font-medium">Orders:</span> POST /api/orders | GET /api/orders | PUT /api/orders/:id/status</div>
            <div><span className="font-medium">Users:</span> GET /api/users | PUT /api/users/:id/role</div>
          </div>
        </div>
      </div>
    ),
  },
];

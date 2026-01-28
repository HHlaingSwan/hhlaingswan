import React from "react";
import Image from "next/image";
import type { Project } from "@/types";

export const content: Project[] = [
  {
    title: "Retro Snake Game (React)",
    description: (
      <>
        A modern, responsive Snake game built with React and Vite featuring a
        retro arcade aesthetic. It includes progressive difficulty, score
        tracking, and works seamlessly on both desktop and mobile devices with
        optimized controls.
      </>
    ),
    url: "https://snake-game-black-eight.vercel.app/",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/snake-game.png"
          fill
          className="object-contain"
          alt="snake game demo"
        />
      </div>
    ),
    images: ["/images/snake-game.png"],
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground">
            A classic Snake game reimagined with modern web technologies.
            Featuring a minimalist black & white retro aesthetic, this game
            offers a responsive experience across all devices with dedicated
            control schemes for both desktop (keyboard) and mobile (touch).
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Classic gameplay with progressive difficulty</li>
            <li>• Responsive design for desktop, tablet, and mobile</li>
            <li>• Touch controls (D-pad) for mobile devices</li>
            <li>• Keyboard controls for desktop users</li>
            <li>• Real-time score tracking and game states</li>
            <li>• Retro CRT screen aesthetic</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• React 18 for component-based UI</li>
            <li>• Vite for fast development and building</li>
            <li>• CSS3 for retro styling and animations</li>
            <li>• Modern JavaScript (ES6+)</li>
            <li>• Responsive design principles</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Game Mechanics</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• 20x20 Grid System with pixel-perfect rendering</li>
            <li>• Collision detection (walls and self)</li>
            <li>• Dynamic speed progression based on score</li>
            <li>• Random food generation algorithm</li>
          </ul>
        </div>
      </div>
    ),
  },
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
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/gac.png"
          fill
          className="object-contain"
          alt="global university website demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground">
            A professional static website for Global University featuring clean
            design, easy navigation, and comprehensive information about
            university programs and services. Built as a freelance project to
            showcase web development capabilities.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Clean, professional design</li>
            <li>• Easy navigation structure</li>
            <li>• Responsive layout for all devices</li>
            <li>• Comprehensive program information</li>
            <li>• Service descriptions and contact details</li>
            <li>• Fast loading static pages</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• HTML5 semantic markup</li>
            <li>• CSS3 with modern layout techniques</li>
            <li>• JavaScript for interactivity</li>
            <li>• Responsive design principles</li>
            <li>• Performance optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Project Highlights</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• First production freelance project</li>
            <li>• Client satisfaction and professional delivery</li>
            <li>• Attention to accessibility standards</li>
            <li>• Cross-browser compatibility testing</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Advanced Sharing & Tagging (React)",
    description:
      "Introduced comprehensive sharing functionalities, allowing users to share posts, broadcast their location, and tag friends. This fosters deeper connections and community interaction, making content sharing more dynamic and personalized.",
    url: "#projects",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/shareLoc.png"
          fill
          className="object-contain"
          alt="share location demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground">
            An advanced social sharing system that enhances user interaction
            through comprehensive sharing features including post sharing,
            location broadcasting, and friend tagging. Designed to foster deeper
            community connections and make content sharing more dynamic.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Core Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Post sharing with customizable privacy settings</li>
            <li>• Real-time location broadcasting</li>
            <li>• Friend tagging in posts and comments</li>
            <li>• Rich media sharing support</li>
            <li>• Activity feed and notifications</li>
            <li>• Social interaction analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">
            Technical Implementation
          </h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• React component architecture</li>
            <li>• State management for sharing features</li>
            <li>• Geolocation API integration</li>
            <li>• Real-time updates and notifications</li>
            <li>• User permission management</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">User Experience</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Intuitive sharing interface</li>
            <li>• One-click location sharing</li>
            <li>• Smart friend suggestions for tagging</li>
            <li>• Privacy controls for shared content</li>
            <li>• Seamless social media integration</li>
          </ul>
        </div>
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
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/arcaneImage.png"
          fill
          className="object-contain"
          alt="  arcane demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground">
            A visually stunning static fan page dedicated to the Arcane series,
            featuring immersive design elements that showcase key characters,
            episodes, and lore. The site celebrates the show&apos;s unique art
            style and compelling storytelling.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Design Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Arcane-inspired color palette and typography</li>
            <li>• Immersive visual effects and animations</li>
            <li>• Character gallery with detailed profiles</li>
            <li>• Episode guide with synopsis</li>
            <li>• Interactive lore sections</li>
            <li>• Responsive gallery layouts</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Content Sections</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Main character showcase</li>
            <li>• Episode breakdown and timeline</li>
            <li>• Story background and mythology</li>
            <li>• Visual art and design gallery</li>
            <li>• Fan community integration</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Technical Stack</h3>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• HTML5 semantic structure</li>
            <li>• CSS3 with advanced animations</li>
            <li>• JavaScript for interactive elements</li>
            <li>• Responsive design techniques</li>
            <li>• Performance optimization</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Design Philosophy</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Capture Arcane&apos;s unique visual identity</li>
            <li>• Create immersive fan experience</li>
            <li>• Balance aesthetics with usability</li>
            <li>• Mobile-first responsive approach</li>
          </ul>
        </div>
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
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/demoChatApp.png"
          fill
          className="object-contain"
          alt="  chat application demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground">
            A production-ready real-time chat application built with the MERN
            stack (MongoDB, Express, React, Node.js). It features secure JWT
            authentication, instant messaging with Socket.IO, image sharing via
            Cloudinary, and a polished, responsive UI with Framer Motion
            animations.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Key Features</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Real-time Messaging via WebSocket</li>
            <li>• Image Sharing with Cloudinary</li>
            <li>• Secure JWT Authentication & 7-day sessions</li>
            <li>• Online Presence & Last Seen Timestamps</li>
            <li>• Contact Management (Add/Block Users)</li>
            <li>• Responsive Design for Mobile Devices</li>
            <li>• Smooth Animations with Framer Motion</li>
            <li>• Skeleton Loading States for better UX</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tech Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium text-primary mb-2">Backend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Node.js & Express.js</li>
                <li>• MongoDB & Mongoose</li>
                <li>• Socket.IO for real-time communication</li>
                <li>• JWT for authentication</li>
                <li>• Cloudinary for file storage</li>
                <li>• Arcjet for security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-2">Frontend</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• React 19 & TypeScript</li>
                <li>• Vite build tool</li>
                <li>• Tailwind CSS for styling</li>
                <li>• Zustand for state management</li>
                <li>• React Router for routing</li>
                <li>• Radix UI for components</li>
                <li>• Framer Motion for animations</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Project Structure</h3>
          <pre className="text-xs bg-muted p-3 rounded overflow-x-auto">
            {`Unit-Chat/
├── backend/                 # Express.js server
│   └── src/
│       ├── controllers/     # Request handlers
│       ├── db/              # Database configurations
│       ├── emails/          # Email templates
│       ├── middleware/      # Auth, file upload, security
│       ├── models/          # Mongoose schemas
│       ├── routes/          # API routes
│       ├── socket/          # Socket.IO setup
│       └── server.js        # Entry point
├── frontend/                # React + TypeScript app
│   └── src/
│       ├── components/      # React components
│       │   ├── auth/        # Login/Signup
│       │   ├── Chat/        # Chat UI
│       │   └── ui/          # Reusable UI
│       ├── lib/             # Utilities
│       ├── store/           # Zustand state
│       └── types/           # TypeScript types
└── render.yaml              # Deployment config`}
          </pre>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">API Endpoints</h3>
          <div className="space-y-2 text-xs">
            <div>
              <span className="font-medium">Auth:</span> POST /api/auth/signup |
              POST /api/auth/login
            </div>
            <div>
              <span className="font-medium">Messages:</span> GET
              /api/message/contacts | POST /api/message/:id
            </div>
          </div>
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
        Myanmar&apos;s holidays with{" "}
        <code className="text-amber-400">/holidays</code>. The bot automatically
        categorizes expenses by keywords and syncs holidays for better financial
        planning.
      </>
    ),
    url: "https://t.me/gogoTimeBot",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/function.png"
          fill
          className="object-contain"
          alt="  expense tracker bot demo"
        />
      </div>
    ),
    details: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-3">Overview</h3>
          <p className="text-sm text-muted-foreground">
            A simple Telegram bot for tracking daily expenses with Myanmar
            holiday integration. Supports both Burmese and English natural
            language commands for expense logging.
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
                <li>
                  <code className="bg-muted px-2 py-1 rounded">
                    breakfast 1000
                  </code>{" "}
                  - Add expense
                </li>
                <li>
                  <code className="bg-muted px-2 py-1 rounded">lunch 3000</code>{" "}
                  - Add expense
                </li>
                <li>
                  <code className="bg-muted px-2 py-1 rounded">ညနေစာ 5000</code>{" "}
                  - Add expense (Burmese)
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-primary">View Data</h4>
              <ul className="text-xs space-y-1">
                <li>
                  <code className="bg-muted px-2 py-1 rounded">/today</code> -
                  Today&apos;s expenses
                </li>
                <li>
                  <code className="bg-muted px-2 py-1 rounded">/thismonth</code>{" "}
                  - Monthly overview
                </li>
                <li>
                  <code className="bg-muted px-2 py-1 rounded">/holidays</code>{" "}
                  - Myanmar holidays
                </li>
                <li>
                  <code className="bg-muted px-2 py-1 rounded">/settings</code>{" "}
                  - Bot settings
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Auto Categories</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div>
              <span className="font-medium">Keyword:</span> breakfast, မနက်စာ →{" "}
              <span className="text-primary">Breakfast</span>
            </div>
            <div>
              <span className="font-medium">Keyword:</span> lunch, နေ့လည်စာ →{" "}
              <span className="text-primary">Lunch</span>
            </div>
            <div>
              <span className="font-medium">Keyword:</span> dinner, ညနေစာ →{" "}
              <span className="text-primary">Dinner</span>
            </div>
            <div>
              <span className="font-medium">Keyword:</span> coffee, ကော်ဖီ →{" "}
              <span className="text-primary">Coffee</span>
            </div>
            <div>
              <span className="font-medium">Keyword:</span> transport, ကားခ →{" "}
              <span className="text-primary">Transport</span>
            </div>
            <div>
              <span className="font-medium">Keyword:</span> grocery, ဈေး →{" "}
              <span className="text-primary">Grocery</span>
            </div>
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
        A full-stack e-commerce application with comprehensive product
        management, secure authentication, shopping cart, order tracking, and
        admin dashboard. Features role-based access control, real-time inventory
        management, and responsive design with modern UI/UX.
      </>
    ),
    url: "https://master-project-sable.vercel.app",
    content: (
      <div className="relative flex h-full w-full items-center justify-center text-white">
        <Image
          src="/images/homeView.png"
          fill
          className="object-contain"
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
              <h4 className="font-medium text-primary mb-2">
                Role-Based Access
              </h4>
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
            <li>
              • Product catalog with categories (Watch, Mac, Phone, Earphone,
              iPad, Accessories)
            </li>
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
            <li>
              • Order status tracking (pending, processing, shipped, delivered,
              cancelled)
            </li>
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
            <div>
              <span className="font-medium">Auth:</span> POST /api/register |
              POST /api/log-in | POST /api/forgot-password
            </div>
            <div>
              <span className="font-medium">Products:</span> GET /api/products |
              POST /api/products | PUT /api/products/:id
            </div>
            <div>
              <span className="font-medium">Orders:</span> POST /api/orders |
              GET /api/orders | PUT /api/orders/:id/status
            </div>
            <div>
              <span className="font-medium">Users:</span> GET /api/users | PUT
              /api/users/:id/role
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

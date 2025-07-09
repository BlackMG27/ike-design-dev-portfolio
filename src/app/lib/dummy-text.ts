// lib/dummy-data.ts - Comprehensive portfolio dummy data

export const dummyProjects = [
  {
    id: '1',
    title: 'FieldScope - Museum Collection Management',
    slug: 'fieldscope-museum-management',
    description: 'A comprehensive digital collection management system designed for natural history museums to catalog, track, and manage specimens and artifacts.',
    heroImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop'
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'React Hook Form'],
    objective: 'Design and develop a modern, intuitive interface for museum curators to efficiently manage large-scale specimen collections while maintaining data integrity and accessibility.',
    process: {
      wins: [
        'Reduced specimen cataloging time by 60% through streamlined workflows',
        'Implemented advanced search functionality with filters and facets',
        'Created responsive design that works on tablets for field research'
      ],
      challenges: [
        'Complex data relationships between specimens, locations, and researchers',
        'Balancing detailed scientific data with user-friendly interface',
        'Ensuring data migration from legacy systems'
      ],
      lessons: [
        'User research with domain experts is crucial for specialized applications',
        'Progressive disclosure helps manage complex data entry forms',
        'Performance optimization is critical when dealing with large datasets'
      ]
    },
    finalProduct: {
      liveUrl: 'https://fieldscope-demo.vercel.app',
      githubUrl: 'https://github.com/yourusername/fieldscope',
      resultMetrics: [
        '40% reduction in data entry errors',
        '60% faster specimen cataloging process',
        '95% user satisfaction rating from beta testers'
      ]
    },
    content: `FieldScope emerged from a real need I identified while working at The Field Museum. Curators were struggling with outdated systems that made specimen management inefficient and error-prone.

**Problem Statement**
The existing collection management system was built in the 1990s and couldn't handle modern research workflows. Curators spent more time fighting the interface than focusing on scientific work.

**My Solution**
I designed a modern web application that prioritizes user experience while maintaining the rigorous data standards required for scientific research. The interface adapts to different user roles - from field researchers to collection managers.

**Key Features**
- Intelligent specimen entry with auto-complete and validation
- Advanced search with geographic and taxonomic filters
- Batch operations for processing multiple specimens
- Integration with imaging systems for specimen photography
- Responsive design for field and lab use

The project taught me the importance of deep user research and iterative design when working with specialized domains.`,
    featured: true,
    publishedAt: '2024-01-15'
  },
  {
    id: '2',
    title: 'ChefConnect - Recipe Sharing Platform',
    slug: 'chefconnect-recipe-platform',
    description: 'A social platform for professional chefs to share recipes, techniques, and culinary innovations with a focus on visual storytelling.',
    heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Socket.io', 'Material-UI'],
    objective: 'Create an engaging platform where culinary professionals can share knowledge, build communities, and showcase their creative work through rich media content.',
    process: {
      wins: [
        'Developed innovative step-by-step recipe builder with inline media',
        'Implemented real-time collaboration features for recipe development',
        'Created seamless image upload and editing workflow'
      ],
      challenges: [
        'Optimizing image-heavy content for various device sizes',
        'Building intuitive recipe scaling and conversion tools',
        'Managing complex ingredient databases and dietary restrictions'
      ],
      lessons: [
        'Progressive image loading dramatically improves perceived performance',
        'User-generated content requires robust moderation tools',
        'Mobile-first design is essential for cooking applications'
      ]
    },
    finalProduct: {
      liveUrl: 'https://chefconnect-demo.netlify.app',
      githubUrl: 'https://github.com/yourusername/chefconnect',
      resultMetrics: [
        '500+ registered chef users in beta',
        '2,000+ recipes shared in first month',
        '85% mobile usage rate'
      ]
    },
    content: `ChefConnect was born from conversations with professional chefs who felt existing platforms didn't capture the artistry and complexity of their work.

**The Challenge**
Existing recipe platforms were designed for home cooks, not professionals. Chefs needed tools for precise measurements, technique documentation, and visual storytelling that matched their creative process.

**Design Process**
I conducted interviews with 15 professional chefs to understand their workflow, from ideation to plating. This research revealed the need for collaborative features and multimedia-rich recipe documentation.

**Technical Innovations**
- Custom recipe builder with drag-and-drop steps
- Automatic scaling calculations for different serving sizes
- Integration with professional kitchen equipment databases
- Real-time collaboration tools for recipe development teams

The platform launched with a community of 50 beta chefs and grew to 500+ users within three months.`,
    featured: true,
    publishedAt: '2024-02-01'
  },
  {
    id: '3',
    title: 'WellnessTracker - Health Monitoring Dashboard',
    slug: 'wellness-tracker-dashboard',
    description: 'A comprehensive health dashboard that aggregates data from multiple sources to provide personalized wellness insights and recommendations.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
    ],
    technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'PostgreSQL', 'Chart.js'],
    objective: 'Design an intuitive dashboard that transforms complex health data into actionable insights while maintaining user privacy and data security.',
    process: {
      wins: [
        'Created interactive data visualizations that make health trends clear',
        'Implemented privacy-first architecture with local data processing',
        'Designed accessible interface following WCAG 2.1 guidelines'
      ],
      challenges: [
        'Visualizing complex multi-dimensional health data',
        'Ensuring data accuracy from various API sources',
        'Balancing detailed analytics with simple user experience'
      ],
      lessons: [
        'Data visualization requires iterative testing with real users',
        'Health applications need extra attention to accessibility',
        'Privacy considerations should drive architectural decisions'
      ]
    },
    finalProduct: {
      liveUrl: 'https://wellness-dashboard.herokuapp.com',
      githubUrl: 'https://github.com/yourusername/wellness-tracker',
      resultMetrics: [
        '30% improvement in health goal achievement',
        '4.8/5 average user rating',
        'HIPAA compliance certification'
      ]
    },
    content: `WellnessTracker addresses the growing need for consolidated health data management in an increasingly connected world.

**User Research Insights**
Through surveys and interviews with 50+ health-conscious individuals, I discovered that people were overwhelmed by data from multiple apps and devices but lacked a unified view of their wellness journey.

**Design Philosophy**
The interface prioritizes clarity and motivation over complexity. Each visualization tells a story about the user's health trends, using color psychology and progressive disclosure to guide attention.

**Technical Architecture**
- Microservices architecture for scalability
- Real-time data synchronization from 15+ health platforms
- Machine learning recommendations engine
- End-to-end encryption for all health data

The dashboard has helped users increase their health goal achievement rates by 30% through better data visibility and personalized insights.`,
    featured: false,
    publishedAt: '2024-03-10'
  },
  {
    id: '4',
    title: 'EcoMarket - Sustainable Shopping Platform',
    slug: 'ecomarket-sustainable-shopping',
    description: 'An e-commerce platform focused on sustainable products with environmental impact scoring and carbon footprint tracking.',
    heroImage: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&h=600&fit=crop',
    galleryImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop'
    ],
    technologies: ['Next.js', 'Stripe', 'Supabase', 'Tailwind CSS', 'Framer Motion'],
    objective: 'Create a shopping experience that makes sustainable choices easy and transparent while educating consumers about environmental impact.',
    process: {
      wins: [
        'Developed innovative environmental impact scoring system',
        'Created engaging product discovery through sustainability filters',
        'Implemented gamification to encourage eco-friendly purchases'
      ],
      challenges: [
        'Verifying sustainability claims from various vendors',
        'Calculating accurate carbon footprint data',
        'Balancing environmental messaging with commercial appeal'
      ],
      lessons: [
        'Transparency builds trust in sustainability-focused platforms',
        'Gamification can drive positive behavior change',
        'Mobile optimization is crucial for modern e-commerce'
      ]
    },
    finalProduct: {
      liveUrl: 'https://ecomarket-demo.vercel.app',
      githubUrl: 'https://github.com/yourusername/ecomarket',
      resultMetrics: [
        '200+ sustainable brands onboarded',
        '15% average increase in cart value',
        '90% user retention rate'
      ]
    },
    content: `EcoMarket was inspired by the challenge of making sustainable shopping accessible and appealing to mainstream consumers.

**Market Research**
Analysis of 500+ sustainable products and consumer surveys revealed that shoppers want to make eco-friendly choices but find it difficult to identify truly sustainable options.

**Unique Value Proposition**
- Verified sustainability scoring system
- Carbon footprint tracking for purchases
- Educational content about environmental impact
- Rewards program for sustainable choices

**Design Innovation**
The interface uses earth-tones and natural imagery while maintaining modern e-commerce usability. Each product page includes detailed sustainability information presented in digestible, visual formats.

The platform has successfully onboarded 200+ sustainable brands and maintains a 90% user retention rate through its engaging approach to environmental consciousness.`,
    featured: false,
    publishedAt: '2024-04-05'
  }
]

export const dummyBlogPosts = [
  {
    id: '1',
    title: 'Building Accessible Web Applications: A Developer\'s Guide',
    slug: 'building-accessible-web-applications',
    excerpt: 'Accessibility isn\'t just a nice-to-have feature—it\'s essential for creating inclusive digital experiences. Here\'s how to build accessibility into your development workflow from day one.',
    content: `# Building Accessible Web Applications: A Developer's Guide

As developers, we have the power to create digital experiences that work for everyone. Yet accessibility is often treated as an afterthought, leading to barriers that exclude millions of users. Let me share what I've learned about building accessibility into the development process from the ground up.

## Why Accessibility Matters

When I was working on the WellnessTracker dashboard, I realized that many health applications fail users with disabilities—the very people who might benefit most from health tracking tools. This experience taught me that accessibility isn't just about compliance; it's about human dignity and equal access to information.

### The Business Case

Beyond the moral imperative, accessible applications:
- Reach a larger audience (1 in 4 adults in the US has a disability)
- Improve SEO through semantic HTML
- Enhance usability for all users
- Reduce legal risks and compliance issues

## Practical Implementation

### Start with Semantic HTML

\`\`\`html
<!-- Instead of this -->
<div class="button" onclick="submitForm()">Submit</div>

<!-- Do this -->
<button type="submit">Submit</button>
\`\`\`

Semantic HTML provides the foundation for accessibility. Screen readers, keyboard navigation, and other assistive technologies rely on proper HTML structure.

### Implement ARIA Strategically

ARIA (Accessible Rich Internet Applications) attributes help when semantic HTML isn't enough:

\`\`\`jsx
<div
  role="button"
  tabIndex={0}
  aria-pressed={isPressed}
  onKeyDown={handleKeyDown}
  onClick={handleClick}
>
  Toggle Button
</div>
\`\`\`

### Focus Management

In single-page applications, managing focus is crucial:

\`\`\`typescript
// Focus management for route changes
useEffect(() => {
  const heading = document.querySelector('h1')
  if (heading) {
    heading.focus()
  }
}, [pathname])
\`\`\`

## Testing Your Implementation

### Automated Testing

Tools like axe-core can catch many accessibility issues:

\`\`\`bash
npm install @axe-core/react
\`\`\`

### Manual Testing

1. **Keyboard Navigation**: Tab through your entire application
2. **Screen Reader Testing**: Use NVDA, JAWS, or VoiceOver
3. **Color Contrast**: Ensure 4.5:1 ratio for normal text
4. **Zoom Testing**: Test at 200% zoom without horizontal scrolling

## Real-World Impact

After implementing these practices in the FieldScope project, we received feedback from a curator with low vision who said our application was the first collection management system she could use independently. These moments remind us why accessibility work matters.

## Getting Started Today

1. **Audit existing projects** with automated tools
2. **Learn keyboard navigation patterns** in your applications
3. **Include accessibility in code reviews**
4. **Test with real users** when possible

Remember: perfect accessibility is a journey, not a destination. Start where you are, and improve incrementally.

---

*Have questions about implementing accessibility in your projects? [Reach out](mailto:hello@ikedesigndev.com) - I'd love to help.*`,
    featuredImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop',
    publishedAt: '2024-01-20',
    tags: ['Accessibility', 'Web Development', 'UX Design', 'Frontend'],
    readingTime: 8,
    featured: true,
    published: true
  },
  {
    id: '2',
    title: 'TypeScript Tips for Better React Development',
    slug: 'typescript-tips-react-development',
    excerpt: 'Level up your React development with these practical TypeScript patterns. From component props to custom hooks, here are the techniques I use daily.',
    content: `# TypeScript Tips for Better React Development

After using TypeScript in production React applications for over two years, I've learned that good TypeScript isn't just about adding types—it's about creating a development experience that catches errors early and improves code maintainability.

## Component Props with Confidence

### Extending HTML Elements

When building reusable components, extend native HTML elements for better accessibility and familiar APIs:

\`\`\`tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  size = 'md', 
  className, 
  children, 
  ...props 
}) => {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size} \${className || ''}\`}
      {...props}
    >
      {children}
    </button>
  )
}
\`\`\`

### Discriminated Unions for Complex Props

For components with multiple states, discriminated unions prevent invalid prop combinations:

\`\`\`tsx
type LoadingState = {
  status: 'loading'
  data?: never
  error?: never
}

type SuccessState = {
  status: 'success'
  data: User[]
  error?: never
}

type ErrorState = {
  status: 'error'
  data?: never
  error: string
}

type AsyncComponentProps = LoadingState | SuccessState | ErrorState

const AsyncComponent: React.FC<AsyncComponentProps> = (props) => {
  switch (props.status) {
    case 'loading':
      return <LoadingSpinner />
    case 'success':
      return <UserList users={props.data} /> // data is guaranteed to exist
    case 'error':
      return <ErrorMessage message={props.error} /> // error is guaranteed to exist
  }
}
\`\`\`

## Custom Hooks with Better Types

### Generic Hooks

Create reusable hooks with proper generics:

\`\`\`tsx
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }

  return [storedValue, setValue]
}

// Usage with full type safety
const [user, setUser] = useLocalStorage<User | null>('user', null)
\`\`\`

### API Hooks with Error Handling

\`\`\`tsx
interface UseApiOptions<T> {
  initialData?: T
  onSuccess?: (data: T) => void
  onError?: (error: Error) => void
}

function useApi<T>(
  url: string,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | undefined>(options.initialData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(\`HTTP error! status: \${response.status}\`)
      }
      const result: T = await response.json()
      setData(result)
      options.onSuccess?.(result)
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Unknown error')
      setError(error)
      options.onError?.(error)
    } finally {
      setLoading(false)
    }
  }, [url, options])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return { data, loading, error, refetch: fetchData }
}
\`\`\`

## Advanced Patterns

### Conditional Rendering with Type Guards

\`\`\`tsx
function isUser(value: User | null | undefined): value is User {
  return value !== null && value !== undefined && 'id' in value
}

const UserProfile: React.FC<{ user: User | null | undefined }> = ({ user }) => {
  if (!isUser(user)) {
    return <div>Please log in to view your profile</div>
  }

  // TypeScript now knows user is definitely a User
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  )
}
\`\`\`

## Development Experience Tips

### Strict TypeScript Configuration

\`\`\`json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true
  }
}
\`\`\`

### ESLint Integration

\`\`\`json
// .eslintrc.json
{
  "extends": [
    "@typescript-eslint/recommended",
    "@typescript-eslint/recommended-requiring-type-checking"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-function-return-type": "warn"
  }
}
\`\`\`

## Lessons from Production

Working on the ChefConnect platform taught me that TypeScript's real value comes from:
1. **Catching integration errors** between components
2. **Documenting component APIs** through types
3. **Enabling fearless refactoring** with confidence

The key is to start simple and gradually adopt more advanced patterns as your team becomes comfortable with TypeScript.

---

*Building something with TypeScript and React? I'd love to hear about your challenges and successes. [Let's connect!](mailto:hello@ikedesigndev.com)*`,
    featuredImage: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?w=800&h=400&fit=crop',
    publishedAt: '2024-02-15',
    tags: ['TypeScript', 'React', 'Frontend Development', 'JavaScript'],
    readingTime: 6,
    featured: true,
    published: true
  },
  {
    id: '3',
    title: 'Designing for Performance: Lessons from Real-World Optimization',
    slug: 'designing-for-performance-optimization',
    excerpt: 'Performance isn\'t just a technical concern—it\'s a user experience issue. Here\'s how I approach performance optimization from both design and development perspectives.',
    content: `# Designing for Performance: Lessons from Real-World Optimization

When the WellnessTracker dashboard was taking 8 seconds to load on mobile devices, I realized that performance optimization isn't just a backend concern—it starts with design decisions and affects every aspect of the user experience.

## The Performance-UX Connection

### User Expectations vs. Reality

Research shows that users expect web pages to load in under 3 seconds, but the average mobile page takes 15+ seconds. This gap creates real business impact:

- **53% of mobile users** abandon sites that take longer than 3 seconds to load
- **100ms improvement** in load time can increase conversion rates by 1%
- **2-second delay** in page response can increase bounce rates by 103%

### Designing with Performance in Mind

Performance should influence design decisions from day one, not be an afterthought.

## Image Optimization Strategies

### Responsive Images

\`\`\`tsx
const OptimizedImage: React.FC<{
  src: string
  alt: string
  sizes?: string
}> = ({ src, alt, sizes = "100vw" }) => {
  return (
    <picture>
      <source
        srcSet={\`
          \${src}?w=400&format=webp 400w,
          \${src}?w=800&format=webp 800w,
          \${src}?w=1200&format=webp 1200w
        \`}
        type="image/webp"
        sizes={sizes}
      />
      <img
        src={\`\${src}?w=800\`}
        srcSet={\`
          \${src}?w=400 400w,
          \${src}?w=800 800w,
          \${src}?w=1200 1200w
        \`}
        sizes={sizes}
        alt={alt}
        loading="lazy"
      />
    </picture>
  )
}
\`\`\`

### Progressive Image Loading

\`\`\`tsx
const ProgressiveImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  const [loading, setLoading] = useState(true)
  const [currentSrc, setCurrentSrc] = useState(\`\${src}?w=50&blur=10\`)

  useEffect(() => {
    const img = new Image()
    img.src = src
    img.onload = () => {
      setCurrentSrc(src)
      setLoading(false)
    }
  }, [src])

  return (
    <div className="relative overflow-hidden">
      <img
        src={currentSrc}
        alt={alt}
        className={\`transition-all duration-300 \${
          loading ? 'blur-sm scale-105' : 'blur-0 scale-100'
        }\`}
      />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  )
}
\`\`\`

## Code Splitting and Lazy Loading

### Route-Based Code Splitting

\`\`\`tsx
import { lazy, Suspense } from 'react'

const ProjectsPage = lazy(() => import('./pages/Projects'))
const BlogPage = lazy(() => import('./pages/Blog'))
const ContactPage = lazy(() => import('./pages/Contact'))

const App = () => {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Suspense>
    </Router>
  )
}
\`\`\`

### Component-Level Lazy Loading

\`\`\`tsx
const LazyChart = lazy(() => 
  import('./Chart').then(module => ({ default: module.Chart }))
)

const Dashboard = () => {
  const [showChart, setShowChart] = useState(false)

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => setShowChart(true)}>
        Show Analytics
      </button>
      
      {showChart && (
        <Suspense fallback={<ChartSkeleton />}>
          <LazyChart />
        </Suspense>
      )}
    </div>
  )
}
\`\`\`

## Measuring and Monitoring

### Core Web Vitals

Focus on the metrics that matter to users:

1. **Largest Contentful Paint (LCP)**: < 2.5 seconds
2. **First Input Delay (FID)**: < 100 milliseconds  
3. **Cumulative Layout Shift (CLS)**: < 0.1

### Performance Monitoring

\`\`\`tsx
// Performance monitoring hook
const usePerformanceMetrics = () => {
  useEffect(() => {
    // Monitor LCP
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('LCP:', lastEntry.startTime)
    }).observe({ entryTypes: ['largest-contentful-paint'] })

    // Monitor FID
    new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        console.log('FID:', entry.processingStart - entry.startTime)
      })
    }).observe({ entryTypes: ['first-input'] })
  }, [])
}
\`\`\`

## Real-World Results

After implementing these strategies on the WellnessTracker project:

- **Load time decreased** from 8 seconds to 2.1 seconds
- **Lighthouse score improved** from 34 to 96
- **User engagement increased** by 45%
- **Bounce rate decreased** by 23%

## Performance Budget

Establish performance budgets early:

\`\`\`json
{
  "budgets": [
    {
      "path": "/*",
      "timings": [
        { "metric": "interactive", "budget": "3s" },
        { "metric": "first-meaningful-paint", "budget": "2s" }
      ],
      "sizes": [
        { "metric": "script", "budget": "170kb" },
        { "metric": "total", "budget": "300kb" }
      ]
    }
  ]
}
\`\`\`

## Key Takeaways

1. **Performance is a feature**, not an optimization
2. **Measure early and often** with real user metrics
3. **Design decisions impact performance** as much as code decisions
4. **Progressive enhancement** ensures fast experiences for all users

Performance optimization is an ongoing process, not a one-time task. By building performance consciousness into our design and development workflow, we create better experiences for all users.

---

*Working on performance optimization for your project? [I'd love to help](mailto:hello@ikedesigndev.com) share strategies and lessons learned.*`,
    featuredImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    publishedAt: '2024-03-01',
    tags: ['Performance', 'Web Development', 'UX Design', 'Optimization'],
    readingTime: 7,
    featured: false,
    published: true
  },
  {
    id: '4',
    title: 'The Art of Design Systems: Building Consistent UI at Scale',
    slug: 'design-systems-consistent-ui-scale',
    excerpt: 'A well-crafted design system is more than a component library—it\'s a shared language that enables teams to build cohesive experiences efficiently.',
    content: `# The Art of Design Systems: Building Consistent UI at Scale

When I joined the team working on FieldScope, I inherited a codebase with 47 different button styles, 23 shades of blue, and 12 different font sizes. Sound familiar? This experience taught me that design systems aren't just about organization—they're about creating a shared language that enables teams to move fast while maintaining quality.

## What Makes a Great Design System

### Beyond Components: Principles and Patterns

A design system is more than a Storybook full of components. It's a living ecosystem that includes:

1. **Design principles** that guide decisions
2. **Component library** with clear APIs
3. **Usage guidelines** and best practices
4. **Accessibility standards** baked in
5. **Content strategy** and voice guidelines

### The Token-First Approach

Start with design tokens—the DNA of your design system:

\`\`\`scss
// Design tokens
$color-primary-50: #eff6ff;
$color-primary-500: #3b82f6;
$color-primary-900: #1e3a8a;

$spacing-xs: 0.25rem;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;

$font-size-sm: 0.875rem;
$font-size-base: 1rem;
$font-size-lg: 1.125rem;

$border-radius-sm: 0.25rem;
$border-radius-md: 0.375rem;
$border-radius-lg: 0.5rem;
\`\`\`

## Building Composable Components

### The Component API Design

Good components have intuitive APIs that promote correct usage:

\`\`\`tsx
// ❌ Too many props, unclear hierarchy
<Button
  color="primary"
  size="large"
  variant="outlined"
  startIcon="plus"
  endIcon="arrow"
  fullWidth={true}
  disabled={false}
>
  Create Project
</Button>

// ✅ Clear, composable API
<Button variant="primary" size="lg" disabled={loading}>
  <Icon name="plus" />
  Create Project
  <Icon name="arrow-right" />
</Button>
\`\`\`

### Compound Components Pattern

For complex components, use the compound pattern:

\`\`\`tsx
// Card component family
const Card = ({ children, className, ...props }) => (
  <div className={\`card \${className || ''}\`} {...props}>
    {children}
  </div>
)

const CardHeader = ({ children, className, ...props }) => (
  <div className={\`card-header \${className || ''}\`} {...props}>
    {children}
  </div>
)

const CardContent = ({ children, className, ...props }) => (
  <div className={\`card-content \${className || ''}\`} {...props}>
    {children}
  </div>
)

const CardActions = ({ children, className, ...props }) => (
  <div className={\`card-actions \${className || ''}\`} {...props}>
    {children}
  </div>
)

// Attach sub-components
Card.Header = CardHeader
Card.Content = CardContent
Card.Actions = CardActions

// Usage
<Card>
  <Card.Header>
    <h3>Project Details</h3>
  </Card.Header>
  <Card.Content>
    <p>Project description...</p>
  </Card.Content>
  <Card.Actions>
    <Button variant="primary">Edit</Button>
    <Button variant="secondary">Delete</Button>
  </Card.Actions>
</Card>
\`\`\`

## Documentation That Developers Actually Use

### Interactive Examples

\`\`\`tsx
// Storybook story with interactive controls
export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'danger'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export const Interactive = (args) => <Button {...args}>Button Text</Button>

export const AllVariants = () => (
  <div className="space-x-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="danger">Danger</Button>
  </div>
)

export const WithIcons = () => (
  <div className="space-x-4">
    <Button variant="primary">
      <Icon name="plus" />
      Create
    </Button>
    <Button variant="secondary">
      Save
      <Icon name="check" />
    </Button>
  </div>
)
\`\`\`

### Usage Guidelines

Include clear do's and don'ts:

\`\`\`markdown
## Button Usage Guidelines

### Do ✅
- Use primary buttons for the main action on a page
- Limit to one primary button per section
- Use clear, action-oriented labels

### Don't ❌
- Don't use multiple primary buttons in the same area
- Don't use vague labels like "Click here" or "Submit"
- Don't make buttons too small for touch targets (minimum 44px)

### Accessibility
- All buttons must have accessible labels
- Use \`aria-pressed\` for toggle buttons
- Ensure 4.5:1 color contrast ratio
\`\`\`

## Scaling Across Teams

### Version Management

Treat your design system like a product:

\`\`\`json
{
  "name": "@company/design-system",
  "version": "2.1.4",
  "exports": {
    ".": "./dist/index.js",
    "./tokens": "./dist/tokens.js",
    "./styles": "./dist/styles.css"
  }
}
\`\`\`

### Migration Strategies

When updating components, provide clear migration paths:

\`\`\`tsx
// Deprecated component with migration guidance
/**
 * @deprecated Use \`Button\` with \`variant="primary"\` instead
 * Will be removed in v3.0.0
 */
export const PrimaryButton = (props) => {
  console.warn(
    'PrimaryButton is deprecated. Use Button with variant="primary" instead.'
  )
  return <Button variant="primary" {...props} />
}
\`\`\`

## Measuring Success

### Adoption Metrics

Track design system adoption:

\`\`\`typescript
// Component usage analytics
const trackComponentUsage = (componentName: string, props: any) => {
  analytics.track('Design System Component Used', {
    component: componentName,
    variant: props.variant,
    size: props.size,
    timestamp: new Date().toISOString(),
  })
}
\`\`\`

### Design Consistency Audit

Regular audits help maintain consistency:

\`\`\`bash
# Automated design token usage checker
npm run design-audit

# Example output:
# ❌ 12 instances of hardcoded colors found
# ❌ 5 custom font sizes outside the scale
# ✅ All spacing uses design tokens
\`\`\`

## Lessons from Implementation

After implementing design systems for three different projects, I've learned:

1. **Start small**: Begin with the most commonly used components
2. **Involve developers early**: Their input shapes practical APIs
3. **Document the "why"**: Explain design decisions, not just usage
4. **Plan for evolution**: Design systems are never "done"
5. **Measure adoption**: Track usage to identify gaps and opportunities

## Common Pitfalls to Avoid

1. **Building in isolation**: Involve actual users from day one
2. **Over-engineering**: Start simple, add complexity as needed
3. **Ignoring accessibility**: Bake it in from the beginning
4. **Lack of governance**: Establish clear ownership and processes
5. **Perfect is the enemy of good**: Ship early, iterate often

## The Future of Design Systems

As we move toward:
- **AI-assisted design**: Tools that understand design systems
- **Design tokens automation**: Sync between design tools and code
- **Cross-platform consistency**: One system, multiple platforms

The fundamentals remain the same: create shared understanding, enable consistency, and empower teams to build better experiences faster.

---

*Building or evolving a design system? [Let's discuss](mailto:hello@ikedesigndev.com) strategies and challenges—I love talking about this stuff!*`,
    featuredImage: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=400&fit=crop',
    publishedAt: '2024-04-10',
    tags: ['Design Systems', 'UI Design', 'Frontend Development', 'Component Libraries'],
    readingTime: 9,
    featured: false,
    published: true
  }
]

export const dummyCaseStudies = [
  {
    id: '1',
    title: 'Redesigning Healthcare Patient Portal Experience',
    slug: 'healthcare-patient-portal-redesign',
    description: 'A comprehensive UX overhaul of a patient portal used by 50,000+ patients, focusing on accessibility, mobile-first design, and streamlined appointment management.',
    heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
    openingQuestions: [
      'How might we reduce the cognitive load for patients managing their healthcare online?',
      'What would make scheduling appointments as easy as booking a restaurant reservation?',
      'How can we ensure the portal works for users of all technical skill levels and abilities?'
    ],
    objective: 'Transform a confusing, desktop-only patient portal into an intuitive, accessible, mobile-first experience that reduces administrative burden for both patients and healthcare staff.',
    designSprint: {
      research: `**User Research Methods:**
      - 15 in-depth interviews with patients aged 22-78
      - Usability testing of existing portal with 25 participants
      - Journey mapping sessions with patient advocates
      - Stakeholder interviews with 8 healthcare staff members
      - Competitive analysis of 12 healthcare portals
      
      **Key Findings:**
      - 73% of users attempted to access the portal on mobile devices
      - Average task completion time was 8.5 minutes for simple appointment scheduling
      - Users with chronic conditions visited the portal 3x more frequently
      - 45% of users called the office instead of using the portal for basic tasks
      - Accessibility compliance was poor, creating barriers for users with disabilities`,
      
      define: `**Problem Definition:**
      The existing patient portal created more friction than value, leading to:
      - Increased call volume to medical offices (up 40% in 2 years)
      - Patient frustration and decreased satisfaction scores
      - Missed appointments due to difficult rescheduling process
      - Healthcare staff spending time on tasks patients could self-serve
      
      **User Personas:**
      1. **Sarah, 34** - Busy working parent managing family healthcare
      2. **Robert, 67** - Retiree with chronic conditions, moderate tech skills
      3. **Maria, 28** - Bilingual speaker preferring mobile interfaces
      4. **James, 45** - Visually impaired power user of assistive technology
      
      **Success Metrics:**
      - Reduce average task completion time by 50%
      - Increase mobile usage from 23% to 70%
      - Achieve WCAG 2.1 AA compliance
      - Decrease support calls by 30%`,
      
      prototype: `**Prototyping Approach:**
      Started with rapid paper sketches to explore different information architectures, then moved to digital prototypes for testing.
      
      **Key Design Decisions:**
      1. **Mobile-first navigation** with bottom tab bar for primary actions
      2. **Smart defaults** that remember user preferences and frequented actions
      3. **Progressive disclosure** to show relevant information at the right time
      4. **Visual hierarchy** using color, typography, and spacing to guide attention
      5. **Accessibility-first design** with proper heading structure and focus management
      
      **Interactive Prototypes:**
      - Created high-fidelity prototypes in Figma with realistic data
      - Built working React prototypes for complex interactions
      - Developed responsive breakpoints for tablet and desktop
      - Included micro-interactions and loading states
      
      **Component System:**
      Established a design system with reusable components:
      - Appointment cards with clear status indicators
      - Form inputs with inline validation
      - Loading skeletons for perceived performance
      - Toast notifications for feedback`,
      
      test: `**Testing Methodology:**
      Conducted iterative usability testing throughout the design process.
      
      **Round 1 - Concept Testing (Paper Prototypes):**
      - 8 participants tested information architecture
      - Identified navigation confusion and terminology issues
      - Refined content hierarchy based on mental models
      
      **Round 2 - Interactive Prototype Testing:**
      - 12 participants completed core user journeys
      - Measured task completion rates and time-on-task
      - Gathered qualitative feedback on perceived usability
      
      **Round 3 - Accessibility Testing:**
      - 5 participants using assistive technology
      - Screen reader compatibility testing
      - Keyboard navigation validation
      - Color contrast and visual accessibility review
      
      **Key Insights:**
      - Users preferred appointment confirmation via text over email (78%)
      - Visual appointment status was more important than detailed medical information
      - Patients wanted to see provider photos and brief bios
      - Bulk actions (cancel multiple appointments) were highly valued`,
      
      thoughts: {
        wins: [
          'Reduced average appointment scheduling time from 8.5 to 3.2 minutes',
          'Achieved 96% mobile usability score in post-launch testing',
          'Increased patient portal engagement by 127% in first 6 months',
          'Received 4.8/5 average rating from patients in post-launch surveys'
        ],
        challenges: [
          'Complex integration requirements with legacy healthcare systems',
          'Balancing comprehensive medical information with simple interface design',
          'Ensuring HIPAA compliance while creating seamless user experience',
          'Managing stakeholder expectations across clinical and technical teams'
        ],
        lessons: [
          'Healthcare users have extremely diverse technical literacy levels',
          'Accessibility improvements benefit all users, not just those with disabilities',
          'Small usability improvements can significantly reduce operational costs',
          'Trust indicators are crucial in healthcare applications'
        ]
      },
      
      iterations: {
        mockups: [
          'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
        ],
        wireframes: [
          'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=600&fit=crop'
        ]
      }
    },
    development: {
      techStack: [
        'React 18',
        'TypeScript',
        'Next.js',
        'Styled Components',
        'React Query',
        'Jest & Testing Library',
        'Storybook'
      ],
      projectStructure: `**Frontend Architecture:**
      \`\`\`
      src/
      ├── components/
      │   ├── common/          # Reusable UI components
      │   ├── forms/           # Form-specific components
      │   └── appointments/    # Domain-specific components
      ├── pages/
      │   ├── appointments/
      │   ├── messages/
      │   └── profile/
      ├── hooks/               # Custom React hooks
      ├── utils/               # Helper functions
      ├── types/               # TypeScript definitions
      └── styles/              # Global styles and themes
      \`\`\`
      
      **Component Design System:**
      - Atomic design methodology with clear component hierarchy
      - Comprehensive Storybook documentation for all components
      - Automated visual regression testing with Chromatic
      - Accessibility testing integrated into CI/CD pipeline`,
      
      methods: `**Development Methodology:**
      - Agile development with 2-week sprints
      - Component-driven development starting with design system
      - Test-driven development for critical user flows
      - Continuous integration with automated testing and deployment
      
      **Quality Assurance:**
      - Unit tests for all utility functions and custom hooks
      - Integration tests for complete user journeys
      - End-to-end testing with Playwright for critical paths
      - Manual accessibility testing with screen readers
      
      **Performance Optimization:**
      - Code splitting at route level for optimal loading
      - Image optimization with Next.js Image component
      - API response caching with React Query
      - Bundle analysis and optimization with Webpack Bundle Analyzer`,
      
      thoughtProcess: {
        wins: [
          'Component library reduced development time for new features by 40%',
          'Achieved 99% test coverage for critical appointment scheduling flows',
          'Performance score of 95+ on mobile devices with optimized loading',
          'Zero accessibility violations detected in automated testing'
        ],
        losses: [
          'Initial component abstraction was over-engineered, required simplification',
          'Third-party integration challenges delayed launch by 3 weeks',
          'State management complexity increased with feature additions'
        ],
        lessonsLearned: [
          'Start with simpler component abstractions and evolve as needed',
          'Early integration testing prevents surprises in production',
          'Performance budgets should be established at project start',
          'Accessibility testing is most effective when automated and continuous'
        ]
      },
      
      iterations: {
        codeSnippets: [
          `// Example: Accessible appointment card component
const AppointmentCard = ({ appointment, onReschedule, onCancel }) => {
  return (
    <Card 
      role="article"
      aria-labelledby={\`appointment-\${appointment.id}-title\`}
    >
      <CardHeader>
        <h3 id={\`appointment-\${appointment.id}-title\`}>
          {appointment.providerName}
        </h3>
        <StatusBadge status={appointment.status} />
      </CardHeader>
      
      <CardContent>
        <DateTime 
          date={appointment.date}
          time={appointment.time}
          format="accessible"
        />
        <Location address={appointment.location} />
      </CardContent>
      
      <CardActions>
        <Button 
          variant="secondary" 
          onClick={() => onReschedule(appointment.id)}
          aria-label={\`Reschedule appointment with \${appointment.providerName}\`}
        >
          Reschedule
        </Button>
        <Button 
          variant="danger" 
          onClick={() => onCancel(appointment.id)}
          aria-label={\`Cancel appointment with \${appointment.providerName}\`}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}`
        ],
        mockups: [
          'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop'
        ]
      }
    },
    finalProduct: {
      mockups: [
        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&h=600&fit=crop'
      ],
      resultMetrics: [
        '67% reduction in average task completion time',
        '127% increase in mobile portal usage',
        '30% decrease in patient support calls',
        '4.8/5 average patient satisfaction rating',
        'WCAG 2.1 AA compliance achieved',
        '45% increase in appointment self-scheduling'
      ],
      codeLinks: {
        liveProduct: 'https://patient-portal-demo.vercel.app',
        githubRepo: 'https://github.com/yourusername/patient-portal-redesign'
      }
    },
    seoTitle: 'Healthcare Patient Portal UX Case Study - Mobile-First Redesign',
    seoDescription: 'Comprehensive case study of redesigning a healthcare patient portal, improving usability by 67% and increasing mobile usage by 127%.',
    seoKeywords: ['healthcare UX', 'patient portal design', 'mobile-first design', 'accessibility'],
    publishedAt: '2024-02-01',
    featured: true
  },
  {
    id: '2',
    title: 'E-learning Platform: Designing for Student Engagement',
    slug: 'elearning-platform-student-engagement',
    description: 'Redesigning an online learning platform to increase course completion rates and improve student engagement through gamification and personalized learning paths.',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    openingQuestions: [
      'How can we make online learning as engaging as in-person instruction?',
      'What motivates students to complete courses they start?',
      'How do different learning styles affect digital education success?'
    ],
    objective: 'Redesign an e-learning platform to increase course completion rates from 34% to 65% while improving overall student satisfaction and learning outcomes.',
    designSprint: {
      research: `**Research Methodology:**
      - 32 student interviews across different age groups and learning preferences
      - Analytics analysis of 10,000+ student interactions over 6 months
      - Competitor analysis of 8 leading e-learning platforms
      - Instructor interviews to understand teaching challenges
      - Learning science literature review on engagement and retention
      
      **Key Research Insights:**
      - Students abandon courses primarily due to lack of clear progress indication
      - Social learning elements significantly improve engagement
      - Mobile learning sessions are shorter but more frequent
      - Personalization increases perceived value and completion rates
      - Immediate feedback is crucial for maintaining motivation`,
      
      define: `**Problem Definition:**
      The existing platform suffered from:
      - 66% course abandonment rate within first two weeks
      - Limited progress tracking and goal setting
      - One-size-fits-all approach ignoring learning preferences
      - Lack of social interaction and community features
      - Poor mobile experience limiting accessibility
      
      **Target Users:**
      1. **Alex, 24** - College student taking supplementary courses
      2. **Jennifer, 38** - Working professional upskilling during evenings
      3. **Roberto, 45** - Career changer learning new industry skills
      4. **Lisa, 29** - Visual learner preferring interactive content
      
      **Success Metrics:**
      - Increase course completion rate to 65%
      - Improve user engagement score by 40%
      - Achieve 4.5+ star average course rating
      - Increase daily active users by 50%`,
      
      prototype: `**Design Strategy:**
      Created a gamified learning experience with personalized pathways and social features.
      
      **Key Features Prototyped:**
      1. **Adaptive Learning Paths** - AI-driven content recommendations
      2. **Progress Gamification** - Points, badges, and achievement systems
      3. **Social Learning** - Study groups, peer discussions, and mentorship
      4. **Micro-Learning** - Bite-sized lessons for mobile consumption
      5. **Interactive Assessments** - Engaging quizzes and practical exercises
      
      **Prototyping Tools:**
      - Figma for high-fidelity interface design
      - ProtoPie for complex interactions and animations
      - Principle for micro-interaction design
      - InVision for stakeholder presentations and feedback`,
      
      test: `**Testing Approach:**
      Multi-phase testing with diverse user groups and learning scenarios.
      
      **Phase 1 - Concept Validation:**
      - 16 participants tested core learning flow concepts
      - A/B tested different gamification approaches
      - Validated information architecture with card sorting
      
      **Phase 2 - Interactive Prototype Testing:**
      - 20 participants completed full course modules
      - Measured engagement metrics and completion rates
      - Gathered feedback on motivational features
      
      **Phase 3 - Beta Platform Testing:**
      - 100 students used beta version for 4 weeks
      - Tracked behavioral analytics and learning outcomes
      - Conducted exit interviews to understand experience
      
      **Key Findings:**
      - Progress visualization increased session duration by 34%
      - Social features improved retention but needed careful balance
      - Mobile-optimized content led to 60% more frequent engagement
      - Personalized recommendations improved course completion by 28%`,
      
      thoughts: {
        wins: [
          'Increased course completion rate from 34% to 72% in beta testing',
          'Improved average session duration from 12 to 18 minutes',
          'Achieved 4.6/5 average student satisfaction rating',
          'Reduced time-to-first-completion by 23%'
        ],
        challenges: [
          'Balancing gamification without trivializing learning content',
          'Managing different learning pace preferences in social features',
          'Ensuring accessibility across diverse technical literacy levels',
          'Integrating complex analytics without impacting performance'
        ],
        lessons: [
          'Intrinsic motivation is more powerful than external rewards in education',
          'Social proof and peer learning significantly boost engagement',
          'Progress indicators must be meaningful, not just visual',
          'Personalization requires careful balance between automation and user control'
        ]
      },
      
      iterations: {
        mockups: [
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
        ],
        wireframes: [
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
        ]
      }
    },
    development: {
      techStack: [
        'React',
        'Redux Toolkit',
        'Node.js',
        'Express',
        'MongoDB',
        'Socket.io',
        'D3.js',
        'Framer Motion'
      ],
      projectStructure: `**Full-Stack Architecture:**
      \`\`\`
      Frontend/
      ├── src/
      │   ├── components/
      │   │   ├── learning/     # Course and lesson components
      │   │   ├── gamification/ # Progress and achievement components  
      │   │   └── social/       # Discussion and peer components
      │   ├── pages/
      │   ├── hooks/            # Custom hooks for learning logic
      │   └── store/            # Redux store and slices
      
      Backend/
      ├── routes/
      │   ├── courses/          # Course management APIs
      │   ├── progress/         # Learning analytics APIs
      │   └── social/           # Community feature APIs
      ├── models/               # Database schemas
      ├── middleware/           # Auth and validation
      └── services/             # Business logic
      \`\`\``,
      
      methods: `**Development Approach:**
      - Feature-driven development with learning-focused iterations
      - Real-time collaboration features using WebSocket connections
      - Progressive Web App implementation for mobile-first experience
      - Machine learning integration for personalized content recommendations
      
      **Data-Driven Development:**
      - A/B testing framework for feature experimentation
      - Learning analytics pipeline for instructor insights
      - Performance monitoring with focus on engagement metrics
      - Accessibility testing with educational technology standards`,
      
      thoughtProcess: {
        wins: [
          'Real-time progress sync improved multi-device learning experience',
          'Optimistic UI updates made interactions feel instant and responsive',
          'Intelligent caching reduced content loading time by 45%',
          'Modular component architecture enabled rapid feature development'
        ],
        losses: [
          'Initial gamification implementation was too complex and overwhelming',
          'Real-time features created server scaling challenges during peak usage',
          'Social features required extensive moderation tools not initially planned'
        ],
        lessonsLearned: [
          'Educational technology requires different performance considerations',
          'User onboarding is critical for complex learning platforms',
          'Social features in learning contexts need careful community management',
          'Analytics in education must balance insights with student privacy'
        ]
      },
      
      iterations: {
        codeSnippets: [
          `// Example: Adaptive learning path algorithm
const generateLearningPath = (student, course) => {
  const { learningStyle, currentSkillLevel, timeAvailable } = student
  const { modules, difficulty, estimatedTime } = course
  
  return modules
    .filter(module => module.prerequisites.every(prereq => 
      student.completedModules.includes(prereq)
    ))
    .sort((a, b) => {
      // Prioritize by learning style preference
      const styleMatch = (module) => 
        module.type === learningStyle ? 10 : 0
      
      // Consider difficulty progression
      const difficultyScore = (module) =>
        Math.abs(module.difficulty - currentSkillLevel)
      
      return (styleMatch(b) - styleMatch(a)) || 
             (difficultyScore(a) - difficultyScore(b))
    })
    .slice(0, Math.floor(timeAvailable / estimatedTime))
}`
        ],
        mockups: [
          'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
          'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop'
        ]
      }
    },
    finalProduct: {
      mockups: [
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop'
      ],
      resultMetrics: [
        '112% increase in course completion rates',
        '87% of students reported improved learning experience',
        '50% increase in daily active users',
        '34% longer average session duration',
        '4.6/5 average course rating',
        '68% of students recommended platform to others'
      ],
      codeLinks: {
        liveProduct: 'https://elearning-demo.vercel.app',
        githubRepo: 'https://github.com/yourusername/elearning-platform'
      }
    },
    seoTitle: 'E-Learning Platform UX Case Study - Gamification and Engagement',
    seoDescription: 'How gamification and personalized learning paths increased course completion rates by 112% in an online learning platform redesign.',
    seoKeywords: ['e-learning UX', 'gamification design', 'educational technology', 'student engagement'],
    publishedAt: '2024-03-15',
    featured: false
  }
]

// API functions that match your real API structure
export async function getProjects() {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300))
  return dummyProjects.filter(project => project.featured)
}

export async function getAllProjects() {
  await new Promise(resolve => setTimeout(resolve, 300))
  return dummyProjects
}

export async function getProject(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 200))
  return dummyProjects.find(project => project.slug === slug)
}

export async function getBlogPosts() {
  await new Promise(resolve => setTimeout(resolve, 300))
  return dummyBlogPosts.filter(post => post.published)
}

export async function getFeaturedBlogPosts() {
  await new Promise(resolve => setTimeout(resolve, 200))
  return dummyBlogPosts.filter(post => post.published && post.featured)
}

export async function getBlogPost(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 200))
  return dummyBlogPosts.find(post => post.slug === slug && post.published)
}

export async function getCaseStudies() {
  await new Promise(resolve => setTimeout(resolve, 300))
  return dummyCaseStudies
}

export async function getFeaturedCaseStudies() {
  await new Promise(resolve => setTimeout(resolve, 200))
  return dummyCaseStudies.filter(study => study.featured)
}

export async function getCaseStudy(slug: string) {
  await new Promise(resolve => setTimeout(resolve, 200))
  return dummyCaseStudies.find(study => study.slug === slug)
}

// Search functionality
export async function searchContent(query: string) {
  await new Promise(resolve => setTimeout(resolve, 400))
  
  const lowerQuery = query.toLowerCase()
  
  const searchResults = [
    ...dummyProjects.filter(project => 
      project.title.toLowerCase().includes(lowerQuery) ||
      project.description.toLowerCase().includes(lowerQuery) ||
      project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
    ).map(item => ({ ...item, type: 'project' })),
    
    ...dummyBlogPosts.filter(post => 
      post.published && (
        post.title.toLowerCase().includes(lowerQuery) ||
        post.excerpt.toLowerCase().includes(lowerQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      )
    ).map(item => ({ ...item, type: 'blog' })),
    
    ...dummyCaseStudies.filter(study => 
      study.title.toLowerCase().includes(lowerQuery) ||
      study.description.toLowerCase().includes(lowerQuery)
    ).map(item => ({ ...item, type: 'case-study' }))
  ]
  
  return searchResults
}
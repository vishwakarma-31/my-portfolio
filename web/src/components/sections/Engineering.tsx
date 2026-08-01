"use client";

import React, { useRef } from "react";
import { CodeBlock } from "@/components/ui/CodeBlock";

const technologies = [
  { tech: "React / Next.js", desc: "Enabled sub-second page loads and instantaneous interactive states, ensuring visitors never wait." },
  { tech: "Node.js", desc: "Handled 10,000+ concurrent connections without dropping requests, keeping systems online during traffic spikes." },
  { tech: "Docker", desc: "Eliminated deployment drift, allowing new features to ship 3x faster with zero environment issues." },
  { tech: "AWS / GCP", desc: "Architected infrastructure that scales automatically to demand, reducing cloud costs during off-peak hours." },
  { tech: "PostgreSQL", desc: "Structured relational data to guarantee ACID compliance and prevent data loss during network failures." },
  { tech: "TypeScript", desc: "Caught 95% of potential runtime bugs during compilation, resulting in virtually zero production hotfixes." }
];

export function Engineering() {
  const container = useRef<HTMLElement>(null);
  const graphHeights = [30, 45, 25, 60, 80, 50, 95, 75, 40, 85];

  return (
    <section ref={container} className="dark relative z-10 py-32 bg-background-primary text-text-primary px-6 md:px-12 xl:px-24 border-t border-border-subtle">
      <div className="max-w-[1280px] mx-auto">
        <div className="mb-12">
          <h2 className="type-h1 tracking-tight mb-6">
            Engineering Precision
          </h2>
          <p className="type-body-large text-text-secondary max-w-[760px] leading-[1.7]">
            Beautiful interfaces are just the surface. What lies beneath determines if a product lives or dies in production. I build resilient, typed, and predictable architectures.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* React / Next.js */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden">
              <CodeBlock 
                className="w-full shadow-none border-none !p-0"
                code={`export default async function Page() {
  const data = await fetchUser();
  return (
    <Suspense fallback={<Loader />}>
      <Dashboard data={data} />
    </Suspense>
  );
}`}
              />
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">React / Next.js</div>
              <div className="type-caption text-text-secondary">
                Server Components, Suspense, and edge rendering for zero-latency interactions.
              </div>
            </div>
          </div>

          {/* Node.js */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden">
              <CodeBlock 
                className="w-full shadow-none border-none !p-0"
                code={`app.post('/api/orders', async (req, res) => {
  const session = await db.startSession();
  try {
    await processOrder(req.body, { session });
    res.status(200).send('OK');
  } catch (err) {
    res.status(500).send('Error');
  }
});`}
              />
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">Node.js & Go</div>
              <div className="type-caption text-text-secondary">
                Microservices and monolithic architectures engineered for high concurrency and low memory footprints.
              </div>
            </div>
          </div>

          {/* PostgreSQL */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden">
              <CodeBlock 
                className="w-full shadow-none border-none !p-0"
                code={`CREATE INDEX idx_orders_user 
ON orders(user_id, status)
WHERE status = 'active';

SELECT * FROM orders 
WHERE user_id = $1;`}
              />
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">PostgreSQL</div>
              <div className="type-caption text-text-secondary">
                Strict relational data modeling, query optimization, and connection pooling for scale.
              </div>
            </div>
          </div>

          {/* TypeScript */}
          <div className="tech-item rounded-md border border-border-subtle bg-background-primary overflow-hidden">
            <div className="h-[140px] bg-background-primary border-b border-border-subtle relative flex items-center justify-center overflow-hidden p-6">
              {/* Code visual - Static */}
              <CodeBlock 
                className="w-full shadow-none border-none !p-0"
                code={`type Result<T> = 
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };`}
              />
            </div>
            <div className="p-8">
              <div className="type-body font-medium text-white mb-2">TypeScript</div>
              <div className="type-caption text-text-secondary">
                End-to-end type safety eliminating runtime errors before code is ever merged.
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

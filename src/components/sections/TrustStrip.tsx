const logos = [
  { name: "Vercel", slug: "vercel" },
  { name: "Supabase", slug: "supabase" },
  { name: "OpenAI", slug: "openai" },
  { name: "Stripe", slug: "stripe" },
  { name: "React", slug: "react" },
  { name: "TypeScript", slug: "typescript" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-y-8 items-center">
          {logos.map((l) => (
            <li key={l.slug} className="flex justify-center">
              <img
                src={`https://cdn.simpleicons.org/${l.slug}/787774`}
                alt={l.name}
                className="h-6 md:h-7 w-auto opacity-70 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

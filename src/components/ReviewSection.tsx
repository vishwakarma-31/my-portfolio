import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare, Plus, Check, AlertCircle, Sparkles, User, Shield } from "lucide-react";
import { Review, AudienceType } from "../types";

interface ReviewSectionProps {
  currentAudience: AudienceType;
}

export default function ReviewSection({ currentAudience }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  
  // Form State
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [audienceType, setAudienceType] = useState<AudienceType>("freelancers");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch reviews from our Express API on mount
  const fetchReviews = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      } else {
        throw new Error("Failed to load reviews");
      }
    } catch (err) {
      console.warn("Could not load from API, falling back to local memory. Error: ", err);
      // Fallback seeds if server isn't reachable
      setReviews([
        {
          id: "seed-1",
          name: "Sarah Jenkins",
          role: "VP of Product",
          company: "Aethera Systems",
          rating: 5,
          comment: "Working with Jack was a game-changer for our upcoming product launch. His 3D visualizations and rendering detail exceeded all expectations. Our interactive web demo saw a 40% increase in retention. Highly recommend him for high-impact technical branding projects!",
          date: "2026-06-15",
          audienceType: "companies"
        },
        {
          id: "seed-2",
          name: "Marcus Aurelius",
          role: "Creative Director",
          company: "Studio 21",
          rating: 5,
          comment: "Jack is an absolute wizard of motion graphics and WebGL-like experiences. He delivered a flawless 3D branding system on a tight timeline. He communicates clearly, designs iteratively, and brings genuine artistry to the screen. A reliable premium freelancer.",
          date: "2026-07-01",
          audienceType: "freelancers"
        },
        {
          id: "seed-3",
          name: "Chef Liam Vance",
          role: "Owner",
          company: "L'Aura Bistro & Bar",
          rating: 5,
          comment: "The Web layout Jack designed for our restaurant is breathtaking. Local customers keep mentioning how amazing our animated online menu is. Online reservation bookings have doubled since launch. Jack understands exactly what local businesses need to stand out!",
          date: "2026-07-10",
          audienceType: "local-businesses"
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
    setAudienceType(currentAudience);
  }, [currentAudience]);

  // Calculate word count
  const getWordCount = (text: string) => {
    const trimmed = text.trim();
    return trimmed === "" ? 0 : trimmed.split(/\s+/).length;
  };

  const wordCount = getWordCount(comment);
  const isOverLimit = wordCount > 200;

  // Handle Review submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!comment.trim()) {
      setErrorMessage("Please write a comment.");
      return;
    }
    if (isOverLimit) {
      setErrorMessage("Your comment is too long. Please restrict it to 200 words.");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          role: role.trim() || "Client",
          company: company.trim() || "Independent",
          rating,
          comment: comment.trim(),
          audienceType,
        }),
      });

      if (response.ok) {
        const newReview = await response.json();
        setReviews((prev) => [newReview, ...prev]);
        setSuccessMessage("Thank you! Your review has been published instantly.");
        // Reset form
        setName("");
        setRole("");
        setCompany("");
        setRating(5);
        setComment("");
        // Close form after a delay
        setTimeout(() => {
          setShowForm(false);
          setSuccessMessage("");
        }, 3000);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.error || "An error occurred. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Could not connect to the API. Your message has been saved in local memory.");
      // Fallback append
      const fakeReview: Review = {
        id: `fake-${Date.now()}`,
        name: name.trim(),
        role: role.trim() || "Visitor",
        company: company.trim() || "Local Guest",
        rating,
        comment: comment.trim(),
        date: new Date().toISOString().split("T")[0],
        audienceType,
      };
      setReviews((prev) => [fakeReview, ...prev]);
      setName("");
      setRole("");
      setCompany("");
      setRating(5);
      setComment("");
      setTimeout(() => {
        setShowForm(false);
        setErrorMessage("");
      }, 3500);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get matching badge labels for different clients
  const getAudienceLabel = (type: AudienceType) => {
    switch (type) {
      case "companies":
        return "Tech Recruiter";
      case "freelancers":
        return "Bespoke Freelance Client";
      case "local-businesses":
        return "Local Business Owner";
      default:
        return "Verified Client";
    }
  };

  return (
    <section id="reviews" className="bg-[#0C0C0C] text-white py-24 px-4 sm:px-8 md:px-16 relative z-10 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 select-none">
          <div>
            <span className="text-xs font-mono font-bold tracking-widest text-indigo-400 uppercase block mb-2">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-[12vw] sm:text-[10vw] md:text-[8vw] font-black uppercase hero-heading font-accent leading-none">
              REVIEWS
            </h2>
            <p className="text-zinc-500 text-sm mt-2 max-w-md font-light">
              Real opinions, comments, and project ratings submitted by recruiters and clients in real-time.
            </p>
          </div>

          <button
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800 text-sm font-semibold uppercase tracking-widest text-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_10px_20px_rgba(99,102,241,0.2)] cursor-pointer align-self-start md:align-self-auto"
          >
            {showForm ? (
              <>
                <span>View Reviews</span>
                <MessageSquare className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Write A Review</span>
                <Plus className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        {/* Dynamic Reviews Form Panel */}
        <AnimatePresence mode="wait">
          {showForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden mb-16"
            >
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-950/60 border border-white/10 p-6 sm:p-10 rounded-[32px] backdrop-blur-xl relative"
              >
                <div className="absolute top-6 right-6 flex items-center gap-1 text-xs text-indigo-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span>DURABLE PORT PERSISTENCE</span>
                </div>

                <h3 className="text-2xl font-black uppercase font-accent mb-6 text-white flex items-center gap-2">
                  <span>Share Your Experience</span>
                </h3>

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                      Your Role *
                    </label>
                    <input
                      type="text"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      placeholder="e.g. VP of Product"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Aethera Systems"
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                      Who are you reviewing as? *
                    </label>
                    <select
                      value={audienceType}
                      onChange={(e) => setAudienceType(e.target.value as AudienceType)}
                      className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors h-[48px]"
                    >
                      <option value="companies">Companies (Recruiting, Corporate)</option>
                      <option value="freelancers">Freelance Client (Custom Project)</option>
                      <option value="local-businesses">Local Business Owner (Cafe, Doctor, Bistro)</option>
                    </select>
                  </div>
                </div>

                {/* Stars Rating Selector */}
                <div className="mb-6">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2 font-mono">
                    Your Rating: {rating} / 5 Stars
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((starVal) => {
                      const isHighlighted = hoverRating !== null ? starVal <= hoverRating : starVal <= rating;
                      return (
                        <button
                          key={starVal}
                          type="button"
                          onClick={() => setRating(starVal)}
                          onMouseEnter={() => setHoverRating(starVal)}
                          onMouseLeave={() => setHoverRating(null)}
                          className="p-1 cursor-pointer transition-transform duration-200 active:scale-90 hover:scale-110"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors duration-200 ${
                              isHighlighted ? "fill-amber-400 text-amber-400" : "text-zinc-700"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Comment Box with Word Count */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 font-mono">
                      Your Comment (Max 200 words) *
                    </label>
                    <div className="flex items-center gap-2 text-xs">
                      <span className={`font-mono font-bold ${isOverLimit ? "text-rose-500" : "text-zinc-500"}`}>
                        {wordCount} / 200 Words
                      </span>
                    </div>
                  </div>

                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Describe your collaboration, project deliverables, and Jack's craftsmanship..."
                    rows={4}
                    className={`w-full bg-zinc-900 border ${
                      isOverLimit ? "border-rose-500/50 focus:border-rose-500" : "border-white/10 focus:border-indigo-500"
                    } rounded-xl px-4 py-3 text-white placeholder-zinc-600 text-sm focus:outline-none transition-colors resize-none`}
                    required
                  />

                  {/* Words usage Progress Bar */}
                  <div className="w-full h-1 bg-zinc-900 rounded-full mt-2 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-300 ${isOverLimit ? "bg-rose-500" : "bg-indigo-500"}`}
                      style={{ width: `${Math.min((wordCount / 200) * 100, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Feedback Messages */}
                {errorMessage && (
                  <div className="mb-6 flex items-center gap-2.5 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {successMessage && (
                  <div className="mb-6 flex items-center gap-2.5 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
                    <Check className="w-4 h-4 flex-shrink-0" />
                    <span>{successMessage}</span>
                  </div>
                )}

                {/* Actions */}
                <div className="flex items-center justify-end gap-3.5">
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="px-5 py-2.5 rounded-xl border border-white/10 text-xs uppercase tracking-widest font-semibold hover:bg-white/5 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || isOverLimit}
                    className="px-6 py-2.5 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 disabled:opacity-50 text-xs uppercase tracking-widest font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  >
                    <span>{isSubmitting ? "Publishing..." : "Publish Review"}</span>
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Reviews Listing Grid */}
        {isLoading ? (
          <div className="py-24 text-center">
            <div className="inline-block w-8 h-8 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin" />
            <p className="text-zinc-500 text-xs mt-3 uppercase tracking-widest font-mono">
              Synchronizing local review files...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {reviews.map((rev, idx) => (
                <motion.div
                  key={rev.id || idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="rounded-2xl border border-white/5 bg-zinc-950/25 p-6 backdrop-blur-sm relative flex flex-col justify-between group hover:border-white/10 transition-colors duration-300"
                >
                  <div>
                    {/* Stars and date */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= rev.rating ? "fill-amber-400 text-amber-400" : "text-zinc-800"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 tracking-wider">
                        {rev.date}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-zinc-300 font-light text-sm leading-relaxed mb-6 italic">
                      "{rev.comment}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="pt-4 border-t border-zinc-900 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-white font-accent">
                        {rev.name}
                      </h4>
                      <p className="text-xs text-zinc-500 font-medium leading-none mt-0.5">
                        {rev.role}, <span className="text-zinc-400">{rev.company}</span>
                      </p>

                      {/* Matching category tag */}
                      <span className="inline-flex items-center gap-1 mt-2 text-[8px] font-mono font-bold tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-2 py-0.5 uppercase">
                        <Shield className="w-2 h-2" />
                        <span>{getAudienceLabel(rev.audienceType)}</span>
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
        
      </div>
    </section>
  );
}

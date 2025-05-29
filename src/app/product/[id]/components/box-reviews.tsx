export function BoxReviews() {
  return (
    <div className="p-12 border-1 border-card rounded-r-default">
      <p className="text-xl text-primary font-semibold">Customer reviews</p>
      <p className="text-lg text-gray-1 py-4">No reviews yet</p>
      <button className="px-6 py-2 bg-primary">
        <p className="text-lg text-white underline">Write a review</p>
      </button>
    </div>
  );
}

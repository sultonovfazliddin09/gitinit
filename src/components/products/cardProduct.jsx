export default function ProductCard({ p }) {
  return (
    <div className="border border-gray-300 bg-black/2 rounded p-4 shadow hover:shadow-xl transition">
      <img
        src={p.image}
        alt={p.name}
        className="w-full h-70 object-cover mb-2"
      />
      <h2 className="font-bold text-lg">{p.name}</h2>
      <p>{p.brand}</p>
      <p className="text-green-600 font-semibold">${p.price}</p>
    </div>
  );
}

import Image from "next/image";
export default function BeverageCard({ beverage }) {
  return (
    <div className="p-6 bg-white border rounded-lg shadow-lg border-emerald-400">
      {/* <Image
        src="/beverage-placeholder.png" // Placeholder image, change if you have images
        alt={beverage.name}
        width={200}
        height={200}
        className="object-cover w-full h-48 rounded-t-md"
      /> */}
      <h2 className="mt-4 text-xl font-bold text-emerald-600">
        {beverage?.name}
      </h2>
      <p className="text-gray-600">{beverage?.description}</p>
      <p className="mt-2 font-semibold text-emerald-500">
        ${beverage?.price.toFixed(2)}
      </p>
      <p
        className={`text-sm mt-1 ${
          beverage?.inStock ? "text-emerald-600" : "text-red-600"
        }`}
      >
        {beverage?.inStock ? "In Stock" : "Out of Stock"}
      </p>
    </div>
  );
}

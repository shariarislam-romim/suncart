const Brands = [
    
  {
    "id": 1,
    "title": "Premium Sun Protection",
    "brand": "SunShade",
    "description": "High-quality sunglasses and accessories for sunny days."
  },
  {
    "id": 2,
    "title": "Hydration Essentials",
    "brand": "CoolSip",
    "description": "Innovative bottles designed to keep drinks cold longer."
  },
  {
    "id": 3,
    "title": "Outdoor Lifestyle",
    "brand": "SunnyCover",
    "description": "Reliable outdoor gear for beach and park adventures."
  },
  {
    "id": 4,
    "title": "Skincare & Protection",
    "brand": "SunGuard",
    "description": "Trusted sunscreen products for safe summer fun."
  }
]

const TopBrands = () => {
    return (
        <div className="container mx-auto px-4">
            <h3 className="mt-10 font-extrabold text-3xl text-center md:text-4xl mb-2"> Top Brands</h3>
            <p className="text-[#627382FF] mb-8 text-lg text-center">Top-Rated Seasonal Brands</p>

<div className="grid grid-cols-1 gap-5 mb-20 md:grid-cols-4">
        {
            Brands.map(b => <div  key={b.id} className="flex flex-col justify-center items-center border border-gray-300 rounded-lg p-8 text-center bg-accent-soft">
                    <h3 className="font-extrabold text-orange-500 text-xl">{b.brand}</h3>
                    <p className="text-gray-600">{b.title}</p>
                </div>

            )
        }
            </div>
        </div>
    );
};

export default TopBrands;
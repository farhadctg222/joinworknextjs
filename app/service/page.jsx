
const services = [
  { id: 1, name: "মাছ-ভাত", category: "খাবার", price: "৭০ টাকা", location: "আগ্রাবাদ" },
  { id: 2, name: "মুরগী-ভাত", category: "খাবার", price: "৬৫ টাকা", location: "কোতোয়ালি" },
  { id: 3, name: "ভাত-ডাল-সবজি", category: " খাবার", price: "৬৫ টাকা", location: "চকবাজার" }
];

export default function Services() {
  return (
    <div>
      
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center">সার্ভিস লিস্ট</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {services.map((service) => (
            <div key={service.id} className="p-4 bg-white shadow rounded">
              <h3 className="font-bold">{service.name}</h3>
              <p>{service.category}</p>
              <p>📍 {service.location}</p>
              <p>💰 {service.price}</p>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}

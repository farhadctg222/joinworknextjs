import React from 'react';

const AdsRentSection = () => {
  const plans = [
    { name: 'Basic Plan', price: 'ট 200/month', features: ['1 Ad Slot', '30 Days Duration'] },
    { name: 'Standard Plan', price: 'ট 300/month', features: ['3 Ad Slots', '60 Days Duration'] },
    { name: 'Premium Plan', price: 'ট 500/month', features: ['5 Ad Slots', '90 Days Duration'] },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Advertise with Us</h2>
          <p className="mt-2 text-gray-600">Choose a plan that fits your needs and reach your audience!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-2xl font-bold text-gray-800">{plan.price}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-700">
                    • {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              <a href="tel:+8801305573617">  Select Plan Call</a>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdsRentSection;

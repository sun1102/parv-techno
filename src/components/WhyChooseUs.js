import { BriefcaseIcon, CheckBadgeIcon, TrophyIcon, UserGroupIcon } from "@heroicons/react/24/solid";

export default function WhyChooseUs() {
  const features = [
    { icon: <BriefcaseIcon className="h-10 w-10 text-blue-600" />, text: "10+ Years of Experience" },
    { icon: <TrophyIcon className="h-10 w-10 text-green-600" />, text: "100+ Successful Projects" },
    { icon: <CheckBadgeIcon className="h-10 w-10 text-yellow-500" />, text: "98% Client Satisfaction" },
    { icon: <UserGroupIcon className="h-10 w-10 text-purple-600" />, text: "Certified Engineers & Quality Assurance" },
  ];

  return (
    <section className="py-12 bg-gray-100 text-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
            {feature.icon}
            <p className="text-lg font-medium">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

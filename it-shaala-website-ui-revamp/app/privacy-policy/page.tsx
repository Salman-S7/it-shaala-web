'use client';

// import { Mail, MapPin, Phone } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-4 mt-20 py-8 sm:px-6 lg:px-12">
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">Privacy Policy</h1>

      <section className="space-y-4">
        <p>
          IT Shaala (“us”, “we”, or “our”) operates itshaala.com (hereinafter referred to as “Service”).
        </p>
        <p>
          Our Privacy Policy governs your visit to itshaala.com and explains how we collect,
          safeguard, and disclose information resulting from your use of our Service.
        </p>
        <p>
          We use your data to provide and improve the Service. By using the Service, you agree to
          the collection and use of information in accordance with this policy.
        </p>
        <p>
          Our Terms and Conditions (“Terms”) govern all use of our Service and, together with this
          Privacy Policy, constitute your agreement with us (“agreement”).
        </p>
      </section>

      <hr className="my-8" />

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Definitions</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>SERVICE:</strong> The itshaala.com website operated by IT Shaala.</li>
          <li><strong>PERSONAL DATA:</strong> Information that can identify a living individual.</li>
          <li><strong>USAGE DATA:</strong> Data collected automatically from Service use.</li>
          <li><strong>COOKIES:</strong> Small data files stored on your device.</li>
          <li><strong>DATA CONTROLLER:</strong> The entity determining how personal data is used.</li>
          <li><strong>DATA PROCESSORS:</strong> Entities processing data on behalf of the controller.</li>
          <li><strong>DATA SUBJECT:</strong> The individual whose data is being processed.</li>
          <li><strong>USER:</strong> The individual using our Service (you).</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-900">Information Collection and Use</h2>
        <p>We collect different types of information to deliver and enhance our Service.</p>

        <div>
          <h3 className="text-xl font-medium mt-4">Personal Data</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Email address</li>
            <li>First and last name</li>
            <li>Phone number</li>
            <li>Address and location details</li>
            <li>Cookies and Usage Data</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-medium mt-4">Usage Data</h3>
          <p>
            Includes IP address, browser version, visited pages, time on pages, and diagnostic data.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mt-4">Location Data</h3>
          <p>Used only with your permission to enhance our Service. Can be disabled in device settings.</p>
        </div>

        <div>
          <h3 className="text-xl font-medium mt-4">Cookies</h3>
          <p>
            We use cookies to track usage and enhance functionality. You can decline them via browser settings.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-medium mt-4">Other Data</h3>
          <p>
            Additional data like date of birth, sex, and identity verification info may also be collected.
          </p>
        </div>
      </section>

      <hr className="my-8" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Use of Data</h2>
        <ul className="list-disc list-inside">
          <li>Maintain and improve our Service</li>
          <li>Notify about changes and updates</li>
          <li>Enable user interaction and support</li>
          <li>Provide offers and news</li>
          <li>Analyze usage for improvements</li>
          <li>Monitor Service health and fix issues</li>
        </ul>
      </section>

      <hr className="my-8" />

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Data Retention and Transfer</h2>
        <p>
          We retain Personal Data only as long as necessary. Data may be stored outside your jurisdiction
          and processed according to this policy.
        </p>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Disclosure of Data</h2>
        <ul className="list-disc list-inside">
          <li>To comply with law enforcement or regulations</li>
          <li>During mergers, acquisitions, or asset transfers</li>
          <li>To trusted service providers and partners</li>
        </ul>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Security of Data</h2>
        <p>
          We take precautions to protect your data but cannot guarantee absolute security over the internet.
        </p>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Your Rights</h2>
        <p>
          If you&apos;re in the EU/EEA, you have GDPR rights (access, correction, deletion, etc.).
          Email us at <a href="mailto:info@itshaala.com" className="text-blue-600 underline">info@itshaala.com</a>.
        </p>
        <p>
          California residents have rights under CCPA and CalOPPA. Contact us via the same email above.
        </p>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Third-Party Services</h2>
        <p>
          We use third-party tools for analytics, deployment, remarketing, and payments. These providers access only required data.
        </p>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Links to Other Sites</h2>
        <p>
          Our Service may link to third-party websites. We do not control their content or privacy practices.
        </p>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Children’s Privacy</h2>
        <p>
          Our Service is not intended for users under 18. We do not knowingly collect personal data from children.
        </p>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. You will be notified of changes, and the latest version will always be available here.
        </p>
      </section>

      <section className="space-y-4 mt-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          For any questions about this Privacy Policy, please email us at: <a href="mailto:info@itshaala.com" className="text-blue-600 underline">info@itshaala.com</a>
        </p>
      </section>
    </div>
  </main>
  );
}

import ArtifactDonationForm from "@/components/doacoes/DonationForm";

export default function DonationPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 py-16 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="container mx-auto">
          <ArtifactDonationForm />
        </div>
      </section>
    </main>
  );
}

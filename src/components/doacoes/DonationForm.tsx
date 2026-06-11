"use client";

import { useState } from "react";
import { FaLaptopCode, FaUser, FaRegCheckCircle } from "react-icons/fa";

interface FormData {
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  artifactName: string;
  artifactYear: string;
  artifactCategory: string;
  artifactCondition: string;
  artifactDescription: string;
  artifactPhotos: FileList | null;
}

const ArtifactDonationForm = () => {
  const [formData, setFormData] = useState<FormData>({
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    artifactName: "",
    artifactYear: "",
    artifactCategory: "",
    artifactCondition: "",
    artifactDescription: "",
    artifactPhotos: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const categories = [
    "Computador Pessoal",
    "Console/Game",
    "Periférico",
    "Componente Interno",
    "Software",
    "Outro",
  ];
  const conditions = [
    "Novo/Lacrado",
    "Em bom estado (funcionando)",
    "Com defeito (parado)",
    "Apenas para peças",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, artifactPhotos: e.target.files }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulação de envio de dados para o backend
    console.log("Dados do Formulário:", formData);

    try {
      // 1. **BACKEND LOGIC HERE:**
      //    * Enviar os dados do formulário (incluindo metadados das fotos)
      //    * Fazer upload dos arquivos (fotos) para um serviço de armazenamento (AWS S3, Google Cloud Storage, etc.)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula um delay de 2s

      setIsSubmitted(true);
      // Limpar formulário após sucesso (opcional)
      // setFormData(...)
    } catch (error) {
      console.error("Erro ao enviar doação:", error);
      alert("Houve um erro no envio. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 text-center">
        <FaRegCheckCircle className="text-green-500 mx-auto mb-6" size={60} />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Proposta de Doação Enviada!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Agradecemos imensamente seu interesse em apoiar o museu.
        </p>
        <p className="text-md text-gray-700">
          Nossa equipe de curadoria analisará a sua proposta e entrará em
          contato com você em até **5 dias úteis** no email fornecido (
          {formData.donorEmail}) para discutir a logística de coleta ou envio.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-8 bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 transition"
        >
          Doar Outro Item
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 lg:p-12">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-2">
        Doação de Objetos
      </h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Ajude a preservar a história da tecnologia. Preencha o formulário abaixo
        para iniciar o processo de doação de seu item.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="border border-gray-200 rounded-xl p-6 bg-gray-50">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
            <FaUser className="mr-3 text-blue-500" /> 1. Informações do Doador
          </h3>
          <p className="text-gray-600 mb-6">
            Usaremos estas informações apenas para entrar em contato sobre a
            doação.
          </p>
          <div className="text-black grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              name="donorName"
              placeholder="Seu Nome Completo"
              value={formData.donorName}
              onChange={handleChange}
              required
              className="p-3 border  border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition col-span-1 md:col-span-3"
            />
            <input
              type="email"
              name="donorEmail"
              placeholder="E-mail de Contato"
              value={formData.donorEmail}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition col-span-1 md:col-span-2"
            />
            <input
              type="tel"
              name="donorPhone"
              placeholder="Telefone (WhatsApp)"
              value={formData.donorPhone}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center mb-4">
            <FaLaptopCode className="mr-3 text-green-500" /> 2. Detalhes do
            Material
          </h3>

          <div className="text-black grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="artifactName"
              placeholder="Nome do Item (Ex: Apple II, Atari 2600, etc.)"
              value={formData.artifactName}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition col-span-1 md:col-span-2"
            />

            {/* Categoria */}
            <select
              name="artifactCategory"
              value={formData.artifactCategory}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition bg-white"
            >
              <option value="" disabled>
                Selecione a Categoria*
              </option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Ano/Época */}
            <input
              type="text"
              name="artifactYear"
              placeholder="Ano ou Década (Ex: 1983 ou Anos 90)"
              value={formData.artifactYear}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition"
            />

            {/* Condição */}
            <select
              name="artifactCondition"
              value={formData.artifactCondition}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition bg-white"
            >
              <option value="" disabled>
                Selecione a Condição*
              </option>
              {conditions.map((cond) => (
                <option key={cond} value={cond}>
                  {cond}
                </option>
              ))}
            </select>
          </div>

          <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
            Descrição detalhada do item e histórico (Opcional, mas muito útil)
          </label>
          <textarea
            name="artifactDescription"
            placeholder="Conte a história do item, se funciona, se tem acessórios e por que ele é especial."
            rows={4}
            value={formData.artifactDescription}
            onChange={handleChange}
            className="w-full p-3 border text-black border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition"
          />

          <label className="block text-sm font-medium text-gray-700 mt-6 mb-2">
            Fotos do Item (Máximo 5 fotos)
          </label>
          <input
            type="file"
            name="artifactPhotos"
            onChange={handleFileChange}
            accept="image/*"
            multiple
            className="w-full p-3 border border-gray-300 rounded-lg bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
          />
        </div>

        {/* Botão de Envio */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full text-white text-xl font-bold py-4 rounded-lg transition-all shadow-lg flex items-center justify-center gap-3 ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 transform hover:scale-[1.01]"
          }`}
        >
          {isSubmitting ? (
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : (
            "Enviar Proposta de Doação"
          )}
        </button>
        <p className="text-sm text-gray-500 text-center mt-4">
          O envio do formulário não garante a aceitação imediata da doação.
        </p>
      </form>
    </div>
  );
};

export default ArtifactDonationForm;

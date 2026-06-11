import Link from "next/link";
import Social from "./Social";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const startYear = 2025;
  const yearDisplay =
    startYear === currentYear ? currentYear : `${startYear} - ${currentYear}`;
  const companyName = "UDC";

  return (
    <footer className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 text-center py-6 mt-auto border-t border-gray-200 dark:border-gray-800">
      <div className="mmax-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 md:gap-40 items-start md:justify-items-center">
        <div className="col-span-1 pt-2 flex flex-col items-center text-center">
          <p className="font-semibold mb-2">Parcerias:</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://www.instagram.com/lixotec/"
                target="_blank"
                className="font-semibold"
              >
                Lixotec
              </a>
            </li>
          </ul>
        </div>

        <div className="col-span-1 pt-2 flex flex-col items-center text-center">
          <ul className="space-y-2 font-semibold">
            {/*<li>
              <Link href="/visitas">Visitas</Link>
            </li>*/}
            <li>
              <Link href="/doacoes">Doações</Link>
            </li>
            <li>
              <Link href="/jornal">Jornal</Link>
            </li>
            <li>
              <Link href="/podcast">Podcast</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center py-4 text-center">
          <Social />
        </div>
      </div>
      <div className="text-xs flex justify-center mt-4">
        <p>
          &copy; {yearDisplay} {companyName}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { ToggleTheme } from "./ToggleTheme";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl flex items-center gap-x-6 px-4 py-3">
        <Link className="flex items-center gap-x-2" href="/">
          <span className="font-extrabold text-xl text-gray-900 dark:text-blue-300 uppercase leading-tight">
            Museu <br />
            Tecnológico
          </span>
        </Link>

        <nav className="ml-auto">
          <ul className="flex items-center gap-x-6 justify-end">
            <li className="border-b-2 border-transparent hover:border-gray-900 dark:hover:border-blue-300">
              <Link
                className="font-semibold text-gray-900 dark:text-blue-300 text-base"
                href="/"
              >
                Sobre o Museu
              </Link>
            </li>
            {/*<li className="border-b-2 border-transparent hover:border-gray-900 dark:hover:border-blue-300">
              <Link
                className="font-semibold text-gray-900 dark:text-blue-300 text-base"
                href="/visitas"
              >
                Visitas
              </Link>
            </li>*/}
            <li className="border-b-2 border-transparent hover:border-gray-900 dark:hover:border-blue-300">
              <Link
                className="font-semibold text-gray-900 dark:text-blue-300 text-base"
                href="/doacoes"
              >
                Doações
              </Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-900 dark:hover:border-blue-300">
              <Link
                className="font-semibold text-gray-900 dark:text-blue-300 text-base"
                href="/jornal"
              >
                Jornal
              </Link>
            </li>
            <li className="border-b-2 border-transparent hover:border-gray-900 dark:hover:border-blue-300">
              <Link
                className="font-semibold text-gray-900 dark:text-blue-300 text-base"
                href="/podcast"
              >
                Podcast
              </Link>
            </li>
            <li className="pl-2">
              <ToggleTheme className="text-gray-600 dark:text-gray-300 bg-transparent hover:bg-transparent" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

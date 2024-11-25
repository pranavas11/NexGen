export const PriceCard = () => {
    return (
        <div className="mx-auto  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">
            <div className="flex flex-wrap gap-2  sm:items-center  md:gap-8 xs: justify-center ">
                <div className="rounded-2xl border border-white  p-6 shadow-sm sm:order-last sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-white-900">
                            Pro
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-white-900 sm:text-4xl">
                                99$
                            </strong>

                            <span className="text-sm font-medium text-white-700">
                                /month
                            </span>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-500">
                                Unlimited Groups
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                5GB of storage{" "}
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Email support{" "}
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Help center access{" "}
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Phone support{" "}
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Community access{" "}
                            </span>
                        </li>
                    </ul>

                    <a
                        href="#"
                        className="mt-8 block rounded-full border border-white-600 bg-white-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-themeGray  active:text-white-500"
                    >
                        Get Started
                    </a>
                </div>
                <div className="rounded-2xl border border-white-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-white-900">
                            Free
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-white-900 sm:text-4xl">
                                {" "}
                                0${" "}
                            </strong>

                            <span className="text-sm font-medium text-white-700">
                                /month
                            </span>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">3 groups</span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                2GB of storage
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Email support{" "}
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Help center access{" "}
                            </span>
                        </li>
                    </ul>

                    <a
                        href="#"
                        className="mt-8 block rounded-full border border-white-600 bg-white px-12 py-3 text-center text-sm font-medium text-black hover:text-white hover:bg-transparent  active:text-white-500"
                    >
                        Get Started
                    </a>
                </div>
                <div className="rounded-2xl border border-white-200 p-6 shadow-sm sm:px-8 lg:p-12">
                    <div className="text-center">
                        <h2 className="text-lg font-medium text-white-900">
                            Premium
                            <span className="sr-only">Plan</span>
                        </h2>

                        <p className="mt-2 sm:mt-4">
                            <strong className="text-3xl font-bold text-white-900 sm:text-4xl">
                                {" "}
                                49${" "}
                            </strong>

                            <span className="text-sm font-medium text-white-700">
                                /month
                            </span>
                        </p>
                    </div>

                    <ul className="mt-6 space-y-2">
                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                Unlimited Groups
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                2GB of storage{" "}
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Email support{" "}
                            </span>
                        </li>

                        <li className="flex items-center gap-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-5 text-white-700"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                />
                            </svg>

                            <span className="text-white-700">
                                {" "}
                                Help center access{" "}
                            </span>
                        </li>
                    </ul>

                    <a
                        href="#"
                        className="mt-8 block rounded-full border border-white-600 bg-white px-12 py-3 text-center text-sm font-medium text-black hover:text-white hover:bg-transparent  active:text-white-500"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    )
}

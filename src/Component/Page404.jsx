import Header from "./Header";
import Theam from "./Theam";
import Footer from "./footer";

export default function Page404() {
    return (
        <>

            <Header />
            <Theam />
            <main className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
                <div className="text-center">
                    <p className="text-base font-semibold text-indigo-600">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="https://parthg.us.auth0.com/login?state=hKFo2SA2ZV9jTHNsVzJNMlg1SFEwajFPa3FDeUZoUUxhZXJGV6FupWxvZ2luo3RpZNkgd2NwWGd6Tzd3MERhdjdnTVU1eFdNNjZmamt3REhyVTijY2lk2SBVcTJFcWh5aXFrUkxraEN3b3ZoRko2U0t1SHNzam13SQ&client=Uq2EqhyiqkRLkhCwovhFJ6SKuHssjmwI&protocol=oauth2&scope=openid%20profile%20email&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=code&response_mode=query&nonce=UVpDb25HYUkyVXZ2cC54a1plNWhyTTN1dFNtSU1TU2UxcG1abW40bnladQ%3D%3D&code_challenge=E2kJ-f7RJWLSRgEG6vEnBZC6M0vYqTlbWU0BM7cVLxE&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMi4yLjQifQ%3D%3D"
                            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </a>
                        <a href="/Contact" className="text-sm font-semibold text-gray-900">
                            Contact support <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </main>


        </>
    )
}

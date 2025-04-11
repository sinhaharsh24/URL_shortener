import * as React from "react";
import axios from "axios";
import { serverUrl } from "../../helpers/Constants";

interface IFormContainerProps {}

const FormContainer: React.FunctionComponent<IFormContainerProps> = () => {
  const [fullUrl, setFullUrl] = React.useState<string>("");
  const [shortUrl, setShortUrl] = React.useState<string>("");
  const baseUrl =
  import.meta.env.MODE === "development"
    ? "http://localhost:5003/api/shortUrl"
    : "https://urlshortner.link";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${serverUrl}/shortUrl`, {
        fullUrl: fullUrl,
      });
      setShortUrl(`${baseUrl}/${res.data.shortUrl}`); // Adjust according to your API response key
      setFullUrl("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleCopy = () => {
    if (shortUrl) {
      navigator.clipboard.writeText(shortUrl);
      setShortUrl(""); // Clear the input box after copying
    }
  };

  return (
    <div className="container mx-auto max-w-screen-2xl p-2">
      <div className="bg-banner my-8 rounded-xl bg-cover bg-center">
        <div className="w-full h-full p-20 rounded-lg backdrop-brightness-50">
          <h2 className="text-white text-4xl text-center pb-4">URL shortner</h2>
          <p className="text-white text-center pb-2 text-xl font-extralight">
            Paste your Long Url here
          </p>
          <p className="text-white text-center pb-4 text-sm font-extralight">
            This is a website which can be used to shorten a long URL
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-xl mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none text-slate-800">
                  urlshortner.link
                </div>
                <input
                  type="text"
                  placeholder="Paste your link here"
                  required
                  className="block w-full p-4 ps-32 text-sm text-gray-900 border-gray-300 rounded-lg bg-white"
                  value={fullUrl}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFullUrl(e.target.value)
                  }
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white rounded-lg bg-green-600 border border-green-700"
                >
                  Short it
                </button>
              </div>

              {/* Shortened URL display & Copy */}
              <div className="grid grid-cols-8 gap-2 w-full max-w-xl items-center justify-center">
                <input
                  type="text"
                  className="col-span-6 bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg p-2.5"
                  value={shortUrl}
                  disabled
                  readOnly
                />
                <button
                  onClick={handleCopy}
                  type="button"
                  className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center"
                >
                  Copy
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;
